jQuery(document).ready(function(){(function(){var $mainNav=$("#navigation").children("ul");$mainNav.on("mouseenter","li",function(){var $this=$(this),$subMenu=$this.children("ul");if($subMenu.length){$this.addClass("hover")}$subMenu.hide().stop(true,true).slideDown("fast")}).on("mouseleave","li",function(){$(this).removeClass("hover").children("ul").stop(true,true).slideUp("fast")})})();(function(){selectnav("nav",{label:"[选择频道]",nested:true,indent:"-"})})()});
window.selectnav=(function(){var selectnav=function(element,options){element=document.getElementById(element);if(!element){return}if(!islist(element)){return}document.documentElement.className+=" js";var o=options||{},activeclass=o.activeclass||"active",autoselect=typeof(o.autoselect)==="boolean"?o.autoselect:true,nested=typeof(o.nested)==="boolean"?o.nested:true,indent=o.indent||"¡ú",label=o.label||"- Navigation -",level=0,selected=" selected ";element.insertAdjacentHTML("afterend",parselist(element));var nav=document.getElementById(id());if(nav.addEventListener){nav.addEventListener("change",goTo)}if(nav.attachEvent){nav.attachEvent("onchange",goTo)}return nav;function goTo(e){var targ;if(!e){e=window.event}if(e.target){targ=e.target}else{if(e.srcElement){targ=e.srcElement}}if(targ.nodeType===3){targ=targ.parentNode}if(targ.value){window.location.href=targ.value}}function islist(list){var n=list.nodeName.toLowerCase();return(n==="ul"||n==="ol")}function id(nextId){for(var j=1;document.getElementById("selectnav"+j);j++){}return(nextId)?"selectnav"+j:"selectnav"+(j-1)}function parselist(list){level++;var length=list.children.length,html="",prefix="",k=level-1;if(!length){return}if(k){while(k--){prefix+=indent}prefix+=" "}for(var i=0;i<length;i++){var link=list.children[i].children[0];var text=link.innerText||link.textContent;var isselected="";if(activeclass){isselected=link.className.search(activeclass)!==-1||link.parentElement.className.search(activeclass)!==-1?selected:""}if(autoselect&&!isselected){isselected=link.href===document.URL?selected:""}html+='<option value="'+link.href+'" '+isselected+">"+prefix+text+"</option>";if(nested){var subElement=list.children[i].children[1];if(subElement&&islist(subElement)){html+=parselist(subElement)}}}if(level===1&&label){html='<option value="">'+label+"</option>"+html}if(level===1){html='<select class="selectnav" id="'+id(true)+'">'+html+"</select>"}level--;return html}};return function(element,options){selectnav(element,options)
}})();jQuery(document).ready(function(){jQuery('.post_list h2 a').click(function(){jQuery(this).text('页面载入中...');window.location = jQuery(this).attr('href');});});

/*微信*/
function show_wei() {
	document.getElementById("weixin").style.display = "block";
}
function hide_wei() {
	document.getElementById("weixin").style.display = "none";
}
/*
* 智能机浏览器版本信息:
*
*/
var browser={
versions:function(){
	   var u = navigator.userAgent, app = navigator.appVersion;
	   return {//移动终端浏览器版本信息
			trident: u.indexOf('Trident') > -1, //IE内核
			presto: u.indexOf('Presto') > -1, //opera内核
			webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
			mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
			iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
			iPad: u.indexOf('iPad') > -1, //是否iPad
			webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
		};
	 }(),
	 language:(navigator.browserLanguage || navigator.language).toLowerCase()
}

if((browser.versions.mobile == true) && ((browser.versions.ios == true) || (browser.versions.android == true) || (browser.versions.iPhone == true))) {
	//document.getElementById("cnzz").style.display = "none";			//获取CNZZ云推荐
	//document.getElementById("weixin").style.display = "none";		//获取微信公众号
	//document.getElementById("laoxue").style.display = "none";		//获取文章页面老薛主机图片
	//document.getElementById("tuijian").style.display = "none";	//获取推荐
	//document.getElementById("guanzhu").style.display = "none";	//关注按钮
	//document.getElementById("wechat").style.display = "none";
	$(document).ready(function(){
	$("#wechat").hide();
	$("#tuijian").hide();
	$("#cnzz").hide();
	$("#laoxue").hide();
	$("#guanzhu").hide();
});
}