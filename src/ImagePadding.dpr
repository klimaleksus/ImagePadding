program ImagePadding;

{$APPTYPE CONSOLE}

uses
  Classes,
  SysUtils,
  Graphics,
  PNGImage;

function LoadImage(Path: AnsiString): TPNGObject;
begin
  Result := TPNGObject.Create();
  try
    Result.LoadFromFile(Path);
    Exit;
  except
  end;
  FreeAndNil(Result);
end;

function MakeImage(Width, Height: Integer): TPNGObject;
begin
  Result := nil;
  if (Width < 0) or (Height < 0) then
    Exit;
  Result := TPNGObject.Create();
  try
    Result.CreateBlank(COLOR_RGBALPHA, 8, Width, Height);
    Exit;
  except
  end;
  FreeAndNil(Result);
end;

function Main(Src, Dst: AnsiString; Width, Height, Align: Integer): Boolean;
var
  Png, Alp: TPNGObject;
  W, H, I, J, X, Y: Integer;
  Left, Top, Right, Bottom, Min, Max: Integer;
  Scan: pByteArray;
  Warn, Square: Boolean;
begin
  Result := False;
  Square := False;
  if Align < 0 then
  begin
    Square := True;
    Align := -Align;
  end;
  Warn := False;
  if Align > 9 then
  begin
    Warn := True;
    Align := Align div 10;
  end;
  Png := LoadImage(Src);
  if (Png = nil) or (Src = '') or (Dst = '') or (Png.AlphaScanline[0] = nil) then
  begin
    Png.Free();
    Exit;
  end;
  W := Png.Width;
  H := Png.Height;
  Left := W;
  Top := H;
  Right := -1;
  Bottom := -1;
  for I := 0 to H - 1 do
  begin
    Min := W;
    Max := -1;
    Scan := Png.AlphaScanline[I];
    for J := 0 to W - 1 do
    begin
      if Scan[J] > 0 then
      begin
        if J < Min then
          Min := J;
        if J > Max then
          Max := J;
      end;
    end;
    if Max <> -1 then
    begin
      if I < Top then
        Top := I;
      if I > Bottom then
        Bottom := I;
      if Min < Left then
        Left := Min;
      if Max > Right then
        Right := Max;
    end;
  end;
  Alp := nil;
  if Right = -1 then
  begin
    if Width < 1 then
      Width := 1;
    if Height < 1 then
      Height := 1;
    Alp := MakeImage(Width, Height);
  end
  else
  begin
    try
      W := Right - Left + 1;
      if Width < 1 then
      begin
        X := -Width;
        Width := W + X;
        if Align in [2, 5, 8] then
          Inc(Width, X);
      end
      else
      begin
        if W > Width then
        begin
          Width := W;
          if Warn then
            Abort;
        end;
        X := (Width - W) div 2;
      end;
      H := Bottom - Top + 1;
      if Height < 1 then
      begin
        Y := -Height;
        Height := H + Y;
        if Align in [4, 5, 6] then
          Inc(Height, Y);
      end
      else
      begin
        if H > Height then
        begin
          Height := H;
          if Warn then
            Abort;
        end;
        Y := (Height - H) div 2;
      end;
    except
      Writeln('ERROR: image cannot fit!');
      Png.Free();
      Exit;
    end;
    if (X >= 0) and (Y >= 0) then
    begin
      if Square then
      begin
        if Width > Height then
        begin
          Inc(Y, (Width - Height) div 2);
          Height := Width;
        end
        else
        begin
          Inc(X, (Height - Width) div 2);
          Width := Height;
        end;
      end;
      if Align in [9, 6, 3] then
        X := Width - W;
      if Align in [7, 4, 1] then
        X := 0;
      if Align in [1, 2, 3] then
        Y := Height - H;
      if Align in [7, 8, 9] then
        Y := 0;
      Alp := MakeImage(Width, Height);
      for I := 0 to H - 1 do
      begin
        Move((PAnsiChar(Png.Scanline[I + Top]) + Left * 3)^, (PAnsiChar(Alp.Scanline
          [I + Y]) + X * 3)^, W * 3);
        Move(Png.AlphaScanline[I + Top][Left], Alp.AlphaScanline[I + Y][X], W);
      end;
    end;
  end;
  if Alp <> nil then
  try
    Alp.SaveToFile(Dst);
    Result := True;
  except
    on E: Exception do
      Writeln(E.message);
  end;
  Png.Free();
  Alp.Free();
end;

var
  s: string;
  Width, Height, Align: Integer;

begin
  Width := 0;
  Height := 0;
  Align := 0;
  try
    if ParamCount <> 5 then
      Abort;
    Width := StrToInt(ParamStr(3));
    Height := StrToInt(ParamStr(4));
    Align := StrToInt(ParamStr(5));
    if (Align = 0) or (Align < -90) or (Align > 90) then
      Abort;
    if Align > 9 then
      if (Align mod 10) <> 0 then
        Abort;
    if Align < -9 then
      if ((-Align) mod 10) <> 0 then
        Abort;
  except
    Writeln('ImagePadding v1.1, by Kly_Men_COmpany!  Usage:');
    Writeln('  ImagePadding.exe "in.png" "out.png" (Width) (Height) (Align)');
    Writeln('This program will take transparent PNG image and crop it:');
    Writeln('  all invisible pixels from each side will be removed.');
    Writeln('Then, your image will be padded to fit a desired area.');
    Writeln('  You must provide all 5 arguments:');
    Writeln('"in.png"- input image (full color, no palette),');
    Writeln('  only .png format is supported;');
    Writeln('"out.png" - to save the result, can be the same as input;');
    Writeln('(Width) - integer number: positive to set an absolute width,');
    Writeln('  or negative to set padding;');
    Writeln('(Height) - same for height,');
    Writeln('  you may want to provide 0 and 0 to disable padding;');
    Writeln('(Align) - source picture alignment in result canvas, plus options.');
    Writeln('  This is an integer value. Number 5 will align to the center,');
    Writeln('  this is what you may want. Refer to NumPad keyboard: for example,');
    Writeln('  number 7 will align to top-left corner, and number 6 to middle-right;');
    Writeln('  Specify negative value (-1 to -9) to force the image to be square');
    Writeln('  (max of width and height); type zero after your value (10, 50, -90, etc)');
    Writeln('  to force exit with error if your image cannot be fit to desired area');
    Writeln('  (otherwise no padding will occur by default).');
    Writeln('');
    Writeln('[Press ENTER to exit]');
    Readln(s);
    Halt(10);
  end;
  try
    if not Main(ParamStr(1), ParamStr(2), Width, Height, Align) then
      Abort;
  except
    on E: Exception do
    begin
      Writeln(E.message);
      Writeln('[Press ENTER to exit]');
      Readln(s);
    end;
  end;

end.

