/*BUGME_START*/
const __BUGME_START__ = 1;
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=43)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Connect="RemoteX.connect",e.Disconnect="RemoteX.disconnect",e.PageChanged="RemoteX.pageChanged",e.DataChanged="RemoteX.dataChanged",e.EvaluteScript="RemoteX.evaluteScript",e.RegisterChannel="RemoteX.registerChannel",e.PassByWorker="RemoteX.PassByWorker",e.syncStorage="RemoteX.syncStorage",e.setStorage="RemoteX.setStorage",e.removeStorage="RemoteX.removeStoarge",e.requestWillBeSent="RemoteX.requestWillBeSent",e.requestFinished="RemoteX.requestFinished",e.ExitApp="RemoteX.exitApp"}(t.RemoteXMethods||(t.RemoteXMethods={}))},10:function(e,t){
/*!
Copyright (C) 2013-2017 by Andrea Giammarchi - @WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
var n="\\x"+("0"+"~".charCodeAt(0).toString(16)).slice(-2),o="\\"+n,r=new RegExp(n,"g"),a=new RegExp(o,"g"),s=new RegExp("(?:^|([^\\\\]))"+o),i=[].indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},c=String;function u(e,t,n){return t instanceof Array?function(e,t,n){for(var o=0,r=t.length;o<r;o++)t[o]=u(e,t[o],n);return t}(e,t,n):t instanceof c?t.length?n.hasOwnProperty(t)?n[t]:n[t]=function(e,t){for(var n=0,o=t.length;n<o;e=e[t[n++].replace(a,"~")]);return e}(e,t.split("~")):e:t instanceof Object?function(e,t,n){for(var o in t)t.hasOwnProperty(o)&&(t[o]=u(e,t[o],n));return t}(e,t,n):t}var l={stringify:function(e,t,a,s){return l.parser.stringify(e,function(e,t,a){var s,c,u=!1,l=!!t,d=[],f=[e],h=[e],p=[a?"~":"[Circular]"],m=e,g=1;return l&&(c="object"==typeof t?function(e,n){return""!==e&&t.indexOf(e)<0?void 0:n}:t),function(e,t){return l&&(t=c.call(this,e,t)),u?(m!==this&&(s=g-i.call(f,this)-1,g-=s,f.splice(g,f.length),d.splice(g-1,d.length),m=this),"object"==typeof t&&t?(i.call(f,t)<0&&f.push(m=t),g=f.length,(s=i.call(h,t))<0?(s=h.push(t)-1,a?(d.push((""+e).replace(r,n)),p[s]="~"+d.join("~")):p[s]=p[0]):t=p[s]):"string"==typeof t&&a&&(t=t.replace(n,o).replace("~",n))):u=!0,t}}(e,t,!s),a)},parse:function(e,t){return l.parser.parse(e,function(e){return function(t,r){var a="string"==typeof r;return a&&"~"===r.charAt(0)?new c(r.slice(1)):(""===t&&(r=u(r,r,{})),a&&(r=r.replace(s,"$1~").replace(o,n)),e?e.call(this,t,r):r)}}(t))},parser:JSON};e.exports=l},11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(10),r=n(4),a=n(2),s=n(0),i=Function,c=console.log,u=function(){a.getBridge().call("showRemoteDebugPanel",{status:"connecting",text:"远程调试连接中",buttonTitle:"退出"})},l=function(){a.getBridge().call("showRemoteDebugPanel",{status:"connected",text:"远程调试已连接",buttonTitle:"退出"})},d=function(){a.getBridge().call("showRemoteDebugPanel",{status:"disconnected",text:"远程调试已断开",buttonTitle:"退出"})},f={send:function(e){a.getBridge().sendSocketMessage(e)},close:function(){a.getBridge().closeSocket()}};t.SocketConn={socketTask:null,send:function(e){this.socketTask&&this.socketTask.send({data:"string"==typeof e?e:JSON.stringify(e)})},close:function(){this.socketTask&&this.socketTask.close()},open:function(){var e=this,t=a.getStartupParams().channelId;if(t){u();var n=a.getBridge();a.checkIOS()?(n.connectSocket({url:"wss://openchannel.alipay.com/host/"+t}),n.onSocketOpen((function(){e.socketTask=f,e.onopen()})),n.onSocketMessage((function(t){e.onmessage({data:t})})),n.onSocketClose((function(){e.onclose()})),n.connectSocket=function(){n.alert({content:"iOS 真机调试暂不支持 connectSocket JSAPI"})},n.onSocketMessage=n.offSocketMessage=function(){}):setTimeout((function(){var o=n.connectSocket({url:"wss://openchannel.alipay.com/host/"+t,multiple:!0});o.onOpen((function(){e.socketTask=o,e.onopen()})),o.onMessage((function(t){e.onmessage(t)})),o.onClose((function(){e.onclose()}))}),1200)}},onopen:function(){this.send({method:s.RemoteXMethods.Connect,params:{userAgent:a.getUserAgent()}}),l()},onmessage:function(e){try{var t=JSON.parse(e.data.data),n=t.method,a=t.id,u=t.params;if(n===s.RemoteXMethods.Disconnect)this.close();else if(n===s.RemoteXMethods.EvaluteScript){if(u&&u.code)try{var l=new i("var res = "+u.code+"; return res;")();this.send({returnId:a,payload:o.stringify(l)})}catch(e){c("[remoteX worker evaluteScript] ",e)}}else r.ChannelPot.sendToActiveChannel(t)}catch(t){c("RemoteX onSocketMessage error",t,e)}},onclose:function(){this.socketTask=null,d(),a.getBridge().call("alert",{title:"调试中断",button:"退出"},(function(){r.ChannelPot.sendToActiveChannel({method:s.RemoteXMethods.ExitApp})}))}}},2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getUserAgent=function(){return navigator.swuserAgent||navigator.userAgent||""},t.checkIOS=function(){return/\(i[^;]+;( U;)? CPU.+Mac OS X/.test(t.getUserAgent())},t.getAlipayVersion=function(){return(t.getUserAgent().match(/AlipayClient\/(\d+\.\d+\.\d+)/)||[])[1]||""},t.compareVersion=function(e,t){var n=e.split("."),o=t.split(".");if(e===t)return 0;for(var r=0;r<n.length;r++){var a=n[r]-o[r];if(a)return a>0?1:-1}};var o=self.AlipayJSBridge&&self.AlipayJSBridge.call,r=self.fetch;t.callInternalAPI=function(e,t){var n={data:{method:e,param:t},action:"internalAPI"},a=encodeURIComponent(JSON.stringify(n));r?r("https://alipay.kylinBridge/?data="+a,{mode:"no-cors"}).then((function(){})).catch((function(){})):o&&o("internalAPI",{method:e,param:t})},t.getStartupParams=function(){return self.__appxStartupParams||{}},t.getBridge=function(){return self.AFAppX.bridge},t.debug=console.log},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(11),r=n(0),a=console.log;t.ChannelPot={_mainViewId:null,_activeViewId:null,_map:{},get:function(e){return this._map[e]||null},set:function(e,t){this._map[e]=t},remove:function(e){delete this._map[e]},setActiveId:function(e){this._activeViewId=e},setMainId:function(e){this._mainViewId=e},sendToMainChannel:function(e){o.SocketConn.send(e)},sendToActiveChannel:function(e){this.get(this._activeViewId)?this.get(this._activeViewId).postMessage(e):a("[remotex] missing active channel",e,this._activeViewId)}};var s=function(){function e(e){var t=this;this._port=e,this._port.onmessage=this.onMessage,Object.defineProperty(e,"onmessage",{get:function(){return t.onMessage},set:function(){}})}return e.prototype.onMessage=function(e){if(e.data){var n=e.data,o=n.method,a=n.params;o===r.RemoteXMethods.PassByWorker&&t.ChannelPot.sendToMainChannel(a)}},e.prototype.postMessage=function(e){this._port.postMessage(e)},e}();t.ChannelHandler=s},43:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(10),r=n(44),a=n(2);!function(){var e=function(e,t){return void 0===t?"©undefined":null===t?"©null":t===-1/0?"©- Infinity":t===1/0?"©Infinity":"number"==typeof t&&isNaN(t)?"©NaN":"function"==typeof t?"©function":t},t=Function,n=function(n){try{if(n.fromVConsoleToWorker){var r=n.requestId;if("exec"===n.method){try{new t("requestId","sendBack","var res = "+n.script+";console.log(res);")(r,(function(t){return a.callInternalAPI("tinyDebugConsole",{type:"msgFromWorkerToVConsole",content:o.stringify({requestId:r,returnValue:t},e)})}))}catch(e){console.error(e.name+":"+e.message)}}}}catch(e){}};setTimeout((function(){self.document?self.document.addEventListener("push",(function(e){try{var t=e.data.param;n(JSON.parse(t.content||t.data.content))}catch(e){}})):self.addEventListener&&self.addEventListener("push",(function(e){try{var t=JSON.parse(JSON.parse(e.data.text()).param.data.content);n(t)}catch(e){}}))}),10),["log","info","error","debug","warn"].forEach((function(t){var n="o"+t;console[n]||(console[n]=console[t],console[t]=function(){for(var r,s=[],i=0;i<arguments.length;i++)s[i]=arguments[i];console[n].apply(console,s);try{r=o.stringify(s.map((function(e){return e instanceof Error?e.name+": "+e.message:e})),e)}catch(e){return void console.error(e.name+": "+e.message)}a.callInternalAPI("tinyDebugConsole",{content:r,type:"console_"+t})})}));var s=setInterval((function(){if(self.AFAppX){clearInterval(s);var e=a.getStartupParams();e.isRemoteX&&e.channelId&&r.registerRemoteX()}}),50)}()},44:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),r=n(45),a=n(11),s=n(2),i=n(0);function c(){s.getBridge().call("hideOptionMenuItem",{scope:"single",name:"backToHome"}),(self.document||self).addEventListener("push",(function(e){var t=e.data;if(t&&"function"==typeof t.text)try{t=JSON.parse(t.text())}catch(e){return}if(t&&t.func){var n=t.func,s=t.viewId;if("nbcomponent.canrender"===n||"pageResume"===n)o.ChannelPot.setActiveId(s),o.ChannelPot.sendToMainChannel({method:i.RemoteXMethods.PageChanged});else if("beforeDestroy"===n)o.ChannelPot.remove(s);else if("tinyRemoteDebugPanelButtonClick"===n)a.SocketConn.close();else try{r.listenTinyDebug(t)}catch(e){}}})),r.hookGlobalApi()}t.initRemoteX=c,t.registerRemoteX=function(){self.addEventListener&&self.navigator&&(c(),a.SocketConn.open(),self.addEventListener("message",(function(e){if(e&&e.data){var t=e.data;if(t.method===i.RemoteXMethods.RegisterChannel){var n=e.ports[0],r=t.params.viewId+"";o.ChannelPot.set(r,new o.ChannelHandler(n)),o.ChannelPot.setActiveId(r),null===o.ChannelPot._mainViewId&&o.ChannelPot.setMainId(r),o.ChannelPot.sendToMainChannel({method:i.RemoteXMethods.PageChanged})}}})))}},45:function(e,t,n){"use strict";var o=this&&this.__assign||Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e};Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),a=n(0),s=n(2),i=function(e){return"function"==typeof e},c=0;function u(e){if(!e||"object"!=typeof e)return{};var t={};return Object.keys(e).forEach((function(n){t[n]=""+e[n]})),t}function l(e){var t=e.name,n=e.params;/^(http)?Request$/i.test(t)&&r.ChannelPot.sendToMainChannel({method:a.RemoteXMethods.requestWillBeSent,params:{reqId:"remotex_req_"+e.reqId,url:n.url,method:(n.method||"GET").toUpperCase(),body:"string"==typeof n.data?n.data:JSON.stringify(n.data),headers:u(n.headers)}})}function d(e){var t=e.name,n=e.res,o=e.params;/^clearStorage(Sync)?$/.test(t)&&n.success?r.ChannelPot.sendToMainChannel({method:a.RemoteXMethods.syncStorage,params:{data:{}}}):/^removeStorage(Sync)?$/.test(t)&&n.success?r.ChannelPot.sendToMainChannel({method:a.RemoteXMethods.removeStorage,params:{key:o.key}}):/^setStorage(Sync)?$/.test(t)&&n.success?r.ChannelPot.sendToMainChannel({method:a.RemoteXMethods.setStorage,params:{key:o.key,value:o.data}}):/^(http)?Request$/i.test(t)&&r.ChannelPot.sendToMainChannel({method:a.RemoteXMethods.requestFinished,params:{reqId:"remotex_req_"+e.reqId,url:o.url,status:n.status,body:"string"==typeof n.data?n.data:JSON.stringify(n.data),headers:u(n.headers)}})}t.hookGlobalApi=function(){if(!(s.compareVersion(s.getAlipayVersion(),"10.1.75")>=0)){var e=self.AFAppX.bridge;e?["clearStorage","removeStorage","setStorage","httpRequest","request"].forEach((function(t){e[t]&&(e[t]=function(e,t){return function(n){var r=++c,a=o({},n),s=a.success,u=a.fail;l({name:e,params:n,reqId:r}),a.success=function(t){i(s)&&s(t),d({name:e,params:n,res:t,reqId:r})},a.fail=function(t){i(u)&&u(t),d({name:e,params:n,res:t,reqId:r})},t(a)}}(t,e[t]));var n=t+"Sync";e[n]&&(e[n]=function(e,t){return function(n){var o=++c;l({name:e,params:n,reqId:o});var r=t(n);return d({name:e,params:n,res:r,reqId:o}),r}}(n,e[n]))})):self.__APPX_DEVTOOLS_GLOBAL_HOOK__={onApiCallback:d,onApiSyncCallback:d,onApiCall:l}}};var f=/^https?:\/\/hpmweb\.alipay\.com/;function h(e,t){switch(e){case"tinyAppRemoteDebug_network_request":if(f.test(t.url))return;r.ChannelPot.sendToMainChannel({method:a.RemoteXMethods.requestWillBeSent,params:{reqId:t.requestId,url:t.url,method:(t.method||"GET").toUpperCase(),body:t.postBody,headers:u(t.headers)}});break;case"tinyAppRemoteDebug_network_response":if(f.test(t.url))return;r.ChannelPot.sendToMainChannel({method:a.RemoteXMethods.requestFinished,params:{reqId:t.requestId,url:t.url,status:t.status,body:t.body,headers:u(t.headers)}});break;case"tinyAppRemoteDebug_network_error":if(f.test(t.url))return;r.ChannelPot.sendToMainChannel({method:a.RemoteXMethods.requestFinished,params:{reqId:t.requestId,url:t.url,status:null}});break;case"tinyAppRemoteDebug_storage":var n={};Object.keys(t.data).forEach((function(e){try{n[e]=JSON.parse(t.data[e]).APDataStorage}catch(e){}})),r.ChannelPot.sendToMainChannel({method:a.RemoteXMethods.syncStorage,params:{data:n}})}}t.listenTinyDebug=function(e){var t=e.func,n=e.param;if(/^tinyAppRemoteDebug_/.test(t))h(t,n);else if("onTinyDebugConsole"===t){if(!n.data)return;var o=n.data,r=o.type,a=o.content;try{a=JSON.parse(a)}catch(e){}h(r,a)}}}});
const __BUGME_END__ = 1;
/*BUGME_END*/if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');
require('./importScripts$');

var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;


if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../node_modules/mini-ali-ui/es/am-switch/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/home-page/self-driving/self-driving?hash=992c5cf70dd3c08bdb7b4834198ca9ae11f5f727');
require('../../components/home-page/whole-driving/whole-driving?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/home-page/replace-driving/replace-driving?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/home-page/replaceDriveNav/replaceDriveNav?hash=22e542341cdd20645a53b33a66358ae317526de6');
require('../../node_modules/mini-ali-ui/es/badge/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/am-icon/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/tabs/index?hash=4a98b35daa3eee1b62960d4d5bbcbf254cbf11e3');
require('../../node_modules/mini-ali-ui/es/tabs/tab-content/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/mask/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/homeBusinessCpt/cost-detail/cost-detail?hash=dcc15e5016d0e8011f5754e593fdd5b04fbc70af');
require('../../components/ordertypes/type-waitpay/type-waitpay?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/orderlistinfo/list-info/list-info?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/homeBusinessCpt/select-car-class/select-car-class?hash=6d8aebee62dceaacd4af71bcf2a181cfc15220af');
require('../../components/homeBusinessCpt/select-seating/select-seating?hash=6d8aebee62dceaacd4af71bcf2a181cfc15220af');
require('../../components/homeBusinessCpt/select-supplier/select-supplier?hash=6d8aebee62dceaacd4af71bcf2a181cfc15220af');
require('../../components/homeBusinessCpt/select-sort/select-sort?hash=6d8aebee62dceaacd4af71bcf2a181cfc15220af');
require('../../components/homeBusinessCpt/select-site-time/select-site-time?hash=bb86f1012f767a36b9f5aef51cfd55ea19c69eda');
require('../../node_modules/mini-ali-ui/es/popup/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/listtypes/appoint/appoint?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/listtypes/journey/journey?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/listtypes/finish/finish?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/listtypes/cancel/cancel?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/ordertypes/type-waitdispatch/type-waitdispatch?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/car-details/car-details-home/car-details-home?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/car-details/comment-list/comment-list?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/car-details/cherge-explain/cherge-explain?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/am-checkbox/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/ordertypes/type-waitsend/type-waitsend?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/ordertypes/type-waitreceive/type-waitreceive?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/reletcar/relet-infocar/relet-infocar?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/reletcar/relet-infolist/relet-infolist?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/loading/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/button/index?hash=e1617a0257fb9de746f60d50b03404ad924976c9');
require('../../node_modules/mini-ali-ui/es/modal/index?hash=febd4c40992222524e0db12a74760a28f8f9b339');
require('../../components/reletcar/reletcar-type/reletcar-type?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/reletcar/relet-infoself/relet-infoself?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/earlycar/earlycar-info/earlycar-info?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/role/role?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/earlycar/earlycar-infolist/earlycar-infolist?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/earlycar/earlycar-infosuc/earlycar-infosuc?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/camera/camera?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/ordertypes/type-sendcar/type-sendcar?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/ordertypes/type-journey/type-journey?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/ordertypes/type-finish/type-finish?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/ordertypes/type-cancel/type-cancel?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/list/alphabet/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/search-bar/index?hash=5a0c180d5ccf7c9d483dd4817cdab5489824013c');
require('../../node_modules/mini-ali-ui/es/multi-liner/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/hint/hint?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/carry-driver/carry-driver?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/homeBusinessCpt/returnCarTime/returnCarTime?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=bdda016308deaf0b4f6d56780588da2480525e25');
require('../../pages/orderFormList/affirmList/affirmList?hash=e18c52541a51ef0274aa3dfc816cad5ff5f2a58c');
require('../../pages/orderFormList/affirmWaitPay/affirmWaitPay?hash=966f3508be05009e7adfe4455bce55eaff428a09');
require('../../pages/homeBusiness/carList/carList?hash=ec8410d6e8fa9c1e0bd48fc0631adc90db1ae28c');
require('../../pages/myOrderList/myOrderList?hash=92851f8d06b9bd8bf241c57fca46aac95e8d3514');
require('../../pages/orderFormList/affirmWaitDispatch/affirmWaitDispatch?hash=7e37425f6b656a464df1f6ef83f1207d95e2f765');
require('../../pages/homeBusiness/rentCarCompany/rentCarCompany?hash=1aa45490cbd8ec39bba04d3010e092055866fffb');
require('../../pages/homeBusiness/carDetails/carDetails?hash=9ccd125d50f29cb219b73425ab6a739c03fa0d46');
require('../../pages/homeBusiness/addContacts/addContacts?hash=890ed9b8c0c98a185f739c1ae592e7b8dbb4dcbf');
require('../../pages/payment/paymentSuccess/paymentSuccess?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/payment/paymentFailure/paymentFailure?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/homeBusiness/selectSection/selectSection?hash=791edbeef8bb088497e02ebe194387edf446e37c');
require('../../pages/orderFormList/affirmWaitSend/affirmWaitSend?hash=547d67d4ea890cee9bb4f74743f33dac57088280');
require('../../pages/orderFormList/affirmWaitRec/affirmWaitRec?hash=3ab97443fd3ded5f7f41bdac547fe02b7a4d6a43');
require('../../pages/orderFormList/affirmWaitDispatch/affirmWaitDispatch?hash=7e37425f6b656a464df1f6ef83f1207d95e2f765');
require('../../pages/reletCar/reletCar/reletCar?hash=2b3099fdcd94e75ac860009aeb361d55ef30ea6a');
require('../../pages/reletCar/reletCarDeal/reletCarDeal?hash=fc8f9d8faceecf880fe55c63e571cdf05731bc41');
require('../../pages/reletCar/reletCarSuccess/reletCarSuccess?hash=fc8f9d8faceecf880fe55c63e571cdf05731bc41');
require('../../pages/reletCar/reletCarDefeat/reletCarDefeat?hash=fc8f9d8faceecf880fe55c63e571cdf05731bc41');
require('../../pages/reletCar/reletCarWaitPay/reletCarWaitPay?hash=b6e976a7d44a9b0496d5ccc83c192eb9280bcc73');
require('../../pages/reletCar/reletCarWaitAudit/reletCarWaitAudit?hash=b6e976a7d44a9b0496d5ccc83c192eb9280bcc73');
require('../../pages/homeBusiness/rentCarPerson/rentCarPerson?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/homeBusiness/addSite/addSite?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/earlyCar/earlyCar/earlyCar?hash=5d696d2eb81c668aa9aa1fcbfe2fe3cf244fb436');
require('../../pages/earlyCar/earlyCarDeal/earlyCarDeal?hash=723c4359faedfdb21c71f0512030801c9b216d74');
require('../../pages/earlyCar/earlyCarSuccess/earlyCarSuccess?hash=723c4359faedfdb21c71f0512030801c9b216d74');
require('../../pages/earlyCar/earlyCarRefund/earlyCarRefund?hash=723c4359faedfdb21c71f0512030801c9b216d74');
require('../../pages/earlyCar/earlyCarDefeat/earlyCarDefeat?hash=723c4359faedfdb21c71f0512030801c9b216d74');
require('../../pages/earlyCar/earlyCarRefundSuc/earlyCarRefundSuc?hash=ff3a76c28ae57fa047584fe44f973c0f6c97a77d');
require('../../pages/personCenter/index/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/personCenter/personalInfo/personalInfo?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/personCenter/driveLicense/driveLicense?hash=b194c6b20da654761269955295153aa84d64d090');
require('../../pages/orderFormList/affirmSendCar/affirmSendCar?hash=3937ef9de4bf66ae90fe65db23a35b293ce439ef');
require('../../pages/orderFormList/affirmJourney/affirmJourney?hash=8e378adc230fb875883e8707dda4d2dd9aea785e');
require('../../pages/orderFormList/affirmFinish/affirmFinish?hash=c0322e9351956ec43520c25b7d30dc330c3ee5bd');
require('../../pages/orderFormList/affirmCancel/affirmCancel?hash=ba7007541e62dcf11b1a08cde1100fb91209a5d7');
require('../../pages/homeBusiness/cityList/cityList?hash=963f16cb7463320db3c44c5d9793ede621920b36');
require('../../pages/longRent/submitDemand/submitDemand?hash=f3aa0e19698118d1d96bed5fc63703566570be96');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}