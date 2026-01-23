// Garden Gnome Software - Skin
// Pano2VR 6.1.8/17956
// Filename: vayuhuSkin.ggsk
// Generated 2024-10-01T23:18:08

function pano2vrSkin(player,base) {
	player.addVariable('IconVisible', 2, false);
	player.addVariable('ht_ani', 2, false);
	player.addVariable('LinkURL', 0, "");
	player.addVariable('LinkURLHes', 0, "");
	player.addVariable('vis_loader', 2, false);
	player.addVariable('ScreenBg', 2, false);
	player.addVariable('init', 2, false);
	player.addVariable('open_tag', 0, "");
	player.addVariable('close_nodes', 2, true);
	player.addVariable('category_visible', 2, false);
	player.addVariable('category_follow', 2, true);
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('PreLaunch', 2, false);
	player.addVariable('gallery_show_hide', 2, false);
	player.addVariable('gallery_pictures', 1, 0);
	player.addVariable('info_title', 0, "");
	player.addVariable('info_body', 0, "<img class=\"imgItem\" src=\"images\/ClientLogo.png\">\nWe started Turiya keeping in mind of the most exciting business on the planet: multi-media. As we progress we are also striving to make a positive change in the way people visualize, engage and make informed decisions with our immersive and interactive solutions.\n\n<p class=\"linkBtn\"><a href=\"https:\/\/turiya.co\/\"  target=\"_blank\">Open Now<\/a><\/p>");
	player.addVariable('StartNode', 0, "node1");
	player.addVariable('vis_video_file', 2, false);
	player.addVariable('CurrentWindow', 0, "");
	player.addVariable('vis_info_popup_1', 2, false);
	player.addVariable('opt_3d_preview', 2, true);
	player.addVariable('opt_3d_preview_1', 2, true);
	player.addVariable('vis_website', 2, false);
	player.addVariable('opt_url', 2, false);
	player.addVariable('vis_info_popup_2', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/svgcontact__o.png';
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._txt_addressbar=document.createElement('div');
		els=me._txt_addressbar__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt_addressBar";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -71px;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 150px;';
		hs+='height: 30px;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._txt_addressbar.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._txt_addressbar.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._txt_addressbar);
		el=me._rectgradiant=document.createElement('div');
		el.ggId="RectGradiant";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -1;';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.69) 1%, rgba(0, 0, 0, 0.11) 75%, rgba(0, 0, 0, 0.1) 76%, rgba(0, 0, 0, 0.01) 93%, rgba(0, 0, 0, 0.01) 100%);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectgradiant.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectgradiant.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('PreLaunch') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectgradiant.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectgradiant.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectgradiant.style[domTransition]='';
				if (me._rectgradiant.ggCurrentLogicStateVisible == 0) {
					me._rectgradiant.style.visibility=(Number(me._rectgradiant.style.opacity)>0||!me._rectgradiant.style.opacity)?'inherit':'hidden';
					me._rectgradiant.ggVisible=true;
				}
				else {
					me._rectgradiant.style.visibility="hidden";
					me._rectgradiant.ggVisible=false;
				}
			}
		}
		me._rectgradiant.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._rectgradiant);
		el=me._button_direction=document.createElement('div');
		el.ggId="button_direction";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -70px;';
		hs+='height : 62px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 82px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_direction.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_direction.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._button_image_right=document.createElement('div');
		els=me._button_image_right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGlkPS'+
			'JMYXllcl8xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGhlaWdodD0iMzJweCIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTMuNSwxNkMzLjUwMSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwQzIyLjkwNCwzLjUwMSwyOC40OTksOS4wOTYsMjguNSwxNmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41MDEsMjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE04Ljg1Myw4Ljg1'+
			'MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBjMCwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2LDcuMTQ2bDAsMGMxLjgzMywxLjgzMSw0LjM1MywyLjk2LDcuMTQ3LDIuOTYxbDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi43OTUtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ni0yLjk2MWwwLDBjMS44MzItMS44MzIsMi45NjEtNC4zNTIsMi45NjEtNy4xNDZsMCwwYzAtMi43OTUtMS4xMjktNS4zMTQtMi45NjEtNy4xNDdsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuOD'+
			'kzbDAsMEMxMy4yMDYsNS44OTQsMTAuNjg2LDcuMDIyLDguODUzLDguODUzTDguODUzLDguODUzeiIvPgogIDxwYXRoIGQ9Ik0xMi45MiwyMi42NTdjLTAuNDQyLTAuNDkxLTAuNDAzLTEuMjQ3LDAuMDg4LTEuNjg5bDAsMGw1LjQ4MS00LjkzOGwtNS40ODEtNC45Mzd2MCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNDkxLTAuNDQyLTAuNTMtMS4xOTktMC4wODgtMS42OWwwLDBjMC40NDEtMC40OTEsMS4xOTgtMC41MzEsMS42ODktMC4wODhsMCwwbDYuNDY4LDUuODI2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjI1MSwwLjIyNiwwLjM5NiwwLjU1MSwwLjM5NiwwLjg4OWwwLDBjMCww'+
			'LjMzNy0wLjE0NSwwLjY2My0wLjM5NiwwLjg4OWwwLDBsLTYuNDY4LDUuODI2Yy0wLjIyOSwwLjIwNi0wLjUxNSwwLjMwOC0wLjgsMC4zMDgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDAsMEMxMy40ODIsMjMuMDUzLDEzLjE1NiwyMi45MTksMTIuOTIsMjIuNjU3TDEyLjkyLDIyLjY1N3oiLz4KIDwvZz4KIDxnIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiPgogIDxwYXRoIGQ9Ik0zLjUsMTZDMy41MDEsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMEMyMi45MDQsMy41MDEsMjguNDk5LDkuMDk2LDI4LjUsMTZsMCwwJiN4ZDsmI3hhOyYjeDk7Ji'+
			'N4OTsmI3g5O2MtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNTAxLDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsOC44NTMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAsMi43OTUsMS4xMjksNS4zMTQsMi45Niw3LjE0NmwwLDBjMS44MzMsMS44MzEsNC4zNTMsMi45Niw3LjE0NywyLjk2MWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LTAuMDAxLDUuMzE0LTEuMTMsNy4xNDYtMi45NjFsMCwwYzEuODMyLTEuODMyLDIuOTYxLTQuMzUyLDIuOTYxLTcu'+
			'MTQ2bDAsMGMwLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYxLTcuMTQ3bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBDMTMuMjA2LDUuODk0LDEwLjY4Niw3LjAyMiw4Ljg1Myw4Ljg1M0w4Ljg1Myw4Ljg1M3oiLz4KICA8cGF0aCBkPSJNMTIuOTIsMjIuNjU3Yy0wLjQ0Mi0wLjQ5MS0wLjQwMy0xLjI0NywwLjA4OC0xLjY4OWwwLDBsNS40ODEtNC45MzhsLTUuNDgxLTQuOTM3djAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQ5MS0wLjQ0Mi0wLjUzLTEuMTk5LTAuMDg4LTEuNjlsMCwwYzAuNDQxLTAuNDkxLDEuMTk4LT'+
			'AuNTMxLDEuNjg5LTAuMDg4bDAsMGw2LjQ2OCw1LjgyNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4yNTEsMC4yMjYsMC4zOTYsMC41NTEsMC4zOTYsMC44ODlsMCwwYzAsMC4zMzctMC4xNDUsMC42NjMtMC4zOTYsMC44ODlsMCwwbC02LjQ2OCw1LjgyNmMtMC4yMjksMC4yMDYtMC41MTUsMC4zMDgtMC44LDAuMzA4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wwLDBDMTMuNDgyLDIzLjA1MywxMy4xNTYsMjIuOTE5LDEyLjkyLDIyLjY1N0wxMi45MiwyMi42NTd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_right__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_right__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGlkPS'+
			'JMYXllcl8xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGhlaWdodD0iMzJweCIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNTAxLDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBDMjIuOTA0LDMuNTAxLDI4LjQ5OSw5LjA5NiwyOC41LDE2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLDYuOTA0LTUuNTk2LDEyLjQ5OS0xMi41LDEy'+
			'LjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUwMSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDguODUzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDZsMCwwYzEuODMzLDEuODMxLDQuMzUzLDIuOTYsNy4xNDcsMi45NjFsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjc5NS0wLjAwMSw1LjMxNC0xLjEzLDcuMTQ2LTIuOTYxbDAsMGMxLjgzMi0xLjgzMiwyLjk2MS00LjM1MiwyLjk2MS03LjE0NmwwLDBjMC0yLjc5NS0xLjEyOS01LjMxNC0yLjk2MS03LjE0N2wwLD'+
			'AmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwQzEzLjIwNiw1Ljg5NCwxMC42ODYsNy4wMjIsOC44NTMsOC44NTNMOC44NTMsOC44NTN6Ii8+CiAgPHBhdGggZD0iTTEyLjkyLDIyLjY1N2MtMC40NDItMC40OTEtMC40MDMtMS4yNDcsMC4wODgtMS42ODlsMCwwbDUuNDgxLTQuOTM4bC01LjQ4MS00LjkzN3YwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40OTEtMC40NDItMC41My0xLjE5OS0wLjA4OC0xLjY5bDAsMGMwLjQ0MS0wLjQ5MSwxLjE5OC0wLjUzMSwxLjY4OS0wLjA4OGwwLDBsNi40NjgsNS44MjYmI3hkOyYjeGE7'+
			'JiN4OTsmI3g5OyYjeDk7YzAuMjUxLDAuMjI2LDAuMzk2LDAuNTUxLDAuMzk2LDAuODg5bDAsMGMwLDAuMzM3LTAuMTQ1LDAuNjYzLTAuMzk2LDAuODg5bDAsMGwtNi40NjgsNS44MjZjLTAuMjI5LDAuMjA2LTAuNTE1LDAuMzA4LTAuOCwwLjMwOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMCwwQzEzLjQ4MiwyMy4wNTMsMTMuMTU2LDIyLjkxOSwxMi45MiwyMi42NTdMMTIuOTIsMjIuNjU3eiIvPgogPC9nPgogPGcgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC'+
			'0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNTAxLDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBDMjIuOTA0LDMuNTAxLDI4LjQ5OSw5LjA5NiwyOC41LDE2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLDYuOTA0LTUuNTk2LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUwMSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDguODUzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDZsMCwwYzEuODMzLDEuODMxLDQuMzUz'+
			'LDIuOTYsNy4xNDcsMi45NjFsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjc5NS0wLjAwMSw1LjMxNC0xLjEzLDcuMTQ2LTIuOTYxbDAsMGMxLjgzMi0xLjgzMiwyLjk2MS00LjM1MiwyLjk2MS03LjE0NmwwLDBjMC0yLjc5NS0xLjEyOS01LjMxNC0yLjk2MS03LjE0N2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwQzEzLjIwNiw1Ljg5NCwxMC42ODYsNy4wMjIsOC44NTMsOC44NTNMOC44NTMsOC44NTN6Ii8+CiAgPHBhdGggZD0iTTEyLjkyLDIyLjY1N2MtMC40NDItMC40OTEtMC40MDMtMS4yNDcsMC4wODgtMS'+
			'42ODlsMCwwbDUuNDgxLTQuOTM4bC01LjQ4MS00LjkzN3YwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40OTEtMC40NDItMC41My0xLjE5OS0wLjA4OC0xLjY5bDAsMGMwLjQ0MS0wLjQ5MSwxLjE5OC0wLjUzMSwxLjY4OS0wLjA4OGwwLDBsNi40NjgsNS44MjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMjUxLDAuMjI2LDAuMzk2LDAuNTUxLDAuMzk2LDAuODg5bDAsMGMwLDAuMzM3LTAuMTQ1LDAuNjYzLTAuMzk2LDAuODg5bDAsMGwtNi40NjgsNS44MjZjLTAuMjI5LDAuMjA2LTAuNTE1LDAuMzA4LTAuOCwwLjMwOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMCwwQzEzLjQ4Miwy'+
			'My4wNTMsMTMuMTU2LDIyLjkxOSwxMi45MiwyMi42NTdMMTIuOTIsMjIuNjU3eiIvPgogPC9nPgo8L3N2Zz4K';
		me._button_image_right__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 51px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_right.onmouseover=function (e) {
			me._button_image_right__img.style.visibility='hidden';
			me._button_image_right__imgo.style.visibility='inherit';
		}
		me._button_image_right.onmouseout=function (e) {
			me._button_image_right__img.style.visibility='inherit';
			me._button_image_right__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_right']=false;
		}
		me._button_image_right.onmousedown=function (e) {
			me.elementMouseDown['button_image_right']=true;
		}
		me._button_image_right.onmouseup=function (e) {
			me.elementMouseDown['button_image_right']=false;
		}
		me._button_image_right.ontouchend=function (e) {
			me.elementMouseDown['button_image_right']=false;
		}
		me._button_image_right.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_right);
		el=me._button_image_left=document.createElement('div');
		els=me._button_image_left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGlkPS'+
			'JMYXllcl8xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGhlaWdodD0iMzJweCIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTMuNSwxNkMzLjUwMSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwQzIyLjkwMywzLjUwMSwyOC40OTksOS4wOTYsMjguNSwxNmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjAwMSw2LjkwNC01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNNS44OTIsMTZjMCwy'+
			'Ljc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuODMzLDEuODMxLDQuMzUzLDIuOTYsNy4xNDcsMi45NjFsMCwwYzIuNzk0LTAuMDAxLDUuMzE0LTEuMTMsNy4xNDctMi45NjFsMCwwYzEuODMtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjAwMS0yLjc5NS0xLjEzLTUuMzE0LTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTQsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NCwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0'+
			'M3LjAyMSwxMC42ODYsNS44OTMsMTMuMjA1LDUuODkyLDE2TDUuODkyLDE2TDUuODkyLDE2eiIvPgogIDxwYXRoIGQ9Ik0xNy4zOTEsMjIuNjg2bC02LjQ2OC01LjgyN2MtMC4yNS0wLjIyNi0wLjM5Ni0wLjU1Mi0wLjM5Ni0wLjg4OWwwLDBjMC0wLjMzNywwLjE0Ni0wLjY2MywwLjM5Ni0wLjg4OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMCwwbDYuNDY4LTUuODI2YzAuNDkxLTAuNDQyLDEuMjQ3LTAuNDAzLDEuNjg5LDAuMDg4bDAsMGMwLjQ0MiwwLjQ5LDAuNDAyLDEuMjQ3LTAuMDg4LDEuNjg5bDAsMGwtNS40ODEsNC45MzhsNS40ODEsNC45MzhsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsm'+
			'I3g5O2MwLjQ5LDAuNDQyLDAuNTMsMS4xOTgsMC4wODgsMS42ODlsMCwwYy0wLjIzNiwwLjI2My0wLjU2MiwwLjM5Ni0wLjg4OSwwLjM5NmwwLDBDMTcuOTA2LDIyLjk5MywxNy42MiwyMi44OTEsMTcuMzkxLDIyLjY4NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMMTcuMzkxLDIyLjY4NnoiLz4KIDwvZz4KIDxnIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiPgogIDxwYXRoIGQ9Ik0zLjUsMTZDMy41MDEsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMEMyMi45MDMsMy41MDEsMjguNDk5LDkuMDk2LDI4LjUsMTZsMCwwJiN4ZDsmI3hhOyYjeDk7Ji'+
			'N4OTsmI3g5O2MtMC4wMDEsNi45MDQtNS41OTcsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTUuODkyLDE2YzAsMi43OTUsMS4xMjksNS4zMTQsMi45NjEsNy4xNDZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgzMywxLjgzMSw0LjM1MywyLjk2LDcuMTQ3LDIuOTYxbDAsMGMyLjc5NC0wLjAwMSw1LjMxNC0xLjEzLDcuMTQ3LTIuOTYxbDAsMGMxLjgzLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEtMi43OTUtMS4xMy01LjMxNC0yLjk2LTcuMTQ3bDAs'+
			'MEMyMS4zMTQsNy4wMjIsMTguNzk0LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTQsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNy4wMjEsMTAuNjg2LDUuODkzLDEzLjIwNSw1Ljg5MiwxNkw1Ljg5MiwxNkw1Ljg5MiwxNnoiLz4KICA8cGF0aCBkPSJNMTcuMzkxLDIyLjY4NmwtNi40NjgtNS44MjdjLTAuMjUtMC4yMjYtMC4zOTYtMC41NTItMC4zOTYtMC44ODlsMCwwYzAtMC4zMzcsMC4xNDYtMC42NjMsMC4zOTYtMC44ODkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDAsMGw2LjQ2OC01LjgyNmMwLjQ5MS0wLjQ0MiwxLjI0Ny0wLjQwMywxLj'+
			'Y4OSwwLjA4OGwwLDBjMC40NDIsMC40OSwwLjQwMiwxLjI0Ny0wLjA4OCwxLjY4OWwwLDBsLTUuNDgxLDQuOTM4bDUuNDgxLDQuOTM4bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40OSwwLjQ0MiwwLjUzLDEuMTk4LDAuMDg4LDEuNjg5bDAsMGMtMC4yMzYsMC4yNjMtMC41NjIsMC4zOTYtMC44ODksMC4zOTZsMCwwQzE3LjkwNiwyMi45OTMsMTcuNjIsMjIuODkxLDE3LjM5MSwyMi42ODYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7TDE3LjM5MSwyMi42ODZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_left__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGlkPS'+
			'JMYXllcl8xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGhlaWdodD0iMzJweCIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNTAxLDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBDMjIuOTAzLDMuNTAxLDI4LjQ5OSw5LjA5NiwyOC41LDE2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLDYuOTA0LTUuNTk3LDEyLjQ5OS0xMi41LDEy'+
			'LjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUsMjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE01Ljg5MiwxNmMwLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYxLDcuMTQ2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS44MzMsMS44MzEsNC4zNTMsMi45Niw3LjE0NywyLjk2MWwwLDBjMi43OTQtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2MWwwLDBjMS44My0xLjgzMiwyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLTIuNzk1LTEuMTMtNS4zMTQtMi45Ni03LjE0N2wwLDBDMjEuMzE0LDcuMDIyLDE4Ljc5NCw1Ljg5NCwxNiw1Ljg5M2wwLDBjLT'+
			'IuNzk0LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzcuMDIxLDEwLjY4Niw1Ljg5MywxMy4yMDUsNS44OTIsMTZMNS44OTIsMTZMNS44OTIsMTZ6Ii8+CiAgPHBhdGggZD0iTTE3LjM5MSwyMi42ODZsLTYuNDY4LTUuODI3Yy0wLjI1LTAuMjI2LTAuMzk2LTAuNTUyLTAuMzk2LTAuODg5bDAsMGMwLTAuMzM3LDAuMTQ2LTAuNjYzLDAuMzk2LTAuODg5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wwLDBsNi40NjgtNS44MjZjMC40OTEtMC40NDIsMS4yNDctMC40MDMsMS42ODksMC4wODhsMCwwYzAuNDQyLDAuNDksMC40MDIsMS4yNDctMC4wODgs'+
			'MS42ODlsMCwwbC01LjQ4MSw0LjkzOGw1LjQ4MSw0LjkzOGwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNDksMC40NDIsMC41MywxLjE5OCwwLjA4OCwxLjY4OWwwLDBjLTAuMjM2LDAuMjYzLTAuNTYyLDAuMzk2LTAuODg5LDAuMzk2bDAsMEMxNy45MDYsMjIuOTkzLDE3LjYyLDIyLjg5MSwxNy4zOTEsMjIuNjg2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0wxNy4zOTEsMjIuNjg2eiIvPgogPC9nPgogPGcgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC'+
			'0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNTAxLDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBDMjIuOTAzLDMuNTAxLDI4LjQ5OSw5LjA5NiwyOC41LDE2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLDYuOTA0LTUuNTk3LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUsMjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE01Ljg5MiwxNmMwLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYxLDcuMTQ2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS44MzMsMS44MzEsNC4zNTMsMi45Niw3LjE0NywyLjk2MWwwLDBjMi43OTQtMC4wMDEsNS4zMTQtMS4x'+
			'Myw3LjE0Ny0yLjk2MWwwLDBjMS44My0xLjgzMiwyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLTIuNzk1LTEuMTMtNS4zMTQtMi45Ni03LjE0N2wwLDBDMjEuMzE0LDcuMDIyLDE4Ljc5NCw1Ljg5NCwxNiw1Ljg5M2wwLDBjLTIuNzk0LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzcuMDIxLDEwLjY4Niw1Ljg5MywxMy4yMDUsNS44OTIsMTZMNS44OTIsMTZMNS44OTIsMTZ6Ii8+CiAgPHBhdGggZD0iTTE3LjM5MSwyMi42ODZsLTYuNDY4LTUuODI3Yy0wLjI1LTAuMjI2LTAuMzk2LTAuNT'+
			'UyLTAuMzk2LTAuODg5bDAsMGMwLTAuMzM3LDAuMTQ2LTAuNjYzLDAuMzk2LTAuODg5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wwLDBsNi40NjgtNS44MjZjMC40OTEtMC40NDIsMS4yNDctMC40MDMsMS42ODksMC4wODhsMCwwYzAuNDQyLDAuNDksMC40MDIsMS4yNDctMC4wODgsMS42ODlsMCwwbC01LjQ4MSw0LjkzOGw1LjQ4MSw0LjkzOGwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNDksMC40NDIsMC41MywxLjE5OCwwLjA4OCwxLjY4OWwwLDBjLTAuMjM2LDAuMjYzLTAuNTYyLDAuMzk2LTAuODg5LDAuMzk2bDAsMEMxNy45MDYsMjIuOTkzLDE3LjYyLDIyLjg5MSwxNy4zOTEs'+
			'MjIuNjg2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0wxNy4zOTEsMjIuNjg2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._button_image_left__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_left.onmouseover=function (e) {
			me._button_image_left__img.style.visibility='hidden';
			me._button_image_left__imgo.style.visibility='inherit';
		}
		me._button_image_left.onmouseout=function (e) {
			me._button_image_left__img.style.visibility='inherit';
			me._button_image_left__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_left']=false;
		}
		me._button_image_left.onmousedown=function (e) {
			me.elementMouseDown['button_image_left']=true;
		}
		me._button_image_left.onmouseup=function (e) {
			me.elementMouseDown['button_image_left']=false;
		}
		me._button_image_left.ontouchend=function (e) {
			me.elementMouseDown['button_image_left']=false;
		}
		me._button_image_left.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_left);
		el=me._button_image_down=document.createElement('div');
		els=me._button_image_down__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGlkPS'+
			'JMYXllcl8xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGhlaWdodD0iMzJweCIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTIwLjkwOCwxMy4wMDdsLTQuOTM4LDUuNDgxbC00LjkzOC01LjQ4MWMtMC40NDMtMC40OTEtMS4xOTktMC41MzEtMS42ODktMC4wODgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQ5MSwwLjQ0Mi0wLjUzLDEuMTk5LTAuMDg4LDEuNjg5bDUuODI3LDYuNDY4YzAuMjI2LDAuMjUsMC41NTEsMC4zOTYsMC44ODksMC4zOTZzMC42NjMtMC4xNDYs'+
			'MC44ODktMC4zOTZsNS44MjctNi40NjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNDQyLTAuNDkxLDAuNDAyLTEuMjQ4LTAuMDg4LTEuNjg5QzIyLjEwNiwxMi40NzcsMjEuMzUsMTIuNTE3LDIwLjkwOCwxMy4wMDd6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NywyMy4xNDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMywxLjgzMS'+
			'00LjM1MywyLjk2LTcuMTQ3LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ3LDIuOTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDcsMjMuMTQ2eiIvPgogPC9nPgogPGcgc3Ryb2tlLXdp'+
			'ZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0iI0ZGRkZGRiI+CiAgPHBhdGggZD0iTTIwLjkwOCwxMy4wMDdsLTQuOTM4LDUuNDgxbC00LjkzOC01LjQ4MWMtMC40NDMtMC40OTEtMS4xOTktMC41MzEtMS42ODktMC4wODgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQ5MSwwLjQ0Mi0wLjUzLDEuMTk5LTAuMDg4LDEuNjg5bDUuODI3LDYuNDY4YzAuMjI2LDAuMjUsMC41NTEsMC4zOTYsMC44ODksMC4zOTZzMC42NjMtMC4xNDYsMC44ODktMC4zOTZsNS44MjctNi40NjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNDQyLTAuNDkxLDAuNDAyLTEuMjQ4LTAuMDg4LTEuNjg5Qz'+
			'IyLjEwNiwxMi40NzcsMjEuMzUsMTIuNTE3LDIwLjkwOCwxMy4wMDd6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NywyMy4xNDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMywxLjgzMS00LjM1MywyLjk2LTcuMTQ3LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiYjeGQ7'+
			'JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ3LDIuOTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDcsMjMuMTQ2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._button_image_down__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_down__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGlkPS'+
			'JMYXllcl8xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGhlaWdodD0iMzJweCIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMjAuOTA4LDEzLjAwN2wtNC45MzgsNS40ODFsLTQuOTM4LTUuNDgxYy0wLjQ0My0wLjQ5MS0xLjE5OS0wLjUzMS0xLjY4OS0wLjA4OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNDkxLDAuNDQyLTAuNTMsMS4xOTktMC4wODgsMS42ODls'+
			'NS44MjcsNi40NjhjMC4yMjYsMC4yNSwwLjU1MSwwLjM5NiwwLjg4OSwwLjM5NnMwLjY2My0wLjE0NiwwLjg4OS0wLjM5Nmw1LjgyNy02LjQ2OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40NDItMC40OTEsMC40MDItMS4yNDgtMC4wODgtMS42ODlDMjIuMTA2LDEyLjQ3NywyMS4zNSwxMi41MTcsMjAuOTA4LDEzLjAwN3ogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMT'+
			'YsMy41eiBNMjMuMTQ3LDIzLjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuODMzLDEuODMxLTQuMzUzLDIuOTYtNy4xNDcsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDcsMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2'+
			'LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NywyMy4xNDZ6Ii8+CiA8L2c+CiA8ZyBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgogIDxwYXRoIGQ9Ik0yMC45MDgsMTMuMDA3bC00LjkzOCw1LjQ4MWwtNC45MzgtNS40ODFjLTAuNDQzLTAuNDkxLTEuMTk5LTAuNTMxLTEuNjg5LTAuMDg4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40OTEsMC40NDItMC41MywxLjE5OS0wLjA4OCwxLjY4OWw1LjgyNyw2LjQ2OGMwLjIyNiwwLjI1LDAuNT'+
			'UxLDAuMzk2LDAuODg5LDAuMzk2czAuNjYzLTAuMTQ2LDAuODg5LTAuMzk2bDUuODI3LTYuNDY4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQ0Mi0wLjQ5MSwwLjQwMi0xLjI0OC0wLjA4OC0xLjY4OUMyMi4xMDYsMTIuNDc3LDIxLjM1LDEyLjUxNywyMC45MDgsMTMuMDA3eiBNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDcsMjMuMTQ2JiN4ZDsm'+
			'I3hhOyYjeDk7JiN4OTsmI3g5O2MtMS44MzMsMS44MzEtNC4zNTMsMi45Ni03LjE0NywyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NywyLjk2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS44MzEsMS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMT'+
			'Q3LDIzLjE0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_down__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 31px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_down.onmouseover=function (e) {
			me._button_image_down__img.style.visibility='hidden';
			me._button_image_down__imgo.style.visibility='inherit';
		}
		me._button_image_down.onmouseout=function (e) {
			me._button_image_down__img.style.visibility='inherit';
			me._button_image_down__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_down']=false;
		}
		me._button_image_down.onmousedown=function (e) {
			me.elementMouseDown['button_image_down']=true;
		}
		me._button_image_down.onmouseup=function (e) {
			me.elementMouseDown['button_image_down']=false;
		}
		me._button_image_down.ontouchend=function (e) {
			me.elementMouseDown['button_image_down']=false;
		}
		me._button_image_down.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_down);
		el=me._button_image_up=document.createElement('div');
		els=me._button_image_up__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGlkPS'+
			'JMYXllcl8xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGhlaWdodD0iMzJweCIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTE2LjkxOSwxMC45MjNjLTAuMjI3LTAuMjUxLTAuNTUxLTAuMzk2LTAuODg5LTAuMzk2Yy0wLjMzNywwLTAuNjYzLDAuMTQ1LTAuODg5LDAuMzk2bC01LjgyNyw2LjQ2OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNDQyLDAuNDkxLTAuNDAzLDEuMjQ4LDAuMDg4LDEuNjg5YzAuNDkxLDAuNDQyLDEuMjQ3LDAuNDAzLDEuNjg5LTAuMDg4bDQu'+
			'OTM4LTUuNDgxbDQuOTM4LDUuNDgxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjIzNiwwLjI2MywwLjU2MywwLjM5NiwwLjg5LDAuMzk2YzAuMjg1LDAsMC41NzEtMC4xMDIsMC44LTAuMzA4YzAuNDkxLTAuNDQxLDAuNTMtMS4xOTgsMC4wODgtMS42ODlMMTYuOTE5LDEwLjkyM3ogTTE2LDMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7JiN4OTsgTTIzLjE0NywyMy4xNDZjLTEuODMzLDEuODMxLTQuMzUzLDIuOTYtNy4xNDcsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDcsMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIz'+
			'LjE0NywyMy4xNDZ6Ii8+CiA8L2c+CiA8ZyBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSIjRkZGRkZGIj4KICA8cGF0aCBkPSJNMTYuOTE5LDEwLjkyM2MtMC4yMjctMC4yNTEtMC41NTEtMC4zOTYtMC44ODktMC4zOTZjLTAuMzM3LDAtMC42NjMsMC4xNDUtMC44ODksMC4zOTZsLTUuODI3LDYuNDY4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40NDIsMC40OTEtMC40MDMsMS4yNDgsMC4wODgsMS42ODljMC40OTEsMC40NDIsMS4yNDcsMC40MDMsMS42ODktMC4wODhsNC45MzgtNS40ODFsNC45MzgsNS40ODEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMj'+
			'M2LDAuMjYzLDAuNTYzLDAuMzk2LDAuODksMC4zOTZjMC4yODUsMCwwLjU3MS0wLjEwMiwwLjgtMC4zMDhjMC40OTEtMC40NDEsMC41My0xLjE5OCwwLjA4OC0xLjY4OUwxNi45MTksMTAuOTIzeiBNMTYsMy41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyBNMjMuMTQ3LDIzLjE0NmMtMS44MzMsMS44MzEtNC4zNTMsMi45Ni03LjE0'+
			'NywyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NywyLjk2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS44MzEsMS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ3LDIzLjE0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_up__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_up__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGlkPS'+
			'JMYXllcl8xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIGhlaWdodD0iMzJweCIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMTYuOTE5LDEwLjkyM2MtMC4yMjctMC4yNTEtMC41NTEtMC4zOTYtMC44ODktMC4zOTZjLTAuMzM3LDAtMC42NjMsMC4xNDUtMC44ODksMC4zOTZsLTUuODI3LDYuNDY4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40NDIsMC40OTEtMC40'+
			'MDMsMS4yNDgsMC4wODgsMS42ODljMC40OTEsMC40NDIsMS4yNDcsMC40MDMsMS42ODktMC4wODhsNC45MzgtNS40ODFsNC45MzgsNS40ODEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMjM2LDAuMjYzLDAuNTYzLDAuMzk2LDAuODksMC4zOTZjMC4yODUsMCwwLjU3MS0wLjEwMiwwLjgtMC4zMDhjMC40OTEtMC40NDEsMC41My0xLjE5OCwwLjA4OC0xLjY4OUwxNi45MTksMTAuOTIzeiBNMTYsMy41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LD'+
			'EyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyBNMjMuMTQ3LDIzLjE0NmMtMS44MzMsMS44MzEtNC4zNTMsMi45Ni03LjE0NywyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NywyLjk2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS44MzEs'+
			'MS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ3LDIzLjE0NnoiLz4KIDwvZz4KIDxnIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CiAgPHBhdGggZD0iTTE2LjkxOSwxMC45MjNjLTAuMjI3LTAuMjUxLTAuNTUxLTAuMzk2LTAuODg5LTAuMzk2Yy0wLjMzNywwLTAuNjYzLDAuMTQ1LTAuODg5LDAuMzk2bC01LjgyNyw2LjQ2OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNDQyLD'+
			'AuNDkxLTAuNDAzLDEuMjQ4LDAuMDg4LDEuNjg5YzAuNDkxLDAuNDQyLDEuMjQ3LDAuNDAzLDEuNjg5LTAuMDg4bDQuOTM4LTUuNDgxbDQuOTM4LDUuNDgxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjIzNiwwLjI2MywwLjU2MywwLjM5NiwwLjg5LDAuMzk2YzAuMjg1LDAsMC41NzEtMC4xMDIsMC44LTAuMzA4YzAuNDkxLTAuNDQxLDAuNTMtMS4xOTgsMC4wODgtMS42ODlMMTYuOTE5LDEwLjkyM3ogTTE2LDMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5'+
			'OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTIzLjE0NywyMy4xNDZjLTEuODMzLDEuODMxLTQuMzUzLDIuOTYtNy4xNDcsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDcsMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeD'+
			'k7YzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NywyMy4xNDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_up__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_up.onmouseover=function (e) {
			me._button_image_up__img.style.visibility='hidden';
			me._button_image_up__imgo.style.visibility='inherit';
		}
		me._button_image_up.onmouseout=function (e) {
			me._button_image_up__img.style.visibility='inherit';
			me._button_image_up__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_up']=false;
		}
		me._button_image_up.onmousedown=function (e) {
			me.elementMouseDown['button_image_up']=true;
		}
		me._button_image_up.onmouseup=function (e) {
			me.elementMouseDown['button_image_up']=false;
		}
		me._button_image_up.ontouchend=function (e) {
			me.elementMouseDown['button_image_up']=false;
		}
		me._button_image_up.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_up);
		me.divSkin.appendChild(me._button_direction);
		el=me._cnt_title=document.createElement('div');
		el.ggId="cnt_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -100px;';
		hs+='height : 60px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 100%';
		me._cnt_title.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._cnt_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('IconVisible') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._cnt_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._cnt_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._cnt_title.style[domTransition]='left 1000ms ease 0ms, bottom 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._cnt_title.ggCurrentLogicStatePosition == 0) {
					me._cnt_title.style.left='20px';
					me._cnt_title.style.bottom='10px';
				}
				else {
					me._cnt_title.style.left='20px';
					me._cnt_title.style.bottom='-100px';
				}
			}
		}
		me._cnt_title.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 900)) && 
				((player.getViewerSize().width > 750))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width <= 750)) && 
				((player.getViewerSize().width > 600))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getViewerSize().width <= 600)) && 
				((player.getViewerSize().width > 400))
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				((player.getViewerSize().width <= 400))
			)
			{
				newLogicStateScaling = 3;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._cnt_title.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._cnt_title.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._cnt_title.style[domTransition]='left 1000ms ease 0ms, bottom 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._cnt_title.ggCurrentLogicStateScaling == 0) {
					me._cnt_title.ggParameter.sx = 0.55;
					me._cnt_title.ggParameter.sy = 0.55;
					me._cnt_title.style[domTransform]=parameterToTransform(me._cnt_title.ggParameter);
				}
				else if (me._cnt_title.ggCurrentLogicStateScaling == 1) {
					me._cnt_title.ggParameter.sx = 0.45;
					me._cnt_title.ggParameter.sy = 0.45;
					me._cnt_title.style[domTransform]=parameterToTransform(me._cnt_title.ggParameter);
				}
				else if (me._cnt_title.ggCurrentLogicStateScaling == 2) {
					me._cnt_title.ggParameter.sx = 0.35;
					me._cnt_title.ggParameter.sy = 0.35;
					me._cnt_title.style[domTransform]=parameterToTransform(me._cnt_title.ggParameter);
				}
				else if (me._cnt_title.ggCurrentLogicStateScaling == 3) {
					me._cnt_title.ggParameter.sx = 0.25;
					me._cnt_title.ggParameter.sy = 0.25;
					me._cnt_title.style[domTransform]=parameterToTransform(me._cnt_title.ggParameter);
				}
				else {
					me._cnt_title.ggParameter.sx = 1;
					me._cnt_title.ggParameter.sy = 1;
					me._cnt_title.style[domTransform]=parameterToTransform(me._cnt_title.ggParameter);
				}
			}
		}
		me._cnt_title.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt_panotitle1=document.createElement('div');
		els=me._txt_panotitle1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt_PanoTitle1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text pano_title";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txt_panotitle1.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_panotitle1.ggUpdateText();
		player.addListener('changenode', function() {
			me._txt_panotitle1.ggUpdateText();
		});
		el.appendChild(els);
		me._txt_panotitle1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_panotitle1.ggUpdatePosition=function (useTransition) {
		}
		me._cnt_title.appendChild(me._txt_panotitle1);
		me.divSkin.appendChild(me._cnt_title);
		el=me._screentint_info=document.createElement('div');
		el.ggId="screentint_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screentint_info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup_2') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_info.style[domTransition]='';
				if (me._screentint_info.ggCurrentLogicStateVisible == 0) {
					me._screentint_info.style.visibility=(Number(me._screentint_info.style.opacity)>0||!me._screentint_info.style.opacity)?'inherit':'hidden';
					me._screentint_info.ggVisible=true;
				}
				else {
					me._screentint_info.style.visibility="hidden";
					me._screentint_info.ggVisible=false;
				}
			}
		}
		me._screentint_info.onclick=function (e) {
			player.setVariableValue('vis_info_popup_2', false);
			me._info_title.ggText="";
			me._info_title.ggTextDiv.innerHTML=me._info_title.ggText;
			if (me._info_title.ggUpdateText) {
				me._info_title.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_title.ggUpdatePosition) {
				me._info_title.ggUpdatePosition();
			}
			me._info_title.ggTextDiv.scrollTop = 0;
			me._info_text_body.ggText="";
			me._info_text_body.ggTextDiv.innerHTML=me._info_text_body.ggText;
			if (me._info_text_body.ggUpdateText) {
				me._info_text_body.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_text_body.ggUpdatePosition) {
				me._info_text_body.ggUpdatePosition();
			}
			me._info_text_body.ggTextDiv.scrollTop = 0;
		}
		me._screentint_info.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint_info);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup_2') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style[domTransition]='';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		me._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._information_bg=document.createElement('div');
		el.ggId="information_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 250px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._information_bg.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._information_bg);
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 193px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 276px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 276px;';
		hs+='height: 193px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_text_body);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 245px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_title);
		el=me._info_popup_close=document.createElement('div');
		els=me._info_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTExMy40LDM3OS4yLTEzNS4zLDM1Ny4zeiBNLTE0NS44LDQxMi43YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4x'+
			'LTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTUuNywxNS43TC0xNDUuOCw0MTIuN3oiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KID'+
			'xnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE2MS42LDM5Ni45bDE1LjgsMTUuOGMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMtMC4zLTAuNC0wLjYtMC40'+
			'LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuOCwxNS44bDE1LjctMTUuN2MwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRMLTE2MS42LDM5Ni45eiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._info_popup_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTEwNi41LDM3Ny4zLTEzMC45LDM1Mi45eiBNLTE0Mi41LDQxNC41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNmMtMC42LDAtMS0w'+
			'LjEtMS4zLTAuNGwtMTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTE3LjQsMTcuNEwtMTQyLjUsNDE0LjV6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMi'+
			'I+CiAgPHBhdGggZD0iTS0xNjAuMSwzOTYuOWwxNy41LDE3LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4x'+
			'LTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN0wtMTYwLjEsMzk2Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._info_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="info_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_close.onclick=function (e) {
			player.setVariableValue('vis_info_popup_2', false);
			me._info_title.ggText="";
			me._info_title.ggTextDiv.innerHTML=me._info_title.ggText;
			if (me._info_title.ggUpdateText) {
				me._info_title.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_title.ggUpdatePosition) {
				me._info_title.ggUpdatePosition();
			}
			me._info_title.ggTextDiv.scrollTop = 0;
			me._info_text_body.ggText="";
			me._info_text_body.ggTextDiv.innerHTML=me._info_text_body.ggText;
			if (me._info_text_body.ggUpdateText) {
				me._info_text_body.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_text_body.ggUpdatePosition) {
				me._info_text_body.ggUpdatePosition();
			}
			me._info_text_body.ggTextDiv.scrollTop = 0;
		}
		me._info_popup_close.onmouseover=function (e) {
			me._info_popup_close__img.style.visibility='hidden';
			me._info_popup_close__imgo.style.visibility='inherit';
		}
		me._info_popup_close.onmouseout=function (e) {
			me._info_popup_close__img.style.visibility='inherit';
			me._info_popup_close__imgo.style.visibility='hidden';
		}
		me._info_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_popup_close);
		me.divSkin.appendChild(me._information);
		el=me._cntmastericons=document.createElement('div');
		el.ggId="cntMasterIcons";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 35px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 310px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 100%';
		me._cntmastericons.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._cntmastericons.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('category_visible') == true)) && 
				((player.getViewerSize().width >= 600))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._cntmastericons.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._cntmastericons.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._cntmastericons.style[domTransition]='right 1000ms ease 0ms, bottom 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._cntmastericons.ggCurrentLogicStatePosition == 0) {
					me._cntmastericons.style.right='220px';
					me._cntmastericons.style.bottom='10px';
				}
				else {
					me._cntmastericons.style.right='20px';
					me._cntmastericons.style.bottom='20px';
				}
			}
		}
		me._cntmastericons.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 450)) && 
				((player.getViewerSize().width > 300))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width <= 300))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._cntmastericons.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._cntmastericons.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._cntmastericons.style[domTransition]='right 1000ms ease 0ms, bottom 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._cntmastericons.ggCurrentLogicStateScaling == 0) {
					me._cntmastericons.ggParameter.sx = 0.8;
					me._cntmastericons.ggParameter.sy = 0.8;
					me._cntmastericons.style[domTransform]=parameterToTransform(me._cntmastericons.ggParameter);
				}
				else if (me._cntmastericons.ggCurrentLogicStateScaling == 1) {
					me._cntmastericons.ggParameter.sx = 0.5;
					me._cntmastericons.ggParameter.sy = 0.5;
					me._cntmastericons.style[domTransform]=parameterToTransform(me._cntmastericons.ggParameter);
				}
				else {
					me._cntmastericons.ggParameter.sx = 1;
					me._cntmastericons.ggParameter.sy = 1;
					me._cntmastericons.style[domTransform]=parameterToTransform(me._cntmastericons.ggParameter);
				}
			}
		}
		me._cntmastericons.ggUpdatePosition=function (useTransition) {
		}
		el=me._cnteye=document.createElement('div');
		el.ggId="cntEye";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cnteye.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cnteye.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_eyeunhide=document.createElement('div');
		els=me._svg_eyeunhide__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiNmZmZmZmY7ZmlsbC1ydWxlOm5vbnplcm99JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxn'+
			'IGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxnIGlkPSJfMjAxNTM5NDk5NTM5MiI+CiAgIDxwYXRoIGQ9Ik0yNC4yIDAuMDFsODIyLjQ4IDAgMCA4NDYuNjcgLTg0Ni42NyAwIDAgLTg0Ni42NyAyNC4xOSAwem03NzQuMDkgNDguMzlsLTc0OS44OSAwIDAgNzQ5Ljg5IDc0OS44OSAwIDAgLTc0OS44OXoiIGNsYXNzPSJmaWwwIi8+CiAgIDxwYXRoIGQ9Ik02NTYuMDQgNDIzLjMzbC01Ni4wMyAtNTQuNTljLTI3LjA4LC0yNy4wOCAtNTEuNTcsLTQ1LjYyIC03OC43LC01Ny4wOSAtMjcuMTcsLTExLjQ3IC01OC4zNCwtMTYuND'+
			'UgLTk4Ljg4LC0xNi40NSAtMzMuNjksMCAtNjYuMjcsNi41MSAtOTYuMjUsMTguOTMgLTMwLDEyLjQyIC01Ny42MSwzMC44MSAtODEuMzEsNTQuNTJsLTU0LjU5IDU0LjY4IDU0LjU5IDU0LjU5YzIzLjcsMjMuOCA1MS4zMSw0Mi4xOSA4MS4zMSw1NC42MSAyOS45OCwxMi40MiA2Mi41NiwxOC45MyA5Ni4yNSwxOC45MyA0MC41NCwwIDcxLjcxLC00Ljk3IDk4Ljg4LC0xNi40NSAyNy4xMywtMTEuNDYgNTEuNjIsLTMwLjAxIDc4LjcsLTU3LjA5bDU2LjAzIC01NC41OXptLTIxLjg0IC04OC43N2w5MC45MyA4OC43NyAtOTAuOTYgODguNzVjLTMxLjIsMzEuMjkgLTYwLjM5LDUzLjA5IC05NC4xNSw2'+
			'Ny4zNiAtMzMuNzIsMTQuMjQgLTcwLjc1LDIwLjQxIC0xMTcuNTksMjAuNDEgLTM5Ljg0LDAgLTc4LjYyLC03LjgxIC0xMTQuNTgsLTIyLjcgLTM1LjksLTE0Ljg2IC02OC44NywtMzYuOCAtOTcuMTQsLTY1LjA3bC04OC44NSAtODguNzUgODguOCAtODguOGMyOC4zMiwtMjguMjIgNjEuMjksLTUwLjE2IDk3LjE5LC02NS4wMiAzNS45NiwtMTQuODkgNzQuNzQsLTIyLjcgMTE0LjU4LC0yMi43IDQ2Ljg0LDAgODMuODcsNi4xOCAxMTcuNTksMjAuNDEgMzMuNzYsMTQuMjcgNjIuOTUsMzYuMDcgOTQuMTgsNjcuMzR6IiBjbGFzcz0iZmlsMCIvPgogICA8cGF0aCBkPSJNNDIzLjMyIDQzMi4zN2MyLj'+
			'UsMCA0Ljc4LC0xLjAyIDYuNCwtMi42NCAxLjYzLC0xLjYzIDIuNjUsLTMuODkgMi42NSwtNi4zOCAwLC0yLjU2IC0wLjk4LC00LjgzIC0yLjU1LC02LjM5IC0xLjczLC0xLjYzIC00LC0yLjY1IC02LjUsLTIuNjUgLTIuNDksMCAtNC43NiwxLjAyIC02LjM5LDIuNjUgLTEuNjcsMS41NiAtMi42NSwzLjgzIC0yLjY1LDYuMzkgMCwyLjQ5IDEuMDIsNC43NSAyLjY1LDYuMzggMS41NywxLjY0IDMuODYsMi42NCA2LjM5LDIuNjR6bTQwLjYxIDMxLjU3Yy0xMC4zOSwxMC4zOSAtMjQuNzcsMTYuODIgLTQwLjYxLDE2LjgyIC0xNS43OCwwIC0zMC4xMSwtNi40NSAtNDAuNSwtMTYuODIgLTEwLjQ5LC0x'+
			'MC4zOSAtMTYuOTMsLTI0Ljc1IC0xNi45MywtNDAuNTkgMCwtMTUuNzYgNi40NiwtMzAuMTIgMTYuODgsLTQwLjU1IDEwLjM0LC0xMC40NCAyNC43LC0xNi44OCA0MC41NSwtMTYuODggMTUuODYsMCAzMC4yMiw2LjQ0IDQwLjYxLDE2LjgzIDEwLjM3LDEwLjQ4IDE2LjgzLDI0Ljg0IDE2LjgzLDQwLjYgMCwxNS44NSAtNi40NCwzMC4yIC0xNi44Myw0MC41OXoiIGNsYXNzPSJmaWwwIi8+CiAgIDxwb2x5Z29uIHBvaW50cz0iNjkyLjAyLDE4OC4zOSAxODguODYsNjkyLjMxIDE1NC42NCw2NTguMjcgNjU3LjgsMTU0LjM1ICIgY2xhc3M9ImZpbDAiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_eyeunhide__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_eyeunhide__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiM1NWFhZmY7ZmlsbC1ydWxlOm5vbnplcm99JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxn'+
			'IGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxnIGlkPSJfMjAxNTM5NDk5NTM5MiI+CiAgIDxwYXRoIGQ9Ik0yNC4yIDAuMDFsODIyLjQ4IDAgMCA4NDYuNjcgLTg0Ni42NyAwIDAgLTg0Ni42NyAyNC4xOSAwem03NzQuMDkgNDguMzlsLTc0OS44OSAwIDAgNzQ5Ljg5IDc0OS44OSAwIDAgLTc0OS44OXoiIGNsYXNzPSJmaWwwIi8+CiAgIDxwYXRoIGQ9Ik02NTYuMDQgNDIzLjMzbC01Ni4wMyAtNTQuNTljLTI3LjA4LC0yNy4wOCAtNTEuNTcsLTQ1LjYyIC03OC43LC01Ny4wOSAtMjcuMTcsLTExLjQ3IC01OC4zNCwtMTYuND'+
			'UgLTk4Ljg4LC0xNi40NSAtMzMuNjksMCAtNjYuMjcsNi41MSAtOTYuMjUsMTguOTMgLTMwLDEyLjQyIC01Ny42MSwzMC44MSAtODEuMzEsNTQuNTJsLTU0LjU5IDU0LjY4IDU0LjU5IDU0LjU5YzIzLjcsMjMuOCA1MS4zMSw0Mi4xOSA4MS4zMSw1NC42MSAyOS45OCwxMi40MiA2Mi41NiwxOC45MyA5Ni4yNSwxOC45MyA0MC41NCwwIDcxLjcxLC00Ljk3IDk4Ljg4LC0xNi40NSAyNy4xMywtMTEuNDYgNTEuNjIsLTMwLjAxIDc4LjcsLTU3LjA5bDU2LjAzIC01NC41OXptLTIxLjg0IC04OC43N2w5MC45MyA4OC43NyAtOTAuOTYgODguNzVjLTMxLjIsMzEuMjkgLTYwLjM5LDUzLjA5IC05NC4xNSw2'+
			'Ny4zNiAtMzMuNzIsMTQuMjQgLTcwLjc1LDIwLjQxIC0xMTcuNTksMjAuNDEgLTM5Ljg0LDAgLTc4LjYyLC03LjgxIC0xMTQuNTgsLTIyLjcgLTM1LjksLTE0Ljg2IC02OC44NywtMzYuOCAtOTcuMTQsLTY1LjA3bC04OC44NSAtODguNzUgODguOCAtODguOGMyOC4zMiwtMjguMjIgNjEuMjksLTUwLjE2IDk3LjE5LC02NS4wMiAzNS45NiwtMTQuODkgNzQuNzQsLTIyLjcgMTE0LjU4LC0yMi43IDQ2Ljg0LDAgODMuODcsNi4xOCAxMTcuNTksMjAuNDEgMzMuNzYsMTQuMjcgNjIuOTUsMzYuMDcgOTQuMTgsNjcuMzR6IiBjbGFzcz0iZmlsMCIvPgogICA8cGF0aCBkPSJNNDIzLjMyIDQzMi4zN2MyLj'+
			'UsMCA0Ljc4LC0xLjAyIDYuNCwtMi42NCAxLjYzLC0xLjYzIDIuNjUsLTMuODkgMi42NSwtNi4zOCAwLC0yLjU2IC0wLjk4LC00LjgzIC0yLjU1LC02LjM5IC0xLjczLC0xLjYzIC00LC0yLjY1IC02LjUsLTIuNjUgLTIuNDksMCAtNC43NiwxLjAyIC02LjM5LDIuNjUgLTEuNjcsMS41NiAtMi42NSwzLjgzIC0yLjY1LDYuMzkgMCwyLjQ5IDEuMDIsNC43NSAyLjY1LDYuMzggMS41NywxLjY0IDMuODYsMi42NCA2LjM5LDIuNjR6bTQwLjYxIDMxLjU3Yy0xMC4zOSwxMC4zOSAtMjQuNzcsMTYuODIgLTQwLjYxLDE2LjgyIC0xNS43OCwwIC0zMC4xMSwtNi40NSAtNDAuNSwtMTYuODIgLTEwLjQ5LC0x'+
			'MC4zOSAtMTYuOTMsLTI0Ljc1IC0xNi45MywtNDAuNTkgMCwtMTUuNzYgNi40NiwtMzAuMTIgMTYuODgsLTQwLjU1IDEwLjM0LC0xMC40NCAyNC43LC0xNi44OCA0MC41NSwtMTYuODggMTUuODYsMCAzMC4yMiw2LjQ0IDQwLjYxLDE2LjgzIDEwLjM3LDEwLjQ4IDE2LjgzLDI0Ljg0IDE2LjgzLDQwLjYgMCwxNS44NSAtNi40NCwzMC4yIC0xNi44Myw0MC41OXoiIGNsYXNzPSJmaWwwIi8+CiAgIDxwb2x5Z29uIHBvaW50cz0iNjkyLjAyLDE4OC4zOSAxODguODYsNjkyLjMxIDE1NC42NCw2NTguMjcgNjU3LjgsMTU0LjM1ICIgY2xhc3M9ImZpbDAiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_eyeunhide__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg_EyeUnhide";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg svgBtn";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_eyeunhide.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_eyeunhide.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('IconVisible') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_eyeunhide.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_eyeunhide.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_eyeunhide.style[domTransition]='';
				if (me._svg_eyeunhide.ggCurrentLogicStateVisible == 0) {
					me._svg_eyeunhide.style.visibility=(Number(me._svg_eyeunhide.style.opacity)>0||!me._svg_eyeunhide.style.opacity)?'inherit':'hidden';
					me._svg_eyeunhide.ggVisible=true;
				}
				else {
					me._svg_eyeunhide.style.visibility="hidden";
					me._svg_eyeunhide.ggVisible=false;
				}
			}
		}
		me._svg_eyeunhide.onclick=function (e) {
			player.setVariableValue('IconVisible', true);
		}
		me._svg_eyeunhide.onmouseover=function (e) {
			me._svg_eyeunhide__img.style.visibility='hidden';
			me._svg_eyeunhide__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_eyeunhide']=true;
			me._txteyeunhide.logicBlock_alpha();
		}
		me._svg_eyeunhide.onmouseout=function (e) {
			me._svg_eyeunhide__img.style.visibility='inherit';
			me._svg_eyeunhide__imgo.style.visibility='hidden';
			me.elementMouseOver['svg_eyeunhide']=false;
			me._txteyeunhide.logicBlock_alpha();
		}
		me._svg_eyeunhide.ontouchend=function (e) {
			me.elementMouseOver['svg_eyeunhide']=false;
			me._txteyeunhide.logicBlock_alpha();
		}
		me._svg_eyeunhide.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._txteyeunhide=document.createElement('div');
		els=me._txteyeunhide__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txtEyeUnhide";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 41px;';
		hs+='height : 20px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 7px 10px 7px 10px;';
		hs+='overflow: hidden;';
		hs+="text-shadow: #00000085 1px 1px;";
		els.setAttribute('style',hs);
		els.innerHTML="Show All";
		el.appendChild(els);
		me._txteyeunhide.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txteyeunhide.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['svg_eyeunhide'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._txteyeunhide.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._txteyeunhide.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._txteyeunhide.style[domTransition]='opacity 400ms ease 0ms';
				if (me._txteyeunhide.ggCurrentLogicStateAlpha == 0) {
					me._txteyeunhide.style.visibility=me._txteyeunhide.ggVisible?'inherit':'hidden';
					me._txteyeunhide.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._txteyeunhide.style.opacity == 0.0) { me._txteyeunhide.style.visibility="hidden"; } }, 405);
					me._txteyeunhide.style.opacity=0;
				}
			}
		}
		me._txteyeunhide.ggUpdatePosition=function (useTransition) {
		}
		me._svg_eyeunhide.appendChild(me._txteyeunhide);
		me._cnteye.appendChild(me._svg_eyeunhide);
		el=me._svg_eyehide=document.createElement('div');
		els=me._svg_eyehide__img=document.createElement('img');
		els.className='ggskin ggskin_svg_eyehide';
		hs=basePath + 'images/svg_eyehide.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAFfUlEQVRoge2bXWwUVRTHf2fKltqCyEeIRsWPBAjFB5EAkoBYEEEDirAzW8ES9YFCSEwTTIyPJCQ+aCIkpqH4oBZpujMtXwoICKUGFUQNMXwIRPGDBmOKRbRQXHaOD51NpgvtzrZbCLv7T25259x7Ts5v997de89kxLRVySEZtzqBm62cAx6QdL1VheZbkkk/SZTpwMLEdRdgFZobTFl707PqR5m2XsMHnHNTOg+c7coDZ7vywNmuPHC2Kw+c7co54OTTUr+oolZL/iukVIWxKoxUYbDhElOhVZQLKrQCLY7JT4j0a0Gi34BNW0eJMl+F+R1QBhQm+kRBpfN94hXAdPhFHd1huOwsvsz+D1+RjkznlXFg09bJwFvATD9MQD0oykoVVraX0GLa+mbpcT'+
			'atXi1upvLL2BqO1OsY01YHOAzMTDG8A7iSYsy9QO2J8RwybZ2aiRwhQ8CmrStcg+NA+Abdp1R4R5S5hktpLMRQx6TYsaQYKI4XcD8wAagENgOXkvwnAQdNW1dkItc+TWnT1kIV1qEsT+qKq/C+KGsdS0515+9YcgU457WjwIZlNRr6axivirIGGOENNYDqsKMPjz/GG32Z4r3+hk1bhwF75XrYqGswrsGUFT3BdqcNlRJrMKUmFmI0sM7fJ8rrJ8Zjv/yBFvU2714Be7CfA0/4zFdFqXAsKW8My5neJpTQ1hfkomNJFbAUuObrWtRewjbT1jt6EzdtYB/sBJ/5D9dghh2RjwPGKDBtLQgy1rFkowpz6bq2nwY+rajVkqB5J5QWcDewZ+MFPN4YlsMB/EtNW/fQmfwl09Y9kXodl8qvwZR9wAyg1Wee2VHErue26eB0'+
			'GAIDJ9Ys18OWbV4kvwbwLwW+A2YDxV6b7Rp87/X1KMeSo4ZLGfCnzzx94FV2m7YOCcoRCNgH+5jPHBjW01rgRj82RcC7QQJEy+WYazADOO8zTwX2Lt6kQ4PESAnsBeoT7JNNOgCY5jPt8lpC04Ku6caw/OhBn/OZJ8VC7HuxTkd055dQ0Cnd33cYMxK/oyh1nJTAdUukLRRjNp3rL6GHCuI0LWzUB4IkcqBMrgEHfaZnvJbQl44l8SCxIvU6znBpBu7zmY+EYszaslAupPIP9A1nAhqoonMPnawrhktVkACRen3ENTgA3OMzfwXMrlsibUFiBP6V7iu0Y8kJYCKwB7gMtAN7DJeJ0XI5mcrftPVRD3akz/zF1YHMdSz5OyhHWv/DPUAfWtSgU1L5O5accCyZA9wJDHEsmRMENuzoLKAZGO4z7y/q4Nntz8s/6TCkvd'+
			'PqBvpuw6XZiupLQWI4lsSDrtmwo0tF+YzODymh3cC8jUulPXDinnq1l/ZBN/nMA1XYGHY0uqhBR/cmrl8LtuhdYUfXifIRXU91jSXtLPBOWmmr16eluiXSNrSNOaJU++2iWIbLSSuq601bx6Ybd1mNhqyoLg/FOCPKa0ndb5cex+pL6adP5+ENlRIDVoYd/UGU93zxClSoBCpNW0+L8gmwV4XfQzHO1y3mIiI6b7sWD2pneLyA4SpMEWVOG8yi6/QFcEVZaUdkfV/yhQzVtBpMqYnUa5MrrEEwk7rHqLAKWAUQC4Hp0IGt0EFR3Ntf9VCr/AaosiPydSZyzVhNK1oup52IWIbLZGBfiuFF3Hhf7VeLKBWlx5nqWJmBhX6oWkbL5QjwlGnrKBXmiTKfzqJeYQpXgLPADhV2DvqXptuiTJuQY8lvQDVQXVGrJZeLGSfK'+
			'WMPtLMSrEDNcWl2DC4ZLqygt0Qg/37aFeL+8/8tvvda9yvs/l5y7t5QHznblgbNdeeBsVx4425UHznblHHCXw4Mo071nBLJJM/wXyaelhfgeiMhG5dyUzjng/wEMoQ8VNOVHPAAAAABJRU5ErkJggg==';
		me._svg_eyehide__img.ggOverSrc=hs;
		el.ggId="Svg_EyeHide";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button svgBtn";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_eyehide.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_eyehide.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('IconVisible') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_eyehide.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_eyehide.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_eyehide.style[domTransition]='';
				if (me._svg_eyehide.ggCurrentLogicStateVisible == 0) {
					me._svg_eyehide.style.visibility=(Number(me._svg_eyehide.style.opacity)>0||!me._svg_eyehide.style.opacity)?'inherit':'hidden';
					me._svg_eyehide.ggVisible=true;
				}
				else {
					me._svg_eyehide.style.visibility="hidden";
					me._svg_eyehide.ggVisible=false;
				}
			}
		}
		me._svg_eyehide.onclick=function (e) {
			player.setVariableValue('IconVisible', false);
			player.setVariableValue('category_visible', false);
		}
		me._svg_eyehide.onmouseover=function (e) {
			me._svg_eyehide__img.src=me._svg_eyehide__img.ggOverSrc;
			me.elementMouseOver['svg_eyehide']=true;
			me._txteyehide.logicBlock_alpha();
		}
		me._svg_eyehide.onmouseout=function (e) {
			me._svg_eyehide__img.src=me._svg_eyehide__img.ggNormalSrc;
			me.elementMouseOver['svg_eyehide']=false;
			me._txteyehide.logicBlock_alpha();
		}
		me._svg_eyehide.ontouchend=function (e) {
			me.elementMouseOver['svg_eyehide']=false;
			me._txteyehide.logicBlock_alpha();
		}
		me._svg_eyehide.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._txteyehide=document.createElement('div');
		els=me._txteyehide__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txtEyeHide";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 41px;';
		hs+='height : 20px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 7px 10px 7px 10px;';
		hs+='overflow: hidden;';
		hs+="text-shadow: #00000085 1px 1px;";
		els.setAttribute('style',hs);
		els.innerHTML="Hide All";
		el.appendChild(els);
		me._txteyehide.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txteyehide.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['svg_eyehide'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._txteyehide.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._txteyehide.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._txteyehide.style[domTransition]='opacity 400ms ease 0ms';
				if (me._txteyehide.ggCurrentLogicStateAlpha == 0) {
					me._txteyehide.style.visibility=me._txteyehide.ggVisible?'inherit':'hidden';
					me._txteyehide.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._txteyehide.style.opacity == 0.0) { me._txteyehide.style.visibility="hidden"; } }, 405);
					me._txteyehide.style.opacity=0;
				}
			}
		}
		me._txteyehide.ggUpdatePosition=function (useTransition) {
		}
		me._svg_eyehide.appendChild(me._txteyehide);
		me._cnteye.appendChild(me._svg_eyehide);
		me._cntmastericons.appendChild(me._cnteye);
		el=me._cntcontrolicon=document.createElement('div');
		el.ggId="cntControlIcon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -60px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 230px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cntcontrolicon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cntcontrolicon.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('IconVisible') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._cntcontrolicon.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._cntcontrolicon.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._cntcontrolicon.style[domTransition]='right 1000ms ease 0ms, bottom 1000ms ease 0ms';
				if (me._cntcontrolicon.ggCurrentLogicStatePosition == 0) {
					me._cntcontrolicon.style.right='40px';
					me._cntcontrolicon.style.bottom='0px';
				}
				else {
					me._cntcontrolicon.style.right='40px';
					me._cntcontrolicon.style.bottom='-60px';
				}
			}
		}
		me._cntcontrolicon.ggUpdatePosition=function (useTransition) {
		}
		el=me._cntinfo=document.createElement('div');
		el.ggId="cntInfo";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 120px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cntinfo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cntinfo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._svginfooff=document.createElement('div');
		els=me._svginfooff__img=document.createElement('img');
		els.className='ggskin ggskin_svginfooff';
		hs=basePath + 'images/svginfooff.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="svgInfoOff";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button svgBtn";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svginfooff.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svginfooff.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._txt_info.style[domTransition]='none';
			} else {
				me._txt_info.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._txt_info.style.opacity='1';
			me._txt_info.style.visibility=me._txt_info.ggVisible?'inherit':'hidden';
			me._svginfoon.style[domTransition]='none';
			me._svginfoon.style.visibility=(Number(me._svginfoon.style.opacity)>0||!me._svginfoon.style.opacity)?'inherit':'hidden';
			me._svginfoon.ggVisible=true;
			me._svginfooff.style[domTransition]='none';
			me._svginfooff.style.visibility='hidden';
			me._svginfooff.ggVisible=false;
		}
		me._svginfooff.onmouseover=function (e) {
			me.elementMouseOver['svginfooff']=true;
			me._txtinfo.logicBlock_alpha();
		}
		me._svginfooff.onmouseout=function (e) {
			me.elementMouseOver['svginfooff']=false;
			me._txtinfo.logicBlock_alpha();
		}
		me._svginfooff.ontouchend=function (e) {
			me.elementMouseOver['svginfooff']=false;
			me._txtinfo.logicBlock_alpha();
		}
		me._svginfooff.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._txtinfo=document.createElement('div');
		els=me._txtinfo__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txtInfo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 41px;';
		hs+='height : 20px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 7px 10px 7px 10px;';
		hs+='overflow: hidden;';
		hs+="text-shadow: #00000085 1px 1px;";
		els.setAttribute('style',hs);
		els.innerHTML="Show Info";
		el.appendChild(els);
		me._txtinfo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txtinfo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['svginfooff'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._txtinfo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._txtinfo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._txtinfo.style[domTransition]='opacity 400ms ease 0ms';
				if (me._txtinfo.ggCurrentLogicStateAlpha == 0) {
					me._txtinfo.style.visibility=me._txtinfo.ggVisible?'inherit':'hidden';
					me._txtinfo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._txtinfo.style.opacity == 0.0) { me._txtinfo.style.visibility="hidden"; } }, 405);
					me._txtinfo.style.opacity=0;
				}
			}
		}
		me._txtinfo.ggUpdatePosition=function (useTransition) {
		}
		me._svginfooff.appendChild(me._txtinfo);
		me._cntinfo.appendChild(me._svginfooff);
		el=me._svginfoon=document.createElement('div');
		els=me._svginfoon__img=document.createElement('img');
		els.className='ggskin ggskin_svginfoon';
		hs=basePath + 'images/svginfoon.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="svgInfoOn";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button svgBtn";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svginfoon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svginfoon.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._txt_info.style[domTransition]='none';
			} else {
				me._txt_info.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._txt_info.style.opacity='0';
			me._txt_info.style.visibility='hidden';
			me._svginfooff.style[domTransition]='none';
			me._svginfooff.style.visibility=(Number(me._svginfooff.style.opacity)>0||!me._svginfooff.style.opacity)?'inherit':'hidden';
			me._svginfooff.ggVisible=true;
			me._svginfoon.style[domTransition]='none';
			me._svginfoon.style.visibility='hidden';
			me._svginfoon.ggVisible=false;
		}
		me._svginfoon.onmouseover=function (e) {
			me.elementMouseOver['svginfoon']=true;
			me._txtinfoon.logicBlock_alpha();
		}
		me._svginfoon.onmouseout=function (e) {
			me.elementMouseOver['svginfoon']=false;
			me._txtinfoon.logicBlock_alpha();
		}
		me._svginfoon.ontouchend=function (e) {
			me.elementMouseOver['svginfoon']=false;
			me._txtinfoon.logicBlock_alpha();
		}
		me._svginfoon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._txtinfoon=document.createElement('div');
		els=me._txtinfoon__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txtInfoOn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 41px;';
		hs+='height : 20px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 7px 10px 7px 10px;';
		hs+='overflow: hidden;';
		hs+="text-shadow: #00000085 1px 1px;";
		els.setAttribute('style',hs);
		els.innerHTML="Hide Info";
		el.appendChild(els);
		me._txtinfoon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txtinfoon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['svginfoon'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._txtinfoon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._txtinfoon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._txtinfoon.style[domTransition]='opacity 400ms ease 0ms';
				if (me._txtinfoon.ggCurrentLogicStateAlpha == 0) {
					me._txtinfoon.style.visibility=me._txtinfoon.ggVisible?'inherit':'hidden';
					me._txtinfoon.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._txtinfoon.style.opacity == 0.0) { me._txtinfoon.style.visibility="hidden"; } }, 405);
					me._txtinfoon.style.opacity=0;
				}
			}
		}
		me._txtinfoon.ggUpdatePosition=function (useTransition) {
		}
		me._svginfoon.appendChild(me._txtinfoon);
		me._cntinfo.appendChild(me._svginfoon);
		el=me._txt_info=document.createElement('div');
		els=me._txt_info__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt_Info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text info_body";
		el.ggType='text';
		hs ='';
		hs+='bottom : -299px;';
		hs+='height : auto;';
		hs+='position : absolute;';
		hs+='right : -50px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 354px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.666667);';
		hs+='border: 2px solid #ffffff;';
		hs+='border: 2px solid rgba(255,255,255,0.784314);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 15px 16px 15px 16px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="max-height: 450px;";
		els.setAttribute('style',hs);
		me._txt_info.ggUpdateText=function() {
			var hs="<b class=\"info_title\" style=\"color: #b96700;font-size: 15px;\">"+me.ggUserdata.author+"<\/b><br\/>"+me.ggUserdata.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_info.ggUpdateText();
		player.addListener('changenode', function() {
			me._txt_info.ggUpdateText();
		});
		el.appendChild(els);
		me._txt_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_info.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('IconVisible') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._txt_info.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._txt_info.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._txt_info.style[domTransition]='right 1000ms ease 0ms, bottom 1000ms ease 0ms, width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._txt_info.ggCurrentLogicStatePosition == 0) {
					me._txt_info.style.right='-50px';
					me._txt_info.style.bottom='50px';
				}
				else {
					me._txt_info.style.right='-50px';
					me._txt_info.style.bottom='-299px';
				}
			}
		}
		me._txt_info.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 650)) && 
				((player.getViewerSize().width >= 350))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize().width <= 350))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._txt_info.ggCurrentLogicStateSize != newLogicStateSize) {
				me._txt_info.ggCurrentLogicStateSize = newLogicStateSize;
				me._txt_info__text.style[domTransition]='right 1000ms ease 0ms, bottom 1000ms ease 0ms, width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._txt_info.ggCurrentLogicStateSize == 0) {
					me._txt_info__text.style.width='300px';
					me._txt_info__text.style.height='auto';
					skin.updateSize(me._txt_info);
				}
				else if (me._txt_info.ggCurrentLogicStateSize == 1) {
					me._txt_info__text.style.width='200px';
					me._txt_info__text.style.height='auto';
					skin.updateSize(me._txt_info);
				}
				else {
					me._txt_info__text.style.width='350px';
					me._txt_info__text.style.height='auto';
					me._txt_info__text.style.height='auto';
					skin.updateSize(me._txt_info);
				}
			}
		}
		me._txt_info.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('IconVisible') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._txt_info.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._txt_info.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._txt_info.style[domTransition]='right 1000ms ease 0ms, bottom 1000ms ease 0ms, width 0s, height 0s, opacity 500ms ease 0ms';
				if (me._txt_info.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._txt_info.style.opacity == 0.0) { me._txt_info.style.visibility="hidden"; } }, 505);
					me._txt_info.style.opacity=0;
				}
				else {
					me._txt_info.style.visibility=me._txt_info.ggVisible?'inherit':'hidden';
					me._txt_info.style.opacity=1;
				}
			}
		}
		me._txt_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuNzg0MzE0IiBjbGFzcz0iYmkgYmktY2FyZXQtZG93bi1maWxsIj4KIDxwYXRoIGQ9Ik03LjI0NyAxMS4xNCAyLjQ1MSA1LjY1OEMxLjg4NSA1LjAxMyAyLjM0NSA0IDMuMjA0IDRoOS41OTJhMSAxIDAgMCAxIC43NTMgMS42NTlsLTQuNzk2IDUuNDhhMSAxIDAgMCAxLTEuNTA2IDB6Ii8+Cjwvc3ZnPgo=';
		me._svg_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -21px;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me._txt_info.appendChild(me._svg_2);
		me._cntinfo.appendChild(me._txt_info);
		me._cntcontrolicon.appendChild(me._cntinfo);
		el=me._svgshare=document.createElement('div');
		els=me._svgshare__img=document.createElement('img');
		els.className='ggskin ggskin_svgshare';
		hs=basePath + 'images/svgshare.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAGgUlEQVRoge2bfYxU5RXGf+fOslVT0DauHxBrU9pioGkNCYi4FonVFCQIuvfOQpvaRgSJW5uYqMGolGyJpk0T62oNS1tpY1nm3kGhhZAmTRWjfNjWL1yMihHrR1VQUZtalpn79I+ZYe9cZpe9dwEnu/skk8w578d5n/eeOe95z8yY60sMIzif9QJONIYd4YaYnAe2fhYLOY6YAbRUhDjhrYFn953Y9RxfuL4gQnjYufQI4aGOEcJDHSOEhzri53DdwPX1JRPXy7gYOBP4EHjKCflNrtWeSztv/RGWzPNZJPiljNGx1qmhw1Ivp5+ddoCVnUvsUNLp686l3YB2GZ1wBNkKMjKWf/gF1iJZ0vnrinB2naYAy2LqHUAn8FcgjOhbWvJkk9qoK8Khw730rq'+
			'kIuIFnFwaeLQk8uwxoBg5U+pu4d/EqjUpio24IX7VeZwPTKrKJewLP8tE+gWfbTdwSUTV98EUuSmKnbghnioyPqTbX6ldoYFNM9dUkdo5ZlHZ9nSpjFtBsYhwwRsa7Tsje0GGLiW2BZ8W+xjshhTCy/TL+V6tfplj9kJyw6nN9VAya8IK1OrPQwO3AYhON0TYTyMDEMuAtL6cV753Bg4/NtEJ8nmKGUVZdXcsC2+P9TMyLxubQ4ZUk6x2US7cEmlVo4CWgDarJ1sA4GZ1N+3iitUtjK0rXV5Pr69cmHov1/4nrqy1m71IZd0VU/95/+pGb0h9SP2Evp2skfseRm7Yf2AV8DJwNnE/1ZlxQzPD3q/O63MR3EXcAp/ZhpsP19SMZu018DXFBtFHG0lre0h9SEW4JNF1iNdVknzRxh4zHo5/VuRs1urGHhSZ+CpxVVo91'+
			'QnYBtRKHnVBFbLKJyTX6rcm7tjHp2hO7tOur0cQfgMPnn4z2id1828/ao/HA9Kcr7ZO8a6uAbwJPRpriZHeEDtMCz6aZWAy1gxZw0MRNE7u5NunaId0TXgy9R4iJjsCzO/P9DAAIPNs37xHNGXWIHcCESNObwK2BSxdWClt+1la7vjbIWGRiKnAO8JGJnSbW5Frt5RTrBtIRju7smzJuHejADfPtgOtrCfQGKBmr8q6tjfcNPNsHVQHqmCCRS1+1XudSCkIV3B949mmSOQLPtgJPVWQTVyQZP1gkItxQYFLV4PCIrGdAMLElIn4rza0nLRIRDh3GxuS9aYyGDq9HxJPdgDFp5kmDesmlMyfKUCLCTsjbMfnLqYyGnBsRCxO7e698xxuJCMt4ISqHDnPSGC1fMir454oVlugCMBgkIhx49i/g2YiqzfV1cpI5XF8zgK'+
			'kRVdH11ZRkjsEgzTn8W6Cj/H4c8HPgxwMZOO8RncYhVsXU04E9Xk7tn4ymY8tsOwjQ2qVzCg1cY2IapZz8AxnbTTwYePZainUD6YJWJ/BqRG5rCbRy+XL1O9f8h3XGqENsojrLqmCMjF98/j90u77mu75uLmbYY6IduAKYDHzHSheNF7ycbjiavb6QeFDgWY+MHwA9FZ2J23ZP4nEvp5mur6qIO3ejRns5Xd9Q4HmoKse8QqlAF8V44GFKXtPXdfMUGfftnkSq77FT7VLetW0mrqW6iniRjL8B77i+HnV9bXB97fzcQfbLeIBSMb2Ct52QWYHLdBMLgTf6MfeyiXXAP2L6pS2BLk+69tTnsJ+1h0zMBj6KNZ0OXAJcSSk4xZ/UzkyRKblWexUz+Vnr+vQkzjNxZ6xfwcQPA88m+FlbEHg2BZhD5BZl4oGkWdqgEg8/'+
			'a39pKDDBRAcRF+8Db8m4bl8TzesWWNV5vmmu/VfG6qjOxEo/a7+P6gLPNpfv1RV85er1Vbn9UTHomlbXQnsXuPF7D+n2nkZmybjYxFhKVYx3ZOwt587b827fRTwZ50VrWiZq3jhlbADurshOyHjgmYGu95hVLf/4ffsYyJVfiWHipJiqZtAKHUInEjlkNasmfaJecmmAPVFBxtxanTLF6uxORqIzuW4IB57tgd7UVcYyL6fZ0T5eTjNltEdUb3xjF08nsVNvX5e20VsNaZSx2fX1BLAb+LpK0f8wTNyQNA+vmycMh6shv4qpmynV0S6J6df4WftzUht1RRhgYjc3ybgR6Kt01FOuoy1KM3+9uTRlF+1wfW0xcZ2MZqAJeB/YVv7Jw4tp5687whWUg9iAK6IDRd259PHGCOGhjhHCQx0jhIc64ufwjPJ/BIYSZkSFOO'+
			'EWIn+IGIoYdi497Aj/H8hbKUeNnXd9AAAAAElFTkSuQmCC';
		me._svgshare__img.ggOverSrc=hs;
		el.ggId="svgShare";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button svgBtn";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 80px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svgshare.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svgshare.onclick=function (e) {
			player.setVariableValue('ScreenBg', true);
			me._container_social.style[domTransition]='none';
			me._container_social.style.visibility=(Number(me._container_social.style.opacity)>0||!me._container_social.style.opacity)?'inherit':'hidden';
			me._container_social.ggVisible=true;
			me._btncopyurl.ggText="Copy URL";
			me._btncopyurl.ggTextDiv.innerHTML=me._btncopyurl.ggText;
			if (me._btncopyurl.ggUpdateText) {
				me._btncopyurl.ggUpdateText=function() {
					var hs="Copy URL";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._btncopyurl.ggUpdatePosition) {
				me._btncopyurl.ggUpdatePosition();
			}
			me._btncopyurl.ggTextDiv.scrollTop = 0;
			me._svg_checkon.style[domTransition]='none';
			me._svg_checkon.style.visibility='hidden';
			me._svg_checkon.ggVisible=false;
			me._svg_checkoff.style[domTransition]='none';
			me._svg_checkoff.style.visibility=(Number(me._svg_checkoff.style.opacity)>0||!me._svg_checkoff.style.opacity)?'inherit':'hidden';
			me._svg_checkoff.ggVisible=true;
			me._txt_url.ggText=splitText = location.href.split('#')[0];
pano.setVariableValue("LinkURL",splitText);
pano.setVariableValue("LinkURLHes",splitText);;
			me._txt_url.ggTextDiv.innerHTML=me._txt_url.ggText;
			if (me._txt_url.ggUpdateText) {
				me._txt_url.ggUpdateText=function() {
					var hs=splitText = location.href.split('#')[0];
pano.setVariableValue("LinkURL",splitText);
pano.setVariableValue("LinkURLHes",splitText);;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._txt_url.ggUpdatePosition) {
				me._txt_url.ggUpdatePosition();
			}
			me._txt_url.ggTextDiv.scrollTop = 0;
			player.stopAutorotate();
			player.setVariableValue('CurrentWindow', "Share");
		}
		me._svgshare.onmouseover=function (e) {
			me._svgshare__img.src=me._svgshare__img.ggOverSrc;
			me.elementMouseOver['svgshare']=true;
			me._txtshare.logicBlock_alpha();
		}
		me._svgshare.onmouseout=function (e) {
			me._svgshare__img.src=me._svgshare__img.ggNormalSrc;
			me.elementMouseOver['svgshare']=false;
			me._txtshare.logicBlock_alpha();
		}
		me._svgshare.ontouchend=function (e) {
			me.elementMouseOver['svgshare']=false;
			me._txtshare.logicBlock_alpha();
		}
		me._svgshare.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._txtshare=document.createElement('div');
		els=me._txtshare__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txtShare";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 41px;';
		hs+='height : 20px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 7px 10px 7px 10px;';
		hs+='overflow: hidden;';
		hs+="text-shadow: #00000085 1px 1px;";
		els.setAttribute('style',hs);
		els.innerHTML="Share";
		el.appendChild(els);
		me._txtshare.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txtshare.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['svgshare'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._txtshare.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._txtshare.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._txtshare.style[domTransition]='opacity 400ms ease 0ms';
				if (me._txtshare.ggCurrentLogicStateAlpha == 0) {
					me._txtshare.style.visibility=me._txtshare.ggVisible?'inherit':'hidden';
					me._txtshare.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._txtshare.style.opacity == 0.0) { me._txtshare.style.visibility="hidden"; } }, 405);
					me._txtshare.style.opacity=0;
				}
			}
		}
		me._txtshare.ggUpdatePosition=function (useTransition) {
		}
		me._svgshare.appendChild(me._txtshare);
		me._cntcontrolicon.appendChild(me._svgshare);
		el=me._svg_fullscreenoff=document.createElement('div');
		els=me._svg_fullscreenoff__img=document.createElement('img');
		els.className='ggskin ggskin_svg_fullscreenoff';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEoElEQVRoge1Y328UVRg95+40wh/AFsMTJFK6JSKvRP8CW9rqttIKTZ+E+OxPhLA1xsCDvpLqk9G2kKLuuiX+AeKrRCPboqEFQ2RnWrsV3mBnjg+7O50tuzszDRAf5rztzr3fd8693537zQESJEiQ4H+LnrzzUU/ervTk7ewzz11wRmq5nTOdxrHdgwMF+0OKnwqApCoMx28OpuefONMW2P+dM0pqhqQFAALO3hxKf9JqrOkQ5z0QIAFjaNHTbKbgjDwVxgH0FpxRQ80Y0iJqK2ygd9qNbyuAHk9Jqvq/DS1PT1dEb8EZlTRDQwsN9pTrybzdbk5bAYvD6csUjzeJYGcR+wvlF8NIHmwzxidfL5sa5Hqembg5vGs2tgBfhOFxQFUGysmDZnsLzmgzAT'+
			'uXAq+HCfDI670FO7eVPKAZY2jRP5Xh5EMFAMDi0fRlGoxJqNb3FIa0SM1miqtvNsiTPEcyNB5gDGnO9f7gnAeATNHOApghjb/ypFxAk2HkgQ5voa04UHSO0cPXwS2ulRfzJPzXbOnoro4xM8VV+fM9XAE0tLVsAE6UjoaTByLsQANLA+lLNBoTVG0cMBpaNMhGXwb4ZxMAaJDdemBlOBmVfCwBAFAa6L5Cg3FIVT9ng1CQWQQ8Nh9yDTm52L/rmzicYgkAgFJ/ev5+ef17QU3/R+bfzBoAIAn3/17/8feY5IFtCOieXsk9epgaWV8uQ1CrpYwOAoJQuW3j0UPTv/virfNx+cQS8Pz0Ss6Q59hlQamdqCyXISl8YgBBnZJQWbHh8TmwywKNeX/39EosEZEF7Lm4fAjEWQAgCXZZ8FI7UVmxIdcTSQD8KUKoayAh19P6'+
			'cnmTfP2iIfHuni9vhV6ICRIkSJAgARDj8n/hW/tQKoVfgI49/7WlofQrneL05p2fBRxpP0KeRx3+Y3D3b1F4Rb6J/3y9+1cIp0Nan5dDAxFHyMdbqM14/DgqeSBmL7Q03H0B1FQwY5CMXDe0MfKq9TEtFWhqaSg9FYdT7G50cbA7J6DZHyIACBt/rYaW5L9314gWDaCA+cXB7lxcPrEFZPJ2FtJwc3ahcscGrB2h85XagcptG4DAQB0Sei2Tr31jx0EsAZminRUx13APWF/5yh0bMjvALissBNhlQVa9i5VqlUOAZArG+6phFDxxAZminZXHuZp74Hf07gN743KDPBlaQX4rLmsnHpQr80G3AzApSLFERBKwST7oHsCVzOTdt3qOocv6gJtbEk2ElcrdPXlglCmM+0ZB7WksEaECMkU7K3GulXuwOFj7hrVP7bsAYA'+
			'qQF55SHqSp8ql9U0DtG9s3Cvz4TAHRRHQUkCnaWYhzQaO1nXtw7+TenKvUS6EJ6R2+d3JvLvhfqT89D2pMTW5HNBFt9zyz4IxAmPXLRoAgFx5OlAbTc2FEt4O+onNMqJtn9TdtzdrHeKm/tbXfaQe+aHLhKBeGE0+LPADcGEhfInBCajbPAEy3m9PeXgc+829YyAU5UXo1umO2XdwYSF+icBxBVxz4fFvB+hbWzvQtrG5kFpyxJ8Ywau6r/7zRt7C6cfDq2tlnnTtBggQJouM/DZH9BzbiDJIAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._svg_fullscreenoff__img.ggOverSrc=hs;
		el.ggId="Svg_FullScreenOff";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button svgBtn";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_fullscreenoff.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_fullscreenoff.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_fullscreenoff.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_fullscreenoff.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_fullscreenoff.style[domTransition]='';
				if (me._svg_fullscreenoff.ggCurrentLogicStateVisible == 0) {
					me._svg_fullscreenoff.style.visibility=(Number(me._svg_fullscreenoff.style.opacity)>0||!me._svg_fullscreenoff.style.opacity)?'inherit':'hidden';
					me._svg_fullscreenoff.ggVisible=true;
				}
				else {
					me._svg_fullscreenoff.style.visibility="hidden";
					me._svg_fullscreenoff.ggVisible=false;
				}
			}
		}
		me._svg_fullscreenoff.onclick=function (e) {
			player.exitFullscreen();
		}
		me._svg_fullscreenoff.onmouseover=function (e) {
			me._svg_fullscreenoff__img.src=me._svg_fullscreenoff__img.ggOverSrc;
			me.elementMouseOver['svg_fullscreenoff']=true;
			me._txtfullscreenoff.logicBlock_alpha();
		}
		me._svg_fullscreenoff.onmouseout=function (e) {
			me._svg_fullscreenoff__img.src=me._svg_fullscreenoff__img.ggNormalSrc;
			me.elementMouseOver['svg_fullscreenoff']=false;
			me._txtfullscreenoff.logicBlock_alpha();
		}
		me._svg_fullscreenoff.ontouchend=function (e) {
			me.elementMouseOver['svg_fullscreenoff']=false;
			me._txtfullscreenoff.logicBlock_alpha();
		}
		me._svg_fullscreenoff.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._txtfullscreenoff=document.createElement('div');
		els=me._txtfullscreenoff__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txtFullscreenOff";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 41px;';
		hs+='height : 20px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 7px 10px 7px 10px;';
		hs+='overflow: hidden;';
		hs+="text-shadow: #00000085 1px 1px;";
		els.setAttribute('style',hs);
		els.innerHTML="Minimize";
		el.appendChild(els);
		me._txtfullscreenoff.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txtfullscreenoff.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['svg_fullscreenoff'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._txtfullscreenoff.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._txtfullscreenoff.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._txtfullscreenoff.style[domTransition]='opacity 400ms ease 0ms';
				if (me._txtfullscreenoff.ggCurrentLogicStateAlpha == 0) {
					me._txtfullscreenoff.style.visibility=me._txtfullscreenoff.ggVisible?'inherit':'hidden';
					me._txtfullscreenoff.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._txtfullscreenoff.style.opacity == 0.0) { me._txtfullscreenoff.style.visibility="hidden"; } }, 405);
					me._txtfullscreenoff.style.opacity=0;
				}
			}
		}
		me._txtfullscreenoff.ggUpdatePosition=function (useTransition) {
		}
		me._svg_fullscreenoff.appendChild(me._txtfullscreenoff);
		me._cntcontrolicon.appendChild(me._svg_fullscreenoff);
		el=me._svg_fullscreenon=document.createElement('div');
		els=me._svg_fullscreenon__img=document.createElement('img');
		els.className='ggskin ggskin_svg_fullscreenon';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEkUlEQVRoge2ZS28bVRzFz7meqPkCcYq6aiWaxqko3VbwCUjzACc0oY2yohVr3m1VByHULmBbBVYIkrRyARun4gMAWyoQOCmoSUEV9TglDu2u9cxhMR4/Es/Ej1Rs5id5M85/7jm+d/5z7wkQERER8X/CoC8GM8UfBZwILpXrUsd/H93/SzcCnv3KPhaL4SeAJuTPflgdi7/Y7IvgIuIE6Tls9gH4QbfiAeCPV/p/hvD+zvs38EJQfaABt+zI09nso7nVsfhcF7obWB3vvwJqrn6M+h9PTkVLOwb+vfeA0M46AemV0f5U97IbWRntTwlIN1ykN+LWXxuBSz3QgGL7ULprAxBYN6+EXk5kNl7bA80NJDJ2EtJ4owih9KcNWL2BdYEG2NMDWb0orduQ5E'+
			'0nAZIxGPfzRG7vTCRydlLEkjG0WFk+gCdephfssTowQFZNPCqU0hLKtVVpYpD2xEQiZyflcok0Vu3xlfPI3rruiycDV1BIF/JNWFbq3tkjk4xhWlC51iLYtYmaeNb/xI5kZu+9PnAKPda7rE1JuwbkQpornDs0BwD54XiaBtOQytVngowBnZlI5OykxCUaWnXdzZHh7Mpo35cAYJ87dAXAHCC3bQOG7vH7Zw+m6q/lh+NpUFOSyrWO176JRM5OQlwypFXrD3IMObsy7In3uX/2YMpR7PmgewXPTQhDueIpAV+QtFDptJLKMJjOD8fTYbWJ5eIEhMXqshEgyIGLM/nR+FK7WkKfgSB+Oxm/RuCMVHkmCNDQAjDfQvmn9WtelAPDmU7EAx0aAComhNOQyv41Ap/sVkfg4+obFnJAzuRf6lvsVEfXDN3859Wh5Y2tozcf'+
			'XGy5ZvnBhaHlja3EcnHqaWqLiIiIiIjYlYFscWIgY5cGMsULLddkiue9GjvZ7fgdbeZ8Dn9dnCS14O9tBFy8PRb/MKzmSNZ+j+JHgr8B5PTt0fANYBgd74UGs8VJQy3Ub4kN9GYLpW/7qYMxtOhqMZEtTnSqoyMDg9nipKSF7YcRV+aN3Wrp8pzqN4CGlqvOTQQaOJotPBcqvuEYKMd1zczt8d13lSvj8esUTzeYYLiJwwFaQg245K3BrJ3aLh7Qgp8etCu+wYThacA7nvrLyYUWvTHqx7RTMfBW2wYAY0hzafDb4mWgcgwEFrz0wIOUA2i2HfFVEyPx6zSYqk87DGmRWvSPp4NZO0XyEhmcmwZ2oURuoxrLycUNQGPblw3AmfxId4eRI7niKbqV46l/Z6kMMEOi2mbzI31NtYY68ytokGyWHnQrHgBWT8av0WiqGt'+
			'lUjqc0SLbS5HftQjtT4+bpQTfkT/bfqEY228cLiKt9wuL1HcWS8PDvze9+3UPxPvnhePphYfMboTFQ3kV/i+8BAoJQumvjyWMzvP/qncudS21O//x66sljM7G5VoCgZlPflJaeAUkordtwuc/LKo15Z//8+p6ZeGZ+PWXIS+zpgWK9KK0VoCbRfjNC/60DEnJcba4VauIrjZvEWwc+uxP4gmmVA1fXjoG4CNQCZTdWScUdV16wy++7HSciIiLi6fAfEkL9BtW1QbcAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._svg_fullscreenon__img.ggOverSrc=hs;
		el.ggId="Svg_FullScreenOn";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button svgBtn";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_fullscreenon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_fullscreenon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_fullscreenon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_fullscreenon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_fullscreenon.style[domTransition]='';
				if (me._svg_fullscreenon.ggCurrentLogicStateVisible == 0) {
					me._svg_fullscreenon.style.visibility=(Number(me._svg_fullscreenon.style.opacity)>0||!me._svg_fullscreenon.style.opacity)?'inherit':'hidden';
					me._svg_fullscreenon.ggVisible=true;
				}
				else {
					me._svg_fullscreenon.style.visibility="hidden";
					me._svg_fullscreenon.ggVisible=false;
				}
			}
		}
		me._svg_fullscreenon.onclick=function (e) {
			player.enterFullscreen();
		}
		me._svg_fullscreenon.onmouseover=function (e) {
			me._svg_fullscreenon__img.src=me._svg_fullscreenon__img.ggOverSrc;
			me.elementMouseOver['svg_fullscreenon']=true;
			me._txtfullscreenon.logicBlock_alpha();
		}
		me._svg_fullscreenon.onmouseout=function (e) {
			me._svg_fullscreenon__img.src=me._svg_fullscreenon__img.ggNormalSrc;
			me.elementMouseOver['svg_fullscreenon']=false;
			me._txtfullscreenon.logicBlock_alpha();
		}
		me._svg_fullscreenon.ontouchend=function (e) {
			me.elementMouseOver['svg_fullscreenon']=false;
			me._txtfullscreenon.logicBlock_alpha();
		}
		me._svg_fullscreenon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._txtfullscreenon=document.createElement('div');
		els=me._txtfullscreenon__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txtFullscreenOn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 41px;';
		hs+='height : 20px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 7px 10px 7px 10px;';
		hs+='overflow: hidden;';
		hs+="text-shadow: #00000085 1px 1px;";
		els.setAttribute('style',hs);
		els.innerHTML="Expand";
		el.appendChild(els);
		me._txtfullscreenon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txtfullscreenon.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['svg_fullscreenon'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._txtfullscreenon.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._txtfullscreenon.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._txtfullscreenon.style[domTransition]='opacity 400ms ease 0ms';
				if (me._txtfullscreenon.ggCurrentLogicStateAlpha == 0) {
					me._txtfullscreenon.style.visibility=me._txtfullscreenon.ggVisible?'inherit':'hidden';
					me._txtfullscreenon.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._txtfullscreenon.style.opacity == 0.0) { me._txtfullscreenon.style.visibility="hidden"; } }, 405);
					me._txtfullscreenon.style.opacity=0;
				}
			}
		}
		me._txtfullscreenon.ggUpdatePosition=function (useTransition) {
		}
		me._svg_fullscreenon.appendChild(me._txtfullscreenon);
		me._cntcontrolicon.appendChild(me._svg_fullscreenon);
		el=me._enter_vr=document.createElement('div');
		els=me._enter_vr__img=document.createElement('img');
		els.className='ggskin ggskin_enter_vr';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._enter_vr__img.ggOverSrc=hs;
		el.ggId="enter_vr";
		el.ggDx=-98;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 2px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._enter_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._enter_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._enter_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._enter_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._enter_vr.style[domTransition]='';
				if (me._enter_vr.ggCurrentLogicStateVisible == 0) {
					me._enter_vr.style.visibility=(Number(me._enter_vr.style.opacity)>0||!me._enter_vr.style.opacity)?'inherit':'hidden';
					me._enter_vr.ggVisible=true;
				}
				else {
					me._enter_vr.style.visibility=(Number(me._enter_vr.style.opacity)>0||!me._enter_vr.style.opacity)?'inherit':'hidden';
					me._enter_vr.ggVisible=true;
				}
			}
		}
		me._enter_vr.onclick=function (e) {
			player.enterVR();
		}
		me._enter_vr.onmouseover=function (e) {
			me._enter_vr__img.src=me._enter_vr__img.ggOverSrc;
			me.elementMouseOver['enter_vr']=true;
			me._tt_enter_vr.logicBlock_visible();
		}
		me._enter_vr.onmouseout=function (e) {
			me._enter_vr__img.src=me._enter_vr__img.ggNormalSrc;
			me.elementMouseOver['enter_vr']=false;
			me._tt_enter_vr.logicBlock_visible();
		}
		me._enter_vr.ontouchend=function (e) {
			me.elementMouseOver['enter_vr']=false;
			me._tt_enter_vr.logicBlock_visible();
		}
		me._enter_vr.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_enter_vr=document.createElement('div');
		els=me._tt_enter_vr__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_enter_vr";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Enter VR";
		el.appendChild(els);
		me._tt_enter_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_enter_vr.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_enter_vr.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_enter_vr.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_enter_vr.style[domTransition]='left 0s, top 0s';
				if (me._tt_enter_vr.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_enter_vr.style.top='-25px';
					me._tt_enter_vr.ggUpdatePosition(true);
				}
				else {
					me._tt_enter_vr.ggDx=0;
					me._tt_enter_vr.style.top='32px';
					me._tt_enter_vr.ggUpdatePosition(true);
				}
			}
		}
		me._tt_enter_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['enter_vr'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_enter_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_enter_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_enter_vr.style[domTransition]='left 0s, top 0s';
				if (me._tt_enter_vr.ggCurrentLogicStateVisible == 0) {
					me._tt_enter_vr.style.visibility=(Number(me._tt_enter_vr.style.opacity)>0||!me._tt_enter_vr.style.opacity)?'inherit':'hidden';
					me._tt_enter_vr.ggVisible=true;
				}
				else {
					me._tt_enter_vr.style.visibility="hidden";
					me._tt_enter_vr.ggVisible=false;
				}
			}
		}
		me._tt_enter_vr.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._enter_vr.appendChild(me._tt_enter_vr);
		me._cntcontrolicon.appendChild(me._enter_vr);
		el=me._gyro=document.createElement('div');
		el.ggId="gyro";
		el.ggDx=-62;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 1px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro.onclick=function (e) {
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._gyro.onmouseover=function (e) {
			me.elementMouseOver['gyro']=true;
			me._tt_gyro.logicBlock_visible();
		}
		me._gyro.onmouseout=function (e) {
			me.elementMouseOver['gyro']=false;
			me._tt_gyro.logicBlock_visible();
		}
		me._gyro.ontouchend=function (e) {
			me.elementMouseOver['gyro']=false;
			me._tt_gyro.logicBlock_visible();
		}
		me._gyro.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._gyro_on=document.createElement('div');
		els=me._gyro_on__img=document.createElement('img');
		els.className='ggskin ggskin_gyro_on';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAN3klEQVRYhdWYeXxV1bXHf2ufc+6Qe5OQMGQOQxBCiAI1kAEoIiQBGRQVnlat2jrhe8hHPyLBoZjnkCCFp7Y11fr6abX2KU4gYEgCVqgZgABhSggoEEIGkkDGO55z9np/3CQNERX96731x/2cu89ea3/3Wnuvs9cG/o8L/VTFzJdKkxVFmWu3KFkAT/AbcoTBbCUGhEI+iypaBVDr9skSsLlrx5rph37IZnZ+xQIGvwlmZqKHSnLSC38UYOb6KoeFvQ9qqlipCBp+7cgwkRgbYo8KsyPcaYVdUwACvLqJSz0+NLd7UdvQ6T1a12H4/LLTYPkHswd/2JGb1nUl+1l5ZfVEFBv4x/VFORnxVwW4dNMmxXU29lFFKC8mxoYqWZOjHAmRwT/K/Wcu9KDkcJ'+
			'P76Nl2ZqIXmkOUjQceTtEvA8wvayHQ8B8FOCdv3xinBZ9FhdlG3jM7wRkdZgcAGKZEzflOHK/v8J++4HJf7PZqfoMVANAUkkODbf5Rwx32ifGh1onxQ6ApAgDQ0unF374846pr7Wn2+3jxjmfSqgEge13FTJb8GQg6gb0s8VDx0xk7vhcwK78806qJj5dMiwu64dpIhQB0uPwoOtToL61pZQiqM0zzfWa5Rwh8TYbsAgDdsDphkWMFc4amKb9gKRPSxg/jeVNibEODrQCA0hOt8oPSsx5Tl780iVoh+SMJurNkTdoXAxm+E3BefsXtVo3++tiCxKAxkcGQzCg61GBuP9hoqoLed5v8fMmqtDM/FAEAWPBiWYxqF8/qEr/Kui5KLEyJVRWFUN/mwsatJ7w+v+E3JC0ZDPedgFn55Zl2TWx+asnEoOjwILj9BgoKT7nO'+
			'tbmOeL36r4qfmX7iasAGS+b6itEORfxpRIgtbcWC8Q6nXUNrpxd5Hx/zeQzjzh1PZXz6g4CZ6ytG24gOr1yYGJwQGYy2bh82bKl2uX3mO9a4sys+XLbM/Clw/cJMizfse8miicefWJRkiwq3o/6iC+s/rXbpPp7WtyavCLh2LYtDofurFqfEJM25Lkrx+E28sOmIq8Plf6ZwdfprVzN4dl5pGpO4HYRpYIojcDRALibUEPM2FWaBIbRkMG8LtmuW3yy71hZs11AWWJNnG5xK4sDdrQ60X+moeDgm1DH6xuuiFMmMgqKTLrdPf7dwdfprb1TxCNJlAYjnEKOHQQcB+d9Dz6jb/lR32EamdzmtK38MQonrnzX1/wwhIB1E6QYpT0CCJGiJz2/c+Pr2EytzliQ7MxKHi72n2iL4QveqA8DLfSZE38PSDWV2EpT3y9ljnA'+
			'SgpKrJrG/pOdbR5VkBAEKXvyPCrQQKBVEMERYRic1HHRfrNfaeJfB6gOIAnGPGK5JpjsFKQluYZjGkGCaBmwAcBtNQBnQm9cDWJ1Ofa+n0ln+2/7wOAHfPGu1giafn5leGfsuD3QbdnxQTqsSEB6HLrWPrgfOmYdCvd+fONnrjdwNAMEkkaTq6/Yq+9GjNuefqGlujGIDNqrosmrY8qXXSe7m5JAcF/2L2uooeSI5i4DgRT1Sg/xpEG431pQ/uOtpUO3PiCAwPsWHy6DBxqO7SYwBeuMyDNk15PHNKpBMASg43+VUhPi7KST0+YJBOANAMmO8Vftn22a7KWWcbW8MYkBMSYtzZ06c4bkxLXh+50Pj54KWZva5iZl+eY/AaAGDwEgD4fNX0OgLe2l7Z4AGAuZOj7Qopj4KZ+gHnv7x3HBGix0eHwpSMPTUtpt/Lzw8c'+
			'hEFNAGCSuc5qs/2VQDcD3AnIm8aPjRtHgnYSKAJExX/cbzxyJbiSNWlfKNKo6H2V0NdHMr28/+s24TMkRg53wGFVHHNf2Xd9P6Ap5JyJcaEgAmobusDMFwqfTj05EJCEuQUADNNcrChiGRgdAphZlDO9aPkUami+XmQz8DqBNBAVFOw3nx8MBwDB/vBOACBQWJ/tz59KbVaEqDle1w4AmDQqzKqBs/oBHVZ1TmJsaBAAVJ/v0A2TPxgcpod/pr1qGIZf01QxNj5CsqBbC3Myjmbnl3+VnVe+t3xd+R3LU5SVBH4SzPJSZ/daRdCOwZ+vLs07NBARXBxoX9eN/zl6rtMDAONiQiyBY1zfGmQkRw0JHALONPe42eA9gwGXbSy3Vlaf7gKACWNixOK5qb3rl30gTCPQe1n5Zds+3Fn1dm1dc+7ew6c4fdL4oNvmTp010I'+
			'5UjAkBNa4f2G6YKD3b0u0HgMhQOyTzNf2ABssR4b0f8bZun2DF/GYwYJefHmpq6RjW2NruF0JAZXPzO1XsAMTG3i7HCIgU0A9Wn6pfMSpmxAvDw5wShN8UVBqP9tkRJLMAgAi7B9o3QV9f6tYtABAebIHPMIf1A0qT7VZNAQD4dFNRSOscqLx00yYF4JUAcOpc078DbADkdBvmkR2rUwsB/B2AasIyh1i2MaGr+mzrRgCrek28+malPjtgh24DACZRNHAMi7O9w29ICwBYNAXMUJdu2qQIXIV0fB0/B0SjGXxyXGPynxnKfYE3NOatg3J3iMYPMNijsP9tq+C5AC4K+P/+yFR1IxivEUhjpvdl07h7AYwF86l0d+ru7xxwgAgAUAR5fHrgDGDVFNPQjSEDOxHJ7N6nj3JzSS5PofeklL8HAGbMSE+dtAVAPBMSvFKU'+
			'E1gQ6KZ5eeV3N6WIJxgolsAIyfLVgPfw+uBkLnxDwyyq8AOAXzdBBOPDZcvMXkDRcqnbBwAYFmKTgsSYy6ZBNBMABHFxX9Oj07QVBN4MAEE2W2Z2xqSDFo9lBoiOAHQ9AEjg8VwiaZC4v/Z0g9vt9QWritLo8/jeHuwpXTcTwoM1PwBc6vbDoiht/R4EcKypwwMAGBPpDIIiLtt5xBgJAKbgmoHtn+yq3HixPbDzHEG2zAWLp+woWp12t2ReDGAPwFYA2L6z/JoTZxstBGDatWPFLxbd8K0jm6LSjNERwRYAaOrwQFFwsh/Q7dV3nmjocgFAUmyopqn4t8vVOQwAhvSEdvS19CXhLytPzGfmT3onMvOtg/LkPfPTvyjKSZ9VvCYjed4r5dexpM1gqKPjIlojhoVGMhmLBgNaFeXO5PhArqtt6PJ5vLK4H9BUaNfxcx'+
			'3EDIyLDoFgGpG97qvx/Xi9SfWipTtsIFxfEl4+Vb2NIQsAgBkJbsNserOSZ2fml8+Xkv8JwhCAP7hufPwzgT7igYFwN72yN9JkmTgxPrD0D5+5pJuMfwHuXJ1+ihkNtQ2dUATh5xOHa3bNmtsfYqKTAKAKzLjS5wsAlqdoj5Ip7mNIE6BgUxpfjB8ZuV0RIoSBT70e332sKlsCM+aUy8Kr4Nn08cPYqgrUtbrg9ZvdxTmpB/sBAcDrN/+ruKqpBwDmTopWDdNckvlSaXLAHn8EAATKY5YfX6n6AoDGz/Fu+aFTjzS3thtCCCRfE0/zZ06Wt8xJcd81/4Yo0wwc7wgIWcssACA7r3wUAfcvmhpnA4CSw01unfEGiLi3b0Bmrf2HLcQZ1LTq1qQhcUMdKKpqlIUHGg50dLkzLM4wqzA91QDiiVEL8Bq/pLLOYdqlIZdk'+
			'nCb00ZJFNoHv6D20IiYirGXKhNFhmqpqgyfCQPHyFCUbzHTzhn3FcydHz1qYEqO1dHrxwgdHXF6pxuzMSem8zIO7c2d7/SbnvPOPb3oYQOakKDEywjkxJNjxhpDen4HhZOZmJoxnok80Bc3D2nW/SuY3zGInAasAimNGHcCPdDuORLelWoLA5nMM7ARzHcBdDGyXMrAGF/5234thwdaMeVOiNAD42+7TbinoxT64yzwIBIqmqtD9BxdcHzMxc1KU6vWb+M9NR7ztbl03Tdzi93r2We3WBwi0hJmTCAhlUCPA54iwjyA+2rE6dW9feL5P5uWX3Wu3aQXP3p5sD3daUVrTIjeV1p1pCFYmDCyavlV2ZueVj9I0cWTlwsTgsb1l58Yt1V63T/9LR5dnxb9KgJ8ozLTwt/vyNU2sePLmJHt0mB11rS5s+Kza5dHl1J056Z'+
			'fl2isW7tl5ZXNtFnXrk7ck2WKHBsHjN1FQeNJV39ZzrEeX9w82crUy75WvEqyK5a3wEGvaf8wfFxTutKKlw4v8T465vbq8q3B12ubBOlcGXFcxk8BbraqwrViQaE3ovfooqWoyt1WeNxWiTT06rd21ZtrpqwLLr4i1qPQcA/fMmxKtZU+OVhWFUNfqwmtba9weKVfseDLtz1fS/XaIB+Q5RZikKeqni6fGBs2ZFKUQgC63jqKqRv8/q1ukAM77JL8vJe8xWfnGBl87ABhQQ0nIBAFluqbQHVJizPSk4bwgJdbmtAUKyT3VF+RHZec8puS7Pn8qbct3TY6AATebYAuYNAbd1pfnsvPKR9msypYRIdYx996Y4IwJDwIAmCaj5nwnqs93+k83d7tbu32qXzc1ELFFJXOo06aPGuG0J48MtU6ICYWmBhJGc7sH73552tVw'+
			'ydPoNfyLilbPqP0+7xMw+GYTLUU56REDO61dy6LSUfEwCcobFx2izpsS7RgbGQK6yhtMBnC6uRslh5vcx+s7TZNlrrvH+9rVbDj1203sG9zSe3YrWLqh7C8nGjofPH2he6VCIuLa+CGUGBsaFBlmx7BgK6yaAIHg6b8C9qC2sctz9Gy76TNlu27w7zU2CratntF9dVPr9WBmfvl8Yn6LCNx3s/lDilkvlSZCUKbDpmYxKMnQzQiTYZVgUol8FlW0AFTj0fUSYuwszMk4erVQ/6/kfwHU5ZmItmEUxQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._gyro_on__img.ggOverSrc=hs;
		el.ggId="gyro_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_on.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getUseGyro() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_on.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_on.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_on.style[domTransition]='opacity 0s';
				if (me._gyro_on.ggCurrentLogicStateAlpha == 0) {
					me._gyro_on.style.visibility=me._gyro_on.ggVisible?'inherit':'hidden';
					me._gyro_on.style.opacity=1;
				}
				else {
					me._gyro_on.style.visibility="hidden";
					me._gyro_on.style.opacity=0;
				}
			}
		}
		me._gyro_on.onmouseover=function (e) {
			me._gyro_on__img.src=me._gyro_on__img.ggOverSrc;
		}
		me._gyro_on.onmouseout=function (e) {
			me._gyro_on__img.src=me._gyro_on__img.ggNormalSrc;
		}
		me._gyro_on.ggUpdatePosition=function (useTransition) {
		}
		me._gyro.appendChild(me._gyro_on);
		el=me._gyro_off=document.createElement('div');
		els=me._gyro_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gyro_off__img.setAttribute('src',basePath + 'images/gyro_off.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._gyro_off__imgo.setAttribute('src',basePath + 'images/gyro_off__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="gyro_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_off.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_off.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_off.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_off.style[domTransition]='opacity 0s';
				if (me._gyro_off.ggCurrentLogicStateAlpha == 0) {
					me._gyro_off.style.visibility=me._gyro_off.ggVisible?'inherit':'hidden';
					me._gyro_off.style.opacity=1;
				}
				else {
					me._gyro_off.style.visibility="hidden";
					me._gyro_off.style.opacity=0;
				}
			}
		}
		me._gyro_off.onmouseover=function (e) {
			me._gyro_off__img.style.visibility='hidden';
			me._gyro_off__imgo.style.visibility='inherit';
		}
		me._gyro_off.onmouseout=function (e) {
			me._gyro_off__img.style.visibility='inherit';
			me._gyro_off__imgo.style.visibility='hidden';
		}
		me._gyro_off.ggUpdatePosition=function (useTransition) {
		}
		me._gyro.appendChild(me._gyro_off);
		el=me._tt_gyro=document.createElement('div');
		els=me._tt_gyro__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_gyro";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_gyro.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_gyro.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_gyro.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_gyro.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_gyro.style[domTransition]='left 0s, top 0s';
				if (me._tt_gyro.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_gyro.style.top='-25px';
					me._tt_gyro.ggUpdatePosition(true);
				}
				else {
					me._tt_gyro.ggDx=0;
					me._tt_gyro.style.top='32px';
					me._tt_gyro.ggUpdatePosition(true);
				}
			}
		}
		me._tt_gyro.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['gyro'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_gyro.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_gyro.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_gyro.style[domTransition]='left 0s, top 0s';
				if (me._tt_gyro.ggCurrentLogicStateVisible == 0) {
					me._tt_gyro.style.visibility=(Number(me._tt_gyro.style.opacity)>0||!me._tt_gyro.style.opacity)?'inherit':'hidden';
					me._tt_gyro.ggVisible=true;
				}
				else {
					me._tt_gyro.style.visibility="hidden";
					me._tt_gyro.ggVisible=false;
				}
			}
		}
		me._tt_gyro.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getUseGyro() == false))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_gyro.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_gyro.ggCurrentLogicStateText = newLogicStateText;
				me._tt_gyro.style[domTransition]='left 0s, top 0s';
				if (me._tt_gyro.ggCurrentLogicStateText == 0) {
					me._tt_gyro.ggText="Gyroscope Off";
					me._tt_gyro__text.innerHTML=me._tt_gyro.ggText;
					if (me._tt_gyro.ggUpdateText) {
					me._tt_gyro.ggUpdateText=function() {
						var hs="Gyroscope Off";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_gyro.ggUpdatePosition) me._tt_gyro.ggUpdatePosition();
					}
				}
				else if (me._tt_gyro.ggCurrentLogicStateText == 1) {
					me._tt_gyro.ggText="Gyroscope On";
					me._tt_gyro__text.innerHTML=me._tt_gyro.ggText;
					if (me._tt_gyro.ggUpdateText) {
					me._tt_gyro.ggUpdateText=function() {
						var hs="Gyroscope On";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_gyro.ggUpdatePosition) me._tt_gyro.ggUpdatePosition();
					}
				}
				else {
					me._tt_gyro.ggText="";
					me._tt_gyro__text.innerHTML=me._tt_gyro.ggText;
					if (me._tt_gyro.ggUpdateText) {
					me._tt_gyro.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_gyro.ggUpdatePosition) me._tt_gyro.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_gyro.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._gyro.appendChild(me._tt_gyro);
		me._cntcontrolicon.appendChild(me._gyro);
		el=me._svghelp=document.createElement('div');
		els=me._svghelp__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiNmZmZmZmY7ZmlsbC1ydWxlOm5vbnplcm99JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxn'+
			'IGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxnIGlkPSJfMjAxNTI0OTc2MDU0NCI+CiAgIDxwYXRoIGQ9Ik0yNC4yIDAuMDFsODIyLjQ4IDAgMCA4NDYuNjcgLTg0Ni42NyAwIDAgLTg0Ni42NyAyNC4xOSAwem03NzQuMDkgNDguMzlsLTc0OS44OSAwIDAgNzQ5Ljg5IDc0OS44OSAwIDAgLTc0OS44OXoiIGNsYXNzPSJmaWwwIi8+CiAgIDxwYXRoIGQ9Ik00MzYuOTQgNDkwLjk2bDAgLTM1LjQ2YzAsLTMuNDYgMC4zOCwtNy4yMyAxLjE1LC0xMS4zIDAuNjgsLTMuNjMgMS42NiwtNy4yNSAyLjg3LC0xMC44NSAxLjI2LC0zLj'+
			'Y2IDIuODMsLTcuMjggNC43MiwtMTAuODIgMS42MiwtMy4yMyAzLjY0LC02LjMzIDUuOTYsLTkuMjlsNDAuMzggLTUzLjQ1YzMuNjQsLTQuNyA2Ljk1LC05LjUxIDkuODgsLTE0LjM4IDIuODYsLTQuNzUgNS4xNywtOS4xNCA2Ljg0LC0xMy4xMiAxLjU1LC0zLjY3IDIuNzYsLTcuNjcgMy41OSwtMTEuOTYgMC44MiwtNC4zMSAxLjIzLC04Ljg4IDEuMjMsLTEzLjc1IDAsLTYuODMgLTAuNTksLTEzLjI0IC0xLjc3LC0xOS4yMSAtMS4xNCwtNS44MiAtMi44NiwtMTEuMzEgLTUuMTIsLTE2LjQ0IC0yLjI4LC01LjE4IC01LjAyLC05Ljk5IC04LjE4LC0xNC4zNSAtMy4yLC00LjQxIC02Ljc0LC04LjMz'+
			'IC0xMC42LC0xMS43MmwtMC4xIC0wLjExYy00LjE1LC0zLjY2IC04LjYyLC02LjkxIC0xMy4zOSwtOS42OSAtNC42MiwtMi43IC05Ljc0LC01LjA2IC0xNS4zNCwtNy4wNSAtNS42LC0xLjk5IC0xMS4zOCwtMy40OSAtMTcuMjcsLTQuNDcgLTUuODMsLTAuOTcgLTEyLjA4LC0xLjQ2IC0xOC43MSwtMS40NiAtNi43NSwwIC0xMy4xLDAuNTEgLTE5LjAxLDEuNTEgLTUuOTYsMS4wMyAtMTEuNzMsMi41NyAtMTcuMjQsNC42IC01LjYxLDIuMDUgLTEwLjc0LDQuNDggLTE1LjM3LDcuMjUgLTQuNzksMi44NyAtOS4yMyw2LjExIC0xMy4yNCw5LjY5IC00LjA5LDMuNzUgLTcuNiw3LjY0IC0xMC40NywxMS'+
			'42OSAtMy4wMyw0LjM4IC01LjY4LDkuMTUgLTcuOTEsMTQuMzkgLTIuMjEsNS4yIC0zLjg5LDEwLjcgLTUuMDEsMTYuNDcgLTEuMTQsNS44NSAtMS43MSwxMi4xNiAtMS43MSwxOC45bC00OC4zOSAwYzAsLTkuNTQgMC44OSwtMTguODkgMi42NSwtMjcuOTcgMS43NywtOS4xMyA0LjQ2LC0xNy45MiA4LjAzLC0yNi4yOSAzLjU1LC04LjM2IDcuOTEsLTE2LjE2IDEzLjAyLC0yMy4zNyA1LjMsLTcuMzggMTEuMTQsLTEzLjk2IDE3LjUsLTE5LjY3IDYuNTgsLTUuNzggMTMuNDksLTEwLjg5IDIwLjc4LC0xNS4yMyA3LjQ5LC00LjQ4IDE1LjM0LC04LjI0IDIzLjQ5LC0xMS4yMyA4LjI0LC0zLjA0IDE2'+
			'Ljg0LC01LjMzIDI1Ljc0LC02Ljg1IDguOTgsLTEuNSAxOC4wMSwtMi4yOCAyNy4xNCwtMi4yOCA4LjkyLDAgMTcuODIsMC43NSAyNi42NSwyLjIyIDguNzcsMS40NiAxNy4yNSwzLjY0IDI1LjQsNi41NCA4LjE4LDIuOTEgMTYuMDgsNi41OSAyMy42NiwxMS4wMyA3LjM5LDQuMzMgMTQuMzYsOS4zNyAyMC44NCwxNS4wOSA2Ljg2LDUuOTkgMTIuODQsMTIuNTYgMTcuOTgsMTkuNjUgNS4xNiw3LjEyIDkuNTksMTQuODggMTMuMjgsMjMuMjUgMy43Miw4LjQ1IDYuNTEsMTcuMzUgOC4zNCwyNi42NCAxLjgxLDkuMTUgMi43MiwxOC42MyAyLjcyLDI4LjQ3IDAsNy44MiAtMC43MywxNS40NiAtMi4xOC'+
			'wyMi45MiAtMS40NCw3LjM0IC0zLjY1LDE0LjUxIC02LjYsMjEuNSAtMi44Myw2LjY5IC02LjE0LDEzLjE1IC05Ljg4LDE5LjM2IC0zLjYzLDYuMDIgLTcuOTYsMTIuMjggLTEyLjkzLDE4LjcyIC0xMy4wOSwxNy4zNiAtMzAuOSwzOC4xNCAtNDIuMDUsNTYuMSAtMC41NSwwLjg3IC0xLjA3LDIuMTIgLTEuNiwzLjY3IC0wLjU2LDEuNjUgLTAuOTYsMy4wOSAtMS4xOCw0LjIzbC0wLjIxIDIuNDIgMCAzNS40NiAtNDguMzggMHptMjQuMTkgMTMzLjYyYzIuNTUsMCA0LjgzLC0wLjk4IDYuMzksLTIuNTQgMS42MywtMS43MyAyLjY1LC0zLjk5IDIuNjUsLTYuNDggMCwtMi41IC0xLjAyLC00Ljc4IC0y'+
			'LjY0LC02LjQgLTEuNTcsLTEuNjQgLTMuODYsLTIuNjQgLTYuNCwtMi42NCAtMi41NCwwIC00LjgzLDEgLTYuNDUsMi41OSAtMS41OSwxLjYyIC0yLjU5LDMuOTEgLTIuNTksNi40NSAwLDIuNDkgMS4wMiw0Ljc1IDIuNjUsNi4zOCAxLjU2LDEuNjYgMy44MiwyLjY0IDYuMzksMi42NHptNDAuNTcgMzEuNTRjLTEwLjQ2LDEwLjQgLTI0LjgyLDE2Ljg1IC00MC41NywxNi44NSAtMTUuNzUsMCAtMzAuMTIsLTYuNDUgLTQwLjU1LC0xNi44NyAtMTAuNDQsLTEwLjM0IC0xNi44OCwtMjQuNjkgLTE2Ljg4LC00MC41NCAwLC0xNS43OCA2LjQ1LC0zMC4xMyAxNi44MiwtNDAuNTJsMC4xIC0wLjA5YzEwLj'+
			'M5LC0xMC4zNyAyNC43NCwtMTYuODIgNDAuNTEsLTE2LjgyIDE1Ljc5LDAgMzAuMTIsNi40NSA0MC41MSwxNi44MiAxMC40OSwxMC4zOSAxNi45MiwyNC43NyAxNi45Miw0MC42MSAwLDE1Ljg1IC02LjQ0LDMwLjIgLTE2Ljg2LDQwLjU2eiIgY2xhc3M9ImZpbDAiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._svghelp__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svghelp__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiM1NWFhZmY7ZmlsbC1ydWxlOm5vbnplcm99JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxn'+
			'IGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxnIGlkPSJfMjAxNTI0OTc2MDU0NCI+CiAgIDxwYXRoIGQ9Ik0yNC4yIDAuMDFsODIyLjQ4IDAgMCA4NDYuNjcgLTg0Ni42NyAwIDAgLTg0Ni42NyAyNC4xOSAwem03NzQuMDkgNDguMzlsLTc0OS44OSAwIDAgNzQ5Ljg5IDc0OS44OSAwIDAgLTc0OS44OXoiIGNsYXNzPSJmaWwwIi8+CiAgIDxwYXRoIGQ9Ik00MzYuOTQgNDkwLjk2bDAgLTM1LjQ2YzAsLTMuNDYgMC4zOCwtNy4yMyAxLjE1LC0xMS4zIDAuNjgsLTMuNjMgMS42NiwtNy4yNSAyLjg3LC0xMC44NSAxLjI2LC0zLj'+
			'Y2IDIuODMsLTcuMjggNC43MiwtMTAuODIgMS42MiwtMy4yMyAzLjY0LC02LjMzIDUuOTYsLTkuMjlsNDAuMzggLTUzLjQ1YzMuNjQsLTQuNyA2Ljk1LC05LjUxIDkuODgsLTE0LjM4IDIuODYsLTQuNzUgNS4xNywtOS4xNCA2Ljg0LC0xMy4xMiAxLjU1LC0zLjY3IDIuNzYsLTcuNjcgMy41OSwtMTEuOTYgMC44MiwtNC4zMSAxLjIzLC04Ljg4IDEuMjMsLTEzLjc1IDAsLTYuODMgLTAuNTksLTEzLjI0IC0xLjc3LC0xOS4yMSAtMS4xNCwtNS44MiAtMi44NiwtMTEuMzEgLTUuMTIsLTE2LjQ0IC0yLjI4LC01LjE4IC01LjAyLC05Ljk5IC04LjE4LC0xNC4zNSAtMy4yLC00LjQxIC02Ljc0LC04LjMz'+
			'IC0xMC42LC0xMS43MmwtMC4xIC0wLjExYy00LjE1LC0zLjY2IC04LjYyLC02LjkxIC0xMy4zOSwtOS42OSAtNC42MiwtMi43IC05Ljc0LC01LjA2IC0xNS4zNCwtNy4wNSAtNS42LC0xLjk5IC0xMS4zOCwtMy40OSAtMTcuMjcsLTQuNDcgLTUuODMsLTAuOTcgLTEyLjA4LC0xLjQ2IC0xOC43MSwtMS40NiAtNi43NSwwIC0xMy4xLDAuNTEgLTE5LjAxLDEuNTEgLTUuOTYsMS4wMyAtMTEuNzMsMi41NyAtMTcuMjQsNC42IC01LjYxLDIuMDUgLTEwLjc0LDQuNDggLTE1LjM3LDcuMjUgLTQuNzksMi44NyAtOS4yMyw2LjExIC0xMy4yNCw5LjY5IC00LjA5LDMuNzUgLTcuNiw3LjY0IC0xMC40NywxMS'+
			'42OSAtMy4wMyw0LjM4IC01LjY4LDkuMTUgLTcuOTEsMTQuMzkgLTIuMjEsNS4yIC0zLjg5LDEwLjcgLTUuMDEsMTYuNDcgLTEuMTQsNS44NSAtMS43MSwxMi4xNiAtMS43MSwxOC45bC00OC4zOSAwYzAsLTkuNTQgMC44OSwtMTguODkgMi42NSwtMjcuOTcgMS43NywtOS4xMyA0LjQ2LC0xNy45MiA4LjAzLC0yNi4yOSAzLjU1LC04LjM2IDcuOTEsLTE2LjE2IDEzLjAyLC0yMy4zNyA1LjMsLTcuMzggMTEuMTQsLTEzLjk2IDE3LjUsLTE5LjY3IDYuNTgsLTUuNzggMTMuNDksLTEwLjg5IDIwLjc4LC0xNS4yMyA3LjQ5LC00LjQ4IDE1LjM0LC04LjI0IDIzLjQ5LC0xMS4yMyA4LjI0LC0zLjA0IDE2'+
			'Ljg0LC01LjMzIDI1Ljc0LC02Ljg1IDguOTgsLTEuNSAxOC4wMSwtMi4yOCAyNy4xNCwtMi4yOCA4LjkyLDAgMTcuODIsMC43NSAyNi42NSwyLjIyIDguNzcsMS40NiAxNy4yNSwzLjY0IDI1LjQsNi41NCA4LjE4LDIuOTEgMTYuMDgsNi41OSAyMy42NiwxMS4wMyA3LjM5LDQuMzMgMTQuMzYsOS4zNyAyMC44NCwxNS4wOSA2Ljg2LDUuOTkgMTIuODQsMTIuNTYgMTcuOTgsMTkuNjUgNS4xNiw3LjEyIDkuNTksMTQuODggMTMuMjgsMjMuMjUgMy43Miw4LjQ1IDYuNTEsMTcuMzUgOC4zNCwyNi42NCAxLjgxLDkuMTUgMi43MiwxOC42MyAyLjcyLDI4LjQ3IDAsNy44MiAtMC43MywxNS40NiAtMi4xOC'+
			'wyMi45MiAtMS40NCw3LjM0IC0zLjY1LDE0LjUxIC02LjYsMjEuNSAtMi44Myw2LjY5IC02LjE0LDEzLjE1IC05Ljg4LDE5LjM2IC0zLjYzLDYuMDIgLTcuOTYsMTIuMjggLTEyLjkzLDE4LjcyIC0xMy4wOSwxNy4zNiAtMzAuOSwzOC4xNCAtNDIuMDUsNTYuMSAtMC41NSwwLjg3IC0xLjA3LDIuMTIgLTEuNiwzLjY3IC0wLjU2LDEuNjUgLTAuOTYsMy4wOSAtMS4xOCw0LjIzbC0wLjIxIDIuNDIgMCAzNS40NiAtNDguMzggMHptMjQuMTkgMTMzLjYyYzIuNTUsMCA0LjgzLC0wLjk4IDYuMzksLTIuNTQgMS42MywtMS43MyAyLjY1LC0zLjk5IDIuNjUsLTYuNDggMCwtMi41IC0xLjAyLC00Ljc4IC0y'+
			'LjY0LC02LjQgLTEuNTcsLTEuNjQgLTMuODYsLTIuNjQgLTYuNCwtMi42NCAtMi41NCwwIC00LjgzLDEgLTYuNDUsMi41OSAtMS41OSwxLjYyIC0yLjU5LDMuOTEgLTIuNTksNi40NSAwLDIuNDkgMS4wMiw0Ljc1IDIuNjUsNi4zOCAxLjU2LDEuNjYgMy44MiwyLjY0IDYuMzksMi42NHptNDAuNTcgMzEuNTRjLTEwLjQ2LDEwLjQgLTI0LjgyLDE2Ljg1IC00MC41NywxNi44NSAtMTUuNzUsMCAtMzAuMTIsLTYuNDUgLTQwLjU1LC0xNi44NyAtMTAuNDQsLTEwLjM0IC0xNi44OCwtMjQuNjkgLTE2Ljg4LC00MC41NCAwLC0xNS43OCA2LjQ1LC0zMC4xMyAxNi44MiwtNDAuNTJsMC4xIC0wLjA5YzEwLj'+
			'M5LC0xMC4zNyAyNC43NCwtMTYuODIgNDAuNTEsLTE2LjgyIDE1Ljc5LDAgMzAuMTIsNi40NSA0MC41MSwxNi44MiAxMC40OSwxMC4zOSAxNi45MiwyNC43NyAxNi45Miw0MC42MSAwLDE1Ljg1IC02LjQ0LDMwLjIgLTE2Ljg2LDQwLjU2eiIgY2xhc3M9ImZpbDAiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._svghelp__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="svgHelp";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg svgBtn";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svghelp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svghelp.onclick=function (e) {
			player.setVariableValue('ScreenBg', true);
			me._container_help.style[domTransition]='none';
			me._container_help.style.visibility=(Number(me._container_help.style.opacity)>0||!me._container_help.style.opacity)?'inherit':'hidden';
			me._container_help.ggVisible=true;
			player.stopAutorotate();
			player.setVariableValue('CurrentWindow', "Help");
		}
		me._svghelp.onmouseover=function (e) {
			me._svghelp__img.style.visibility='hidden';
			me._svghelp__imgo.style.visibility='inherit';
			me.elementMouseOver['svghelp']=true;
			me._txthelp.logicBlock_alpha();
		}
		me._svghelp.onmouseout=function (e) {
			me._svghelp__img.style.visibility='inherit';
			me._svghelp__imgo.style.visibility='hidden';
			me.elementMouseOver['svghelp']=false;
			me._txthelp.logicBlock_alpha();
		}
		me._svghelp.ontouchend=function (e) {
			me.elementMouseOver['svghelp']=false;
			me._txthelp.logicBlock_alpha();
		}
		me._svghelp.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._txthelp=document.createElement('div');
		els=me._txthelp__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txtHelp";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 41px;';
		hs+='height : 20px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 7px 10px 7px 10px;';
		hs+='overflow: hidden;';
		hs+="text-shadow: #00000085 1px 1px;";
		els.setAttribute('style',hs);
		els.innerHTML="Help";
		el.appendChild(els);
		me._txthelp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txthelp.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['svghelp'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._txthelp.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._txthelp.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._txthelp.style[domTransition]='opacity 400ms ease 0ms';
				if (me._txthelp.ggCurrentLogicStateAlpha == 0) {
					me._txthelp.style.visibility=me._txthelp.ggVisible?'inherit':'hidden';
					me._txthelp.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._txthelp.style.opacity == 0.0) { me._txthelp.style.visibility="hidden"; } }, 405);
					me._txthelp.style.opacity=0;
				}
			}
		}
		me._txthelp.ggUpdatePosition=function (useTransition) {
		}
		me._svghelp.appendChild(me._txthelp);
		me._cntcontrolicon.appendChild(me._svghelp);
		me._cntmastericons.appendChild(me._cntcontrolicon);
		me.divSkin.appendChild(me._cntmastericons);
		el=me._thumbnail_container=document.createElement('div');
		el.ggId="Thumbnail_Container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : -210px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 0%';
		me._thumbnail_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_container.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('category_visible') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumbnail_container.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumbnail_container.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumbnail_container.style[domTransition]='right 1000ms ease 0ms, top 1000ms ease 0ms';
				if (me._thumbnail_container.ggCurrentLogicStatePosition == 0) {
					me._thumbnail_container.style.right='0px';
					me._thumbnail_container.style.top='0px';
				}
				else {
					me._thumbnail_container.style.right='-210px';
					me._thumbnail_container.style.top='0px';
				}
			}
		}
		me._thumbnail_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._bg5=document.createElement('div');
		el.ggId="bg5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid rgba(255,255,255,0.588235);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bg5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bg5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_container.appendChild(me._bg5);
		el=me._menu_background=document.createElement('div');
		el.ggId="menu_background";
		el.ggDx=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_background.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._category_scroller=document.createElement('div');
		els=me._category_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 135px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 154px;';
		hs+="";
		els.setAttribute('style',hs);
		me._category_scroller.ggScrollByX = function(diffX) {
			if(!me._category_scroller.ggHorScrollVisible || diffX == 0 || me._category_scroller.ggHPercentVisible >= 1.0) return;
			me._category_scroller.ggScrollPosX = (me._category_scroller__horScrollFg.offsetLeft + diffX);
			me._category_scroller.ggScrollPosX = Math.max(me._category_scroller.ggScrollPosX, 0);
			me._category_scroller.ggScrollPosX = Math.min(me._category_scroller.ggScrollPosX, me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
			me._category_scroller__horScrollFg.style.left = me._category_scroller.ggScrollPosX + 'px';
			me._category_scroller__content.style.left = -(Math.round(me._category_scroller.ggScrollPosX / me._category_scroller.ggHPercentVisible)) + me._category_scroller.ggContentLeftOffset + 'px';
			me._category_scroller.ggScrollPosXPercent = (me._category_scroller__horScrollFg.offsetLeft / me._category_scroller__horScrollBg.offsetWidth);
		}
		me._category_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._category_scroller.ggHorScrollVisible || diffX == 0 || me._category_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._category_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._category_scroller.ggScrollPosX >= me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth)) {
					me._category_scroller.ggScrollPosX = Math.min(me._category_scroller.ggScrollPosX, me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._category_scroller.ggScrollPosX <= 0)) {
					me._category_scroller.ggScrollPosX = Math.max(me._category_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._category_scroller__horScrollFg.style.left = me._category_scroller.ggScrollPosX + 'px';
			me._category_scroller__content.style.left = -(Math.round(me._category_scroller.ggScrollPosX / me._category_scroller.ggHPercentVisible)) + me._category_scroller.ggContentLeftOffset + 'px';
			me._category_scroller.ggScrollPosXPercent = (me._category_scroller__horScrollFg.offsetLeft / me._category_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._category_scroller.ggScrollByY = function(diffY) {
			if(!me._category_scroller.ggVertScrollVisible || diffY == 0 || me._category_scroller.ggVPercentVisible >= 1.0) return;
			me._category_scroller.ggScrollPosY = (me._category_scroller__vertScrollFg.offsetTop + diffY);
			me._category_scroller.ggScrollPosY = Math.max(me._category_scroller.ggScrollPosY, 0);
			me._category_scroller.ggScrollPosY = Math.min(me._category_scroller.ggScrollPosY, me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
			me._category_scroller__vertScrollFg.style.top = me._category_scroller.ggScrollPosY + 'px';
			me._category_scroller__content.style.top = -(Math.round(me._category_scroller.ggScrollPosY / me._category_scroller.ggVPercentVisible)) + me._category_scroller.ggContentTopOffset + 'px';
			me._category_scroller.ggScrollPosYPercent = (me._category_scroller__vertScrollFg.offsetTop / me._category_scroller__vertScrollBg.offsetHeight);
		}
		me._category_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._category_scroller.ggVertScrollVisible || diffY == 0 || me._category_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._category_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._category_scroller.ggScrollPosY >= me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight)) {
					me._category_scroller.ggScrollPosY = Math.min(me._category_scroller.ggScrollPosY, me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._category_scroller.ggScrollPosY <= 0)) {
					me._category_scroller.ggScrollPosY = Math.max(me._category_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._category_scroller__vertScrollFg.style.top = me._category_scroller.ggScrollPosY + 'px';
			me._category_scroller__content.style.top = -(Math.round(me._category_scroller.ggScrollPosY / me._category_scroller.ggVPercentVisible)) + me._category_scroller.ggContentTopOffset + 'px';
			me._category_scroller.ggScrollPosYPercent = (me._category_scroller__vertScrollFg.offsetTop / me._category_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._category_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._category_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._category_scroller.ggHPercentVisible);
					me._category_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._category_scroller.offsetWidth - (me._category_scroller.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._category_scroller.offsetWidth - (me._category_scroller.ggVertScrollVisible ? 5 : 0))) * me._category_scroller.ggHPercentVisible);
					me._category_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._category_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._category_scroller.ggVPercentVisible);
					me._category_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._category_scroller.offsetHeight - (me._category_scroller.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._category_scroller.offsetHeight - (me._category_scroller.ggHorScrollVisible ? 5 : 0))) * me._category_scroller.ggVPercentVisible);
					me._category_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._category_scroller.ggDragLastX = t[0].clientX;
			me._category_scroller.ggDragLastY = t[0].clientY;
			me._category_scroller__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaX *= 0.65;
					me._category_scroller.ggDragInertiaY *= 0.65;
					me._category_scroller.ggScrollByX(-me._category_scroller.ggDragInertiaX);
					me._category_scroller.ggScrollByY(-me._category_scroller.ggDragInertiaY);
					if (Math.abs(me._category_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._category_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._category_scroller__content.ontouchend = null;
				me._category_scroller__content.ontouchmove = null;
			}
			me._category_scroller__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = t[0].clientX - me._category_scroller.ggDragLastX;
				var diffY = t[0].clientY - me._category_scroller.ggDragLastY;
				me._category_scroller.ggDragInertiaX = diffX;
				me._category_scroller.ggDragInertiaY = diffY;
				me._category_scroller.ggDragLastX = t[0].clientX;
				me._category_scroller.ggDragLastY = t[0].clientY;
				me._category_scroller.ggScrollByX(-diffX);
				me._category_scroller.ggScrollByY(-diffY);
			}
		}
		elVertScrollBg = me._category_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 5px; height: 550px; background-color: rgba(215,215,215,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._category_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 5px; height: 550px; background-color: rgba(122,122,122,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._category_scroller.ggScrollPosY = 0;
		me._category_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._category_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaY *= 0.65;
					me._category_scroller.ggScrollByY(me._category_scroller.ggDragInertiaY);
					if (Math.abs(me._category_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._category_scroller.ggDragLastY;
				me._category_scroller.ggDragInertiaY = diffY;
				me._category_scroller.ggDragLastY = e.clientY;
				me._category_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._category_scroller.ggDragLastY = t[0].clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaY *= 0.65;
					me._category_scroller.ggScrollByY(me._category_scroller.ggDragInertiaY);
					if (Math.abs(me._category_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = t[0].clientY - me._category_scroller.ggDragLastY;
				me._category_scroller.ggDragInertiaY = diffY;
				me._category_scroller.ggDragLastY = t[0].clientY;
				me._category_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._category_scroller.ggScrollHeight;
			if (e.offsetY < me._category_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._category_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._category_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._category_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._category_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._category_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._category_scroller.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._category_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="category_scroller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : calc(90%);';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : inherit;';
		hs+='width : 163px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._category_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_scroller.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._category_scroller.ggScrollPosY / me._category_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._category_scroller.ggHorScrollVisible && contentHeight > this.offsetHeight - 5) || (!me._category_scroller.ggHorScrollVisible && contentHeight > this.offsetHeight)) {
					me._category_scroller__vertScrollBg.style.visibility = 'inherit';
					me._category_scroller__vertScrollFg.style.visibility = 'inherit';
					me._category_scroller.ggVertScrollVisible = true;
				} else {
					me._category_scroller__vertScrollBg.style.visibility = 'hidden';
					me._category_scroller__vertScrollFg.style.visibility = 'hidden';
					me._category_scroller.ggVertScrollVisible = false;
				}
				if(me._category_scroller.ggVertScrollVisible) {
					me._category_scroller.ggAvailableWidth = me._category_scroller.offsetWidth - 5;
					if (me._category_scroller.ggHorScrollVisible) {
						me._category_scroller.ggAvailableHeight = me._category_scroller.offsetHeight - 5;
						me._category_scroller.ggAvailableHeightWithScale = me._category_scroller.getBoundingClientRect().height - me._category_scroller__vertScrollBg.getBoundingClientRect().width;
						me._category_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._category_scroller.ggAvailableHeight = me._category_scroller.offsetHeight;
						me._category_scroller.ggAvailableHeightWithScale = me._category_scroller.getBoundingClientRect().height;
						me._category_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._category_scroller__vertScrollBg.style.height = me._category_scroller.ggAvailableHeight + 'px';
					me._category_scroller.ggVPercentVisible = contentHeight != 0 ? me._category_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._category_scroller.ggVPercentVisible > 1.0) me._category_scroller.ggVPercentVisible = 1.0;
					me._category_scroller.ggScrollHeight =  Math.round(me._category_scroller__vertScrollBg.offsetHeight * me._category_scroller.ggVPercentVisible);
					me._category_scroller__vertScrollFg.style.height = me._category_scroller.ggScrollHeight + 'px';
					me._category_scroller.ggScrollPosY = me._category_scroller.ggScrollPosYPercent * me._category_scroller.ggAvailableHeight;
					me._category_scroller.ggScrollPosY = Math.min(me._category_scroller.ggScrollPosY, me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
					me._category_scroller__vertScrollFg.style.top = me._category_scroller.ggScrollPosY + 'px';
					if (me._category_scroller.ggVPercentVisible < 1.0) {
						me._category_scroller__content.style.top = -(Math.round(me._category_scroller.ggScrollPosY / me._category_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
					}
				} else {
					me._category_scroller.ggAvailableWidth = me._category_scroller.offsetWidth;
					me._category_scroller.ggScrollPosY = 0;
					me._category_scroller.ggScrollPosYPercent = 0.0;
					me._category_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._category_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._category_scroller.ggHorScrollVisible || vertScrollWasVisible != me._category_scroller.ggVertScrollVisible) {
					me.updateSize(me._category_scroller);
					me._category_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._category_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 150;
		el.ggHeight = 128;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._category_cloner.callChildLogicBlocks_changenode = function(){
			if(me._category_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._category_cloner.ggInstances.length; i++) {
					if (me._category_cloner.ggInstances[i]._category && me._category_cloner.ggInstances[i]._category.logicBlock_textcolor) {
						me._category_cloner.ggInstances[i]._category.logicBlock_textcolor();
					}
					if (me._category_cloner.ggInstances[i]._category && me._category_cloner.ggInstances[i]._category.logicBlock_backgroundcolor) {
						me._category_cloner.ggInstances[i]._category.logicBlock_backgroundcolor();
					}
				}
			}
		}
		me._category_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._category_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._category_cloner.ggInstances.length; i++) {
					if (me._category_cloner.ggInstances[i]._category && me._category_cloner.ggInstances[i]._category.logicBlock_textcolor) {
						me._category_cloner.ggInstances[i]._category.logicBlock_textcolor();
					}
					if (me._category_cloner.ggInstances[i]._category && me._category_cloner.ggInstances[i]._category.logicBlock_backgroundcolor) {
						me._category_cloner.ggInstances[i]._category.logicBlock_backgroundcolor();
					}
				}
			}
		}
		me._category_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._category_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._category_cloner.ggInstances.length; i++) {
					me._category_cloner.ggInstances[i]._node_cloner.callChildLogicBlocks_mouseover();
				}
			}
		}
		me._category_cloner.callChildLogicBlocks_active = function(){
			if(me._category_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._category_cloner.ggInstances.length; i++) {
					me._category_cloner.ggInstances[i]._node_cloner.callChildLogicBlocks_active();
				}
			}
		}
		me._category_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._category_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._category_cloner.ggInstances.length; i++) {
					me._category_cloner.ggInstances[i]._node_cloner.callChildLogicBlocks_changevisitednodes();
				}
			}
		}
		me._category_cloner.callChildLogicBlocks_varchanged_open_tag = function(){
			if(me._category_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._category_cloner.ggInstances.length; i++) {
					if (me._category_cloner.ggInstances[i]._category && me._category_cloner.ggInstances[i]._category.logicBlock_textcolor) {
						me._category_cloner.ggInstances[i]._category.logicBlock_textcolor();
					}
					if (me._category_cloner.ggInstances[i]._category && me._category_cloner.ggInstances[i]._category.logicBlock_backgroundcolor) {
						me._category_cloner.ggInstances[i]._category.logicBlock_backgroundcolor();
					}
				}
			}
		}
		el.ggAutoPosition = function(init) {
			var currYPos = 0;
			var numElements = me._category_cloner.ggInstances.length;
			var currElement = 0;
			for (var i=0; i<me._category_cloner.ggNumRows; i++) {
				var rowMaxHeight = 0;
				for (var j=0; j<me._category_cloner.ggNumCols; j++) {
					if (numElements > currElement) {
						if (!init) {
							if (me._category_cloner.childNodes[currElement].clientHeight < me._category_cloner.childNodes[currElement].scrollHeight && currElement < (numElements - 1)) {
								me._category_cloner.childNodes[currElement].style.transition = 'top ' + 1 + 's, height ' + 1 + 's';
							} else {
								me._category_cloner.childNodes[currElement].style.transition = 'top ' + 1 + 's';
							}
						}
						me._category_cloner.childNodes[currElement].style.overflow = 'hidden';
						me._category_cloner.childNodes[currElement].style['top'] = currYPos + 'px';
						me._category_cloner.childNodes[currElement].style['height'] ='0px';
						rowMaxHeight = Math.max(rowMaxHeight, me._category_cloner.childNodes[currElement].scrollHeight);
						me._category_cloner.childNodes[currElement].style['height'] = rowMaxHeight + 'px';
					}
					currElement++;
				}
				currYPos += rowMaxHeight;
			}
			setTimeout(function() {
				var p = me._category_cloner.parentElement;
				while (p != null && p !== me.divSkin) {
					if (p.ggType && p.ggType == 'scrollarea') {
						if (p.ggUpdatePosition) {
							p.ggUpdatePosition();
						}
					}
					p = p.parentElement;
				}
			}, 1000);
		}
		el.ggUpdate = function(filter) {
			if(me._category_cloner.ggUpdating == true) return;
			me._category_cloner.ggUpdating = true;
			var el=me._category_cloner;
			var curNumCols = 0;
			curNumCols = me._category_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._category_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var firstNode;
			for (var i=0; i < el.ggTagTable.length; i++) {
				var cItem = el.ggTagTable[i];
				firstNode = '';
				cItem.nodecount = 0;
				for (var j=0; j < tourNodes.length; j++) {
					var nodeData = player.getNodeUserdata(tourNodes[j]);
					if ((nodeData['tags'].indexOf(cItem.tag) != -1) || (cItem.tag=='')) {
						var passed = true;
						if (filter.length > 0) {
							for (var k=0; k < filter.length; k++) {
								if (nodeData['tags'].indexOf(filter[k]) == -1) passed = false;
							}
						}
						if (passed) {
							cItem.nodecount++;
							if (firstNode == '') firstNode = tourNodes[j];
						}
					}
				}
				cItem.firstnode=firstNode;
				if (cItem.nodecount == 0) continue;
				var nodeId = {};
				nodeId['tag'] = cItem.tag;
				nodeId['title'] = cItem.title;
				nodeId['nodecount'] = cItem.nodecount;
				nodeId['firstnode'] = cItem.firstnode;
				var parameter={};
				parameter.top=(row * me._category_cloner.ggHeight) + 'px';
				parameter.left=(column * me._category_cloner.ggWidth) + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_category_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				inst.__div.style['height'] = '0px';
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._category_cloner.callChildLogicBlocks_changenode();
			me._category_cloner.callChildLogicBlocks_mouseover();
			me._category_cloner.callChildLogicBlocks_mouseover();
			me._category_cloner.callChildLogicBlocks_active();
			me._category_cloner.callChildLogicBlocks_changevisitednodes();
			me._category_cloner.callChildLogicBlocks_varchanged_open_tag();
			me._category_cloner.ggAutoPosition(true);
			me._category_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._category_cloner.parentNode.classList.contains('ggskin_subelement') && me._category_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._category_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTagTable = [
			{tag:"MainEntrance",title:"Main Entrance"},
			{tag:"IndividualWorkSpace",title:"Individual Work Space"},
			{tag:"CEOsCabin",title:"CEO\'s Cabin"},
			{tag:"ExecutiveCabin",title:"Executive Cabin"},
			{tag:"VideoConferencingRoom",title:"Video Conferencing Room"},
			{tag:"ManagersCubicle",title:"Manager\'s Cubicle"},
			{tag:"Reception",title:"Reception"},
			{tag:"diningloungeee",title:"Dining Lounge"},
			{tag:"Pathway",title:"Pathway"},
			];
		el.ggId="category_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 128px;';
		hs+='left : 5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._category_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._category_cloner.childNodes.length; i++) {
				var child=me._category_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._category_cloner.ggUpdatePosition=function (useTransition) {
				me._category_cloner.ggUpdate();
		}
		me._category_cloner.ggNodeChange=function () {
			me._category_cloner.ggUpdateConditionNodeChange();
		}
		me._category_scroller__content.appendChild(me._category_cloner);
		me._menu_background.appendChild(me._category_scroller);
		me._thumbnail_container.appendChild(me._menu_background);
		me.divSkin.appendChild(me._thumbnail_container);
		el=me._cntcategory=document.createElement('div');
		el.ggId="cntCategory";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : -70px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 0%';
		me._cntcategory.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._cntcategory.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('IconVisible') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._cntcategory.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._cntcategory.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._cntcategory.style[domTransition]='right 1000ms ease 0ms, top 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._cntcategory.ggCurrentLogicStatePosition == 0) {
					me._cntcategory.style.right='20px';
					me._cntcategory.style.top='20px';
				}
				else {
					me._cntcategory.style.right='20px';
					me._cntcategory.style.top='-70px';
				}
			}
		}
		me._cntcategory.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 650)) && 
				((player.getViewerSize().width > 450))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width <= 450)) && 
				((player.getViewerSize().width > 300))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._cntcategory.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._cntcategory.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._cntcategory.style[domTransition]='right 1000ms ease 0ms, top 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._cntcategory.ggCurrentLogicStateScaling == 0) {
					me._cntcategory.ggParameter.sx = 0.8;
					me._cntcategory.ggParameter.sy = 0.8;
					me._cntcategory.style[domTransform]=parameterToTransform(me._cntcategory.ggParameter);
				}
				else if (me._cntcategory.ggCurrentLogicStateScaling == 1) {
					me._cntcategory.ggParameter.sx = 0.4;
					me._cntcategory.ggParameter.sy = 0.4;
					me._cntcategory.style[domTransform]=parameterToTransform(me._cntcategory.ggParameter);
				}
				else {
					me._cntcategory.ggParameter.sx = 1;
					me._cntcategory.ggParameter.sy = 1;
					me._cntcategory.style[domTransform]=parameterToTransform(me._cntcategory.ggParameter);
				}
			}
		}
		me._cntcategory.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt_category=document.createElement('div');
		els=me._txt_category__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt_Category";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text info_title";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 173px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 177px;';
		hs+='height: 54px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 2px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 30px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="VIEW MORE";
		el.appendChild(els);
		me._txt_category.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_category.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['txt_category'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._txt_category.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._txt_category.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._txt_category__text.style[domTransition]='background-color 400ms ease 0ms, border-color 400ms ease 0ms';
				if (me._txt_category.ggCurrentLogicStateBackgroundColor == 0) {
					me._txt_category__text.style.backgroundColor="rgba(85,170,255,0.588235)";
				}
				else {
					me._txt_category__text.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._txt_category.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['txt_category'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._txt_category.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._txt_category.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._txt_category__text.style[domTransition]='background-color 400ms ease 0ms, border-color 400ms ease 0ms';
				if (me._txt_category.ggCurrentLogicStateBorderColor == 0) {
					me._txt_category__text.style.borderColor="rgba(85,170,255,0.784314)";
				}
				else {
					me._txt_category__text.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me._txt_category.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('category_visible') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._txt_category.ggCurrentLogicStateText != newLogicStateText) {
				me._txt_category.ggCurrentLogicStateText = newLogicStateText;
				me._txt_category.style[domTransition]='background-color 400ms ease 0ms, border-color 400ms ease 0ms';
				if (me._txt_category.ggCurrentLogicStateText == 0) {
					me._txt_category.ggText="Exit";
					me._txt_category__text.innerHTML=me._txt_category.ggText;
					if (me._txt_category.ggUpdateText) {
					me._txt_category.ggUpdateText=function() {
						var hs="Exit";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._txt_category.ggUpdatePosition) me._txt_category.ggUpdatePosition();
					}
				}
				else {
					me._txt_category.ggText="VIEW MORE";
					me._txt_category__text.innerHTML=me._txt_category.ggText;
					if (me._txt_category.ggUpdateText) {
					me._txt_category.ggUpdateText=function() {
						var hs="VIEW MORE";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._txt_category.ggUpdatePosition) me._txt_category.ggUpdatePosition();
					}
				}
			}
		}
		me._txt_category.onclick=function (e) {
			player.setVariableValue('category_visible', !player.getVariableValue('category_visible'));
		}
		me._txt_category.onmouseover=function (e) {
			me.elementMouseOver['txt_category']=true;
			me._txt_category.logicBlock_backgroundcolor();
			me._txt_category.logicBlock_bordercolor();
		}
		me._txt_category.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._txt_category__text)
					return;
				}
			}
			me.elementMouseOver['txt_category']=false;
			me._txt_category.logicBlock_backgroundcolor();
			me._txt_category.logicBlock_bordercolor();
		}
		me._txt_category.ontouchend=function (e) {
			me.elementMouseOver['txt_category']=false;
			me._txt_category.logicBlock_backgroundcolor();
			me._txt_category.logicBlock_bordercolor();
		}
		me._txt_category.ggUpdatePosition=function (useTransition) {
		}
		me._cntcategory.appendChild(me._txt_category);
		me.divSkin.appendChild(me._cntcategory);
		el=me._screenbg=document.createElement('div');
		el.ggId="ScreenBG";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0,sy:0 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.501961);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background: rgba(0,0,0,0.3); backdrop-filter: blur(15px); filter: blur(15px); -webkit-backdrop-filter: blur(15px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._screenbg.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screenbg.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ScreenBg') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._screenbg.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._screenbg.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._screenbg.style[domTransition]='' + cssPrefix + 'transform 400ms ease 0ms, opacity 400ms ease 0ms';
				if (me._screenbg.ggCurrentLogicStateScaling == 0) {
					me._screenbg.ggParameter.sx = 1;
					me._screenbg.ggParameter.sy = 1;
					me._screenbg.style[domTransform]=parameterToTransform(me._screenbg.ggParameter);
				}
				else {
					me._screenbg.ggParameter.sx = 0;
					me._screenbg.ggParameter.sy = 0;
					me._screenbg.style[domTransform]=parameterToTransform(me._screenbg.ggParameter);
				}
			}
		}
		me._screenbg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ScreenBg') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._screenbg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._screenbg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._screenbg.style[domTransition]='' + cssPrefix + 'transform 400ms ease 0ms, opacity 400ms ease 0ms';
				if (me._screenbg.ggCurrentLogicStateAlpha == 0) {
					me._screenbg.style.visibility=me._screenbg.ggVisible?'inherit':'hidden';
					me._screenbg.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._screenbg.style.opacity == 0.0) { me._screenbg.style.visibility="hidden"; } }, 405);
					me._screenbg.style.opacity=0;
				}
			}
		}
		me._screenbg.onclick=function (e) {
			if (
				(
					((player.getVariableValue('CurrentWindow') == "Help"))
				)
			) {
				me._ht_help_close.onclick();
			}
			if (
				(
					((player.getVariableValue('CurrentWindow') == "Video"))
				)
			) {
				me._video_close.onclick();
			}
			if (
				(
					((player.getVariableValue('CurrentWindow') == "Gallery"))
				)
			) {
				me._gallery_close.onclick();
			}
			if (
				(
					((player.getVariableValue('CurrentWindow') == "Info"))
				)
			) {
				me._ht_info_close.onclick();
			}
			if (
				(
					((player.getVariableValue('CurrentWindow') == "PopupInfo"))
				)
			) {
				me._popinfo_close.onclick();
			}
			if (
				(
					((player.getVariableValue('CurrentWindow') == "PDF"))
				)
			) {
				me._pdf_close.onclick();
			}
			if (
				(
					((player.getVariableValue('CurrentWindow') == "Share"))
				)
			) {
				me._ht_social_close.onclick();
			}
		}
		me._screenbg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._screenbg);
		el=me._container_social=document.createElement('div');
		el.ggId="Container_Social";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 270px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 400px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_social.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_social.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width < 500))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._container_social.ggCurrentLogicStateSize != newLogicStateSize) {
				me._container_social.ggCurrentLogicStateSize = newLogicStateSize;
				me._container_social.style[domTransition]='width 0s, height 0s';
				if (me._container_social.ggCurrentLogicStateSize == 0) {
					me._container_social.style.width='300px';
					me._container_social.style.height='270px';
					skin.updateSize(me._container_social);
				}
				else {
					me._container_social.style.width='400px';
					me._container_social.style.height='270px';
					skin.updateSize(me._container_social);
				}
			}
		}
		me._container_social.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rectsocialbg=document.createElement('div');
		el.ggId="rectSocialBg";
		el.ggDx=2;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0.588235);';
		hs+='border : 3px solid rgba(255,255,255,0.784314);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectsocialbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectsocialbg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_social.appendChild(me._rectsocialbg);
		el=me._rectline01=document.createElement('div');
		el.ggId="RectLine01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 3px;';
		hs+='border-radius : 3px;';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 33px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectline01.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectline01.ggUpdatePosition=function (useTransition) {
		}
		me._container_social.appendChild(me._rectline01);
		el=me._ht_social_close=document.createElement('div');
		els=me._ht_social_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiMwMDAwMDA7ZmlsbC1ydWxlOm5vbnplcm99JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxn'+
			'IGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxwb2x5Z29uIHBvaW50cz0iNzc3LjksODQ2LjY3IDQyMy4zMyw0OTIuMDkgNjguNzYsODQ2LjY3IC0wLjAxLDc3Ny45IDM1NC41Nyw0MjMuMzMgLTAuMDEsNjguNzYgNjguNzYsLTAuMDEgNDIzLjMzLDM1NC41NyA3NzcuOSwtMC4wMSA4NDYuNjcsNjguNzYgNDkyLjA5LDQyMy4zMyA4NDYuNjcsNzc3LjkgIiBjbGFzcz0iZmlsMCIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_social_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_social_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiM1NWFhZmY7ZmlsbC1ydWxlOm5vbnplcm99JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxn'+
			'IGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxwb2x5Z29uIHBvaW50cz0iNzc3LjksODQ2LjY3IDQyMy4zMyw0OTIuMDkgNjguNzYsODQ2LjY3IC0wLjAxLDc3Ny45IDM1NC41Nyw0MjMuMzMgLTAuMDEsNjguNzYgNjguNzYsLTAuMDEgNDIzLjMzLDM1NC41NyA3NzcuOSwtMC4wMSA4NDYuNjcsNjguNzYgNDkyLjA5LDQyMy4zMyA4NDYuNjcsNzc3LjkgIiBjbGFzcz0iZmlsMCIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_social_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_social_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 18px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_social_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_social_close.onclick=function (e) {
			player.setVariableValue('ScreenBg', false);
			me._container_social.style[domTransition]='none';
			me._container_social.style.visibility='hidden';
			me._container_social.ggVisible=false;
			player.startAutorotate("0.05","2");
		}
		me._ht_social_close.onmouseover=function (e) {
			me._ht_social_close__img.style.visibility='hidden';
			me._ht_social_close__imgo.style.visibility='inherit';
		}
		me._ht_social_close.onmouseout=function (e) {
			me._ht_social_close__img.style.visibility='inherit';
			me._ht_social_close__imgo.style.visibility='hidden';
		}
		me._ht_social_close.ggUpdatePosition=function (useTransition) {
		}
		me._container_social.appendChild(me._ht_social_close);
		el=me._cntsocialshare=document.createElement('div');
		el.ggId="cntSocialShare";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cntsocialshare.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cntsocialshare.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._gmail=document.createElement('div');
		els=me._gmail__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDhweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDggNDgiIGhlaWdodD0iNDhweCI+CiA8cGF0aCBkPSJNNS41LDQwLjVoMzdjMS45MzMsMCwzLjUtMS41NjcsMy41LTMuNVYxMWMwLTEuOTMzLTEuNTY3LTMuNS0zLjUtMy41aC0zN0MzLjU2Nyw3LjUsMiw5LjA2NywyLDExdjI2QzIsMzguOTMzLDMuNTY3LDQwLjUsNS41LDQwLjV6IiBmaWxsPSIjZTBlMGUwIi8+CiA8cGF0aCBkPSJNMjYsNDAuNWgxNi41YzEuOTMzLDAsMy41LTEuNTY3LDMuNS0zLjVWMTFjMC0xLjkzMy0xLjU2Ny0zLjUtMy41LTMuNWgtMzdDMy41NjcsNy41LD'+
			'IsOS4wNjcsMiwxMUwyNiw0MC41eiIgZmlsbD0iI2Q5ZDlkOSIvPgogPHBhdGggZD0iTTYuNzQ1LDQwLjVINDIuNWMxLjkzMywwLDMuNS0xLjU2NywzLjUtMy41VjExLjVMNi43NDUsNDAuNXoiIGZpbGw9IiNlZWUiLz4KIDxwYXRoIGQ9Ik0yNS43NDUsNDAuNUg0Mi41YzEuOTMzLDAsMy41LTEuNTY3LDMuNS0zLjVWMTEuNUwxOC43NzEsMzEuNjE2TDI1Ljc0NSw0MC41eiIgZmlsbD0iI2UwZTBlMCIvPgogPHBhdGggZD0iTTQyLjUsOS41aC0zN0MzLjU2Nyw5LjUsMiw5LjA2NywyLDExdjI2YzAsMS45MzMsMS41NjcsMy41LDMuNSwzLjVIN1YxMmgzNHYyOC41aDEuNWMxLjkzMywwLDMuNS0xLjU2'+
			'NywzLjUtMy41VjExQzQ2LDkuMDY3LDQ0LjQzMyw5LjUsNDIuNSw5LjV6IiBmaWxsPSIjY2EzNzM3Ii8+CiA8cGF0aCBkPSJNNDIuNSw3LjVIMjRINS41QzMuNTY3LDcuNSwyLDkuMDM2LDIsMTFjMCwxLjIwNiwxLjUxOCwyLjI1OCwxLjUxOCwyLjI1OEwyNCwyNy43NTZsMjAuNDgyLTE0LjQ5N2MwLDAsMS41MTgtMS4wNTMsMS41MTgtMi4yNThDNDYsOS4wMzYsNDQuNDMzLDcuNSw0Mi41LDcuNXoiIGZpbGw9IiNmNWY1ZjUiLz4KIDxwYXRoIGQ9Ik00My4yNDYsNy41ODJMMjQsMjFMNC43NTQsNy41ODJDMy4xOCw3LjkxOSwyLDkuMjk3LDIsMTFjMCwxLjIwNiwxLjUxOCwyLjI1OCwxLjUxOCwyLj'+
			'I1OEwyNCwyNy43NTZsMjAuNDgyLTE0LjQ5N2MwLDAsMS41MTgtMS4wNTMsMS41MTgtMi4yNThDNDYsOS4yOTcsNDQuODIsNy45MTksNDMuMjQ2LDcuNTgyeiIgZmlsbD0iI2U4NGY0YiIvPgo8L3N2Zz4K';
		me._gmail__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gmail__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiM1NWFhZmY7ZmlsbC1ydWxlOm5vbnplcm99JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxn'+
			'IGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxnIGlkPSJfMTk2NDA1NTUzOTM5MiI+CiAgIDxwYXRoIGQ9Ik0yNC4yMSAtMC4wMmw4MjIuNDcgMCAwIDg0Ni42NyAtODQ2LjY3IDAgMCAtODQ2LjY3IDI0LjIgMHptNzc0LjA2IDQ4LjQxbC03NDkuODUgMCAwIDc0OS44NSA3NDkuODUgMCAwIC03NDkuODV6IiBjbGFzcz0iZmlsMCIvPgogICA8cGF0aCBkPSJNNjUxLjczIDI2NC42MmwtNDU2LjggMCAwIDMxNy40MiA0NTYuOCAwIDAgLTMxNy40MnptLTQ4MS4wMSAtNDguNDFsNTI5LjQyIDAgMCA0MTQuMjQgLTU1My42MiAwID'+
			'AgLTQxNC4yNCAyNC4yIDB6IiBjbGFzcz0iZmlsMCIvPgogICA8cGF0aCBkPSJNMTgxLjU1IDIyMy43MmwyMjEuNzYgMjIxLjcxYzUuNDEsNS40MiAxMi42NCw4LjE2IDE5Ljg0LDguMTYgNy4yNCwwIDE0LjQ0LC0yLjcgMTkuODYsLTguMDdsMjIyLjEgLTIyMi4yMSAzNC4xOSAzNC4yIC0yMjIuMTIgMjIyLjE0Yy0xNS4wMiwxNC45IC0zNC41NCwyMi4zNSAtNTQuMDMsMjIuMzUgLTE5LjUyLDAgLTM5LjE2LC03LjUgLTU0LjAxLC0yMi4zNWwtMjIxLjc4IC0yMjEuNzMgMzQuMTkgLTM0LjJ6IiBjbGFzcz0iZmlsMCIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._gmail__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Gmail";
		el.ggDx=42;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='filter: drop-shadow(0px 5px 5px rgb(0 0 0 \/ 0.2));';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gmail.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gmail.onclick=function (e) {
			urlpath = pano.getVariableValue("LinkURLHes");
urltitle = document.title;
mailurl = "mailto:?subject=" + urltitle + "&body=" + escape(urlpath);
window.open(mailurl);
		}
		me._gmail.onmouseover=function (e) {
			me._gmail__img.style.visibility='hidden';
			me._gmail__imgo.style.visibility='inherit';
		}
		me._gmail.onmouseout=function (e) {
			me._gmail__img.style.visibility='inherit';
			me._gmail__imgo.style.visibility='hidden';
		}
		me._gmail.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cntsocialshare.appendChild(me._gmail);
		el=me._whatsapp=document.createElement('div');
		els=me._whatsapp__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDhweCIgY2xpcC1ydWxlPSJldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgaGVpZ2h0PSI0OHB4Ij4KIDxwYXRoIGQ9Ik00Ljg2OCw0My4zMDNsMi42OTQtOS44MzVDNS45LDMwLjU5LDUuMDI2LDI3LjMyNCw1LjAyNywyMy45NzlDNS4wMzIsMTMuNTE0LDEzLjU0OCw1LDI0LjAxNCw1YzUuMDc5LDAuMDAyLDkuODQ1LDEuOTc5LDEzLjQzLDUuNTY2YzMuNTg0LDMuNTg4LDUuNTU4LDguMzU2LDUuNTU2LDEzLjQyOGMtMC4wMDQsMTAuNDY1LTguNTIyLDE4Ljk4LTE4Ljk4NiwxOC45OGMtMC4wMDEsMCwwLDAsMC'+
			'wwaC0wLjAwOGMtMy4xNzctMC4wMDEtNi4zLTAuNzk4LTkuMDczLTIuMzExTDQuODY4LDQzLjMwM3oiIGZpbGw9IiNmZmYiLz4KIDxwYXRoIGQ9Ik00Ljg2OCw0My44MDNjLTAuMTMyLDAtMC4yNi0wLjA1Mi0wLjM1NS0wLjE0OGMtMC4xMjUtMC4xMjctMC4xNzQtMC4zMTItMC4xMjctMC40ODNsMi42MzktOS42MzZjLTEuNjM2LTIuOTA2LTIuNDk5LTYuMjA2LTIuNDk3LTkuNTU2QzQuNTMyLDEzLjIzOCwxMy4yNzMsNC41LDI0LjAxNCw0LjVjNS4yMSwwLjAwMiwxMC4xMDUsMi4wMzEsMTMuNzg0LDUuNzEzYzMuNjc5LDMuNjgzLDUuNzA0LDguNTc3LDUuNzAyLDEzLjc4MWMtMC4wMDQsMTAuNzQx'+
			'LTguNzQ2LDE5LjQ4LTE5LjQ4NiwxOS40OGMtMy4xODktMC4wMDEtNi4zNDQtMC43ODgtOS4xNDQtMi4yNzdsLTkuODc1LDIuNTg5QzQuOTUzLDQzLjc5OCw0LjkxMSw0My44MDMsNC44NjgsNDMuODAzeiIgZmlsbD0iI2ZmZiIvPgogPHBhdGggZD0iTTI0LjAxNCw1YzUuMDc5LDAuMDAyLDkuODQ1LDEuOTc5LDEzLjQzLDUuNTY2YzMuNTg0LDMuNTg4LDUuNTU4LDguMzU2LDUuNTU2LDEzLjQyOGMtMC4wMDQsMTAuNDY1LTguNTIyLDE4Ljk4LTE4Ljk4NiwxOC45OGgtMC4wMDhjLTMuMTc3LTAuMDAxLTYuMy0wLjc5OC05LjA3My0yLjMxMUw0Ljg2OCw0My4zMDNsMi42OTQtOS44MzVDNS45LDMwLj'+
			'U5LDUuMDI2LDI3LjMyNCw1LjAyNywyMy45NzlDNS4wMzIsMTMuNTE0LDEzLjU0OCw1LDI0LjAxNCw1IE0yNC4wMTQsNDIuOTc0QzI0LjAxNCw0Mi45NzQsMjQuMDE0LDQyLjk3NCwyNC4wMTQsNDIuOTc0QzI0LjAxNCw0Mi45NzQsMjQuMDE0LDQyLjk3NCwyNC4wMTQsNDIuOTc0IE0yNC4wMTQsNDIuOTc0QzI0LjAxNCw0Mi45NzQsMjQuMDE0LDQyLjk3NCwyNC4wMTQsNDIuOTc0QzI0LjAxNCw0Mi45NzQsMjQuMDE0LDQyLjk3NCwyNC4wMTQsNDIuOTc0IE0yNC4wMTQsNEMyNC4wMTQsNCwyNC4wMTQsNCwyNC4wMTQsNEMxMi45OTgsNCw0LjAzMiwxMi45NjIsNC4wMjcsMjMuOTc5Yy0wLjAwMSwz'+
			'LjM2NywwLjg0OSw2LjY4NSwyLjQ2MSw5LjYyMmwtMi41ODUsOS40MzljLTAuMDk0LDAuMzQ1LDAuMDAyLDAuNzEzLDAuMjU0LDAuOTY3YzAuMTksMC4xOTIsMC40NDcsMC4yOTcsMC43MTEsMC4yOTdjMC4wODUsMCwwLjE3LTAuMDExLDAuMjU0LTAuMDMzbDkuNjg3LTIuNTRjMi44MjgsMS40NjgsNS45OTgsMi4yNDMsOS4xOTcsMi4yNDRjMTEuMDI0LDAsMTkuOTktOC45NjMsMTkuOTk1LTE5Ljk4YzAuMDAyLTUuMzM5LTIuMDc1LTEwLjM1OS01Ljg0OC0xNC4xMzVDMzQuMzc4LDYuMDgzLDI5LjM1Nyw0LjAwMiwyNC4wMTQsNEwyNC4wMTQsNHoiIGZpbGw9IiNjZmQ4ZGMiLz4KIDxwYXRoIGQ9Ik'+
			'0zNS4xNzYsMTIuODMyYy0yLjk4LTIuOTgyLTYuOTQxLTQuNjI1LTExLjE1Ny00LjYyNmMtOC43MDQsMC0xNS43ODMsNy4wNzYtMTUuNzg3LDE1Ljc3NGMtMC4wMDEsMi45ODEsMC44MzMsNS44ODMsMi40MTMsOC4zOTZsMC4zNzYsMC41OTdsLTEuNTk1LDUuODIxbDUuOTczLTEuNTY2bDAuNTc3LDAuMzQyYzIuNDIyLDEuNDM4LDUuMiwyLjE5OCw4LjAzMiwyLjE5OWgwLjAwNmM4LjY5OCwwLDE1Ljc3Ny03LjA3NywxNS43OC0xNS43NzZDMzkuNzk1LDE5Ljc3OCwzOC4xNTYsMTUuODE0LDM1LjE3NiwxMi44MzJ6IiBmaWxsPSIjNDBjMzUxIi8+CiA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNs'+
			'aXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjI2OCwxNi4wNDVjLTAuMzU1LTAuNzktMC43MjktMC44MDYtMS4wNjgtMC44MmMtMC4yNzctMC4wMTItMC41OTMtMC4wMTEtMC45MDktMC4wMTFjLTAuMzE2LDAtMC44MywwLjExOS0xLjI2NSwwLjU5NGMtMC40MzUsMC40NzUtMS42NjEsMS42MjItMS42NjEsMy45NTZjMCwyLjMzNCwxLjcsNC41OSwxLjkzNyw0LjkwNmMwLjIzNywwLjMxNiwzLjI4Miw1LjI1OSw4LjEwNCw3LjE2MWM0LjAwNywxLjU4LDQuODIzLDEuMjY2LDUuNjkzLDEuMTg3YzAuODctMC4wNzksMi44MDctMS4xNDcsMy4yMDItMi4yNTVjMC4zOTUtMS4xMDgsMC4zOTUtMi4wNTcsMC'+
			'4yNzctMi4yNTVjLTAuMTE5LTAuMTk4LTAuNDM1LTAuMzE2LTAuOTA5LTAuNTU0cy0yLjgwNy0xLjM4NS0zLjI0Mi0xLjU0M2MtMC40MzUtMC4xNTgtMC43NTEtMC4yMzctMS4wNjgsMC4yMzhjLTAuMzE2LDAuNDc0LTEuMjI1LDEuNTQzLTEuNTAyLDEuODU5Yy0wLjI3NywwLjMxNy0wLjU1NCwwLjM1Ny0xLjAyOCwwLjExOWMtMC40NzQtMC4yMzgtMi4wMDItMC43MzgtMy44MTUtMi4zNTRjLTEuNDEtMS4yNTctMi4zNjItMi44MS0yLjYzOS0zLjI4NWMtMC4yNzctMC40NzQtMC4wMy0wLjczMSwwLjIwOC0wLjk2OGMwLjIxMy0wLjIxMywwLjQ3NC0wLjU1NCwwLjcxMi0wLjgzMWMwLjIzNy0wLjI3'+
			'NywwLjMxNi0wLjQ3NSwwLjQ3NC0wLjc5MWMwLjE1OC0wLjMxNywwLjA3OS0wLjU5NC0wLjA0LTAuODMxQzIwLjYxMiwxOS4zMjksMTkuNjksMTYuOTgzLDE5LjI2OCwxNi4wNDV6IiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=';
		me._whatsapp__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._whatsapp__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwxIHtmaWxsOiM1NWFhZmZ9JiN4ZDsKICAgIC5maWwwIHtmaWxsOiM1NWFhZmY7ZmlsbC1ydWxlOm5vbnplcm99'+
			'JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxnIGlkPSJfMTk2NDA2NzUzMTcyOCI+CiAgIDxwYXRoIGQ9Ik0yNC4yOCAtMC4wMmw4MjIuNCAwIDAgODQ2LjY3IC04NDYuNjcgMCAwIC04NDYuNjcgMjQuMjcgMHptNzczLjg2IDQ4LjU0bC03NDkuNTkgMCAwIDc0OS41OSA3NDkuNTkgMCAwIC03NDkuNTl6IiBjbGFzcz0iZmlsMCIvPgogICA8cGF0aCBkPSJNMTU3Ljk5IDY2MC41NmMxMC4wOCwtMzguNDMgMjAuNjEsLTc2LjY5IDMwLjk5LC0xMTUuMDggLTEwLjcsLTIwLj'+
			'c4IC0xOC40OSwtNDEuOTQgLTIzLjQzLC02My4wOCAtMTMuNzgsLTU4LjY4IC02Ljk1LC0xMTguNTMgMTYuNjYsLTE3MC42NCAyMy41OSwtNTIuMTUgNjQuMSwtOTYuNjYgMTE3LjYsLTEyNC43MyAxOS44NiwtMTAuNDIgNDEuMzIsLTE4LjU1IDY0LjEsLTIzLjlsMTMuOSAtMi44MWM3Mi42LC0xMy4yMSAxNDEuMiw0LjE2IDE5NS40Myw0MS4wNiA1NC4xNCwzNi44NyA5NC4wMiw5My4zMyAxMDkuMjIsMTU4LjMzbDIuOTIgMTQuM2MxMi43MSw3Mi40OSAtNC42OCwxNDMuMjcgLTQzLjE5LDE5OS4xNyAtMzguNTMsNTUuODUgLTk4LjMxLDk2Ljg5IC0xNzAuMzIsMTA5LjkybC0xLjUxIDAuMzRjLTI4'+
			'Ljg4LDQuOTYgLTU3LjE1LDUuMzIgLTg0Ljc0LDEuMjMgLTI3LjI4LC00IC01NCwtMTIuNDMgLTc5Ljk4LC0yNC45NyAtMzEuODgsNy45NyAtNTcuMjUsMTQuNjcgLTc2LjU4LDE5Ljc2IC0yMS40NCw1LjY1IC0zNi4xNSw5LjUzIC00My4yMiwxMC44OGwtMzcuNTcgNy4yNSA5LjcyIC0zNy4wM3ptNjAuNTMgLTM5Ljc0bC0zLjQgMTIuNDEgMS42NCAtMC40M2MyMC42NCwtNS40NCA0Ny41NiwtMTIuNTUgNzguMDIsLTIwLjE2bDAuMjggLTAuMTFjNC44LC0xLjEyIDEwLjI4LC0xLjQyIDE1LjY1LC0wLjg3IDUuMjYsMC41NSAxMC42MSwxLjk5IDE1LjI0LDQuMjUgMjEuNzQsMTAuNTYgNDQsMTcuNj'+
			'IgNjYuNjcsMjAuOTYgMjIuNTUsMy4zMyA0NS43MiwzLjAxIDY5LjQyLC0xLjAzbDEuNDIgLTAuMjhjNTguNzgsLTEwLjU4IDEwNy41NywtNDQuMTMgMTM5LjA2LC04OS44MSAzMS40OSwtNDUuNzMgNDUuNjgsLTEwMy43NyAzNS4yNCwtMTYzLjQybC0yLjM4IC0xMS42NWMtMTIuNDMsLTUzLjExIC00NS4wNCwtOTkuMyAtODkuMzMsLTEyOS40NCAtNDQuMjQsLTMwLjEyIC0xMDAuMzIsLTQ0LjI5IC0xNTkuNzQsLTMzLjQ4bC0xMS40MyAyLjQyYy0xOS4xMyw0LjUgLTM2Ljc5LDExLjE1IC01Mi43NiwxOS41NCAtNDMuNTQsMjIuODMgLTc2LjYxLDU5LjI0IC05NS44OSwxMDEuODggLTE5LjMyLDQy'+
			'LjY3IC0yNC44OSw5MS43MSAtMTMuNiwxMzkuODMgNC4yNSwxOC4xNyAxMC44NSwzNi4wOSAxOS44Niw1My4zIDIuNTYsNC44IDQuMTEsMTAuMzMgNC42NCwxNS42MSAwLjUsNS4zNyAwLjIsMTAuOSAtMS4wMywxNS43NmwtMTcuNTggNjQuNzJ6bS0yOS4zMiAtNzYuMTRsMC4xMiAtMC40NCAtMC4xMiAwLjQ0em0xMTYuNjkgMTE0Ljk1bDAuMzIgLTAuMDMgLTAuMzIgMC4wM3oiIGNsYXNzPSJmaWwwIi8+CiAgIDxwYXRoIGQ9Ik00NzUuMzEgNTE2LjFjLTM4LjM2LC0xLjM1IC05OS40NiwtMzEuNjUgLTE0MS4zMSwtMTA0LjM0IC0xNC44NSwtMjUuODUgLTEyLjcxLC01NS4zIDkuMDYsLTc1LjU0ID'+
			'cuMzYsLTYuODYgMTYuNTksLTUuMTkgMjUuMjMsLTMuNzIgMi4xMywwLjMyIDQuMzQsMy41NyA1LjQxLDUuOTcgNS41NywxMi42OSAxMS4wNiwyNS4zNyAxNS45MSwzOC4zOCAyLjU2LDYuODUgLTIuMTUsMTMuMzEgLTEyLjA3LDI0Ljc0IC0zLjE4LDMuNiAtMy44Myw2Ljk2IC0xLjM1LDExLjE2IDE2LjA5LDI3LjI2IDM4LjU4LDQ2Ljk2IDY4LjE3LDU4LjU0IDQuMzYsMS42OSA3LjYsMC42MyAxMC4zNiwtMi43OCAxNS42OCwtMTkuMTMgMTcuMjksLTI0LjczIDI1LjUyLC0yMC44IDM5LjY5LDE4Ljk2IDQyLjc4LDE5Ljc1IDQyLjk4LDI0LjI2IDEuMzQsMzMuNDQgLTI5LjMyLDQ1LjUgLTQ3Ljkx'+
			'LDQ0LjEzeiIgY2xhc3M9ImZpbDEiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._whatsapp__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Whatsapp";
		el.ggDx=15;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='filter: drop-shadow(0px 5px 5px rgb(0 0 0 \/ 0.2));';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._whatsapp.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._whatsapp.onclick=function (e) {
			urlpath = pano.getVariableValue("LinkURL");
whatsappurl = "https://api.whatsapp.com/send?text="+urlpath;
window.open(whatsappurl);
		}
		me._whatsapp.onmouseover=function (e) {
			me._whatsapp__img.style.visibility='hidden';
			me._whatsapp__imgo.style.visibility='inherit';
		}
		me._whatsapp.onmouseout=function (e) {
			me._whatsapp__img.style.visibility='inherit';
			me._whatsapp__imgo.style.visibility='hidden';
		}
		me._whatsapp.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cntsocialshare.appendChild(me._whatsapp);
		el=me._linkedin=document.createElement('div');
		els=me._linkedin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDhweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDggNDgiIGhlaWdodD0iNDhweCI+CiA8cGF0aCBkPSJNNDIsMzdjMCwyLjc2Mi0yLjIzOCw1LTUsNUgxMWMtMi43NjEsMC01LTIuMjM4LTUtNVYxMWMwLTIuNzYyLDIuMjM5LTUsNS01aDI2YzIuNzYyLDAsNSwyLjIzOCw1LDVWMzd6IiBmaWxsPSIjMDI4OEQxIi8+CiA8cGF0aCBkPSJNMTIgMTlIMTdWMzZIMTJ6TTE0LjQ4NSAxN2gtLjAyOEMxMi45NjUgMTcgMTIgMTUuODg4IDEyIDE0LjQ5OSAxMiAxMy4wOCAxMi45OTUgMTIgMTQuNTE0IDEyYzEuNTIxIDAgMi40NTggMS4wOC'+
			'AyLjQ4NiAyLjQ5OUMxNyAxNS44ODcgMTYuMDM1IDE3IDE0LjQ4NSAxN3pNMzYgMzZoLTV2LTkuMDk5YzAtMi4xOTgtMS4yMjUtMy42OTgtMy4xOTItMy42OTgtMS41MDEgMC0yLjMxMyAxLjAxMi0yLjcwNyAxLjk5QzI0Ljk1NyAyNS41NDMgMjUgMjYuNTExIDI1IDI3djloLTVWMTloNXYyLjYxNkMyNS43MjEgMjAuNSAyNi44NSAxOSAyOS43MzggMTljMy41NzggMCA2LjI2MSAyLjI1IDYuMjYxIDcuMjc0TDM2IDM2IDM2IDM2eiIgZmlsbD0iI0ZGRiIvPgo8L3N2Zz4K';
		me._linkedin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._linkedin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiM1NWFhZmY7ZmlsbC1ydWxlOm5vbnplcm99JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxn'+
			'IGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxnIGlkPSJfMjAxNTU0MjExMjU5MiI+CiAgIDxwYXRoIGQ9Ik0yNC4xOCAtMC4wMWw4MjIuNDggMCAwIDg0Ni42NyAtODQ2LjY3IDAgMCAtODQ2LjY3IDI0LjE5IDB6bTc3NC4wOSA0OC4zOWwtNzQ5Ljg5IDAgMCA3NDkuODkgNzQ5Ljg5IDAgMCAtNzQ5Ljg5eiIgY2xhc3M9ImZpbDAiLz4KICAgPHBvbHlnb24gcG9pbnRzPSI0MzUuNTEsNjkzLjA4IDQzNS41MSwzNDcuNTkgNDgzLjksMzQ3LjU5IDQ4My45LDY5My4wOCAiIGNsYXNzPSJmaWwwIi8+CiAgIDxwYXRoIGQ9Ik00Mz'+
			'UuNjEgNTAzLjY2Yy0wLjM3LC00Ny43NSAxMi42OSwtNzMuNiAxOS45NiwtODhsMC4zMyAtMC42NmMxMy4wMiwtMjUuNzQgMzguMTEsLTQyLjE1IDY2LjUxLC00OS4xMSAxOS4wMiwtNC42NSAzOS44MSwtNS4wMyA1OS4zMiwtMS4wOSAyMC4yNSw0LjEgMzkuMzYsMTIuODYgNTQuMjEsMjYuMzQgMTguMjgsMTYuNTggMzAuMDYsMzkuNyAzMC4wNiw2OS4zOWwwIDIzMi44MiAtNDguMzkgMCAwIC0yMzIuODJjMCwtMTQuNjggLTUuNTcsLTI1Ljg2IC0xNC4xOCwtMzMuNjcgLTguMjEsLTcuNDYgLTE5LjIyLC0xMi4zOSAtMzEuMTUsLTE0LjgxIC0xMi42NiwtMi41NSAtMjYuMTcsLTIuMyAtMzguNTMs'+
			'MC43MiAtMTUuNDMsMy43OCAtMjguNjQsMTEuODUgLTM0Ljc3LDIzLjk4bC0wLjMzIDAuNjVjLTUuNDEsMTAuNzIgLTE1LjEzLDI5Ljk2IC0xNC44NSw2NS44OGwtNDguMTkgMC4zOHoiIGNsYXNzPSJmaWwwIi8+CiAgIDxwb2x5Z29uIHBvaW50cz0iMTU4Ljg4LDY0NS4zNCAyNDguNzIsNjQ1LjM0IDI0OC43MiwzOTcuMzIgMTU4Ljg4LDM5Ny4zMiAxNTguODgsMzQ4LjkzIDI5Ny4xMSwzNDguOTMgMjk3LjExLDY0NS4zNCAzODYuOTUsNjQ1LjM0IDM4Ni45NSw2OTMuNzMgMTU4Ljg4LDY5My43MyAiIGNsYXNzPSJmaWwwIi8+CiAgIDxwYXRoIGQ9Ik0yMzcuMzcgMjI1LjUzYzMuNCwwIDYuNDMsLT'+
			'EuMzMgOC41NSwtMy40NWwwLjEgLTAuMWMyLjEyLC0yLjEyIDMuNDUsLTUuMTUgMy40NSwtOC41NSAwLC0zLjM5IC0xLjMzLC02LjQzIC0zLjQ1LC04LjU1bC0wLjEgLTAuMDljLTIuMTIsLTIuMTIgLTUuMTUsLTMuNDUgLTguNTUsLTMuNDUgLTMuMzksMCAtNi40MywxLjMzIC04LjU1LDMuNDVsLTAuMDkgMC4wOWMtMi4xMywyLjEyIC0zLjQ2LDUuMTYgLTMuNDYsOC41NSAwLDMuNCAxLjMzLDYuNDMgMy40Niw4LjU1bDAuMDkgMC4xYzIuMTIsMi4xMiA1LjE2LDMuNDUgOC41NSwzLjQ1em00Mi43NiAzMC41N2wtMC4wOSAwLjA5Yy0xMC45OCwxMC45NSAtMjYuMDksMTcuNzMgLTQyLjY3LDE3Ljcz'+
			'IC0xNi41OSwwIC0zMS42OSwtNi43OCAtNDIuNjYsLTE3LjczbC0wLjEgLTAuMDljLTEwLjk0LC0xMC45OCAtMTcuNzIsLTI2LjA5IC0xNy43MiwtNDIuNjcgMCwtMTYuNTkgNi43OCwtMzEuNjkgMTcuNzIsLTQyLjY2bDAuMSAtMC4xYzEwLjk3LC0xMC45NCAyNi4wNywtMTcuNzIgNDIuNjYsLTE3LjcyIDE2LjU4LDAgMzEuNjksNi43OCA0Mi42NywxNy43MmwwLjA5IDAuMWMxMC45NSwxMC45NyAxNy43MywyNi4wNyAxNy43Myw0Mi42NiAwLDE2LjU4IC02Ljc4LDMxLjY5IC0xNy43Myw0Mi42N3oiIGNsYXNzPSJmaWwwIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._linkedin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="LinkedIn";
		el.ggDx=-15;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='filter: drop-shadow(0px 5px 5px rgb(0 0 0 \/ 0.2));';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._linkedin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._linkedin.onclick=function (e) {
			urlpath = pano.getVariableValue("LinkURL");
urltitle = document.title;
var linkedinurl = "https://www.linkedin.com/shareArticle?mini=true&url=" + urlpath + "&title=" + urltitle;
window.open(linkedinurl);
		}
		me._linkedin.onmouseover=function (e) {
			me._linkedin__img.style.visibility='hidden';
			me._linkedin__imgo.style.visibility='inherit';
		}
		me._linkedin.onmouseout=function (e) {
			me._linkedin__img.style.visibility='inherit';
			me._linkedin__imgo.style.visibility='hidden';
		}
		me._linkedin.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cntsocialshare.appendChild(me._linkedin);
		el=me._facebook=document.createElement('div');
		els=me._facebook__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDhweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDggNDgiIGhlaWdodD0iNDhweCI+CiA8cGF0aCBkPSJNMjQgNUExOSAxOSAwIDEgMCAyNCA0M0ExOSAxOSAwIDEgMCAyNCA1WiIgZmlsbD0iIzAzOWJlNSIvPgogPHBhdGggZD0iTTI2LjU3MiwyOS4wMzZoNC45MTdsMC43NzItNC45OTVoLTUuNjl2LTIuNzNjMC0yLjA3NSwwLjY3OC0zLjkxNSwyLjYxOS0zLjkxNWgzLjExOXYtNC4zNTljLTAuNTQ4LTAuMDc0LTEuNzA3LTAuMjM2LTMuODk3LTAuMjM2Yy00LjU3MywwLTcuMjU0LDIuNDE1LTcuMjU0LDcuOTE3djMuMzIzaC00Lj'+
			'cwMXY0Ljk5NWg0LjcwMXYxMy43MjlDMjIuMDg5LDQyLjkwNSwyMy4wMzIsNDMsMjQsNDNjMC44NzUsMCwxLjcyOS0wLjA4LDIuNTcyLTAuMTk0VjI5LjAzNnoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==';
		me._facebook__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._facebook__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiM1NWFhZmY7ZmlsbC1ydWxlOm5vbnplcm99JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxn'+
			'IGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxnIGlkPSJfMjAxNTUwNDg0NTI4MCI+CiAgIDxwYXRoIGQ9Ik0yNC4xOCAtMC4wMWw4MjIuNDggMCAwIDg0Ni42NyAtODQ2LjY3IDAgMCAtODQ2LjY3IDI0LjE5IDB6bTc3NC4wOSA0OC4zOWwtNzQ5Ljg5IDAgMCA3NDkuODkgNzQ5Ljg5IDAgMCAtNzQ5Ljg5eiIgY2xhc3M9ImZpbDAiLz4KICAgPHBhdGggZD0iTTU3NC41NCAyMDEuMzVsLTczLjkzIDBjLTIzLjA3LDAgLTQ0LjA1LDkuNDIgLTU5LjI0LDI0LjU4IC0xNS4xNSwxNS4yNSAtMjQuNiwzNi4yMSAtMjQuNiw1OS4yM2'+
			'wwIDUzLjUgMTU3Ljc3IDAgMCA0OC4zOSAtMTU3Ljc3IDAgMCAyODIuNDMgLTQ4LjM5IDAgMCAtMjgyLjQzIC05Ni4yNSAwIDAgLTQ4LjM5IDk2LjI1IDAgMCAtNTMuNWMwLC0zNi4zOCAxNC44OCwtNjkuNDQgMzguODMsLTkzLjM4IDI0LjAzLC0yMy45MyA1Ny4wOSwtMzguODEgOTMuNCwtMzguODFsNzMuOTMgMCAwIDQ4LjM4eiIgY2xhc3M9ImZpbDAiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._facebook__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Facebook";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : 1.75%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		hs+='filter: drop-shadow(0px 5px 5px rgb(0 0 0 \/ 0.2));';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._facebook.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._facebook.onclick=function (e) {
			urlpath = pano.getVariableValue("LinkURL");
urltitle = document.title;
var fburl = "https://www.facebook.com/sharer/sharer.php?u="+ urlpath + "&t=" + urltitle;
window.open(fburl);
		}
		me._facebook.onmouseover=function (e) {
			me._facebook__img.style.visibility='hidden';
			me._facebook__imgo.style.visibility='inherit';
		}
		me._facebook.onmouseout=function (e) {
			me._facebook__img.style.visibility='inherit';
			me._facebook__imgo.style.visibility='hidden';
		}
		me._facebook.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cntsocialshare.appendChild(me._facebook);
		me._container_social.appendChild(me._cntsocialshare);
		el=me._svg_checkoff=document.createElement('div');
		els=me._svg_checkoff__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMzLjg2NjZtbSIgeG1sbnM6eG9kbT0iaHR0cDovL3d3dy5jb3JlbC5jb20vY29yZWxkcmF3L29kbS8yMDAzIiBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2'+
			'lvbjsgdGV4dC1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyBpbWFnZS1yZW5kZXJpbmc6b3B0aW1pemVRdWFsaXR5OyBmaWxsLXJ1bGU6ZXZlbm9kZDsgY2xpcC1ydWxlOmV2ZW5vZGQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMzODYuNjYgMjc3LjEiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIyLjc3MW1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiMwMDAwMDA7ZmlsbC1ydWxlOm5vbnplcm99JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxn'+
			'IGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxnIGlkPSJfMjAxNTM4MjI1MTY0OCI+CiAgIDxwYXRoIGQ9Ik00MzQuOTYgMjYuMzFsLTI0LjA4IDBjLTIuODQsMCAtNC42LDEuNzggLTQuNiw0LjYxbDAgMjM1LjIxYzAsMi44MyAxLjc2LDQuNiA0LjYsNC42bDE1NS4xNSAwYzIuODMsMCA0LjYsLTEuNzcgNC42LC00LjZsMCAtMjEuOTdjMCwtMi44MiAtMS43NywtNC42IC00LjYsLTQuNmwtMTI2LjQ2IDAgMCAtMjA4LjY0YzAsLTIuODMgLTEuNzgsLTQuNjEgLTQuNjEsLTQuNjF6bTE4Ny43NSAzNC4zN2MxMC45OCwwIDE5Lj'+
			'gzLC04Ljg2IDE5LjgzLC0yMC4yIDAsLTEwLjk3IC04Ljg1LC0xOS44NCAtMTkuODMsLTE5Ljg0IC0xMS4zNCwwIC0yMC4yLDguODcgLTIwLjIsMTkuODQgMCwxMS4zNCA4Ljg2LDIwLjIgMjAuMiwyMC4yem0xNS41OCAyMDUuNDVsMCAtMTYxLjE3YzAsLTIuODQgLTEuNzcsLTQuNjEgLTQuNiwtNC42MWwtMjIuNjggMGMtMi44MywwIC00LjYsMS43NyAtNC42LDQuNjFsMCAxNjEuMTdjMCwyLjgzIDEuNzcsNC42IDQuNiw0LjZsMjIuNjggMGMyLjgzLDAgNC42LC0xLjc3IDQuNiwtNC42em0xNDguMDYgLTE3MC43NGMtMjMuNzMsMCAtNDQuOTgsMTIuNzUgLTU0LjksMzQuNzJsMCAtMjUuMTVjMCwt'+
			'Mi44NCAtMS43OCwtNC42MSAtNC42MSwtNC42MWwtMjIuNjcgMGMtMi44MywwIC00LjYxLDEuNzcgLTQuNjEsNC42MWwwIDE2MS4xN2MwLDIuODMgMS43OCw0LjYgNC42MSw0LjZsMjIuNjcgMGMyLjgzLDAgNC42MSwtMS43NyA0LjYxLC00LjZsMCAtOTMuODhjMy4xOCwtMzMuNjQgMjUuMTUsLTQ4Ljg4IDQ4LjE3LC00OC44OCAyMy4wMywwIDM2LjEzLDExLjM0IDM2LjEzLDQyLjUybDAgMTAwLjI0YzAsMi44MyAxLjc3LDQuNiA0LjYsNC42bDIyLjY4IDBjMi44MywwIDQuNiwtMS43NyA0LjYsLTQuNmwwIC0xMDUuOTFjMCwtNDguODkgLTI5Ljc1LC02NC44MyAtNjEuMjgsLTY0Ljgzem0yMjMuNT'+
			'EgNy40NGwtNzYuNSA3NS4wOSAwIC0xNjEuMTdjMCwtMi44MyAtMS43OCwtNC42IC00LjYxLC00LjZsLTIyLjY3IDBjLTIuODMsMCAtNC42MSwxLjc3IC00LjYxLDQuNmwwIDI0OS4zOGMwLDIuODMgMS43OCw0LjYgNC42MSw0LjZsMjIuNjcgMGMyLjgzLDAgNC42MSwtMS43NyA0LjYxLC00LjZsMCAtODEuMTIgNzQuNzIgODMuMjRjMS40MiwxLjc3IDMuNTQsMi40OCA1LjY3LDIuNDhsMzAuNDcgMGMzLjg5LDAgNS4zMSwtMi44MiAyLjgzLC01LjY2bC03Ny41NyAtODUuMzcgNzguMjggLTczLjY4YzIuODQsLTIuODQgMS43NywtNS42NyAtMi4xMiwtNS42N2wtMzAuMTEgMGMtMi4xMywwIC00LjI1'+
			'LDEuMDYgLTUuNjcsMi40OHptMTc3LjQ3IC03MS45MWwwIDIxLjk2YzAsMi44MyAxLjc2LDQuNjEgNC42LDQuNjFsNzIuNjIgMCAwIDIwOC42NGMwLDIuODMgMS43Nyw0LjYgNC42MSw0LjZsMjMuNzMgMGMyLjgzLDAgNC42LC0xLjc3IDQuNiwtNC42bDAgLTIwOC42NCA3Mi42MiAwYzIuODMsMCA0LjYsLTEuNzggNC42LC00LjYxbDAgLTIxLjk2YzAsLTIuODMgLTEuNzcsLTQuNjEgLTQuNiwtNC42MWwtMTc4LjE4IDBjLTIuODQsMCAtNC42LDEuNzggLTQuNiw0LjYxem0zMDQuOTkgNjQuNDdjLTIzLjM4LDAgLTQ0Ljk5LDEzLjExIC01NC45LDM0LjcybDAgLTExMy4zNmMwLC0yLjgzIC0xLjc4LC'+
			'00LjYgLTQuNjEsLTQuNmwtMjIuNjcgMGMtMi44MywwIC00LjYxLDEuNzcgLTQuNjEsNC42bDAgMjQ5LjM4YzAsMi44MyAxLjc4LDQuNiA0LjYxLDQuNmwyMi42NyAwYzIuODMsMCA0LjYxLC0xLjc3IDQuNjEsLTQuNmwwIC05My41MmMzLjE4LC0zNCAyNS41LC00OS4yNCA0OC4xNywtNDkuMjQgMjMuMDMsMCAzNi4xMywxMS4zNCAzNi4xMyw0Mi41MmwwIDEwMC4yNGMwLDIuODMgMS43Nyw0LjYgNC42LDQuNmwyMi42OCAwYzIuODMsMCA0LjYsLTEuNzcgNC42LC00LjZsMCAtMTA1LjkxYzAsLTQ4Ljg5IC0yOS40LC02NC44MyAtNjEuMjgsLTY0Ljgzem0xMzMuMTggLTM0LjcxYzEwLjk4LDAgMTku'+
			'ODQsLTguODYgMTkuODQsLTIwLjIgMCwtMTAuOTcgLTguODYsLTE5Ljg0IC0xOS44NCwtMTkuODQgLTExLjM0LDAgLTIwLjE5LDguODcgLTIwLjE5LDE5Ljg0IDAsMTEuMzQgOC44NSwyMC4yIDIwLjE5LDIwLjJ6bTE1LjU5IDIwNS40NWwwIC0xNjEuMTdjMCwtMi44NCAtMS43OCwtNC42MSAtNC42MSwtNC42MWwtMjIuNjcgMGMtMi44MywwIC00LjYsMS43NyAtNC42LDQuNjFsMCAxNjEuMTdjMCwyLjgzIDEuNzcsNC42IDQuNiw0LjZsMjIuNjcgMGMyLjgzLDAgNC42MSwtMS43NyA0LjYxLC00LjZ6bTExMC4xNSA5LjU2YzM2Ljg0LDAgNjguNzMsLTE4LjA2IDY4LjczLC01NC41NSAwLC00Mi41MS'+
			'AtMzcuMiwtNDcuODIgLTY2LjI1LC01Mi40MyAtMjcuMjcsLTQuMjQgLTM4LjYsLTExLjMzIC0zOC42LC0yNS4xNCAwLC0xNS45NSAxNS45MywtMjAuOTEgMzIuOTQsLTIwLjkxIDIwLjU0LDAgMzUuNDIsNy40NSA0Ny4xMSwyMC41NSAyLjEyLDIuNDggNC4yNSwyLjQ4IDYuMzcsMGwxMy4xMSAtMTUuMjNjMS43OCwtMi4xMiAxLjc4LC00LjI1IDAsLTYuMzggLTE2LjY1LC0xNyAtMzkuMzEsLTI2LjIxIC02Ni45NSwtMjYuMjEgLTQwLjc0LDAgLTYxLjk5LDIzLjc0IC02MS45OSw1MC42NiAwLDM1LjQyIDMxLjUzLDQ3LjEgNjEuNjQsNTEuNzEgMjYuMjEsMy45IDQzLjU3LDcuMDkgNDMuNTcsMjUu'+
			'MTUgMCwxNy4zNiAtMTcuMzYsMjUuNSAtMzkuMzIsMjUuNSAtMjEuMjUsMCAtMzguOTcsLTguMTQgLTUwLjMsLTIzLjAyIC0yLjEyLC0yLjgzIC00LjI1LC0yLjgzIC02LjM3LC0wLjM1bC0xMy4xMiAxNy4wMWMtMS43NywyLjQ3IC0xLjQyLDQuNiAwLjM2LDYuNzIgMTcuMzYsMTcuMzYgMzcuOTEsMjYuOTIgNjkuMDcsMjYuOTJ6bTI4My4wNCAtMjQ5LjM4bC0yNC4wOSAwYy0yLjg0LDAgLTQuNiwxLjc4IC00LjYsNC42MWwwIDIzNS4yMWMwLDIuODMgMS43Niw0LjYgNC42LDQuNmwxNTUuMTQgMGMyLjgzLDAgNC42LC0xLjc3IDQuNiwtNC42bDAgLTIxLjk3YzAsLTIuODIgLTEuNzcsLTQuNiAtNC'+
			'42LC00LjZsLTEyNi40NSAwIDAgLTIwOC42NGMwLC0yLjgzIC0xLjc3LC00LjYxIC00LjYsLTQuNjF6bTI0MS4yMSAyNDkuMzhjNDguODgsMCA4Ny44NSwtMzkuNjcgODcuODUsLTkwLjMyIDAsLTQ5Ljk1IC0zOC45NywtODkuOTggLTg3Ljg1LC04OS45OCAtNDkuMjMsMCAtODguMTksNDAuMDMgLTg4LjE5LDg5Ljk4IDAsNTAuNjUgMzguOTYsOTAuMzIgODguMTksOTAuMzJ6bTAgLTI5Ljc1Yy0zMi4yNCwwIC01NS4yNiwtMjUuNTEgLTU1LjI2LC02MC41NyAwLC0zNC4wMSAyMy4wMiwtNjAuMjIgNTUuMjYsLTYwLjIyIDMxLjg5LDAgNTQuOTEsMjYuMjEgNTQuOTEsNjAuMjIgMCwzNS4wNiAtMjMu'+
			'MDIsNjAuNTcgLTU0LjkxLDYwLjU3em0xOTkuNDIgMjkuNzVjMjcuNjQsMCA1MC4zLC0xMi43NCA2Ny42NywtMzAuODIgMS43NywtMi4xMSAxLjc3LC00LjI0IDAsLTYuMzdsLTE0LjUzIC0xNS41OWMtMi4xMywtMi4xMiAtNC42LC0yLjQ4IC02LjczLDAgLTEwLjYzLDEzLjgyIC0yNi4yMSwyMy4zOCAtNDYuMDUsMjMuMzggLTMxLjg3LDAgLTU0LjksLTI1LjUgLTU0LjksLTYwLjkyIDAsLTM0LjAxIDIzLjAzLC02MC45MyA1NC45LC02MC45MyAxOS44NCwwIDM1LjQyLDkuNTYgNDYuMDUsMjMuMzcgMi4xMywyLjQ5IDQuNiwyLjQ5IDYuNzMsMC4zNmwxNC41MyAtMTUuOTRjMS43NywtMi4xMiAxLj'+
			'c3LC00LjI1IDAsLTYuMzcgLTE3LjM3LC0xOC4wNyAtNDAuMzksLTMwLjQ3IC02Ny42NywtMzAuNDcgLTQ4Ljg3LDAgLTg2Ljc3LDQwLjAzIC04Ni43Nyw4OS45OCAwLDUxLjAxIDM3LjksOTAuMzIgODYuNzcsOTAuMzJ6bTIyNy40MiAtMTUwLjE5Yy0xMy4xLC0xOC43OCAtMzMuMywtMzAuMTEgLTU4LjA5LC0zMC4xMSAtNDYuMDUsMCAtODQuMywzOS4zMiAtODQuMyw4OS45OCAwLDUxLjM2IDM4LjI1LDkwLjMyIDg0LjMsOTAuMzIgMjQuNzksMCA0NC45OSwtMTEuMzMgNTguMDksLTI5Ljc1bDAgMjAuMTljMCwyLjgzIDEuNzcsNC42IDQuNjEsNC42bDIyLjY3IDBjMi44MywwIDQuNiwtMS43NyA0'+
			'LjYsLTQuNmwwIC0xNjEuMTdjMCwtMi44NCAtMS43NywtNC42MSAtNC42LC00LjYxbC0yMi42NyAwYy0yLjg0LDAgLTQuNjEsMS43NyAtNC42MSw0LjYxbDAgMjAuNTR6bS01NS4yNiAxMjAuNzljLTMxLjg3LDAgLTU0LjksLTI1Ljg2IC01NC45LC02MC45MiAwLC0zNC4zNiAyMy4wMywtNjAuOTMgNTQuOSwtNjAuOTMgMzEuODgsMCA1NC45LDI2LjU3IDU0LjksNjAuOTMgMCwzNS4wNiAtMjMuMDIsNjAuOTIgLTU0LjksNjAuOTJ6bTI1Mi41NSAtMTIuMDRjLTkuNTYsNi43MyAtMjEuMjUsMTIuNzUgLTM2LjQ5LDEyLjc1IC0yNC4wOCwwIC0yOS4wNCwtMTcuNzEgLTI5LjA0LC00MC4zOGwwIC03OC'+
			'42NCA1Ny4wMyAwYzIuODMsMCA0LjYxLC0xLjc3IDQuNjEsLTQuNjFsMCAtMTguNDFjMCwtMi44NCAtMS43OCwtNC42MSAtNC42MSwtNC42MWwtNTcuMDMgMCAwIC01MC4zYzAsLTIuODQgLTEuNzYsLTQuNiAtNC42LC00LjZsLTIyLjY3IDBjLTIuODQsMCAtNC42LDEuNzYgLTQuNiw0LjZsMCA1MC4zIC0yOC4zNSAwYy0yLjgzLDAgLTQuNiwxLjc3IC00LjYsNC42MWwwIDE4LjQxYzAsMi44NCAxLjc3LDQuNjEgNC42LDQuNjFsMjguMzUgMCAwIDg2LjA4YzAsMzguOTYgMTkuNDgsNjEuNjMgNTguMDgsNjEuNjMgMjEuNjIsMCAzOS42OCwtNy40NCA1Mi40MywtMTYuMjkgMi4xMiwtMS43NyAyLjQ4'+
			'LC0zLjkgMS40MSwtNi4zOGwtOC4xNCAtMTcuMzVjLTEuNDIsLTMuMTkgLTMuNTQsLTMuNTQgLTYuMzgsLTEuNDJ6bTYxLjI4IC0xNzMuNTdjMTAuOTksMCAxOS44NCwtOC44NiAxOS44NCwtMjAuMiAwLC0xMC45NyAtOC44NSwtMTkuODQgLTE5Ljg0LC0xOS44NCAtMTEuMzMsMCAtMjAuMTksOC44NyAtMjAuMTksMTkuODQgMCwxMS4zNCA4Ljg2LDIwLjIgMjAuMTksMjAuMnptMTUuNTkgMjA1LjQ1bDAgLTE2MS4xN2MwLC0yLjg0IC0xLjc3LC00LjYxIC00LjYsLTQuNjFsLTIyLjY4IDBjLTIuODMsMCAtNC42LDEuNzcgLTQuNiw0LjYxbDAgMTYxLjE3YzAsMi44MyAxLjc3LDQuNiA0LjYsNC42bD'+
			'IyLjY4IDBjMi44MywwIDQuNiwtMS43NyA0LjYsLTQuNnptMTMxLjc2IDkuNTZjNDguODgsMCA4Ny44NiwtMzkuNjcgODcuODYsLTkwLjMyIDAsLTQ5Ljk1IC0zOC45OCwtODkuOTggLTg3Ljg2LC04OS45OCAtNDkuMjMsMCAtODguMTksNDAuMDMgLTg4LjE5LDg5Ljk4IDAsNTAuNjUgMzguOTYsOTAuMzIgODguMTksOTAuMzJ6bTAgLTI5Ljc1Yy0zMi4yNCwwIC01NS4yNiwtMjUuNTEgLTU1LjI2LC02MC41NyAwLC0zNC4wMSAyMy4wMiwtNjAuMjIgNTUuMjYsLTYwLjIyIDMxLjg5LDAgNTQuOTEsMjYuMjEgNTQuOTEsNjAuMjIgMCwzNS4wNiAtMjMuMDIsNjAuNTcgLTU0LjkxLDYwLjU3em0yMTcu'+
			'MTQgLTE1MC41NWMtMjMuNzMsMCAtNDQuOTgsMTIuNzUgLTU0LjksMzQuNzJsMCAtMjUuMTVjMCwtMi44NCAtMS43OCwtNC42MSAtNC42LC00LjYxbC0yMi42OCAwYy0yLjgzLDAgLTQuNiwxLjc3IC00LjYsNC42MWwwIDE2MS4xN2MwLDIuODMgMS43Nyw0LjYgNC42LDQuNmwyMi42OCAwYzIuODIsMCA0LjYsLTEuNzcgNC42LC00LjZsMCAtOTMuODhjMy4xOCwtMzMuNjQgMjUuMTUsLTQ4Ljg4IDQ4LjE3LC00OC44OCAyMy4wMiwwIDM2LjEyLDExLjM0IDM2LjEyLDQyLjUybDAgMTAwLjI0YzAsMi44MyAxLjc4LDQuNiA0LjYxLDQuNmwyMi42NyAwYzIuODMsMCA0LjYsLTEuNzcgNC42LC00LjZsMC'+
			'AtMTA1LjkxYzAsLTQ4Ljg5IC0yOS43NSwtNjQuODMgLTYxLjI3LC02NC44M3oiIGNsYXNzPSJmaWwwIi8+CiAgIDxwYXRoIGQ9Ik0yMjEuNDcgNjFsLTE2NS44MyAwIDAgMTY1Ljg0IDE2NS44MyAwIDAgLTE2NS44NHptLTE5My42NSAtNTUuNjVsMjQ5LjI5IDAgMCAyNzcuMTQgLTI3Ny4xMSAwIDAgLTI3Ny4xNCAyNy44MiAweiIgY2xhc3M9ImZpbDAiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_checkoff__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg_CheckOff";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 28px;';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_checkoff.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_checkoff.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width < 500))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._svg_checkoff.ggCurrentLogicStateSize != newLogicStateSize) {
				me._svg_checkoff.ggCurrentLogicStateSize = newLogicStateSize;
				me._svg_checkoff.style[domTransition]='width 200ms ease 0ms, height 200ms ease 0ms';
				if (me._svg_checkoff.ggCurrentLogicStateSize == 0) {
					me._svg_checkoff.style.width='144px';
					me._svg_checkoff.style.height='12px';
					skin.updateSize(me._svg_checkoff);
				}
				else {
					me._svg_checkoff.style.width='180px';
					me._svg_checkoff.style.height='15px';
					skin.updateSize(me._svg_checkoff);
				}
			}
		}
		me._svg_checkoff.onclick=function (e) {
			me._btncopyurl.ggText="Copy URL";
			me._btncopyurl.ggTextDiv.innerHTML=me._btncopyurl.ggText;
			if (me._btncopyurl.ggUpdateText) {
				me._btncopyurl.ggUpdateText=function() {
					var hs="Copy URL";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._btncopyurl.ggUpdatePosition) {
				me._btncopyurl.ggUpdatePosition();
			}
			me._btncopyurl.ggTextDiv.scrollTop = 0;
			me._svg_checkoff.style[domTransition]='none';
			me._svg_checkoff.style.visibility='hidden';
			me._svg_checkoff.ggVisible=false;
			me._svg_checkon.style[domTransition]='none';
			me._svg_checkon.style.visibility=(Number(me._svg_checkon.style.opacity)>0||!me._svg_checkon.style.opacity)?'inherit':'hidden';
			me._svg_checkon.ggVisible=true;
			me._txt_url.ggText=currentnode = pano.getCurrentNode();
currentnodedata = pano.getNodeUserdata(currentnode);
currentcustomnodeid = currentnodedata.customnodeid;

splitText = location.href.split('#')[0];
urlpath = splitText + "%23" + currentcustomnodeid + "," + pano.getPan() + "," + pano.getTilt() + "," + pano.getFov() + ",4";
pano.setVariableValue("LinkURL",urlpath);;
			me._txt_url.ggTextDiv.innerHTML=me._txt_url.ggText;
			if (me._txt_url.ggUpdateText) {
				me._txt_url.ggUpdateText=function() {
					var hs=currentnode = pano.getCurrentNode();
currentnodedata = pano.getNodeUserdata(currentnode);
currentcustomnodeid = currentnodedata.customnodeid;

splitText = location.href.split('#')[0];
urlpath = splitText + "%23" + currentcustomnodeid + "," + pano.getPan() + "," + pano.getTilt() + "," + pano.getFov() + ",4";
pano.setVariableValue("LinkURL",urlpath);;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._txt_url.ggUpdatePosition) {
				me._txt_url.ggUpdatePosition();
			}
			me._txt_url.ggTextDiv.scrollTop = 0;
			me._txt_url.ggText=currentnode = pano.getCurrentNode();
currentnodedata = pano.getNodeUserdata(currentnode);
currentcustomnodeid = currentnodedata.customnodeid;

splitText = location.href.split('#')[0];
urlpath = splitText + "#" + currentcustomnodeid + "," + pano.getPan() + "," + pano.getTilt() + "," + pano.getFov() + ",4";
pano.setVariableValue("LinkURLHes",urlpath);;
			me._txt_url.ggTextDiv.innerHTML=me._txt_url.ggText;
			if (me._txt_url.ggUpdateText) {
				me._txt_url.ggUpdateText=function() {
					var hs=currentnode = pano.getCurrentNode();
currentnodedata = pano.getNodeUserdata(currentnode);
currentcustomnodeid = currentnodedata.customnodeid;

splitText = location.href.split('#')[0];
urlpath = splitText + "#" + currentcustomnodeid + "," + pano.getPan() + "," + pano.getTilt() + "," + pano.getFov() + ",4";
pano.setVariableValue("LinkURLHes",urlpath);;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._txt_url.ggUpdatePosition) {
				me._txt_url.ggUpdatePosition();
			}
			me._txt_url.ggTextDiv.scrollTop = 0;
			me._txt_url.ggText=player.getVariableValue('LinkURLHes');
			me._txt_url.ggTextDiv.innerHTML=me._txt_url.ggText;
			if (me._txt_url.ggUpdateText) {
				me._txt_url.ggUpdateText=function() {
					var hs=player.getVariableValue('LinkURLHes');
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._txt_url.ggUpdatePosition) {
				me._txt_url.ggUpdatePosition();
			}
			me._txt_url.ggTextDiv.scrollTop = 0;
		}
		me._svg_checkoff.ggUpdatePosition=function (useTransition) {
		}
		me._container_social.appendChild(me._svg_checkoff);
		el=me._svg_checkon=document.createElement('div');
		els=me._svg_checkon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjMzLjg2NjZtbSIgeG1sbnM6eG9kbT0iaHR0cDovL3d3dy5jb3JlbC5jb20vY29yZWxkcmF3L29kbS8yMDAzIiBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2'+
			'lvbjsgdGV4dC1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyBpbWFnZS1yZW5kZXJpbmc6b3B0aW1pemVRdWFsaXR5OyBmaWxsLXJ1bGU6ZXZlbm9kZDsgY2xpcC1ydWxlOmV2ZW5vZGQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMzODYuNjYgMjc5LjU2IiB2ZXJzaW9uPSIxLjEiIGhlaWdodD0iMi43OTU2bW0iIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGRlZnM+CiAgPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwogICAgLmZpbDEge2ZpbGw6IzU1YWFmZn0mI3hkOwogICAgLmZpbDAge2ZpbGw6IzAwMDAwMDtmaWxsLXJ1bGU6bm9uemVy'+
			'b30mI3hkOwogICA8L3N0eWxlPgogPC9kZWZzPgogPGcgaWQ9IkxheWVyX3gwMDIwXzEiPgogIDxtZXRhZGF0YSBpZD0iQ29yZWxDb3JwSURfMENvcmVsLUxheWVyIi8+CiAgPHBhdGggZD0iTTQzNC45NiAyMy4zOGwtMjQuMDggMGMtMi44NCwwIC00LjYsMS43NyAtNC42LDQuNmwwIDIzNS4yMWMwLDIuODMgMS43Niw0LjYxIDQuNiw0LjYxbDE1NS4xNSAwYzIuODMsMCA0LjYsLTEuNzggNC42LC00LjYxbDAgLTIxLjk2YzAsLTIuODMgLTEuNzcsLTQuNjEgLTQuNiwtNC42MWwtMTI2LjQ2IDAgMCAtMjA4LjY0YzAsLTIuODMgLTEuNzgsLTQuNiAtNC42MSwtNC42em0xODcuNzUgMzQuMzdjMTAuOT'+
			'gsMCAxOS44MywtOC44NyAxOS44MywtMjAuMjEgMCwtMTAuOTcgLTguODUsLTE5LjgzIC0xOS44MywtMTkuODMgLTExLjM0LDAgLTIwLjIsOC44NiAtMjAuMiwxOS44MyAwLDExLjM0IDguODYsMjAuMjEgMjAuMiwyMC4yMXptMTUuNTggMjA1LjQ0bDAgLTE2MS4xN2MwLC0yLjg0IC0xLjc3LC00LjYgLTQuNiwtNC42bC0yMi42OCAwYy0yLjgzLDAgLTQuNiwxLjc2IC00LjYsNC42bDAgMTYxLjE3YzAsMi44MyAxLjc3LDQuNjEgNC42LDQuNjFsMjIuNjggMGMyLjgzLDAgNC42LC0xLjc4IDQuNiwtNC42MXptMTQ4LjA2IC0xNzAuNzNjLTIzLjczLDAgLTQ0Ljk4LDEyLjc1IC01NC45LDM0LjcxbDAg'+
			'LTI1LjE1YzAsLTIuODQgLTEuNzgsLTQuNiAtNC42MSwtNC42bC0yMi42NyAwYy0yLjgzLDAgLTQuNjEsMS43NiAtNC42MSw0LjZsMCAxNjEuMTdjMCwyLjgzIDEuNzgsNC42MSA0LjYxLDQuNjFsMjIuNjcgMGMyLjgzLDAgNC42MSwtMS43OCA0LjYxLC00LjYxbDAgLTkzLjg3YzMuMTgsLTMzLjY1IDI1LjE1LC00OC44OCA0OC4xNywtNDguODggMjMuMDMsMCAzNi4xMywxMS4zMyAzNi4xMyw0Mi41MWwwIDEwMC4yNGMwLDIuODMgMS43Nyw0LjYxIDQuNiw0LjYxbDIyLjY4IDBjMi44MywwIDQuNiwtMS43OCA0LjYsLTQuNjFsMCAtMTA1LjkxYzAsLTQ4Ljg5IC0yOS43NSwtNjQuODIgLTYxLjI4LC'+
			'02NC44MnptMjIzLjUxIDcuNDNsLTc2LjUgNzUuMSAwIC0xNjEuMThjMCwtMi44MiAtMS43OCwtNC42IC00LjYxLC00LjZsLTIyLjY3IDBjLTIuODMsMCAtNC42MSwxLjc4IC00LjYxLDQuNmwwIDI0OS4zOGMwLDIuODMgMS43OCw0LjYxIDQuNjEsNC42MWwyMi42NyAwYzIuODMsMCA0LjYxLC0xLjc4IDQuNjEsLTQuNjFsMCAtODEuMTIgNzQuNzIgODMuMjRjMS40MiwxLjc4IDMuNTQsMi40OSA1LjY3LDIuNDlsMzAuNDcgMGMzLjg5LDAgNS4zMSwtMi44MyAyLjgzLC01LjY3bC03Ny41NyAtODUuMzcgNzguMjggLTczLjY3YzIuODQsLTIuODQgMS43NywtNS42NyAtMi4xMiwtNS42N2wtMzAuMTEg'+
			'MGMtMi4xMywwIC00LjI1LDEuMDUgLTUuNjcsMi40N3ptMTc3LjQ3IC03MS45MWwwIDIxLjk3YzAsMi44MyAxLjc2LDQuNiA0LjYsNC42bDcyLjYyIDAgMCAyMDguNjRjMCwyLjgzIDEuNzcsNC42MSA0LjYxLDQuNjFsMjMuNzMgMGMyLjgzLDAgNC42LC0xLjc4IDQuNiwtNC42MWwwIC0yMDguNjQgNzIuNjIgMGMyLjgzLDAgNC42LC0xLjc3IDQuNiwtNC42bDAgLTIxLjk3YzAsLTIuODMgLTEuNzcsLTQuNiAtNC42LC00LjZsLTE3OC4xOCAwYy0yLjg0LDAgLTQuNiwxLjc3IC00LjYsNC42em0zMDQuOTkgNjQuNDhjLTIzLjM4LDAgLTQ0Ljk5LDEzLjEgLTU0LjksMzQuNzFsMCAtMTEzLjM2YzAsLT'+
			'IuODIgLTEuNzgsLTQuNiAtNC42MSwtNC42bC0yMi42NyAwYy0yLjgzLDAgLTQuNjEsMS43OCAtNC42MSw0LjZsMCAyNDkuMzhjMCwyLjgzIDEuNzgsNC42MSA0LjYxLDQuNjFsMjIuNjcgMGMyLjgzLDAgNC42MSwtMS43OCA0LjYxLC00LjYxbDAgLTkzLjUyYzMuMTgsLTM0IDI1LjUsLTQ5LjIzIDQ4LjE3LC00OS4yMyAyMy4wMywwIDM2LjEzLDExLjMzIDM2LjEzLDQyLjUxbDAgMTAwLjI0YzAsMi44MyAxLjc3LDQuNjEgNC42LDQuNjFsMjIuNjggMGMyLjgzLDAgNC42LC0xLjc4IDQuNiwtNC42MWwwIC0xMDUuOTFjMCwtNDguODkgLTI5LjQsLTY0LjgyIC02MS4yOCwtNjQuODJ6bTEzMy4xOCAt'+
			'MzQuNzFjMTAuOTgsMCAxOS44NCwtOC44NyAxOS44NCwtMjAuMjEgMCwtMTAuOTcgLTguODYsLTE5LjgzIC0xOS44NCwtMTkuODMgLTExLjM0LDAgLTIwLjE5LDguODYgLTIwLjE5LDE5LjgzIDAsMTEuMzQgOC44NSwyMC4yMSAyMC4xOSwyMC4yMXptMTUuNTkgMjA1LjQ0bDAgLTE2MS4xN2MwLC0yLjg0IC0xLjc4LC00LjYgLTQuNjEsLTQuNmwtMjIuNjcgMGMtMi44MywwIC00LjYsMS43NiAtNC42LDQuNmwwIDE2MS4xN2MwLDIuODMgMS43Nyw0LjYxIDQuNiw0LjYxbDIyLjY3IDBjMi44MywwIDQuNjEsLTEuNzggNC42MSwtNC42MXptMTEwLjE1IDkuNTdjMzYuODQsMCA2OC43MywtMTguMDcgNj'+
			'guNzMsLTU0LjU1IDAsLTQyLjUxIC0zNy4yLC00Ny44MyAtNjYuMjUsLTUyLjQzIC0yNy4yNywtNC4yNSAtMzguNiwtMTEuMzQgLTM4LjYsLTI1LjE1IDAsLTE1Ljk0IDE1LjkzLC0yMC45IDMyLjk0LC0yMC45IDIwLjU0LDAgMzUuNDIsNy40NCA0Ny4xMSwyMC41NCAyLjEyLDIuNDkgNC4yNSwyLjQ5IDYuMzcsMGwxMy4xMSAtMTUuMjNjMS43OCwtMi4xMiAxLjc4LC00LjI1IDAsLTYuMzggLTE2LjY1LC0xNi45OSAtMzkuMzEsLTI2LjIgLTY2Ljk1LC0yNi4yIC00MC43NCwwIC02MS45OSwyMy43MyAtNjEuOTksNTAuNjUgMCwzNS40MyAzMS41Myw0Ny4xMSA2MS42NCw1MS43MSAyNi4yMSwzLjkx'+
			'IDQzLjU3LDcuMDkgNDMuNTcsMjUuMTUgMCwxNy4zNiAtMTcuMzYsMjUuNTEgLTM5LjMyLDI1LjUxIC0yMS4yNSwwIC0zOC45NywtOC4xNSAtNTAuMywtMjMuMDIgLTIuMTIsLTIuODMgLTQuMjUsLTIuODMgLTYuMzcsLTAuMzZsLTEzLjEyIDE3LjAxYy0xLjc3LDIuNDcgLTEuNDIsNC42IDAuMzYsNi43MiAxNy4zNiwxNy4zNiAzNy45MSwyNi45MyA2OS4wNywyNi45M3ptMjgzLjA0IC0yNDkuMzhsLTI0LjA5IDBjLTIuODQsMCAtNC42LDEuNzcgLTQuNiw0LjZsMCAyMzUuMjFjMCwyLjgzIDEuNzYsNC42MSA0LjYsNC42MWwxNTUuMTQgMGMyLjgzLDAgNC42LC0xLjc4IDQuNiwtNC42MWwwIC0yMS'+
			'45NmMwLC0yLjgzIC0xLjc3LC00LjYxIC00LjYsLTQuNjFsLTEyNi40NSAwIDAgLTIwOC42NGMwLC0yLjgzIC0xLjc3LC00LjYgLTQuNiwtNC42em0yNDEuMjEgMjQ5LjM4YzQ4Ljg4LDAgODcuODUsLTM5LjY4IDg3Ljg1LC05MC4zMyAwLC00OS45NSAtMzguOTcsLTg5Ljk3IC04Ny44NSwtODkuOTcgLTQ5LjIzLDAgLTg4LjE5LDQwLjAyIC04OC4xOSw4OS45NyAwLDUwLjY1IDM4Ljk2LDkwLjMzIDg4LjE5LDkwLjMzem0wIC0yOS43NmMtMzIuMjQsMCAtNTUuMjYsLTI1LjUgLTU1LjI2LC02MC41NyAwLC0zNCAyMy4wMiwtNjAuMjIgNTUuMjYsLTYwLjIyIDMxLjg5LDAgNTQuOTEsMjYuMjIgNTQu'+
			'OTEsNjAuMjIgMCwzNS4wNyAtMjMuMDIsNjAuNTcgLTU0LjkxLDYwLjU3em0xOTkuNDIgMjkuNzZjMjcuNjQsMCA1MC4zLC0xMi43NSA2Ny42NywtMzAuODIgMS43NywtMi4xMiAxLjc3LC00LjI1IDAsLTYuMzhsLTE0LjUzIC0xNS41OWMtMi4xMywtMi4xMiAtNC42LC0yLjQ3IC02LjczLDAgLTEwLjYzLDEzLjgyIC0yNi4yMSwyMy4zOSAtNDYuMDUsMjMuMzkgLTMxLjg3LDAgLTU0LjksLTI1LjUxIC01NC45LC02MC45MyAwLC0zNCAyMy4wMywtNjAuOTMgNTQuOSwtNjAuOTMgMTkuODQsMCAzNS40Miw5LjU3IDQ2LjA1LDIzLjM4IDIuMTMsMi40OCA0LjYsMi40OCA2LjczLDAuMzVsMTQuNTMgLT'+
			'E1Ljk0YzEuNzcsLTIuMTIgMS43NywtNC4yNSAwLC02LjM3IC0xNy4zNywtMTguMDcgLTQwLjM5LC0zMC40NiAtNjcuNjcsLTMwLjQ2IC00OC44NywwIC04Ni43Nyw0MC4wMiAtODYuNzcsODkuOTcgMCw1MS4wMSAzNy45LDkwLjMzIDg2Ljc3LDkwLjMzem0yMjcuNDIgLTE1MC4xOWMtMTMuMSwtMTguNzggLTMzLjMsLTMwLjExIC01OC4wOSwtMzAuMTEgLTQ2LjA1LDAgLTg0LjMsMzkuMzEgLTg0LjMsODkuOTcgMCw1MS4zNiAzOC4yNSw5MC4zMyA4NC4zLDkwLjMzIDI0Ljc5LDAgNDQuOTksLTExLjM0IDU4LjA5LC0yOS43NmwwIDIwLjE5YzAsMi44MyAxLjc3LDQuNjEgNC42MSw0LjYxbDIyLjY3'+
			'IDBjMi44MywwIDQuNiwtMS43OCA0LjYsLTQuNjFsMCAtMTYxLjE3YzAsLTIuODQgLTEuNzcsLTQuNiAtNC42LC00LjZsLTIyLjY3IDBjLTIuODQsMCAtNC42MSwxLjc2IC00LjYxLDQuNmwwIDIwLjU1em0tNTUuMjYgMTIwLjc5Yy0zMS44NywwIC01NC45LC0yNS44NiAtNTQuOSwtNjAuOTMgMCwtMzQuMzYgMjMuMDMsLTYwLjkzIDU0LjksLTYwLjkzIDMxLjg4LDAgNTQuOSwyNi41NyA1NC45LDYwLjkzIDAsMzUuMDcgLTIzLjAyLDYwLjkzIC01NC45LDYwLjkzem0yNTIuNTUgLTEyLjA1Yy05LjU2LDYuNzMgLTIxLjI1LDEyLjc2IC0zNi40OSwxMi43NiAtMjQuMDgsMCAtMjkuMDQsLTE3LjcyIC'+
			'0yOS4wNCwtNDAuMzhsMCAtNzguNjUgNTcuMDMgMGMyLjgzLDAgNC42MSwtMS43NiA0LjYxLC00LjZsMCAtMTguNDJjMCwtMi44NCAtMS43OCwtNC42IC00LjYxLC00LjZsLTU3LjAzIDAgMCAtNTAuM2MwLC0yLjg0IC0xLjc2LC00LjYxIC00LjYsLTQuNjFsLTIyLjY3IDBjLTIuODQsMCAtNC42LDEuNzcgLTQuNiw0LjYxbDAgNTAuMyAtMjguMzUgMGMtMi44MywwIC00LjYsMS43NiAtNC42LDQuNmwwIDE4LjQyYzAsMi44NCAxLjc3LDQuNiA0LjYsNC42bDI4LjM1IDAgMCA4Ni4wOGMwLDM4Ljk2IDE5LjQ4LDYxLjY0IDU4LjA4LDYxLjY0IDIxLjYyLDAgMzkuNjgsLTcuNDUgNTIuNDMsLTE2LjMg'+
			'Mi4xMiwtMS43NyAyLjQ4LC0zLjkgMS40MSwtNi4zOGwtOC4xNCAtMTcuMzVjLTEuNDIsLTMuMTkgLTMuNTQsLTMuNTQgLTYuMzgsLTEuNDJ6bTYxLjI4IC0xNzMuNTZjMTAuOTksMCAxOS44NCwtOC44NyAxOS44NCwtMjAuMjEgMCwtMTAuOTcgLTguODUsLTE5LjgzIC0xOS44NCwtMTkuODMgLTExLjMzLDAgLTIwLjE5LDguODYgLTIwLjE5LDE5LjgzIDAsMTEuMzQgOC44NiwyMC4yMSAyMC4xOSwyMC4yMXptMTUuNTkgMjA1LjQ0bDAgLTE2MS4xN2MwLC0yLjg0IC0xLjc3LC00LjYgLTQuNiwtNC42bC0yMi42OCAwYy0yLjgzLDAgLTQuNiwxLjc2IC00LjYsNC42bDAgMTYxLjE3YzAsMi44MyAxLj'+
			'c3LDQuNjEgNC42LDQuNjFsMjIuNjggMGMyLjgzLDAgNC42LC0xLjc4IDQuNiwtNC42MXptMTMxLjc2IDkuNTdjNDguODgsMCA4Ny44NiwtMzkuNjggODcuODYsLTkwLjMzIDAsLTQ5Ljk1IC0zOC45OCwtODkuOTcgLTg3Ljg2LC04OS45NyAtNDkuMjMsMCAtODguMTksNDAuMDIgLTg4LjE5LDg5Ljk3IDAsNTAuNjUgMzguOTYsOTAuMzMgODguMTksOTAuMzN6bTAgLTI5Ljc2Yy0zMi4yNCwwIC01NS4yNiwtMjUuNSAtNTUuMjYsLTYwLjU3IDAsLTM0IDIzLjAyLC02MC4yMiA1NS4yNiwtNjAuMjIgMzEuODksMCA1NC45MSwyNi4yMiA1NC45MSw2MC4yMiAwLDM1LjA3IC0yMy4wMiw2MC41NyAtNTQu'+
			'OTEsNjAuNTd6bTIxNy4xNCAtMTUwLjU0Yy0yMy43MywwIC00NC45OCwxMi43NSAtNTQuOSwzNC43MWwwIC0yNS4xNWMwLC0yLjg0IC0xLjc4LC00LjYgLTQuNiwtNC42bC0yMi42OCAwYy0yLjgzLDAgLTQuNiwxLjc2IC00LjYsNC42bDAgMTYxLjE3YzAsMi44MyAxLjc3LDQuNjEgNC42LDQuNjFsMjIuNjggMGMyLjgyLDAgNC42LC0xLjc4IDQuNiwtNC42MWwwIC05My44N2MzLjE4LC0zMy42NSAyNS4xNSwtNDguODggNDguMTcsLTQ4Ljg4IDIzLjAyLDAgMzYuMTIsMTEuMzMgMzYuMTIsNDIuNTFsMCAxMDAuMjRjMCwyLjgzIDEuNzgsNC42MSA0LjYxLDQuNjFsMjIuNjcgMGMyLjgzLDAgNC42LC'+
			'0xLjc4IDQuNiwtNC42MWwwIC0xMDUuOTFjMCwtNDguODkgLTI5Ljc1LC02NC44MiAtNjEuMjcsLTY0LjgyeiIgY2xhc3M9ImZpbDAiLz4KICA8cG9seWdvbiBwb2ludHM9IjI0OS4yOSwzMC4yNCAyNy44MiwzMC4yNCAyNy44MiwyNTEuNzQgMjQ5LjI5LDI1MS43NCAiIGNsYXNzPSJmaWwxIi8+CiAgPHBhdGggZD0iTTIyMS40NyA1OC4wN2wtMTY1LjgzIDAgMCAxNjUuODUgMTY1LjgzIDAgMCAtMTY1Ljg1em0tMTkzLjY1IC01NS42NWwyNDkuMjkgMCAwIDI3Ny4xNCAtMjc3LjExIDAgMCAtMjc3LjE0IDI3LjgyIDB6IiBjbGFzcz0iZmlsMCIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_checkon__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg_CheckOn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 28px;';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_checkon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_checkon.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width < 500))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._svg_checkon.ggCurrentLogicStateSize != newLogicStateSize) {
				me._svg_checkon.ggCurrentLogicStateSize = newLogicStateSize;
				me._svg_checkon.style[domTransition]='width 200ms ease 0ms, height 200ms ease 0ms';
				if (me._svg_checkon.ggCurrentLogicStateSize == 0) {
					me._svg_checkon.style.width='144px';
					me._svg_checkon.style.height='12px';
					skin.updateSize(me._svg_checkon);
				}
				else {
					me._svg_checkon.style.width='180px';
					me._svg_checkon.style.height='15px';
					skin.updateSize(me._svg_checkon);
				}
			}
		}
		me._svg_checkon.onclick=function (e) {
			me._btncopyurl.ggText="Copy URL";
			me._btncopyurl.ggTextDiv.innerHTML=me._btncopyurl.ggText;
			if (me._btncopyurl.ggUpdateText) {
				me._btncopyurl.ggUpdateText=function() {
					var hs="Copy URL";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._btncopyurl.ggUpdatePosition) {
				me._btncopyurl.ggUpdatePosition();
			}
			me._btncopyurl.ggTextDiv.scrollTop = 0;
			me._svg_checkon.style[domTransition]='none';
			me._svg_checkon.style.visibility='hidden';
			me._svg_checkon.ggVisible=false;
			me._svg_checkoff.style[domTransition]='none';
			me._svg_checkoff.style.visibility=(Number(me._svg_checkoff.style.opacity)>0||!me._svg_checkoff.style.opacity)?'inherit':'hidden';
			me._svg_checkoff.ggVisible=true;
			me._txt_url.ggText=splitText = location.href.split('#')[0];
pano.setVariableValue("LinkURL",splitText);
pano.setVariableValue("LinkURLHes",splitText);;
			me._txt_url.ggTextDiv.innerHTML=me._txt_url.ggText;
			if (me._txt_url.ggUpdateText) {
				me._txt_url.ggUpdateText=function() {
					var hs=splitText = location.href.split('#')[0];
pano.setVariableValue("LinkURL",splitText);
pano.setVariableValue("LinkURLHes",splitText);;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._txt_url.ggUpdatePosition) {
				me._txt_url.ggUpdatePosition();
			}
			me._txt_url.ggTextDiv.scrollTop = 0;
			me._txt_url.ggText=player.getVariableValue('LinkURL');
			me._txt_url.ggTextDiv.innerHTML=me._txt_url.ggText;
			if (me._txt_url.ggUpdateText) {
				me._txt_url.ggUpdateText=function() {
					var hs=player.getVariableValue('LinkURL');
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._txt_url.ggUpdatePosition) {
				me._txt_url.ggUpdatePosition();
			}
			me._txt_url.ggTextDiv.scrollTop = 0;
		}
		me._svg_checkon.ggUpdatePosition=function (useTransition) {
		}
		me._container_social.appendChild(me._svg_checkon);
		el=me._share_title=document.createElement('div');
		els=me._share_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="share_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text info_title";
		el.ggType='text';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 40px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 30px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Share";
		el.appendChild(els);
		me._share_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._share_title.ggUpdatePosition=function (useTransition) {
		}
		me._container_social.appendChild(me._share_title);
		el=me._btncopyurl=document.createElement('div');
		els=me._btncopyurl__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="btnCopyURL";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 16px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 17px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 106px;';
		hs+='height: 36px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.588235);';
		hs+='border: 3px solid #ffffff;';
		hs+='border: 3px solid rgba(255,255,255,0.784314);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 16px 6px 16px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Copy URL";
		el.appendChild(els);
		me._btncopyurl.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btncopyurl.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['btncopyurl'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._btncopyurl.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._btncopyurl.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._btncopyurl__text.style[domTransition]='background-color 400ms ease 0ms, border-color 400ms ease 0ms, color 400ms ease 0ms';
				if (me._btncopyurl.ggCurrentLogicStateBackgroundColor == 0) {
					me._btncopyurl__text.style.backgroundColor="rgba(85,170,255,1)";
				}
				else {
					me._btncopyurl__text.style.backgroundColor="rgba(255,255,255,0.588235)";
				}
			}
		}
		me._btncopyurl.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['btncopyurl'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._btncopyurl.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._btncopyurl.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._btncopyurl__text.style[domTransition]='background-color 400ms ease 0ms, border-color 400ms ease 0ms, color 400ms ease 0ms';
				if (me._btncopyurl.ggCurrentLogicStateBorderColor == 0) {
					me._btncopyurl__text.style.borderColor="rgba(85,170,255,1)";
				}
				else {
					me._btncopyurl__text.style.borderColor="rgba(255,255,255,0.784314)";
				}
			}
		}
		me._btncopyurl.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['btncopyurl'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._btncopyurl.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._btncopyurl.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._btncopyurl__text.style[domTransition]='background-color 400ms ease 0ms, border-color 400ms ease 0ms, color 400ms ease 0ms';
				if (me._btncopyurl.ggCurrentLogicStateTextColor == 0) {
					me._btncopyurl__text.style.color="rgba(255,255,255,1)";
				}
				else {
					me._btncopyurl__text.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._btncopyurl.onclick=function (e) {
			me._btncopyurl.ggText="Link Copied";
			me._btncopyurl.ggTextDiv.innerHTML=me._btncopyurl.ggText;
			if (me._btncopyurl.ggUpdateText) {
				me._btncopyurl.ggUpdateText=function() {
					var hs="Link Copied";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._btncopyurl.ggUpdatePosition) {
				me._btncopyurl.ggUpdatePosition();
			}
			me._btncopyurl.ggTextDiv.scrollTop = 0;
			me._txt_url.ggText=dummy = document.createElement('input');
text = pano.getVariableValue("LinkURLHes");
//console.log(text);

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
dummy.setSelectionRange(0, 99999); /* For mobile devices */

/* Copy the text inside the text field */
navigator.clipboard.writeText(dummy.value);

document.body.removeChild(dummy);
//alert("The view has been copied to your computers clipboard. To paste, use the Keyboard Shortcut, Control + V for the PC or Command + V for the Mac.");;
			me._txt_url.ggTextDiv.innerHTML=me._txt_url.ggText;
			if (me._txt_url.ggUpdateText) {
				me._txt_url.ggUpdateText=function() {
					var hs=dummy = document.createElement('input');
text = pano.getVariableValue("LinkURLHes");
//console.log(text);

document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
dummy.setSelectionRange(0, 99999); /* For mobile devices */

/* Copy the text inside the text field */
navigator.clipboard.writeText(dummy.value);

document.body.removeChild(dummy);
//alert("The view has been copied to your computers clipboard. To paste, use the Keyboard Shortcut, Control + V for the PC or Command + V for the Mac.");;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._txt_url.ggUpdatePosition) {
				me._txt_url.ggUpdatePosition();
			}
			me._txt_url.ggTextDiv.scrollTop = 0;
			me._txt_url.ggText="Link copied to clipboard.";
			me._txt_url.ggTextDiv.innerHTML=me._txt_url.ggText;
			if (me._txt_url.ggUpdateText) {
				me._txt_url.ggUpdateText=function() {
					var hs="Link copied to clipboard.";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._txt_url.ggUpdatePosition) {
				me._txt_url.ggUpdatePosition();
			}
			me._txt_url.ggTextDiv.scrollTop = 0;
		}
		me._btncopyurl.onmouseover=function (e) {
			me.elementMouseOver['btncopyurl']=true;
			me._btncopyurl.logicBlock_backgroundcolor();
			me._btncopyurl.logicBlock_bordercolor();
			me._btncopyurl.logicBlock_textcolor();
		}
		me._btncopyurl.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._btncopyurl__text)
					return;
				}
			}
			me.elementMouseOver['btncopyurl']=false;
			me._btncopyurl.logicBlock_backgroundcolor();
			me._btncopyurl.logicBlock_bordercolor();
			me._btncopyurl.logicBlock_textcolor();
		}
		me._btncopyurl.ontouchend=function (e) {
			me.elementMouseOver['btncopyurl']=false;
			me._btncopyurl.logicBlock_backgroundcolor();
			me._btncopyurl.logicBlock_bordercolor();
			me._btncopyurl.logicBlock_textcolor();
		}
		me._btncopyurl.ggUpdatePosition=function (useTransition) {
		}
		me._container_social.appendChild(me._btncopyurl);
		el=me._cnturl=document.createElement('div');
		el.ggId="cntUrl";
		el.ggDx=0;
		el.ggDy=55;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cnturl.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cnturl.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._txt_url=document.createElement('div');
		els=me._txt_url__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt_URL";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text txturl";
		el.ggType='text';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 30px;';
		hs+='background: #55aaff;';
		hs+='background: rgba(85,170,255,0.784314);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 4px 6px 4px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="test";
		el.appendChild(els);
		me._txt_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_url.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cnturl.appendChild(me._txt_url);
		me._container_social.appendChild(me._cnturl);
		me.divSkin.appendChild(me._container_social);
		el=me._container_pdf=document.createElement('div');
		el.ggId="Container_PDF";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_pdf.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_pdf.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width < 500))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._container_pdf.ggCurrentLogicStateSize != newLogicStateSize) {
				me._container_pdf.ggCurrentLogicStateSize = newLogicStateSize;
				me._container_pdf.style[domTransition]='width 0s, height 0s';
				if (me._container_pdf.ggCurrentLogicStateSize == 0) {
					me._container_pdf.style.width='275%';
					me._container_pdf.style.height='450%';
					skin.updateSize(me._container_pdf);
				}
				else {
					me._container_pdf.style.width='100%';
					me._container_pdf.style.height='100%';
					skin.updateSize(me._container_pdf);
				}
			}
		}
		me._container_pdf.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._pdf=document.createElement('div');
		els=me._pdf__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pdf";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 70%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<iframe src=\"images\/document.pdf#view=FitH\" height=\"100%\" width=\"100%\" frameborder=\u201d0\u201d><\/iframe>";
		el.appendChild(els);
		me._pdf.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_pdf.appendChild(me._pdf);
		el=me._pdf_close=document.createElement('div');
		els=me._pdf_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiNmZmZmZmZ9JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGlkPSJMYXllcl94MDAyMF8x'+
			'Ij4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxwYXRoIGQ9Ik0tMC4wMSAtMC4wMWw4NDYuNjggMCAwIDg0Ni42OCAtODQ2LjY4IDAgMCAtODQ2LjY4em0xOTguNzYgNjI5Ljc5bDIwNi40NSAtMjA2LjQ1IC0yMDYuNDUgLTIwNi40NSAxOC4xMyAtMTguMTMgMjA2LjQ1IDIwNi40NSAyMDYuNDUgLTIwNi40NSAxOC4xMyAxOC4xMyAtMjA2LjQ1IDIwNi40NSAyMDYuNDUgMjA2LjQ1IC0xOC4xMyAxOC4xMyAtMjA2LjQ1IC0yMDYuNDUgLTIwNi40NSAyMDYuNDUgLTE4LjEzIC0xOC4xM3oiIGNsYXNzPSJmaWwwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._pdf_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pdf_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiM1NWFhZmZ9JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGlkPSJMYXllcl94MDAyMF8x'+
			'Ij4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxwYXRoIGQ9Ik0tMC4wMSAtMC4wMWw4NDYuNjggMCAwIDg0Ni42OCAtODQ2LjY4IDAgMCAtODQ2LjY4em0xOTguNzYgNjI5Ljc5bDIwNi40NSAtMjA2LjQ1IC0yMDYuNDUgLTIwNi40NSAxOC4xMyAtMTguMTMgMjA2LjQ1IDIwNi40NSAyMDYuNDUgLTIwNi40NSAxOC4xMyAxOC4xMyAtMjA2LjQ1IDIwNi40NSAyMDYuNDUgMjA2LjQ1IC0xOC4xMyAxOC4xMyAtMjA2LjQ1IC0yMDYuNDUgLTIwNi40NSAyMDYuNDUgLTE4LjEzIC0xOC4xM3oiIGNsYXNzPSJmaWwwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._pdf_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="PDF_close";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pdf_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_close.onclick=function (e) {
			me._container_pdf.style[domTransition]='none';
			me._container_pdf.style.visibility='hidden';
			me._container_pdf.ggVisible=false;
			player.setVariableValue('ScreenBg', false);
			player.startAutorotate("0.05","2");
		}
		me._pdf_close.onmouseover=function (e) {
			me._pdf_close__img.style.visibility='hidden';
			me._pdf_close__imgo.style.visibility='inherit';
		}
		me._pdf_close.onmouseout=function (e) {
			me._pdf_close__img.style.visibility='inherit';
			me._pdf_close__imgo.style.visibility='hidden';
		}
		me._pdf_close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_pdf.appendChild(me._pdf_close);
		me.divSkin.appendChild(me._container_pdf);
		el=me._container_popinfo=document.createElement('div');
		el.ggId="Container_PopInfo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_popinfo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_popinfo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._txt_popinfo=document.createElement('div');
		els=me._txt_popinfo__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt_PopInfo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text info_body";
		el.ggType='text';
		hs ='';
		hs+='height : auto;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 356px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.784314);';
		hs+='border: 3px solid #ffffff;';
		hs+='border: 3px solid rgba(255,255,255,0.784314);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: justify;';
		hs+='white-space: normal;';
		hs+='padding: 15px 16px 15px 16px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="max-height: 400px; transform:translateY(-50%);";
		els.setAttribute('style',hs);
		me._txt_popinfo.ggUpdateText=function() {
			var hs="<b class=\"info_title\" style=\"color: #ee1e2e;font-size: 15px;\"><strong>"+player.getVariableValue('info_title')+"<\/strong><\/b><br><br\/>"+player.getVariableValue('info_body');
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_popinfo.ggUpdateText();
		player.addListener('timer', function() {
			me._txt_popinfo.ggUpdateText();
		});
		el.appendChild(els);
		me._txt_popinfo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_popinfo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 6;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_popinfo.appendChild(me._txt_popinfo);
		el=me._popinfo_close=document.createElement('div');
		els=me._popinfo_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiNmZmZmZmZ9JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGlkPSJMYXllcl94MDAyMF8x'+
			'Ij4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxwYXRoIGQ9Ik0tMC4wMSAtMC4wMWw4NDYuNjggMCAwIDg0Ni42OCAtODQ2LjY4IDAgMCAtODQ2LjY4em0xOTguNzYgNjI5Ljc5bDIwNi40NSAtMjA2LjQ1IC0yMDYuNDUgLTIwNi40NSAxOC4xMyAtMTguMTMgMjA2LjQ1IDIwNi40NSAyMDYuNDUgLTIwNi40NSAxOC4xMyAxOC4xMyAtMjA2LjQ1IDIwNi40NSAyMDYuNDUgMjA2LjQ1IC0xOC4xMyAxOC4xMyAtMjA2LjQ1IC0yMDYuNDUgLTIwNi40NSAyMDYuNDUgLTE4LjEzIC0xOC4xM3oiIGNsYXNzPSJmaWwwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._popinfo_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._popinfo_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiM1NWFhZmZ9JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGlkPSJMYXllcl94MDAyMF8x'+
			'Ij4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxwYXRoIGQ9Ik0tMC4wMSAtMC4wMWw4NDYuNjggMCAwIDg0Ni42OCAtODQ2LjY4IDAgMCAtODQ2LjY4em0xOTguNzYgNjI5Ljc5bDIwNi40NSAtMjA2LjQ1IC0yMDYuNDUgLTIwNi40NSAxOC4xMyAtMTguMTMgMjA2LjQ1IDIwNi40NSAyMDYuNDUgLTIwNi40NSAxOC4xMyAxOC4xMyAtMjA2LjQ1IDIwNi40NSAyMDYuNDUgMjA2LjQ1IC0xOC4xMyAxOC4xMyAtMjA2LjQ1IC0yMDYuNDUgLTIwNi40NSAyMDYuNDUgLTE4LjEzIC0xOC4xM3oiIGNsYXNzPSJmaWwwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._popinfo_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="PopInfo_close";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popinfo_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popinfo_close.onclick=function (e) {
			me._container_popinfo.style[domTransition]='none';
			me._container_popinfo.style.visibility='hidden';
			me._container_popinfo.ggVisible=false;
			player.startAutorotate("0.05","2");
			player.setVariableValue('ScreenBg', false);
		}
		me._popinfo_close.onmouseover=function (e) {
			me._popinfo_close__img.style.visibility='hidden';
			me._popinfo_close__imgo.style.visibility='inherit';
		}
		me._popinfo_close.onmouseout=function (e) {
			me._popinfo_close__img.style.visibility='inherit';
			me._popinfo_close__imgo.style.visibility='hidden';
		}
		me._popinfo_close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_popinfo.appendChild(me._popinfo_close);
		me.divSkin.appendChild(me._container_popinfo);
		el=me._container_info=document.createElement('div');
		el.ggId="Container_Info";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 450px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 400px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_info.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width < 500))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._container_info.ggCurrentLogicStateSize != newLogicStateSize) {
				me._container_info.ggCurrentLogicStateSize = newLogicStateSize;
				me._container_info.style[domTransition]='width 0s, height 0s';
				if (me._container_info.ggCurrentLogicStateSize == 0) {
					me._container_info.style.width='275px';
					me._container_info.style.height='450px';
					skin.updateSize(me._container_info);
				}
				else {
					me._container_info.style.width='400px';
					me._container_info.style.height='450px';
					skin.updateSize(me._container_info);
				}
			}
		}
		me._container_info.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rectinfobg=document.createElement('div');
		el.ggId="rectInfoBg";
		el.ggDx=1;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle rectBox";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0.588235);';
		hs+='border : 3px solid rgba(255,255,255,0.784314);';
		hs+='cursor : default;';
		hs+='height : 110%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 110%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectinfobg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectinfobg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_info.appendChild(me._rectinfobg);
		el=me._txt_info_text_body=document.createElement('div');
		els=me._txt_info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt_info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text info_body";
		el.ggType='text';
		hs ='';
		hs+='height : 285px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 109px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 285px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: justify;';
		hs+='white-space: normal;';
		hs+='padding: 2px 7px 2px 7px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Calm. Quiet. Peaceful. That is the best kind of place to co-work.<br\/><br\/>We call it Vayuhu!<br\/><br\/>Welcome to Vayuhu, where work meets community in the heart of Bengaluru. We offer a vibrant and collaborative environment designed to inspire innovation and productivity. Our flexible workspaces cater to freelancers, startups and established businesses, providing the perfect setting to grow and succeed.";
		el.appendChild(els);
		me._txt_info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_info_text_body.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width < 500))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._txt_info_text_body.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._txt_info_text_body.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._txt_info_text_body.style[domTransition]='left 0s, top 0s';
				if (me._txt_info_text_body.ggCurrentLogicStatePosition == 0) {
					me._txt_info_text_body.style.left='0px';
					me._txt_info_text_body.style.top='125px';
				}
				else {
					me._txt_info_text_body.style.left='-1px';
					me._txt_info_text_body.style.top='109px';
				}
			}
		}
		me._txt_info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._container_info.appendChild(me._txt_info_text_body);
		el=me._rectangleline01=document.createElement('div');
		el.ggId="RectangleLine01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangleline01.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangleline01.ggUpdatePosition=function (useTransition) {
		}
		me._container_info.appendChild(me._rectangleline01);
		el=me._txt_readmore=document.createElement('div');
		els=me._txt_readmore__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt_ReadMore";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text txtBtn";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.588235);';
		hs+='border: 3px solid #ffffff;';
		hs+='border: 3px solid rgba(255,255,255,0.784314);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(85,170,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 7px 16px 7px 16px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<a href=\"tel:+917348857574\">Call Now<\/a>";
		el.appendChild(els);
		me._txt_readmore.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_readmore.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['txt_readmore'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._txt_readmore.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._txt_readmore.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._txt_readmore__text.style[domTransition]='background-color 400ms ease 0ms, border-color 400ms ease 0ms, color 400ms ease 0ms';
				if (me._txt_readmore.ggCurrentLogicStateBackgroundColor == 0) {
					me._txt_readmore__text.style.backgroundColor="rgba(85,170,255,1)";
				}
				else {
					me._txt_readmore__text.style.backgroundColor="rgba(255,255,255,0.588235)";
				}
			}
		}
		me._txt_readmore.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['txt_readmore'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._txt_readmore.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._txt_readmore.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._txt_readmore__text.style[domTransition]='background-color 400ms ease 0ms, border-color 400ms ease 0ms, color 400ms ease 0ms';
				if (me._txt_readmore.ggCurrentLogicStateBorderColor == 0) {
					me._txt_readmore__text.style.borderColor="rgba(85,170,255,1)";
				}
				else {
					me._txt_readmore__text.style.borderColor="rgba(255,255,255,0.784314)";
				}
			}
		}
		me._txt_readmore.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['txt_readmore'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._txt_readmore.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._txt_readmore.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._txt_readmore__text.style[domTransition]='background-color 400ms ease 0ms, border-color 400ms ease 0ms, color 400ms ease 0ms';
				if (me._txt_readmore.ggCurrentLogicStateTextColor == 0) {
					me._txt_readmore__text.style.color="rgba(255,255,255,1)";
				}
				else {
					me._txt_readmore__text.style.color="rgba(85,170,255,1)";
				}
			}
		}
		me._txt_readmore.onmouseover=function (e) {
			me.elementMouseOver['txt_readmore']=true;
			me._txt_readmore.logicBlock_backgroundcolor();
			me._txt_readmore.logicBlock_bordercolor();
			me._txt_readmore.logicBlock_textcolor();
		}
		me._txt_readmore.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._txt_readmore__text)
					return;
				}
			}
			me.elementMouseOver['txt_readmore']=false;
			me._txt_readmore.logicBlock_backgroundcolor();
			me._txt_readmore.logicBlock_bordercolor();
			me._txt_readmore.logicBlock_textcolor();
		}
		me._txt_readmore.ontouchend=function (e) {
			me.elementMouseOver['txt_readmore']=false;
			me._txt_readmore.logicBlock_backgroundcolor();
			me._txt_readmore.logicBlock_bordercolor();
			me._txt_readmore.logicBlock_textcolor();
		}
		me._txt_readmore.ggUpdatePosition=function (useTransition) {
		}
		me._container_info.appendChild(me._txt_readmore);
		el=me._ht_info_close=document.createElement('div');
		els=me._ht_info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiMwMDAwMDA7ZmlsbC1ydWxlOm5vbnplcm99JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxn'+
			'IGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxwb2x5Z29uIHBvaW50cz0iNzc3LjksODQ2LjY3IDQyMy4zMyw0OTIuMDkgNjguNzYsODQ2LjY3IC0wLjAxLDc3Ny45IDM1NC41Nyw0MjMuMzMgLTAuMDEsNjguNzYgNjguNzYsLTAuMDEgNDIzLjMzLDM1NC41NyA3NzcuOSwtMC4wMSA4NDYuNjcsNjguNzYgNDkyLjA5LDQyMy4zMyA4NDYuNjcsNzc3LjkgIiBjbGFzcz0iZmlsMCIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_info_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiM1NWFhZmY7ZmlsbC1ydWxlOm5vbnplcm99JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxn'+
			'IGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxwb2x5Z29uIHBvaW50cz0iNzc3LjksODQ2LjY3IDQyMy4zMyw0OTIuMDkgNjguNzYsODQ2LjY3IC0wLjAxLDc3Ny45IDM1NC41Nyw0MjMuMzMgLTAuMDEsNjguNzYgNjguNzYsLTAuMDEgNDIzLjMzLDM1NC41NyA3NzcuOSwtMC4wMSA4NDYuNjcsNjguNzYgNDkyLjA5LDQyMy4zMyA4NDYuNjcsNzc3LjkgIiBjbGFzcz0iZmlsMCIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_info_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close.onclick=function (e) {
			me._container_info.style[domTransition]='none';
			me._container_info.style.visibility='hidden';
			me._container_info.ggVisible=false;
			player.setVariableValue('ScreenBg', false);
			player.startAutorotate("0.05","2");
		}
		me._ht_info_close.onmouseover=function (e) {
			me._ht_info_close__img.style.visibility='hidden';
			me._ht_info_close__imgo.style.visibility='inherit';
		}
		me._ht_info_close.onmouseout=function (e) {
			me._ht_info_close__img.style.visibility='inherit';
			me._ht_info_close__imgo.style.visibility='hidden';
		}
		me._ht_info_close.ggUpdatePosition=function (useTransition) {
		}
		me._container_info.appendChild(me._ht_info_close);
		el=me._txt_info_title=document.createElement('div');
		els=me._txt_info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt_info_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text info_title";
		el.ggType='text';
		hs ='';
		hs+='height : 68px;';
		hs+='left : -2px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(85,170,255,1);';
		hs+='font-size: 25px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Vayuhu Workspace";
		el.appendChild(els);
		me._txt_info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_info_title.ggUpdatePosition=function (useTransition) {
		}
		me._container_info.appendChild(me._txt_info_title);
		me.divSkin.appendChild(me._container_info);
		el=me._container_gallery=document.createElement('div');
		el.ggId="Container_Gallery";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_gallery.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_gallery.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('gallery_show_hide') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._container_gallery.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._container_gallery.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._container_gallery.style[domTransition]='';
				if (me._container_gallery.ggCurrentLogicStateVisible == 0) {
					me._container_gallery.style.visibility=(Number(me._container_gallery.style.opacity)>0||!me._container_gallery.style.opacity)?'inherit':'hidden';
					me._container_gallery.ggVisible=true;
				}
				else {
					me._container_gallery.style.visibility="hidden";
					me._container_gallery.ggVisible=false;
				}
			}
		}
		me._container_gallery.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rect_close=document.createElement('div');
		el.ggId="Rect_close";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rect_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rect_close.onclick=function (e) {
			player.setVariableValue('gallery_show_hide', false);
			player.setVariableValue('gallery_pictures', Number("0"));
			me._gallery_timer.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer.ggTimestamp=skin.ggCurrentTime;
			player.startAutorotate("0.05");
			player.setVariableValue('ScreenBg', false);
		}
		me._rect_close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_gallery.appendChild(me._rect_close);
		el=me._loading_image_file=document.createElement('div');
		els=me._loading_image_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIiBoZWlnaHQ9IjY0IiBmaWxsPSJ3aGl0ZSI+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBiZWdpbj0iMCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHRyYW'+
			'5zZm9ybT0icm90YXRlKDQ1IDE2IDE2KSIgcj0iMCI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGJlZ2luPSIwLjEyNXMiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiIHI9IjAiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVw'+
			'ZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBiZWdpbj0iMC4yNXMiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIiByPSIwIj4KICA8YW5pbWF0ZSBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYmVnaW49Ij'+
			'AuMzc1cyIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIHI9IjAiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBiZWdpbj0iMC41cyIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDIyNSAxNiAxNiki'+
			'IHI9IjAiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBiZWdpbj0iMC42MjVzIiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSIgcj0iMCI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2'+
			'V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGJlZ2luPSIwLjc1cyIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIHI9IjAiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBiZWdpbj0iMC44NzVzIiBhdHRyaWJ1dGVOYW1lPSJy'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgcj0iMCI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGJlZ2luPSIwLjVzIiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_image_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_image_file";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_image_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_image_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_gallery.appendChild(me._loading_image_file);
		el=me._gallery_picture_preload=document.createElement('div');
		els=me._gallery_picture_preload__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._gallery_picture_preload.ggUpdatePosition();}
		el.ggText=basePath + "";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_picture_preload";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		me._gallery_picture_preload.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_picture_preload.logicBlock_externalurl = function() {
			var newLogicStateExternalUrl;
			if (
				((player.getVariableValue('gallery_pictures') == 0))
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 1))
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 2))
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 3))
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 4))
			)
			{
				newLogicStateExternalUrl = 4;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 5))
			)
			{
				newLogicStateExternalUrl = 5;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 6))
			)
			{
				newLogicStateExternalUrl = 6;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 7))
			)
			{
				newLogicStateExternalUrl = 7;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 8))
			)
			{
				newLogicStateExternalUrl = 8;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 9))
			)
			{
				newLogicStateExternalUrl = 9;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 10))
			)
			{
				newLogicStateExternalUrl = 10;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 11))
			)
			{
				newLogicStateExternalUrl = 11;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 12))
			)
			{
				newLogicStateExternalUrl = 12;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 13))
			)
			{
				newLogicStateExternalUrl = 13;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 14))
			)
			{
				newLogicStateExternalUrl = 14;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 15))
			)
			{
				newLogicStateExternalUrl = 15;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 16))
			)
			{
				newLogicStateExternalUrl = 16;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 17))
			)
			{
				newLogicStateExternalUrl = 17;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 18))
			)
			{
				newLogicStateExternalUrl = 18;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 19))
			)
			{
				newLogicStateExternalUrl = 19;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture_preload.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture_preload.style[domTransition]='';
				if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture_preload.ggText=basePath + "gallery/img_01.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture_preload.ggText=basePath + "gallery/img_02.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 2) {
					me._gallery_picture_preload.ggText=basePath + "gallery/img_03.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 3) {
					me._gallery_picture_preload.ggText=basePath + "gallery/img_04.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 4) {
					me._gallery_picture_preload.ggText=basePath + "gallery/img_05.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 5) {
					me._gallery_picture_preload.ggText=basePath + "gallery/img_06.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 6) {
					me._gallery_picture_preload.ggText=basePath + "gallery/img_07.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 7) {
					me._gallery_picture_preload.ggText=basePath + "gallery/img_08.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 8) {
					me._gallery_picture_preload.ggText=basePath + "gallery/img_09.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 9) {
					me._gallery_picture_preload.ggText=basePath + "gallery/img_10.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 10) {
					me._gallery_picture_preload.ggText=basePath + "gallery/img_11.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 11) {
					me._gallery_picture_preload.ggText=basePath + "gallery/img_12.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 12) {
					me._gallery_picture_preload.ggText=basePath + "gallery/img_13.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 13) {
					me._gallery_picture_preload.ggText=basePath + "gallery/img_14.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 14) {
					me._gallery_picture_preload.ggText=basePath + "gallery/img_15.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 15) {
					me._gallery_picture_preload.ggText=basePath + "gallery/img_16.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 16) {
					me._gallery_picture_preload.ggText=basePath + "gallery/img_17.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 17) {
					me._gallery_picture_preload.ggText=basePath + "gallery/img_18.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 18) {
					me._gallery_picture_preload.ggText=basePath + "gallery/img_19.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 19) {
					me._gallery_picture_preload.ggText=basePath + "gallery/img_20.jpg";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else {
					me._gallery_picture_preload.ggText=basePath + "";
					me._gallery_picture_preload__img.style.width = '0px';
					me._gallery_picture_preload__img.style.height = '0px';
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
			}
		}
		me._gallery_picture_preload.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._gallery_picture_preload.clientWidth;
			var parentHeight = me._gallery_picture_preload.clientHeight;
			var img = me._gallery_picture_preload__img;
			var aspectRatioDiv = me._gallery_picture_preload.clientWidth / me._gallery_picture_preload.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = parentHeight * aspectRatioImg;
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = parentWidth / aspectRatioImg;
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._container_gallery.appendChild(me._gallery_picture_preload);
		el=me._gallery_picture=document.createElement('div');
		els=me._gallery_picture__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._gallery_picture.ggUpdatePosition();}
		el.ggText=basePath + "";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_picture";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='background : rgba(0,0,0,0.862745);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_picture.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_picture.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('gallery_show_hide') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gallery_picture.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gallery_picture.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gallery_picture.style[domTransition]='';
				if (me._gallery_picture.ggCurrentLogicStateVisible == 0) {
					me._gallery_picture.style.visibility=(Number(me._gallery_picture.style.opacity)>0||!me._gallery_picture.style.opacity)?'inherit':'hidden';
					me._gallery_picture.ggSubElement.src=me._gallery_picture.ggText;
					me._gallery_picture.ggVisible=true;
				}
				else {
					me._gallery_picture.style.visibility="hidden";
					me._gallery_picture__img.src = '';
					me._gallery_picture.ggVisible=false;
				}
			}
		}
		me._gallery_picture.logicBlock_externalurl = function() {
			var newLogicStateExternalUrl;
			if (
				((player.getVariableValue('gallery_pictures') == 0))
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 1))
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 2))
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 3))
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 4))
			)
			{
				newLogicStateExternalUrl = 4;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 5))
			)
			{
				newLogicStateExternalUrl = 5;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 6))
			)
			{
				newLogicStateExternalUrl = 6;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 7))
			)
			{
				newLogicStateExternalUrl = 7;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 8))
			)
			{
				newLogicStateExternalUrl = 8;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 9))
			)
			{
				newLogicStateExternalUrl = 9;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 10))
			)
			{
				newLogicStateExternalUrl = 10;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 11))
			)
			{
				newLogicStateExternalUrl = 11;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 12))
			)
			{
				newLogicStateExternalUrl = 12;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 13))
			)
			{
				newLogicStateExternalUrl = 13;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 14))
			)
			{
				newLogicStateExternalUrl = 14;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 15))
			)
			{
				newLogicStateExternalUrl = 15;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 16))
			)
			{
				newLogicStateExternalUrl = 16;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 17))
			)
			{
				newLogicStateExternalUrl = 17;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 18))
			)
			{
				newLogicStateExternalUrl = 18;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 19))
			)
			{
				newLogicStateExternalUrl = 19;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 20))
			)
			{
				newLogicStateExternalUrl = 20;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture.style[domTransition]='';
				if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture.ggText=basePath + "gallery/img_00.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture.ggText=basePath + "gallery/img_01.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 2) {
					me._gallery_picture.ggText=basePath + "gallery/img_02.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 3) {
					me._gallery_picture.ggText=basePath + "gallery/img_03.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 4) {
					me._gallery_picture.ggText=basePath + "gallery/img_04.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 5) {
					me._gallery_picture.ggText=basePath + "gallery/img_05.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 6) {
					me._gallery_picture.ggText=basePath + "gallery/img_06.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 7) {
					me._gallery_picture.ggText=basePath + "gallery/img_07.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 8) {
					me._gallery_picture.ggText=basePath + "gallery/img_08.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 9) {
					me._gallery_picture.ggText=basePath + "gallery/img_09.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 10) {
					me._gallery_picture.ggText=basePath + "gallery/img_10.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 11) {
					me._gallery_picture.ggText=basePath + "gallery/img_11.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 12) {
					me._gallery_picture.ggText=basePath + "gallery/img_12.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 13) {
					me._gallery_picture.ggText=basePath + "gallery/img_13.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 14) {
					me._gallery_picture.ggText=basePath + "gallery/img_14.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 15) {
					me._gallery_picture.ggText=basePath + "gallery/img_15.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 16) {
					me._gallery_picture.ggText=basePath + "gallery/img_16.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 17) {
					me._gallery_picture.ggText=basePath + "gallery/img_17.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 18) {
					me._gallery_picture.ggText=basePath + "gallery/img_18.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 19) {
					me._gallery_picture.ggText=basePath + "gallery/img_19.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else if (me._gallery_picture.ggCurrentLogicStateExternalUrl == 20) {
					me._gallery_picture.ggText=basePath + "gallery/img_20.jpg";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
				else {
					me._gallery_picture.ggText=basePath + "";
					me._gallery_picture__img.style.width = '0px';
					me._gallery_picture__img.style.height = '0px';
					me._gallery_picture__img.src=me._gallery_picture.ggText;
				}
			}
		}
		me._gallery_picture.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._gallery_picture.clientWidth;
			var parentHeight = me._gallery_picture.clientHeight;
			var img = me._gallery_picture__img;
			var aspectRatioDiv = me._gallery_picture.clientWidth / me._gallery_picture.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = parentHeight * aspectRatioImg;
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = parentWidth / aspectRatioImg;
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._container_gallery.appendChild(me._gallery_picture);
		el=me._gallery_controler=document.createElement('div');
		el.ggId="gallery_controler";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 33px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 118px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_controler.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_controler.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._gallery_timer=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=0;
		el.ggId="gallery_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_timer.ggIsActive=function() {
			return (me._gallery_timer.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._gallery_timer.ggTimestamp) / me._gallery_timer.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_timer.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_controler.appendChild(me._gallery_timer);
		el=me._gallery_fx=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=0;
		el.ggId="gallery_fx";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_fx.ggIsActive=function() {
			return (me._gallery_fx.ggTimestamp + me._gallery_fx.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_fx.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._gallery_picture.style[domTransition]='none';
			} else {
				me._gallery_picture.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gallery_picture.style.opacity='0';
			me._gallery_picture.style.visibility='hidden';
		}
		me._gallery_fx.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._gallery_picture.style[domTransition]='none';
			} else {
				me._gallery_picture.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gallery_picture.style.opacity='1';
			me._gallery_picture.style.visibility=me._gallery_picture.ggVisible?'inherit':'hidden';
		}
		me._gallery_fx.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_controler.appendChild(me._gallery_fx);
		me._container_gallery.appendChild(me._gallery_controler);
		el=me._cntgallerycounter=document.createElement('div');
		el.ggId="cntGalleryCounter";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 50px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cntgallerycounter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cntgallerycounter.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._gallery_counter_total=document.createElement('div');
		els=me._gallery_counter_total__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="gallery_counter_total";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 55px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\/ 15";
		el.appendChild(els);
		me._gallery_counter_total.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_counter_total.ggUpdatePosition=function (useTransition) {
		}
		me._cntgallerycounter.appendChild(me._gallery_counter_total);
		el=me._gallery_counter=document.createElement('div');
		els=me._gallery_counter__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="gallery_counter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._gallery_counter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_counter.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('gallery_pictures') == 0))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 1))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 2))
			)
			{
				newLogicStateText = 2;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 3))
			)
			{
				newLogicStateText = 3;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 4))
			)
			{
				newLogicStateText = 4;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 5))
			)
			{
				newLogicStateText = 5;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 6))
			)
			{
				newLogicStateText = 6;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 7))
			)
			{
				newLogicStateText = 7;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 8))
			)
			{
				newLogicStateText = 8;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 9))
			)
			{
				newLogicStateText = 9;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 10))
			)
			{
				newLogicStateText = 10;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 11))
			)
			{
				newLogicStateText = 11;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 12))
			)
			{
				newLogicStateText = 12;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 13))
			)
			{
				newLogicStateText = 13;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 14))
			)
			{
				newLogicStateText = 14;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 15))
			)
			{
				newLogicStateText = 15;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 16))
			)
			{
				newLogicStateText = 16;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 17))
			)
			{
				newLogicStateText = 17;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 18))
			)
			{
				newLogicStateText = 18;
			}
			else if (
				((player.getVariableValue('gallery_pictures') == 19))
			)
			{
				newLogicStateText = 19;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._gallery_counter.ggCurrentLogicStateText != newLogicStateText) {
				me._gallery_counter.ggCurrentLogicStateText = newLogicStateText;
				me._gallery_counter.style[domTransition]='';
				if (me._gallery_counter.ggCurrentLogicStateText == 0) {
					me._gallery_counter.ggText="01";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="01";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 1) {
					me._gallery_counter.ggText="02";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="02";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 2) {
					me._gallery_counter.ggText="03";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="03";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 3) {
					me._gallery_counter.ggText="04";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="04";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 4) {
					me._gallery_counter.ggText="05";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="05";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 5) {
					me._gallery_counter.ggText="06";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="06";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 6) {
					me._gallery_counter.ggText="07";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="07";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 7) {
					me._gallery_counter.ggText="08";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="08";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 8) {
					me._gallery_counter.ggText="09";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="09";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 9) {
					me._gallery_counter.ggText="10";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="10";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 10) {
					me._gallery_counter.ggText="11";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="11";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 11) {
					me._gallery_counter.ggText="12";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="12";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 12) {
					me._gallery_counter.ggText="13";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="13";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 13) {
					me._gallery_counter.ggText="14";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="14";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 14) {
					me._gallery_counter.ggText="15";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="15";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 15) {
					me._gallery_counter.ggText="16";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="16";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 16) {
					me._gallery_counter.ggText="17";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="17";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 17) {
					me._gallery_counter.ggText="18";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="18";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 18) {
					me._gallery_counter.ggText="19";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="19";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 19) {
					me._gallery_counter.ggText="20";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="20";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else {
					me._gallery_counter.ggText="";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
			}
		}
		me._gallery_counter.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((28-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._cntgallerycounter.appendChild(me._gallery_counter);
		me._container_gallery.appendChild(me._cntgallerycounter);
		el=me._cntgallerynext=document.createElement('div');
		el.ggId="cntGalleryNext";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cntgallerynext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cntgallerynext.onclick=function (e) {
			player.setVariableValue('gallery_pictures', player.getVariableValue('gallery_pictures') + Number("1"));
			player.setVariableValue('gallery_pictures', player.getVariableValue('gallery_pictures') % Number("14"));
			me._gallery_fx.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx.ggTimestamp=skin.ggCurrentTime;
		}
		me._cntgallerynext.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rect_next=document.createElement('div');
		el.ggId="Rect_Next";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rect_next.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rect_next.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cntgallerynext.appendChild(me._rect_next);
		el=me._gallery_next=document.createElement('div');
		els=me._gallery_next__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiNmZmZmZmZ9JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGlkPSJMYXllcl94MDAyMF8x'+
			'Ij4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxwYXRoIGQ9Ik0tMC4wMSAtMC4wMWw4NDYuNjggMCAwIDg0Ni42OCAtODQ2LjY4IDAgMCAtODQ2LjY4em0yOTYuMzIgMTUxLjE2bDI3Mi4xNyAyNzIuMTkgLTI3Mi4xNiAyNzIuMTcgLTE4LjEzIC0xOC4xMyAyNTQuMDQgLTI1NC4wNCAtMjU0LjA1IC0yNTQuMDYgMTguMTMgLTE4LjEzeiIgY2xhc3M9ImZpbDAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._gallery_next__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gallery_next__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiM1NWFhZmZ9JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGlkPSJMYXllcl94MDAyMF8x'+
			'Ij4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxwYXRoIGQ9Ik0tMC4wMSAtMC4wMWw4NDYuNjggMCAwIDg0Ni42OCAtODQ2LjY4IDAgMCAtODQ2LjY4em0yOTYuMzIgMTUxLjE2bDI3Mi4xNyAyNzIuMTkgLTI3Mi4xNiAyNzIuMTcgLTE4LjEzIC0xOC4xMyAyNTQuMDQgLTI1NC4wNCAtMjU0LjA1IC0yNTQuMDYgMTguMTMgLTE4LjEzeiIgY2xhc3M9ImZpbDAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._gallery_next__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="gallery_Next";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_next.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_next.onmouseover=function (e) {
			me._gallery_next__img.style.visibility='hidden';
			me._gallery_next__imgo.style.visibility='inherit';
		}
		me._gallery_next.onmouseout=function (e) {
			me._gallery_next__img.style.visibility='inherit';
			me._gallery_next__imgo.style.visibility='hidden';
		}
		me._gallery_next.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cntgallerynext.appendChild(me._gallery_next);
		me._container_gallery.appendChild(me._cntgallerynext);
		el=me._cntgalleryback=document.createElement('div');
		el.ggId="cntGalleryBack";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cntgalleryback.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cntgalleryback.onclick=function (e) {
			player.setVariableValue('gallery_pictures', player.getVariableValue('gallery_pictures') + Number("13"));
			player.setVariableValue('gallery_pictures', player.getVariableValue('gallery_pictures') % Number("14"));
			me._gallery_fx.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx.ggTimestamp=skin.ggCurrentTime;
		}
		me._cntgalleryback.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rect_back=document.createElement('div');
		el.ggId="Rect_Back";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.00392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rect_back.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rect_back.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cntgalleryback.appendChild(me._rect_back);
		el=me._gallery_back=document.createElement('div');
		els=me._gallery_back__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiNmZmZmZmZ9JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGlkPSJMYXllcl94MDAyMF8x'+
			'Ij4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxwYXRoIGQ9Ik04NDYuNjcgLTAuMDFsLTg0Ni42OCAwIDAgODQ2LjY4IDg0Ni42OCAwIDAgLTg0Ni42OHptLTI5Ni4zMiAxNTEuMTZsLTI3Mi4xNyAyNzIuMTkgMjcyLjE2IDI3Mi4xNyAxOC4xMyAtMTguMTMgLTI1NC4wNCAtMjU0LjA0IDI1NC4wNSAtMjU0LjA2IC0xOC4xMyAtMTguMTN6IiBjbGFzcz0iZmlsMCIvPgogPC9nPgo8L3N2Zz4K';
		me._gallery_back__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gallery_back__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiM1NWFhZmZ9JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGlkPSJMYXllcl94MDAyMF8x'+
			'Ij4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxwYXRoIGQ9Ik04NDYuNjcgLTAuMDFsLTg0Ni42OCAwIDAgODQ2LjY4IDg0Ni42OCAwIDAgLTg0Ni42OHptLTI5Ni4zMiAxNTEuMTZsLTI3Mi4xNyAyNzIuMTkgMjcyLjE2IDI3Mi4xNyAxOC4xMyAtMTguMTMgLTI1NC4wNCAtMjU0LjA0IDI1NC4wNSAtMjU0LjA2IC0xOC4xMyAtMTguMTN6IiBjbGFzcz0iZmlsMCIvPgogPC9nPgo8L3N2Zz4K';
		me._gallery_back__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="gallery_back";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_back.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_back.onmouseover=function (e) {
			me._gallery_back__img.style.visibility='hidden';
			me._gallery_back__imgo.style.visibility='inherit';
		}
		me._gallery_back.onmouseout=function (e) {
			me._gallery_back__img.style.visibility='inherit';
			me._gallery_back__imgo.style.visibility='hidden';
		}
		me._gallery_back.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cntgalleryback.appendChild(me._gallery_back);
		me._container_gallery.appendChild(me._cntgalleryback);
		el=me._gallery_close=document.createElement('div');
		els=me._gallery_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiNmZmZmZmZ9JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGlkPSJMYXllcl94MDAyMF8x'+
			'Ij4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxwYXRoIGQ9Ik0tMC4wMSAtMC4wMWw4NDYuNjggMCAwIDg0Ni42OCAtODQ2LjY4IDAgMCAtODQ2LjY4em0xOTguNzYgNjI5Ljc5bDIwNi40NSAtMjA2LjQ1IC0yMDYuNDUgLTIwNi40NSAxOC4xMyAtMTguMTMgMjA2LjQ1IDIwNi40NSAyMDYuNDUgLTIwNi40NSAxOC4xMyAxOC4xMyAtMjA2LjQ1IDIwNi40NSAyMDYuNDUgMjA2LjQ1IC0xOC4xMyAxOC4xMyAtMjA2LjQ1IC0yMDYuNDUgLTIwNi40NSAyMDYuNDUgLTE4LjEzIC0xOC4xM3oiIGNsYXNzPSJmaWwwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._gallery_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gallery_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiM1NWFhZmZ9JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGlkPSJMYXllcl94MDAyMF8x'+
			'Ij4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxwYXRoIGQ9Ik0tMC4wMSAtMC4wMWw4NDYuNjggMCAwIDg0Ni42OCAtODQ2LjY4IDAgMCAtODQ2LjY4em0xOTguNzYgNjI5Ljc5bDIwNi40NSAtMjA2LjQ1IC0yMDYuNDUgLTIwNi40NSAxOC4xMyAtMTguMTMgMjA2LjQ1IDIwNi40NSAyMDYuNDUgLTIwNi40NSAxOC4xMyAxOC4xMyAtMjA2LjQ1IDIwNi40NSAyMDYuNDUgMjA2LjQ1IC0xOC4xMyAxOC4xMyAtMjA2LjQ1IC0yMDYuNDUgLTIwNi40NSAyMDYuNDUgLTE4LjEzIC0xOC4xM3oiIGNsYXNzPSJmaWwwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._gallery_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="gallery_close";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_close.onclick=function (e) {
			player.setVariableValue('gallery_show_hide', false);
			player.setVariableValue('gallery_pictures', Number("0"));
			me._gallery_timer.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer.ggTimestamp=skin.ggCurrentTime;
			player.startAutorotate("0.05");
			player.setVariableValue('ScreenBg', false);
		}
		me._gallery_close.onmouseover=function (e) {
			me._gallery_close__img.style.visibility='hidden';
			me._gallery_close__imgo.style.visibility='inherit';
		}
		me._gallery_close.onmouseout=function (e) {
			me._gallery_close__img.style.visibility='inherit';
			me._gallery_close__imgo.style.visibility='hidden';
		}
		me._gallery_close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_gallery.appendChild(me._gallery_close);
		me.divSkin.appendChild(me._container_gallery);
		el=me._container_video=document.createElement('div');
		el.ggId="Container_Video";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_video.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_video.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._loading_video_file=document.createElement('div');
		els=me._loading_video_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyIDMyIiBoZWlnaHQ9IjY0IiBmaWxsPSJ3aGl0ZSI+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBiZWdpbj0iMCIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHRyYW'+
			'5zZm9ybT0icm90YXRlKDQ1IDE2IDE2KSIgcj0iMCI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGJlZ2luPSIwLjEyNXMiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiIHI9IjAiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVw'+
			'ZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBiZWdpbj0iMC4yNXMiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIiByPSIwIj4KICA8YW5pbWF0ZSBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYmVnaW49Ij'+
			'AuMzc1cyIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIHI9IjAiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBiZWdpbj0iMC41cyIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDIyNSAxNiAxNiki'+
			'IHI9IjAiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBiZWdpbj0iMC42MjVzIiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSIgcj0iMCI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2'+
			'V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGJlZ2luPSIwLjc1cyIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIHI9IjAiPgogIDxhbmltYXRlIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz0iMDszOzA7MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBiZWdpbj0iMC44NzVzIiBhdHRyaWJ1dGVOYW1lPSJy'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgcj0iMCI+CiAgPGFuaW1hdGUgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGJlZ2luPSIwLjVzIiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_file";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_video_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_video.appendChild(me._loading_video_file);
		el=me._videoplayer=document.createElement('div');
		me._videoplayer.seekbars = [];
			me._videoplayer.ggYoutubeApiReady = function() { me._videoplayer.ggYoutubeApiLoaded = true;}
		me._videoplayer.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._videoplayer.seekbars.length; i++) {
					var seekbar = me.findElements(me._videoplayer.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._videoplayer.hasChildNodes()) {
				me._videoplayer.removeChild(me._videoplayer.lastChild);
			}
			if(media == '') {
				notifySeekbars();
			if (me._videoplayer.ggVideoNotLoaded ==false && me._videoplayer.ggDeactivate) { me._videoplayer.ggDeactivate(); }
				me._videoplayer.ggVideoNotLoaded = true;
				return;
			}
			me._videoplayer.ggVideoNotLoaded = false;
			me._videoplayer__vid=document.createElement('iframe');
			me._videoplayer__vid.className='ggskin ggskin_video';
			var ggVideoParams = '?autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=0&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + media + ggVideoParams;
			me._videoplayer__vid.setAttribute('src', ggVideoUrl);
			me._videoplayer__vid.setAttribute('width', '100%');
			me._videoplayer__vid.setAttribute('height', '100%');
			me._videoplayer__vid.setAttribute('allow', 'autoplay');
			me._videoplayer__vid.setAttribute('allowfullscreen', 'true');
			me._videoplayer__vid.setAttribute('style', 'border:none; ; ;');
			me._videoplayer.appendChild(me._videoplayer__vid);
			me._videoplayer.ggVideoSource = media;
			if (me._videoplayer.ggYoutubeApiLoaded && me._videoplayer.ggYoutubeApiLoaded == true) {me._videoplayer.ggYoutubeApiReady();}
		}
		el.ggId="VideoPlayer";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 58.6667%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._videoplayer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._videoplayer.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_video.appendChild(me._videoplayer);
		el=me._video_close=document.createElement('div');
		els=me._video_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiNmZmZmZmZ9JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGlkPSJMYXllcl94MDAyMF8x'+
			'Ij4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxwYXRoIGQ9Ik0tMC4wMSAtMC4wMWw4NDYuNjggMCAwIDg0Ni42OCAtODQ2LjY4IDAgMCAtODQ2LjY4em0xOTguNzYgNjI5Ljc5bDIwNi40NSAtMjA2LjQ1IC0yMDYuNDUgLTIwNi40NSAxOC4xMyAtMTguMTMgMjA2LjQ1IDIwNi40NSAyMDYuNDUgLTIwNi40NSAxOC4xMyAxOC4xMyAtMjA2LjQ1IDIwNi40NSAyMDYuNDUgMjA2LjQ1IC0xOC4xMyAxOC4xMyAtMjA2LjQ1IC0yMDYuNDUgLTIwNi40NSAyMDYuNDUgLTE4LjEzIC0xOC4xM3oiIGNsYXNzPSJmaWwwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._video_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiM1NWFhZmZ9JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGlkPSJMYXllcl94MDAyMF8x'+
			'Ij4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxwYXRoIGQ9Ik0tMC4wMSAtMC4wMWw4NDYuNjggMCAwIDg0Ni42OCAtODQ2LjY4IDAgMCAtODQ2LjY4em0xOTguNzYgNjI5Ljc5bDIwNi40NSAtMjA2LjQ1IC0yMDYuNDUgLTIwNi40NSAxOC4xMyAtMTguMTMgMjA2LjQ1IDIwNi40NSAyMDYuNDUgLTIwNi40NSAxOC4xMyAxOC4xMyAtMjA2LjQ1IDIwNi40NSAyMDYuNDUgMjA2LjQ1IC0xOC4xMyAxOC4xMyAtMjA2LjQ1IC0yMDYuNDUgLTIwNi40NSAyMDYuNDUgLTE4LjEzIC0xOC4xM3oiIGNsYXNzPSJmaWwwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._video_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Video_close";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_close.onclick=function (e) {
				player.stopSound("Video 1");
			me._videoplayer.ggInitMedia('');
			me._videoplayer.style[domTransition]='none';
			me._videoplayer.style.visibility='hidden';
			me._videoplayer.ggVisible=false;
			me._container_video.style[domTransition]='none';
			me._container_video.style.visibility='hidden';
			me._container_video.ggVisible=false;
			player.setVariableValue('ScreenBg', false);
			player.startAutorotate("0.05","2");
		}
		me._video_close.onmouseover=function (e) {
			me._video_close__img.style.visibility='hidden';
			me._video_close__imgo.style.visibility='inherit';
		}
		me._video_close.onmouseout=function (e) {
			me._video_close__img.style.visibility='inherit';
			me._video_close__imgo.style.visibility='hidden';
		}
		me._video_close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_video.appendChild(me._video_close);
		me.divSkin.appendChild(me._container_video);
		el=me._container_help=document.createElement('div');
		el.ggId="Container_Help";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 325px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 600px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_help.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_help.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 900)) && 
				((player.getViewerSize().width > 650))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width <= 650)) && 
				((player.getViewerSize().width > 450))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getViewerSize().width <= 450)) && 
				((player.getViewerSize().width > 300))
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				((player.getViewerSize().width <= 300))
			)
			{
				newLogicStateScaling = 3;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._container_help.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._container_help.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._container_help.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._container_help.ggCurrentLogicStateScaling == 0) {
					me._container_help.ggParameter.sx = 0.8;
					me._container_help.ggParameter.sy = 0.8;
					me._container_help.style[domTransform]=parameterToTransform(me._container_help.ggParameter);
				}
				else if (me._container_help.ggCurrentLogicStateScaling == 1) {
					me._container_help.ggParameter.sx = 0.6;
					me._container_help.ggParameter.sy = 0.6;
					me._container_help.style[domTransform]=parameterToTransform(me._container_help.ggParameter);
				}
				else if (me._container_help.ggCurrentLogicStateScaling == 2) {
					me._container_help.ggParameter.sx = 0.4;
					me._container_help.ggParameter.sy = 0.4;
					me._container_help.style[domTransform]=parameterToTransform(me._container_help.ggParameter);
				}
				else if (me._container_help.ggCurrentLogicStateScaling == 3) {
					me._container_help.ggParameter.sx = 0.25;
					me._container_help.ggParameter.sy = 0.25;
					me._container_help.style[domTransform]=parameterToTransform(me._container_help.ggParameter);
				}
				else {
					me._container_help.ggParameter.sx = 1;
					me._container_help.ggParameter.sy = 1;
					me._container_help.style[domTransform]=parameterToTransform(me._container_help.ggParameter);
				}
			}
		}
		me._container_help.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._recthelpbg=document.createElement('div');
		el.ggId="rectHelpBg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle rectBox";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0.588235);';
		hs+='border : 3px solid rgba(255,255,255,0.784314);';
		hs+='cursor : default;';
		hs+='height : 355px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 630px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._recthelpbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._recthelpbg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_help.appendChild(me._recthelpbg);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_1__img.setAttribute('src',basePath + 'images/svg_1.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 322px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 600px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_help.appendChild(me._svg_1);
		el=me._external_1=document.createElement('div');
		els=me._external_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._external_1.ggUpdatePosition();}
		el.ggText=basePath + "images/Help.gif";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="External 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 227px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._external_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._external_1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_1.clientWidth;
			var parentHeight = me._external_1.clientHeight;
			var img = me._external_1__img;
			var aspectRatioDiv = me._external_1.clientWidth / me._external_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = parentHeight * aspectRatioImg;
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = parentWidth / aspectRatioImg;
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			img.style.right='0px';
			img.style.top='0px';
		}
		me._container_help.appendChild(me._external_1);
		el=me._ht_help_close=document.createElement('div');
		els=me._ht_help_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiMwMDAwMDA7ZmlsbC1ydWxlOm5vbnplcm99JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxn'+
			'IGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxwb2x5Z29uIHBvaW50cz0iNzc3LjksODQ2LjY3IDQyMy4zMyw0OTIuMDkgNjguNzYsODQ2LjY3IC0wLjAxLDc3Ny45IDM1NC41Nyw0MjMuMzMgLTAuMDEsNjguNzYgNjguNzYsLTAuMDEgNDIzLjMzLDM1NC41NyA3NzcuOSwtMC4wMSA4NDYuNjcsNjguNzYgNDkyLjA5LDQyMy4zMyA4NDYuNjcsNzc3LjkgIiBjbGFzcz0iZmlsMCIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_help_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_help_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiM1NWFhZmY7ZmlsbC1ydWxlOm5vbnplcm99JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxn'+
			'IGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxwb2x5Z29uIHBvaW50cz0iNzc3LjksODQ2LjY3IDQyMy4zMyw0OTIuMDkgNjguNzYsODQ2LjY3IC0wLjAxLDc3Ny45IDM1NC41Nyw0MjMuMzMgLTAuMDEsNjguNzYgNjguNzYsLTAuMDEgNDIzLjMzLDM1NC41NyA3NzcuOSwtMC4wMSA4NDYuNjcsNjguNzYgNDkyLjA5LDQyMy4zMyA4NDYuNjcsNzc3LjkgIiBjbGFzcz0iZmlsMCIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_help_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_help_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_help_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_help_close.onclick=function (e) {
			player.setVariableValue('ScreenBg', false);
			me._container_help.style[domTransition]='none';
			me._container_help.style.visibility='hidden';
			me._container_help.ggVisible=false;
			player.startAutorotate("0.05","2");
		}
		me._ht_help_close.onmouseover=function (e) {
			me._ht_help_close__img.style.visibility='hidden';
			me._ht_help_close__imgo.style.visibility='inherit';
		}
		me._ht_help_close.onmouseout=function (e) {
			me._ht_help_close__img.style.visibility='inherit';
			me._ht_help_close__imgo.style.visibility='hidden';
		}
		me._ht_help_close.ggUpdatePosition=function (useTransition) {
		}
		me._container_help.appendChild(me._ht_help_close);
		me.divSkin.appendChild(me._container_help);
		el=me._welcom_container=document.createElement('div');
		el.ggId="Welcom_Container";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 1;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._welcom_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._welcom_container.onclick=function (e) {
			if (
				(
					((player.getIsLoading() == false)) && 
					((player.getCurrentNode() == player.getVariableValue('StartNode')))
				)
			) {
				player.moveToDefaultViewEx(2,0);
			}
			if (
				(
					((player.getIsLoading() == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._welcom_container.style[domTransition]='none';
				} else {
					me._welcom_container.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._welcom_container.style.opacity='0';
				me._welcom_container.style.visibility='hidden';
			}
			if (
				(
					((player.getIsLoading() == false))
				)
			) {
				player.setVariableValue('IconVisible', true);
			}
			if (
				(
					((player.getIsLoading() == false))
				)
			) {
				player.setVariableValue('PreLaunch', true);
			}
			if (
				(
					((player.getIsLoading() == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._cntmastericons.style[domTransition]='none';
				} else {
					me._cntmastericons.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._cntmastericons.style.opacity='1';
				me._cntmastericons.style.visibility=me._cntmastericons.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getIsLoading() == false))
				)
			) {
				player.enterFullscreen();
			}
		}
		me._welcom_container.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._splashscreen=document.createElement('div');
		els=me._splashscreen__img=document.createElement('img');
		els.className='ggskin ggskin_splashscreen';
		hs=basePath + 'images/splashscreen.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="SplashScreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 400px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._splashscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._splashscreen.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 450))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._splashscreen.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._splashscreen.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._splashscreen.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._splashscreen.ggCurrentLogicStateScaling == 0) {
					me._splashscreen.ggParameter.sx = 0.8;
					me._splashscreen.ggParameter.sy = 0.8;
					me._splashscreen.style[domTransform]=parameterToTransform(me._splashscreen.ggParameter);
				}
				else {
					me._splashscreen.ggParameter.sx = 1;
					me._splashscreen.ggParameter.sy = 1;
					me._splashscreen.style[domTransform]=parameterToTransform(me._splashscreen.ggParameter);
				}
			}
		}
		me._splashscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._txt_start=document.createElement('div');
		els=me._txt_start__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt_start";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 120px;';
		hs+='height: 25px;';
		hs+='background: #c8c8c8;';
		hs+='border: 0px solid #ffffff;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 1px 2px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="LOADING...";
		el.appendChild(els);
		me._txt_start.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_start.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['txt_start'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._txt_start.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._txt_start.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._txt_start__text.style[domTransition]='background-color 200ms ease 0ms, color 200ms ease 0ms';
				if (me._txt_start.ggCurrentLogicStateBackgroundColor == 0) {
					me._txt_start__text.style.backgroundColor="rgba(85,170,255,1)";
				}
				else {
					me._txt_start__text.style.backgroundColor="rgba(200,200,200,1)";
				}
			}
		}
		me._txt_start.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['txt_start'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._txt_start.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._txt_start.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._txt_start__text.style[domTransition]='background-color 200ms ease 0ms, color 200ms ease 0ms';
				if (me._txt_start.ggCurrentLogicStateTextColor == 0) {
					me._txt_start__text.style.color="rgba(255,255,255,1)";
				}
				else {
					me._txt_start__text.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._txt_start.onmouseover=function (e) {
			me.elementMouseOver['txt_start']=true;
			me._txt_start.logicBlock_backgroundcolor();
			me._txt_start.logicBlock_textcolor();
		}
		me._txt_start.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._txt_start__text)
					return;
				}
			}
			me.elementMouseOver['txt_start']=false;
			me._txt_start.logicBlock_backgroundcolor();
			me._txt_start.logicBlock_textcolor();
		}
		me._txt_start.ontouchend=function (e) {
			me.elementMouseOver['txt_start']=false;
			me._txt_start.logicBlock_backgroundcolor();
			me._txt_start.logicBlock_textcolor();
		}
		me._txt_start.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._splashscreen.appendChild(me._txt_start);
		me._welcom_container.appendChild(me._splashscreen);
		me.divSkin.appendChild(me._welcom_container);
		el=me._loading=document.createElement('div');
		el.ggId="loading";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 3px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading.onclick=function (e) {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		me._loading.ggUpdatePosition=function (useTransition) {
		}
		el=me._loadingbar=document.createElement('div');
		el.ggId="loadingbar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #55aaff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 3px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbar);
		me.divSkin.appendChild(me._loading);
		el=me._timer_hotspotani=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=400;
		el.ggId="Timer_HotspotAni";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_hotspotani.ggIsActive=function() {
			return (me._timer_hotspotani.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_hotspotani.ggTimestamp) / me._timer_hotspotani.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_hotspotani.ggActivate=function () {
			player.setVariableValue('ht_ani', !player.getVariableValue('ht_ani'));
		}
		me._timer_hotspotani.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_hotspotani);
		el=me._logo=document.createElement('div');
		el.ggId="Logo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 253px;';
		hs+='left : -164px;';
		hs+='position : absolute;';
		hs+='top : 84px;';
		hs+='visibility : inherit;';
		hs+='width : 63px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._logo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._logo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('IconVisible') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._logo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._logo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._logo.style[domTransition]='left 1000ms ease 0ms, top 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._logo.ggCurrentLogicStatePosition == 0) {
					me._logo.style.left='20px';
					me._logo.style.top='20px';
				}
				else {
					me._logo.style.left='-164px';
					me._logo.style.top='84px';
				}
			}
		}
		me._logo.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 900)) && 
				((player.getViewerSize().width > 650))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width <= 650)) && 
				((player.getViewerSize().width > 450))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getViewerSize().width <= 450)) && 
				((player.getViewerSize().width > 300))
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				((player.getViewerSize().width <= 300))
			)
			{
				newLogicStateScaling = 3;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._logo.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._logo.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._logo.style[domTransition]='left 1000ms ease 0ms, top 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._logo.ggCurrentLogicStateScaling == 0) {
					me._logo.ggParameter.sx = 0.8;
					me._logo.ggParameter.sy = 0.8;
					me._logo.style[domTransform]=parameterToTransform(me._logo.ggParameter);
				}
				else if (me._logo.ggCurrentLogicStateScaling == 1) {
					me._logo.ggParameter.sx = 0.6;
					me._logo.ggParameter.sy = 0.6;
					me._logo.style[domTransform]=parameterToTransform(me._logo.ggParameter);
				}
				else if (me._logo.ggCurrentLogicStateScaling == 2) {
					me._logo.ggParameter.sx = 0.4;
					me._logo.ggParameter.sy = 0.4;
					me._logo.style[domTransform]=parameterToTransform(me._logo.ggParameter);
				}
				else if (me._logo.ggCurrentLogicStateScaling == 3) {
					me._logo.ggParameter.sx = 0.25;
					me._logo.ggParameter.sy = 0.25;
					me._logo.style[domTransform]=parameterToTransform(me._logo.ggParameter);
				}
				else {
					me._logo.ggParameter.sx = 1;
					me._logo.ggParameter.sy = 1;
					me._logo.style[domTransform]=parameterToTransform(me._logo.ggParameter);
				}
			}
		}
		me._logo.ggUpdatePosition=function (useTransition) {
		}
		el=me._cntlink=document.createElement('div');
		el.ggId="cntLink";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -35px;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cntlink.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cntlink.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._openlinkedin=document.createElement('div');
		els=me._openlinkedin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiNmZmZmZmY7ZmlsbC1ydWxlOm5vbnplcm99JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxn'+
			'IGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxnIGlkPSJfMjAxNTU0MjExMjU5MiI+CiAgIDxwYXRoIGQ9Ik0yNC4xOCAtMC4wMWw4MjIuNDggMCAwIDg0Ni42NyAtODQ2LjY3IDAgMCAtODQ2LjY3IDI0LjE5IDB6bTc3NC4wOSA0OC4zOWwtNzQ5Ljg5IDAgMCA3NDkuODkgNzQ5Ljg5IDAgMCAtNzQ5Ljg5eiIgY2xhc3M9ImZpbDAiLz4KICAgPHBvbHlnb24gcG9pbnRzPSI0MzUuNTEsNjkzLjA4IDQzNS41MSwzNDcuNTkgNDgzLjksMzQ3LjU5IDQ4My45LDY5My4wOCAiIGNsYXNzPSJmaWwwIi8+CiAgIDxwYXRoIGQ9Ik00Mz'+
			'UuNjEgNTAzLjY2Yy0wLjM3LC00Ny43NSAxMi42OSwtNzMuNiAxOS45NiwtODhsMC4zMyAtMC42NmMxMy4wMiwtMjUuNzQgMzguMTEsLTQyLjE1IDY2LjUxLC00OS4xMSAxOS4wMiwtNC42NSAzOS44MSwtNS4wMyA1OS4zMiwtMS4wOSAyMC4yNSw0LjEgMzkuMzYsMTIuODYgNTQuMjEsMjYuMzQgMTguMjgsMTYuNTggMzAuMDYsMzkuNyAzMC4wNiw2OS4zOWwwIDIzMi44MiAtNDguMzkgMCAwIC0yMzIuODJjMCwtMTQuNjggLTUuNTcsLTI1Ljg2IC0xNC4xOCwtMzMuNjcgLTguMjEsLTcuNDYgLTE5LjIyLC0xMi4zOSAtMzEuMTUsLTE0LjgxIC0xMi42NiwtMi41NSAtMjYuMTcsLTIuMyAtMzguNTMs'+
			'MC43MiAtMTUuNDMsMy43OCAtMjguNjQsMTEuODUgLTM0Ljc3LDIzLjk4bC0wLjMzIDAuNjVjLTUuNDEsMTAuNzIgLTE1LjEzLDI5Ljk2IC0xNC44NSw2NS44OGwtNDguMTkgMC4zOHoiIGNsYXNzPSJmaWwwIi8+CiAgIDxwb2x5Z29uIHBvaW50cz0iMTU4Ljg4LDY0NS4zNCAyNDguNzIsNjQ1LjM0IDI0OC43MiwzOTcuMzIgMTU4Ljg4LDM5Ny4zMiAxNTguODgsMzQ4LjkzIDI5Ny4xMSwzNDguOTMgMjk3LjExLDY0NS4zNCAzODYuOTUsNjQ1LjM0IDM4Ni45NSw2OTMuNzMgMTU4Ljg4LDY5My43MyAiIGNsYXNzPSJmaWwwIi8+CiAgIDxwYXRoIGQ9Ik0yMzcuMzcgMjI1LjUzYzMuNCwwIDYuNDMsLT'+
			'EuMzMgOC41NSwtMy40NWwwLjEgLTAuMWMyLjEyLC0yLjEyIDMuNDUsLTUuMTUgMy40NSwtOC41NSAwLC0zLjM5IC0xLjMzLC02LjQzIC0zLjQ1LC04LjU1bC0wLjEgLTAuMDljLTIuMTIsLTIuMTIgLTUuMTUsLTMuNDUgLTguNTUsLTMuNDUgLTMuMzksMCAtNi40MywxLjMzIC04LjU1LDMuNDVsLTAuMDkgMC4wOWMtMi4xMywyLjEyIC0zLjQ2LDUuMTYgLTMuNDYsOC41NSAwLDMuNCAxLjMzLDYuNDMgMy40Niw4LjU1bDAuMDkgMC4xYzIuMTIsMi4xMiA1LjE2LDMuNDUgOC41NSwzLjQ1em00Mi43NiAzMC41N2wtMC4wOSAwLjA5Yy0xMC45OCwxMC45NSAtMjYuMDksMTcuNzMgLTQyLjY3LDE3Ljcz'+
			'IC0xNi41OSwwIC0zMS42OSwtNi43OCAtNDIuNjYsLTE3LjczbC0wLjEgLTAuMDljLTEwLjk0LC0xMC45OCAtMTcuNzIsLTI2LjA5IC0xNy43MiwtNDIuNjcgMCwtMTYuNTkgNi43OCwtMzEuNjkgMTcuNzIsLTQyLjY2bDAuMSAtMC4xYzEwLjk3LC0xMC45NCAyNi4wNywtMTcuNzIgNDIuNjYsLTE3LjcyIDE2LjU4LDAgMzEuNjksNi43OCA0Mi42NywxNy43MmwwLjA5IDAuMWMxMC45NSwxMC45NyAxNy43MywyNi4wNyAxNy43Myw0Mi42NiAwLDE2LjU4IC02Ljc4LDMxLjY5IC0xNy43Myw0Mi42N3oiIGNsYXNzPSJmaWwwIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._openlinkedin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._openlinkedin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiM1NWFhZmY7ZmlsbC1ydWxlOm5vbnplcm99JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxn'+
			'IGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxnIGlkPSJfMjAxNTU0MjExMjU5MiI+CiAgIDxwYXRoIGQ9Ik0yNC4xOCAtMC4wMWw4MjIuNDggMCAwIDg0Ni42NyAtODQ2LjY3IDAgMCAtODQ2LjY3IDI0LjE5IDB6bTc3NC4wOSA0OC4zOWwtNzQ5Ljg5IDAgMCA3NDkuODkgNzQ5Ljg5IDAgMCAtNzQ5Ljg5eiIgY2xhc3M9ImZpbDAiLz4KICAgPHBvbHlnb24gcG9pbnRzPSI0MzUuNTEsNjkzLjA4IDQzNS41MSwzNDcuNTkgNDgzLjksMzQ3LjU5IDQ4My45LDY5My4wOCAiIGNsYXNzPSJmaWwwIi8+CiAgIDxwYXRoIGQ9Ik00Mz'+
			'UuNjEgNTAzLjY2Yy0wLjM3LC00Ny43NSAxMi42OSwtNzMuNiAxOS45NiwtODhsMC4zMyAtMC42NmMxMy4wMiwtMjUuNzQgMzguMTEsLTQyLjE1IDY2LjUxLC00OS4xMSAxOS4wMiwtNC42NSAzOS44MSwtNS4wMyA1OS4zMiwtMS4wOSAyMC4yNSw0LjEgMzkuMzYsMTIuODYgNTQuMjEsMjYuMzQgMTguMjgsMTYuNTggMzAuMDYsMzkuNyAzMC4wNiw2OS4zOWwwIDIzMi44MiAtNDguMzkgMCAwIC0yMzIuODJjMCwtMTQuNjggLTUuNTcsLTI1Ljg2IC0xNC4xOCwtMzMuNjcgLTguMjEsLTcuNDYgLTE5LjIyLC0xMi4zOSAtMzEuMTUsLTE0LjgxIC0xMi42NiwtMi41NSAtMjYuMTcsLTIuMyAtMzguNTMs'+
			'MC43MiAtMTUuNDMsMy43OCAtMjguNjQsMTEuODUgLTM0Ljc3LDIzLjk4bC0wLjMzIDAuNjVjLTUuNDEsMTAuNzIgLTE1LjEzLDI5Ljk2IC0xNC44NSw2NS44OGwtNDguMTkgMC4zOHoiIGNsYXNzPSJmaWwwIi8+CiAgIDxwb2x5Z29uIHBvaW50cz0iMTU4Ljg4LDY0NS4zNCAyNDguNzIsNjQ1LjM0IDI0OC43MiwzOTcuMzIgMTU4Ljg4LDM5Ny4zMiAxNTguODgsMzQ4LjkzIDI5Ny4xMSwzNDguOTMgMjk3LjExLDY0NS4zNCAzODYuOTUsNjQ1LjM0IDM4Ni45NSw2OTMuNzMgMTU4Ljg4LDY5My43MyAiIGNsYXNzPSJmaWwwIi8+CiAgIDxwYXRoIGQ9Ik0yMzcuMzcgMjI1LjUzYzMuNCwwIDYuNDMsLT'+
			'EuMzMgOC41NSwtMy40NWwwLjEgLTAuMWMyLjEyLC0yLjEyIDMuNDUsLTUuMTUgMy40NSwtOC41NSAwLC0zLjM5IC0xLjMzLC02LjQzIC0zLjQ1LC04LjU1bC0wLjEgLTAuMDljLTIuMTIsLTIuMTIgLTUuMTUsLTMuNDUgLTguNTUsLTMuNDUgLTMuMzksMCAtNi40MywxLjMzIC04LjU1LDMuNDVsLTAuMDkgMC4wOWMtMi4xMywyLjEyIC0zLjQ2LDUuMTYgLTMuNDYsOC41NSAwLDMuNCAxLjMzLDYuNDMgMy40Niw4LjU1bDAuMDkgMC4xYzIuMTIsMi4xMiA1LjE2LDMuNDUgOC41NSwzLjQ1em00Mi43NiAzMC41N2wtMC4wOSAwLjA5Yy0xMC45OCwxMC45NSAtMjYuMDksMTcuNzMgLTQyLjY3LDE3Ljcz'+
			'IC0xNi41OSwwIC0zMS42OSwtNi43OCAtNDIuNjYsLTE3LjczbC0wLjEgLTAuMDljLTEwLjk0LC0xMC45OCAtMTcuNzIsLTI2LjA5IC0xNy43MiwtNDIuNjcgMCwtMTYuNTkgNi43OCwtMzEuNjkgMTcuNzIsLTQyLjY2bDAuMSAtMC4xYzEwLjk3LC0xMC45NCAyNi4wNywtMTcuNzIgNDIuNjYsLTE3LjcyIDE2LjU4LDAgMzEuNjksNi43OCA0Mi42NywxNy43MmwwLjA5IDAuMWMxMC45NSwxMC45NyAxNy43MywyNi4wNyAxNy43Myw0Mi42NiAwLDE2LjU4IC02Ljc4LDMxLjY5IC0xNy43Myw0Mi42N3oiIGNsYXNzPSJmaWwwIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._openlinkedin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="OpenLinkedIn";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		hs+='filter: drop-shadow(0px 5px 5px rgb(0 0 0 \/ 0.2));';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._openlinkedin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._openlinkedin.onclick=function (e) {
			player.openUrl("","_blank");
		}
		me._openlinkedin.onmouseover=function (e) {
			me._openlinkedin__img.style.visibility='hidden';
			me._openlinkedin__imgo.style.visibility='inherit';
			me.elementMouseOver['openlinkedin']=true;
			me._txtopenlinkedin.logicBlock_alpha();
		}
		me._openlinkedin.onmouseout=function (e) {
			me._openlinkedin__img.style.visibility='inherit';
			me._openlinkedin__imgo.style.visibility='hidden';
			me.elementMouseOver['openlinkedin']=false;
			me._txtopenlinkedin.logicBlock_alpha();
		}
		me._openlinkedin.ontouchend=function (e) {
			me.elementMouseOver['openlinkedin']=false;
			me._txtopenlinkedin.logicBlock_alpha();
		}
		me._openlinkedin.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._txtopenlinkedin=document.createElement('div');
		els=me._txtopenlinkedin__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txtOpenLinkedIn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 40px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 8px 11px 8px 11px;';
		hs+='overflow: hidden;';
		hs+="text-shadow: #00000085 1px 1px;";
		els.setAttribute('style',hs);
		els.innerHTML="Open LinkedIn";
		el.appendChild(els);
		me._txtopenlinkedin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txtopenlinkedin.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['openlinkedin'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._txtopenlinkedin.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._txtopenlinkedin.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._txtopenlinkedin.style[domTransition]='opacity 400ms ease 0ms';
				if (me._txtopenlinkedin.ggCurrentLogicStateAlpha == 0) {
					me._txtopenlinkedin.style.visibility=me._txtopenlinkedin.ggVisible?'inherit':'hidden';
					me._txtopenlinkedin.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._txtopenlinkedin.style.opacity == 0.0) { me._txtopenlinkedin.style.visibility="hidden"; } }, 405);
					me._txtopenlinkedin.style.opacity=0;
				}
			}
		}
		me._txtopenlinkedin.ggUpdatePosition=function (useTransition) {
		}
		me._openlinkedin.appendChild(me._txtopenlinkedin);
		me._cntlink.appendChild(me._openlinkedin);
		el=me._openzomato=document.createElement('div');
		els=me._openzomato__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRvcjogQ29yZWxEUkFXIDIwMjAgKDY0LUJpdCkgLS0+CjxzdmcgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB3aWR0aD0iMTAwcHgiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbG'+
			'wtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiBzb2RpcG9kaTpkb2NuYW1lPSJab21hdG8uc3ZnIiBpZD0ic3ZnMTIiIGhlaWdodD0iMTAwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIgYm9yZGVyb3BhY2l0eT0iMS4wIiBwYWdlY29sb3I9IiNmZmZmZmYiIGJv'+
			'cmRlcmNvbG9yPSIjNjY2NjY2IiBpZD0ibmFtZWR2aWV3MTQiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiLz4KIDxkZWZzIGlkPSJkZWZzNCI+CiAgPHN0eWxlIHR5cGU9InRleHQvY3NzIiBpZD0ic3R5bGUyIj4KICAgIC5maWwxIHtmaWxsOiNGRkZ9CiAgICAuZmlsMCB7ZmlsbDojRkZGO2ZpbGwtcnVsZTpub256ZXJvfQogICA8L3N0eWxlPgogPC9kZWZzPgogPGcgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiIGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxwYXRoIGQ9Ik0yLj'+
			'g2IDBsOTcuMTQgMCAwIDEwMCAtMTAwIDAgMCAtMTAwIDIuODYgMHptOTEuNDIgNS43MmwtODguNTYgMCAwIDg4LjU2IDg4LjU2IDAgMCAtODguNTZ6IiBpZD0icGF0aDciIGNsYXNzPSJmaWwwIi8+CiAgPHBhdGggZD0iTTI5LjExIDE4LjA1YzAsMCAyOS40LDEuNDEgNTEuNDQsLTAuMDVsMCAxMC42NWMwLDAgMC4xLDEuNDQgLTAuODYsMi4wOSAtMC45NywwLjY2IC0yOS41MSwzMS4zNiAtMjkuNTEsMzEuMzYgMCwwIC0xLjg1LDEuNTcgMS4wNywxLjQ3IDIuOTMsLTAuMTEgMjQuMjksMCAyNC4yOSwwbC0zLjU1IDE4LjQzYzAsMCAtMzYuMDQsLTEuODggLTUyLjU0LDBsMCAtMTEuOSAzMC43MSAt'+
			'MzIuOTEgLTI0LjEzIDAgMy4wOCAtMTkuMTR6IiBpZD0icGF0aDkiIGNsYXNzPSJmaWwxIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._openzomato__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._openzomato__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRvcjogQ29yZWxEUkFXIDIwMjAgKDY0LUJpdCkgLS0+CjxzdmcgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB3aWR0aD0iMTAwcHgiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbG'+
			'wtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiBzb2RpcG9kaTpkb2NuYW1lPSJab21hdG8uc3ZnIiBpZD0ic3ZnMTIiIGhlaWdodD0iMTAwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIgYm9yZGVyb3BhY2l0eT0iMS4wIiBwYWdlY29sb3I9IiNmZmZmZmYiIGJv'+
			'cmRlcmNvbG9yPSIjNjY2NjY2IiBpZD0ibmFtZWR2aWV3MTQiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiLz4KIDxkZWZzIGlkPSJkZWZzNCI+CiAgPHN0eWxlIHR5cGU9InRleHQvY3NzIiBpZD0ic3R5bGUyIj4KICAgIC5maWwxIHtmaWxsOiM1NWFhZmZ9CiAgICAuZmlsMCB7ZmlsbDojNTVhYWZmO2ZpbGwtcnVsZTpub256ZXJvfQogICA8L3N0eWxlPgogPC9kZWZzPgogPGcgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiIGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxwYXRoIG'+
			'Q9Ik0yLjg2IDBsOTcuMTQgMCAwIDEwMCAtMTAwIDAgMCAtMTAwIDIuODYgMHptOTEuNDIgNS43MmwtODguNTYgMCAwIDg4LjU2IDg4LjU2IDAgMCAtODguNTZ6IiBpZD0icGF0aDciIGNsYXNzPSJmaWwwIi8+CiAgPHBhdGggZD0iTTI5LjExIDE4LjA1YzAsMCAyOS40LDEuNDEgNTEuNDQsLTAuMDVsMCAxMC42NWMwLDAgMC4xLDEuNDQgLTAuODYsMi4wOSAtMC45NywwLjY2IC0yOS41MSwzMS4zNiAtMjkuNTEsMzEuMzYgMCwwIC0xLjg1LDEuNTcgMS4wNywxLjQ3IDIuOTMsLTAuMTEgMjQuMjksMCAyNC4yOSwwbC0zLjU1IDE4LjQzYzAsMCAtMzYuMDQsLTEuODggLTUyLjU0LDBsMCAtMTEuOSAz'+
			'MC43MSAtMzIuOTEgLTI0LjEzIDAgMy4wOCAtMTkuMTR6IiBpZD0icGF0aDkiIGNsYXNzPSJmaWwxIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._openzomato__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="OpenZomato";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		hs+='filter: drop-shadow(0px 5px 5px rgb(0 0 0 \/ 0.2));';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._openzomato.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._openzomato.onclick=function (e) {
			player.openUrl("https:\/\/bit.ly\/3SoP0vC","_blank");
		}
		me._openzomato.onmouseover=function (e) {
			me._openzomato__img.style.visibility='hidden';
			me._openzomato__imgo.style.visibility='inherit';
			me.elementMouseOver['openzomato']=true;
			me._txtopenzomato.logicBlock_alpha();
		}
		me._openzomato.onmouseout=function (e) {
			me._openzomato__img.style.visibility='inherit';
			me._openzomato__imgo.style.visibility='hidden';
			me.elementMouseOver['openzomato']=false;
			me._txtopenzomato.logicBlock_alpha();
		}
		me._openzomato.ontouchend=function (e) {
			me.elementMouseOver['openzomato']=false;
			me._txtopenzomato.logicBlock_alpha();
		}
		me._openzomato.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._txtopenzomato=document.createElement('div');
		els=me._txtopenzomato__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txtOpenZomato";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 40px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 8px 11px 8px 11px;';
		hs+='overflow: hidden;';
		hs+="text-shadow: #00000085 1px 1px;";
		els.setAttribute('style',hs);
		els.innerHTML="Open Zomato";
		el.appendChild(els);
		me._txtopenzomato.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txtopenzomato.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['openzomato'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._txtopenzomato.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._txtopenzomato.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._txtopenzomato.style[domTransition]='opacity 400ms ease 0ms';
				if (me._txtopenzomato.ggCurrentLogicStateAlpha == 0) {
					me._txtopenzomato.style.visibility=me._txtopenzomato.ggVisible?'inherit':'hidden';
					me._txtopenzomato.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._txtopenzomato.style.opacity == 0.0) { me._txtopenzomato.style.visibility="hidden"; } }, 405);
					me._txtopenzomato.style.opacity=0;
				}
			}
		}
		me._txtopenzomato.ggUpdatePosition=function (useTransition) {
		}
		me._openzomato.appendChild(me._txtopenzomato);
		me._cntlink.appendChild(me._openzomato);
		el=me._openswiggy=document.createElement('div');
		els=me._openswiggy__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRvcjogQ29yZWxEUkFXIDIwMjAgKDY0LUJpdCkgLS0+CjxzdmcgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB3aWR0aD0iMTAwcHgiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbG'+
			'wtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiBzb2RpcG9kaTpkb2NuYW1lPSJTd2lnZ3kuc3ZnIiBpZD0ic3ZnMTIiIGhlaWdodD0iMTAwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIgYm9yZGVyb3BhY2l0eT0iMS4wIiBwYWdlY29sb3I9IiNmZmZmZmYiIGJv'+
			'cmRlcmNvbG9yPSIjNjY2NjY2IiBpZD0ibmFtZWR2aWV3MTQiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiLz4KIDxkZWZzIGlkPSJkZWZzNCI+CiAgPHN0eWxlIHR5cGU9InRleHQvY3NzIiBpZD0ic3R5bGUyIj4KICAgIC5maWwxIHtmaWxsOiNGRkZ9CiAgICAuZmlsMCB7ZmlsbDojRkZGO2ZpbGwtcnVsZTpub256ZXJvfQogICA8L3N0eWxlPgogPC9kZWZzPgogPGcgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiIGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxwYXRoIGQ9Ik0yLj'+
			'g2IDBsOTcuMTQgMCAwIDEwMCAtMTAwIDAgMCAtMTAwIDIuODYgMHptOTEuNDIgNS43MmwtODguNTYgMCAwIDg4LjU2IDg4LjU2IDAgMCAtODguNTZ6IiBpZD0icGF0aDciIGNsYXNzPSJmaWwwIi8+CiAgPHBhdGggZD0iTTUwLjAxIDgyYzAsMCAtNS45MywtNi44OCAtMTEuNTcsLTE2LjExIC0yLjE0LC0zLjUxIC0xLjk0LC01LjAzIDMuNjIsLTUuMjggMS43MiwtMC4wMiA3LjgsLTAuNzQgNy42NSwyLjg3bDAgMy40NWMwLDAuNTIgMC40MiwwLjk0IDAuOTMsMC45NGwwLjUzIDBjMC41MSwwIDAuOTMsLTAuNDIgMC45MywtMC45NGwwIC03LjI1IDAgLTAuNTMgMCAtMC4wMiAwIC0wLjAyIDAgLTAu'+
			'MDMgMCAtMC4wMiAtMC4wMSAtMC4wMiAwIC0wLjAzIDAgLTAuMDIgMCAwIC0wLjAxIC0wLjAyIDAgMCAwIC0wLjAzIDAgMCAtMC4wMSAtMC4wMiAwIDAgLTAuMDEgLTAuMDIgMCAwIDAgLTAuMDIgMCAwIC0wLjAxIC0wLjAyIDAgMCAtMC4wMSAtMC4wMyAwIDAgMCAtMC4wMiAwIDAgLTAuMDEgLTAuMDIgMCAwIC0wLjAxIC0wLjAyIDAgMCAtMC4wMSAtMC4wMiAwIDAgLTAuMDEgLTAuMDIgMCAwIC0wLjAxIC0wLjAyIDAgMCAtMC4wMSAtMC4wMiAwIDBjLTAuMDEsLTAuMDEgLTAuMDIsLTAuMDMgLTAuMDMsLTAuMDRsMCAwIC0wLjAxIC0wLjAyIDAgMCAtMC4wMSAtMC4wMSAwIDAgLTAuMDIgLTAuMD'+
			'IgMCAwYzAsLTAuMDEgLTAuMDEsLTAuMDMgLTAuMDIsLTAuMDRsMCAwIC0wLjAyIC0wLjAyIDAgMGMtMC4wMSwtMC4wMSAtMC4wMiwtMC4wMiAtMC4wMywtMC4wM2wwIDAgLTAuMDEgLTAuMDEgMCAtMC4wMSAtMC4wMiAtMC4wMSAwIDAgLTAuMDIgLTAuMDIgMCAwIC0wLjAxIC0wLjAxIDAgMCAtMC4wMiAtMC4wMiAwIDAgLTAuMDIgLTAuMDEgMCAwIC0wLjAyIC0wLjAxIDAgMCAtMC4wMSAtMC4wMiAwIDAgLTAuMDIgLTAuMDEgMCAwIC0wLjAyIC0wLjAxIDAgMCAtMC4wMiAtMC4wMSAtMC4wMiAtMC4wMiAtMC4wMiAtMC4wMSAwIDAgLTAuMDIgLTAuMDEgLTAuMDIgLTAuMDEgMCAwIC0wLjAyIC0w'+
			'LjAxIC0wLjAyIC0wLjAxIC0wLjAyIDAgLTAuMDIgLTAuMDEgLTAuMDMgLTAuMDEgLTAuMDIgLTAuMDEgLTAuMDIgMCAtMC4wMiAtMC4wMSAtMC4wMiAtMC4wMSAtMC4wMyAwIC0wLjAyIC0wLjAxIC0wLjAyIDAgLTAuMDIgMCAtMC4wMyAwIC0wLjAyIC0wLjAxIC0wLjAzIDAgLTAuMDIgMCAtMC4wMiAwIC0wLjUzIDAgLTguOTkgMGMtNC43NSwwIC02Ljk0LDAuNjkgLTguOTEsLTMuMDYgLTQuMjMsLTkuNDcgLTYuMzEsLTE5LjU0IC0xLjQzLC0yNi43IDkuNTYsLTE0LjA0IDI5LjE1LC0xMy44NyAzNy40LDAuMDcgMS4yMSwyLjAzIDQuNTgsOC40IDEuNjEsOS44NSAtMi42NiwxLjMgLTcuNDQsMS'+
			'4zNyAtOC4xOSwxLjM3bC0wLjEgMCAwIDAgLTYuMjIgMGMtMS40OSwwIC0xLjY3LC0wLjE1IC0xLjY3LC0xLjU5bDAgLTcuMTJjMCwtMC41MiAtMC40MiwtMC45NCAtMC45NCwtMC45NGwtMC41MiAwYy0wLjUxLDAgLTAuOTMsMC40MiAtMC45MywwLjk0bDAgOS42NCAwIDAuNTMgMCAwLjAyIDAgMC4wMyAwIDAuMDIgMCAwLjAyIDAgMC4wMyAwLjAxIDAuMDIgMCAwLjAyIDAgMCAwIDAuMDMgMCAwIDAuMDEgMC4wMiAwIDAgMC4wMSAwLjAyIDAgMCAwIDAuMDIgMCAwIDAuMDEgMC4wMyAwIDAgMC4wMSAwLjAyIDAgMCAwIDAuMDIgMCAwIDAuMDEgMC4wMiAwIDAgMC4wMSAwLjAyIDAgMCAwLjAxIDAu'+
			'MDIgMCAwIDAuMDEgMC4wMiAwIDAgMC4wMSAwLjAyIDAgMCAwLjAxIDAuMDIgMCAwIDAuMDEgMC4wMiAwIDBjMC4wMSwwLjAxIDAuMDIsMC4wMyAwLjAyLDAuMDRsMCAwIDAuMDIgMC4wMiAwIDAgMC4wMSAwLjAyIDAgMCAwLjAxIDAuMDIgMCAwYzAuMDEsMC4wMSAwLjAyLDAuMDIgMC4wMywwLjAzbDAgMCAwLjAxIDAuMDIgMCAwYzAuMDEsMC4wMSAwLjAyLDAuMDIgMC4wMywwLjAzbDAgMCAwLjAyIDAuMDIgMCAwIDAuMDIgMC4wMSAwIDAgMC4wMSAwLjAyIDAgMCAwLjAyIDAuMDEgMCAwIDAuMDIgMC4wMiAwIDAgMC4wMSAwLjAxIDAgMCAwLjAyIDAuMDIgMCAwIDAuMDIgMC4wMSAwIDAgMC4wMi'+
			'AwLjAxIDAgMCAwLjAyIDAuMDEgMCAwIDAuMDIgMC4wMiAwLjAyIDAuMDEgMC4wMiAwLjAxIDAgMCAwLjAyIDAuMDEgMC4wMiAwLjAxIDAgMCAwLjAyIDAuMDEgMC4wMiAwLjAxIDAuMDIgMC4wMSAwLjAyIDAuMDEgMC4wMiAwIDAuMDIgMC4wMSAwLjAzIDAuMDEgMC4wMiAwIDAuMDIgMC4wMSAwLjAyIDAgMC4wMyAwLjAxIDAuMDIgMCAwLjAyIDAgMC4wMyAwLjAxIDAuMDIgMCAwLjAyIDAgMC4wMyAwIDAuMDIgMCAwLjUyIDBjNC40NCwwIDguNTMsMC4wNiAxMi45NSwwLjI4IDUuNTEsMC4yOCA0LjQxLDUuOTkgNC40MSw1Ljk5bDAuMDggLTAuMDFjLTMuMzUsMTIuNzcgLTEzLjM2LDI1LjYzIC0y'+
			'MC42MywzMy42eiIgaWQ9InBhdGg5IiBjbGFzcz0iZmlsMSIvPgogPC9nPgo8L3N2Zz4K';
		me._openswiggy__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._openswiggy__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhLS0gQ3JlYXRvcjogQ29yZWxEUkFXIDIwMjAgKDY0LUJpdCkgLS0+CjxzdmcgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB3aWR0aD0iMTAwcHgiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbG'+
			'wtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiBzb2RpcG9kaTpkb2NuYW1lPSJTd2lnZ3kuc3ZnIiBpZD0ic3ZnMTIiIGhlaWdodD0iMTAwcHgiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxzb2RpcG9kaTpuYW1lZHZpZXcgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIgYm9yZGVyb3BhY2l0eT0iMS4wIiBwYWdlY29sb3I9IiNmZmZmZmYiIGJv'+
			'cmRlcmNvbG9yPSIjNjY2NjY2IiBpZD0ibmFtZWR2aWV3MTQiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiLz4KIDxkZWZzIGlkPSJkZWZzNCI+CiAgPHN0eWxlIHR5cGU9InRleHQvY3NzIiBpZD0ic3R5bGUyIj4KICAgIC5maWwxIHtmaWxsOiM1NWFhZmZ9CiAgICAuZmlsMCB7ZmlsbDojNTVhYWZmO2ZpbGwtcnVsZTpub256ZXJvfQogICA8L3N0eWxlPgogPC9kZWZzPgogPGcgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiIGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxwYXRoIG'+
			'Q9Ik0yLjg2IDBsOTcuMTQgMCAwIDEwMCAtMTAwIDAgMCAtMTAwIDIuODYgMHptOTEuNDIgNS43MmwtODguNTYgMCAwIDg4LjU2IDg4LjU2IDAgMCAtODguNTZ6IiBpZD0icGF0aDciIGNsYXNzPSJmaWwwIi8+CiAgPHBhdGggZD0iTTUwLjAxIDgyYzAsMCAtNS45MywtNi44OCAtMTEuNTcsLTE2LjExIC0yLjE0LC0zLjUxIC0xLjk0LC01LjAzIDMuNjIsLTUuMjggMS43MiwtMC4wMiA3LjgsLTAuNzQgNy42NSwyLjg3bDAgMy40NWMwLDAuNTIgMC40MiwwLjk0IDAuOTMsMC45NGwwLjUzIDBjMC41MSwwIDAuOTMsLTAuNDIgMC45MywtMC45NGwwIC03LjI1IDAgLTAuNTMgMCAtMC4wMiAwIC0wLjAy'+
			'IDAgLTAuMDMgMCAtMC4wMiAtMC4wMSAtMC4wMiAwIC0wLjAzIDAgLTAuMDIgMCAwIC0wLjAxIC0wLjAyIDAgMCAwIC0wLjAzIDAgMCAtMC4wMSAtMC4wMiAwIDAgLTAuMDEgLTAuMDIgMCAwIDAgLTAuMDIgMCAwIC0wLjAxIC0wLjAyIDAgMCAtMC4wMSAtMC4wMyAwIDAgMCAtMC4wMiAwIDAgLTAuMDEgLTAuMDIgMCAwIC0wLjAxIC0wLjAyIDAgMCAtMC4wMSAtMC4wMiAwIDAgLTAuMDEgLTAuMDIgMCAwIC0wLjAxIC0wLjAyIDAgMCAtMC4wMSAtMC4wMiAwIDBjLTAuMDEsLTAuMDEgLTAuMDIsLTAuMDMgLTAuMDMsLTAuMDRsMCAwIC0wLjAxIC0wLjAyIDAgMCAtMC4wMSAtMC4wMSAwIDAgLTAuMD'+
			'IgLTAuMDIgMCAwYzAsLTAuMDEgLTAuMDEsLTAuMDMgLTAuMDIsLTAuMDRsMCAwIC0wLjAyIC0wLjAyIDAgMGMtMC4wMSwtMC4wMSAtMC4wMiwtMC4wMiAtMC4wMywtMC4wM2wwIDAgLTAuMDEgLTAuMDEgMCAtMC4wMSAtMC4wMiAtMC4wMSAwIDAgLTAuMDIgLTAuMDIgMCAwIC0wLjAxIC0wLjAxIDAgMCAtMC4wMiAtMC4wMiAwIDAgLTAuMDIgLTAuMDEgMCAwIC0wLjAyIC0wLjAxIDAgMCAtMC4wMSAtMC4wMiAwIDAgLTAuMDIgLTAuMDEgMCAwIC0wLjAyIC0wLjAxIDAgMCAtMC4wMiAtMC4wMSAtMC4wMiAtMC4wMiAtMC4wMiAtMC4wMSAwIDAgLTAuMDIgLTAuMDEgLTAuMDIgLTAuMDEgMCAwIC0w'+
			'LjAyIC0wLjAxIC0wLjAyIC0wLjAxIC0wLjAyIDAgLTAuMDIgLTAuMDEgLTAuMDMgLTAuMDEgLTAuMDIgLTAuMDEgLTAuMDIgMCAtMC4wMiAtMC4wMSAtMC4wMiAtMC4wMSAtMC4wMyAwIC0wLjAyIC0wLjAxIC0wLjAyIDAgLTAuMDIgMCAtMC4wMyAwIC0wLjAyIC0wLjAxIC0wLjAzIDAgLTAuMDIgMCAtMC4wMiAwIC0wLjUzIDAgLTguOTkgMGMtNC43NSwwIC02Ljk0LDAuNjkgLTguOTEsLTMuMDYgLTQuMjMsLTkuNDcgLTYuMzEsLTE5LjU0IC0xLjQzLC0yNi43IDkuNTYsLTE0LjA0IDI5LjE1LC0xMy44NyAzNy40LDAuMDcgMS4yMSwyLjAzIDQuNTgsOC40IDEuNjEsOS44NSAtMi42NiwxLjMgLT'+
			'cuNDQsMS4zNyAtOC4xOSwxLjM3bC0wLjEgMCAwIDAgLTYuMjIgMGMtMS40OSwwIC0xLjY3LC0wLjE1IC0xLjY3LC0xLjU5bDAgLTcuMTJjMCwtMC41MiAtMC40MiwtMC45NCAtMC45NCwtMC45NGwtMC41MiAwYy0wLjUxLDAgLTAuOTMsMC40MiAtMC45MywwLjk0bDAgOS42NCAwIDAuNTMgMCAwLjAyIDAgMC4wMyAwIDAuMDIgMCAwLjAyIDAgMC4wMyAwLjAxIDAuMDIgMCAwLjAyIDAgMCAwIDAuMDMgMCAwIDAuMDEgMC4wMiAwIDAgMC4wMSAwLjAyIDAgMCAwIDAuMDIgMCAwIDAuMDEgMC4wMyAwIDAgMC4wMSAwLjAyIDAgMCAwIDAuMDIgMCAwIDAuMDEgMC4wMiAwIDAgMC4wMSAwLjAyIDAgMCAw'+
			'LjAxIDAuMDIgMCAwIDAuMDEgMC4wMiAwIDAgMC4wMSAwLjAyIDAgMCAwLjAxIDAuMDIgMCAwIDAuMDEgMC4wMiAwIDBjMC4wMSwwLjAxIDAuMDIsMC4wMyAwLjAyLDAuMDRsMCAwIDAuMDIgMC4wMiAwIDAgMC4wMSAwLjAyIDAgMCAwLjAxIDAuMDIgMCAwYzAuMDEsMC4wMSAwLjAyLDAuMDIgMC4wMywwLjAzbDAgMCAwLjAxIDAuMDIgMCAwYzAuMDEsMC4wMSAwLjAyLDAuMDIgMC4wMywwLjAzbDAgMCAwLjAyIDAuMDIgMCAwIDAuMDIgMC4wMSAwIDAgMC4wMSAwLjAyIDAgMCAwLjAyIDAuMDEgMCAwIDAuMDIgMC4wMiAwIDAgMC4wMSAwLjAxIDAgMCAwLjAyIDAuMDIgMCAwIDAuMDIgMC4wMSAwID'+
			'AgMC4wMiAwLjAxIDAgMCAwLjAyIDAuMDEgMCAwIDAuMDIgMC4wMiAwLjAyIDAuMDEgMC4wMiAwLjAxIDAgMCAwLjAyIDAuMDEgMC4wMiAwLjAxIDAgMCAwLjAyIDAuMDEgMC4wMiAwLjAxIDAuMDIgMC4wMSAwLjAyIDAuMDEgMC4wMiAwIDAuMDIgMC4wMSAwLjAzIDAuMDEgMC4wMiAwIDAuMDIgMC4wMSAwLjAyIDAgMC4wMyAwLjAxIDAuMDIgMCAwLjAyIDAgMC4wMyAwLjAxIDAuMDIgMCAwLjAyIDAgMC4wMyAwIDAuMDIgMCAwLjUyIDBjNC40NCwwIDguNTMsMC4wNiAxMi45NSwwLjI4IDUuNTEsMC4yOCA0LjQxLDUuOTkgNC40MSw1Ljk5bDAuMDggLTAuMDFjLTMuMzUsMTIuNzcgLTEzLjM2LDI1'+
			'LjYzIC0yMC42MywzMy42eiIgaWQ9InBhdGg5IiBjbGFzcz0iZmlsMSIvPgogPC9nPgo8L3N2Zz4K';
		me._openswiggy__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="OpenSwiggy";
		el.ggDx=18.09;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		hs+='filter: drop-shadow(0px 5px 5px rgb(0 0 0 \/ 0.2));';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._openswiggy.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._openswiggy.onclick=function (e) {
			player.openUrl("https:\/\/bit.ly\/3OUtU5h","_blank");
		}
		me._openswiggy.onmouseover=function (e) {
			me._openswiggy__img.style.visibility='hidden';
			me._openswiggy__imgo.style.visibility='inherit';
			me.elementMouseOver['openswiggy']=true;
			me._txtopenswiggy.logicBlock_alpha();
		}
		me._openswiggy.onmouseout=function (e) {
			me._openswiggy__img.style.visibility='inherit';
			me._openswiggy__imgo.style.visibility='hidden';
			me.elementMouseOver['openswiggy']=false;
			me._txtopenswiggy.logicBlock_alpha();
		}
		me._openswiggy.ontouchend=function (e) {
			me.elementMouseOver['openswiggy']=false;
			me._txtopenswiggy.logicBlock_alpha();
		}
		me._openswiggy.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._txtopenswiggy=document.createElement('div');
		els=me._txtopenswiggy__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txtOpenSwiggy";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 40px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 8px 11px 8px 11px;';
		hs+='overflow: hidden;';
		hs+="text-shadow: #00000085 1px 1px;";
		els.setAttribute('style',hs);
		els.innerHTML="Open Swiggy";
		el.appendChild(els);
		me._txtopenswiggy.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txtopenswiggy.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['openswiggy'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._txtopenswiggy.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._txtopenswiggy.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._txtopenswiggy.style[domTransition]='opacity 400ms ease 0ms';
				if (me._txtopenswiggy.ggCurrentLogicStateAlpha == 0) {
					me._txtopenswiggy.style.visibility=me._txtopenswiggy.ggVisible?'inherit':'hidden';
					me._txtopenswiggy.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._txtopenswiggy.style.opacity == 0.0) { me._txtopenswiggy.style.visibility="hidden"; } }, 405);
					me._txtopenswiggy.style.opacity=0;
				}
			}
		}
		me._txtopenswiggy.ggUpdatePosition=function (useTransition) {
		}
		me._openswiggy.appendChild(me._txtopenswiggy);
		me._cntlink.appendChild(me._openswiggy);
		me._logo.appendChild(me._cntlink);
		me.divSkin.appendChild(me._logo);
		el=me._cntcusticon=document.createElement('div');
		el.ggId="cntCustIcon";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 310px;';
		hs+='position : absolute;';
		hs+='right : -52px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 50%';
		me._cntcusticon.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._cntcusticon.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('IconVisible') == true)) && 
				((player.getVariableValue('category_visible') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('IconVisible') == true)) || 
				((player.getVariableValue('category_visible') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._cntcusticon.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._cntcusticon.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._cntcusticon.style[domTransition]='right 1000ms ease 0ms, top 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._cntcusticon.ggCurrentLogicStatePosition == 0) {
					me._cntcusticon.style.right='20px';
					this.ggDy = 0;
					me._cntcusticon.ggUpdatePosition(true);
				}
				else if (me._cntcusticon.ggCurrentLogicStatePosition == 1) {
					me._cntcusticon.style.right='220px';
					this.ggDy = 0;
					me._cntcusticon.ggUpdatePosition(true);
				}
				else {
					me._cntcusticon.style.right='-52px';
					me._cntcusticon.ggDy=0;
					me._cntcusticon.ggUpdatePosition(true);
				}
			}
		}
		me._cntcusticon.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 450)) && 
				((player.getViewerSize().width > 300))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width <= 300))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._cntcusticon.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._cntcusticon.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._cntcusticon.style[domTransition]='right 1000ms ease 0ms, top 1000ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._cntcusticon.ggCurrentLogicStateScaling == 0) {
					me._cntcusticon.ggParameter.sx = 0.8;
					me._cntcusticon.ggParameter.sy = 0.8;
					me._cntcusticon.style[domTransform]=parameterToTransform(me._cntcusticon.ggParameter);
				}
				else if (me._cntcusticon.ggCurrentLogicStateScaling == 1) {
					me._cntcusticon.ggParameter.sx = 0.5;
					me._cntcusticon.ggParameter.sy = 0.5;
					me._cntcusticon.style[domTransform]=parameterToTransform(me._cntcusticon.ggParameter);
				}
				else {
					me._cntcusticon.ggParameter.sx = 1;
					me._cntcusticon.ggParameter.sy = 1;
					me._cntcusticon.style[domTransform]=parameterToTransform(me._cntcusticon.ggParameter);
				}
			}
		}
		me._cntcusticon.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._svggallery=document.createElement('div');
		els=me._svggallery__img=document.createElement('img');
		els.className='ggskin ggskin_svggallery';
		hs=basePath + 'images/svggallery.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAEnUlEQVRoge2bXYhUZRjHf885uzvqqmRoFwYVEUbZ0oVmwVquKIm1aJtzzuy6FUWRQRdCF4JUiJBFdwYSIUEfqLtzRjczMRdNEyov6qJAtwyCPjSJFoTctf2a83SxH757mtGZc86sy8z8ruZ93vd9+P85z3nP+56ZEcdTpYKwbrSAqabiDNcE2vuBUzdCSAlZASTHG0HDpzKu7JpaPaXF8RQMwxVX0lXD5U7VcLlTNVzuVA2XO8GdVl4cT2/N2kgpxYTFzqIZVy4UMrZgw8A5O0t9SE2lph+YXcjAiivpijNcTElPoEKH5ePFLaYYfAtXlLZi54UyDPR4KTkYcm4sJDN6X5h5YQ1Pon2Pzh2qYxuwBhgR5bNZV9jx4XMyEEf+OIl8Dz/7gc4YquMr4B'+
			'VgMXC/Cq/11/P5tm067daIyIL663kBaMjR1dSzmCej5o+bOK7AMuNzL3BlvCHKAzHkj5XI97AoF/Xq/mu+2edbXIyaP24iX2FR9gEjObr6fItPis3nprVxw359MKqufEQ2nG6VH0R5BrhshP8SJdm1QX4rJpfjaYMKhy2fk8mMro+qLRexrKJeSjpqh7kdWAusAu7yUtJdTI7WDr0DOArcBMwUpctN68tx6DOJ5TkMsK9dLjEquGgcTxdkoRtYaIQtFXa5ab3tnh62bt8ufhw6p+Q56Xhq5+tb96nOAY4Ai3L1q7Dlx3vZu/aIJuLQUnLDjqebgW827tV5wb61RzSRGKQLWGqEe0R5wxynQuvsPg4//bFGPp6WzLDjqe14uhPYCSwbruWYadrx1J7dx0fAamPa71mbNV5KXgc2AWYZrx6YwdH2PTo3iq6SGG4+pLOA'+
			'DLDZCC+ZMK0qKrwDpIz+XuDRrg1yHiDjym5RXGDIGLN8qI4vHE9vDqstdsMtXXrLzAFOAC05upcM13LM7WSHKOYK3G/5PJZx5Zw52EvJAUZX/j4jvBT4kgLfcASJ1XCqUxfVjHAaMDcO/wDnjfYStdlqtIdFeSLdKt/myplx5YRvsZLRChinQZTnw2iMzbDj6XLf4jRwpxH+w/JptLM8DOTahKgoT3kpOX6t3AeS8p3l0xjIMT/f+GsRi2E3rS5wHDDvre/tLA+lW+VMZ5v8atWySpThwNShxCA5r2yQdKv8DDQCZ6NojWZYVZIZ3aJCGjCfk0cHEzzS2SZ/jgfSLfILsJLJ++7EwAzOjO2yrkvGlQs1IzQB2bCSQxtuOqk1yf28K8rbZlyU9+ddYt2h9XI5OMdLydeiNDHZ9KyszdlCTXdslF5yH1YKIqzhugV/c1'+
			'CUl8ygKK96Li/u3iTB0p3gGqYLvtJRCGV4bIV83AgNA+1eSt5E5Lq/+8pjun4qTIc9PCwMtLstn4ZUp75VcAYF36JrbHMxTn3W5ienU9+z4N98U/0Ih564TkvNvkVzsZPy1EICi82xHI1yMO3eKpaaijNcTEnfXWMxZ1CYUyoxlk+9b03+hlKz9Il99U1okIRyecTnf4/AfBRsuNDvX6c7FVfSVcPlTtVwuVM1XO5UDZc7wZ3WirH/CJQTK8xG0HAS4w8R5UjFlXTFGf4PolJoCtIsSpwAAAAASUVORK5CYII=';
		me._svggallery__img.ggOverSrc=hs;
		el.ggId="svgGallery";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button svgBtn";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 79px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svggallery.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svggallery.onclick=function (e) {
			player.setVariableValue('ScreenBg', true);
			player.setVariableValue('gallery_show_hide', true);
			player.stopAutorotate();
			player.setVariableValue('CurrentWindow', "Gallery");
		}
		me._svggallery.onmouseover=function (e) {
			me._svggallery__img.src=me._svggallery__img.ggOverSrc;
			me.elementMouseOver['svggallery']=true;
			me._txtgallery.logicBlock_alpha();
		}
		me._svggallery.onmouseout=function (e) {
			me._svggallery__img.src=me._svggallery__img.ggNormalSrc;
			me.elementMouseOver['svggallery']=false;
			me._txtgallery.logicBlock_alpha();
		}
		me._svggallery.ontouchend=function (e) {
			me.elementMouseOver['svggallery']=false;
			me._txtgallery.logicBlock_alpha();
		}
		me._svggallery.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._txtgallery=document.createElement('div');
		els=me._txtgallery__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txtGallery";
		el.ggDy=-3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 41px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 7px 10px 7px 10px;';
		hs+='overflow: hidden;';
		hs+="text-shadow: #00000085 1px 1px;";
		els.setAttribute('style',hs);
		els.innerHTML="Gallery";
		el.appendChild(els);
		me._txtgallery.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txtgallery.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['svggallery'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._txtgallery.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._txtgallery.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._txtgallery.style[domTransition]='opacity 400ms ease 0ms';
				if (me._txtgallery.ggCurrentLogicStateAlpha == 0) {
					me._txtgallery.style.visibility=me._txtgallery.ggVisible?'inherit':'hidden';
					me._txtgallery.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._txtgallery.style.opacity == 0.0) { me._txtgallery.style.visibility="hidden"; } }, 405);
					me._txtgallery.style.opacity=0;
				}
			}
		}
		me._txtgallery.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._svggallery.appendChild(me._txtgallery);
		me._cntcusticon.appendChild(me._svggallery);
		el=me._svggooglelocation=document.createElement('div');
		els=me._svggooglelocation__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDhweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDggNDgiIGhlaWdodD0iNDhweCI+CiA8cGF0aCBkPSJNNDIsMzlWOWMwLTEuNjU3LTEuMzQzLTMtMy0zSDlDNy4zNDMsNiw2LDcuMzQzLDYsOXYzMGMwLDEuNjU3LDEuMzQzLDMsMywzaDMwQzQwLjY1Nyw0Miw0Miw0MC42NTcsNDIsMzl6IiBmaWxsPSIjMWM5OTU3Ii8+CiA8cGF0aCBkPSJNOSw0MmgzMGMxLjY1NywwLTE1LTE2LTE1LTE2UzcuMzQzLDQyLDksNDJ6IiBmaWxsPSIjM2U3YmYxIi8+CiA8cGF0aCBkPSJNNDIsMzlWOWMwLTEuNjU3LTE2LDE1LTE2LDE1UzQyLDQwLj'+
			'Y1Nyw0MiwzOXoiIGZpbGw9IiNjYmNjYzkiLz4KIDxwYXRoIGQ9Ik0zOSw0MmMxLjY1NywwLDMtMS4zNDMsMy0zdi0wLjI0NUwyNi4yNDUsMjNMMjMsMjYuMjQ1TDM4Ljc1NSw0MkgzOXoiIGZpbGw9IiNlZmVmZWYiLz4KIDxwYXRoIGQ9Ik00Miw5YzAtMS42NTctMS4zNDMtMy0zLTNoLTAuMjQ1TDYsMzguNzU1VjM5YzAsMS42NTcsMS4zNDMsMywzLDNoMC4yNDVMNDIsOS4yNDVWOXoiIGZpbGw9IiNmZmQ3M2QiLz4KIDxwYXRoIGQ9Ik0zNiwyYy01LjUyMywwLTEwLDQuNDc3LTEwLDEwYzAsNi44MTMsNy42NjYsOS4yOTUsOS4zMzMsMTkuODUxQzM1LjQ0LDMyLjUzMSwzNS40NDgsMzMsMzYsMzNz'+
			'MC41Ni0wLjQ2OSwwLjY2Ny0xLjE0OUMzOC4zMzQsMjEuMjk1LDQ2LDE4LjgxMyw0NiwxMkM0Niw2LjQ3Nyw0MS41MjMsMiwzNiwyeiIgZmlsbD0iI2Q3M2YzNSIvPgogPHBhdGggZD0iTTM2IDguNUEzLjUgMy41IDAgMSAwIDM2IDE1LjVBMy41IDMuNSAwIDEgMCAzNiA4LjVaIiBmaWxsPSIjNzUyNjIyIi8+CiA8cGF0aCBkPSJNMTQuNDkzLDEyLjUzMXYyLjEwMWgyLjk5NGMtMC4zOTIsMS4yNzQtMS40NTUsMi4xODUtMi45OTQsMi4xODVjLTEuODMzLDAtMy4zMTgtMS40ODUtMy4zMTgtMy4zMThzMS40ODYtMy4zMTgsMy4zMTgtMy4zMThjMC44MjQsMCwxLjU3NiwwLjMwMiwyLjE1NiwwLjc5OW'+
			'wxLjU0OC0xLjU0N0MxNy4yMiw4LjU0MywxNS45Miw4LDE0LjQ5Myw4Yy0zLjAzOCwwLTUuNTAxLDIuNDYzLTUuNTAxLDUuNXMyLjQ2Myw1LjUsNS41MDEsNS41YzQuODEsMCw1LjYzNy00LjMxNyw1LjE4NC02LjQ2MUwxNC40OTMsMTIuNTMxeiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K';
		me._svggooglelocation__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svggooglelocation__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiM1NWFhZmY7ZmlsbC1ydWxlOm5vbnplcm99JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxn'+
			'IGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxwYXRoIGQ9Ik0yNC4yIDAuMDFsODIyLjQ4IDAgMCA4NDYuNjcgLTg0Ni42NyAwIDAgLTg0Ni42NyAyNC4xOSAwem03NzQuMDkgNDguMzlsLTc0OS44OSAwIDAgNzQ5Ljg5IDc0OS44OSAwIDAgLTc0OS44OXoiIGNsYXNzPSJmaWwwIi8+CiAgPHBhdGggZD0iTTI1NS40NSAzNDIuODRjLTUuODIsLTIxLjcgLTcuNDEsLTQ0LjY4IC00LjQxLC02Ny41NyAyLjg5LC0yMi4wNiAxMC4wMywtNDMuODkgMjEuNjYsLTY0LjE3IDExLjg2LC0yMC40NSAyNy4xMiwtMzcuNjIgNDQuNjQsLT'+
			'UxLjE0IDE4LjMsLTE0LjEgMzkuMDcsLTI0LjMyIDYwLjg4LC0zMC4yMiAyMS42OCwtNS44MiA0NC42NywtNy40MSA2Ny41NiwtNC40MiAyMi4wNiwyLjkxIDQzLjg5LDEwLjA0IDY0LjE5LDIxLjY3IDIwLjQ2LDExLjg1IDM3LjYyLDI3LjEzIDUxLjE0LDQ0LjY0IDE0LjExLDE4LjMxIDI0LjMyLDM5LjA3IDMwLjIxLDYwLjg4IDMuNzMsMTMuOSA2Ljg0LDI5LjAzIDcuNDYsNDQuNjggMC42NiwxNi44OSAtMS42MiwzMy44OCAtOS4wMyw0OS44NWwtMTY2LjM1IDM1OC4zOWMtNTUuODEsLTEyMC4yIC0xMTEuNTEsLTI0MC40NiAtMTY3LjQzLC0zNjAuNjJsLTAuNTIgLTEuOTd6bTQzLjQxIC02MS4z'+
			'M2MtMi4wNiwxNS43NCAtMS4wNSwzMS43MSAyLjc5LDQ2Ljk3bDEyMS43NSAyNjIuMjMgMTIyLjQ5IC0yNjMuOTFjMy45LC04LjM5IDUuMDcsLTE3LjkzIDQuNjksLTI3LjczIC0wLjQ0LC0xMS4wMyAtMi45MywtMjIuODMgLTUuOTUsLTM0LjA3IC00LjI2LC0xNS44IC0xMS42LC0zMC43OCAtMjEuNzEsLTQzLjg4IC05LjgsLTEyLjcxIC0yMi4yLC0yMy43NiAtMzYuOTIsLTMyLjIzIC0xNC45NCwtOC40NyAtMzAuNzMsLTEzLjY4IC00Ni40NiwtMTUuNzQgLTE2LjQsLTIuMTQgLTMzLjAyLC0wLjk3IC00OC44MywzLjI4IC0xNS43OSw0LjI3IC0zMC43NywxMS42MSAtNDMuODcsMjEuNzIgLTEyLj'+
			'cyLDkuODEgLTIzLjc3LDIyLjIyIC0zMi4yNCwzNi45MiAtOC40NywxNC45NCAtMTMuNjgsMzAuNzEgLTE1Ljc0LDQ2LjQ0eiIgY2xhc3M9ImZpbDAiLz4KICA8cGF0aCBkPSJNNDI0LjA0IDMzMi4xN2M5LjksMCAxOC44NiwtNCAyNS4zMiwtMTAuNDIgNi40MiwtNi40NiAxMC40MiwtMTUuNDIgMTAuNDIsLTI1LjMzIDAsLTkuOSAtNCwtMTguODYgLTEwLjQyLC0yNS4zMiAtNi40NiwtNi40MiAtMTUuNDIsLTEwLjQyIC0yNS4zMiwtMTAuNDIgLTkuODcsMCAtMTguODIsNC4wMSAtMjUuMjgsMTAuNDcgLTYuNDYsNi40NSAtMTAuNDgsMTUuNDEgLTEwLjQ4LDI1LjI3IDAsOS44NyA0LjAyLDE4Ljgy'+
			'IDEwLjQ4LDI1LjI4IDYuNDYsNi40NiAxNS40MSwxMC40NyAyNS4yOCwxMC40N3ptNTkuMzkgMjMuNzRjLTE1LjIzLDE1LjIxIC0zNi4yNCwyNC42NCAtNTkuMzksMjQuNjQgLTIzLjIyLDAgLTQ0LjI3LC05LjQzIC01OS40OSwtMjQuNjQgLTE1LjIyLC0xNS4yMyAtMjQuNjUsLTM2LjI2IC0yNC42NSwtNTkuNDkgMCwtMjMuMjIgOS40MywtNDQuMjUgMjQuNjUsLTU5LjQ4IDE1LjIyLC0xNS4yMiAzNi4yNywtMjQuNjUgNTkuNDksLTI0LjY1IDIzLjE1LDAgNDQuMTYsOS40MyA1OS4zOSwyNC42NWwwLjA5IDAuMDljMTUuMjIsMTUuMjMgMjQuNjUsMzYuMjQgMjQuNjUsNTkuMzkgMCwyMy4xNSAtOS'+
			'40Myw0NC4xNyAtMjQuNjUsNTkuMzlsLTAuMDkgMC4xeiIgY2xhc3M9ImZpbDAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._svggooglelocation__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="svgGoogleLocation";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svgBtn";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svggooglelocation.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svggooglelocation.onclick=function (e) {
			player.openUrl("https:\/\/maps.app.goo.gl\/SDAyZ9BrauEp7M2c6","_blank");
		}
		me._svggooglelocation.onmouseover=function (e) {
			me._svggooglelocation__img.style.visibility='hidden';
			me._svggooglelocation__imgo.style.visibility='inherit';
			me.elementMouseOver['svggooglelocation']=true;
			me._txtgooglelocation.logicBlock_alpha();
		}
		me._svggooglelocation.onmouseout=function (e) {
			me._svggooglelocation__img.style.visibility='inherit';
			me._svggooglelocation__imgo.style.visibility='hidden';
			me.elementMouseOver['svggooglelocation']=false;
			me._txtgooglelocation.logicBlock_alpha();
		}
		me._svggooglelocation.ontouchend=function (e) {
			me.elementMouseOver['svggooglelocation']=false;
			me._txtgooglelocation.logicBlock_alpha();
		}
		me._svggooglelocation.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._txtgooglelocation=document.createElement('div');
		els=me._txtgooglelocation__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txtGoogleLocation";
		el.ggDy=-3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 41px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 7px 10px 7px 10px;';
		hs+='overflow: hidden;';
		hs+="text-shadow: #00000085 1px 1px;";
		els.setAttribute('style',hs);
		els.innerHTML="Google Location";
		el.appendChild(els);
		me._txtgooglelocation.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txtgooglelocation.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['svggooglelocation'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._txtgooglelocation.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._txtgooglelocation.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._txtgooglelocation.style[domTransition]='opacity 400ms ease 0ms';
				if (me._txtgooglelocation.ggCurrentLogicStateAlpha == 0) {
					me._txtgooglelocation.style.visibility=me._txtgooglelocation.ggVisible?'inherit':'hidden';
					me._txtgooglelocation.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._txtgooglelocation.style.opacity == 0.0) { me._txtgooglelocation.style.visibility="hidden"; } }, 405);
					me._txtgooglelocation.style.opacity=0;
				}
			}
		}
		me._txtgooglelocation.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._svggooglelocation.appendChild(me._txtgooglelocation);
		me._cntcusticon.appendChild(me._svggooglelocation);
		el=me._svgcontact=document.createElement('div');
		els=me._svgcontact__img=document.createElement('img');
		els.className='ggskin ggskin_svgcontact';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/svgcontact__o.png';
		me._svgcontact__img.ggOverSrc=hs;
		el.ggId="svgContact";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button svgBtn";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svgcontact.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svgcontact.onclick=function (e) {
			player.setVariableValue('ScreenBg', true);
			me._container_info.style[domTransition]='none';
			me._container_info.style.visibility=(Number(me._container_info.style.opacity)>0||!me._container_info.style.opacity)?'inherit':'hidden';
			me._container_info.ggVisible=true;
			player.stopAutorotate();
			player.setVariableValue('CurrentWindow', "Info");
		}
		me._svgcontact.onmouseover=function (e) {
			me._svgcontact__img.src=me._svgcontact__img.ggOverSrc;
			me.elementMouseOver['svgcontact']=true;
			me._txtcontact.logicBlock_alpha();
		}
		me._svgcontact.onmouseout=function (e) {
			me._svgcontact__img.src=me._svgcontact__img.ggNormalSrc;
			me.elementMouseOver['svgcontact']=false;
			me._txtcontact.logicBlock_alpha();
		}
		me._svgcontact.ontouchend=function (e) {
			me.elementMouseOver['svgcontact']=false;
			me._txtcontact.logicBlock_alpha();
		}
		me._svgcontact.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._txtcontact=document.createElement('div');
		els=me._txtcontact__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txtContact";
		el.ggDy=-3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 41px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 7px 10px 7px 10px;';
		hs+='overflow: hidden;';
		hs+="text-shadow: #00000085 1px 1px;";
		els.setAttribute('style',hs);
		els.innerHTML="Contact";
		el.appendChild(els);
		me._txtcontact.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txtcontact.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['svgcontact'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._txtcontact.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._txtcontact.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._txtcontact.style[domTransition]='opacity 400ms ease 0ms';
				if (me._txtcontact.ggCurrentLogicStateAlpha == 0) {
					me._txtcontact.style.visibility=me._txtcontact.ggVisible?'inherit':'hidden';
					me._txtcontact.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._txtcontact.style.opacity == 0.0) { me._txtcontact.style.visibility="hidden"; } }, 405);
					me._txtcontact.style.opacity=0;
				}
			}
		}
		me._txtcontact.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._svgcontact.appendChild(me._txtcontact);
		me._cntcusticon.appendChild(me._svgcontact);
		el=me._openyoutube=document.createElement('div');
		els=me._openyoutube__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDhweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDggNDgiIGhlaWdodD0iNDhweCI+CiA8cGF0aCBkPSJNNDMuMiwzMy45Yy0wLjQsMi4xLTIuMSwzLjctNC4yLDRjLTMuMywwLjUtOC44LDEuMS0xNSwxLjFjLTYuMSwwLTExLjYtMC42LTE1LTEuMWMtMi4xLTAuMy0zLjgtMS45LTQuMi00QzQuNCwzMS42LDQsMjguMiw0LDI0YzAtNC4yLDAuNC03LjYsMC44LTkuOWMwLjQtMi4xLDIuMS0zLjcsNC4yLTRDMTIuMyw5LjYsMTcuOCw5LDI0LDljNi4yLDAsMTEuNiwwLjYsMTUsMS4xYzIuMSwwLjMsMy44LDEuOSw0LjIsNGMwLjQsMi'+
			'4zLDAuOSw1LjcsMC45LDkuOUM0NCwyOC4yLDQzLjYsMzEuNiw0My4yLDMzLjl6IiBmaWxsPSIjRkYzRDAwIi8+CiA8cGF0aCBkPSJNMjAgMzFMMjAgMTcgMzIgMjR6IiBmaWxsPSIjRkZGIi8+Cjwvc3ZnPgo=';
		me._openyoutube__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._openyoutube__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiM1NWFhZmY7ZmlsbC1ydWxlOm5vbnplcm99JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxn'+
			'IGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxnIGlkPSJfMTU5MzUwOTQ3NjE5MiI+CiAgIDxwYXRoIGQ9Ik0yNC4yMSAwLjAxbDgyMi40NyAwIDAgODQ2LjY3IC04NDYuNjcgMCAwIC04NDYuNjcgMjQuMiAwem03NzQuMDYgNDguNDFsLTc0OS44NSAwIDAgNzQ5Ljg1IDc0OS44NSAwIDAgLTc0OS44NXoiIGNsYXNzPSJmaWwwIi8+CiAgIDxwYXRoIGQ9Ik0xNTcuMjQgMTY3Ljc1bDUzMi4yMSAwYzExLjM2LDAgMjEuNzEsNC42OSAyOS4xMiwxMi4wOSA3LjQyLDcuNDMgMTIuMTEsMTcuODMgMTIuMTEsMjkuMTRsMCA0MjguNz'+
			'JjMCwxMS4zMSAtNC42OSwyMS42OSAtMTIuMTEsMjkuMTIgLTcuNDMsNy40MyAtMTcuODEsMTIuMTEgLTI5LjEyLDEyLjExbC01MzIuMjEgMGMtMTEuMzIsMCAtMjEuNzIsLTQuNjggLTI5LjE1LC0xMi4xMSAtNy40LC03LjQxIC0xMi4wOSwtMTcuNzYgLTEyLjA5LC0yOS4xMmwwIC00MjguNzJjMCwtMTEuMjcgNC42MiwtMjEuNiAxMi4wOSwtMjkuMDUgNy41NSwtNy41NiAxNy44OCwtMTIuMTggMjkuMTUsLTEyLjE4em01MjcuNzMgNDUuNzFsLTUyMy4yNSAwIDAgNDE5Ljc2IDUyMy4yNSAwIDAgLTQxOS43NnoiIGNsYXNzPSJmaWwwIi8+CiAgIDxwYXRoIGQ9Ik00ODcuMDggNDIzLjMzbC0xNDcu'+
			'NTQgLTg1LjIxIDAgMTcwLjQyIDE0Ny41NCAtODUuMjF6bS01My42OSAtNzcuNDFsMTM0LjA3IDc3LjQxIC0yNjguMjQgMTU0LjgxIDAgLTMwOS42MiAxMzQuMTcgNzcuNHoiIGNsYXNzPSJmaWwwIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._openyoutube__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="OpenYoutube";
		el.ggDx=0;
		el.ggDy=150;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		hs+='filter: drop-shadow(0px 5px 5px rgb(0 0 0 \/ 0.2));';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._openyoutube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._openyoutube.onclick=function (e) {
			player.openUrl("https:\/\/www.youtube.com\/@vayuhu_blr","_blank");
		}
		me._openyoutube.onmouseover=function (e) {
			me._openyoutube__img.style.visibility='hidden';
			me._openyoutube__imgo.style.visibility='inherit';
			me.elementMouseOver['openyoutube']=true;
			me._txtopenyoutube.logicBlock_alpha();
		}
		me._openyoutube.onmouseout=function (e) {
			me._openyoutube__img.style.visibility='inherit';
			me._openyoutube__imgo.style.visibility='hidden';
			me.elementMouseOver['openyoutube']=false;
			me._txtopenyoutube.logicBlock_alpha();
		}
		me._openyoutube.ontouchend=function (e) {
			me.elementMouseOver['openyoutube']=false;
			me._txtopenyoutube.logicBlock_alpha();
		}
		me._openyoutube.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._txtopenyoutube=document.createElement('div');
		els=me._txtopenyoutube__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txtOpenYoutube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : 8px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 8px 11px 8px 11px;';
		hs+='overflow: hidden;';
		hs+="text-shadow: #00000085 1px 1px;";
		els.setAttribute('style',hs);
		els.innerHTML="Open Youtube";
		el.appendChild(els);
		me._txtopenyoutube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txtopenyoutube.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['openyoutube'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._txtopenyoutube.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._txtopenyoutube.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._txtopenyoutube.style[domTransition]='opacity 400ms ease 0ms';
				if (me._txtopenyoutube.ggCurrentLogicStateAlpha == 0) {
					me._txtopenyoutube.style.visibility=me._txtopenyoutube.ggVisible?'inherit':'hidden';
					me._txtopenyoutube.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._txtopenyoutube.style.opacity == 0.0) { me._txtopenyoutube.style.visibility="hidden"; } }, 405);
					me._txtopenyoutube.style.opacity=0;
				}
			}
		}
		me._txtopenyoutube.ggUpdatePosition=function (useTransition) {
		}
		me._openyoutube.appendChild(me._txtopenyoutube);
		me._cntcusticon.appendChild(me._openyoutube);
		el=me._openinsta=document.createElement('div');
		els=me._openinsta__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._openinsta__img.setAttribute('src',basePath + 'images/openinsta.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._openinsta__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiM1NWFhZmY7ZmlsbC1ydWxlOm5vbnplcm99JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxn'+
			'IGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxnIGlkPSJfMjAxNTUwNDg2NjczNiI+CiAgIDxwYXRoIGQ9Ik0yNC4yIDBsODIyLjQ2IDAgMCA4NDYuNjYgLTg0Ni42NiAwIDAgLTg0Ni42NiAyNC4yIDB6bTc3NC4wNiA0OC40bC03NDkuODYgMCAwIDc0OS44NiA3NDkuODYgMCAwIC03NDkuODZ6IiBjbGFzcz0iZmlsMCIvPgogICA8cGF0aCBkPSJNMjMwLjIxIDE1Mi45OGwzODYuMjIgMGMyMS4yNiwwIDQwLjU5LDguNjkgNTQuNTcsMjIuNjcgMTMuOTcsMTMuOTcgMjIuNjYsMzMuMyAyMi42Niw1NC41NmwwIDM4Ni4yMmMwLD'+
			'IxLjI2IC04LjY5LDQwLjU5IC0yMi42Niw1NC41NyAtMTMuOTgsMTMuOTcgLTMzLjMxLDIyLjY2IC01NC41NywyMi42NmwtMzg2LjIyIDBjLTIxLjI2LDAgLTQwLjU5LC04LjY5IC01NC41NiwtMjIuNjYgLTEzLjk4LC0xMy45OCAtMjIuNjcsLTMzLjMxIC0yMi42NywtNTQuNTdsMCAtMzg2LjIyYzAsLTIxLjI2IDguNjksLTQwLjU5IDIyLjY3LC01NC41NiAxMy45NywtMTMuOTggMzMuMywtMjIuNjcgNTQuNTYsLTIyLjY3em0zODYuMjIgNDguNDFsLTM4Ni4yMiAwYy03Ljg5LDAgLTE1LjExLDMuMjUgLTIwLjM0LDguNDggLTUuMjMsNS4yMyAtOC40OCwxMi40NSAtOC40OCwyMC4zNGwwIDM4Ni4y'+
			'MmMwLDcuODkgMy4yNSwxNS4xMSA4LjQ4LDIwLjM0IDUuMjMsNS4yMyAxMi40NSw4LjQ5IDIwLjM0LDguNDlsMzg2LjIyIDBjNy44OSwwIDE1LjExLC0zLjI2IDIwLjM0LC04LjQ5IDUuMjMsLTUuMjMgOC40OSwtMTIuNDUgOC40OSwtMjAuMzRsMCAtMzg2LjIyYzAsLTcuODkgLTMuMjYsLTE1LjExIC04LjQ5LC0yMC4zNCAtNS4yMywtNS4yMyAtMTIuNDUsLTguNDggLTIwLjM0LC04LjQ4eiIgY2xhc3M9ImZpbDAiLz4KICAgPHBhdGggZD0iTTQyMy4zMiAzMTcuNDhjMjkuMjIsMCA1NS42OSwxMS44NSA3NC44NCwzMSAxOS4xNSwxOS4xNSAzMSw0NS42MiAzMSw3NC44NCAwLDI5LjIyIC0xMS44NS'+
			'w1NS42OSAtMzEsNzQuODQgLTE5LjE1LDE5LjE1IC00NS42MiwzMSAtNzQuODQsMzEgLTI5LjIyLDAgLTU1LjY5LC0xMS44NSAtNzQuODQsLTMxIC0xOS4xNSwtMTkuMTUgLTMxLC00NS42MiAtMzEsLTc0Ljg0IDAsLTI5LjIzIDExLjg1LC01NS42OSAzMSwtNzQuODQgMTkuMTUsLTE5LjE1IDQ1LjYxLC0zMSA3NC44NCwtMzF6bTQwLjYyIDY1LjIyYy0xMC4zOCwtMTAuMzggLTI0Ljc2LC0xNi44MiAtNDAuNjIsLTE2LjgyIC0xNS44NiwwIC0zMC4yNCw2LjQ0IC00MC42MiwxNi44MiAtMTAuMzgsMTAuMzggLTE2LjgyLDI0Ljc2IC0xNi44Miw0MC42MiAwLDE1Ljg2IDYuNDQsMzAuMjQgMTYuODIs'+
			'NDAuNjIgMTAuMzgsMTAuMzggMjQuNzYsMTYuODIgNDAuNjIsMTYuODIgMTUuODYsMCAzMC4yNCwtNi40NCA0MC42MiwtMTYuODIgMTAuMzgsLTEwLjM4IDE2LjgyLC0yNC43NiAxNi44MiwtNDAuNjIgMCwtMTUuODYgLTYuNDQsLTMwLjI0IC0xNi44MiwtNDAuNjJ6IiBjbGFzcz0iZmlsMCIvPgogICA8cGF0aCBkPSJNNTcxLjggMjc1LjYzYy0wLjQzLC0wLjM5IC0wLjkzLC0wLjcyIC0xLjQ1LC0wLjkzIC0wLjM5LC0wLjE3IC0wLjk4LC0wLjI1IC0xLjc2LC0wLjI1IC0wLjc5LDAgLTEuMzksMC4wOSAtMS43OCwwLjI1IC0wLjQ5LDAuMiAtMC45OCwwLjUzIC0xLjQxLDAuOTMgLTAuNCwwLjQzIC'+
			'0wLjcxLDAuOTIgLTAuOTEsMS4zOSAtMC4xNiwwLjQgLTAuMjUsMSAtMC4yNSwxLjc4IDAsMC43NSAwLjEsMS4zNiAwLjI3LDEuNzcgMC4yLDAuNDkgMC41MiwwLjk2IDAuOSwxLjMzbDAuMDggMC4wOWMwLjM5LDAuMzkgMC44NSwwLjcxIDEuMywwLjg5IDAuNDIsMC4xNyAxLjAzLDAuMjggMS44LDAuMjggMC43NSwwIDEuMzUsLTAuMTEgMS43OCwtMC4yOCAwLjM3LC0wLjE1IDAuODUsLTAuNSAxLjMzLC0wLjk4IDAuNDYsLTAuMzcgMC43OCwtMC44NCAwLjk4LC0xLjMzIDAuMTcsLTAuNDEgMC4yNywtMS4wMiAwLjI3LC0xLjc3IDAsLTAuNzggLTAuMSwtMS4zOCAtMC4yNiwtMS43OCAtMC4xOSwt'+
			'MC40OCAtMC41LC0wLjk2IC0wLjg5LC0xLjM5em0xNS44MSAtNDMuMDZjNi4xNywyLjUyIDExLjY4LDYuMTkgMTYuMjYsMTAuNjlsMC4yNyAwLjI2YzQuNDksNC41NSA4LjE1LDEwLjA0IDEwLjY4LDE2LjE5IDIuNDcsNi4wMSAzLjg0LDEyLjQ4IDMuODQsMTkuMDkgMCw2LjYxIC0xLjM4LDEzLjA5IC0zLjg2LDE5LjA5IC0yLjUzLDYuMTUgLTYuMjcsMTEuNyAtMTAuODUsMTYuMjcgLTQuNDYsNC41NSAtMTAsOC4yNyAtMTYuMjcsMTAuODUgLTYsMi40OCAtMTIuNDYsMy44NiAtMTkuMDksMy44NiAtNi42NCwwIC0xMy4xMSwtMS4zOCAtMTkuMTEsLTMuODYgLTYuMTgsLTIuNTUgLTExLjc0LC02Lj'+
			'MgLTE2LjI5LC0xMC44OSAtNC41NiwtNC41NiAtOC4yOCwtMTAuMSAtMTAuODEsLTE2LjIzIC0yLjQ3LC02IC0zLjg1LC0xMi40OCAtMy44NSwtMTkuMDkgMCwtNi42MSAxLjM3LC0xMy4wOCAzLjg0LC0xOS4wOSAyLjUyLC02LjE1IDYuMiwtMTEuNjUgMTAuNjgsLTE2LjE5bDAuMjYgLTAuMjZjNC41NSwtNC40OSAxMC4wNSwtOC4xNyAxNi4xOSwtMTAuNjkgNi4wMSwtMi40NyAxMi40NywtMy44MyAxOS4wOSwtMy44MyA2LjU0LDAgMTIuOTksMS4zOCAxOS4wMiwzLjgzeiIgY2xhc3M9ImZpbDAiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._openinsta__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="OpenInsta";
		el.ggDx=-1;
		el.ggDy=113;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		hs+='filter: drop-shadow(0px 5px 5px rgb(0 0 0 \/ 0.2));';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._openinsta.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._openinsta.onclick=function (e) {
			player.openUrl("https:\/\/www.instagram.com\/vayuhu_blr\/","_blank");
		}
		me._openinsta.onmouseover=function (e) {
			me._openinsta__img.style.visibility='hidden';
			me._openinsta__imgo.style.visibility='inherit';
			me.elementMouseOver['openinsta']=true;
			me._txtopeninsta.logicBlock_alpha();
		}
		me._openinsta.onmouseout=function (e) {
			me._openinsta__img.style.visibility='inherit';
			me._openinsta__imgo.style.visibility='hidden';
			me.elementMouseOver['openinsta']=false;
			me._txtopeninsta.logicBlock_alpha();
		}
		me._openinsta.ontouchend=function (e) {
			me.elementMouseOver['openinsta']=false;
			me._txtopeninsta.logicBlock_alpha();
		}
		me._openinsta.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._txtopeninsta=document.createElement('div');
		els=me._txtopeninsta__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txtOpenInsta";
		el.ggDx=-78;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 8px 11px 8px 11px;';
		hs+='overflow: hidden;';
		hs+="text-shadow: #00000085 1px 1px;";
		els.setAttribute('style',hs);
		els.innerHTML="Open Instagram";
		el.appendChild(els);
		me._txtopeninsta.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txtopeninsta.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['openinsta'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._txtopeninsta.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._txtopeninsta.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._txtopeninsta.style[domTransition]='opacity 400ms ease 0ms';
				if (me._txtopeninsta.ggCurrentLogicStateAlpha == 0) {
					me._txtopeninsta.style.visibility=me._txtopeninsta.ggVisible?'inherit':'hidden';
					me._txtopeninsta.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._txtopeninsta.style.opacity == 0.0) { me._txtopeninsta.style.visibility="hidden"; } }, 405);
					me._txtopeninsta.style.opacity=0;
				}
			}
		}
		me._txtopeninsta.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._openinsta.appendChild(me._txtopeninsta);
		me._cntcusticon.appendChild(me._openinsta);
		el=me._openfacebook=document.createElement('div');
		els=me._openfacebook__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDhweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDggNDgiIGhlaWdodD0iNDhweCI+CiA8cGF0aCBkPSJNMjQgNUExOSAxOSAwIDEgMCAyNCA0M0ExOSAxOSAwIDEgMCAyNCA1WiIgZmlsbD0iIzAzOWJlNSIvPgogPHBhdGggZD0iTTI2LjU3MiwyOS4wMzZoNC45MTdsMC43NzItNC45OTVoLTUuNjl2LTIuNzNjMC0yLjA3NSwwLjY3OC0zLjkxNSwyLjYxOS0zLjkxNWgzLjExOXYtNC4zNTljLTAuNTQ4LTAuMDc0LTEuNzA3LTAuMjM2LTMuODk3LTAuMjM2Yy00LjU3MywwLTcuMjU0LDIuNDE1LTcuMjU0LDcuOTE3djMuMzIzaC00Lj'+
			'cwMXY0Ljk5NWg0LjcwMXYxMy43MjlDMjIuMDg5LDQyLjkwNSwyMy4wMzIsNDMsMjQsNDNjMC44NzUsMCwxLjcyOS0wLjA4LDIuNTcyLTAuMTk0VjI5LjAzNnoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==';
		me._openfacebook__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._openfacebook__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiM1NWFhZmY7ZmlsbC1ydWxlOm5vbnplcm99JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxn'+
			'IGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxnIGlkPSJfMjAxNTUwNDg0NTI4MCI+CiAgIDxwYXRoIGQ9Ik0yNC4xOCAtMC4wMWw4MjIuNDggMCAwIDg0Ni42NyAtODQ2LjY3IDAgMCAtODQ2LjY3IDI0LjE5IDB6bTc3NC4wOSA0OC4zOWwtNzQ5Ljg5IDAgMCA3NDkuODkgNzQ5Ljg5IDAgMCAtNzQ5Ljg5eiIgY2xhc3M9ImZpbDAiLz4KICAgPHBhdGggZD0iTTU3NC41NCAyMDEuMzVsLTczLjkzIDBjLTIzLjA3LDAgLTQ0LjA1LDkuNDIgLTU5LjI0LDI0LjU4IC0xNS4xNSwxNS4yNSAtMjQuNiwzNi4yMSAtMjQuNiw1OS4yM2'+
			'wwIDUzLjUgMTU3Ljc3IDAgMCA0OC4zOSAtMTU3Ljc3IDAgMCAyODIuNDMgLTQ4LjM5IDAgMCAtMjgyLjQzIC05Ni4yNSAwIDAgLTQ4LjM5IDk2LjI1IDAgMCAtNTMuNWMwLC0zNi4zOCAxNC44OCwtNjkuNDQgMzguODMsLTkzLjM4IDI0LjAzLC0yMy45MyA1Ny4wOSwtMzguODEgOTMuNCwtMzguODFsNzMuOTMgMCAwIDQ4LjM4eiIgY2xhc3M9ImZpbDAiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._openfacebook__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="OpenFacebook";
		el.ggDx=0;
		el.ggDy=79;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 34px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		hs+='filter: drop-shadow(0px 5px 5px rgb(0 0 0 \/ 0.2));';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._openfacebook.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._openfacebook.onclick=function (e) {
			player.openUrl("https:\/\/www.facebook.com\/vayuhu.blr?mibextid=ZbWKwL","_blank");
		}
		me._openfacebook.onmouseover=function (e) {
			me._openfacebook__img.style.visibility='hidden';
			me._openfacebook__imgo.style.visibility='inherit';
			me.elementMouseOver['openfacebook']=true;
			me._txtopenfacebook.logicBlock_alpha();
		}
		me._openfacebook.onmouseout=function (e) {
			me._openfacebook__img.style.visibility='inherit';
			me._openfacebook__imgo.style.visibility='hidden';
			me.elementMouseOver['openfacebook']=false;
			me._txtopenfacebook.logicBlock_alpha();
		}
		me._openfacebook.ontouchend=function (e) {
			me.elementMouseOver['openfacebook']=false;
			me._txtopenfacebook.logicBlock_alpha();
		}
		me._openfacebook.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._txtopenfacebook=document.createElement('div');
		els=me._txtopenfacebook__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txtOpenFacebook";
		el.ggDx=-70;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 8px 11px 8px 11px;';
		hs+='overflow: hidden;';
		hs+="text-shadow: #00000085 1px 1px;";
		els.setAttribute('style',hs);
		els.innerHTML="Open Facebook";
		el.appendChild(els);
		me._txtopenfacebook.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txtopenfacebook.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['openfacebook'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._txtopenfacebook.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._txtopenfacebook.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._txtopenfacebook.style[domTransition]='opacity 400ms ease 0ms';
				if (me._txtopenfacebook.ggCurrentLogicStateAlpha == 0) {
					me._txtopenfacebook.style.visibility=me._txtopenfacebook.ggVisible?'inherit':'hidden';
					me._txtopenfacebook.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._txtopenfacebook.style.opacity == 0.0) { me._txtopenfacebook.style.visibility="hidden"; } }, 405);
					me._txtopenfacebook.style.opacity=0;
				}
			}
		}
		me._txtopenfacebook.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._openfacebook.appendChild(me._txtopenfacebook);
		me._cntcusticon.appendChild(me._openfacebook);
		el=me._openwebsite=document.createElement('div');
		els=me._openwebsite__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBoZWlnaHQ9IjI1NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZGVmcy8+CiA8ZyBzdHlsZT0ic3Ryb2tlOiBub25lOyBzdHJva2Utd2lkdGg6IDA7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiBidXR0OyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IGZpbGw6IG5vbmU7IGZpbGwtcnVsZTogbm9uem'+
			'Vybzsgb3BhY2l0eTogMTsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNDA2NTkzNDA2NTkzNDAxNiAxLjQwNjU5MzQwNjU5MzQwMTYpIHNjYWxlKDIuODEgMi44MSkiPgogIDxjaXJjbGUgY3g9IjQ1IiBjeT0iNDUiIHN0eWxlPSJzdHJva2U6IG5vbmU7IHN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogbm9uZTsgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7IHN0cm9rZS1saW5lam9pbjogbWl0ZXI7IHN0cm9rZS1taXRlcmxpbWl0OiAxMDsgZmlsbDogcmdiKDU2LDEzNiwxODkpOyBmaWxsLXJ1bGU6IG5vbnplcm87IG9wYWNpdHk6IDE7IiB0cmFuc2Zvcm09IiAgbWF0cml4KDEgMCAwIDEg'+
			'MCAwKSAiIHI9IjMyLjUiLz4KICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0gODQuMDk5IDU0LjA0NSBIIDUuOTAxIEMgMy4xOTQgNTQuMDQ1IDEgNTEuODUgMSA0OS4xNDQgdiAtOC4yODcgYyAwIC0yLjcwNyAyLjE5NCAtNC45MDEgNC45MDEgLTQuOTAxIGggNzguMTk4IGMgMi43MDcgMCA0LjkwMSAyLjE5NCA0LjkwMSA0LjkwMSB2IDguMjg3IEMgODkgNTEuODUgODYuODA2IDU0LjA0NSA4NC4wOTkgNTQuMDQ1IHoiIHN0eWxlPSJzdHJva2U6IG5vbmU7IHN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogbm9uZTsgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7IHN0cm9rZS'+
			'1saW5lam9pbjogbWl0ZXI7IHN0cm9rZS1taXRlcmxpbWl0OiAxMDsgZmlsbDogcmdiKDIzMCwyMzAsMjMwKTsgZmlsbC1ydWxlOiBub256ZXJvOyBvcGFjaXR5OiAxOyIgdHJhbnNmb3JtPSIgbWF0cml4KDEgMCAwIDEgMCAwKSAiLz4KICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0gODQuMDk5IDM0Ljk1NSBoIC02LjcyNSBDIDczLjAwOSAyMC44NzYgNTkuODEgMTEuMTA1IDQ1IDExLjEwNSBjIC0xNC44MDkgMCAtMjguMDA5IDkuNzcxIC0zMi4zNzQgMjMuODUgSCA1LjkwMSBDIDIuNjQ3IDM0Ljk1NSAwIDM3LjYwMyAwIDQwLjg1NiB2IDguMjg3IGMgMCAzLjI1NCAyLjY0NyA1'+
			'LjkwMSA1LjkwMSA1LjkwMSBoIDYuNzI1IEMgMTYuOTkxIDY5LjEyNCAzMC4xOTEgNzguODk2IDQ1IDc4Ljg5NiBjIDE0LjgxIDAgMjguMDA5IC05Ljc3MiAzMi4zNzQgLTIzLjg1MSBoIDYuNzI1IGMgMy4yNTQgMCA1LjkwMSAtMi42NDcgNS45MDEgLTUuOTAxIHYgLTguMjg3IEMgOTAgMzcuNjAzIDg3LjM1MyAzNC45NTUgODQuMDk5IDM0Ljk1NSB6IE0gNjIuNzM5IDM0Ljk1NSBjIC0wLjU0MSAtMy4yMzUgLTEuMzIgLTYuMjI2IC0yLjI5OSAtOC45MTggaCAxMC4xNjUgYyAxLjk4NyAyLjY2NyAzLjU2NyA1LjY2NCA0LjY0OCA4LjkxOCBIIDYyLjczOSB6IE0gNDYgMTMuMTg2IGMgNC40NTkgMC'+
			'41MyA4LjU1NSA0LjU2NSAxMS40MjkgMTAuODUyIEggNDYgViAxMy4xODYgeiBNIDQ0IDI0LjAzNyBIIDMyLjU3MiBjIDIuODc0IC02LjI4NiA2Ljk3IC0xMC4zMjIgMTEuNDI4IC0xMC44NTIgViAyNC4wMzcgeiBNIDQ0IDI2LjAzNyB2IDguOTE4IEggMjkuMzAxIGMgMC41NjcgLTMuMjUzIDEuMzkyIC02LjI1IDIuNDI4IC04LjkxOCBIIDQ0IHogTSA0NiAyNi4wMzcgaCAxMi4yNzIgYyAxLjAzNSAyLjY2OCAxLjg2IDUuNjY0IDIuNDI3IDguOTE4IEggNDYgViAyNi4wMzcgeiBNIDY4Ljk4NSAyNC4wMzcgaCAtOS4zMzQgYyAtMS44NDIgLTQuMzMzIC00LjIzNCAtNy43NTIgLTYuOTc4IC05Ljk4'+
			'NCBDIDU5LjAyOSAxNS42NDMgNjQuNzEyIDE5LjE3NCA2OC45ODUgMjQuMDM3IHogTSAzNy4zMjkgMTQuMDUzIGMgLTIuNzQ1IDIuMjMxIC01LjEzNyA1LjY1MSAtNi45OCA5Ljk4NCBoIC05LjMzNCBDIDI1LjI4OCAxOS4xNzQgMzAuOTczIDE1LjY0MiAzNy4zMjkgMTQuMDUzIHogTSAxOS4zOTYgMjYuMDM3IGggMTAuMTY1IGMgLTAuOTggMi42OTMgLTEuNzU5IDUuNjgzIC0yLjMwMSA4LjkxOCBIIDE0Ljc0NyBDIDE1LjgyOCAzMS43MDEgMTcuNDA4IDI4LjcwNCAxOS4zOTYgMjYuMDM3IHogTSAyIDQ5LjE0NCB2IC04LjI4NyBjIDAgLTIuMTUxIDEuNzUgLTMuOTAxIDMuOTAxIC0zLjkwMSBoID'+
			'YyLjg0MiB2IDE2LjA5IEggNS45MDEgQyAzLjc1IDUzLjA0NSAyIDUxLjI5NSAyIDQ5LjE0NCB6IE0gNDQgNjUuOTYzIHYgMTAuODUyIGMgLTQuNDU4IC0wLjUzIC04LjU1NCAtNC41NjYgLTExLjQyOSAtMTAuODUyIEggNDQgeiBNIDMxLjcyOCA2My45NjMgYyAtMS4wMzUgLTIuNjY4IC0xLjg2MSAtNS42NjQgLTIuNDI4IC04LjkxOCBIIDQ0IHYgOC45MTggSCAzMS43MjggeiBNIDQ2IDY1Ljk2MyBoIDExLjQyOSBDIDU0LjU1NSA3Mi4yNDkgNTAuNDU4IDc2LjI4NSA0NiA3Ni44MTUgViA2NS45NjMgeiBNIDQ2IDYzLjk2MyB2IC04LjkxOCBoIDE0LjcgYyAtMC41NjcgMy4yNTMgLTEuMzkyIDYu'+
			'MjUgLTIuNDI4IDguOTE4IEggNDYgeiBNIDI3LjI2IDU1LjA0NSBjIDAuNTQxIDMuMjM0IDEuMzIxIDYuMjI1IDIuMzAxIDguOTE4IEggMTkuMzk2IGMgLTEuOTg3IC0yLjY2NyAtMy41NjggLTUuNjY0IC00LjY0OCAtOC45MTggSCAyNy4yNiB6IE0gMjEuMDE1IDY1Ljk2MyBoIDkuMzM0IGMgMS44NDMgNC4zMzMgNC4yMzUgNy43NTMgNi45OCA5Ljk4NCBDIDMwLjk3MyA3NC4zNTggMjUuMjg4IDcwLjgyNiAyMS4wMTUgNjUuOTYzIHogTSA1Mi42NzEgNzUuOTQ3IGMgMi43NDUgLTIuMjMxIDUuMTM4IC01LjY1MSA2Ljk4IC05Ljk4NCBoIDkuMzM0IEMgNjQuNzEyIDcwLjgyNiA1OS4wMjggNzQuMz'+
			'U4IDUyLjY3MSA3NS45NDcgeiBNIDcwLjYwNCA2My45NjMgSCA2MC40MzkgYyAwLjk3OSAtMi42OTMgMS43NTkgLTUuNjgzIDIuMyAtOC45MTggaCAxMi41MTMgQyA3NC4xNzEgNTguMjk5IDcyLjU5MSA2MS4yOTYgNzAuNjA0IDYzLjk2MyB6IE0gODggNDkuMTQ0IGMgMCAyLjE1MSAtMS43NSAzLjkwMSAtMy45MDEgMy45MDEgSCA3MC43NDMgdiAtMTYuMDkgaCAxMy4zNTUgYyAyLjE1MSAwIDMuOTAxIDEuNzUgMy45MDEgMy45MDEgViA0OS4xNDQgeiIgc3R5bGU9InN0cm9rZTogbm9uZTsgc3Ryb2tlLXdpZHRoOiAxOyBzdHJva2UtZGFzaGFycmF5OiBub25lOyBzdHJva2UtbGluZWNhcDogYnV0'+
			'dDsgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjsgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOyBmaWxsOiByZ2IoMCwzNCw1Nik7IGZpbGwtcnVsZTogbm9uemVybzsgb3BhY2l0eTogMTsiIHRyYW5zZm9ybT0iIG1hdHJpeCgxIDAgMCAxIDAgMCkgIi8+CiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNIDgzLjYxNyA0MC45MjIgYyAtMS43NTQgLTEuNzU1IC00LjYwOCAtMS43NTMgLTYuMzYyIDAgYyAtMC44NTEgMC44NSAtMS4zMTggMS45NzkgLTEuMzE4IDMuMTgxIGMgMCAwLjg2IDAuMjQ5IDEuNjc5IDAuNjk3IDIuMzg4IGwgLTIuOTQ2IDIuOTQ2IGwgMS40MTQgMS40MTQgbCAyLjk0Ni'+
			'AtMi45NDYgYyAwLjcxIDAuNDQ4IDEuNTI5IDAuNjk3IDIuMzg5IDAuNjk3IGMgMS4yMDEgMCAyLjMzMSAtMC40NjkgMy4xODEgLTEuMzE4IEMgODUuMzcxIDQ1LjUzIDg1LjM3MSA0Mi42NzYgODMuNjE3IDQwLjkyMiB6IE0gODIuMjAzIDQ1Ljg3IGMgLTAuOTQ2IDAuOTQ2IC0yLjU5IDAuOTQ0IC0zLjUzNCAwIGMgLTAuNDczIC0wLjQ3MiAtMC43MzIgLTEuMDk5IC0wLjczMiAtMS43NjcgYyAwIC0wLjY2NyAwLjI2IC0xLjI5NSAwLjczMiAtMS43NjcgYyAwLjQ4NyAtMC40ODcgMS4xMjcgLTAuNzMgMS43NjggLTAuNzMgYyAwLjY0IDAgMS4yNzkgMC4yNDMgMS43NjcgMC43MyBDIDgzLjE3NyA0'+
			'My4zMTEgODMuMTc3IDQ0Ljg5NiA4Mi4yMDMgNDUuODcgeiIgc3R5bGU9InN0cm9rZTogbm9uZTsgc3Ryb2tlLXdpZHRoOiAxOyBzdHJva2UtZGFzaGFycmF5OiBub25lOyBzdHJva2UtbGluZWNhcDogYnV0dDsgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjsgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOyBmaWxsOiByZ2IoMCwzNCw1Nik7IGZpbGwtcnVsZTogbm9uemVybzsgb3BhY2l0eTogMTsiIHRyYW5zZm9ybT0iIG1hdHJpeCgxIDAgMCAxIDAgMCkgIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._openwebsite__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._openwebsite__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjguNDY2Nm1tIiB4bWxuczp4b2RtPSJodHRwOi8vd3d3LmNvcmVsLmNvbS9jb3JlbGRyYXcvb2RtLzIwMDMiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW'+
			'9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODQ2LjY2IDg0Ni42NiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjguNDY2Nm1tIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKICAgIC5maWwwIHtmaWxsOiM1NWFhZmY7ZmlsbC1ydWxlOm5vbnplcm99JiN4ZDsKICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxn'+
			'IGlkPSJMYXllcl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxnIGlkPSJfMjAxNTU0MjE3MDU3NiI+CiAgIDxwYXRoIGQ9Ik00MjMuMzMgMTUyLjk3Yzc0LjY0LDAgMTQyLjI2LDMwLjI2IDE5MS4xNyw3OS4xOSA0OC45Myw0OC45MSA3OS4xOSwxMTYuNTIgNzkuMTksMTkxLjE3IDAsNzQuNjQgLTMwLjI2LDE0Mi4yNiAtNzkuMTksMTkxLjE3IC00OC45MSw0OC45MyAtMTE2LjUzLDc5LjE5IC0xOTEuMTcsNzkuMTkgLTc0LjY1LDAgLTE0Mi4yNiwtMzAuMjYgLTE5MS4xNywtNzkuMTkgLTQ4LjkzLC00OC45MSAtNzkuMTksLTExNi41MyAtNz'+
			'kuMTksLTE5MS4xNyAwLC03NC42NSAzMC4yNiwtMTQyLjI2IDc5LjE5LC0xOTEuMTcgNDguOTEsLTQ4LjkzIDExNi41MiwtNzkuMTkgMTkxLjE3LC03OS4xOXptMTU2Ljk1IDExMy40MWMtNDAuMTYsLTQwLjE2IC05NS42NiwtNjUuMDEgLTE1Ni45NSwtNjUuMDEgLTYxLjMsMCAtMTE2Ljc5LDI0Ljg1IC0xNTYuOTUsNjUuMDEgLTQwLjE2LDQwLjE2IC02NS4wMSw5NS42NSAtNjUuMDEsMTU2Ljk1IDAsNjEuMjkgMjQuODUsMTE2Ljc5IDY1LjAxLDE1Ni45NSA0MC4xNiw0MC4xNiA5NS42NSw2NS4wMSAxNTYuOTUsNjUuMDEgNjEuMjksMCAxMTYuNzksLTI0Ljg1IDE1Ni45NSwtNjUuMDEgNDAuMTYs'+
			'LTQwLjE2IDY1LjAxLC05NS42NiA2NS4wMSwtMTU2Ljk1IDAsLTYxLjMgLTI0Ljg1LC0xMTYuNzkgLTY1LjAxLC0xNTYuOTV6IiBjbGFzcz0iZmlsMCIvPgogICA8cGF0aCBkPSJNNDIzLjMzIDE1Mi45OGM0MS42MSwwIDc3LjYsMzIuOTMgMTAyLjEyLDg2LjE3IDIxLjkyLDQ3LjU5IDM1LjQ5LDExMi43NiAzNS40OSwxODQuMTggMCw3MS40MiAtMTMuNTcsMTM2LjU5IC0zNS40OSwxODQuMTggLTI0LjUyLDUzLjI0IC02MC41MSw4Ni4xNyAtMTAyLjEyLDg2LjE3IC00MS42MSwwIC03Ny42LC0zMi45MyAtMTAyLjEyLC04Ni4xNyAtMjEuOTIsLTQ3LjU5IC0zNS40OSwtMTEyLjc2IC0zNS40OSwtMT'+
			'g0LjE4IDAsLTcxLjQyIDEzLjU3LC0xMzYuNTkgMzUuNDksLTE4NC4xOCAyNC41MiwtNTMuMjQgNjAuNTEsLTg2LjE3IDEwMi4xMiwtODYuMTd6bTU4LjI4IDEwNi40MWMtMTYuNTEsLTM1Ljg0IC0zNy4yNiwtNTguMDMgLTU4LjI4LC01OC4wMyAtMjEuMDMsMCAtNDEuNzcsMjIuMTkgLTU4LjI4LDU4LjAzIC0xOS4xMSw0MS40OSAtMzAuOTQsOTkuNDMgLTMwLjk0LDE2My45NCAwLDY0LjUxIDExLjgzLDEyMi40NSAzMC45NCwxNjMuOTQgMTYuNTEsMzUuODQgMzcuMjUsNTguMDMgNTguMjgsNTguMDMgMjEuMDIsMCA0MS43NywtMjIuMTkgNTguMjgsLTU4LjAzIDE5LjExLC00MS40OSAzMC45NCwt'+
			'OTkuNDMgMzAuOTQsLTE2My45NCAwLC02NC41MSAtMTEuODMsLTEyMi40NSAtMzAuOTQsLTE2My45NHoiIGNsYXNzPSJmaWwwIi8+CiAgIDxwb2x5Z29uIHBvaW50cz0iMTg2LjgzLDM5OS4xMyA2NTkuODIsMzk5LjEzIDY1OS44Miw0NDcuNTMgMTg2LjgzLDQ0Ny41MyAiIGNsYXNzPSJmaWwwIi8+CiAgIDxwYXRoIGQ9Ik0yNC4xNyAtMC4wMmw4MjIuNDggMCAwIDg0Ni42NyAtODQ2LjY3IDAgMCAtODQ2LjY3IDI0LjE5IDB6bTc3NC4wOSA0OC4zOWwtNzQ5Ljg5IDAgMCA3NDkuODkgNzQ5Ljg5IDAgMCAtNzQ5Ljg5eiIgY2xhc3M9ImZpbDAiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._openwebsite__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="OpenWebsite";
		el.ggDx=0;
		el.ggDy=39;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		hs+='filter: drop-shadow(0px 5px 5px rgb(0 0 0 \/ 0.2));';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._openwebsite.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._openwebsite.onclick=function (e) {
			player.openUrl("https:\/\/www.vayuhu.com\/index.php","_blank");
		}
		me._openwebsite.onmouseover=function (e) {
			me._openwebsite__img.style.visibility='hidden';
			me._openwebsite__imgo.style.visibility='inherit';
			me.elementMouseOver['openwebsite']=true;
			me._txtopenwebsite.logicBlock_alpha();
		}
		me._openwebsite.onmouseout=function (e) {
			me._openwebsite__img.style.visibility='inherit';
			me._openwebsite__imgo.style.visibility='hidden';
			me.elementMouseOver['openwebsite']=false;
			me._txtopenwebsite.logicBlock_alpha();
		}
		me._openwebsite.ontouchend=function (e) {
			me.elementMouseOver['openwebsite']=false;
			me._txtopenwebsite.logicBlock_alpha();
		}
		me._openwebsite.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._txtopenwebsite=document.createElement('div');
		els=me._txtopenwebsite__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txtOpenWebsite";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -112px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 8px 11px 8px 11px;';
		hs+='overflow: hidden;';
		hs+="text-shadow: #00000085 1px 1px;";
		els.setAttribute('style',hs);
		els.innerHTML="Open Website";
		el.appendChild(els);
		me._txtopenwebsite.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txtopenwebsite.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['openwebsite'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._txtopenwebsite.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._txtopenwebsite.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._txtopenwebsite.style[domTransition]='opacity 400ms ease 0ms';
				if (me._txtopenwebsite.ggCurrentLogicStateAlpha == 0) {
					me._txtopenwebsite.style.visibility=me._txtopenwebsite.ggVisible?'inherit':'hidden';
					me._txtopenwebsite.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._txtopenwebsite.style.opacity == 0.0) { me._txtopenwebsite.style.visibility="hidden"; } }, 405);
					me._txtopenwebsite.style.opacity=0;
				}
			}
		}
		me._txtopenwebsite.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._openwebsite.appendChild(me._txtopenwebsite);
		me._cntcusticon.appendChild(me._openwebsite);
		me.divSkin.appendChild(me._cntcusticon);
		me._videoplayer.ggVideoSource = '';
		me._videoplayer.ggVideoNotLoaded = true;
		this.preloadImages();
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._category_cloner.ggUpdate();
			if (
				(
					((player.getCurrentNode() == player.getVariableValue('StartNode')))
				)
			) {
				player.setProjection(9);
				player.setPanTiltFov(0,-90,180);
			}
			if (
				(
					((player.getCurrentNode() == player.getVariableValue('StartNode')))
				)
			) {
				player.startAutorotate("0.05","2");
			}
		});
		player.addListener('imagesready', function() {
			if (
				(
					((player.getVariableValue('PreLaunch') == true))
				)
			) {
				me._txt_addressbar.ggText=currentnode = pano.getCurrentNode();
currentnodedata = pano.getNodeUserdata(currentnode);
currentcustomnodeid = currentnodedata.customnodeid;

url = location.href.split('#')[0];
url = url +"#" + currentcustomnodeid  + "," + pano.getPan() + "," + pano.getTilt() + "," + pano.getFov() + ",4";
location.href = url;;
				me._txt_addressbar.ggTextDiv.innerHTML=me._txt_addressbar.ggText;
				if (me._txt_addressbar.ggUpdateText) {
					me._txt_addressbar.ggUpdateText=function() {
						var hs=currentnode = pano.getCurrentNode();
currentnodedata = pano.getNodeUserdata(currentnode);
currentcustomnodeid = currentnodedata.customnodeid;

url = location.href.split('#')[0];
url = url +"#" + currentcustomnodeid  + "," + pano.getPan() + "," + pano.getTilt() + "," + pano.getFov() + ",4";
location.href = url;;
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				if (me._txt_addressbar.ggUpdatePosition) {
					me._txt_addressbar.ggUpdatePosition();
				}
				me._txt_addressbar.ggTextDiv.scrollTop = 0;
			}
			me._category_scroller.ggUpdatePosition();
			me._txt_start.ggText="START";
			me._txt_start.ggTextDiv.innerHTML=me._txt_start.ggText;
			if (me._txt_start.ggUpdateText) {
				me._txt_start.ggUpdateText=function() {
					var hs="START";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._txt_start.ggUpdatePosition) {
				me._txt_start.ggUpdatePosition();
			}
			me._txt_start.ggTextDiv.scrollTop = 0;
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		});
		player.addListener('beforechangenode', function() {
			if (
				(
					((player.getVariableValue('vis_loader') == true))
				)
			) {
				me._loading.style[domTransition]='none';
				me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
				me._loading.ggVisible=true;
			}
		});
		player.addListener('tilesrequested', function() {
			player.setVariableValue('vis_loader', false);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_node1_sizechanged = function(){
		if(hotspotTemplates['ht_node1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node1'].length; i++) {
				if (hotspotTemplates['ht_node1'][i]._hs_tt0 && hotspotTemplates['ht_node1'][i]._hs_tt0.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._hs_tt0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node1_changenode = function(){
		if(hotspotTemplates['ht_node1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node1'].length; i++) {
				if (hotspotTemplates['ht_node1'][i]._chevron_white_lower0 && hotspotTemplates['ht_node1'][i]._chevron_white_lower0.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._chevron_white_lower0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node1'][i]._chevron_black0 && hotspotTemplates['ht_node1'][i]._chevron_black0.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._chevron_black0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node1'][i]._chevron_white0 && hotspotTemplates['ht_node1'][i]._chevron_white0.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._chevron_white0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node1'][i]._hs_preview_image0 && hotspotTemplates['ht_node1'][i]._hs_preview_image0.logicBlock_alpha) {
					hotspotTemplates['ht_node1'][i]._hs_preview_image0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node1'][i]._tt_ht_3d0 && hotspotTemplates['ht_node1'][i]._tt_ht_3d0.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._tt_ht_3d0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node1'][i]._ht_node_customimage0 && hotspotTemplates['ht_node1'][i]._ht_node_customimage0.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._ht_node_customimage0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node1'][i]._hs_tt0 && hotspotTemplates['ht_node1'][i]._hs_tt0.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._hs_tt0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node1_configloaded = function(){
		if(hotspotTemplates['ht_node1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node1'].length; i++) {
				if (hotspotTemplates['ht_node1'][i]._hs_preview_image0 && hotspotTemplates['ht_node1'][i]._hs_preview_image0.logicBlock_alpha) {
					hotspotTemplates['ht_node1'][i]._hs_preview_image0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node1'][i]._tt_ht_3d0 && hotspotTemplates['ht_node1'][i]._tt_ht_3d0.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._tt_ht_3d0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node1_mouseover = function(){
		if(hotspotTemplates['ht_node1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node1'].length; i++) {
				if (hotspotTemplates['ht_node1'][i]._chevron_white_lower0 && hotspotTemplates['ht_node1'][i]._chevron_white_lower0.logicBlock_alpha) {
					hotspotTemplates['ht_node1'][i]._chevron_white_lower0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node1'][i]._chevron_black0 && hotspotTemplates['ht_node1'][i]._chevron_black0.logicBlock_alpha) {
					hotspotTemplates['ht_node1'][i]._chevron_black0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node1'][i]._chevron_white0 && hotspotTemplates['ht_node1'][i]._chevron_white0.logicBlock_alpha) {
					hotspotTemplates['ht_node1'][i]._chevron_white0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node1'][i]._hs_preview_image0 && hotspotTemplates['ht_node1'][i]._hs_preview_image0.logicBlock_alpha) {
					hotspotTemplates['ht_node1'][i]._hs_preview_image0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node1'][i]._tt_ht_3d0 && hotspotTemplates['ht_node1'][i]._tt_ht_3d0.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._tt_ht_3d0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node1_active = function(){
		if(hotspotTemplates['ht_node1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node1'].length; i++) {
				if (hotspotTemplates['ht_node1'][i]._hs_visited && hotspotTemplates['ht_node1'][i]._hs_visited.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._hs_visited.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node1_changevisitednodes = function(){
		if(hotspotTemplates['ht_node1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node1'].length; i++) {
				if (hotspotTemplates['ht_node1'][i]._hs_visited && hotspotTemplates['ht_node1'][i]._hs_visited.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._hs_visited.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node1_activehotspotchanged = function(){
		if(hotspotTemplates['ht_node1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node1'].length; i++) {
				if (hotspotTemplates['ht_node1'][i]._chevron_white_lower0 && hotspotTemplates['ht_node1'][i]._chevron_white_lower0.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._chevron_white_lower0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node1'][i]._chevron_black0 && hotspotTemplates['ht_node1'][i]._chevron_black0.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._chevron_black0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node1'][i]._chevron_white0 && hotspotTemplates['ht_node1'][i]._chevron_white0.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._chevron_white0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node1'][i]._tt_ht_3d0 && hotspotTemplates['ht_node1'][i]._tt_ht_3d0.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._tt_ht_3d0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node1'][i]._ht_node_customimage0 && hotspotTemplates['ht_node1'][i]._ht_node_customimage0.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._ht_node_customimage0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node1'][i]._hs_tt0 && hotspotTemplates['ht_node1'][i]._hs_tt0.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._hs_tt0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node1_varchanged_opt_3d_preview = function(){
		if(hotspotTemplates['ht_node1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node1'].length; i++) {
				if (hotspotTemplates['ht_node1'][i]._hs_preview_image0 && hotspotTemplates['ht_node1'][i]._hs_preview_image0.logicBlock_alpha) {
					hotspotTemplates['ht_node1'][i]._hs_preview_image0.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node1'][i]._tt_ht_3d0 && hotspotTemplates['ht_node1'][i]._tt_ht_3d0.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._tt_ht_3d0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_changenode = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._rect_hotanim21 && hotspotTemplates['ht_info'][i]._rect_hotanim21.logicBlock_alpha) {
					hotspotTemplates['ht_info'][i]._rect_hotanim21.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_info'][i]._rect_hotanim21 && hotspotTemplates['ht_info'][i]._rect_hotanim21.logicBlock_scaling) {
					hotspotTemplates['ht_info'][i]._rect_hotanim21.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_mouseover = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._cnt_htinfo0 && hotspotTemplates['ht_info'][i]._cnt_htinfo0.logicBlock_scaling) {
					hotspotTemplates['ht_info'][i]._cnt_htinfo0.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_mouseover = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._rect_hotanim31 && hotspotTemplates['ht_info'][i]._rect_hotanim31.logicBlock_bordercolor) {
					hotspotTemplates['ht_info'][i]._rect_hotanim31.logicBlock_bordercolor();
				}
				if (hotspotTemplates['ht_info'][i]._rect_hotanim21 && hotspotTemplates['ht_info'][i]._rect_hotanim21.logicBlock_bordercolor) {
					hotspotTemplates['ht_info'][i]._rect_hotanim21.logicBlock_bordercolor();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_ht_ani = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._rect_hotanim21 && hotspotTemplates['ht_info'][i]._rect_hotanim21.logicBlock_alpha) {
					hotspotTemplates['ht_info'][i]._rect_hotanim21.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_info'][i]._rect_hotanim21 && hotspotTemplates['ht_info'][i]._rect_hotanim21.logicBlock_scaling) {
					hotspotTemplates['ht_info'][i]._rect_hotanim21.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_changenode = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_video_file && hotspotTemplates['ht_video_file'][i]._ht_video_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_video_file.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file && hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_file'][i]._rect_hotanim20 && hotspotTemplates['ht_video_file'][i]._rect_hotanim20.logicBlock_alpha) {
					hotspotTemplates['ht_video_file'][i]._rect_hotanim20.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_video_file'][i]._rect_hotanim20 && hotspotTemplates['ht_video_file'][i]._rect_hotanim20.logicBlock_scaling) {
					hotspotTemplates['ht_video_file'][i]._rect_hotanim20.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_configloaded = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file && hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_position) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_mouseover = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._cnt_htvideoani && hotspotTemplates['ht_video_file'][i]._cnt_htvideoani.logicBlock_scaling) {
					hotspotTemplates['ht_video_file'][i]._cnt_htvideoani.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_mouseover = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file && hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_file'][i]._rect_hotanim30 && hotspotTemplates['ht_video_file'][i]._rect_hotanim30.logicBlock_bordercolor) {
					hotspotTemplates['ht_video_file'][i]._rect_hotanim30.logicBlock_bordercolor();
				}
				if (hotspotTemplates['ht_video_file'][i]._rect_hotanim20 && hotspotTemplates['ht_video_file'][i]._rect_hotanim20.logicBlock_bordercolor) {
					hotspotTemplates['ht_video_file'][i]._rect_hotanim20.logicBlock_bordercolor();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_hastouch = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file && hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_position) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_activehotspotchanged = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_video_file && hotspotTemplates['ht_video_file'][i]._ht_video_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_video_file.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file && hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_ht_ani = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._rect_hotanim20 && hotspotTemplates['ht_video_file'][i]._rect_hotanim20.logicBlock_alpha) {
					hotspotTemplates['ht_video_file'][i]._rect_hotanim20.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_video_file'][i]._rect_hotanim20 && hotspotTemplates['ht_video_file'][i]._rect_hotanim20.logicBlock_scaling) {
					hotspotTemplates['ht_video_file'][i]._rect_hotanim20.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_changenode = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._rect_hotanim2 && hotspotTemplates['ht_url'][i]._rect_hotanim2.logicBlock_alpha) {
					hotspotTemplates['ht_url'][i]._rect_hotanim2.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_url'][i]._rect_hotanim2 && hotspotTemplates['ht_url'][i]._rect_hotanim2.logicBlock_scaling) {
					hotspotTemplates['ht_url'][i]._rect_hotanim2.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mouseover = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._cnt_htinfo && hotspotTemplates['ht_url'][i]._cnt_htinfo.logicBlock_scaling) {
					hotspotTemplates['ht_url'][i]._cnt_htinfo.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mouseover = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._rect_hotanim3 && hotspotTemplates['ht_url'][i]._rect_hotanim3.logicBlock_bordercolor) {
					hotspotTemplates['ht_url'][i]._rect_hotanim3.logicBlock_bordercolor();
				}
				if (hotspotTemplates['ht_url'][i]._rect_hotanim2 && hotspotTemplates['ht_url'][i]._rect_hotanim2.logicBlock_bordercolor) {
					hotspotTemplates['ht_url'][i]._rect_hotanim2.logicBlock_bordercolor();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_ht_ani = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._rect_hotanim2 && hotspotTemplates['ht_url'][i]._rect_hotanim2.logicBlock_alpha) {
					hotspotTemplates['ht_url'][i]._rect_hotanim2.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_url'][i]._rect_hotanim2 && hotspotTemplates['ht_url'][i]._rect_hotanim2.logicBlock_scaling) {
					hotspotTemplates['ht_url'][i]._rect_hotanim2.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url1_sizechanged = function(){
		if(hotspotTemplates['ht_url1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url1'].length; i++) {
				if (hotspotTemplates['ht_url1'][i]._ht_url1.logicBlock_visible) {
					hotspotTemplates['ht_url1'][i]._ht_url1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url1_changenode = function(){
		if(hotspotTemplates['ht_url1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url1'].length; i++) {
				if (hotspotTemplates['ht_url1'][i]._ht_url1.logicBlock_visible) {
					hotspotTemplates['ht_url1'][i]._ht_url1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url1'][i]._ht_url_image && hotspotTemplates['ht_url1'][i]._ht_url_image.logicBlock_visible) {
					hotspotTemplates['ht_url1'][i]._ht_url_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url1'][i]._tt_ht_url && hotspotTemplates['ht_url1'][i]._tt_ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url1'][i]._tt_ht_url.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url1'][i]._ht_url_customimage && hotspotTemplates['ht_url1'][i]._ht_url_customimage.logicBlock_visible) {
					hotspotTemplates['ht_url1'][i]._ht_url_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url1'][i]._screen_tint_url && hotspotTemplates['ht_url1'][i]._screen_tint_url.logicBlock_visible) {
					hotspotTemplates['ht_url1'][i]._screen_tint_url.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url1'][i]._web_page && hotspotTemplates['ht_url1'][i]._web_page.logicBlock_visible) {
					hotspotTemplates['ht_url1'][i]._web_page.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url1'][i]._close_url && hotspotTemplates['ht_url1'][i]._close_url.logicBlock_visible) {
					hotspotTemplates['ht_url1'][i]._close_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url1_configloaded = function(){
		if(hotspotTemplates['ht_url1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url1'].length; i++) {
				if (hotspotTemplates['ht_url1'][i]._tt_ht_url && hotspotTemplates['ht_url1'][i]._tt_ht_url.logicBlock_position) {
					hotspotTemplates['ht_url1'][i]._tt_ht_url.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url1_mouseover = function(){
		if(hotspotTemplates['ht_url1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url1'].length; i++) {
				if (hotspotTemplates['ht_url1'][i]._tt_ht_url && hotspotTemplates['ht_url1'][i]._tt_ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url1'][i]._tt_ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url1_hastouch = function(){
		if(hotspotTemplates['ht_url1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url1'].length; i++) {
				if (hotspotTemplates['ht_url1'][i]._tt_ht_url && hotspotTemplates['ht_url1'][i]._tt_ht_url.logicBlock_position) {
					hotspotTemplates['ht_url1'][i]._tt_ht_url.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url1_activehotspotchanged = function(){
		if(hotspotTemplates['ht_url1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url1'].length; i++) {
				if (hotspotTemplates['ht_url1'][i]._ht_url_image && hotspotTemplates['ht_url1'][i]._ht_url_image.logicBlock_visible) {
					hotspotTemplates['ht_url1'][i]._ht_url_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url1'][i]._tt_ht_url && hotspotTemplates['ht_url1'][i]._tt_ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url1'][i]._tt_ht_url.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url1'][i]._ht_url_customimage && hotspotTemplates['ht_url1'][i]._ht_url_customimage.logicBlock_visible) {
					hotspotTemplates['ht_url1'][i]._ht_url_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url1_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_url1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url1'].length; i++) {
				if (hotspotTemplates['ht_url1'][i]._ht_url1.logicBlock_visible) {
					hotspotTemplates['ht_url1'][i]._ht_url1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url1_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_url1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url1'].length; i++) {
				if (hotspotTemplates['ht_url1'][i]._ht_url1.logicBlock_visible) {
					hotspotTemplates['ht_url1'][i]._ht_url1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url1'][i]._screen_tint_url && hotspotTemplates['ht_url1'][i]._screen_tint_url.logicBlock_visible) {
					hotspotTemplates['ht_url1'][i]._screen_tint_url.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url1'][i]._web_page && hotspotTemplates['ht_url1'][i]._web_page.logicBlock_visible) {
					hotspotTemplates['ht_url1'][i]._web_page.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url1'][i]._close_url && hotspotTemplates['ht_url1'][i]._close_url.logicBlock_visible) {
					hotspotTemplates['ht_url1'][i]._close_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_2_changenode = function(){
		if(hotspotTemplates['ht_info 2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info 2'].length; i++) {
				if (hotspotTemplates['ht_info 2'][i]._ht_info_image && hotspotTemplates['ht_info 2'][i]._ht_info_image.logicBlock_visible) {
					hotspotTemplates['ht_info 2'][i]._ht_info_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info 2'][i]._tt_information && hotspotTemplates['ht_info 2'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info 2'][i]._tt_information.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info 2'][i]._ht_info_customimage && hotspotTemplates['ht_info 2'][i]._ht_info_customimage.logicBlock_visible) {
					hotspotTemplates['ht_info 2'][i]._ht_info_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_2_configloaded = function(){
		if(hotspotTemplates['ht_info 2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info 2'].length; i++) {
				if (hotspotTemplates['ht_info 2'][i]._tt_information && hotspotTemplates['ht_info 2'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info 2'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_2_mouseover = function(){
		if(hotspotTemplates['ht_info 2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info 2'].length; i++) {
				if (hotspotTemplates['ht_info 2'][i]._tt_information && hotspotTemplates['ht_info 2'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info 2'][i]._tt_information.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_2_hastouch = function(){
		if(hotspotTemplates['ht_info 2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info 2'].length; i++) {
				if (hotspotTemplates['ht_info 2'][i]._tt_information && hotspotTemplates['ht_info 2'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info 2'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_2_activehotspotchanged = function(){
		if(hotspotTemplates['ht_info 2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info 2'].length; i++) {
				if (hotspotTemplates['ht_info 2'][i]._ht_info_image && hotspotTemplates['ht_info 2'][i]._ht_info_image.logicBlock_visible) {
					hotspotTemplates['ht_info 2'][i]._ht_info_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info 2'][i]._tt_information && hotspotTemplates['ht_info 2'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info 2'][i]._tt_information.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info 2'][i]._ht_info_customimage && hotspotTemplates['ht_info 2'][i]._ht_info_customimage.logicBlock_visible) {
					hotspotTemplates['ht_info 2'][i]._ht_info_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node2_sizechanged = function(){
		if(hotspotTemplates['ht_node2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node2'].length; i++) {
				if (hotspotTemplates['ht_node2'][i]._hs_tt && hotspotTemplates['ht_node2'][i]._hs_tt.logicBlock_visible) {
					hotspotTemplates['ht_node2'][i]._hs_tt.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node2_changenode = function(){
		if(hotspotTemplates['ht_node2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node2'].length; i++) {
				if (hotspotTemplates['ht_node2'][i]._chevron_white_lower && hotspotTemplates['ht_node2'][i]._chevron_white_lower.logicBlock_visible) {
					hotspotTemplates['ht_node2'][i]._chevron_white_lower.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node2'][i]._chevron_black && hotspotTemplates['ht_node2'][i]._chevron_black.logicBlock_visible) {
					hotspotTemplates['ht_node2'][i]._chevron_black.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node2'][i]._chevron_white && hotspotTemplates['ht_node2'][i]._chevron_white.logicBlock_visible) {
					hotspotTemplates['ht_node2'][i]._chevron_white.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node2'][i]._hs_preview_image && hotspotTemplates['ht_node2'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node2'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node2'][i]._tt_ht_3d && hotspotTemplates['ht_node2'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node2'][i]._tt_ht_3d.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node2'][i]._ht_node_customimage && hotspotTemplates['ht_node2'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['ht_node2'][i]._ht_node_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node2'][i]._hs_tt && hotspotTemplates['ht_node2'][i]._hs_tt.logicBlock_visible) {
					hotspotTemplates['ht_node2'][i]._hs_tt.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node2_configloaded = function(){
		if(hotspotTemplates['ht_node2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node2'].length; i++) {
				if (hotspotTemplates['ht_node2'][i]._hs_preview_image && hotspotTemplates['ht_node2'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node2'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node2'][i]._tt_ht_3d && hotspotTemplates['ht_node2'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node2'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node2_mouseover = function(){
		if(hotspotTemplates['ht_node2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node2'].length; i++) {
				if (hotspotTemplates['ht_node2'][i]._chevron_white_lower && hotspotTemplates['ht_node2'][i]._chevron_white_lower.logicBlock_alpha) {
					hotspotTemplates['ht_node2'][i]._chevron_white_lower.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node2'][i]._chevron_black && hotspotTemplates['ht_node2'][i]._chevron_black.logicBlock_alpha) {
					hotspotTemplates['ht_node2'][i]._chevron_black.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node2'][i]._chevron_white && hotspotTemplates['ht_node2'][i]._chevron_white.logicBlock_alpha) {
					hotspotTemplates['ht_node2'][i]._chevron_white.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node2'][i]._hs_preview_image && hotspotTemplates['ht_node2'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node2'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node2'][i]._tt_ht_3d && hotspotTemplates['ht_node2'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node2'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node2_active = function(){
		if(hotspotTemplates['ht_node2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node2'].length; i++) {
				if (hotspotTemplates['ht_node2'][i]._ht_checkmark_tick && hotspotTemplates['ht_node2'][i]._ht_checkmark_tick.logicBlock_visible) {
					hotspotTemplates['ht_node2'][i]._ht_checkmark_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node2_changevisitednodes = function(){
		if(hotspotTemplates['ht_node2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node2'].length; i++) {
				if (hotspotTemplates['ht_node2'][i]._ht_checkmark_tick && hotspotTemplates['ht_node2'][i]._ht_checkmark_tick.logicBlock_visible) {
					hotspotTemplates['ht_node2'][i]._ht_checkmark_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node2_activehotspotchanged = function(){
		if(hotspotTemplates['ht_node2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node2'].length; i++) {
				if (hotspotTemplates['ht_node2'][i]._chevron_white_lower && hotspotTemplates['ht_node2'][i]._chevron_white_lower.logicBlock_visible) {
					hotspotTemplates['ht_node2'][i]._chevron_white_lower.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node2'][i]._chevron_black && hotspotTemplates['ht_node2'][i]._chevron_black.logicBlock_visible) {
					hotspotTemplates['ht_node2'][i]._chevron_black.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node2'][i]._chevron_white && hotspotTemplates['ht_node2'][i]._chevron_white.logicBlock_visible) {
					hotspotTemplates['ht_node2'][i]._chevron_white.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node2'][i]._tt_ht_3d && hotspotTemplates['ht_node2'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node2'][i]._tt_ht_3d.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node2'][i]._ht_node_customimage && hotspotTemplates['ht_node2'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['ht_node2'][i]._ht_node_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node2'][i]._hs_tt && hotspotTemplates['ht_node2'][i]._hs_tt.logicBlock_visible) {
					hotspotTemplates['ht_node2'][i]._hs_tt.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node2_varchanged_opt_3d_preview_1 = function(){
		if(hotspotTemplates['ht_node2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node2'].length; i++) {
				if (hotspotTemplates['ht_node2'][i]._hs_preview_image && hotspotTemplates['ht_node2'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node2'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node2'][i]._tt_ht_3d && hotspotTemplates['ht_node2'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node2'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseDown['button_image_right']) {
			player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['button_image_left']) {
			player.changePanLog(1,true);
		}
		if (me.elementMouseDown['button_image_down']) {
			player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['button_image_up']) {
			player.changeTiltLog(1,true);
		}
		if (me._gallery_fx.ggLastIsActive!=me._gallery_fx.ggIsActive()) {
			me._gallery_fx.ggLastIsActive=me._gallery_fx.ggIsActive();
			if (me._gallery_fx.ggLastIsActive) {
				if (player.transitionsDisabled) {
					me._gallery_picture.style[domTransition]='none';
				} else {
					me._gallery_picture.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._gallery_picture.style.opacity='0';
				me._gallery_picture.style.visibility='hidden';
			} else {
				if (player.transitionsDisabled) {
					me._gallery_picture.style[domTransition]='none';
				} else {
					me._gallery_picture.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._gallery_picture.style.opacity='1';
				me._gallery_picture.style.visibility=me._gallery_picture.ggVisible?'inherit':'hidden';
			}
		}
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		if (me._timer_hotspotani.ggLastIsActive!=me._timer_hotspotani.ggIsActive()) {
			me._timer_hotspotani.ggLastIsActive=me._timer_hotspotani.ggIsActive();
			if (me._timer_hotspotani.ggLastIsActive) {
				player.setVariableValue('ht_ani', !player.getVariableValue('ht_ani'));
			} else {
			}
		}
		if (!player.getLockedKeyboard()) {
			switch(me.skinKeyPressed) {
				case 37:
					player.changePanLog(1,true);
					break;
				case 38:
					player.changeTiltLog(1,true);
					break;
				case 39:
					player.changePanLog(-1,true);
					break;
				case 40:
					player.changeTiltLog(-1,true);
					break;
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_node1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node1=document.createElement('div');
		el.ggId="ht_node1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 71px;';
		hs+='position : absolute;';
		hs+='top : 220px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node1.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node1.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node1']=true;
			me._chevron_white_lower0.logicBlock_alpha();
			me._chevron_black0.logicBlock_alpha();
			me._chevron_white0.logicBlock_alpha();
			me._hs_preview_image0.logicBlock_alpha();
			me._tt_ht_3d0.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node1']=false;
			me._chevron_white_lower0.logicBlock_alpha();
			me._chevron_black0.logicBlock_alpha();
			me._chevron_white0.logicBlock_alpha();
			me._hs_preview_image0.logicBlock_alpha();
			me._tt_ht_3d0.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node1.ontouchend=function (e) {
			me.elementMouseOver['ht_node1']=false;
			me._chevron_white_lower0.logicBlock_alpha();
			me._chevron_black0.logicBlock_alpha();
			me._chevron_white0.logicBlock_alpha();
			me._hs_preview_image0.logicBlock_alpha();
			me._tt_ht_3d0.logicBlock_visible();
		}
		me._ht_node1.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white_lower0=document.createElement('div');
		els=me._chevron_white_lower0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB4bWw6c3BhY2'+
			'U9InByZXNlcnZlIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEmI3hhOyYjeDk7JiN4OTtjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAmI3hhOyYjeDk7JiN4OTtTMS43LDQ3MywzNC45LDQzOS43eiIgY2xhc3M9InN0MCIv'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._chevron_white_lower0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white_lower";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white_lower0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white_lower0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white_lower0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white_lower0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white_lower0.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white_lower0.ggCurrentLogicStateVisible == 0) {
					me._chevron_white_lower0.style.visibility="hidden";
					me._chevron_white_lower0.ggVisible=false;
				}
				else {
					me._chevron_white_lower0.style.visibility=(Number(me._chevron_white_lower0.style.opacity)>0||!me._chevron_white_lower0.style.opacity)?'inherit':'hidden';
					me._chevron_white_lower0.ggVisible=true;
				}
			}
		}
		me._chevron_white_lower0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white_lower0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white_lower0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white_lower0.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white_lower0.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white_lower0.style.visibility=me._chevron_white_lower0.ggVisible?'inherit':'hidden';
					me._chevron_white_lower0.style.opacity=1;
				}
				else {
					me._chevron_white_lower0.style.visibility=me._chevron_white_lower0.ggVisible?'inherit':'hidden';
					me._chevron_white_lower0.style.opacity=0.6;
				}
			}
		}
		me._chevron_white_lower0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node1.appendChild(me._chevron_white_lower0);
		el=me._chevron_black0=document.createElement('div');
		els=me._chevron_black0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB4bWw6c3BhY2'+
			'U9InByZXNlcnZlIj4KIDxnPgogIDxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcmI3hhOyYjeDk7JiN4OTtjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._chevron_black0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_black0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_black0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_black0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_black0.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_black0.ggCurrentLogicStateVisible == 0) {
					me._chevron_black0.style.visibility="hidden";
					me._chevron_black0.ggVisible=false;
				}
				else {
					me._chevron_black0.style.visibility=(Number(me._chevron_black0.style.opacity)>0||!me._chevron_black0.style.opacity)?'inherit':'hidden';
					me._chevron_black0.ggVisible=true;
				}
			}
		}
		me._chevron_black0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black0.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_black0.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black0.style.visibility=me._chevron_black0.ggVisible?'inherit':'hidden';
					me._chevron_black0.style.opacity=1;
				}
				else {
					me._chevron_black0.style.visibility=me._chevron_black0.ggVisible?'inherit':'hidden';
					me._chevron_black0.style.opacity=0.4;
				}
			}
		}
		me._chevron_black0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node1.appendChild(me._chevron_black0);
		el=me._chevron_white0=document.createElement('div');
		els=me._chevron_white0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB4bWw6c3BhY2'+
			'U9InByZXNlcnZlIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEmI3hhOyYjeDk7JiN4OTtjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAmI3hhOyYjeDk7JiN4OTtTMS43LDQ3MywzNC45LDQzOS43eiIgY2xhc3M9InN0MCIv'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._chevron_white0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white0.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white0.ggCurrentLogicStateVisible == 0) {
					me._chevron_white0.style.visibility="hidden";
					me._chevron_white0.ggVisible=false;
				}
				else {
					me._chevron_white0.style.visibility=(Number(me._chevron_white0.style.opacity)>0||!me._chevron_white0.style.opacity)?'inherit':'hidden';
					me._chevron_white0.ggVisible=true;
				}
			}
		}
		me._chevron_white0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white0.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white0.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white0.style.visibility=me._chevron_white0.ggVisible?'inherit':'hidden';
					me._chevron_white0.style.opacity=1;
				}
				else {
					me._chevron_white0.style.visibility=me._chevron_white0.ggVisible?'inherit':'hidden';
					me._chevron_white0.style.opacity=0.6;
				}
			}
		}
		me._chevron_white0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node1.appendChild(me._chevron_white0);
		el=me._hs_preview_image0=document.createElement('div');
		els=me._hs_preview_image0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -220px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='border-radius: 5px; overflow: hidden; box-shadow: 0px 0px 2px #000000; transform:translate3d(0px,0px,90px) rotateX(-90deg) scale(1.5); transform-style: preserve-3d; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_preview_image0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node1'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image0.style[domTransition]='opacity 500ms ease 0ms';
				if (me._hs_preview_image0.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image0.style.visibility=me._hs_preview_image0.ggVisible?'inherit':'hidden';
					me._hs_preview_image0.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hs_preview_image0.style.opacity == 0.0) { me._hs_preview_image0.style.visibility="hidden"; } }, 505);
					me._hs_preview_image0.style.opacity=0;
				}
			}
		}
		me._hs_preview_image0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._hs_tt0=document.createElement('div');
		els=me._hs_tt0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 140px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.196078);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._hs_tt0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_3d_tooltip') == false)) || 
				((me.hotspot.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt0.style[domTransition]='';
				if (me._hs_tt0.ggCurrentLogicStateVisible == 0) {
					me._hs_tt0.style.visibility="hidden";
					me._hs_tt0.ggVisible=false;
				}
				else {
					me._hs_tt0.style.visibility=(Number(me._hs_tt0.style.opacity)>0||!me._hs_tt0.style.opacity)?'inherit':'hidden';
					me._hs_tt0.ggVisible=true;
				}
			}
		}
		me._hs_tt0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hs_preview_image0.appendChild(me._hs_tt0);
		el=me._hs_visited=document.createElement('div');
		els=me._hs_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB4bW'+
			'w6c3BhY2U9InByZXNlcnZlIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMDAwMDAwO30mI3hkOwoJLnN0MXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXogTS0xMzIuOCwzODEu'+
			'N2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNS'+
			'wxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._hs_visited__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._hs_visited.ggIsActive() == true)) || 
				((player.nodeVisited(me._hs_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_visited.style[domTransition]='';
				if (me._hs_visited.ggCurrentLogicStateVisible == 0) {
					me._hs_visited.style.visibility=(Number(me._hs_visited.style.opacity)>0||!me._hs_visited.style.opacity)?'inherit':'hidden';
					me._hs_visited.ggVisible=true;
				}
				else {
					me._hs_visited.style.visibility="hidden";
					me._hs_visited.ggVisible=false;
				}
			}
		}
		me._hs_visited.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image0.appendChild(me._hs_visited);
		me._ht_node1.appendChild(me._hs_preview_image0);
		el=me.__code0=document.createElement('div');
		els=me.__code0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 68px;';
		hs+='height: 39px;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		el.appendChild(els);
		me.__code0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__code0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node1.appendChild(me.__code0);
		el=me._tt_ht_3d0=document.createElement('div');
		els=me._tt_ht_3d0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); font-size: 15px; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 1px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_3d0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) && 
				((me.hotspot.title != "")) && 
				((me.elementMouseOver['ht_node1'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d0.style[domTransition]='';
				if (me._tt_ht_3d0.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d0.style.visibility=(Number(me._tt_ht_3d0.style.opacity)>0||!me._tt_ht_3d0.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d0.ggVisible=true;
				}
				else {
					me._tt_ht_3d0.style.visibility="hidden";
					me._tt_ht_3d0.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((142-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node1.appendChild(me._tt_ht_3d0);
		el=me._ht_node_customimage0=document.createElement('div');
		els=me._ht_node_customimage0__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_node_customimage0.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_customimage0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage0.style[domTransition]='';
				if (me._ht_node_customimage0.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage0.style.visibility="hidden";
					me._ht_node_customimage0__img.src = '';
					me._ht_node_customimage0.ggVisible=false;
				}
				else {
					me._ht_node_customimage0.style.visibility=(Number(me._ht_node_customimage0.style.opacity)>0||!me._ht_node_customimage0.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage0.ggSubElement.src=me._ht_node_customimage0.ggText;
					me._ht_node_customimage0.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			var parentWidth = me._ht_node_customimage0.clientWidth;
			var parentHeight = me._ht_node_customimage0.clientHeight;
			var img = me._ht_node_customimage0__img;
			var aspectRatioDiv = me._ht_node_customimage0.clientWidth / me._ht_node_customimage0.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_node1.appendChild(me._ht_node_customimage0);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_node1;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 329px;';
		hs+='position : absolute;';
		hs+='top : 353px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.onclick=function (e) {
			skin._container_popinfo.style[domTransition]='none';
			skin._container_popinfo.style.visibility=(Number(skin._container_popinfo.style.opacity)>0||!skin._container_popinfo.style.opacity)?'inherit':'hidden';
			skin._container_popinfo.ggVisible=true;
			player.setVariableValue('ScreenBg', true);
			player.stopAutorotate();
			player.setVariableValue('info_title', me.hotspot.title);
			if (
				(
					((me.hotspot.description != ""))
				)
			) {
				player.setVariableValue('info_body', me.hotspot.description);
			}
			player.setVariableValue('CurrentWindow', "PopupInfo");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._cnt_htinfo0=document.createElement('div');
		el.ggId="cnt_HtInfo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 75px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 75px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cnt_htinfo0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._cnt_htinfo0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['cnt_htinfo0'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._cnt_htinfo0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._cnt_htinfo0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._cnt_htinfo0.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._cnt_htinfo0.ggCurrentLogicStateScaling == 0) {
					me._cnt_htinfo0.ggParameter.sx = 1.5;
					me._cnt_htinfo0.ggParameter.sy = 1.5;
					me._cnt_htinfo0.style[domTransform]=parameterToTransform(me._cnt_htinfo0.ggParameter);
				}
				else {
					me._cnt_htinfo0.ggParameter.sx = 1;
					me._cnt_htinfo0.ggParameter.sy = 1;
					me._cnt_htinfo0.style[domTransform]=parameterToTransform(me._cnt_htinfo0.ggParameter);
				}
			}
		}
		me._cnt_htinfo0.onmouseover=function (e) {
			me.elementMouseOver['cnt_htinfo0']=true;
			me._rect_hotanim31.logicBlock_bordercolor();
			me._rect_hotanim21.logicBlock_bordercolor();
			me._cnt_htinfo0.logicBlock_scaling();
		}
		me._cnt_htinfo0.onmouseout=function (e) {
			me.elementMouseOver['cnt_htinfo0']=false;
			me._rect_hotanim31.logicBlock_bordercolor();
			me._rect_hotanim21.logicBlock_bordercolor();
			me._cnt_htinfo0.logicBlock_scaling();
		}
		me._cnt_htinfo0.ontouchend=function (e) {
			me.elementMouseOver['cnt_htinfo0']=false;
			me._rect_hotanim31.logicBlock_bordercolor();
			me._rect_hotanim21.logicBlock_bordercolor();
			me._cnt_htinfo0.logicBlock_scaling();
		}
		me._cnt_htinfo0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rect_hotanim31=document.createElement('div');
		el.ggId="Rect_HotAnim3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 900px;';
		hs+='border-radius : 900px;';
		hs+='background : rgba(255,255,255,0.196078);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 0 1px 4px rgb(0 0 0 \/ 30%);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rect_hotanim31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rect_hotanim31.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['cnt_htinfo0'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rect_hotanim31.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rect_hotanim31.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rect_hotanim31.style[domTransition]='border-color 400ms ease 0ms';
				if (me._rect_hotanim31.ggCurrentLogicStateBorderColor == 0) {
					me._rect_hotanim31.style.borderColor="rgba(85,170,255,1)";
				}
				else {
					me._rect_hotanim31.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._rect_hotanim31.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cnt_htinfo0.appendChild(me._rect_hotanim31);
		el=me._rect_hotanim21=document.createElement('div');
		el.ggId="Rect_HotAnim2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 900px;';
		hs+='border-radius : 900px;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 0 1px 4px rgb(0 0 0 \/ 30%);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rect_hotanim21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rect_hotanim21.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rect_hotanim21.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rect_hotanim21.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rect_hotanim21.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms, opacity 300ms ease 0ms, border-color 400ms ease 0ms';
				if (me._rect_hotanim21.ggCurrentLogicStateScaling == 0) {
					me._rect_hotanim21.ggParameter.sx = 1.35;
					me._rect_hotanim21.ggParameter.sy = 1.35;
					me._rect_hotanim21.style[domTransform]=parameterToTransform(me._rect_hotanim21.ggParameter);
				}
				else {
					me._rect_hotanim21.ggParameter.sx = 1;
					me._rect_hotanim21.ggParameter.sy = 1;
					me._rect_hotanim21.style[domTransform]=parameterToTransform(me._rect_hotanim21.ggParameter);
				}
			}
		}
		me._rect_hotanim21.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rect_hotanim21.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rect_hotanim21.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rect_hotanim21.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms, opacity 300ms ease 0ms, border-color 400ms ease 0ms';
				if (me._rect_hotanim21.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._rect_hotanim21.style.opacity == 0.0) { me._rect_hotanim21.style.visibility="hidden"; } }, 305);
					me._rect_hotanim21.style.opacity=0;
				}
				else {
					me._rect_hotanim21.style.visibility=me._rect_hotanim21.ggVisible?'inherit':'hidden';
					me._rect_hotanim21.style.opacity=1;
				}
			}
		}
		me._rect_hotanim21.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['cnt_htinfo0'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rect_hotanim21.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rect_hotanim21.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rect_hotanim21.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms, opacity 300ms ease 0ms, border-color 400ms ease 0ms';
				if (me._rect_hotanim21.ggCurrentLogicStateBorderColor == 0) {
					me._rect_hotanim21.style.borderColor="rgba(85,170,255,1)";
				}
				else {
					me._rect_hotanim21.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._rect_hotanim21.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cnt_htinfo0.appendChild(me._rect_hotanim21);
		el=me._svg_21=document.createElement('div');
		els=me._svg_21__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjE2LjkzMzJtbSIgeG1sbnM6eG9kbT0iaHR0cDovL3d3dy5jb3JlbC5jb20vY29yZWxkcmF3L29kbS8yMDAzIiBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2'+
			'lvbjsgdGV4dC1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyBpbWFnZS1yZW5kZXJpbmc6b3B0aW1pemVRdWFsaXR5OyBmaWxsLXJ1bGU6ZXZlbm9kZDsgY2xpcC1ydWxlOmV2ZW5vZGQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDc2MS45OCA3NjEuOTgiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxNi45MzMybW0iIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGRlZnM+CiAgPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwogICAgLmZpbDAge2ZpbGw6I0ZFRkVGRX0mI3hkOwogICAgLmZpbDEge2ZpbGw6IzAwMDAwMDtmaWxsLXJ1bGU6bm9uemVy'+
			'b30mI3hkOwogICA8L3N0eWxlPgogPC9kZWZzPgogPGcgaWQ9IkxheWVyX3gwMDIwXzEiPgogIDxtZXRhZGF0YSBpZD0iQ29yZWxDb3JwSURfMENvcmVsLUxheWVyIi8+CiAgPGcgaWQ9Il8xNzY4MDM3MTQxNTA0Ij4KICAgPHBhdGggZD0iTTIyMy4yOSA1NDAuNDNjMjAuNCwtNS4zIDM5LjIsLTEwIDU3LjgyLC0xNS4yNSA1LjI3LC0xLjQyIDkuMzMsLTAuNjUgMTMuOTgsMi4wMyAzNS4yNywyMC4zMiA3My4wNSwyNy45MiAxMTMuNDMsMjEuNDEgOTIuOTcsLTE0LjkgMTU2LjY3LC0xMDEuOTEgMTQyLjQ0LC0xOTQuNTEgLTE0Ljc3LC05Ni4wMyAtMTA0Ljc3LC0xNjAuNDMgLTE5OS45LC0xNDIuOT'+
			'kgLTExNS4wOCwyMS4xMyAtMTc2LjE3LDE0OS40MiAtMTE4Ljk0LDI1MS4wMSA2LjM0LDExLjI2IDguMDgsMjAuNTQgMy44MiwzMi41MiAtNS4wOCwxNC40MSAtOC4yMiwyOS40NCAtMTIuNjUsNDUuNzh6bS00Ny43IDQ3LjA1YzIuMywtOC45MiA0LjMyLC0xNi42NiA2LjQsLTI0LjQyIDYuOCwtMjQuODEgMTMuNzcsLTQ5LjU3IDIwLjIxLC03NC40MyAwLjkzLC0zLjcxIDAuNTQsLTguNjMgLTEuMjIsLTExLjk3IC02My4wMiwtMTIwLjEgMi4wMiwtMjY1LjQ5IDEzNC4yNCwtMjk2LjUzIDEyMC4wOSwtMjguMTYgMjI4LjA1LDUyLjkgMjQ3Ljc1LDE2MS4zIDIwLjUsMTEzLjA1IC01My40NCwyMjAu'+
			'NDcgLTE2NS42LDI0MC4xIC00NC42LDcuNjkgLTg3LjIxLDEuMTQgLTEyNy45MywtMTguNjUgLTMuNjEsLTEuNzkgLTguNzMsLTIuMjggLTEyLjU5LC0xLjM1IC01NC4yNCwxMy41OSAtOTAuMzMsMjMuODIgLTEwMS4yNiwyNS45NXoiIGNsYXNzPSJmaWwwIi8+CiAgIDxnPgogICAgPHBhdGggZD0iTTUzMi4zOCAzNzkuNjZjMCw4My4xNyAtNjcuNDIsMTUwLjU3IC0xNTAuNTgsMTUwLjU3IC04My4xNiwwIC0xNTAuNTgsLTY3LjQgLTE1MC41OCwtMTUwLjU3IDAsLTgzLjE2IDY3LjQyLC0xNTAuNTggMTUwLjU4LC0xNTAuNTggODMuMTYsMCAxNTAuNTgsNjcuNDIgMTUwLjU4LDE1MC41OHoiIGNsYX'+
			'NzPSJmaWwxIi8+CiAgICA8cGF0aCBkPSJNNDEzLjkgMzU0LjU4Yy0xMC44OCwzNi4yOCAtNjEuNjksMTM2LjA4IC0zMS40NSwxMjAuOTZsMjQuMTkgLTEzLjMxYzAsMCAzLjYzLC0yLjQyIDQuNTQsMS4yMSAwLjkxLDMuNjMgMS40Myw1Ljk3IDEuNDMsNS45NyAwLDAgMC42MSwyLjA0IC0yLjU3LDQuMzggLTMuMTcsMi4zNSAtNjQuMTEsNDYuMjcgLTc2LjgxLDI3LjIyIC0xNywtMjUuNSA1Ny4wNywtMTU2LjkxIDI1LjQxLC0xNDQuMjUgLTEuNjIsMC42NSAtMTkuNjIsOS40NiAtMjguMDcsMTIuNzMgLTEuNzEsMC42NyAtMi4yOCwxLjIgLTMuMjEsLTEuMDMgLTAuNTYsLTEuMzQgLTEuMzYsLTMu'+
			'MTUgLTEuODEsLTQuMTQgLTEuMzYsLTIuOTkgLTEuNDYsLTIuNTkgMC45NSwtMy45OCAxNy4yNSwtOS45IDEwNy40LC03Mi40MiA4Ny40LC01Ljc2em0wLjMzIC0xMDEuMDVjMTMuNywwIDI0LjgsMTEuMSAyNC44LDI0LjggMCwxMy42OSAtMTEuMSwyNC43OSAtMjQuOCwyNC43OSAtMTMuNjksMCAtMjQuNzksLTExLjEgLTI0Ljc5LC0yNC43OSAwLC0xMy43IDExLjEsLTI0LjggMjQuNzksLTI0Ljh6IiBjbGFzcz0iZmlsMCIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._svg_21__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_21__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjE2LjkzMzJtbSIgeG1sbnM6eG9kbT0iaHR0cDovL3d3dy5jb3JlbC5jb20vY29yZWxkcmF3L29kbS8yMDAzIiBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2'+
			'lvbjsgdGV4dC1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyBpbWFnZS1yZW5kZXJpbmc6b3B0aW1pemVRdWFsaXR5OyBmaWxsLXJ1bGU6ZXZlbm9kZDsgY2xpcC1ydWxlOmV2ZW5vZGQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDc2MS45OCA3NjEuOTgiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxNi45MzMybW0iIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGRlZnM+CiAgPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwogICAgLmZpbDAge2ZpbGw6I0ZFRkVGRX0mI3hkOwogICAgLmZpbDEge2ZpbGw6IzU1YWFmZjtmaWxsLXJ1bGU6bm9uemVy'+
			'b30mI3hkOwogICA8L3N0eWxlPgogPC9kZWZzPgogPGcgaWQ9IkxheWVyX3gwMDIwXzEiPgogIDxtZXRhZGF0YSBpZD0iQ29yZWxDb3JwSURfMENvcmVsLUxheWVyIi8+CiAgPGcgaWQ9Il8xNzY4MDM3MTQxNTA0Ij4KICAgPHBhdGggZD0iTTIyMy4yOSA1NDAuNDNjMjAuNCwtNS4zIDM5LjIsLTEwIDU3LjgyLC0xNS4yNSA1LjI3LC0xLjQyIDkuMzMsLTAuNjUgMTMuOTgsMi4wMyAzNS4yNywyMC4zMiA3My4wNSwyNy45MiAxMTMuNDMsMjEuNDEgOTIuOTcsLTE0LjkgMTU2LjY3LC0xMDEuOTEgMTQyLjQ0LC0xOTQuNTEgLTE0Ljc3LC05Ni4wMyAtMTA0Ljc3LC0xNjAuNDMgLTE5OS45LC0xNDIuOT'+
			'kgLTExNS4wOCwyMS4xMyAtMTc2LjE3LDE0OS40MiAtMTE4Ljk0LDI1MS4wMSA2LjM0LDExLjI2IDguMDgsMjAuNTQgMy44MiwzMi41MiAtNS4wOCwxNC40MSAtOC4yMiwyOS40NCAtMTIuNjUsNDUuNzh6bS00Ny43IDQ3LjA1YzIuMywtOC45MiA0LjMyLC0xNi42NiA2LjQsLTI0LjQyIDYuOCwtMjQuODEgMTMuNzcsLTQ5LjU3IDIwLjIxLC03NC40MyAwLjkzLC0zLjcxIDAuNTQsLTguNjMgLTEuMjIsLTExLjk3IC02My4wMiwtMTIwLjEgMi4wMiwtMjY1LjQ5IDEzNC4yNCwtMjk2LjUzIDEyMC4wOSwtMjguMTYgMjI4LjA1LDUyLjkgMjQ3Ljc1LDE2MS4zIDIwLjUsMTEzLjA1IC01My40NCwyMjAu'+
			'NDcgLTE2NS42LDI0MC4xIC00NC42LDcuNjkgLTg3LjIxLDEuMTQgLTEyNy45MywtMTguNjUgLTMuNjEsLTEuNzkgLTguNzMsLTIuMjggLTEyLjU5LC0xLjM1IC01NC4yNCwxMy41OSAtOTAuMzMsMjMuODIgLTEwMS4yNiwyNS45NXoiIGNsYXNzPSJmaWwwIi8+CiAgIDxnPgogICAgPHBhdGggZD0iTTUzMi4zOCAzNzkuNjZjMCw4My4xNyAtNjcuNDIsMTUwLjU3IC0xNTAuNTgsMTUwLjU3IC04My4xNiwwIC0xNTAuNTgsLTY3LjQgLTE1MC41OCwtMTUwLjU3IDAsLTgzLjE2IDY3LjQyLC0xNTAuNTggMTUwLjU4LC0xNTAuNTggODMuMTYsMCAxNTAuNTgsNjcuNDIgMTUwLjU4LDE1MC41OHoiIGNsYX'+
			'NzPSJmaWwxIi8+CiAgICA8cGF0aCBkPSJNNDEzLjkgMzU0LjU4Yy0xMC44OCwzNi4yOCAtNjEuNjksMTM2LjA4IC0zMS40NSwxMjAuOTZsMjQuMTkgLTEzLjMxYzAsMCAzLjYzLC0yLjQyIDQuNTQsMS4yMSAwLjkxLDMuNjMgMS40Myw1Ljk3IDEuNDMsNS45NyAwLDAgMC42MSwyLjA0IC0yLjU3LDQuMzggLTMuMTcsMi4zNSAtNjQuMTEsNDYuMjcgLTc2LjgxLDI3LjIyIC0xNywtMjUuNSA1Ny4wNywtMTU2LjkxIDI1LjQxLC0xNDQuMjUgLTEuNjIsMC42NSAtMTkuNjIsOS40NiAtMjguMDcsMTIuNzMgLTEuNzEsMC42NyAtMi4yOCwxLjIgLTMuMjEsLTEuMDMgLTAuNTYsLTEuMzQgLTEuMzYsLTMu'+
			'MTUgLTEuODEsLTQuMTQgLTEuMzYsLTIuOTkgLTEuNDYsLTIuNTkgMC45NSwtMy45OCAxNy4yNSwtOS45IDEwNy40LC03Mi40MiA4Ny40LC01Ljc2em0wLjMzIC0xMDEuMDVjMTMuNywwIDI0LjgsMTEuMSAyNC44LDI0LjggMCwxMy42OSAtMTEuMSwyNC43OSAtMjQuOCwyNC43OSAtMTMuNjksMCAtMjQuNzksLTExLjEgLTI0Ljc5LC0yNC43OSAwLC0xMy43IDExLjEsLTI0LjggMjQuNzksLTI0Ljh6IiBjbGFzcz0iZmlsMCIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._svg_21__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_21.onmouseover=function (e) {
			me._svg_21__img.style.visibility='hidden';
			me._svg_21__imgo.style.visibility='inherit';
		}
		me._svg_21.onmouseout=function (e) {
			me._svg_21__img.style.visibility='inherit';
			me._svg_21__imgo.style.visibility='hidden';
		}
		me._svg_21.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cnt_htinfo0.appendChild(me._svg_21);
		me._ht_info.appendChild(me._cnt_htinfo0);
		me.__div = me._ht_info;
	};
	function SkinHotspotClass_ht_video_file(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_file=document.createElement('div');
		el.ggId="ht_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_file.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_file.onclick=function (e) {
			player.setVariableValue('vis_video_file', true);
				player.playSound("popup_video_file","1");
			player.setVariableValue('ScreenBg', true);
			player.stopAutorotate();
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_file']=true;
			me._tt_ht_video_file.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_file']=false;
			me._tt_ht_video_file.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.ontouchend=function (e) {
			me.elementMouseOver['ht_video_file']=false;
			me._tt_ht_video_file.logicBlock_visible();
		}
		me._ht_video_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._cnt_htvideoani=document.createElement('div');
		el.ggId="cnt_HtVideoAni";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 75px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 75px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cnt_htvideoani.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._cnt_htvideoani.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['cnt_htvideoani'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._cnt_htvideoani.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._cnt_htvideoani.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._cnt_htvideoani.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._cnt_htvideoani.ggCurrentLogicStateScaling == 0) {
					me._cnt_htvideoani.ggParameter.sx = 1.5;
					me._cnt_htvideoani.ggParameter.sy = 1.5;
					me._cnt_htvideoani.style[domTransform]=parameterToTransform(me._cnt_htvideoani.ggParameter);
				}
				else {
					me._cnt_htvideoani.ggParameter.sx = 1;
					me._cnt_htvideoani.ggParameter.sy = 1;
					me._cnt_htvideoani.style[domTransform]=parameterToTransform(me._cnt_htvideoani.ggParameter);
				}
			}
		}
		me._cnt_htvideoani.onclick=function (e) {
			me._cnt_htvideoani.style[domTransition]='none';
			me._cnt_htvideoani.style.visibility='hidden';
			me._cnt_htvideoani.ggVisible=false;
			player.stopAutorotate();
		}
		me._cnt_htvideoani.onmouseover=function (e) {
			me.elementMouseOver['cnt_htvideoani']=true;
			me._rect_hotanim30.logicBlock_bordercolor();
			me._rect_hotanim20.logicBlock_bordercolor();
			me._cnt_htvideoani.logicBlock_scaling();
		}
		me._cnt_htvideoani.onmouseout=function (e) {
			me.elementMouseOver['cnt_htvideoani']=false;
			me._rect_hotanim30.logicBlock_bordercolor();
			me._rect_hotanim20.logicBlock_bordercolor();
			me._cnt_htvideoani.logicBlock_scaling();
		}
		me._cnt_htvideoani.ontouchend=function (e) {
			me.elementMouseOver['cnt_htvideoani']=false;
			me._rect_hotanim30.logicBlock_bordercolor();
			me._rect_hotanim20.logicBlock_bordercolor();
			me._cnt_htvideoani.logicBlock_scaling();
		}
		me._cnt_htvideoani.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rect_hotanim30=document.createElement('div');
		el.ggId="Rect_HotAnim3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 900px;';
		hs+='border-radius : 900px;';
		hs+='background : rgba(255,255,255,0.196078);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 0 1px 4px rgb(0 0 0 \/ 30%);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rect_hotanim30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rect_hotanim30.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['cnt_htvideoani'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rect_hotanim30.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rect_hotanim30.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rect_hotanim30.style[domTransition]='border-color 400ms ease 0ms';
				if (me._rect_hotanim30.ggCurrentLogicStateBorderColor == 0) {
					me._rect_hotanim30.style.borderColor="rgba(56,56,56,1)";
				}
				else {
					me._rect_hotanim30.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._rect_hotanim30.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cnt_htvideoani.appendChild(me._rect_hotanim30);
		el=me._rect_hotanim20=document.createElement('div');
		el.ggId="Rect_HotAnim2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 900px;';
		hs+='border-radius : 900px;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 0 1px 4px rgb(0 0 0 \/ 30%);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rect_hotanim20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rect_hotanim20.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rect_hotanim20.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rect_hotanim20.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rect_hotanim20.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms, opacity 300ms ease 0ms, border-color 400ms ease 0ms';
				if (me._rect_hotanim20.ggCurrentLogicStateScaling == 0) {
					me._rect_hotanim20.ggParameter.sx = 1.35;
					me._rect_hotanim20.ggParameter.sy = 1.35;
					me._rect_hotanim20.style[domTransform]=parameterToTransform(me._rect_hotanim20.ggParameter);
				}
				else {
					me._rect_hotanim20.ggParameter.sx = 1;
					me._rect_hotanim20.ggParameter.sy = 1;
					me._rect_hotanim20.style[domTransform]=parameterToTransform(me._rect_hotanim20.ggParameter);
				}
			}
		}
		me._rect_hotanim20.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rect_hotanim20.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rect_hotanim20.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rect_hotanim20.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms, opacity 300ms ease 0ms, border-color 400ms ease 0ms';
				if (me._rect_hotanim20.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._rect_hotanim20.style.opacity == 0.0) { me._rect_hotanim20.style.visibility="hidden"; } }, 305);
					me._rect_hotanim20.style.opacity=0;
				}
				else {
					me._rect_hotanim20.style.visibility=me._rect_hotanim20.ggVisible?'inherit':'hidden';
					me._rect_hotanim20.style.opacity=1;
				}
			}
		}
		me._rect_hotanim20.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['cnt_htvideoani'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rect_hotanim20.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rect_hotanim20.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rect_hotanim20.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms, opacity 300ms ease 0ms, border-color 400ms ease 0ms';
				if (me._rect_hotanim20.ggCurrentLogicStateBorderColor == 0) {
					me._rect_hotanim20.style.borderColor="rgba(56,56,56,1)";
				}
				else {
					me._rect_hotanim20.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._rect_hotanim20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cnt_htvideoani.appendChild(me._rect_hotanim20);
		me._ht_video_file.appendChild(me._cnt_htvideoani);
		el=me._ht_video_video_file=document.createElement('div');
		els=me._ht_video_video_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZmFmNCIgZmlsbC1vcGFjaXR5PSIxIj4KIDxkZWZzPjwhW0NEQVRBWwogICAgLmZpbDEge2ZpbGw6IzJCMkEyOX0KICAgIC5maWwwIHtmaWxsOiMyQjJBMjk7ZmlsbC1ydWxlOm5vbnplcm99CiAgIF1dPjwvZGVmcz4KIDxwYXRoIGQ9Ik0wLDBIMTAwVjEwMEgwVjBaTTUuNzIsNS43MlY5NC4yOEg5NC4yOFY1LjcySDUuNzJaTTI1LjgsMTguMzhhNy4xMTYsNy4xMTYsMCwwLDEsMy45MywxLjE1YzAuNDgxLDAuMjY5Ljk5MywwLj'+
			'UsMS40NCwwLjgxLDAuMTY5LDAuMTE3LjM2MywwLjE3NCwwLjU0LDAuMjgsMC42NzMsMC40LDEuMzkuNzY5LDIuMDYsMS4xOCwwLjM3MywwLjIyOS43ODcsMC4zOSwxLjE0LDAuNjRhNS41LDUuNSwwLDAsMCwuNjQuMzRjMC40OSwwLjI1Ni45NjMsMC41NTcsMS40NiwwLjgyLDAuNDQsMC4yMzMuODcsMC41MywxLjMxLDAuNzZhMTEuMTU3LDExLjE1NywwLDAsMSwxLjE0LjY0YzAuMTcsMC4xMTYuMzY0LDAuMTczLDAuNTQsMC4yOCwwLjY5LDAuNDE4LDEuNDE4Ljc3NCwyLjEyLDEuMTksMS4xLDAuNjUyLDIuMjI3LDEuMjc1LDMuMzYsMS44OSwwLjgwOSwwLjQzOSwxLjYuOTI4LDIuNDIsMS4zNiww'+
			'LjQ0LDAuMjMxLjg3MiwwLjUyNiwxLjMxLDAuNzYsMS43MjcsMC45MjQsMy40LDEuOTMyLDUuMTEsMi44NywwLjk1MSwwLjUyMiwxLjg3MiwxLjA2MSwyLjgzLDEuNTcsMC4zNzUsMC4yLjc0MiwwLjQ1OSwxLjEyLDAuNjUsMC40NjYsMC4yMzUuOSwwLjUyLDEuMzUsMC43NiwwLjMxOSwwLjE2OS42MzEsMC4zMzMsMC45MywwLjUyLDAuMjQzLDAuMTUzLjUsMC4yNTIsMC43NSwwLjQsMC4zLDAuMTc4LjYxMSwwLjM4NSwwLjkyLDAuNTQsMC4xOSwwLjEuMzY0LDAuMiwwLjU0LDAuM2EwLjgwOCwwLjgwOCwwLDAsMSwuMjYuMTVMNTIuNjMsNDguNjNhNS40Nyw1LjQ3LDAsMCwxLS42Ni0wLjY2Yy0wLj'+
			'UxMy0uNDU3LTAuOTc1LTAuOTczLTEuNDYtMS40Ni0xLjAwOC0xLjAxMi0yLjAyMi0yLjAxOC0zLjAzLTMuMDMtMC40ODUtLjQ4Ny0xLTAuOTQ2LTEuNDYtMS40NmwtMC4yNy0uMjVjLTAuMjI0LS4yNjQtMC40OTItMC41LTAuNzQtMC43NC0wLjgzNi0uODA5LTEuNjM5LTEuNjU1LTIuNDYtMi40OC0wLjQ5NS0uNS0xLjA1Ni0wLjk3OS0xLjUyLTEuNS0wLjUzOC0uNi0xLjE1Ny0xLjEzOS0xLjcyLTEuNzJMMzcuNiwzMy42MmMtMC4yMDYtLjE4NC0wLjM4NS0wLjQtMC41OC0wLjYtMC40NjktLjQ3MS0wLjk0MS0wLjkzOS0xLjQxLTEuNDFxLTIuMTg1LTIuMTk0LTQuMzgtNC4zOC0yLjgyNi0yLjgx'+
			'NS01LjY0LTUuNjRjLTAuNTIxLS41MjUtMS4wNDctMS4wNDctMS41Ny0xLjU3LTAuMTgtLjE4LTAuMzYtMC4zNjEtMC41NC0wLjU0YTAuNzEzLDAuNzEzLDAsMCwxLS4xOS0wLjE5LDUuMzQxLDUuMzQxLDAsMCwxLDEuNDQtLjczbDAuNzEtLjE1Wm0tNC4zMywzLjQ4SDIxLjVhNS41MjYsNS41MjYsMCwwLDAsLjQxLjQxYzAuMzExLDAuMzY2LjY4OSwwLjY3MywxLjAyLDEuMDIsMC4zMTYsMC4zMzEuNjUyLDAuNzA1LDAuOTksMS4wMWE0LjAyNSw0LjAyNSwwLDAsMSwuNDIuNCw2LjE1LDYuMTUsMCwwLDAsLjUyLjUzbDAuNTksMC41OSw4LjY5LDguNjksMTYuMywxNi4zLTAuMDEuMDFMMjEuOTcsNz'+
			'kuMjlsLTAuMDItLjAxYTMuMTYxLDMuMTYxLDAsMCwxLS40Mi0wLjkyLDkuMTk0LDkuMTk0LDAsMCwxLS4yNy0wLjkybC0wLjExLS43OHEwLS4xODUtMC4wMS0wLjM3YTkuMTc3LDkuMTc3LDAsMCwxLS4wMi0xLjQ2VjI1LjA2YTcuNiw3LjYsMCwwLDEsLjAyLTEuMjhxMC0uMTguMDEtMC4zNmMwLjA2NC0uMzM5LjA4Mi0wLjY3OCwwLjE2LTFaTTY1LjgyLDM5LjhjMC4zNTMsMC4xNzUuNjg3LDAuNDA1LDEuMDMsMC41OSwwLjQ4OSwwLjI2NC45NzIsMC41MjcsMS40NCwwLjgxLDAuMTc2LDAuMTA2LjM3MSwwLjE2MywwLjU0LDAuMjhhMTYuNTE0LDE2LjUxNCwwLDAsMCwxLjYyLjkxYzEuMTkxLDAu'+
			'NjM0LDIuMzU4LDEuMzU4LDMuNTQsMi4wMSwxLjczLDAuOTUzLDMuNTY0LDEuODI3LDQuNDMsMy42NGE1LjM4Nyw1LjM4NywwLDAsMSwuMzgsMS4xMSw0LjYsNC42LDAsMCwxLS44NywzLjY0LDEwLjYyOSwxMC42MjksMCwwLDEtMy42MiwyLjY2Yy0wLjQ0LjIzMy0uODcxLDAuNTI2LTEuMzEsMC43Ni0wLjU2OC4zLTEuMTI3LDAuNTkyLTEuNjgsMC45Mi0wLjEwNi4wNjMtLjIyMSwwLjE1My0wLjMzLDAuMjEtMC40NjIuMjQyLS45MSwwLjUtMS4zNSwwLjc2LTAuMjQ4LjE0OC0uNTA3LDAuMjQ3LTAuNzUsMC40LTAuMy4xODgtLjYxLDAuMzUyLTAuOTMsMC41Mi0wLjYxNC4zMjItMS4yMDgsMC43LT'+
			'EuODMsMS4wMy0wLjI4OS4xNTQtLjU3MiwwLjMzMi0wLjg3LDAuNDlhMS44NTQsMS44NTQsMCwwLDEtLjQ4LjI3LDEuMjQsMS4yNCwwLDAsMC0uMTgtMC4xOGMtMC4xNjctLjE5MS0wLjM3Ny0wLjM0Ny0wLjU0LTAuNTQtMC40NDYtLjUyOS0xLjAxMi0wLjk1Mi0xLjQ2LTEuNDgtMC4xMTEtLjEzMS0wLjI2OS0wLjIyOS0wLjM4LTAuMzYtMC4zOC0uNDQ5LTAuODYzLTAuODA4LTEuMjUtMS4yNWE3LjE4LDcuMTgsMCwwLDAtLjc0LTAuNzRjLTAuMjUtLjIxMi0wLjQ1Mi0wLjQ4My0wLjctMC43LTAuMjA3LS4xODItMC4zNy0wLjQyMi0wLjU4LTAuNi0wLjQ3LS40LTAuODkxLTAuODc2LTEuMzMtMS4z'+
			'MWwtMC41MS0uNTNjLTAuMjkyLS4yNDYtMC41MjctMC41NTUtMC44MS0wLjgxYTguMzQ0LDguMzQ0LDAsMCwxLS44LTAuOGMtMC4xNjMtLjE5My0wLjM3NS0wLjM0Ni0wLjU0LTAuNTRhMC44ODEsMC44ODEsMCwwLDEtLjE2LTAuMTYsNS44MTUsNS44MTUsMCwwLDAsLjU2LTAuNTYsMTAuNzQ2LDEwLjc0NiwwLDAsMCwxLjAxLTEuMDFjMC4xNzktLjIuNDEtMC4zNjcsMC41OS0wLjU3LDAuNzE2LS44MDcsMS41NzEtMS40ODcsMi4yOC0yLjNhOC4yNjksOC4yNjksMCwwLDEsLjY5LTAuNjcsNC4yODcsNC4yODcsMCwwLDAsLjM0LTAuMzYsMTMuMTA2LDEzLjEwNiwwLDAsMSwuOTctMC45NGMwLjI0MS'+
			'0uMjI0LjQ0NS0wLjQ5MSwwLjY5LTAuNzEsMC43MzctLjY1NywxLjQtMS40MDgsMi4xLTIuMSwwLjQtLjM5NS43ODItMC44MjUsMS4yLTEuMkE0LjM4LDQuMzgsMCwwLDAsNjUuODIsMzkuOFpNNTIuNjIsNTNsNi43Myw2Ljc0LDEuODcsMS44NywwLjU0LDAuNTRhMS4yLDEuMiwwLDAsMSwuMjMuMjQsMS41NDMsMS41NDMsMCwwLDEtLjI5LjE2Yy0wLjE4Ny4xMDYtLjM3MywwLjIxNS0wLjU3LDAuMzItMC4zNDUuMTg0LS42ODYsMC40MTctMS4wMywwLjYtMC4yNzUuMTQ2LS41NDEsMC4yNzEtMC44MSwwLjQzLTAuNTg3LjM0Ny0xLjIwNiwwLjY3OC0xLjc5LDEuMDMtMC4yNjcuMTYxLS41NDMsMC4y'+
			'Ny0wLjgxLDAuNDMtMC44NDYuNTA4LTEuNzE2LDEtMi42LDEuNDYtMC40NC4yMzEtLjg3LDAuNTMtMS4zMSwwLjc2LTEuMDU0LjU1Mi0yLjA3MiwxLjE2LTMuMSwxLjc0LTIuMjE0LDEuMjUxLTQuNDU2LDIuNDQ3LTYuNjQsMy43My0wLjU5Mi4zNDgtMS4yLDAuNjI1LTEuNzksMC45OC0wLjk2MS41ODEtMS45NywxLjEzMS0yLjk1LDEuNjgtMC41NjkuMzE5LTEuMTgsMC41OTMtMS43MSwwLjk2YTUuMTgsNS4xOCwwLDAsMS0uNTQuMjhjLTAuNDM5LjIzMy0uODcsMC41My0xLjMxLDAuNzYtMC4zNTYuMTg2LS43MDgsMC4zNjktMS4wNCwwLjU4LTAuMzA4LjItLjY1OCwwLjMxNC0wLjk2LDAuNTItMC'+
			'41MzMuMzY0LTEuMTQsMC42NDEtMS43MSwwLjk2YTE0LjM4LDE0LjM4LDAsMCwxLTMuNjgsMS43Myw1LjcxMSw1LjcxMSwwLDAsMS0yLjQ2LDAsMS42ODYsMS42ODYsMCwwLDEtLjU5LTAuMTlaIiBpZD0iU2hhcGVfOV8xIiBkYXRhLW5hbWU9IlNoYXBlIDkgMSIgY2xhc3M9ImNscy0xIi8+Cjwvc3ZnPgo=';
		me._ht_video_video_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_video_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzU1YWFmZiIgZmlsbC1vcGFjaXR5PSIxIj4KIDxkZWZzPjwhW0NEQVRBWwogICAgLmZpbDEge2ZpbGw6IzJCMkEyOX0KICAgIC5maWwwIHtmaWxsOiMyQjJBMjk7ZmlsbC1ydWxlOm5vbnplcm99CiAgIF1dPjwvZGVmcz4KIDxwYXRoIGQ9Ik0wLDBIMTAwVjEwMEgwVjBaTTUuNzIsNS43MlY5NC4yOEg5NC4yOFY1LjcySDUuNzJaTTI1LjgsMTguMzhhNy4xMTYsNy4xMTYsMCwwLDEsMy45MywxLjE1YzAuNDgxLDAuMjY5Ljk5MywwLj'+
			'UsMS40NCwwLjgxLDAuMTY5LDAuMTE3LjM2MywwLjE3NCwwLjU0LDAuMjgsMC42NzMsMC40LDEuMzkuNzY5LDIuMDYsMS4xOCwwLjM3MywwLjIyOS43ODcsMC4zOSwxLjE0LDAuNjRhNS41LDUuNSwwLDAsMCwuNjQuMzRjMC40OSwwLjI1Ni45NjMsMC41NTcsMS40NiwwLjgyLDAuNDQsMC4yMzMuODcsMC41MywxLjMxLDAuNzZhMTEuMTU3LDExLjE1NywwLDAsMSwxLjE0LjY0YzAuMTcsMC4xMTYuMzY0LDAuMTczLDAuNTQsMC4yOCwwLjY5LDAuNDE4LDEuNDE4Ljc3NCwyLjEyLDEuMTksMS4xLDAuNjUyLDIuMjI3LDEuMjc1LDMuMzYsMS44OSwwLjgwOSwwLjQzOSwxLjYuOTI4LDIuNDIsMS4zNiww'+
			'LjQ0LDAuMjMxLjg3MiwwLjUyNiwxLjMxLDAuNzYsMS43MjcsMC45MjQsMy40LDEuOTMyLDUuMTEsMi44NywwLjk1MSwwLjUyMiwxLjg3MiwxLjA2MSwyLjgzLDEuNTcsMC4zNzUsMC4yLjc0MiwwLjQ1OSwxLjEyLDAuNjUsMC40NjYsMC4yMzUuOSwwLjUyLDEuMzUsMC43NiwwLjMxOSwwLjE2OS42MzEsMC4zMzMsMC45MywwLjUyLDAuMjQzLDAuMTUzLjUsMC4yNTIsMC43NSwwLjQsMC4zLDAuMTc4LjYxMSwwLjM4NSwwLjkyLDAuNTQsMC4xOSwwLjEuMzY0LDAuMiwwLjU0LDAuM2EwLjgwOCwwLjgwOCwwLDAsMSwuMjYuMTVMNTIuNjMsNDguNjNhNS40Nyw1LjQ3LDAsMCwxLS42Ni0wLjY2Yy0wLj'+
			'UxMy0uNDU3LTAuOTc1LTAuOTczLTEuNDYtMS40Ni0xLjAwOC0xLjAxMi0yLjAyMi0yLjAxOC0zLjAzLTMuMDMtMC40ODUtLjQ4Ny0xLTAuOTQ2LTEuNDYtMS40NmwtMC4yNy0uMjVjLTAuMjI0LS4yNjQtMC40OTItMC41LTAuNzQtMC43NC0wLjgzNi0uODA5LTEuNjM5LTEuNjU1LTIuNDYtMi40OC0wLjQ5NS0uNS0xLjA1Ni0wLjk3OS0xLjUyLTEuNS0wLjUzOC0uNi0xLjE1Ny0xLjEzOS0xLjcyLTEuNzJMMzcuNiwzMy42MmMtMC4yMDYtLjE4NC0wLjM4NS0wLjQtMC41OC0wLjYtMC40NjktLjQ3MS0wLjk0MS0wLjkzOS0xLjQxLTEuNDFxLTIuMTg1LTIuMTk0LTQuMzgtNC4zOC0yLjgyNi0yLjgx'+
			'NS01LjY0LTUuNjRjLTAuNTIxLS41MjUtMS4wNDctMS4wNDctMS41Ny0xLjU3LTAuMTgtLjE4LTAuMzYtMC4zNjEtMC41NC0wLjU0YTAuNzEzLDAuNzEzLDAsMCwxLS4xOS0wLjE5LDUuMzQxLDUuMzQxLDAsMCwxLDEuNDQtLjczbDAuNzEtLjE1Wm0tNC4zMywzLjQ4SDIxLjVhNS41MjYsNS41MjYsMCwwLDAsLjQxLjQxYzAuMzExLDAuMzY2LjY4OSwwLjY3MywxLjAyLDEuMDIsMC4zMTYsMC4zMzEuNjUyLDAuNzA1LDAuOTksMS4wMWE0LjAyNSw0LjAyNSwwLDAsMSwuNDIuNCw2LjE1LDYuMTUsMCwwLDAsLjUyLjUzbDAuNTksMC41OSw4LjY5LDguNjksMTYuMywxNi4zLTAuMDEuMDFMMjEuOTcsNz'+
			'kuMjlsLTAuMDItLjAxYTMuMTYxLDMuMTYxLDAsMCwxLS40Mi0wLjkyLDkuMTk0LDkuMTk0LDAsMCwxLS4yNy0wLjkybC0wLjExLS43OHEwLS4xODUtMC4wMS0wLjM3YTkuMTc3LDkuMTc3LDAsMCwxLS4wMi0xLjQ2VjI1LjA2YTcuNiw3LjYsMCwwLDEsLjAyLTEuMjhxMC0uMTguMDEtMC4zNmMwLjA2NC0uMzM5LjA4Mi0wLjY3OCwwLjE2LTFaTTY1LjgyLDM5LjhjMC4zNTMsMC4xNzUuNjg3LDAuNDA1LDEuMDMsMC41OSwwLjQ4OSwwLjI2NC45NzIsMC41MjcsMS40NCwwLjgxLDAuMTc2LDAuMTA2LjM3MSwwLjE2MywwLjU0LDAuMjhhMTYuNTE0LDE2LjUxNCwwLDAsMCwxLjYyLjkxYzEuMTkxLDAu'+
			'NjM0LDIuMzU4LDEuMzU4LDMuNTQsMi4wMSwxLjczLDAuOTUzLDMuNTY0LDEuODI3LDQuNDMsMy42NGE1LjM4Nyw1LjM4NywwLDAsMSwuMzgsMS4xMSw0LjYsNC42LDAsMCwxLS44NywzLjY0LDEwLjYyOSwxMC42MjksMCwwLDEtMy42MiwyLjY2Yy0wLjQ0LjIzMy0uODcxLDAuNTI2LTEuMzEsMC43Ni0wLjU2OC4zLTEuMTI3LDAuNTkyLTEuNjgsMC45Mi0wLjEwNi4wNjMtLjIyMSwwLjE1My0wLjMzLDAuMjEtMC40NjIuMjQyLS45MSwwLjUtMS4zNSwwLjc2LTAuMjQ4LjE0OC0uNTA3LDAuMjQ3LTAuNzUsMC40LTAuMy4xODgtLjYxLDAuMzUyLTAuOTMsMC41Mi0wLjYxNC4zMjItMS4yMDgsMC43LT'+
			'EuODMsMS4wMy0wLjI4OS4xNTQtLjU3MiwwLjMzMi0wLjg3LDAuNDlhMS44NTQsMS44NTQsMCwwLDEtLjQ4LjI3LDEuMjQsMS4yNCwwLDAsMC0uMTgtMC4xOGMtMC4xNjctLjE5MS0wLjM3Ny0wLjM0Ny0wLjU0LTAuNTQtMC40NDYtLjUyOS0xLjAxMi0wLjk1Mi0xLjQ2LTEuNDgtMC4xMTEtLjEzMS0wLjI2OS0wLjIyOS0wLjM4LTAuMzYtMC4zOC0uNDQ5LTAuODYzLTAuODA4LTEuMjUtMS4yNWE3LjE4LDcuMTgsMCwwLDAtLjc0LTAuNzRjLTAuMjUtLjIxMi0wLjQ1Mi0wLjQ4My0wLjctMC43LTAuMjA3LS4xODItMC4zNy0wLjQyMi0wLjU4LTAuNi0wLjQ3LS40LTAuODkxLTAuODc2LTEuMzMtMS4z'+
			'MWwtMC41MS0uNTNjLTAuMjkyLS4yNDYtMC41MjctMC41NTUtMC44MS0wLjgxYTguMzQ0LDguMzQ0LDAsMCwxLS44LTAuOGMtMC4xNjMtLjE5My0wLjM3NS0wLjM0Ni0wLjU0LTAuNTRhMC44ODEsMC44ODEsMCwwLDEtLjE2LTAuMTYsNS44MTUsNS44MTUsMCwwLDAsLjU2LTAuNTYsMTAuNzQ2LDEwLjc0NiwwLDAsMCwxLjAxLTEuMDFjMC4xNzktLjIuNDEtMC4zNjcsMC41OS0wLjU3LDAuNzE2LS44MDcsMS41NzEtMS40ODcsMi4yOC0yLjNhOC4yNjksOC4yNjksMCwwLDEsLjY5LTAuNjcsNC4yODcsNC4yODcsMCwwLDAsLjM0LTAuMzYsMTMuMTA2LDEzLjEwNiwwLDAsMSwuOTctMC45NGMwLjI0MS'+
			'0uMjI0LjQ0NS0wLjQ5MSwwLjY5LTAuNzEsMC43MzctLjY1NywxLjQtMS40MDgsMi4xLTIuMSwwLjQtLjM5NS43ODItMC44MjUsMS4yLTEuMkE0LjM4LDQuMzgsMCwwLDAsNjUuODIsMzkuOFpNNTIuNjIsNTNsNi43Myw2Ljc0LDEuODcsMS44NywwLjU0LDAuNTRhMS4yLDEuMiwwLDAsMSwuMjMuMjQsMS41NDMsMS41NDMsMCwwLDEtLjI5LjE2Yy0wLjE4Ny4xMDYtLjM3MywwLjIxNS0wLjU3LDAuMzItMC4zNDUuMTg0LS42ODYsMC40MTctMS4wMywwLjYtMC4yNzUuMTQ2LS41NDEsMC4yNzEtMC44MSwwLjQzLTAuNTg3LjM0Ny0xLjIwNiwwLjY3OC0xLjc5LDEuMDMtMC4yNjcuMTYxLS41NDMsMC4y'+
			'Ny0wLjgxLDAuNDMtMC44NDYuNTA4LTEuNzE2LDEtMi42LDEuNDYtMC40NC4yMzEtLjg3LDAuNTMtMS4zMSwwLjc2LTEuMDU0LjU1Mi0yLjA3MiwxLjE2LTMuMSwxLjc0LTIuMjE0LDEuMjUxLTQuNDU2LDIuNDQ3LTYuNjQsMy43My0wLjU5Mi4zNDgtMS4yLDAuNjI1LTEuNzksMC45OC0wLjk2MS41ODEtMS45NywxLjEzMS0yLjk1LDEuNjgtMC41NjkuMzE5LTEuMTgsMC41OTMtMS43MSwwLjk2YTUuMTgsNS4xOCwwLDAsMS0uNTQuMjhjLTAuNDM5LjIzMy0uODcsMC41My0xLjMxLDAuNzYtMC4zNTYuMTg2LS43MDgsMC4zNjktMS4wNCwwLjU4LTAuMzA4LjItLjY1OCwwLjMxNC0wLjk2LDAuNTItMC'+
			'41MzMuMzY0LTEuMTQsMC42NDEtMS43MSwwLjk2YTE0LjM4LDE0LjM4LDAsMCwxLTMuNjgsMS43Myw1LjcxMSw1LjcxMSwwLDAsMS0yLjQ2LDAsMS42ODYsMS42ODYsMCwwLDEtLjU5LTAuMTlaIiBpZD0iU2hhcGVfOV8xIiBkYXRhLW5hbWU9IlNoYXBlIDkgMSIgY2xhc3M9ImNscy0xIi8+Cjwvc3ZnPgo=';
		me._ht_video_video_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_video_file.style[domTransition]='';
				if (me._ht_video_video_file.ggCurrentLogicStateVisible == 0) {
					me._ht_video_video_file.style.visibility="hidden";
					me._ht_video_video_file.ggVisible=false;
				}
				else {
					me._ht_video_video_file.style.visibility=(Number(me._ht_video_video_file.style.opacity)>0||!me._ht_video_video_file.style.opacity)?'inherit':'hidden';
					me._ht_video_video_file.ggVisible=true;
				}
			}
		}
		me._ht_video_video_file.onmouseover=function (e) {
			me._ht_video_video_file__img.style.visibility='hidden';
			me._ht_video_video_file__imgo.style.visibility='inherit';
		}
		me._ht_video_video_file.onmouseout=function (e) {
			me._ht_video_video_file__img.style.visibility='inherit';
			me._ht_video_video_file__imgo.style.visibility='hidden';
		}
		me._ht_video_video_file.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file.appendChild(me._ht_video_video_file);
		el=me._tt_ht_video_file=document.createElement('div');
		els=me._tt_ht_video_file__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_file";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_file.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_video_file.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_file.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_file.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_file.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_video_file.style.top='-47px';
					me._tt_ht_video_file.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_video_file.ggDx=0;
					me._tt_ht_video_file.style.top='24px';
					me._tt_ht_video_file.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_file'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_file.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_file.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_file.style.visibility=(Number(me._tt_ht_video_file.style.opacity)>0||!me._tt_ht_video_file.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_file.ggVisible=true;
				}
				else {
					me._tt_ht_video_file.style.visibility="hidden";
					me._tt_ht_video_file.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_video_file.appendChild(me._tt_ht_video_file);
		me.__div = me._ht_video_file;
	};
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 329px;';
		hs+='position : absolute;';
		hs+='top : 353px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url.onclick=function (e) {
			skin._container_popinfo.style[domTransition]='none';
			skin._container_popinfo.style.visibility=(Number(skin._container_popinfo.style.opacity)>0||!skin._container_popinfo.style.opacity)?'inherit':'hidden';
			skin._container_popinfo.ggVisible=true;
			player.setVariableValue('ScreenBg', true);
			player.stopAutorotate();
			player.setVariableValue('info_title', me.hotspot.title);
			if (
				(
					((me.hotspot.description != ""))
				)
			) {
				player.setVariableValue('info_body', me.hotspot.description);
			}
			player.setVariableValue('CurrentWindow', "PopupInfo");
			player.openUrl("https:\/\/cars.tatamotors.com\/cars\/tiago","_blank");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._cnt_htinfo=document.createElement('div');
		el.ggId="cnt_HtInfo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 75px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 75px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cnt_htinfo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._cnt_htinfo.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['cnt_htinfo'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._cnt_htinfo.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._cnt_htinfo.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._cnt_htinfo.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._cnt_htinfo.ggCurrentLogicStateScaling == 0) {
					me._cnt_htinfo.ggParameter.sx = 1.5;
					me._cnt_htinfo.ggParameter.sy = 1.5;
					me._cnt_htinfo.style[domTransform]=parameterToTransform(me._cnt_htinfo.ggParameter);
				}
				else {
					me._cnt_htinfo.ggParameter.sx = 1;
					me._cnt_htinfo.ggParameter.sy = 1;
					me._cnt_htinfo.style[domTransform]=parameterToTransform(me._cnt_htinfo.ggParameter);
				}
			}
		}
		me._cnt_htinfo.onmouseover=function (e) {
			me.elementMouseOver['cnt_htinfo']=true;
			me._rect_hotanim3.logicBlock_bordercolor();
			me._rect_hotanim2.logicBlock_bordercolor();
			me._cnt_htinfo.logicBlock_scaling();
		}
		me._cnt_htinfo.onmouseout=function (e) {
			me.elementMouseOver['cnt_htinfo']=false;
			me._rect_hotanim3.logicBlock_bordercolor();
			me._rect_hotanim2.logicBlock_bordercolor();
			me._cnt_htinfo.logicBlock_scaling();
		}
		me._cnt_htinfo.ontouchend=function (e) {
			me.elementMouseOver['cnt_htinfo']=false;
			me._rect_hotanim3.logicBlock_bordercolor();
			me._rect_hotanim2.logicBlock_bordercolor();
			me._cnt_htinfo.logicBlock_scaling();
		}
		me._cnt_htinfo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rect_hotanim3=document.createElement('div');
		el.ggId="Rect_HotAnim3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 900px;';
		hs+='border-radius : 900px;';
		hs+='background : rgba(255,255,255,0.196078);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 0 1px 4px rgb(0 0 0 \/ 30%);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rect_hotanim3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rect_hotanim3.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['cnt_htinfo'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rect_hotanim3.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rect_hotanim3.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rect_hotanim3.style[domTransition]='border-color 400ms ease 0ms';
				if (me._rect_hotanim3.ggCurrentLogicStateBorderColor == 0) {
					me._rect_hotanim3.style.borderColor="rgba(85,170,255,1)";
				}
				else {
					me._rect_hotanim3.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._rect_hotanim3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cnt_htinfo.appendChild(me._rect_hotanim3);
		el=me._rect_hotanim2=document.createElement('div');
		el.ggId="Rect_HotAnim2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 900px;';
		hs+='border-radius : 900px;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow: 0 1px 4px rgb(0 0 0 \/ 30%);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rect_hotanim2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rect_hotanim2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rect_hotanim2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rect_hotanim2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rect_hotanim2.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms, opacity 300ms ease 0ms, border-color 400ms ease 0ms';
				if (me._rect_hotanim2.ggCurrentLogicStateScaling == 0) {
					me._rect_hotanim2.ggParameter.sx = 1.35;
					me._rect_hotanim2.ggParameter.sy = 1.35;
					me._rect_hotanim2.style[domTransform]=parameterToTransform(me._rect_hotanim2.ggParameter);
				}
				else {
					me._rect_hotanim2.ggParameter.sx = 1;
					me._rect_hotanim2.ggParameter.sy = 1;
					me._rect_hotanim2.style[domTransform]=parameterToTransform(me._rect_hotanim2.ggParameter);
				}
			}
		}
		me._rect_hotanim2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rect_hotanim2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rect_hotanim2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rect_hotanim2.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms, opacity 300ms ease 0ms, border-color 400ms ease 0ms';
				if (me._rect_hotanim2.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._rect_hotanim2.style.opacity == 0.0) { me._rect_hotanim2.style.visibility="hidden"; } }, 305);
					me._rect_hotanim2.style.opacity=0;
				}
				else {
					me._rect_hotanim2.style.visibility=me._rect_hotanim2.ggVisible?'inherit':'hidden';
					me._rect_hotanim2.style.opacity=1;
				}
			}
		}
		me._rect_hotanim2.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['cnt_htinfo'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rect_hotanim2.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rect_hotanim2.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rect_hotanim2.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms, opacity 300ms ease 0ms, border-color 400ms ease 0ms';
				if (me._rect_hotanim2.ggCurrentLogicStateBorderColor == 0) {
					me._rect_hotanim2.style.borderColor="rgba(85,170,255,1)";
				}
				else {
					me._rect_hotanim2.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._rect_hotanim2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cnt_htinfo.appendChild(me._rect_hotanim2);
		el=me._svg_20=document.createElement('div');
		els=me._svg_20__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjE2LjkzMzJtbSIgeG1sbnM6eG9kbT0iaHR0cDovL3d3dy5jb3JlbC5jb20vY29yZWxkcmF3L29kbS8yMDAzIiBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2'+
			'lvbjsgdGV4dC1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyBpbWFnZS1yZW5kZXJpbmc6b3B0aW1pemVRdWFsaXR5OyBmaWxsLXJ1bGU6ZXZlbm9kZDsgY2xpcC1ydWxlOmV2ZW5vZGQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDc2MS45OCA3NjEuOTgiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxNi45MzMybW0iIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGRlZnM+CiAgPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwogICAgLmZpbDAge2ZpbGw6I0ZFRkVGRX0mI3hkOwogICAgLmZpbDEge2ZpbGw6IzAwMDAwMDtmaWxsLXJ1bGU6bm9uemVy'+
			'b30mI3hkOwogICA8L3N0eWxlPgogPC9kZWZzPgogPGcgaWQ9IkxheWVyX3gwMDIwXzEiPgogIDxtZXRhZGF0YSBpZD0iQ29yZWxDb3JwSURfMENvcmVsLUxheWVyIi8+CiAgPGcgaWQ9Il8xNzY4MDM3MTQxNTA0Ij4KICAgPHBhdGggZD0iTTIyMy4yOSA1NDAuNDNjMjAuNCwtNS4zIDM5LjIsLTEwIDU3LjgyLC0xNS4yNSA1LjI3LC0xLjQyIDkuMzMsLTAuNjUgMTMuOTgsMi4wMyAzNS4yNywyMC4zMiA3My4wNSwyNy45MiAxMTMuNDMsMjEuNDEgOTIuOTcsLTE0LjkgMTU2LjY3LC0xMDEuOTEgMTQyLjQ0LC0xOTQuNTEgLTE0Ljc3LC05Ni4wMyAtMTA0Ljc3LC0xNjAuNDMgLTE5OS45LC0xNDIuOT'+
			'kgLTExNS4wOCwyMS4xMyAtMTc2LjE3LDE0OS40MiAtMTE4Ljk0LDI1MS4wMSA2LjM0LDExLjI2IDguMDgsMjAuNTQgMy44MiwzMi41MiAtNS4wOCwxNC40MSAtOC4yMiwyOS40NCAtMTIuNjUsNDUuNzh6bS00Ny43IDQ3LjA1YzIuMywtOC45MiA0LjMyLC0xNi42NiA2LjQsLTI0LjQyIDYuOCwtMjQuODEgMTMuNzcsLTQ5LjU3IDIwLjIxLC03NC40MyAwLjkzLC0zLjcxIDAuNTQsLTguNjMgLTEuMjIsLTExLjk3IC02My4wMiwtMTIwLjEgMi4wMiwtMjY1LjQ5IDEzNC4yNCwtMjk2LjUzIDEyMC4wOSwtMjguMTYgMjI4LjA1LDUyLjkgMjQ3Ljc1LDE2MS4zIDIwLjUsMTEzLjA1IC01My40NCwyMjAu'+
			'NDcgLTE2NS42LDI0MC4xIC00NC42LDcuNjkgLTg3LjIxLDEuMTQgLTEyNy45MywtMTguNjUgLTMuNjEsLTEuNzkgLTguNzMsLTIuMjggLTEyLjU5LC0xLjM1IC01NC4yNCwxMy41OSAtOTAuMzMsMjMuODIgLTEwMS4yNiwyNS45NXoiIGNsYXNzPSJmaWwwIi8+CiAgIDxnPgogICAgPHBhdGggZD0iTTUzMi4zOCAzNzkuNjZjMCw4My4xNyAtNjcuNDIsMTUwLjU3IC0xNTAuNTgsMTUwLjU3IC04My4xNiwwIC0xNTAuNTgsLTY3LjQgLTE1MC41OCwtMTUwLjU3IDAsLTgzLjE2IDY3LjQyLC0xNTAuNTggMTUwLjU4LC0xNTAuNTggODMuMTYsMCAxNTAuNTgsNjcuNDIgMTUwLjU4LDE1MC41OHoiIGNsYX'+
			'NzPSJmaWwxIi8+CiAgICA8cGF0aCBkPSJNNDEzLjkgMzU0LjU4Yy0xMC44OCwzNi4yOCAtNjEuNjksMTM2LjA4IC0zMS40NSwxMjAuOTZsMjQuMTkgLTEzLjMxYzAsMCAzLjYzLC0yLjQyIDQuNTQsMS4yMSAwLjkxLDMuNjMgMS40Myw1Ljk3IDEuNDMsNS45NyAwLDAgMC42MSwyLjA0IC0yLjU3LDQuMzggLTMuMTcsMi4zNSAtNjQuMTEsNDYuMjcgLTc2LjgxLDI3LjIyIC0xNywtMjUuNSA1Ny4wNywtMTU2LjkxIDI1LjQxLC0xNDQuMjUgLTEuNjIsMC42NSAtMTkuNjIsOS40NiAtMjguMDcsMTIuNzMgLTEuNzEsMC42NyAtMi4yOCwxLjIgLTMuMjEsLTEuMDMgLTAuNTYsLTEuMzQgLTEuMzYsLTMu'+
			'MTUgLTEuODEsLTQuMTQgLTEuMzYsLTIuOTkgLTEuNDYsLTIuNTkgMC45NSwtMy45OCAxNy4yNSwtOS45IDEwNy40LC03Mi40MiA4Ny40LC01Ljc2em0wLjMzIC0xMDEuMDVjMTMuNywwIDI0LjgsMTEuMSAyNC44LDI0LjggMCwxMy42OSAtMTEuMSwyNC43OSAtMjQuOCwyNC43OSAtMTMuNjksMCAtMjQuNzksLTExLjEgLTI0Ljc5LC0yNC43OSAwLC0xMy43IDExLjEsLTI0LjggMjQuNzksLTI0Ljh6IiBjbGFzcz0iZmlsMCIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._svg_20__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_20__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgMjAyMCAoNjQtQml0KSAtLT4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjE2LjkzMzJtbSIgeG1sbnM6eG9kbT0iaHR0cDovL3d3dy5jb3JlbC5jb20vY29yZWxkcmF3L29kbS8yMDAzIiBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2'+
			'lvbjsgdGV4dC1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyBpbWFnZS1yZW5kZXJpbmc6b3B0aW1pemVRdWFsaXR5OyBmaWxsLXJ1bGU6ZXZlbm9kZDsgY2xpcC1ydWxlOmV2ZW5vZGQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDc2MS45OCA3NjEuOTgiIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxNi45MzMybW0iIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGRlZnM+CiAgPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwogICAgLmZpbDAge2ZpbGw6I0ZFRkVGRX0mI3hkOwogICAgLmZpbDEge2ZpbGw6IzU1YWFmZjtmaWxsLXJ1bGU6bm9uemVy'+
			'b30mI3hkOwogICA8L3N0eWxlPgogPC9kZWZzPgogPGcgaWQ9IkxheWVyX3gwMDIwXzEiPgogIDxtZXRhZGF0YSBpZD0iQ29yZWxDb3JwSURfMENvcmVsLUxheWVyIi8+CiAgPGcgaWQ9Il8xNzY4MDM3MTQxNTA0Ij4KICAgPHBhdGggZD0iTTIyMy4yOSA1NDAuNDNjMjAuNCwtNS4zIDM5LjIsLTEwIDU3LjgyLC0xNS4yNSA1LjI3LC0xLjQyIDkuMzMsLTAuNjUgMTMuOTgsMi4wMyAzNS4yNywyMC4zMiA3My4wNSwyNy45MiAxMTMuNDMsMjEuNDEgOTIuOTcsLTE0LjkgMTU2LjY3LC0xMDEuOTEgMTQyLjQ0LC0xOTQuNTEgLTE0Ljc3LC05Ni4wMyAtMTA0Ljc3LC0xNjAuNDMgLTE5OS45LC0xNDIuOT'+
			'kgLTExNS4wOCwyMS4xMyAtMTc2LjE3LDE0OS40MiAtMTE4Ljk0LDI1MS4wMSA2LjM0LDExLjI2IDguMDgsMjAuNTQgMy44MiwzMi41MiAtNS4wOCwxNC40MSAtOC4yMiwyOS40NCAtMTIuNjUsNDUuNzh6bS00Ny43IDQ3LjA1YzIuMywtOC45MiA0LjMyLC0xNi42NiA2LjQsLTI0LjQyIDYuOCwtMjQuODEgMTMuNzcsLTQ5LjU3IDIwLjIxLC03NC40MyAwLjkzLC0zLjcxIDAuNTQsLTguNjMgLTEuMjIsLTExLjk3IC02My4wMiwtMTIwLjEgMi4wMiwtMjY1LjQ5IDEzNC4yNCwtMjk2LjUzIDEyMC4wOSwtMjguMTYgMjI4LjA1LDUyLjkgMjQ3Ljc1LDE2MS4zIDIwLjUsMTEzLjA1IC01My40NCwyMjAu'+
			'NDcgLTE2NS42LDI0MC4xIC00NC42LDcuNjkgLTg3LjIxLDEuMTQgLTEyNy45MywtMTguNjUgLTMuNjEsLTEuNzkgLTguNzMsLTIuMjggLTEyLjU5LC0xLjM1IC01NC4yNCwxMy41OSAtOTAuMzMsMjMuODIgLTEwMS4yNiwyNS45NXoiIGNsYXNzPSJmaWwwIi8+CiAgIDxnPgogICAgPHBhdGggZD0iTTUzMi4zOCAzNzkuNjZjMCw4My4xNyAtNjcuNDIsMTUwLjU3IC0xNTAuNTgsMTUwLjU3IC04My4xNiwwIC0xNTAuNTgsLTY3LjQgLTE1MC41OCwtMTUwLjU3IDAsLTgzLjE2IDY3LjQyLC0xNTAuNTggMTUwLjU4LC0xNTAuNTggODMuMTYsMCAxNTAuNTgsNjcuNDIgMTUwLjU4LDE1MC41OHoiIGNsYX'+
			'NzPSJmaWwxIi8+CiAgICA8cGF0aCBkPSJNNDEzLjkgMzU0LjU4Yy0xMC44OCwzNi4yOCAtNjEuNjksMTM2LjA4IC0zMS40NSwxMjAuOTZsMjQuMTkgLTEzLjMxYzAsMCAzLjYzLC0yLjQyIDQuNTQsMS4yMSAwLjkxLDMuNjMgMS40Myw1Ljk3IDEuNDMsNS45NyAwLDAgMC42MSwyLjA0IC0yLjU3LDQuMzggLTMuMTcsMi4zNSAtNjQuMTEsNDYuMjcgLTc2LjgxLDI3LjIyIC0xNywtMjUuNSA1Ny4wNywtMTU2LjkxIDI1LjQxLC0xNDQuMjUgLTEuNjIsMC42NSAtMTkuNjIsOS40NiAtMjguMDcsMTIuNzMgLTEuNzEsMC42NyAtMi4yOCwxLjIgLTMuMjEsLTEuMDMgLTAuNTYsLTEuMzQgLTEuMzYsLTMu'+
			'MTUgLTEuODEsLTQuMTQgLTEuMzYsLTIuOTkgLTEuNDYsLTIuNTkgMC45NSwtMy45OCAxNy4yNSwtOS45IDEwNy40LC03Mi40MiA4Ny40LC01Ljc2em0wLjMzIC0xMDEuMDVjMTMuNywwIDI0LjgsMTEuMSAyNC44LDI0LjggMCwxMy42OSAtMTEuMSwyNC43OSAtMjQuOCwyNC43OSAtMTMuNjksMCAtMjQuNzksLTExLjEgLTI0Ljc5LC0yNC43OSAwLC0xMy43IDExLjEsLTI0LjggMjQuNzksLTI0Ljh6IiBjbGFzcz0iZmlsMCIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._svg_20__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Svg 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_20.onmouseover=function (e) {
			me._svg_20__img.style.visibility='hidden';
			me._svg_20__imgo.style.visibility='inherit';
		}
		me._svg_20.onmouseout=function (e) {
			me._svg_20__img.style.visibility='inherit';
			me._svg_20__imgo.style.visibility='hidden';
		}
		me._svg_20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cnt_htinfo.appendChild(me._svg_20);
		me._ht_url.appendChild(me._cnt_htinfo);
		me.__div = me._ht_url;
	};
	function SkinHotspotClass_ht_url1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url1=document.createElement('div');
		el.ggId="ht_url1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url1.style[domTransition]='';
				if (me._ht_url1.ggCurrentLogicStateVisible == 0) {
					me._ht_url1.style.visibility="hidden";
					me._ht_url1.ggVisible=false;
				}
				else {
					me._ht_url1.style.visibility=(Number(me._ht_url1.style.opacity)>0||!me._ht_url1.style.opacity)?'inherit':'hidden';
					me._ht_url1.ggVisible=true;
				}
			}
		}
		me._ht_url1.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
				me._web_page.ggText="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\"><\/iframe>";
				me._web_page.ggTextDiv.innerHTML=me._web_page.ggText;
				if (me._web_page.ggUpdateText) {
					me._web_page.ggUpdateText=function() {
						var hs="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\"><\/iframe>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				if (me._web_page.ggUpdatePosition) {
					me._web_page.ggUpdatePosition();
				}
				me._web_page.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
				player.setVariableValue('vis_website', true);
			}
			if (
				(
					((player.getVariableValue('opt_url') == false)) || 
					((player.getHasTouch() == true))
				)
			) {
				player.openUrl(me.hotspot.url,me.hotspot.target);
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url1.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url1']=true;
			me._tt_ht_url.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_url1']=false;
			me._tt_ht_url.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url1.ontouchend=function (e) {
			me.elementMouseOver['ht_url1']=false;
			me._tt_ht_url.logicBlock_visible();
		}
		me._ht_url1.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_image=document.createElement('div');
		els=me._ht_url_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTkwLjgsNDE0LjNoMTMuN3YtMTVoLTE2LjNDLTE5My4zLDQwNC43LTE5Mi4zLDQwOS44LTE5MC44LDQxNC4zeiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE5My41LDM5NC43aDE2LjN2LTE1aC0xMy43Qy0xOTIuMywzODQuMi0xOTMuMywzODkuMy0xOTMuNSwzOTQuN3oiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xODkuMSwzNzUuMmgxMS45di0xMS45Qy0xODEuOSwzNjQuNC0xODYuMSwzNjguOC0xODkuMSwzNzUuMnoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNzcuMiw0MzAuN3YtMTEuOWgt'+
			'MTEuOUMtMTg2LjEsNDI1LjItMTgxLjksNDI5LjYtMTc3LjIsNDMwLjd6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTk1LjYsMzc5LjdoLTguNWMtMi42LDQuNS00LjMsOS42LTQuNiwxNWgxMC44Qy0xOTcuOCwzODkuMy0xOTcsMzg0LjMtMTk1LjYsMzc5Ljd6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTQ4LjksMzc1LjJjLTMuMy00LTcuNi03LjItMTIuNC05LjNjMi4xLDIuNiwzLjksNS43LDUuNCw5LjNILTE0OC45eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTIwMC45LDQxOC44YzMuMywzLjksNy40LDcuMSwxMi4xLDkuMmMtMi4xLTIuNS0zLj'+
			'gtNS42LTUuMy05LjJILTIwMC45eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE4OC44LDM2NmMtNC43LDIuMS04LjksNS4zLTEyLjIsOS4yaDYuOUMtMTkyLjYsMzcxLjctMTkwLjksMzY4LjYtMTg4LjgsMzY2eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE5OCwzOTkuMmgtMTAuOGMwLjQsNS41LDIsMTAuNiw0LjcsMTVoOC41Qy0xOTcsNDA5LjctMTk3LjgsNDA0LjctMTk4LDM5OS4yeiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2'+
			'LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOXomI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7IE0tMTc0LjksNDM1LjRjMCwwLTAuMSwwLTAuMSwwYy0wLjEsMC0wLjIsMC0wLjQsMGMtMjEtMC4yLTM4LTE3LjQtMzgtMzguNGMwLTIxLjIsMTcuMi0zOC40LDM4LjQtMzguNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMjEuMiwwLDM4LjQsMTcuMiwzOC40LDM4LjRDLTEzNi41LDQxOC4yLTE1My43LDQzNS40LTE3NC45LDQzNS40eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE2MS4zLDQyOC4xYzQuOC0yLjEsOS01LjMsMTIuNC05LjNoLTdDLTE1Ny40LDQyMi40LTE1OS4yLDQyNS'+
			'41LTE2MS4zLDQyOC4xeiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE1NC40LDQxNC4zaDguNmMyLjctNC41LDQuMy05LjYsNC43LTE1aC0xMUMtMTUyLjIsNDA0LjctMTUzLDQwOS43LTE1NC40LDQxNC4zeiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE3Mi43LDM2My4zdjExLjloMTEuN0MtMTYzLjksMzY4LjktMTY4LDM2NC41LTE3Mi43LDM2My4zeiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE1MiwzOTQuN2gxMWMtMC40LTUuNS0yLTEwLjYtNC43LTE1aC04LjZDLTE1MywzODQuMy0xNTIuMiwzODkuMy0xNTIsMzk0Ljd6IiBmaWxsPSIjMDAwMDAw'+
			'Ii8+CiAgIDxwYXRoIGQ9Ik0tMTcyLjcsNDE4Ljh2MTEuOWM0LjYtMS4xLDguOC01LjUsMTEuNy0xMS45Qy0xNjAuOSw0MTguOC0xNzIuNyw0MTguOC0xNzIuNyw0MTguOHoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNTkuMiwzNzkuN2gtMTMuNXYxNWgxNi4xQy0xNTYuNywzODkuMy0xNTcuNywzODQuMi0xNTkuMiwzNzkuN3oiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNTYuNSwzOTkuMmgtMTYuMXYxNWgxMy41Qy0xNTcuNyw0MDkuOC0xNTYuNyw0MDQuNy0xNTYuNSwzOTkuMnoiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMi'+
			'I+CiAgPHBhdGggZD0iTS0xMzYuNSwzOTdjMC0yMS4yLTE3LjItMzguNC0zOC40LTM4LjRjLTIxLjIsMC0zOC40LDE3LjItMzguNCwzOC40YzAsMjEuMSwxNywzOC4yLDM4LDM4LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjEsMCwwLjIsMCwwLjQsMGMwLDAsMC4xLDAsMC4xLDBDLTE1My43LDQzNS40LTEzNi41LDQxOC4yLTEzNi41LDM5N3ogTS0yMDguOCwzOTkuMmgxMC44YzAuMiw1LjQsMSwxMC41LDIuMywxNWgtOC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTIwNi44LDQwOS44LTIwOC40LDQwNC43LTIwOC44LDM5OS4yeiBNLTE0MS4xLDM5NC43aC0xMWMtMC4yLTUuNC0xLTEwLjUtMi4zLTE1'+
			'aDguNkMtMTQzLjEsMzg0LjItMTQxLjQsMzg5LjMtMTQxLjEsMzk0Ljd6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xNTYuNSwzOTQuN2gtMTYuMXYtMTVoMTMuNUMtMTU3LjcsMzg0LjItMTU2LjcsMzg5LjMtMTU2LjUsMzk0Ljd6IE0tMTcyLjcsMzc1LjJ2LTExLjljNC42LDEuMSw4LjgsNS41LDExLjcsMTEuOUwtMTcyLjcsMzc1LjImI3hkOyYjeGE7JiN4OTsmI3g5O0wtMTcyLjcsMzc1LjJ6IE0tMTc3LjIsMzYzLjN2MTEuOWgtMTEuOUMtMTg2LjEsMzY4LjgtMTgxLjksMzY0LjQtMTc3LjIsMzYzLjN6IE0tMTc3LjIsMzc5Ljd2MTVoLTE2LjNjMC4yLTUuNCwxLjEtMTAuNSwyLjYtMTUmI3hkOy'+
			'YjeGE7JiN4OTsmI3g5O0wtMTc3LjIsMzc5LjdMLTE3Ny4yLDM3OS43eiBNLTE5OCwzOTQuN2gtMTAuOGMwLjQtNS41LDItMTAuNiw0LjYtMTVoOC41Qy0xOTcsMzg0LjMtMTk3LjgsMzg5LjMtMTk4LDM5NC43eiBNLTE5My41LDM5OS4yaDE2LjMmI3hkOyYjeGE7JiN4OTsmI3g5O3YxNWgtMTMuN0MtMTkyLjMsNDA5LjgtMTkzLjMsNDA0LjctMTkzLjUsMzk5LjJ6IE0tMTc3LjIsNDE4Ljh2MTEuOWMtNC43LTEuMS04LjktNS41LTExLjktMTEuOUgtMTc3LjJ6IE0tMTcyLjcsNDMwLjZ2LTExLjloMTEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNjMuOSw0MjUuMS0xNjgsNDI5LjUtMTcyLjcsNDMw'+
			'LjZ6IE0tMTcyLjcsNDE0LjN2LTE1aDE2LjFjLTAuMiw1LjQtMS4xLDEwLjYtMi42LDE1SC0xNzIuN3ogTS0xNTIsMzk5LjJoMTEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDUuNS0yLDEwLjYtNC43LDE1aC04LjZDLTE1Myw0MDkuNy0xNTIuMiw0MDQuNy0xNTIsMzk5LjJ6IE0tMTQ4LjksMzc1LjJoLTdjLTEuNS0zLjYtMy4zLTYuOC01LjQtOS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE1Ni41LDM2OC0xNTIuMiwzNzEuMi0xNDguOSwzNzUuMnogTS0xODguOCwzNjZjLTIuMSwyLjUtMy44LDUuNy01LjMsOS4yaC02LjlDLTE5Ny43LDM3MS4zLTE5My41LDM2OC4xLTE4OC44LDM2NnomI3hkOy'+
			'YjeGE7JiN4OTsmI3g5OyBNLTIwMC45LDQxOC44aDYuOWMxLjQsMy41LDMuMiw2LjYsNS4zLDkuMkMtMTkzLjUsNDI1LjgtMTk3LjYsNDIyLjctMjAwLjksNDE4Ljh6IE0tMTYxLjMsNDI4LjFjMi4xLTIuNiwzLjktNS43LDUuNC05LjNoNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNTIuMyw0MjIuNy0xNTYuNSw0MjUuOS0xNjEuMyw0MjguMXoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTkyLjYsNDE2LjJoMTUuMnYtMTYuN2gtMTguMUMtMTk1LjMsNDA1LjUtMTk0LjIsNDExLjItMTkyLjYsNDE2LjJ6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTk1LjUsMzk0LjVoMTguMXYtMTYuN2gtMTUuMkMtMTk0LjMsMzgyLjgtMTk1LjMsMzg4LjUtMTk1LjUsMzk0LjV6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTkwLjYsMzcyLjhoMTMuMnYtMTMuMkMtMTgyLjYsMzYwLjctMTg3LjMsMzY1LjctMTkwLjYsMzcyLjh6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTc3LjQsNDM0LjR2LTEz'+
			'LjJoLTEzLjJDLTE4Ny4zLDQyOC4zLTE4Mi42LDQzMy4yLTE3Ny40LDQzNC40eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE5Ny45LDM3Ny44aC05LjRjLTIuOSw0LjktNC44LDEwLjYtNS4yLDE2LjdoMTJDLTIwMC4zLDM4OC41LTE5OS40LDM4Mi44LTE5Ny45LDM3Ny44eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE0NiwzNzIuOGMtMy43LTQuNC04LjQtOC0xMy44LTEwLjRjMi4zLDIuOCw0LjQsNi4zLDYsMTAuNEgtMTQ2eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTIwMy44LDQyMS4yYzMuNiw0LjMsOC4yLDcuOCwxMy41LDEwLjJjLTIuMy0yLj'+
			'gtNC4zLTYuMy01LjgtMTAuMkgtMjAzLjh6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTkwLjMsMzYyLjZjLTUuMiwyLjQtOS45LDUuOS0xMy41LDEwLjJoNy42Qy0xOTQuNiwzNjguOS0xOTIuNiwzNjUuNC0xOTAuMywzNjIuNnoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0yMDAuNSwzOTkuNWgtMTJjMC40LDYuMSwyLjIsMTEuOCw1LjIsMTYuN2g5LjRDLTE5OS40LDQxMS4xLTIwMC4zLDQwNS41LTIwMC41LDM5OS41eiIgZmlsbD0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYy'+
			'LjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40Uy0xNDAuNiwzMzQuNi0xNzUsMzM0LjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7eiBNLTE3NC45LDQzOS43YzAsMC0wLjEsMC0wLjEsMGMtMC4xLDAtMC4zLDAtMC40LDBjLTIzLjMtMC4zLTQyLjItMTkuMy00Mi4yLTQyLjdjMC0yMy42LDE5LjItNDIuNyw0Mi43LTQyLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIzLjYsMCw0Mi43LDE5LjIsNDIuNyw0Mi43Qy0xMzIuMiw0MjAuNS0xNTEuMyw0MzkuNy0xNzQuOSw0MzkuN3oiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNTkuOCw0MzEuNWM1LjMtMi40LDEwLTUuOSwxMy43LT'+
			'EwLjNoLTcuOEMtMTU1LjQsNDI1LjItMTU3LjUsNDI4LjctMTU5LjgsNDMxLjV6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTUyLjEsNDE2LjJoOS42YzMtNSw0LjgtMTAuNiw1LjItMTYuN2gtMTIuMkMtMTQ5LjcsNDA1LjUtMTUwLjYsNDExLjEtMTUyLjEsNDE2LjJ6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTcyLjQsMzU5LjZ2MTMuMmgxM0MtMTYyLjYsMzY1LjctMTY3LjMsMzYwLjgtMTcyLjQsMzU5LjZ6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTQ5LjUsMzk0LjVoMTIuMmMtMC40LTYuMS0yLjItMTEuNy01LjItMTYuN2gtOS42Qy0xNTAu'+
			'NiwzODIuOC0xNDkuNywzODguNS0xNDkuNSwzOTQuNXoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNzIuNCw0MjEuMnYxMy4yYzUuMS0xLjIsOS44LTYuMSwxMy0xMy4yQy0xNTkuNCw0MjEuMi0xNzIuNCw0MjEuMi0xNzIuNCw0MjEuMnoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNTcuNCwzNzcuOGgtMTV2MTYuN2gxNy45Qy0xNTQuNywzODguNS0xNTUuOCwzODIuOC0xNTcuNCwzNzcuOHoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNTQuNSwzOTkuNWgtMTcuOXYxNi43aDE1Qy0xNTUuOCw0MTEuMi0xNTQuNyw0MDUuNS0xNTQuNSwzOTkuNXoiIG'+
			'ZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xMzIuMiwzOTdjMC0yMy42LTE5LjItNDIuNy00Mi43LTQyLjdjLTIzLjYsMC00Mi43LDE5LjItNDIuNyw0Mi43YzAsMjMuNCwxOC45LDQyLjQsNDIuMiw0Mi43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xLDAsMC4zLDAsMC40LDBjMCwwLDAuMSwwLDAuMSwwQy0xNTEuMyw0MzkuNy0xMzIuMiw0MjAuNS0xMzIuMiwzOTd6IE0tMjEyLjUsMzk5LjVoMTJjMC4yLDYsMS4xLDExLjcsMi42LDE2LjdoLTkuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0yMTAuMyw0MTEuMi0yMTIuMSw0MDUuNi0yMTIu'+
			'NSwzOTkuNXogTS0xMzcuMywzOTQuNWgtMTIuMmMtMC4yLTYtMS4xLTExLjYtMi42LTE2LjdoOS42Qy0xMzkuNSwzODIuOC0xMzcuNywzODguNC0xMzcuMywzOTQuNXomI3hkOyYjeGE7JiN4OTsmI3g5OyBNLTE1NC41LDM5NC41aC0xNy45di0xNi43aDE1Qy0xNTUuOCwzODIuOC0xNTQuNywzODguNS0xNTQuNSwzOTQuNXogTS0xNzIuNCwzNzIuOHYtMTMuMmM1LjIsMS4yLDkuOCw2LjIsMTMsMTMuMkwtMTcyLjQsMzcyLjgmI3hkOyYjeGE7JiN4OTsmI3g5O0wtMTcyLjQsMzcyLjh6IE0tMTc3LjQsMzU5LjZ2MTMuMmgtMTMuMkMtMTg3LjMsMzY1LjctMTgyLjYsMzYwLjctMTc3LjQsMzU5LjZ6IE'+
			'0tMTc3LjQsMzc3Ljh2MTYuN2gtMTguMWMwLjItNiwxLjMtMTEuNywyLjktMTYuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7TC0xNzcuNCwzNzcuOEwtMTc3LjQsMzc3Ljh6IE0tMjAwLjUsMzk0LjVoLTEyYzAuNC02LjEsMi4yLTExLjcsNS4yLTE2LjdoOS40Qy0xOTkuNCwzODIuOC0yMDAuMywzODguNS0yMDAuNSwzOTQuNXomI3hkOyYjeGE7JiN4OTsmI3g5OyBNLTE5NS41LDM5OS41aDE4LjF2MTYuN2gtMTUuMkMtMTk0LjIsNDExLjItMTk1LjMsNDA1LjUtMTk1LjUsMzk5LjV6IE0tMTc3LjQsNDIxLjJ2MTMuMmMtNS4yLTEuMi05LjktNi4xLTEzLjItMTMuMkgtMTc3LjR6JiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsgTS0xNzIuNCw0MzQuNHYtMTMuMmgxM0MtMTYyLjcsNDI4LjItMTY3LjMsNDMzLjEtMTcyLjQsNDM0LjR6IE0tMTcyLjQsNDE2LjJ2LTE2LjdoMTcuOWMtMC4yLDYtMS4zLDExLjctMi45LDE2LjdILTE3Mi40eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTQ5LjUsMzk5LjVoMTIuMmMtMC40LDYuMS0yLjIsMTEuOC01LjIsMTYuN2gtOS42Qy0xNTAuNiw0MTEuMS0xNDkuNyw0MDUuNS0xNDkuNSwzOTkuNXogTS0xNDYsMzcyLjhoLTcuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xLjYtNC0zLjYtNy41LTYtMTAuNEMtMTU0LjQsMzY0LjgtMTQ5LjcsMzY4LjQtMTQ2LDM3Mi44eiBNLTE5MC4zLD'+
			'M2Mi42Yy0yLjMsMi44LTQuMyw2LjMtNS45LDEwLjJoLTcuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0yMDAuMiwzNjguNC0xOTUuNiwzNjQuOS0xOTAuMywzNjIuNnogTS0yMDMuOCw0MjEuMmg3LjZjMS42LDMuOSwzLjYsNy40LDUuOSwxMC4yQy0xOTUuNiw0MjktMjAwLjIsNDI1LjUtMjAzLjgsNDIxLjJ6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xNTkuOCw0MzEuNWMyLjMtMi44LDQuMy02LjMsNi0xMC4zaDcuOEMtMTQ5LjcsNDI1LjYtMTU0LjQsNDI5LjItMTU5LjgsNDMxLjV6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_url_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_url_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_image.style[domTransition]='';
				if (me._ht_url_image.ggCurrentLogicStateVisible == 0) {
					me._ht_url_image.style.visibility="hidden";
					me._ht_url_image.ggVisible=false;
				}
				else {
					me._ht_url_image.style.visibility=(Number(me._ht_url_image.style.opacity)>0||!me._ht_url_image.style.opacity)?'inherit':'hidden';
					me._ht_url_image.ggVisible=true;
				}
			}
		}
		me._ht_url_image.onmouseover=function (e) {
			me._ht_url_image__img.style.visibility='hidden';
			me._ht_url_image__imgo.style.visibility='inherit';
		}
		me._ht_url_image.onmouseout=function (e) {
			me._ht_url_image__img.style.visibility='inherit';
			me._ht_url_image__imgo.style.visibility='hidden';
		}
		me._ht_url_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_url1.appendChild(me._ht_url_image);
		el=me._tt_ht_url=document.createElement('div');
		els=me._tt_ht_url__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_url";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_url.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_url.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_url.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_url.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_url.style.top='-47px';
					me._tt_ht_url.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_url.ggDx=0;
					me._tt_ht_url.style.top='24px';
					me._tt_ht_url.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_url1'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_url.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_url.style.visibility=(Number(me._tt_ht_url.style.opacity)>0||!me._tt_ht_url.style.opacity)?'inherit':'hidden';
					me._tt_ht_url.ggVisible=true;
				}
				else {
					me._tt_ht_url.style.visibility="hidden";
					me._tt_ht_url.ggVisible=false;
				}
			}
		}
		me._tt_ht_url.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_url1.appendChild(me._tt_ht_url);
		el=me._ht_url_customimage=document.createElement('div');
		els=me._ht_url_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_url_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_url_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_customimage.style[domTransition]='';
				if (me._ht_url_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_url_customimage.style.visibility="hidden";
					me._ht_url_customimage__img.src = '';
					me._ht_url_customimage.ggVisible=false;
				}
				else {
					me._ht_url_customimage.style.visibility=(Number(me._ht_url_customimage.style.opacity)>0||!me._ht_url_customimage.style.opacity)?'inherit':'hidden';
					me._ht_url_customimage.ggSubElement.src=me._ht_url_customimage.ggText;
					me._ht_url_customimage.ggVisible=true;
				}
			}
		}
		me._ht_url_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_url_customimage.clientWidth;
			var parentHeight = me._ht_url_customimage.clientHeight;
			var img = me._ht_url_customimage__img;
			var aspectRatioDiv = me._ht_url_customimage.clientWidth / me._ht_url_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_url1.appendChild(me._ht_url_customimage);
		el=me._screen_tint_url=document.createElement('div');
		el.ggId="screen_tint_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -2.14748e+07%;';
		hs+='position : absolute;';
		hs+='top : -2.14748e+07%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screen_tint_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._screen_tint_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screen_tint_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screen_tint_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screen_tint_url.style[domTransition]='';
				if (me._screen_tint_url.ggCurrentLogicStateVisible == 0) {
					me._screen_tint_url.style.visibility=(Number(me._screen_tint_url.style.opacity)>0||!me._screen_tint_url.style.opacity)?'inherit':'hidden';
					me._screen_tint_url.ggVisible=true;
				}
				else {
					me._screen_tint_url.style.visibility="hidden";
					me._screen_tint_url.ggVisible=false;
				}
			}
		}
		me._screen_tint_url.onclick=function (e) {
			player.setVariableValue('vis_website', false);
		}
		me._screen_tint_url.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url1.appendChild(me._screen_tint_url);
		el=me._web_page=document.createElement('div');
		els=me._web_page__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="web_page";
		el.ggDx=-2.14748e+07;
		el.ggDy=-2.14748e+07;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 90%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._web_page.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._web_page.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._web_page.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._web_page.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._web_page.style[domTransition]='';
				if (me._web_page.ggCurrentLogicStateVisible == 0) {
					me._web_page.style.visibility=(Number(me._web_page.style.opacity)>0||!me._web_page.style.opacity)?'inherit':'hidden';
					me._web_page.ggVisible=true;
				}
				else {
					me._web_page.style.visibility="hidden";
					me._web_page.ggVisible=false;
				}
			}
		}
		me._web_page.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._ht_url1.appendChild(me._web_page);
		el=me._close_url=document.createElement('div');
		els=me._close_url__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTExMy40LDM3OS4yLTEzNS4zLDM1Ny4zeiBNLTE0NS44LDQxMi43YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4x'+
			'LTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTUuNywxNS43TC0xNDUuOCw0MTIuN3oiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KID'+
			'xnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE2MS42LDM5Ni45bDE1LjgsMTUuOGMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMtMC4zLTAuNC0wLjYtMC40'+
			'LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuOCwxNS44bDE1LjctMTUuN2MwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRMLTE2MS42LDM5Ni45eiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._close_url__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._close_url__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTEwNi41LDM3Ny4zLTEzMC45LDM1Mi45eiBNLTE0Mi41LDQxNC41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNmMtMC42LDAtMS0w'+
			'LjEtMS4zLTAuNGwtMTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTE3LjQsMTcuNEwtMTQyLjUsNDE0LjV6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMi'+
			'I+CiAgPHBhdGggZD0iTS0xNjAuMSwzOTYuOWwxNy41LDE3LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4x'+
			'LTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN0wtMTYwLjEsMzk2Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._close_url__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="close_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : -545px;';
		hs+='top : -45px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._close_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._close_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._close_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._close_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._close_url.style[domTransition]='';
				if (me._close_url.ggCurrentLogicStateVisible == 0) {
					me._close_url.style.visibility=(Number(me._close_url.style.opacity)>0||!me._close_url.style.opacity)?'inherit':'hidden';
					me._close_url.ggVisible=true;
				}
				else {
					me._close_url.style.visibility="hidden";
					me._close_url.ggVisible=false;
				}
			}
		}
		me._close_url.onclick=function (e) {
			player.setVariableValue('vis_website', false);
			me._web_page.ggText="";
			me._web_page.ggTextDiv.innerHTML=me._web_page.ggText;
			if (me._web_page.ggUpdateText) {
				me._web_page.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._web_page.ggUpdatePosition) {
				me._web_page.ggUpdatePosition();
			}
			me._web_page.ggTextDiv.scrollTop = 0;
		}
		me._close_url.onmouseover=function (e) {
			me._close_url__img.style.visibility='hidden';
			me._close_url__imgo.style.visibility='inherit';
		}
		me._close_url.onmouseout=function (e) {
			me._close_url__img.style.visibility='inherit';
			me._close_url__imgo.style.visibility='hidden';
		}
		me._close_url.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url1.appendChild(me._close_url);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_url1;
	};
	function SkinHotspotClass_ht_info_2(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info_2=document.createElement('div');
		el.ggId="ht_info 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 52px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info_2.onclick=function (e) {
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_popup_2', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_2.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_2.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info_2']=true;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_2.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info_2']=false;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_2.ontouchend=function (e) {
			me.elementMouseOver['ht_info_2']=false;
			me._tt_information.logicBlock_visible();
		}
		me._ht_info_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image=document.createElement('div');
		els=me._ht_info_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE3OC4xLDM2MS4xbDYuMiwwYzMuNSwwLDYuNCwyLjksNi40LDYuNHYyLjljMCwzLjUtMi45LDYuNC02LjQsNi40aC02LjJjLTMuNSwwLTYuNC0yLjktNi40LTYuNGwwLTIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xODQuNSwzNjQtMTgxLjYsMzYxLjEtMTc4LjEsMzYxLjF6IE0tMTY3LDQzMC40SC0xODNjLTAuOCwwLTEuNS0wLjct'+
			'MS41LTEuNWwwLTM3LjdjMC0wLjgsMC43LTEuNSwxLjUtMS41bDE1LjksMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOCwwLDEuNSwwLjcsMS41LDEuNWwwLDM3LjdDLTE2NS41LDQyOS43LTE2Ni4yLDQzMC40LTE2Nyw0MzAuNHoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTS0xNjUuNSwzOTEuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVsLTE1LjksMGMtMC44LDAtMS41LDAuNy0xLjUsMS41bDAsMzcuN2MwLDAuOCwwLjcsMS41LDEuNSwxLjVoMTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44LDAsMS41LTAuNywxLjUtMS41TC'+
			'0xNjUuNSwzOTEuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNzguMSwzNzYuOGg2LjJjMy41LDAsNi40LTIuOSw2LjQtNi40di0yLjljMC0zLjUtMi45LTYuNC02LjQtNi40bC02LjIsMGMtMy41LDAtNi40LDIuOS02LjQsNi40bDAsMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg0LjUsMzc0LTE4MS42LDM3Ni44LTE3OC4xLDM3Ni44eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE3OC41LDM1Ny4xbDYuOSwwYzMuOSwwLDcuMSwzLjIsNy4xLDcuMXYzLjNjMCwzLjktMy4yLDcuMS03LjEsNy4xaC02LjljLTMuOSwwLTcuMS0zLjItNy4xLTcuMWwwLTMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xODUuNiwzNjAuMy0xODIuNCwzNTcuMS0xNzguNSwzNTcuMXogTS0xNjYuMSw0MzQuMWgtMTcuN2MtMC45'+
			'LDAtMS43LTAuOC0xLjctMS43bDAtNDEuOWMwLTAuOSwwLjgtMS43LDEuNy0xLjdsMTcuNywwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LDAsMS43LDAuOCwxLjcsMS43bDAsNDEuOUMtMTY0LjQsNDMzLjMtMTY1LjIsNDM0LjEtMTY2LjEsNDM0LjF6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTY0LjQsMzkwLjVjMC0wLjktMC44LTEuNy0xLjctMS43bC0xNy43LDBjLTAuOSwwLTEuNywwLjgtMS43LDEuN2wwLDQxLjljMCwwLjksMC44LDEuNywxLjcsMS43aDE3LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuOSwwLDEuNy'+
			'0wLjgsMS43LTEuN0wtMTY0LjQsMzkwLjV6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTc4LjUsMzc0LjZoNi45YzMuOSwwLDcuMS0zLjIsNy4xLTcuMXYtMy4zYzAtMy45LTMuMi03LjEtNy4xLTcuMWwtNi45LDBjLTMuOSwwLTcuMSwzLjItNy4xLDcuMWwwLDMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE4NS41LDM3MS40LTE4Mi40LDM3NC42LTE3OC41LDM3NC42eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image.style[domTransition]='';
				if (me._ht_info_image.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image.style.visibility="hidden";
					me._ht_info_image.ggVisible=false;
				}
				else {
					me._ht_info_image.style.visibility=(Number(me._ht_info_image.style.opacity)>0||!me._ht_info_image.style.opacity)?'inherit':'hidden';
					me._ht_info_image.ggVisible=true;
				}
			}
		}
		me._ht_info_image.onmouseover=function (e) {
			me._ht_info_image__img.style.visibility='hidden';
			me._ht_info_image__imgo.style.visibility='inherit';
		}
		me._ht_info_image.onmouseout=function (e) {
			me._ht_info_image__img.style.visibility='inherit';
			me._ht_info_image__imgo.style.visibility='hidden';
		}
		me._ht_info_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_info_2.appendChild(me._ht_info_image);
		el=me._tt_information=document.createElement('div');
		els=me._tt_information__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_information.style.top='-47px';
					me._tt_information.ggUpdatePosition(true);
				}
				else {
					me._tt_information.ggDx=0;
					me._tt_information.style.top='24px';
					me._tt_information.ggUpdatePosition(true);
				}
			}
		}
		me._tt_information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info_2'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStateVisible == 0) {
					me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
					me._tt_information.ggVisible=true;
				}
				else {
					me._tt_information.style.visibility="hidden";
					me._tt_information.ggVisible=false;
				}
			}
		}
		me._tt_information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_info_2.appendChild(me._tt_information);
		el=me._ht_info_customimage=document.createElement('div');
		els=me._ht_info_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_info_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_customimage.style[domTransition]='';
				if (me._ht_info_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_info_customimage.style.visibility="hidden";
					me._ht_info_customimage__img.src = '';
					me._ht_info_customimage.ggVisible=false;
				}
				else {
					me._ht_info_customimage.style.visibility=(Number(me._ht_info_customimage.style.opacity)>0||!me._ht_info_customimage.style.opacity)?'inherit':'hidden';
					me._ht_info_customimage.ggSubElement.src=me._ht_info_customimage.ggText;
					me._ht_info_customimage.ggVisible=true;
				}
			}
		}
		me._ht_info_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_info_customimage.clientWidth;
			var parentHeight = me._ht_info_customimage.clientHeight;
			var img = me._ht_info_customimage__img;
			var aspectRatioDiv = me._ht_info_customimage.clientWidth / me._ht_info_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_info_2.appendChild(me._ht_info_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_info_2;
	};
	function SkinHotspotClass_ht_node2(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node2=document.createElement('div');
		el.ggId="ht_node2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='top : 220px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node2.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node2.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node2.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node2']=true;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node2.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node2']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node2.ontouchend=function (e) {
			me.elementMouseOver['ht_node2']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
		}
		me._ht_node2.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white_lower=document.createElement('div');
		els=me._chevron_white_lower__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB4bWw6c3BhY2'+
			'U9InByZXNlcnZlIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEmI3hhOyYjeDk7JiN4OTtjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAmI3hhOyYjeDk7JiN4OTtTMS43LDQ3MywzNC45LDQzOS43eiIgY2xhc3M9InN0MCIv'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._chevron_white_lower__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white_lower";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -145px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white_lower.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white_lower.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white_lower.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white_lower.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateVisible == 0) {
					me._chevron_white_lower.style.visibility="hidden";
					me._chevron_white_lower.ggVisible=false;
				}
				else {
					me._chevron_white_lower.style.visibility=(Number(me._chevron_white_lower.style.opacity)>0||!me._chevron_white_lower.style.opacity)?'inherit':'hidden';
					me._chevron_white_lower.ggVisible=true;
				}
			}
		}
		me._chevron_white_lower.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node2'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white_lower.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white_lower.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=1;
				}
				else {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=0.6;
				}
			}
		}
		me._chevron_white_lower.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node2.appendChild(me._chevron_white_lower);
		el=me._chevron_black=document.createElement('div');
		els=me._chevron_black__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB4bWw6c3BhY2'+
			'U9InByZXNlcnZlIj4KIDxnPgogIDxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcmI3hhOyYjeDk7JiN4OTtjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._chevron_black__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -145px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_black.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_black.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateVisible == 0) {
					me._chevron_black.style.visibility="hidden";
					me._chevron_black.ggVisible=false;
				}
				else {
					me._chevron_black.style.visibility=(Number(me._chevron_black.style.opacity)>0||!me._chevron_black.style.opacity)?'inherit':'hidden';
					me._chevron_black.ggVisible=true;
				}
			}
		}
		me._chevron_black.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node2'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=1;
				}
				else {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=0.4;
				}
			}
		}
		me._chevron_black.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node2.appendChild(me._chevron_black);
		el=me._chevron_white=document.createElement('div');
		els=me._chevron_white__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB4bWw6c3BhY2'+
			'U9InByZXNlcnZlIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEmI3hhOyYjeDk7JiN4OTtjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAmI3hhOyYjeDk7JiN4OTtTMS43LDQ3MywzNC45LDQzOS43eiIgY2xhc3M9InN0MCIv'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._chevron_white__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -145px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateVisible == 0) {
					me._chevron_white.style.visibility="hidden";
					me._chevron_white.ggVisible=false;
				}
				else {
					me._chevron_white.style.visibility=(Number(me._chevron_white.style.opacity)>0||!me._chevron_white.style.opacity)?'inherit':'hidden';
					me._chevron_white.ggVisible=true;
				}
			}
		}
		me._chevron_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node2'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=1;
				}
				else {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=0.6;
				}
			}
		}
		me._chevron_white.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node2.appendChild(me._chevron_white);
		el=me._hs_preview_image=document.createElement('div');
		els=me._hs_preview_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -220px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='border-radius: 5px; overflow: hidden; box-shadow: 0px 0px 2px #ffffff; transform:translate3d(0px,0px,80px) rotateX(-90deg) scale(1.5); transform-style: preserve-3d; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_preview_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node2'] == true)) && 
				((player.getVariableValue('opt_3d_preview_1') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image.style[domTransition]='opacity 500ms ease 0ms';
				if (me._hs_preview_image.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image.style.visibility=me._hs_preview_image.ggVisible?'inherit':'hidden';
					me._hs_preview_image.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hs_preview_image.style.opacity == 0.0) { me._hs_preview_image.style.visibility="hidden"; } }, 505);
					me._hs_preview_image.style.opacity=0;
				}
			}
		}
		me._hs_preview_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._hs_tt=document.createElement('div');
		els=me._hs_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 140px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.196078);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._hs_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_3d_tooltip') == false)) || 
				((me.hotspot.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt.style[domTransition]='';
				if (me._hs_tt.ggCurrentLogicStateVisible == 0) {
					me._hs_tt.style.visibility="hidden";
					me._hs_tt.ggVisible=false;
				}
				else {
					me._hs_tt.style.visibility=(Number(me._hs_tt.style.opacity)>0||!me._hs_tt.style.opacity)?'inherit':'hidden';
					me._hs_tt.ggVisible=true;
				}
			}
		}
		me._hs_tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hs_preview_image.appendChild(me._hs_tt);
		el=me._ht_checkmark_tick=document.createElement('div');
		els=me._ht_checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTM3MjIgLTI2MDYgMzIgMzIiIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbn'+
			'M6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iIHdpZHRoPSIzMnB4IiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0zNzIyIC0yNjA2IDMyIDMyIiB4PSIwcHgiIGhlaWdodD0iMzJweCIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC'+
			'4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIgZmlsbD0iI0ZGRkZGRiIvPgogICAgPHBhdGggZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEs'+
			'MCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bC0yLjM5MywyLjM5M1YtMjU4My44Mzd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT0iMC40IiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5Ij4KICAgIDxwYXRoIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7TS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLT'+
			'IuMjkxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLjI1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5YzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIGZpbGw9Im5vbmUiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibm9ybWFsIiBzdHJva2UtbGlu'+
			'ZWpvaW49InJvdW5kIi8+CiAgICA8cGF0aCBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9IiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O00tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOT'+
			'ctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIgZmlsbD0ibm9uZSIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyYy0wLjUxMywwLjUyNS0w'+
			'LjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgICA8cGF0aCBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOCYjeGQ7JiN4YTsmI3g5Oy'+
			'YjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGZpbGw9IiNGRkZGRkYiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsm'+
			'I3g5O2MtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMjkxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLjI1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5YzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIG'+
			'ZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDxwYXRoIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MThjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5'+
			'NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_checkmark_tick.ggElementNodeId()) == true)) || 
				((me._ht_checkmark_tick.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_checkmark_tick.style[domTransition]='';
				if (me._ht_checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._ht_checkmark_tick.style.visibility=(Number(me._ht_checkmark_tick.style.opacity)>0||!me._ht_checkmark_tick.style.opacity)?'inherit':'hidden';
					me._ht_checkmark_tick.ggVisible=true;
				}
				else {
					me._ht_checkmark_tick.style.visibility="hidden";
					me._ht_checkmark_tick.ggVisible=false;
				}
			}
		}
		me._ht_checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._ht_checkmark_tick);
		me._ht_node2.appendChild(me._hs_preview_image);
		el=me.__code=document.createElement('div');
		els=me.__code__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 68px;';
		hs+='height: 39px;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		el.appendChild(els);
		me.__code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__code.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node2.appendChild(me.__code);
		el=me._tt_ht_3d=document.createElement('div');
		els=me._tt_ht_3d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); text-shadow: 1px 1px 2px #000000; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) && 
				((me.hotspot.title != "")) && 
				((me.elementMouseOver['ht_node2'] == true)) && 
				((player.getVariableValue('opt_3d_preview_1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d.style[domTransition]='';
				if (me._tt_ht_3d.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d.style.visibility=(Number(me._tt_ht_3d.style.opacity)>0||!me._tt_ht_3d.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d.ggVisible=true;
				}
				else {
					me._tt_ht_3d.style.visibility="hidden";
					me._tt_ht_3d.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node2.appendChild(me._tt_ht_3d);
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -145px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style[domTransition]='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage__img.src = '';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_node2.appendChild(me._ht_node_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.ggUse3d=true;
		me.gg3dDistance=500;
		me.__div = me._ht_node2;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_node1') {
			hotspot.skinid = 'ht_node1';
			hsinst = new SkinHotspotClass_ht_node1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node1_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_node1_changenode();;
			me.callChildLogicBlocksHotspot_ht_node1_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node1_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node1_active();;
			me.callChildLogicBlocksHotspot_ht_node1_changevisitednodes();;
			me.callChildLogicBlocksHotspot_ht_node1_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_node1_varchanged_opt_3d_preview();;
		} else
		if (hotspot.skinid=='ht_info') {
			hotspot.skinid = 'ht_info';
			hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_mouseover();;
			me.callChildLogicBlocksHotspot_ht_info_mouseover();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_ht_ani();;
		} else
		if (hotspot.skinid=='ht_video_file') {
			hotspot.skinid = 'ht_video_file';
			hsinst = new SkinHotspotClass_ht_video_file(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_video_file_changenode();;
			me.callChildLogicBlocksHotspot_ht_video_file_configloaded();;
			me.callChildLogicBlocksHotspot_ht_video_file_mouseover();;
			me.callChildLogicBlocksHotspot_ht_video_file_mouseover();;
			me.callChildLogicBlocksHotspot_ht_video_file_hastouch();;
			me.callChildLogicBlocksHotspot_ht_video_file_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_ht_ani();;
		} else
		if (hotspot.skinid=='ht_url') {
			hotspot.skinid = 'ht_url';
			hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_url_changenode();;
			me.callChildLogicBlocksHotspot_ht_url_mouseover();;
			me.callChildLogicBlocksHotspot_ht_url_mouseover();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_ht_ani();;
		} else
		if (hotspot.skinid=='ht_url1') {
			hotspot.skinid = 'ht_url1';
			hsinst = new SkinHotspotClass_ht_url1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_url1_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_url1_changenode();;
			me.callChildLogicBlocksHotspot_ht_url1_configloaded();;
			me.callChildLogicBlocksHotspot_ht_url1_mouseover();;
			me.callChildLogicBlocksHotspot_ht_url1_hastouch();;
			me.callChildLogicBlocksHotspot_ht_url1_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_url1_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_url1_varchanged_vis_website();;
		} else
		if (hotspot.skinid=='ht_info 2') {
			hotspot.skinid = 'ht_info 2';
			hsinst = new SkinHotspotClass_ht_info_2(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_2_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_2_configloaded();;
			me.callChildLogicBlocksHotspot_ht_info_2_mouseover();;
			me.callChildLogicBlocksHotspot_ht_info_2_hastouch();;
			me.callChildLogicBlocksHotspot_ht_info_2_activehotspotchanged();;
		} else
		{
			hotspot.skinid = 'ht_node2';
			hsinst = new SkinHotspotClass_ht_node2(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node2_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_node2_changenode();;
			me.callChildLogicBlocksHotspot_ht_node2_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node2_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node2_active();;
			me.callChildLogicBlocksHotspot_ht_node2_changevisitednodes();;
			me.callChildLogicBlocksHotspot_ht_node2_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_node2_varchanged_opt_3d_preview_1();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node1'].length; i++) {
				hotspotTemplates['ht_node1'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				hotspotTemplates['ht_info'][i] = null;
			}
		}
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				hotspotTemplates['ht_video_file'][i] = null;
			}
		}
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				hotspotTemplates['ht_url'][i] = null;
			}
		}
		if(hotspotTemplates['ht_url1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url1'].length; i++) {
				hotspotTemplates['ht_url1'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info 2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info 2'].length; i++) {
				hotspotTemplates['ht_info 2'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node2'].length; i++) {
				hotspotTemplates['ht_node2'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_category_cloner_Class(item, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggNodeCount = item['nodecount'];
		me.ggNodeId=item['firstnode'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 150px; height: 128px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			var tags = player.userdata.tags;
			if (tags.indexOf(me.ggTag) == -1) return false;
			for(var i=0;i<me.ggParent.ggCurrentFilter.length;i++) {
				if (tags.indexOf(me.ggParent.ggCurrentFilter[i])==-1) return false;
			}
			return true;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._node_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 141;
		el.ggHeight = 100;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._node_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_active = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner.ggUpdating == true) return;
			me._node_cloner.ggUpdating = true;
			var el=me._node_cloner;
			var curNumCols = 0;
			curNumCols = me._node_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._node_cloner.ggHeight) + 'px';
				parameter.left=(column * me._node_cloner.ggWidth) + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._node_cloner.callChildLogicBlocks_mouseover();
			me._node_cloner.callChildLogicBlocks_active();
			me._node_cloner.callChildLogicBlocks_changevisitednodes();
			me._node_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner.parentNode.classList.contains('ggskin_subelement') && me._node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "_nop_";
		el.ggId="node_cloner";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : 141px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner.childNodes.length; i++) {
				var child=me._node_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.ggWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
				me._node_cloner.ggUpdate();
		}
		me._node_cloner.ggNodeChange=function () {
			me._node_cloner.ggUpdateConditionNodeChange();
		}
		me.__div.appendChild(me._node_cloner);
		el=me._category=document.createElement('div');
		els=me._category__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="category";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 141px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 141px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #ffffff;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 13px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 3px 1px 3px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggTitle;
		el.appendChild(els);
		me._category.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['category'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((player.getVariableValue('open_tag') == me.ggTag))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._category.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._category.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._category__text.style[domTransition]='background-color 0s, color 0s';
				if (me._category.ggCurrentLogicStateBackgroundColor == 0) {
					me._category__text.style.backgroundColor="rgba(85,170,255,1)";
				}
				else if (me._category.ggCurrentLogicStateBackgroundColor == 1) {
					me._category__text.style.backgroundColor="rgba(85,170,255,1)";
				}
				else {
					me._category__text.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._category.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['category'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else if (
				((player.getVariableValue('open_tag') == me.ggTag))
			)
			{
				newLogicStateTextColor = 1;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._category.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._category.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._category__text.style[domTransition]='background-color 0s, color 0s';
				if (me._category.ggCurrentLogicStateTextColor == 0) {
					me._category__text.style.color="rgba(255,255,255,1)";
				}
				else if (me._category.ggCurrentLogicStateTextColor == 1) {
					me._category__text.style.color="rgba(255,255,255,1)";
				}
				else {
					me._category__text.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._category.onclick=function (e) {
			if (
				(
					((player.getVariableValue('open_tag') == me.ggTag))
				)
			) {
				player.setVariableValue('close_nodes', true);
			}
			if (
				(
					((player.getVariableValue('open_tag') != me.ggTag))
				)
			) {
				player.setVariableValue('close_nodes', false);
			}
			if (
				(
					((player.getVariableValue('open_tag') != me.ggTag))
				)
			) {
				player.setVariableValue('open_tag', me.ggTag);
			}
			if (
				(
					((player.getVariableValue('close_nodes') == true))
				)
			) {
				player.setVariableValue('open_tag', "_nop_");
			}
		}
		me._category.onmouseover=function (e) {
			me.elementMouseOver['category']=true;
			me._category.logicBlock_backgroundcolor();
			me._category.logicBlock_textcolor();
		}
		me._category.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._category__text)
					return;
				}
			}
			me.elementMouseOver['category']=false;
			me._category.logicBlock_backgroundcolor();
			me._category.logicBlock_textcolor();
		}
		me._category.ontouchend=function (e) {
			me.elementMouseOver['category']=false;
			me._category.logicBlock_backgroundcolor();
			me._category.logicBlock_textcolor();
		}
		me._category.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._category.ggNodeChange=function () {
			if (
				(
					((me._category.ggIsActive() == true)) && 
					((player.getVariableValue('category_follow') == true))
				)
			) {
				player.setVariableValue('open_tag', me.ggTag);
			}
		}
		me.__div.appendChild(me._category);
		me._node_cloner.style['display']='none';
		var p = me._node_cloner.parentElement;
		while (p != null && p!==this.divSkin) {
			if (p.ggType && p.ggType == 'cloner') {
				if (p.ggAutoPosition) {
					p.ggAutoPosition(false);
				}
			}
			if (p.ggType && p.ggType == 'scrollarea') {
				if (p.ggUpdatePosition) {
					p.ggUpdatePosition();
				}
			}
			p = p.parentElement;
		}
		me.event_varchanged_open_tag=function() {if (
			(
				((player.getVariableValue('open_tag') != me.ggTag))
			)
		) {
			me._node_cloner.ggText="_nop_";
			if (me._node_cloner.ggText=='') {
				me._node_cloner.ggUpdate([]);
			} else {
				me._node_cloner.ggUpdate(me._node_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
		}
		if (
			(
				((player.getVariableValue('open_tag') != me.ggTag))
			)
		) {
			me._node_cloner.style['display']='none';
			var p = me._node_cloner.parentElement;
			while (p != null && p!==this.divSkin) {
				if (p.ggType && p.ggType == 'cloner') {
					if (p.ggAutoPosition) {
						p.ggAutoPosition(false);
					}
				}
				if (p.ggType && p.ggType == 'scrollarea') {
					if (p.ggUpdatePosition) {
						p.ggUpdatePosition();
					}
				}
				p = p.parentElement;
			}
		}
		if (
			(
				((player.getVariableValue('open_tag') == me.ggTag))
			)
		) {
			me._node_cloner.ggText=me.ggTag;
			if (me._node_cloner.ggText=='') {
				me._node_cloner.ggUpdate([]);
			} else {
				me._node_cloner.ggUpdate(me._node_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
		}
		if (
			(
				((player.getVariableValue('open_tag') == me.ggTag))
			)
		) {
			me._node_cloner.style['display']='inline';
			var p = me._node_cloner.parentElement;
			while (p != null && p!==this.divSkin) {
				if (p.ggType && p.ggType == 'cloner') {
					if (p.ggAutoPosition) {
						p.ggAutoPosition(false);
					}
				}
				if (p.ggType && p.ggType == 'scrollarea') {
					if (p.ggUpdatePosition) {
						p.ggUpdatePosition();
					}
				}
				p = p.parentElement;
			}
		}};
	};
	function SkinCloner_node_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 141px; height: 100px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._node_image=document.createElement('div');
		els=me._node_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/node_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 141px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_image.onclick=function (e) {
			if (
				(
					((me._node_image.ggIsActive() == false))
				)
			) {
				player.setVariableValue('category_visible', false);
			}
			if (
				(
					((me._node_image.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
			}
		}
		me._node_image.onmouseover=function (e) {
			me.elementMouseOver['node_image']=true;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image.onmouseout=function (e) {
			me.elementMouseOver['node_image']=false;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image.ontouchend=function (e) {
			me.elementMouseOver['node_image']=false;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_title=document.createElement('div');
		els=me._node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 136px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 136px;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.501961);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 1px 2px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title+""+me.ggUserdata.title;
		el.appendChild(els);
		me._node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._node_image.appendChild(me._node_title);
		el=me._node_visited=document.createElement('div');
		el.ggId="node_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #c8c8c8;';
		hs+='cursor : default;';
		hs+='height : 87px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_visited.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._node_visited.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['node_image'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else if (
				((player.nodeVisited(me._node_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateBorderColor = 2;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._node_visited.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._node_visited.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._node_visited.style[domTransition]='border-color 0s';
				if (me._node_visited.ggCurrentLogicStateBorderColor == 0) {
					me._node_visited.style.borderColor="rgba(85,170,255,1)";
				}
				else if (me._node_visited.ggCurrentLogicStateBorderColor == 1) {
					me._node_visited.style.borderColor="rgba(85,170,255,0.588235)";
				}
				else if (me._node_visited.ggCurrentLogicStateBorderColor == 2) {
					me._node_visited.style.borderColor="rgba(200,200,200,1)";
				}
				else {
					me._node_visited.style.borderColor="rgba(200,200,200,1)";
				}
			}
		}
		me._node_visited.ggUpdatePosition=function (useTransition) {
		}
		me._node_image.appendChild(me._node_visited);
		me.__div.appendChild(me._node_image);
	};
	player.addListener('varchanged_open_tag', function() {
		var inst_j=skin;
		for(var i = 0; i < inst_j._category_cloner.ggInstances.length; i++) {
			var inst_i=inst_j._category_cloner.ggInstances[i];
			inst_i.event_varchanged_open_tag();
		}
	});
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._cnt_title.logicBlock_scaling();
	me._cntmastericons.logicBlock_position();
	me._cntmastericons.logicBlock_scaling();
	me._txt_info.logicBlock_size();
	me._cntcategory.logicBlock_scaling();
	me._container_social.logicBlock_size();
	me._svg_checkoff.logicBlock_size();
	me._svg_checkon.logicBlock_size();
	me._container_pdf.logicBlock_size();
	me._container_info.logicBlock_size();
	me._txt_info_text_body.logicBlock_position();
	me._container_help.logicBlock_scaling();
	me._splashscreen.logicBlock_scaling();
	me._logo.logicBlock_scaling();
	me._cntcusticon.logicBlock_scaling();
	me._svg_fullscreenoff.logicBlock_visible();
	me._svg_fullscreenon.logicBlock_visible();
	me._rectgradiant.logicBlock_visible();
	me._cnt_title.logicBlock_position();
	me._screentint_info.logicBlock_visible();
	me._information.logicBlock_visible();
	me._svg_eyeunhide.logicBlock_visible();
	me._svg_eyehide.logicBlock_visible();
	me._cntcontrolicon.logicBlock_position();
	me._txt_info.logicBlock_position();
	me._txt_info.logicBlock_alpha();
	me._gyro_on.logicBlock_alpha();
	me._gyro_off.logicBlock_alpha();
	me._tt_gyro.logicBlock_text();
	me._thumbnail_container.logicBlock_position();
	me._cntcategory.logicBlock_position();
	me._txt_category.logicBlock_text();
	me._screenbg.logicBlock_scaling();
	me._screenbg.logicBlock_alpha();
	me._container_gallery.logicBlock_visible();
	me._gallery_picture_preload.logicBlock_externalurl();
	me._gallery_picture.logicBlock_visible();
	me._gallery_picture.logicBlock_externalurl();
	me._gallery_counter.logicBlock_text();
	me._logo.logicBlock_position();
	me._cntcusticon.logicBlock_position();
	me._tt_enter_vr.logicBlock_position();
	me._tt_gyro.logicBlock_position();
	me._enter_vr.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._cnt_title.logicBlock_scaling();me._cntmastericons.logicBlock_position();me._cntmastericons.logicBlock_scaling();me._txt_info.logicBlock_size();me._cntcategory.logicBlock_scaling();me._container_social.logicBlock_size();me._svg_checkoff.logicBlock_size();me._svg_checkon.logicBlock_size();me._container_pdf.logicBlock_size();me._container_info.logicBlock_size();me._txt_info_text_body.logicBlock_position();me._container_help.logicBlock_scaling();me._splashscreen.logicBlock_scaling();me._logo.logicBlock_scaling();me._cntcusticon.logicBlock_scaling(); });
	player.addListener('fullscreenenter', function(args) { me._svg_fullscreenoff.logicBlock_visible();me._svg_fullscreenon.logicBlock_visible(); });
	player.addListener('fullscreenexit', function(args) { me._svg_fullscreenoff.logicBlock_visible();me._svg_fullscreenon.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._rectgradiant.logicBlock_visible();me._cnt_title.logicBlock_position();me._screentint_info.logicBlock_visible();me._information.logicBlock_visible();me._cntmastericons.logicBlock_position();me._svg_eyeunhide.logicBlock_visible();me._svg_eyehide.logicBlock_visible();me._cntcontrolicon.logicBlock_position();me._txt_info.logicBlock_position();me._txt_info.logicBlock_alpha();me._gyro_on.logicBlock_alpha();me._gyro_off.logicBlock_alpha();me._tt_gyro.logicBlock_text();me._thumbnail_container.logicBlock_position();me._cntcategory.logicBlock_position();me._txt_category.logicBlock_text();me._screenbg.logicBlock_scaling();me._screenbg.logicBlock_alpha();me._container_gallery.logicBlock_visible();me._gallery_picture_preload.logicBlock_externalurl();me._gallery_picture.logicBlock_visible();me._gallery_picture.logicBlock_externalurl();me._gallery_counter.logicBlock_text();me._logo.logicBlock_position();me._cntcusticon.logicBlock_position(); });
	player.addListener('configloaded', function(args) { me._tt_enter_vr.logicBlock_position();me._tt_gyro.logicBlock_position(); });
	player.addListener('gyrochanged', function(args) { me._gyro_on.logicBlock_alpha();me._gyro_off.logicBlock_alpha();me._tt_gyro.logicBlock_text(); });
	player.addListener('vrchanged', function(args) { me._enter_vr.logicBlock_visible(); });
	player.addListener('hastouch', function(args) { me._tt_enter_vr.logicBlock_position();me._tt_gyro.logicBlock_position(); });
	player.addListener('varchanged_PreLaunch', function(args) { me._rectgradiant.logicBlock_visible(); });
	player.addListener('varchanged_IconVisible', function(args) { me._cnt_title.logicBlock_position();me._svg_eyeunhide.logicBlock_visible();me._svg_eyehide.logicBlock_visible();me._cntcontrolicon.logicBlock_position();me._txt_info.logicBlock_position();me._txt_info.logicBlock_alpha();me._cntcategory.logicBlock_position();me._logo.logicBlock_position();me._cntcusticon.logicBlock_position(); });
	player.addListener('varchanged_vis_info_popup_2', function(args) { me._screentint_info.logicBlock_visible();me._information.logicBlock_visible(); });
	player.addListener('varchanged_category_visible', function(args) { me._cntmastericons.logicBlock_position();me._thumbnail_container.logicBlock_position();me._txt_category.logicBlock_text();me._cntcusticon.logicBlock_position(); });
	player.addListener('varchanged_ScreenBg', function(args) { me._screenbg.logicBlock_scaling();me._screenbg.logicBlock_alpha(); });
	player.addListener('varchanged_gallery_show_hide', function(args) { me._container_gallery.logicBlock_visible();me._gallery_picture.logicBlock_visible(); });
	player.addListener('varchanged_gallery_pictures', function(args) { me._gallery_picture_preload.logicBlock_externalurl();me._gallery_picture.logicBlock_externalurl();me._gallery_counter.logicBlock_text(); });
	player.addListener('changenode', function(args) { me._category_cloner.callChildLogicBlocks_changenode(); });
	player.addListener('mouseover', function(args) { me._category_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('mouseover', function(args) { me._category_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._category_cloner.callChildLogicBlocks_active(); });
	player.addListener('changevisitednodes', function(args) { me._category_cloner.callChildLogicBlocks_changevisitednodes(); });
	player.addListener('varchanged_open_tag', function(args) { me._category_cloner.callChildLogicBlocks_varchanged_open_tag(); });
	player.addListener('sizechanged', function(args) { me.callChildLogicBlocksHotspot_ht_node1_sizechanged();me.callChildLogicBlocksHotspot_ht_url1_sizechanged();me.callChildLogicBlocksHotspot_ht_node2_sizechanged(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node1_changenode();me.callChildLogicBlocksHotspot_ht_info_changenode();me.callChildLogicBlocksHotspot_ht_video_file_changenode();me.callChildLogicBlocksHotspot_ht_url_changenode();me.callChildLogicBlocksHotspot_ht_url1_changenode();me.callChildLogicBlocksHotspot_ht_info_2_changenode();me.callChildLogicBlocksHotspot_ht_node2_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_node1_configloaded();me.callChildLogicBlocksHotspot_ht_video_file_configloaded();me.callChildLogicBlocksHotspot_ht_url1_configloaded();me.callChildLogicBlocksHotspot_ht_info_2_configloaded();me.callChildLogicBlocksHotspot_ht_node2_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_info_mouseover();me.callChildLogicBlocksHotspot_ht_video_file_mouseover();me.callChildLogicBlocksHotspot_ht_url_mouseover(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node1_mouseover();me.callChildLogicBlocksHotspot_ht_info_mouseover();me.callChildLogicBlocksHotspot_ht_video_file_mouseover();me.callChildLogicBlocksHotspot_ht_url_mouseover();me.callChildLogicBlocksHotspot_ht_url1_mouseover();me.callChildLogicBlocksHotspot_ht_info_2_mouseover();me.callChildLogicBlocksHotspot_ht_node2_mouseover(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node1_active();me.callChildLogicBlocksHotspot_ht_node2_active(); });
	player.addListener('changevisitednodes', function(args) { me.callChildLogicBlocksHotspot_ht_node1_changevisitednodes();me.callChildLogicBlocksHotspot_ht_node2_changevisitednodes(); });
	player.addListener('hastouch', function(args) { me.callChildLogicBlocksHotspot_ht_video_file_hastouch();me.callChildLogicBlocksHotspot_ht_url1_hastouch();me.callChildLogicBlocksHotspot_ht_info_2_hastouch(); });
	player.addListener('activehotspotchanged', function(args) { me.callChildLogicBlocksHotspot_ht_node1_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_video_file_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_url1_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_info_2_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_node2_activehotspotchanged(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me.callChildLogicBlocksHotspot_ht_url1_varchanged_vis_info_popup(); });
	player.addListener('varchanged_vis_website', function(args) { me.callChildLogicBlocksHotspot_ht_url1_varchanged_vis_website(); });
	player.addListener('varchanged_opt_3d_preview', function(args) { me.callChildLogicBlocksHotspot_ht_node1_varchanged_opt_3d_preview(); });
	player.addListener('varchanged_opt_3d_preview_1', function(args) { me.callChildLogicBlocksHotspot_ht_node2_varchanged_opt_3d_preview_1(); });
	player.addListener('varchanged_ht_ani', function(args) { me.callChildLogicBlocksHotspot_ht_info_varchanged_ht_ani();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_ht_ani();me.callChildLogicBlocksHotspot_ht_url_varchanged_ht_ani(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	document.addEventListener('keydown', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = key;
		if (!player.getLockedKeyboard()) {
			switch(key) {
				case 27:
					if (
	(
		((player.getVariableValue('CurrentWindow') == "Help"))
	)
) {
	me._ht_help_close.onclick();
}
if (
	(
		((player.getVariableValue('CurrentWindow') == "Video"))
	)
) {
	me._video_close.onclick();
}
if (
	(
		((player.getVariableValue('CurrentWindow') == "Gallery"))
	)
) {
	me._gallery_close.onclick();
}
if (
	(
		((player.getVariableValue('CurrentWindow') == "Info"))
	)
) {
	me._ht_info_close.onclick();
}
if (
	(
		((player.getVariableValue('CurrentWindow') == "PopupInfo"))
	)
) {
	me._popinfo_close.onclick();
}
if (
	(
		((player.getVariableValue('CurrentWindow') == "PDF"))
	)
) {
	me._pdf_close.onclick();
}
if (
	(
		((player.getVariableValue('CurrentWindow') == "Share"))
	)
) {
	me._ht_social_close.onclick();
}
					break;
			}
		}
	});
	document.addEventListener('keyup', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = 0;
	});
	me.skinTimerEvent();
};