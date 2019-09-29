﻿"use strict";var soku=["1_01_01","1_01_02","1_01_03","1_01_04","1_01_05","1_01_06","1_01_07","1_01_08","1_01_09","1_01_10","1_01_11","1_01_12","1_02_01","1_02_02","1_02_03","1_02_04","1_02_05","1_02_06","1_02_07","1_02_08","1_02_09","1_02_10","1_02_11","1_02_12","1_03_01","1_03_02","1_03_03","1_03_04","1_03_05","1_03_06","1_03_07","1_03_08","1_03_09","1_03_10","1_03_11","1_03_12","1_04_01","1_04_02","1_04_03","1_04_04","1_04_05","1_04_06","1_04_07","1_04_08","1_04_09","1_04_10","1_04_11","1_04_12","1_05_01","1_05_02","1_05_03","1_05_04","1_05_05","1_05_06","1_05_07","1_05_08","1_05_09","1_05_10","1_05_11","1_05_12","1_06_01","1_06_02","1_06_03","1_06_04","1_06_05","1_06_06","1_06_07","1_06_08","1_06_09","1_06_10","1_06_11","1_06_12","1_07_01","1_07_02","1_07_03","1_07_04","1_07_05","1_07_06","1_07_07","1_07_08","1_07_09","1_07_10","1_07_11","1_07_12","1_08_01","1_08_02","1_08_03","1_08_04","1_08_05","1_08_06","1_08_07","1_08_08","1_08_09","1_08_10","1_08_11","1_08_12","1_09_01","1_09_02","1_09_03","1_09_04","1_09_05","1_09_06","1_09_07","1_09_08","1_09_09","1_09_10","1_09_11","1_09_12","1_10_01","1_10_02","1_10_03","1_10_04","1_10_05","1_10_06","1_10_07","1_10_08","1_10_09","1_10_10","1_10_11","1_10_12","2_01_01","2_01_02","2_01_03","2_01_04","2_01_05","2_01_06","2_01_07","2_01_08","2_01_09","2_01_10","2_01_11","2_01_12","2_02_01","2_02_02","2_02_03","2_02_04","2_02_05","2_02_06","2_02_07","2_02_08","2_02_09","2_02_10","2_02_11","2_02_12","2_03_01","2_03_02","2_03_03","2_03_04","2_03_05","2_03_06","2_03_07","2_03_08","2_03_09","2_03_10","2_03_11","2_03_12","2_04_01","2_04_02","2_04_03","2_04_04","2_04_05","2_04_06","2_04_07","2_04_08","2_04_09","2_04_10","2_04_11","2_05_01","2_05_02","2_05_03","2_05_04","2_05_05","2_05_06","2_05_07","2_05_08","2_05_09","2_05_10","2_05_11","2_05_12","2_06_01","2_06_02","2_06_03","2_06_04","2_06_05","2_06_06","2_06_07","2_06_08","2_06_09","2_06_10","2_06_11","2_06_12","2_07_01","2_07_02","2_07_03","2_07_04","2_07_05","2_07_06","2_07_07","2_07_08","2_07_09","2_07_10","2_07_11","2_08_01","2_08_02","2_08_03","2_08_04","2_08_05","2_08_06","2_08_07","2_08_08","2_08_09","2_08_10","2_08_11","2_08_12","2_09_01","2_09_02","2_09_03","2_09_04","2_09_05","2_09_06","2_09_07","2_09_08","2_09_09","2_09_10","2_09_11","2_09_12","2_09_13","2_10_01","2_10_02","2_10_03","2_10_04","2_10_05","2_10_06","2_10_07","2_10_08","2_10_09","2_10_10","2_10_11","2_10_12","2_10_13"];function waifu_provider(){return{providers:{"Touhou 12.3":function(e){return e<0?soku.length:"img/"+soku[e]+".png"}},waifu:function(){return this._prv?--this._idx<0&&(this._remake(),--this._idx<0)?"":this._fnc[this._prv](this._arr[this._idx]):""},start:function(e){if(!this._fnc){if(this._fnc={},window.local_waifus)for(var t in local_waifus)this._fnc[t]=function(e,t){return function(e){return e<0?t.length:t[e]}}(0,local_waifus[t]);for(var t in this.providers)this._fnc[t]||(this._fnc[t]=this.providers[t])}if(this._idx=0,!e){var a=[];for(var t in this._fnc)a.push(t);return a}var i=this._fnc[e];if(!i)return 0;var _=i(-1);return _?(this._prv=e,_):0},_remake:function(){for(var e=this._fnc[this._prv](-1),t=[],a=0;a<e;a++)t.push([a,Math.random()]);t.sort(function(e,t){return e[1]-t[1]}),this._arr=t.map(function(e){return e[0]}).sort(compare_shuffle),this._idx=t.length},_fnc:null,_arr:[],_idx:0,_prv:""}}function game_options(e,t,a){switch(game_options.board_width=e,game_options.board_height=t,game_options.board_id=document.getElementById("game_board"),a&&(game_options.old_dim=a),game_options.old_dim){case 10:game_options.all_sizes=[[10,10],[11,9],[12,8],[14,7],[16,6],[20,5],[25,4],[33,3],[49,2],[97,1]];break;case 9:game_options.all_sizes=[[9,9],[10,8],[11,7],[13,6],[16,5],[20,4],[26,3],[39,2],[79,1]];break;case 8:game_options.all_sizes=[[8,8],[9,7],[10,6],[12,5],[16,4],[21,3],[31,2],[61,1]];break;case 7:game_options.all_sizes=[[7,7],[8,6],[10,5],[12,4],[16,3],[25,1],[49,1]];break;case 6:game_options.all_sizes=[[6,6],[7,5],[9,4],[12,3],[18,2],[35,1]];break;case 5:game_options.all_sizes=[[5,5],[6,4],[8,3],[12,2],[25,1]];break;case 4:game_options.all_sizes=[[4,4],[6,3],[8,2],[9,2],[17,1]];break;case 3:game_options.all_sizes=[[3,3],[4,2],[5,2],[8,1]];break;default:return!1}var i,_;e>=t?(i=[e,t],_=1):(i=[t,e],_=-1);for(var n=game_options.all_sizes.length;n--;)game_options.all_sizes[n].push(n);var o=game_options.all_sizes.reduce(function(e,t){return rect_area(rect_fit(e,i))>rect_area(rect_fit(t,i))?e:t},game_options.all_sizes[0]);return _*=o[2],i=rect_fit(o,i),_<0&&(i=[i[1],i[0]],o=[o[1],o[0]]),i=[e,t],game_options.tile_width=i[0]/o[0]|0,game_options.tile_height=i[1]/o[1]|0,game_options.board_width=i[0],game_options.board_height=i[1],game_options.size_mode=_,game_options.min_tiles=rect_area(o),game_options.max_tiles=game_options.all_sizes.reduce(function(e,t){var a=rect_area(t);return a>e?a:e},0),game_options.Mins=game_options.all_sizes.reduce(function(e,t){var a=rect_area(t);return a<e?a:e},game_options.max_tiles),!0}function board_resize(e){return-2==e?3:-1==e?10:(game_options(Math.max(document.documentElement.clientWidth,window.innerWidth||0),Math.max(document.documentElement.clientHeight,window.innerHeight||0),e),game_options.board_id.style.width=game_options.board_width+"px",void(game_options.board_id.style.height=game_options.board_height+"px"))}function compare_shuffle(){return.5-Math.random()}function rect_fit(e,t){var a=e[0]*t[1]/e[1];return a>t[0]?[t[0],e[1]*t[0]/e[0]]:[a,t[1]]}function rect_area(e){return e[0]*e[1]}function class_del(e,t){e.className=(e.className+" ").replace(" "+t+" "," ").trim()}function class_add(e,t){class_del(e,t),e.className+=" "+t}function get_opacity(e){return e._my_opacity_||0}function set_opacity(e,t){return e._my_opacity_=t,animator.simple?t<=.1?e.style.opacity=0:t>=.9?e.style.opacity=1:void(e.style.opacity=.5):e.style.opacity=t}function tile_mousemove(e){if(animator.ready){var t=e.target;class_add(t.parentNode,"current"),animator_show(t),animator.curtile||(animator.curtile=t),t!=animator.curtile&&(animator.curtile!=animator.seltile&&class_del(animator.curtile.parentNode,"current"),animator_hide(animator.curtile),animator.curtile=t)}}function tile_touchmove(e){if(!e.changedTouches||!e.changedTouches[0])return!0;e.preventDefault();var t=document.elementFromPoint(e.changedTouches[0].pageX,e.changedTouches[0].pageY);return t&&"IMG"==t.tagName?(tile_mousemove({target:t}),!1):void 0}function tile_touchaction(e){if(!e.changedTouches||!e.changedTouches[0])return!0;e.preventDefault();var t=document.elementFromPoint(e.changedTouches[0].pageX,e.changedTouches[0].pageY);return t&&"IMG"==t.tagName?(tile_mouseaction({target:t}),!1):void 0}function tile_mouseaction(e){if(animator.ready){tile_mousemove(e);var t=e.target;class_add(t.parentNode,"current"),animator.seltile||(animator.seltile=t),t!=animator.seltile&&(t.src==animator.seltile.src?(class_del(t.parentNode,"current"),class_del(animator.seltile.parentNode,"current"),animator_done([t,t.parentNode],[animator.seltile,animator.seltile.parentNode])):(class_del(animator.seltile.parentNode,"current"),animator.seltile=t))}}function tile_events(e,t){e.removeEventListener("mousemove",tile_mousemove),e.removeEventListener("mousedown",tile_mouseaction),e.removeEventListener("mouseup",tile_mouseaction),e.removeEventListener("touchmove",tile_touchmove),e.removeEventListener("touchstart",tile_touchaction),e.removeEventListener("touchend",tile_touchaction),e.removeEventListener("touchcancel",tile_touchaction),t&&(e.addEventListener("mousemove",tile_mousemove),e.addEventListener("mousedown",tile_mouseaction),e.addEventListener("mouseup",tile_mouseaction),e.addEventListener("touchmove",tile_touchmove),e.addEventListener("touchstart",tile_touchaction),e.addEventListener("touchend",tile_touchaction),e.addEventListener("touchcancel",tile_touchaction))}function new_tile(e,t){var a,i,_,n,o,r;if(!animator.stop)return t?(o=e,a=encodeURI(o.waifu())):r=e,(i=document.createElement("div")).className="game_tile_border",game_options.board_id.appendChild(i),t?((_=document.createElement("img")).className="game_tile",_.addEventListener("load",function(e){t(n)}),_.addEventListener("error",function(e){console.warn("Image error",_.src),remove_tile(_,i),setTimeout(function(){new_tile(o,t)},500)}),_.src=a):(_=r[0].cloneNode()).className="game_tile mirror",tile_events(_,!0),set_opacity(_,0),i.appendChild(_),place_tile(n=[_,i],-1),n}function place_tile(e,t){if(e[1].style.width=game_options.tile_width+"px",e[1].style.height=game_options.tile_height+"px",e[0].width=game_options.tile_width,e[0].height=game_options.tile_height,t<0||t>=game_options.min_tiles)return e[1].style.left=-2*game_options.tile_width+"px",void(e[1].style.top=-2*game_options.tile_height+"px");var a,i,_;_=Math.abs(game_options.size_mode),game_options.size_mode<0?(a=t%game_options.all_sizes[_][1],i=t/game_options.all_sizes[_][1]|0):(a=t%game_options.all_sizes[_][0],i=t/game_options.all_sizes[_][0]|0),e[1].style.left=game_options.tile_width*a+"px",e[1].style.top=game_options.tile_height*i+"px"}function place_all(){for(var e=animator.tiles.length;e--;)animator.tiles[e]&&place_tile(animator.tiles[e],e)}function place_next(){if(!(animator.cache.length<1)&&animator.ready){for(var e=[],t=animator.tiles.length;t--;)animator.tiles[t]||e.push(t);if(!(e.length<2)){e.sort(compare_shuffle);var a=e[0],i=e[1];animator.cache.sort(compare_shuffle),animator.twins.sort(compare_shuffle);var _,n=animator.twins.pop(),o=animator.cache.pop();animator.tiles[a]=n,compare_shuffle()>0?(_=o,animator.twins.push(new_tile(o))):(_=new_tile(o),animator.twins.push(o)),animator.tiles[i]=_;var r=Math.round(Math.random()*(game_options.max_tiles-game_options.min_tiles));r>0&&compare_shuffle()>0&&(r=animator.tiles.length-r,animator.tiles[i]=animator.tiles[r],animator.tiles[r]=_,place_tile(_,r),_=animator.tiles[i]),place_tile(n,a),place_tile(_,i),setTimeout(request_tile,100)}}}function remove_tile(e,t){try{t.removeChild(e),game_options.board_id.removeChild(t)}catch(e){reset_game()}}function animator_ghost(e,t,a){var i=e[0];set_opacity(i,t),animator.simple&&(a=a<1?.5:2),i.style.width=game_options.tile_width*a+"px",i.style.height=game_options.tile_height*a+"px",i.style.left=e[1]-game_options.tile_width*a/2+"px",i.style.top=e[2]-game_options.tile_height*a/2+"px"}function animator(){document.title="Find Twin v1.0 (Touhou Hisoutensoku Telegram Stickers mod), by Kly_Men_COmpany!",animator.ready=!1,animator.stop=!1,animator.simple=!1,animator.target=0,animator.tiles=[],animator.cache=[],animator.toshow=[],animator.tohide=[],animator.toshrink=[],animator.toenlarge=[],animator.time=0,animator.points=0,animator.interval||(animator.interval=!0,setInterval(function(){var e,t,a,i,_;animator.ready&&(animator.time++,_=animator.time/40|0,i=animator.points+" / "+(_/60|0)+":"+("0"+_%60).substr(-2),document.title!=i&&(document.title=i));for(var n=animator.toshow.length;n--;)(t=get_opacity(e=animator.toshow[n]))>.99&&(t=1,animator.toshow[n]=animator.toshow[animator.toshow.length-1],animator.toshow.pop()),set_opacity(e,t+=(1-t)/4);for(n=animator.tohide.length;n--;)(t=get_opacity(e=animator.tohide[n]))<.01&&(t=0,animator.tohide[n]=animator.tohide[animator.tohide.length-1],animator.tohide.pop()),set_opacity(e,t+=(0-t)/8);for(n=animator.toshrink.length;n--;)t=(a=animator.toshrink[n])[3],t+=(0-t)/8,a[3]=t,animator_ghost(a,1,t),t<.04&&(animator.toshrink[n]=animator.toshrink[animator.toshrink.length-1],animator.toshrink.pop(),remove_tile(a[5],a[0]),a[4][0]>=0&&(animator.tiles[a[4][0]]=null),a[4][1]>=0&&(animator.tiles[a[4][1]]=null),place_next());for(n=animator.toenlarge.length;n--;)t=(a=animator.toenlarge[n])[3],t+=(1-t)/8,a[3]=t,animator_ghost(a,1-t,a[4]),a[4]+=t/8,t>.96&&(animator.toenlarge[n]=animator.toenlarge[animator.toenlarge.length-1],animator.toenlarge.pop(),remove_tile(a[5],a[0]))},25))}function animator_no(e,t){for(var a=e.length;a--;)if(e[a]==t){e[a]=e[e.length-1],e.pop();break}}function animator_show(e){animator_no(animator.tohide,e);for(var t=animator.toshow.length;t--;)if(animator.toshow[t]==e)return;animator.toshow.push(e)}function animator_hide(e){animator_no(animator.toshow,e);for(var t=animator.tohide.length;t--;)if(animator.tohide[t]==e)return;animator.tohide.push(e)}function animator_shrink(e,t,a){set_opacity(t,1),set_opacity(e,1),class_add(t,"ghost"),animator_no(animator.tohide,e),animator_no(animator.toshow,e),animator.toshrink.push([t,parseInt(t.style.left,10)+game_options.tile_width/2,parseInt(t.style.top,10)+game_options.tile_height/2,1,a,e])}function animator_enlarge(e,t){set_opacity(t,1),set_opacity(e,1),class_add(t,"ghost"),class_add(t,"overlay"),animator_no(animator.tohide,e),animator_no(animator.toshow,e),animator.toenlarge.push([t,parseInt(t.style.left,10)+game_options.tile_width/2,parseInt(t.style.top,10)+game_options.tile_height/2,0,1,e])}function animator_remove(e){var t=e[0];e[1];tile_events(t),animator_no(animator.toshow,t),animator_no(animator.tohide,t)}function request_tile(){!request_tile.active&&animator.ready&&(animator.cache.length>animator.target||(request_tile.active=!0,new_tile(animator.waifu,function(e){if(request_tile.active=!1,!animator.ready)return remove_tile(e[0],e[1]);place_tile(e,-1),animator.cache.push(e),animator.cache.length<animator.target&&setTimeout(request_tile,50),place_next()})))}function animator_done(e,t){animator.points++,animator.seltile=null,animator.curtile=null;for(var a=-1,i=-1,_=animator.tiles.length;_--;)animator.tiles[_]&&(animator.tiles[_][0]==e[0]&&(a=_),animator.tiles[_][0]==t[0]&&(i=_));animator_remove(e),animator_remove(t),animator_shrink(e[0],e[1],[a,i]),animator_enlarge(t[0],t[1])}function animator_cheat(e){e?class_add(game_options.board_id,"cheat"):class_del(game_options.board_id,"cheat")}function start_game(){if(!animator.stop){var e,t,a;if(e=animator.tiles,animator.tiles=[],e.forEach(function(e){set_opacity(e[0],0),class_del(e[1],"current"),place_tile(e,-1)}),!(t=e.length/4|0))return!1;var i=game_options.max_tiles-game_options.Mins;t<=i&&(t=i+1),e.sort(compare_shuffle);for(var _=0;_<t;_++)a=e.pop(),animator.tiles.push(a),animator.tiles.push(new_tile(a));for(animator.twins=[];animator.tiles.length<game_options.max_tiles;)a=e.pop(),compare_shuffle()>0?(animator.tiles.push(a),animator.twins.push(new_tile(a))):(animator.twins.push(a),animator.tiles.push(new_tile(a)));return animator.cache=e,animator.target=e.length,animator.tiles.sort(compare_shuffle),place_all(),animator.ready=!0,animator_cheat(animator.cheat),!0}}function create_tiles(e){if(!animator.stop){if(animator.waifu||(animator.waifu=e),animator.tiles.length<game_options.max_tiles||animator.tiles.length<14)return new_tile(animator.waifu,function(e){animator.stop||(set_opacity(e[0],1),class_add(e[1],"current"),animator.tiles.push(e),place_tile(e,animator.tiles.length-1),setTimeout(create_tiles,100))});setTimeout(function(){animator.stop||(animator.tiles.forEach(function(e){animator_hide(e[0])}),setTimeout(start_game,1100))},200)}}function reset_game(e){if(!animator.stop&&(e||"block"!=page_init.game_menu.style.display)){page_init.game_menu.style.display="none",page_init.game_board.style.display="block",animator.ready=!1,animator.stop=!0;for(var t=animator.tiles.length;t--;)animator.tiles[t]&&(set_opacity(animator.tiles[t][1],1),animator_hide(animator.tiles[t][1]));e?(game_options.board_id.innerHTML="",animator_cheat(!1),board_resize(page_init.board_size),animator(),animator.simple=!page_init.c_animate,animator.cheat=!page_init.c_fade,page_init.waifu.start(page_init.prov_name),create_tiles(page_init.waifu)):setTimeout(function(){game_options.board_id.innerHTML="",animator_cheat(!1),page_init.game_menu.style.display="block",page_init.game_board.style.display="none",page_init.in_menu=!0,animator.stop=!1},1500)}}function page_text(e){page_init.board_lt.disabled=page_init.board_size<4,page_init.board_gt.disabled=page_init.board_size>9,e&&(page_init.c_fade_id.checked=page_init.c_fade,page_init.c_animate_id.checked=page_init.c_animate),page_init.board_size_id.textContent=page_init.board_size+"×"+page_init.board_size,page_init.waifu_name.textContent=page_init.prov_name,page_init.waifu_size.textContent=page_init.prov_size}function page_waifu(e){var t=page_init.providers.indexOf(page_init.prov_name)+e;t<=0?(page_init.waifu_lt.disabled=!0,t=0):page_init.waifu_lt.disabled=!1,t>=page_init.providers.length-1?(page_init.waifu_gt.disabled=!0,t=page_init.providers.length-1):page_init.waifu_gt.disabled=!1,page_init.prov_name=page_init.providers[t],page_init.prov_size=page_init.waifu.start(page_init.prov_name),page_init.b_play.disabled=!page_init.prov_size}function page_init(){page_init.waifu=waifu_provider(),page_init.providers=page_init.waifu.start(),page_init.prov_name="Default",page_init.in_menu=!0,page_init.game_menu=document.getElementById("game_menu"),page_init.game_board=document.getElementById("game_board"),page_init.board_size=6,page_init.board_lt=document.getElementById("board_lt"),page_init.board_gt=document.getElementById("board_gt"),page_init.board_size_id=document.getElementById("board_size"),page_init.c_fade=!0,page_init.c_animate=!0,page_init.c_fade_id=document.getElementById("c_fade"),page_init.c_animate_id=document.getElementById("c_animate"),page_init.b_play=document.getElementById("b_play"),page_init.waifu_name=document.getElementById("waifu_name"),page_init.waifu_size=document.getElementById("waifu_size"),page_init.waifu_lt=document.getElementById("waifu_lt"),page_init.waifu_gt=document.getElementById("waifu_gt"),page_init.board_lt.addEventListener("click",function(e){page_init.board_size>board_resize(-2)&&page_init.board_size--,page_text()}),page_init.board_gt.addEventListener("click",function(e){page_init.board_size<board_resize(-1)&&page_init.board_size++,page_text()}),page_init.c_fade_id.addEventListener("click",function(e){page_init.c_fade=page_init.c_fade_id.checked,page_text()}),page_init.c_animate_id.addEventListener("click",function(e){page_init.c_animate=page_init.c_animate_id.checked,page_text()}),page_init.b_play.addEventListener("click",function(e){page_init.in_menu=!1,reset_game(!0)}),page_init.waifu_lt.addEventListener("click",function(e){page_waifu(-1),page_text()}),page_init.waifu_gt.addEventListener("click",function(e){page_waifu(1),page_text()}),page_waifu(0),page_text(!0),document.getElementById("no_script").style.display="none",page_init.game_menu.style.display="block"}function body_onload(){try{page_init();var e=function(e){return e.preventDefault(),!1},t=function(e){return!(e.ctrlKey||e.shiftKey||e.metaKey||27==e.keyCode)||(27==e.keyCode&&reset_game(),e.preventDefault(),!1)};window.addEventListener("selectstart",e),window.addEventListener("contextmenu",e),window.addEventListener("keydown",t),window.addEventListener("wheel",t),window.addEventListener("mousewheel",t),window.addEventListener("DOMMouseScroll",t),window.onresize=function(e){return animator.stop||(board_resize(),place_all()),!0},document.body.style.zoom=1;document.body.style.webkitTransform="scale(1)",document.body.style.msTransform="scale(1)",document.body.style.transform="scale(1)",window.addEventListener("popstate",function(e){if(page_init.in_menu)return!0;reset_game();try{history.pushState({},"","#game")}catch(e){}e.preventDefault()});try{history.pushState({},"","#game")}catch(e){}animator(),board_resize(),document.getElementById("fatal_error").style.display="none"}catch(e){throw document.getElementById("game_board").style.display="none",document.getElementById("game_menu").style.display="none",document.getElementById("fatal_error").textContent="Fatal error: "+e.message+"\n\n"+e.stack,e}}