EBG="undefined"!=typeof EBG?EBG:{};EBG.Semi=EBG.Semi||{};EBG.Semi.Infra=function(){};EBG.Semi.Infra.declareNamespace=function(a){for(var b=window.EBG.Semi,a=a.split("."),c=0;c<a.length;c++){var d=a[c],e=b[d];e||(e=b[d]={});b=e}};EBG.Semi.Infra.isDefined=function(a){return"undefined"!=typeof a};EBG.Semi.Infra.runTimed=function(a,b,c,d){return setTimeout(function(){b.apply(a,c)},d)};EBG.Semi.Infra.indexOfArray=function(a,b,c){for(var c=c||0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1};
EBG.Semi.Infra.getTimestamp=function(){var a=new Date;return parseInt(a.getHours()+1)+":"+a.getMinutes()+":"+a.getSeconds()+"."+a.getMilliseconds()+" "+a.getDate()+"."+parseInt(a.getMonth()+1)+"."+a.getFullYear()};EBG.Semi.Infra.getUrlParameter=function(a){var b="",c=EBG.Semi.Infra.getWindowLocation().toString(),d=RegExp("[&,?]"+a+"=(.*)$","i");if((a=c.match(RegExp("[&,?]"+a+"=(.*)[&]","i"))||c.match(d))&&0<a.length)-1<a[1].indexOf("&")&&(a[1]=a[1].substr(0,a[1].indexOf("&"))),b=a[1];return b};
EBG.Semi.Infra.mergeObj=function(a,b,c){var c=!!c,d;for(d in a)if(a.hasOwnProperty(d)&&(!b.hasOwnProperty(d)||c))b[d]=a[d]};EBG.Semi.Infra.combinePaths=function(a,b){a=a||"";b=b||"";a&&"/"!=a[a.length-1]&&b&&"/"!=b[0]&&(a+="/");var c=a;b&&(c+=b);return c};EBG.Semi.Infra.isPageLoaded=function(){var a=!0;"complete"!=document.readyState&&"loaded"!=document.readyState&&"interactive"!=document.readyState&&(a=!1);return a};
EBG.Semi.Infra.addChildToPage=function(a,b,c,d){if("undefined"==typeof b||!b)b=document.body||document.getElementsByTagName("head")[0];this.isDefined(c)&&null!=c&&this.addEventListener(a,c,d);b.appendChild(a)};EBG.Semi.Infra.addEventListener=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):(b="on"+b,a.attachEvent?a.attachEvent(b,c):b in a&&(a[b]=c))};EBG.Semi.Infra.createScriptElement=function(a,b,c,d){try{var e=a.createElement(b);e.type=c;e.src=d;e.async=!1;return e}catch(g){}};
EBG.Semi.Infra.addScriptElement=function(a,b,c){var d=c?c:document;if(b){if(c=b,0==c.childNodes.length)d=d.createElement("div"),d.style.display="none",b.appendChild(d)}else c=d.head||d.documentElement;c.insertBefore(a,c.firstChild)};
EBG.Semi.Infra.injectScript=function(a){var a="<html><head></head><body>"+a+"</body></html>",b=this.createFriendlyIframe();this.addChildToPage(b);document.documentMode&&7<document.documentMode&&!this.isIframeScriptable(b)&&this.enableIframeScriptable(b);this.writeToFriendlyIframe(b,a,!0)};
EBG.Semi.Infra.loadFileByScriptElem=function(a,b,c,d,e,g){if(d)a=a?a:document,a.write("<script src='"+b+"'><\/script>"),a.close();else{var h=document.createElement("script");h.type="text/"+(b.type||"javascript");h.src=b.src||b;h.async=!0;var f=!1;h.onreadystatechange=h.onload=function(){var a=h.readyState;if(c&&!f&&(!a||/loaded|complete/.test(a)))f=!0,c.apply(e,[g])};EBG.Semi.Infra.addChildToPage(h)}};EBG.Semi.Infra.getWindowLocation=function(){return window.location};
EBG.Semi.Infra.getRandomNumber=function(){try{var a=Math.random().toString();return a=a.substr(a.indexOf(".")+1)}catch(b){}};EBG.Semi.Infra.getAddInEyeDomain=function(a){var b="",c="",d=0,a=(a?a:window).document,a=a.referrer?a.referrer:a.location.href;try{a=a.toLowerCase(),7<=a.length&&"http://"==a.substr(0,7)?(c=a.substr(7),a.substr(0,7)):8<=a.length&&"https://"==a.substr(0,8)?(c=a.substr(8),a.substr(0,8)):c=a,d=c.indexOf("/"),0<d&&(c=c.substr(0,d)),b=c}catch(e){b=""}return b};
EBG.Semi.Infra.createFriendlyIframe=function(a,b,c,d){a=(a?a:document).createElement("iframe");b&&a.setAttribute("id",b);a.style.display=c?"":"none";a.style.width=c?c+"px":"0px";a.style.height=d?d+"px":"0px";document.documentMode&&8>document.documentMode?(a.frameBorder=0,a.margin=0,a.marginWidth=0,a.marginHeight=0,a.scrolling="no"):(a.setAttribute("scrolling","no"),a.setAttribute("marginwidth","0"),a.setAttribute("marginheight","0"),a.setAttribute("frameborder","0"));return a};
EBG.Semi.Infra.isIframeScriptable=function(a){try{this.ifrmDocument=a.contentWindow.document}catch(b){return!1}return!0};EBG.Semi.Infra.enableIframeScriptable=function(a){if(a){a.setAttribute("data-isready","false");var b;b="javascript:document.write('<scr'+'ipt>\r"+('try{parent.document.domain;}catch(e){document.domain="'+document.domain+'";}\r');a.src=b+"parent.EBG.Semi.Infra.friendlyIframeIsReadyCallback(window);\r</scr'+'ipt>\r');"}};
EBG.Semi.Infra.friendlyIframeIsReadyCallback=function(a){for(var b=document.getElementsByTagName("iframe"),c=0;c<b.length;c++)try{if((b[c].contentWindow||b[c].contentDocument.window||b[c].window)==a){b[c].setAttribute("data-isready","true");break}}catch(d){}};
EBG.Semi.Infra.writeToFriendlyIframe=function(a,b,c){if(document.documentMode&&7<document.documentMode&&"false"==a.getAttribute("data-isready"))setTimeout(function(){EBG.Semi.Infra.writeToFriendlyIframe(a,b,c)},100);else{var c=this.isDefined(c)?c:!1,d;d=a.contentWindow?a.contentWindow.document:a.contentDocument&&a.contentDocument.document?a.contentDocument.document:a.contentDocument;d.write(b);c&&setTimeout(function(){d.close()},1E3)}};
EBG.Semi.Infra.createUnfriendlyIframe=function(a,b){if(b&&!EBG.Semi.Infra.isPageLoaded())this.logger&&this.logger.info("Adding unfriendly iframe in sync mode, url: "+a),document.write('<iframe src="'+a+'" style="display:none;width:0px;height:0px"></iframe>');else{this.logger&&this.logger.info("Adding unfriendly iframe in async mode, url: "+a);var c=document.createElement("iframe");c.setAttribute("src",a);c.style.display="none";EBG.Semi.Infra.addChildToPage(c)}};
EBG.Semi.Infra.getTopLevelReferrer=function(a){var b=null;try{if(a.top&&a.top.document&&a.top.document.referrer)b=a.top.document.referrer.toString();else throw Error("Unfriendly iframe");}catch(c){this.isDefined(a)&&a.document&&a.document.referrer&&(b=a.document.referrer.toString())}return b};EBG.Semi.Infra.getTokenValueFromURL=function(a,b){var c=b.indexOf("?")?b.split("?")[1]:"";if(c)for(var c=c.split("&"),d=0;d<c.length;d++){var e=c[d].split("=");if(e[0]==a)return e[e.length-1]}return null};
EBG.Semi.Infra.urlAvailableLength=function(a){var b=8E3;EBG.Semi.Infra.isOldIE()&&(b=2048);return b-a.length};EBG.Semi.Infra.isOldIE=function(){var a=navigator.userAgent,b;if(-1!=(b=a.indexOf("MSIE"))){a=a.substring(b+5);if(-1!=(b=a.indexOf(";")))a=a.substring(0,b);if(-1!=(b=a.indexOf(" ")))a=a.substring(0,b);a=parseInt(""+a,10);isNaN(a)&&(parseFloat(navigator.appVersion),a=parseInt(navigator.appVersion,10));if(9>a)return!0}return!1};
EBG.Semi.Infra.typeOf=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array||!(a instanceof Object)&&"[object Array]"==Object.prototype.toString.call(a)||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if(!(a instanceof Object)&&("[object Function]"==Object.prototype.toString.call(a)||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call")))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};EBG.Semi.declareNamespace=EBG.Semi.Infra.declareNamespace;EBGVT="undefined"!=typeof EBGVT?EBGVT:{};EBGVT.JSON="JSON"in window&&window.JSON&&window.JSON.stringify&&window.JSON.parse?JSON:{};
(function(){function a(a){return 10>a?"0"+a:a}function b(a){e.lastIndex=0;return e.test(a)?'"'+a.replace(e,function(a){var b=f[a];return"string"===typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function c(a,d){var e,f,l,n,o=g,k,j=d[a];j&&"object"===typeof j&&"function"===typeof j.toJSON&&(j=j.toJSON(a));"function"===typeof m&&(j=m.call(d,a,j));switch(typeof j){case "string":return b(j);case "number":return isFinite(j)?""+j:"null";case "boolean":case "null":return""+
j;case "object":if(!j)return"null";g+=h;k=[];if("[object Array]"===Object.prototype.toString.apply(j)){n=j.length;for(e=0;e<n;e+=1)k[e]=c(e,j)||"null";l=0===k.length?"[]":g?"[\n"+g+k.join(",\n"+g)+"\n"+o+"]":"["+k.join(",")+"]";g=o;return l}if(m&&"object"===typeof m){n=m.length;for(e=0;e<n;e+=1)f=m[e],"string"===typeof f&&(l=c(f,j))&&k.push(b(f)+(g?": ":":")+l)}else for(f in j)Object.hasOwnProperty.call(j,f)&&(l=c(f,j))&&k.push(b(f)+(g?": ":":")+l);l=0===k.length?"{}":g?"{\n"+g+k.join(",\n"+g)+"\n"+
o+"}":"{"+k.join(",")+"}";g=o;return l}}if("function"!==typeof Date.prototype.toJSON)Date.prototype.toJSON=function(){return this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"Z"},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()};var d=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
e=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,g,h,f={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},m;if("function"!==typeof EBGVT.JSON.stringify)EBGVT.JSON.stringify=function(a,b,d){var e;h=g="";if("number"===typeof d)for(e=0;e<d;e+=1)h+=" ";else"string"===typeof d&&(h=d);if((m=b)&&"function"!==typeof b&&("object"!==typeof b||"number"!==typeof b.length))throw Error("EBGVT.JSON.stringify");
return c("",{"":a})};if("function"!==typeof EBGVT.JSON.parse)EBGVT.JSON.parse=function(a,b){function c(a,d){var e,f,g=a[d];if(g&&"object"===typeof g)for(e in g)Object.hasOwnProperty.call(g,e)&&(f=c(g,e),void 0!==f?g[e]=f:delete g[e]);return b.call(a,d,g)}var e;d.lastIndex=0;d.test(a)&&(a=a.replace(d,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+a+")"),"function"===typeof b?c({"":e},""):e;throw new SyntaxError("EBGVT.JSON.parse");}})();EBG.Semi.EventName={ALL_USER_ID_FOUND:"allUserIdFound"};EBG.Semi.ServingState={script:"SCRIPT",friendlyIframe:"FRIENDLY_IFRAME",unfriendlyIframe:"IFRAME"};EBG.Semi.Events=EBG.Semi.Events||{};EBG.Semi.Events.EventManager=function(){};
EBG.Semi.Events.EventManager.prototype={_subscriptions:{},subscribeToEvent:function(a,b,c,d){this._subscriptions[a]||(this._subscriptions[a]={});this._subscriptions[a][d]||(this._subscriptions[a][d]=[]);d&&this._subscriptions[a][d].push({callback:b,bindingCallback:c})},dispatchEvent:function(a,b,c){if(c)for(var d=this._subscriptions[a][c],e=0;e<d.length;++e){var g=this._subscriptions[a][c][e],h=g.callback;h.apply(g.bindingCallback,[b])}else for(c in a=this._subscriptions[a],a)if(a[c]){d=a[c];for(e=
0;e<d.length;++e)g=a[c][e],h=g.callback,h.apply(g.bindingCallback,[b])}}};EBG.Semi.Events.eventMgr=EBG.Semi.Events.eventMgr||new EBG.Semi.Events.EventManager;EBG.Semi.WindowUtil=function(){};
EBG.Semi.WindowUtil.getTopWindow=function(){var a=window;a.EBservingMode=EBG.Semi.ServingState.script;try{for(;a!==a.parent;){var b=null;try{b=a.parent.location.hostname}catch(c){}if(a.location.hostname===b)a=a.parent,a.EBservingMode=EBG.Semi.ServingState.friendlyIframe;else{a.EBservingMode=EBG.Semi.ServingState.unfriendlyIframe;break}}}catch(d){}return a};
EBG.Semi.BrowserDetector=function(){this.browserName=navigator.appName;this.fullVersion=""+parseFloat(navigator.appVersion);this.majorVersion=parseInt(navigator.appVersion,10);this._init()};EBG.Semi.BrowserDetector.Browser={InternetExplorer:"InternetExplorer",Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Safari:"Safari"};
EBG.Semi.BrowserDetector.prototype={_init:function(){var a=navigator.userAgent,b,c;if(-1!=(c=a.indexOf("Opera"))){if(this.browserName=EBGVT.BrowserDetector.Browser.Opera,this.fullVersion=a.substring(c+6),-1!=(c=a.indexOf("Version")))this.fullVersion=a.substring(c+8)}else if(-1!=(c=a.indexOf("MSIE")))this.browserName=EBGVT.BrowserDetector.Browser.InternetExplorer,this.fullVersion=a.substring(c+5);else if(-1!=(c=a.indexOf("Chrome")))this.browserName=EBGVT.BrowserDetector.Browser.Chrome,this.fullVersion=
a.substring(c+7);else if(-1!=(c=a.indexOf("Safari"))){if(this.browserName=EBGVT.BrowserDetector.Browser.Safari,this.fullVersion=a.substring(c+7),-1!=(c=a.indexOf("Version")))this.fullVersion=a.substring(c+8)}else if(-1!=(c=a.indexOf("Firefox")))this.browserName=EBGVT.BrowserDetector.Browser.Firefox,this.fullVersion=a.substring(c+8);else if((b=a.lastIndexOf(" ")+1)<(c=a.lastIndexOf("/")))if(this.browserName=a.substring(b,c),this.fullVersion=a.substring(c+1),this.browserName.toLowerCase()==this.browserName.toUpperCase())this.browserName=
navigator.appName;if(-1!=(a=this.fullVersion.indexOf(";")))this.fullVersion=this.fullVersion.substring(0,a);if(-1!=(a=this.fullVersion.indexOf(" ")))this.fullVersion=this.fullVersion.substring(0,a);this.majorVersion=parseInt(""+this.fullVersion,10);if(isNaN(this.majorVersion))this.fullVersion=""+parseFloat(navigator.appVersion),this.majorVersion=parseInt(navigator.appVersion,10)}};EBG.Semi.declareNamespace("Logging");
EBG.Semi.Logging.Logger=function(a){this._level=a;this.startNestingGroupNames=[];this.endNestingGroupNames=[]};EBG.Semi.Logging.Logger.DebugMode="mmdebug";EBG.Semi.Logging.Logger.LoggerLevels={NONE:0,ERROR:1,INFO:2,WARN:3,DEBUG:4};
EBG.Semi.Logging.Logger.prototype={setLevel:function(a){this._level=a},timestamp:!1,debug:function(a){this._reportToLog(EBG.Semi.Logging.Logger.LoggerLevels.DEBUG,arguments)},info:function(a){this._reportToLog(EBG.Semi.Logging.Logger.LoggerLevels.INFO,arguments)},warn:function(a){this._reportToLog(EBG.Semi.Logging.Logger.LoggerLevels.WARN,arguments)},error:function(a){this._reportToLog(EBG.Semi.Logging.Logger.LoggerLevels.ERROR,arguments)},exception:function(a,b){var c="string"!==b?this._format("Exception in {0}. message: {1}",
a,b.message):this._format("Exception in: {0}. message: {1}",a,b);b.stack&&(c+=this._format(" stack: {0}",b.stack));this._reportToLog(EBG.Semi.Logging.Logger.LoggerLevels.ERROR,[c])},startGroup:function(a){this._supportNesting()&&this.startNestingGroupNames.push(a)},endGroup:function(){this._supportNesting()&&0<this.endNestingGroupNames.length&&window.console.groupEnd(this.endNestingGroupNames.pop())},_consoleAvailable:function(){try{return void 0!==window&&void 0!==window.console}catch(a){return!1}},
_supportNesting:function(){return this._consoleAvailable()?void 0!==window.console.group:!1},_supportErrorMessage:function(){return void 0!==window.console.error},_supportInfoMessage:function(){return void 0!==window.console.info||void 0!==window.opera},_supportWarnMessage:function(){return void 0!==window.console.warn||void 0!==window.opera},_supportObjectView:function(){return void 0!==window.console.dir||void 0!==window.opera},_callConsoleFunction:function(a,b){var c=!1;switch(a){case EBG.Semi.Logging.Logger.LoggerLevels.INFO:this._supportInfoMessage()&&
(window.console.info(b),c=!0);break;case EBG.Semi.Logging.Logger.LoggerLevels.WARN:this._supportWarnMessage()&&(window.console.warn(b),c=!0);break;case EBG.Semi.Logging.Logger.LoggerLevels.ERROR:this._supportErrorMessage()&&(consoleFunction=window.console.error(b),c=!0)}c||window.console.log(b)},_format:function(a){for(var b=1;b<arguments.length;b++)a=a.replace(RegExp("\\{"+(b-1)+"\\}","gi"),""+arguments[b]);return a},_getTimestamp:function(){if(this.timestamp)return EBG.Semi.Infra.getTimestamp()},
_reportToLog:function(a,b){if(this._level>=a&&this._consoleAvailable()){var c=b[0];"[object String]"!==Object.prototype.toString.call(c)?this._supportObjectView()||(c=c.toString()):c=this._format.apply(null,b);this.timestamp&&"[object String]"===Object.prototype.toString.call(c)&&(c=this._getTimestamp()+": "+c);if(void 0===window.opera){for(;this.startNestingGroupNames.length;)window.console.group(this.startNestingGroupNames[0]),this.endNestingGroupNames.push(this.startNestingGroupNames.shift());
this._callConsoleFunction(a,c)}else opera.postError(c)}}};EBG.Semi.ServerCommunicator=function(){this._imgArr=[];for(i=0;10>i;i++)this._imgArr.push(new Image)};EBG.Semi.ServerCommunicator.prototype={reportUrlsList:function(a){for(var b=0;b<this._imgArr.length;b++)this.reportUrl(a,this._imgArr[b])},reportUrl:function(a,b){if(0<a.length){var c=this,d=a.shift();b.onload=b.onerror=function(){c.reportUrl(a,b)};b.src=d}}};
EBGVT.RuleManager=function(a,b,c,d){if(EBGVT.Light.Infra.isDefined(a))this._sessionId=b,this._diAppId=c||-1,this._usercookie=d||"",this._buildRulesArray(a)};
EBGVT.RuleManager.prototype={_rules:[],_rulesHitted:[],_buildRulesArray:function(a){for(var b in a)this._rules.push(new EBGVT.Rule(a[b],{binding:this,func:this._onRuleHit}))},_onRuleHit:function(a){if(versaTagObj){-1==EBGVT.Light.Infra.indexOfArray(this._rulesHitted,a)&&this._rulesHitted.push(a);this._timeoutHandler&&clearTimeout(this._timeoutHandler);var b=this;this._timeoutHandler=setTimeout(function(){versaTagObj.generateRequest(null,{sessionId:b._sessionId,browserEvent:b._rulesHitted,diAppId:b._diAppId,
usercookie:b._usercookie},!0);b._rulesHitted=[]},1)}}};EBGVT.Events=EBGVT.Events||{};EBGVT.Rule=function(a,b){this._id=a.id;this._callback=b;this._createEvents(a);this._conditions=a.conditions||this._getDefaultConditionString()};
EBGVT.Rule.prototype={_createEvents:function(a){this._events={};var b=/e[0-9]/i,c;for(c in a)if(a.hasOwnProperty(c)&&b.test(c))try{EBGVT.Events[a[c].type]&&(this._events[c]=new EBGVT.Events[a[c].type](c,a[c].data,{func:this._eventMatchHandler,binding:this}))}catch(d){}},_getDefaultConditionString:function(){var a="",b=[],c;for(c in this._events)b.push(c);if(1==b.length)return b[0];try{a+=b[0];a+=b[1];a+="|";for(c=2;c<b.length;c++)a+=b[c]+"|"}catch(d){}return a},_eventMatchHandler:function(){this._checkRuleHit(this._conditions)&&
(this._resetEventStatus(),this._callback.func.apply(this._callback.binding,[this._id]))},_resetEventStatus:function(){for(var a in this._events)this._events[a].reset()},_checkRuleHit:function(a){try{var b=this._breakConditionString(a);if(1==b.length)return this._evaluateEvent(b[0]);var c=b[0],d=b[1],e=0,e="&"==b[2]?this._evaluateEvent(c)&&this._evaluateEvent(d)?1:0:this._evaluateEvent(c)||this._evaluateEvent(d)?1:0;return this._checkRuleHit(e+a.substring(b.join("").length))}catch(g){return!1}},_evaluateEvent:function(a){if(!isNaN(a))return!!(1*
a);a=this._events[a];return 1*(a&&a.applied)},_breakConditionString:function(a){for(var b=[],c=0;c<a.length;c++){var d=a.charAt(c);if(isNaN(d))if("e"==d)b.push("e"+a.charAt(++c));else{if("&"==d||"|"==d){b.push(d);break}}else b.push(d)}return b}};EBGVT.Events.ElementEvent=function(a,b,c){(EBGVT.Light.Infra.isDefined(b)||EBGVT.Light.Infra.isDefined(c))&&this.init(a,b,c)};
EBGVT.Events.ElementEvent.prototype={applied:!1,init:function(a,b,c){var d=this;this._wins=this._getWindowsArray();var e=this._select(decodeURIComponent(b.selector));if("loading"==document.readyState||!e.length)setTimeout(function(){d.init(a,b,c)},100);else{this._id=a;this._callback=c;for(var g=0;g<e.length;g++)EBGVT.Light.Infra.addEventListener(e[g],b.eventName,function(a){d.onEvent(a)})}},onEvent:function(){this.applied=!0;this._callback.func.apply(this._callback.binding,[this._id])},_select:function(a){for(var b=
[],c=0;c<this._wins.length;c++){var d=this._wins[c].document.querySelectorAll(a);if(d)for(var e=0;e<d.length;e++)b.push(d[e])}return b},_getWindowsArray:function(){for(var a=window,b=[a];a!==a.parent&&a.self!==a.parent;)try{if(a.parent.document.domain)a=a.parent,b.push(a);else return b}catch(c){break}return b},reset:function(){this.applied=!1}};EBGUIP="undefined"!=typeof EBGUIP?EBGUIP:{};EBGUIP.Events=EBGUIP.Events||{};
EBGUIP.Events.EventName={USER_ID_FOUND:"userIdFound",DOC_LOADED:"documentLoaded",EBUID_LOADED:"ebuidLoaded"};EBGUIP.Events.eventMgr=EBGUIP.Events.eventMgr||new EBG.Semi.Events.EventManager;EBGUIP="undefined"!=typeof EBGUIP?EBGUIP:{};
EBGUIP.UserIdProvider=function(){if("undefined"!=typeof gEBMainWindow&&gEBMainWindow.providersData)this._providersData=gEBMainWindow.providersData;else if("undefined"!=typeof gEBMainWindow)this._providersData={AdTruth:{data:null,providerCalled:!1},EBUidCache:{data:null,providerCalled:!1},Device9:{data:null,providerCalled:!1}},gEBMainWindow.providersData=this._providersData};
EBGUIP.UserIdProvider.prototype={_filter:null,_currTagData:null,_arrProvidersNamesUsed:null,_providersEnum:["AdTruth","EBUidCache","Device9","SizmekDI"],_providers:{AdTruth:{isUsed:!1,shouldSendData:!0},EBUidCache:{isUsed:!1,shouldSendData:!0},Device9:{isUsed:!1,shouldSendData:!1},SizmekDI:{isUsed:!1,shouldSendData:!0}},_providersData:null,getUserIds:function(a){this._filter=a.filter;this._init();this._currTagData=a;if(!this._currTagData.currDoc)this._currTagData.currDoc=document;this._arrProvidersNamesUsed=
this._getValidProviderNames(a.uip);for(a=0;a<this._arrProvidersNamesUsed.length;a++)this._providers[this._arrProvidersNamesUsed[a]].isUsed=!0;this._loadProviders()},_init:function(){for(var a in this._providers)this._providers[a].isUsed=!1},_loadProviders:function(){if(0<this._arrProvidersNamesUsed.length){var a=this._arrProvidersNamesUsed[0];if(this._providersData[a].providerCalled)this._getUserIdentification({providerName:a});else{EBGUIP.Events.eventMgr.subscribeToEvent(EBGUIP.Events.EventName.USER_ID_FOUND,
this._getUserIdentification,this,this._filter);var b=this._buildProviderURL(a);this._currTagData.isSync?(EBGUIP.Events.eventMgr.subscribeToEvent(EBGUIP.Events.EventName.DOC_LOADED,this._providerLoaded,this,this._filter),EBG.Semi.Infra.loadFileByScriptElem(this._currTagData.currDoc,b,null,!0)):EBG.Semi.Infra.loadFileByScriptElem(this._currTagData.currDoc,b,this._providerLoaded,!1,this,{providerName:a})}}},_buildProviderURL:function(a){a=this._currTagData.scriptsPath+"UserProviders"+this._currTagData.uipv+
"/"+a+".js";-1==this._currTagData.scriptsPath.indexOf("http")&&(a=this._getRequestProtocol(this._currTagData.ebPtcl)+a);return a},_getRequestProtocol:function(a){if(a)return a;var a="https://secure-",b=location.protocol;if("javascript:"==b)try{b=parent.location.protocol}catch(c){}"http:"==b&&(a=b+"//");return a},_providerLoaded:function(a){a=a.providerName;-1!=EBG.Semi.Infra.indexOfArray(this._arrProvidersNamesUsed,a)&&(new window.EBGUIP[a]).init(this._currTagData)},_getUserIdentification:function(a){var b=
EBG.Semi.Infra.indexOfArray(this._arrProvidersNamesUsed,a.providerName);if(-1!=b){if(a.tokenName&&a.id&&this._providers[a.providerName].shouldSendData&&!this._providersData[a.providerName].data)this._providersData[a.providerName].data="&"+a.tokenName+"="+a.id;this._providersData[a.providerName].providerCalled=!0;this._arrProvidersNamesUsed.splice(b,1);0==this._arrProvidersNamesUsed.length?(a={userIdStr:this._getProvidersData()},EBG.Semi.Events.eventMgr.dispatchEvent(EBG.Semi.EventName.ALL_USER_ID_FOUND,
a,this._filter)):this._loadProviders()}},_getProvidersData:function(){var a="",b;for(b in this._providersData)this._providers[b].isUsed&&this._providers[b].shouldSendData&&(a+=this._providersData[b].data);return a},_getValidProviderNames:function(a){for(var b=[],c=0;c<a.length;c++)b[b.length]=this._providersEnum[a[c]-1];return b}};EBG.Semi.AttributionEnum=function(){};
EBG.Semi.AttributionEnum.UrlParamNames={ID:"onetagid",DISP_TYPE:"dispType",SYNC:"sync",ONETAG_URL:"ebOneTagURL",PAGE_URL:"pageurl",DEBUG_MODE:"debugmode",NO_SCRIPT:"ns",MOBILE:"mb",ACTIVITY_PARAMS:"activityValues",RETARGET_PARAMS:"retargetingValues",DYNAMIC_RETARGET_PARAMS:"dynamicRetargetingValues",CONDITIONAL_PARAMS:"acp",RANDOM:"rnd",SEC_CALL:"secCall",SESSION_ID:"sessionid",ORIG_URL_LENGTH:"origLength",SERVING_PIPE:"/Serving",PREV_SERVING_PIPE:"/BurstingPipe",BROWSER_EVENT:"tp_be",ADV_DEVICE_ID:"ebaddid",
DI_APP_ID:"diappid",USER_COOKIE:"usercookie"};EBG.Semi.AttributionEnum.DisplayTypes={IFRAME:"iframe",JAVASCRIPT:"js"};EBG.Semi.AttributionEnum.HttpProtocol={HTTP:"http",HTTPS:"https"};EBGVT="undefined"!=typeof EBGVT?EBGVT:{};EBGVT.Light=EBGVT.Light||{};EBGVT.Light.Infra=EBG.Semi.Infra;EBGVT.Light.Logger=EBG.Semi.Logging.Logger;EBGVT.EBGUIP=EBGUIP;EBGVT.OneTagLogger=function(){};
EBGVT.OneTag=function(){this.logNeeded=EBGVT.Light.Infra.getUrlParameter(EBGVT.Light.Logger.DebugMode)?1:0;this.oneTagLogger=new EBGVT.Light.Logger(EBGVT.Light.Infra.getUrlParameter(EBGVT.Light.Logger.DebugMode));this.uidProviders=new EBGVT.EBGUIP.UserIdProvider;this.oneTagLogger.timestamp=!0;this.serverCommunicator=this.serverCommunicator||new EBG.Semi.ServerCommunicator;this._oneTagObj=this.pageUrl=null;if(EBGVT.Light.Infra.isDefined(window.versaTag))this._oneTagObj=versaTag};
EBGVT.OneTag.prototype={_userIdProvidersCalled:!1,_providers:null,generateRequest:function(a,b,c){if(this._oneTagObj){this.oneTagLogger.info("One Tag Started");this.pageUrl=this._oneTagObj.overridePageUrl||a;if(b&&b.firstPartyServingDomain)this._oneTagObj.bsUrl=b.firstPartyServingDomain+EBG.Semi.AttributionEnum.UrlParamNames.SERVING_PIPE;var a=b&&b.sessionId?b.sessionId:"0",d=b&&b.browserEvent?"$$"+b.browserEvent.join("&")+"$$":"",e=b&&EBGVT.Light.Infra.isDefined(b.diAppId)?b.diAppId:-1;b&&EBGVT.Light.Infra.isDefined(b.usercookie);
c=this._generateBsURL(this._oneTagObj,this.pageUrl,c,a,d,e);this.oneTagLogger.info("Server URL: "+c);b&&b.preServingTasks&&0<b.preServingTasks.length&&this._userIdProvidersCalled&&(c=this._addProviderUserId(c,b));this._oneTagObj.dispType.toLowerCase()==EBG.Semi.AttributionEnum.DisplayTypes.IFRAME?EBGVT.Light.Infra.createUnfriendlyIframe(c,this._oneTagObj.sync):EBG.Semi.Infra.loadFileByScriptElem(document,c,function(){this._handleResponse()},1==this._oneTagObj.sync,this)}else if(b&&c){c=document.location.href;
if(b&&b.firstPartyServingDomain)a=document.domain,d=a+location.pathname,a&&0<a.length&&(c=0<c.indexOf(d)?c.replace(d,b.firstPartyServingDomain+EBG.Semi.AttributionEnum.UrlParamNames.SERVING_PIPE):c.replace(a,b.firstPartyServingDomain));c=c.replace(EBG.Semi.AttributionEnum.UrlParamNames.DISP_TYPE+"="+EBG.Semi.AttributionEnum.DisplayTypes.IFRAME,EBG.Semi.AttributionEnum.UrlParamNames.DISP_TYPE+"="+EBG.Semi.AttributionEnum.DisplayTypes.JAVASCRIPT);c=c.replace("cn=ot","cn=ot&"+EBG.Semi.AttributionEnum.UrlParamNames.SEC_CALL+
"=1"+(b.sessionId?"&sessionid="+b.sessionId:""));c=this._addProviderUserId(c,b);b=c.substr(c.indexOf(EBG.Semi.AttributionEnum.UrlParamNames.SYNC)+(EBG.Semi.AttributionEnum.UrlParamNames.SYNC+"=").length,1);EBG.Semi.Infra.loadFileByScriptElem(document,c,function(){this._handleResponse()},1==b,this)}},setActivityParam:function(a,b){if(!this._oneTagObj.activityParams)this._oneTagObj.activityParams={};this._oneTagObj.activityParams[a]=b},getActivityParam:function(a){var b=null;this._oneTagObj.activityParams&&
this._oneTagObj.activityParams[a]&&(b=this._oneTagObj.activityParams[a]);return b},clearActivityParam:function(){this._oneTagObj.activityParams={}},setRetargetParam:function(a,b){if(!this._oneTagObj.retargetParams)this._oneTagObj.retargetParams={};this._oneTagObj.retargetParams[a]=b},getRetargetParam:function(a){var b=null;this._oneTagObj.retargetParams&&this._oneTagObj.retargetParams[a]&&(b=this._oneTagObj.retargetParams[a]);return b},clearRetargetParam:function(){this._oneTagObj.retargetParams=
{}},setDynamicRetargetParam:function(a,b){if(!this._oneTagObj.dynamicRetargetParams)this._oneTagObj.dynamicRetargetParams={};this._oneTagObj.dynamicRetargetParams[a]=b},getDynamicRetargetParam:function(a){var b=null;this._oneTagObj.dynamicRetargetParams&&this._oneTagObj.dynamicRetargetParams[a]&&(b=this._oneTagObj.dynamicRetargetParams[a]);return b},clearDynamicRetargetParam:function(){this._oneTagObj.dynamicRetargetParams={}},setConditionalParam:function(a,b){if(!this._oneTagObj.conditionalParams)this._oneTagObj.conditionalParams=
{};this._oneTagObj.conditionalParams[a]=b},getConditionalParam:function(a){var b=null;this._oneTagObj.conditionalParams&&this._oneTagObj.conditionalParams[a]&&(b=this._oneTagObj.conditionalParams[a]);return b},clearConditionalParam:function(){this._oneTagObj.conditionalParams={}},_generateBsURL:function(a,b,c,d,e,g,h){a.bsUrl=a.bsUrl.replace(EBG.Semi.AttributionEnum.UrlParamNames.PREV_SERVING_PIPE,EBG.Semi.AttributionEnum.UrlParamNames.SERVING_PIPE);var f=this._getProtocol(a.ptcl)+a.bsUrl+"?cn=ot&"+
EBG.Semi.AttributionEnum.UrlParamNames.ID+"="+a.id+"&"+EBG.Semi.AttributionEnum.UrlParamNames.DISP_TYPE+"="+a.dispType+"&"+EBG.Semi.AttributionEnum.UrlParamNames.SYNC+"="+a.sync;c&&(f+="&"+EBG.Semi.AttributionEnum.UrlParamNames.SEC_CALL+"=1");"0"!=d&&(f+="&"+EBG.Semi.AttributionEnum.UrlParamNames.SESSION_ID+"="+d);a.mobile&&(f+="&"+EBG.Semi.AttributionEnum.UrlParamNames.MOBILE+"="+a.mobile);e&&(f+="&"+EBG.Semi.AttributionEnum.UrlParamNames.BROWSER_EVENT+"="+e);0<=g&&(f+="&"+EBG.Semi.AttributionEnum.UrlParamNames.DI_APP_ID+
"="+g);h&&(f+="&"+EBG.Semi.AttributionEnum.UrlParamNames.USER_COOKIE+"="+h);a.advertiserDeviceId&&(f+="&"+EBG.Semi.AttributionEnum.UrlParamNames.ADV_DEVICE_ID+"="+a.advertiserDeviceId);b=b?escape(b):escape(EBGVT.Light.Infra.getWindowLocation());f+="&"+EBG.Semi.AttributionEnum.UrlParamNames.PAGE_URL+"=$$"+b+"$$";f+=this._prepareParamUrl(a.activityParams,EBG.Semi.AttributionEnum.UrlParamNames.ACTIVITY_PARAMS);f+=this._prepareParamUrl(a.retargetParams,EBG.Semi.AttributionEnum.UrlParamNames.RETARGET_PARAMS);
f+=this._prepareParamUrl(a.conditionalParams,EBG.Semi.AttributionEnum.UrlParamNames.CONDITIONAL_PARAMS);f+=this._prepareParamUrl(a.dynamicRetargetParams,EBG.Semi.AttributionEnum.UrlParamNames.DYNAMIC_RETARGET_PARAMS);a.dispType.toLowerCase()==EBG.Semi.AttributionEnum.DisplayTypes.IFRAME&&(f+="&"+EBG.Semi.AttributionEnum.UrlParamNames.ONETAG_URL+"=$$"+escape(document.getElementById("ebOneTagUrlId").src)+"$$");this.logNeeded&&(f+="&"+EBGVT.Light.Logger.DebugMode+"="+this.logNeeded);f+="&"+EBG.Semi.AttributionEnum.UrlParamNames.NO_SCRIPT+
"=0";f+="&"+EBG.Semi.AttributionEnum.UrlParamNames.RANDOM+"="+EBGVT.Light.Infra.getRandomNumber();a.debugData&&(f+="&"+a.debugData);if(a=EBGVT.Light.Infra.getTopLevelReferrer(window))b=EBGVT.Light.Infra.getTokenValueFromURL("ebReferrer",a),h||(h=EBGVT.Light.Infra.getTokenValueFromURL(EBG.Semi.AttributionEnum.UrlParamNames.USER_COOKIE,a))&&(f+="&usercookie=u2="+h),h=b?b:a,a=EBGVT.Light.Infra.urlAvailableLength(f)-48,0<a&&(h.length>a&&(h=h.substr(0,a)),f+="&referrer=$$"+h+"$$");return f},_prepareParamUrl:function(a,
b){var c=!0,d="",e;for(e in a)if(a.hasOwnProperty(e)&&(null!=a[e]&&b!=EBG.Semi.AttributionEnum.UrlParamNames.CONDITIONAL_PARAMS&&""!=a[e]||b==EBG.Semi.AttributionEnum.UrlParamNames.CONDITIONAL_PARAMS))c?(d+="&"+b+"=$$"+e+"="+a[e],c=!1):d+="&"+e+"="+a[e];c||(d+="$$");return d},_getProtocol:function(a){var b="http://";return b=a&&(a.toLowerCase()==EBG.Semi.AttributionEnum.HttpProtocol.HTTP||a.toLowerCase()==EBG.Semi.AttributionEnum.HttpProtocol.HTTP+":")?"http://":a&&a.toLowerCase()==EBG.Semi.AttributionEnum.HttpProtocol.HTTPS?
"https://":"https:"==EBGVT.Light.Infra.getWindowLocation().protocol?"https://":"http://"},_handleResponse:function(){this.oneTagLogger.info("Server response: "+bsResponse);var a=this._deserializeResponse(bsResponse);if(a)if(a.preServingTasks&&0<a.preServingTasks.length){var b={};b.uip=a.preServingTasks;b.uipv=a.uipv||"_1_11_0_0";b.scriptsPath=a.scriptsPath;b.filter=a.sessionId;this._oneTagObj?(b.isSync=this._oneTagObj.sync,b.bs=this._oneTagObj.bsUrl,b.ebPtcl=this._getProtocol(this._oneTagObj.ptcl)):(b.isSync=
a.sync,b.bs=document.domain,b.ebPtcl=this._getProtocol(document.location.protocol));EBG.Semi.Events.eventMgr.subscribeToEvent(EBG.Semi.EventName.ALL_USER_ID_FOUND,this._getUserIdProviders,this,b.filter);this.uidProviders.getUserIds(b)}else a.firstPartyServingDomain?this.generateRequest(this.pageUrl,a,!0):(this._handleScriptTags(a.scripts),this._handleUrlTags(a.urls),this._handleCustomScript(a.customScript),this._handleServerMessages(a.logMessages),this._handleClientRules(a.clientRules,a.sessionId,
a.diAppId,a.usercookie))},_getUserIdProviders:function(a){if(!this._userIdProvidersCalled){this._userIdProvidersCalled=!0;if(a){var b=this._deserializeResponse(bsResponse);b.targetUrl=a.userIdStr}this.generateRequest(this.pageUrl,b,!0)}},_handleClientRules:function(a,b,c,d){this.ruleManager=new EBGVT.RuleManager(a,b,c,d)},_deserializeResponse:function(a){var b;if("object"==EBGVT.Light.Infra.typeOf(a))b=a;else try{this.logNeeded&&-1!=a.indexOf("/*")&&(a=a.substring(0,a.lastIndexOf("/*"))),b=EBGVT.JSON.parse(unescape(a))}catch(c){this.oneTagLogger.exception("OneTag._deserializeResponse",
c)}return b},_handleCustomScript:function(a){if(a&&("http:"==a.substring(0,5).toLowerCase()||"https:"==a.substring(0,6).toLowerCase())){var b=document.createElement("script");b.type="text/javascript";b.src=a;EBGVT.Light.Infra.addScriptElement(b)}},_handleServerMessages:function(a){if(a&&0<a.length){this.oneTagLogger.timestamp=!1;this.oneTagLogger.info("Server Messages:");for(var b=0;b<a.length;b++)a[b]&&this.oneTagLogger.info("  "+a[b]);this.oneTagLogger.timestamp=!0}},_handleScriptTags:function(a){if(a)for(var b=
0;b<a.length;b++)a[b]&&EBG.Semi.Infra.injectScript(unescape(a[b]))},_handleUrlTags:function(a){a&&this.serverCommunicator.reportUrlsList(a)},_addProviderUserId:function(a,b){var c=EBGVT.Light.Infra.urlAvailableLength(a)-48;b.targetUrl&&(a=c>b.targetUrl.length?a+b.targetUrl:a+("&"+EEBG.Semi.AttributionEnum.UrlParamNames.ORIG_URL_LENGTH+"="+(a.length+b.targetUrl.length+2)));return a}};gEBMainWindow=window.gEBMainWindow||EBG.Semi.WindowUtil.getTopWindow();var versaTagObj=new EBGVT.OneTag;versaTagObj.generateRequest();
