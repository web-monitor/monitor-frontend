!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){function e(t){var n=this,o=t.id,i=t.url;r(this,e),this._id=o,this._url=i,this._disabled=null==window.performance,setTimeout(function(){console.log("加载耗时:"+performance.now()),n.send(n.getMainTiming())},0)}return i(e,[{key:"getMainTiming",value:function(){if(console.log(this._disabled?"很遗憾您的浏览器不支持!":"很荣幸您的浏览器支持!"),this._disabled)return{};var e=performance.timing;return{dns:e.domainLookupEnd-e.domainLookupStart,tcp:e.connectEnd-e.connectStart,request:e.responseEnd-e.responseStart,dom:e.domComplete-e.domInteractive,white:e.responseStart-e.navigationStart,domready:e.domContentLoadedEventEnd-e.navigationStart,onload:e.loadEventEnd-e.navigationStart}}},{key:"getResourceTiming",value:function(){var e=[],t=!0,n=!1,r=void 0;try{for(var o,i=performance.getEntriesByType("resource")[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value,u=a.name,l=a.initiatorType,c=a.startTime,s=a.duration,d={name:u,initiatorType:l,startTime:parseFloat(c.toFixed(3)),duration:parseFloat(s.toFixed(3))};e.push(d)}}catch(e){n=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}return e}},{key:"send",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};window.navigator.sendBeacon?this.sendByNavigator(e):this.sendByImage(e)}},{key:"sendByImage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new Image,n=[],r=!0,i=!1,a=void 0;try{for(var u,l=Object.entries(e)[Symbol.iterator]();!(r=(u=l.next()).done);r=!0){var c=o(u.value,2),s=c[0],d=c[1];n.push(s+"="+encodeURIComponent(d))}}catch(e){i=!0,a=e}finally{try{!r&&l.return&&l.return()}finally{if(i)throw a}}t.src=this._url+"?"+n.join("&")}},{key:"sendByNavigator",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new FormData,n=!0,r=!1,i=void 0;try{for(var a,u=Object.entries(e)[Symbol.iterator]();!(n=(a=u.next()).done);n=!0){var l=o(a.value,2),c=l[0],s=l[1];t.append(c,s)}}catch(e){r=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(r)throw i}}window.navigator.sendBeacon(this._url,t)}}]),e}();t.Monitor=a}])});