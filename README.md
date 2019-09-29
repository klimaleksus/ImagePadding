## Touhou Hisoutensoku sticker pack for Telegram!

Hey, I made some stickers. The images are extracted from [Touhou Project 12.3 - Touhou Hisoutensoku](https://hisouten.koumakan.jp/) (and possibly from [Touhou Project 10.5 Hisouten - Scarlet Weather Rhapsody](https://en.touhouwiki.net/wiki/Scarlet_Weather_Rhapsody)).

I used [FrameDisplayMod](https://hisouten.koumakan.jp/wiki/Frametools) program to save sprite images, then [ImageResizer-r133](https://www.adventuregamestudio.co.uk/forums/index.php?topic=47954.0) program to up-scale them.

Finally, I made my own program (this is the reason why repository is created), [ImagePadding](./src/ImagePadding.dpr) to pad all images to fit 512×512 pixel for Telegram stickers format.

I did my best to filter manually and choose the most diverse collection of 240 final stickers (20 characters, ~12 frames each) from thousands of candidates.

### Install stickers in your Telegram:

-  [Touhou Hisoutensoku: Pack 1 of 2](https://telegram.me/addstickers/TouhouHisoutensoku_1)
- [Touhou Hisoutensoku: Pack 2 of 2](https://telegram.me/addstickers/TouhouHisoutensoku_2)

### Preview sticker images:

Just for fun, I cropped them and made a collection to use with my [FindTwin](https://klimaleksus.github.io/FindTwin/) engine (refer there for gameplay instructions and source code).

**Play the game here:
[https://klimaleksus.github.io/ImagePadding/Touhou-Hisoutensoku-Telegram-Stickers.htm](https://klimaleksus.github.io/ImagePadding/Touhou-Hisoutensoku-Telegram-Stickers.htm)**

### Download actual ImagePadding program (Win32):

Just [clone](https://github.com/klimaleksus/ImagePadding/archive/master.zip) this repository (but it will include all images, ~5.5 Mb), ~~or refer to [Releases](https://github.com/klimaleksus/RepeatRemove/releases/tag/Releases) page and~~ download clean [ImagePadding1V1.rar](http://klimaleksus.narod.ru/Files/6/ImagePadding1V1.rar) (but this very link is a mirror) ~~from there~~.

It should be run from the command prompt or a batch file. The help message looks like this:

```
ImagePadding v1.1, by Kly_Men_COmpany!  Usage:
  ImagePadding.exe "in.png" "out.png" (Width) (Height) (Align)
This program will take transparent PNG image and crop it:
  all invisible pixels from each side will be removed.
Then, your image will be padded to fit a desired area.
  You must provide all 5 arguments:
"in.png"- input image (full color, no palette),
  only .png format is supported;
"out.png" - to save the result, can be the same as input;
(Width) - integer number: positive to set an absolute width,
  or negative to set padding;
(Height) - same for height,
  you may want to provide 0 and 0 to disable padding;
(Align) - source picture alignment in result canvas, plus options.
  This is an integer value. Number 5 will align to the center,
  this is what you may want. Refer to NumPad keyboard: for example,
  number 7 will align to top-left corner, and number 6 to middle-right;
  Specify negative value (-1 to -9) to force the image to be square
  (max of width and height); type zero after your value (10, 50, -90, etc)
  to force exit with error if your image cannot be fit to desired area
  (otherwise no padding will occur by default).
```

### EOF
