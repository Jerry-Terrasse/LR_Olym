function searchCountriesInCountryLanding(){var resultsContainer=$('<div class="scroll-box"></div>'),results=$("<ul></ul>").appendTo(resultsContainer);return $(".countries a").each(function(){var link=$(this).clone(),li=$("<li></li>").appendTo(results);link.find(".flag90").removeClass("flag90").addClass("flag45"),li.append(link)}),$("<div>").append(resultsContainer).html()}function getCommonValues(array1,array2){var tab=[],i=0;return jQuery.grep(array2,function(el){jQuery.inArray(el,array1)>=0&&tab.push(el),i++}),tab}function SortEurosportPopup(){var v_Span=$(".btn-opener .name");v_Span&&v_Span.on("DOMSubtreeModified",function(){var v_BroadcasterTypes=$(".slide.modal .col");v_BroadcasterTypes.length>0&&v_BroadcasterTypes.each(function(){var v_BroadcasterName,v_BroadcasterList=$(this).children("ul").children("li"),v_InsertIndex=0;v_BroadcasterList.length>0&&v_BroadcasterList.each(function(){-1!==(v_BroadcasterName=$(this).text()).toLowerCase().indexOf("eurosport")&&($(this).insertBefore($(this).parent().find("li").eq(v_InsertIndex)),v_InsertIndex++)})})})}function FixOCVideoMargin(v_PlayerID){v_PlayerID!==undefined&&$("#"+v_PlayerID+" > iframe:first-child").css({margin:"auto",height:"50%","min-height":"360px"})}function checkPage(cookieData,jsonData,pageType,valueToCheck){return 1===jsonData.Items.filter(function(item){return item.Value===valueToCheck&&item.PageType===pageType}).length&&-1===$.inArray(valueToCheck,cookieData)&&(cookieData.push(valueToCheck),setCookie(popupRouteCookieName,cookieData.join(popupRouteCookieSeparator),3),!0)}function popuRouteProcess(data,textStatus,jqXHR){if(jqXHR.status>=200&&jqXHR.status<400){var currentPageId=$("meta[name=googlepageid]").attr("content"),currentPageType=$("meta[name=googlepagetype]").attr("content"),cookieValue=getCookie(popupRouteCookieName),cookieData=[];""!==cookieValue&&(cookieData=cookieValue.split(popupRouteCookieSeparator)),"string"==typeof data&&(data=JSON.parse(data)),checkPage(cookieData,data,"googlepageid",currentPageId)?tryDisplayPopupRoute(cookieData,data):checkPage(cookieData,data,"googlepagetype",currentPageType)&&tryDisplayPopupRoute(cookieData,data)}}function tryDisplayPopupRoute(cookieData,jsonData){if(cookieData.length===jsonData.Items.length){var boxId="betd-box-"+Date.now();$('<div id="'+boxId+'" class="betd-box"><div class="betd-box-content"><div class="betd-box-close">&times;</div><div class="betd-box-inner">'+jsonData.Content+"</div></div></div>").appendTo(document.body);var closeBetdModal=function(e){this===e.target&&$box.remove()},$box=$("#"+boxId);$box.on("click",closeBetdModal),$box.find(".betd-box-close").on("click",closeBetdModal)}}function PopupRoute(){$.ajax({url:"/popup-route",method:"GET",success:popuRouteProcess,error:!0})}function getAllIndexes(arr,val){for(var indexes=[],i=-1;-1!==(i=arr.indexOf(val,i+1));)indexes.push(i);return indexes}function refreshSecondDropChild(){var firstDrop=$(".first-drop")[0],secondDrop=$(".second-drop")[0],selectedElement=firstDrop.options[firstDrop.selectedIndex];if(secondDrop.disabled=!1,void 0!==$(selectedElement).data("default")&&!0===$(selectedElement).data("default"))$(".jcf-select-second-drop .jcf-list-content span").show();else{var selectedValue=selectedElement.value,SecondDropAllValues=$(".second-drop option"),indexByFirstDrop=[];if(SecondDropAllValues.get(0)){SecondDropAllValues.each(function(index){indexByFirstDrop.push($(this).data("parent"))});var indexes=getAllIndexes(indexByFirstDrop,selectedValue);$(".jcf-select-second-drop .jcf-list-content span[data-index!='0']").hide();for(var i=0;i<indexes.length;i++)$(".jcf-select-second-drop .jcf-list-content span[data-index='"+indexes[i]+"']").show()}}}function clearDropBanner(e){var SecondDropSelect=$(".second-drop")[0];if(SecondDropSelect.hasAttribute("disabled"))SecondDropSelect.setAttribute("disabled","disabled");else{var att=document.createAttribute("disabled");att.value="disabled",SecondDropSelect.setAttributeNode(att)}var $DefaultOptionFirstDrop=$(".first-drop option[data-defaultvalue]"),$DefaultOptionSecondDrop=$(".second-drop option[data-defaultvalue]"),$DefaultSpanFirstDrop=$(".jcf-select-first-drop .jcf-select-text span"),$DefaultSpanSecondDrop=$(".jcf-select-second-drop .jcf-select-text span");$DefaultOptionFirstDrop.get(0)&&$DefaultSpanFirstDrop.get(0)&&$DefaultOptionSecondDrop.get(0)&&$DefaultSpanSecondDrop.get(0)&&($DefaultSpanSecondDrop.html($DefaultOptionSecondDrop.data("defaultvalue")),$(".second-drop").val($DefaultOptionSecondDrop.data("defaultvalue")),$DefaultSpanFirstDrop.html($DefaultOptionFirstDrop.data("defaultvalue")),$(".first-drop").val($DefaultOptionFirstDrop.data("defaultvalue")))}function redirectFromDropBanner(){var $FirstDropSelect=$(".first-drop"),$SecondDropSelect=$(".second-drop");if($FirstDropSelect.get(0)&&$SecondDropSelect.get(0)){var $FirstDropValue=$FirstDropSelect.find(":selected"),$SecondDropValue=$SecondDropSelect.find(":selected");if($FirstDropSelect.get(0)&&$SecondDropSelect.get(0)&&$SecondDropValue.get(0)&&void 0!==$SecondDropValue.data("link")&&null!==$SecondDropValue.data("link"))return window.location.href=$SecondDropValue.data("link"),!1;if($FirstDropValue.get(0)&&void 0!==$FirstDropValue.data("link")&&null!==$FirstDropValue.data("link"))return window.location.href=$FirstDropValue.data("link"),!1;if($FirstDropValue.get(0)&&void 0!==$FirstDropValue.data("link_default")&&null!==$FirstDropValue.data("link_default"))return window.location.href=$FirstDropValue.data("link_default"),!1}}function redirectFromGames(){var GamesSelect=document.getElementById("sel-games"),CurrentOption=GamesSelect.options[GamesSelect.selectedIndex],GamesValue=CurrentOption.value,IsDefaultGameLabel="default"===CurrentOption.getAttribute("class");if(GamesValue&&!IsDefaultGameLabel){var EvtSelect=document.getElementById("sel-evt"),EvtValue=(CurrentOption=EvtSelect.options[EvtSelect.selectedIndex]).value,IsDefaultEvtLabel="default"===CurrentOption.getAttribute("class");if(EvtValue&&!IsDefaultEvtLabel)return void(window.location=EvtValue);var DiscSelect=document.getElementById("sel-disc"),DiscValue=(CurrentOption=DiscSelect.options[DiscSelect.selectedIndex]).value,IsDefaultDiscLabel="default"===CurrentOption.getAttribute("class");DiscValue&&!IsDefaultDiscLabel&&(window.location=DiscValue)}}function redirectFromDisc(){var DiscSelect=document.getElementById("sel-disc-s"),CurrentOption=DiscSelect.options[DiscSelect.selectedIndex],DiscValue=CurrentOption.value,IsDefaultDiscLabel="default"===CurrentOption.getAttribute("class");if(DiscValue&&!IsDefaultDiscLabel){var GamesSelect=document.getElementById("sel-games-s"),GamesValue=(CurrentOption=GamesSelect.options[GamesSelect.selectedIndex]).value,IsDefaultGameLabel="default"===CurrentOption.getAttribute("class");if(GamesValue&&!IsDefaultGameLabel)return void(window.location=GamesValue);var EvtSelect=document.getElementById("sel-evt-s"),EvtValue=(CurrentOption=EvtSelect.options[EvtSelect.selectedIndex]).value,IsDefaultEvtLabel="default"===CurrentOption.getAttribute("class");EvtValue&&!IsDefaultEvtLabel&&(window.location=EvtValue)}}function openPopup(url){var url=encodeURI(url),elem=document.getElementById("email");if(null!=elem&&elem!=undefined){url=url+encodeURIComponent(elem.value);window.open(url,"_blank","width=1000,height=800,menubar=no")}}var googletag;!function(){s=document.createElement("script"),s.type="text/javascript",s.async=!0,s.src="https://www.googletagservices.com/tag/js/gpt.js";var x=document.getElementsByTagName("script")[0];x.parentNode.insertBefore(s,x),(googletag=googletag||{}).cmd=googletag.cmd||[]}(),googletag.cmd.push(function(){var countryName="",url="/154962900/olympicchannel.olympic.org";$(".lang-switcher").get(0)&&(countryName=$(".lang-switcher").text().toUpperCase())&&"EN"===countryName&&(url=url.concat("/","FR")),"FR"===countryName?(googletag.defineSlot(url,[300,250],"div-gpt-ad-1513800038105-0").addService(googletag.pubads()),thewidth=document.documentElement.clientWidth,thewidth>=768?googletag.defineSlot(url,[728,90],"div-gpt-ad-1513800469289-0").addService(googletag.pubads()):googletag.defineSlot(url,[320,100],"div-gpt-ad-1513800495274-0").addService(googletag.pubads())):(googletag.defineSlot(url,[300,250],"div-gpt-ad-1516975995581-0").addService(googletag.pubads()),thewidth=document.documentElement.clientWidth,thewidth>=768?googletag.defineSlot(url,[728,90],"div-gpt-ad-1516976018884-0").addService(googletag.pubads()):googletag.defineSlot(url,[320,100],"div-gpt-ad-1516976047049-0").addService(googletag.pubads())),googletag.enableServices()}),$(function(){if($(".lang-switcher.link").prependTo(".lang-switcher-container"),$("a").each(function(){var $this=$(this),href=$this.attr("href"),host=location.protocol.concat("//").concat(window.location.hostname);void 0!==href&&$this.attr("href",href.replace("http://localhost",host))}),$(".lang-switcher").get(0)){var countryName=$(".lang-switcher").text().toUpperCase();if(countryName&&"EN"!==countryName){jQuery("#watchLink").one("click",function(){var script=document.createElement("script");$(window).width()<768?(script.type="text/javascript",script.text="googletag.cmd.push(function() { googletag.display('div-gpt-ad-1513800495274-0'); });",$("#ocAdWatchLive").html("<div id='div-gpt-ad-1513800495274-0'  style='width:320px; height:100px;'></div>"),$("#div-gpt-ad-1513800495274-0").html(script)):(script.type="text/javascript",script.text="googletag.cmd.push(function() { googletag.display('div-gpt-ad-1513800469289-0'); });",$("#ocAdWatchLive").html("<div id='div-gpt-ad-1513800469289-0'style='width:728px; height:90px;'></div>"),$("#div-gpt-ad-1513800469289-0").html(script))});var script2=document.createElement("script");script2.type="text/javascript",script2.text="googletag.cmd.push(function() { googletag.display('div-gpt-ad-1513800038105-0'); });",$("#ocAdSidebar").html("<div id='div-gpt-ad-1513800038105-0'  style='height:250px; width:100%; margin: 40px 0; text-align: center;'></div>"),$("#div-gpt-ad-1513800038105-0").html(script2)}else{jQuery("#watchLink").one("click",function(){var script=document.createElement("script");$(window).width()<768?(script.type="text/javascript",script.text="googletag.cmd.push(function() { googletag.display('div-gpt-ad-1516976047049-0'); });",$("#ocAdWatchLive").html("<div id='div-gpt-ad-1516976047049-0'  style='width:320px; height:100px;'></div>"),$("#div-gpt-ad-1516976047049-0").html(script)):(script.type="text/javascript",script.text="googletag.cmd.push(function() { googletag.display('div-gpt-ad-1516976018884-0'); });",$("#ocAdWatchLive").html("<div id='div-gpt-ad-1516976018884-0'style='width:728px; height:90px;'></div>"),$("#div-gpt-ad-1516976018884-0").html(script))});var script3=document.createElement("script");script3.type="text/javascript",script3.text="googletag.cmd.push(function() { googletag.display('div-gpt-ad-1516975995581-0'); });",$("#ocAdSidebar").html("<div id='div-gpt-ad-1516975995581-0'  style='height:250px; width:100%; margin: 40px 0; text-align: center;'></div>"),$("#div-gpt-ad-1516975995581-0").html(script3)}}SortEurosportPopup(),$(".jcf-select-second-drop").click(function(){var DefaultSpanFirstDrop=$(".jcf-select-first-drop .jcf-select-text span"),DefaultOptionFirstDrop=$(".first-drop option[data-defaultvalue]");DefaultSpanFirstDrop.html()!==$(DefaultOptionFirstDrop).data("defaultvalue")&&refreshSecondDropChild()}),$(".jcf-select-first-drop").click(function(){var $DefaultOptionFirstDrop=$(".first-drop option[data-defaultvalue]"),$DefaultSpanFirstDrop=$(".jcf-select-first-drop .jcf-select-text span"),$DefaultOptionSecondDrop=$(".second-drop option[data-defaultvalue]");$(".jcf-select-second-drop .jcf-select-text span").html($DefaultOptionSecondDrop.data("defaultvalue")),$(".second-drop").val($DefaultOptionSecondDrop.data("defaultvalue")),$DefaultOptionFirstDrop.get(0)&&$DefaultSpanFirstDrop.get(0)&&""===$DefaultSpanFirstDrop.html()&&$DefaultSpanFirstDrop.html($DefaultOptionFirstDrop.data("defaultvalue"))}),$("form.drop-banner input[data-type='clear']").on("click",function(e){e.preventDefault(),clearDropBanner(e)}),$("form.results-form").submit(function(e){e.preventDefault(),redirectFromDropBanner()});var $ResultGameForm=$("form.results-game-form");$ResultGameForm.get(0)&&$ResultGameForm.submit(function(e){e.preventDefault(),redirectFromGames()});var $ResultDisciplineForm=$("form.results-discipline-form");$ResultDisciplineForm.get(0)&&$ResultDisciplineForm.submit(function(e){e.preventDefault(),redirectFromDisc()})});var ATTR_BREADCRUMB_CONTEXT="data-breadcrumb-context",ATTR_BREADCRUMB_COLOR="data-breadcrumb-color",ATTR_BREADCRUMB_CONTEXTED="data-breadcrumb-contexted",ATTR_BREADCRUMB_KEEP_CONTEXT="data-breadcrumb-keep-context",ATTR_BREADCRUMB_IDS="data-breadcrumb-ids",ATTR_BREADCRUMB_REQUIRE_ID="data-breadcrumb-require-id",COOKIE_CONTEXT="breadcrumb-context",BANNER_TAG="banner-",COOKIE_CONTEXT_EXPIRES=1;"function"!=typeof String.prototype.startsWith&&(String.prototype.startsWith=function(str){return this.substring(0,str.length)===str}),$(function(){var cookieBreadcrumb=$.cookie(COOKIE_CONTEXT),$breadcrumb=$("["+ATTR_BREADCRUMB_CONTEXTED+"]");if($breadcrumb.size()>0&&cookieBreadcrumb)if($breadcrumb.size()>0&&$breadcrumb.attr(ATTR_BREADCRUMB_CONTEXTED)){var JSONContent=JSON.parse(cookieBreadcrumb),breadcrumbColor=JSONContent.items[0].contextColor,breadcrumbIds=JSONContent.items[0].contextIds;if("true"===$breadcrumb.attr(ATTR_BREADCRUMB_REQUIRE_ID)){var breadcrumbPageIds=$breadcrumb.attr(ATTR_BREADCRUMB_IDS),commonValues=getCommonValues(new Array(breadcrumbPageIds),new Array(breadcrumbIds));if(commonValues===undefined||commonValues.length<=0)return}var BreadcrumbHTML=$("nav.breadcrumbs ul");BreadcrumbHTML.empty(),JSONContent.items[JSONContent.items.length-1].contextName===$breadcrumb.attr(ATTR_BREADCRUMB_CONTEXT)&&JSONContent.items.pop();for(var i=0;i<JSONContent.items.length;i++)BreadcrumbHTML.append('<li><a href="'+JSONContent.items[i].contextUrl+'">'+JSONContent.items[i].contextName+"</a></li>");$("nav.breadcrumbs").attr("class","breadcrumbs "+breadcrumbColor).data("ScrollGallery").refreshGallery();var $banner=$breadcrumb.next('*[class*="'+BANNER_TAG+'"]');if($banner.size()>0){var bannerClass=$banner.getClassesStartingWith(BANNER_TAG);bannerClass!==undefined&&bannerClass.length>0&&$banner.attr("class",bannerClass[0]).addClass(breadcrumbColor)}}else $breadcrumb.size()>0&&!$breadcrumb.attr(ATTR_BREADCRUMB_KEEP_CONTEXT)&&$.removeCookie(COOKIE_CONTEXT,{path:"/"});if(($breadcrumb=$("["+ATTR_BREADCRUMB_CONTEXT+"]")).size()>0){var breadcrumbContext=$breadcrumb.attr(ATTR_BREADCRUMB_CONTEXT),breadcrumbColor2=$breadcrumb.attr(ATTR_BREADCRUMB_COLOR),breadcrumbIds2=$breadcrumb.attr(ATTR_BREADCRUMB_IDS),JSONContent2=null;cookieBreadcrumb&&$breadcrumb.attr(ATTR_BREADCRUMB_KEEP_CONTEXT)?(JSONContent2=JSON.parse(cookieBreadcrumb)).items.filter(function(line){return line.contextName===$breadcrumb.attr(ATTR_BREADCRUMB_CONTEXT)}).length<=0&&JSONContent2.items.push({contextName:$breadcrumb.attr(ATTR_BREADCRUMB_CONTEXT),contextUrl:window.location.href,contextColor:breadcrumbColor2,contextIds:breadcrumbId2s}):JSONContent2=JSON.parse('{ "items" : [{ "contextName":"'+breadcrumbContext+'" , "contextUrl":"'+window.location.href+'", "contextColor":"'+breadcrumbColor2+'", "contextIds":"'+breadcrumbIds2+'" } ]}'),$.removeCookie(COOKIE_CONTEXT,{path:"/"}),$.cookie(COOKIE_CONTEXT,JSON.stringify(JSONContent2),{expires:COOKIE_CONTEXT_EXPIRES,path:"/"})}}),jQuery.fn.getClassesStartingWith=function(){return this.attr("class").split(" ").filter(function(cl){return cl.startsWith(BANNER_TAG)})};var popupRouteCookieName="Valeur",popupRouteCookieSeparator="|";PopupRoute(),"function"!=typeof getCookie&&(window.getCookie=function(cname){for(var name=cname+"=",ca=decodeURIComponent(document.cookie).split(";"),i=0;i<ca.length;i++){for(var c=ca[i];" "===c.charAt(0);)c=c.substring(1);if(0===c.indexOf(name))return c.substring(name.length,c.length)}return""}),"function"!=typeof setCookie&&(window.setCookie=function(cname,cvalue,exdays){var d=new Date;d.setTime(d.getTime()+24*exdays*60*60*1e3);var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/"}),Array.prototype.filter||(Array.prototype.filter=function(func,thisArg){"use strict";if("function"!=typeof func||!this)throw new TypeError;var len=this.length>>>0,res=new Array(len),t=this,c=0,i=-1;if(thisArg===undefined)for(;++i!==len;)i in this&&func(t[i],i,t)&&(res[c++]=t[i]);else for(;++i!==len;)i in this&&func.call(thisArg,t[i],i,t)&&(res[c++]=t[i]);return res.length=c,res});