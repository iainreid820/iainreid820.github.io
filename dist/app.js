!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=3)}([function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0}),e.Platform=void 0;var o={config:n(r(1)),hooks:n(r(5)),input:n(r(6)),loop:n(r(7)),utils:n(r(8))};e.Platform=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.fpsDetails=!0,e.fpsUpdateFrequency=1e3,e.boundryBoxEnabled=!1,e.debugEnabled=!0,e.debugBox=!1},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Item=void 0;var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(10),i=r(11),a=r(12),u=r(13);e.Item=function(){function t(e,r,n,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._canvas=i||document.createElement("canvas"),this._ctx=this._canvas.getContext("2d"),i||(this._canvas.width=n,this._canvas.height=o),this.dx=e,this.dy=r}return n(t,[{key:"getCanvas",value:function(){return this._canvas}},{key:"getContext",value:function(){return this._ctx}},{key:"getWidth",value:function(){return this._canvas.width}},{key:"getHeight",value:function(){return this._canvas.height}},{key:"getCoordinates",value:function(){return{dx:this.dx,dy:this.dy}}},{key:"setCoordinates",value:function(t){var e=t.dx,r=t.dy;this.setDxCoordinate(e),this.setDyCoordinate(r)}},{key:"getDxCoordinate",value:function(){return this.dx}},{key:"setDxCoordinate",value:function(t){this.dx=t}},{key:"getDyCoordinate",value:function(){return this.dy}},{key:"setDyCoordinate",value:function(t){this.dy=t}},{key:"getCenterCoordinates",value:function(){return{dx:this.dx+this._canvas.width/2,dy:this.dy+this._canvas.height/2}}},{key:"getHorizontalCenterCoordinate",value:function(){return this.dx+this._canvas.width/2}},{key:"getVerticalCenterCoordinate",value:function(){return this.dy+this._canvas.height/2}},{key:"getMinHorizontalCoordinate",value:function(){return this.dx}},{key:"getMaxHorizontalCoordinate",value:function(){return this.dx+this._canvas.width}},{key:"getMinVerticalCoordinate",value:function(){return this.dy}},{key:"getMaxVerticalCoordinate",value:function(){return this._dy+this._canvas.height}},{key:"Class",get:function(){return t}}],[{key:"with",value:function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return r.reduce(function(e,r){if(!t[r])throw Error("Property not found on class");return t[r](e)},this)}},{key:"collisions",get:function(){return o.collisions}},{key:"gravity",get:function(){return i.gravity}},{key:"resistance",get:function(){return a.resistance}},{key:"vectors",get:function(){return u.vectors}}]),t}()},function(t,e,r){"use strict";var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(4);function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var c=function(t){function e(){i(this,e);var t=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,o.Platform.utils.randomNumberBetween(60,window.innerWidth-100),o.Platform.utils.randomNumberBetween(60,window.innerHeight-100),12,12));return t.color=o.Platform.utils.randomColorHex(),t}return u(e,o.View.Item.with("vectors","gravity")),n(e,[{key:"draw",value:function(t){var e=this.getWidth()/2;t.beginPath(),t.arc(e,e,e,2*Math.PI,!1),t.fillStyle=this.color,t.fill(),t.closePath()}}]),e}(),s=o.View.createLayer(),f=new(function(t){function e(){return i(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,window.innerWidth/2,window.innerHeight/2,4,4))}return u(e,o.View.Item),n(e,[{key:"draw",value:function(t){var e=this.getWidth()/2;t.beginPath(),t.arc(e,e,e,2*Math.PI,!1),t.fillStyle="#000",t.fill(),t.closePath()}}]),e}()),l=[];s.addEntity(f);for(var d=0;d<10;d++)l.push(s.addEntity(new c));o.Platform.loop.add(function(){var t=o.Platform.input.keyboard,e=t.upArrow,r=t.downArrow,n=t.leftArrow,i=t.rightArrow,a=f.getCoordinates(),u=a.dx,c=a.dy;e&&f.setDyCoordinate(c-2),r&&f.setDyCoordinate(c+2),n&&f.setDxCoordinate(u-2),i&&f.setDxCoordinate(u+2);var s=!0,d=!1,y=void 0;try{for(var h,v=l[Symbol.iterator]();!(s=(h=v.next()).done);s=!0){h.value.setGravity({dx:u,dy:c})}}catch(t){d=!0,y=t}finally{try{!s&&v.return&&v.return()}finally{if(d)throw y}}}),o.Platform.hooks.on("collision",function(t,e){t.reflectVectorX(e),t.reflectVectorY(e)}),o.Platform.loop.start()},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0);Object.defineProperty(e,"Platform",{enumerable:!0,get:function(){return n.Platform}});var o=r(9);Object.defineProperty(e,"View",{enumerable:!0,get:function(){return o.View}})},function(t,e,r){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.on=function(t,e){o.hasOwnProperty(t)?o[t].push(e):o[t]=[e]},e.fire=function(t,e){if(!o.hasOwnProperty(t))return;var r=!0,i=!1,a=void 0;try{for(var u,c=o[t][Symbol.iterator]();!(r=(u=c.next()).done);r=!0){var s=u.value;s.apply(void 0,n(e))}}catch(t){i=!0,a=t}finally{try{!r&&c.return&&c.return()}finally{if(i)throw a}}};var o={}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=e.keyboard={upArrow:!1,downArrow:!1,leftArrow:!1,rightArrow:!1};document.addEventListener("keydown",function(t){switch(t.keyCode){case 38:case 87:n.upArrow=!0;break;case 40:case 83:n.downArrow=!0;break;case 37:case 65:n.leftArrow=!0;break;case 39:case 68:n.rightArrow=!0}},!1),document.addEventListener("keyup",function(t){switch(t.keyCode){case 38:case 87:n.upArrow=!1;break;case 40:case 83:n.downArrow=!1;break;case 37:case 65:n.leftArrow=!1;break;case 39:case 68:n.rightArrow=!1}},!1)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.add=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60,r=arguments[2];if("function"!=typeof t)throw Error("Only functions may be added to the loop");o.push({fn:t,priority:e,scope:r}),o=o.sort(function(t,e){return t.priority<e.priority})},e.start=function(){i=!0,window.requestAnimationFrame(s)},e.stop=c;var n=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(r(1));var o=[],i=void 0,a=0,u=0;function c(){i=!1}function s(){if(i){n.fpsDetails&&(u-=performance.now());var t=!0,e=!1,r=void 0;try{for(var c,f=o[Symbol.iterator]();!(t=(c=f.next()).done);t=!0){var l=c.value;l.fn.call(l.scope)}}catch(t){e=!0,r=t}finally{try{!t&&f.return&&f.return()}finally{if(e)throw r}}n.fpsDetails&&(a++,u+=performance.now()),window.requestAnimationFrame(s)}}if(window.onerror=c,n.fpsDetails){var f=void 0;n.debugBox&&((f=document.body.appendChild(document.createElement("div"))).style.position="absolute",f.style.left="10px",f.style.bottom="10px",f.style.background="white",f.style.padding="10px");var l=performance.now(),d=void 0;setInterval(function(){d=(performance.now()-l)/(n.fpsUpdateFrequency/1e3),a=a/n.fpsUpdateFrequency*d,u=u/n.fpsUpdateFrequency*d;var t=y(a)+" FPS\n- Actual duration: "+y(d)+"ms\n- Time spent processing: "+y(u)+"ms\n- Average tick duration: "+y(u/a)+"ms\n- Average frame duration: "+y(d/a)+"ms\n- Processing utilisation: "+y(u/d*100)+"%";n.debugBox?f.innerHTML=t:console.debug(t),l=performance.now(),a=0,u=0},n.fpsUpdateFrequency)}function y(t){return Math.round(1e3*t)/1e3}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.generateUid=function(){return(n++).toString(36)},e.randomX=function(){return o(100,window.innerWidth-100)},e.randomY=function(){return o(100,window.innerHeight-100)},e.randomNumberBetween=o,e.randomColorHex=function(){return"#"+Math.floor(16777215*Math.random()).toString(16)},e.getDotProduct=i,e.pythagoras=a,e.adjacentLength=function(t,e){return Math.cos(t*Math.PI/180)*e},e.oppositeLength=function(t,e){return Math.sin(t*Math.PI/180)*e},e.getAngleBetweenThreePoints=function(t,e,r){var n=[e.dx-t.dx,e.dy-t.dy],o=[r.dx-e.dx,r.dy-e.dy];return Math.acos(-i(n,o)/(a.apply(void 0,n)*a.apply(void 0,o)))},e.getCenterBetweenTwoPoints=function(t,e){return{dx:(t.dx+e.dx)/2,dy:(t.dy+e.dy)/2}},e.degreesToRadians=function(t){return t*Math.PI/180},e.radiansToDegrees=function(t){return 180*t/Math.PI};var n=0;function o(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function i(t,e){for(var r=0,n=t.length;n--;)r+=t[n]*e[n];return r}function a(t,e){return Math.sqrt(t*t+e*e)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.View=void 0;var n=r(2),o=r(14);var i={Item:n.Item,Layer:o.Layer},a=[];i.createLayer=function(t,e){return a[a.length]=new o.Layer(t,e)},i.createItem=function(t){var e=t.draw,r=void 0===e?Function:e,o=t.coordinates,i=o.dx,a=o.dy,u=t.dimensions,c=u.width,s=u.height;return new(function(t){function e(t,r,n,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var a=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,r,n,o,i));return a.draw=t,a}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,n.Item),e}())(r,i,a,c,s)},i.getLayer=function(t){var e=!0,r=!1,n=void 0;try{for(var o,i=a[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var u=o.value;if(u.uid===t)return u}}catch(t){r=!0,n=t}finally{try{!e&&i.return&&i.return()}finally{if(r)throw n}}},i.getLayers=function(){return a},window.addEventListener("resize",function(){var t=!0,e=!1,r=void 0;try{for(var n,o=a[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){var i=n.value;i._boundariesLocked||i.resizeCanvas()}}catch(t){e=!0,r=t}finally{try{!t&&o.return&&o.return()}finally{if(e)throw r}}},!1),e.View=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=function t(e,r,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,r);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0};e.collisions=function(t){return function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),n(e,[{key:"setDxCoordinate",value:function(){var t;a.includes(this)||a.push(this);for(var r=arguments.length,n=Array(r),i=0;i<r;i++)n[i]=arguments[i];(t=o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setDxCoordinate",this)).call.apply(t,[this].concat(n))}},{key:"setDyCoordinate",value:function(){var t;a.includes(this)||a.push(this);for(var r=arguments.length,n=Array(r),i=0;i<r;i++)n[i]=arguments[i];(t=o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setDyCoordinate",this)).call.apply(t,[this].concat(n))}}]),e}(t)};var i=r(0);var a=[];i.Platform.loop.add(function(){for(var t=[],e=0,r=a.length;e<r;e++)for(var n=e+1;n<r;n++){var o=a[e],u=a[n],c=o.getWidth()/2,s=u.getWidth()/2,f=o.getCenterCoordinates(),l=f.dx,d=f.dy,y=u.getCenterCoordinates(),h=y.dx,v=y.dy;i.Platform.utils.pythagoras(h-l,v-d)<c+s&&(t[t.length]=[o,u])}for(;t.length;)i.Platform.hooks.fire("collision",t.shift());a.length=0},1/0)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();e.gravity=function(t){return function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return i.push(t),t.gravityDx=0,t.gravityDy=0,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),n(e,[{key:"getGravity",value:function(){return{dx:this.gravityDx,dy:this.gravityDy}}},{key:"setGravity",value:function(t){var e=t.dx,r=t.dy;this.setGravityDx(e),this.setGravityDy(r)}},{key:"getGravityDx",value:function(t){return this.gravityDx}},{key:"setGravityDx",value:function(t){this.gravityDx=t}},{key:"getGravityDy",value:function(t){return this.gravityDy}},{key:"setGravityDy",value:function(t){this.gravityDy=t}}]),e}(t)};var o=r(0);var i=[];o.Platform.loop.add(function(){var t=!0,e=!1,r=void 0;try{for(var n,a=i[Symbol.iterator]();!(t=(n=a.next()).done);t=!0){var u=n.value,c=u.getCenterCoordinates(),s=u.getGravity(),f=o.Platform.utils.radiansToDegrees(o.Platform.utils.getAngleBetweenThreePoints({dx:c.dx,dy:s.dy},s,c)),l=o.Platform.utils.adjacentLength(f,.3),d=o.Platform.utils.oppositeLength(f,.3);u.setVectorX(u.getVectorX()+(c.dx<s.dx?l:-l)),u.setVectorY(u.getVectorY()+(c.dy<s.dy?d:-d))}}catch(t){e=!0,r=t}finally{try{!t&&a.return&&a.return()}finally{if(e)throw r}}},0)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.resistance=function(t){return function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return n.push(t),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(t)};var n=[];r(0).Platform.loop.add(function(){var t=!0,e=!1,r=void 0;try{for(var o,i=n[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;a.setVectorX(.998*a.getVectorX()),a.setVectorY(.998*a.getVectorY())}}catch(t){e=!0,r=t}finally{try{!t&&i.return&&i.return()}finally{if(e)throw r}}},0)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=function t(e,r,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,r);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0};e.vectors=function(t){return function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return a.push(t),t.vectorX=0,t.vectorY=0,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),n(e,[{key:"getVectorX",value:function(){return this.vectorX}},{key:"setVectorX",value:function(t){this.vectorX=t}},{key:"getVectorY",value:function(){return this.vectorY}},{key:"setVectorY",value:function(t){this.vectorY=t}},{key:"reverseVectorX",value:function(){this.vectorX=-this.vectorX}},{key:"reverseVectorY",value:function(t){var e=this;if(t){var r=this.vectorY;this.vectorY=t,window.requestAnimationFrame(function(){e.vectorY=-r})}else this.vectorY=-this.vectorY}},{key:"reflectVectorX",value:function(t){if(!(t instanceof e))throw Error("Item must include the Vector class");this.vectorX=[t.vectorX,t.vectorX=this.vectorX][0]}},{key:"reflectVectorY",value:function(t){if(!(t instanceof e))throw Error("Item must include the Vector class");this.vectorY=[t.vectorY,t.vectorY=this.vectorY][0]}},{key:"getVectorMagnitude",value:function(){return i.Platform.utils.pythagoras(this.vectorX,this.vectorY)}},{key:"getVectorDirection",value:function(){var t=o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"getCenterCoordinates",this).call(this);return i.Platform.utils.getAngleBetweenThreePoints({dx:t.dx,dy:t.dy+1},t,{dx:t.dx+this.vectorX,dy:t.dy+this.vectorY})}}]),e}(t)};var i=r(0);var a=[];i.Platform.loop.add(function(){var t=!0,e=!1,r=void 0;try{for(var n,o=a[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){var i=n.value,u=i.getCoordinates(),c=u.dx,s=u.dy;i.setCoordinates({dx:c+i.vectorX,dy:s+i.vectorY})}}catch(t){e=!0,r=t}finally{try{!t&&o.return&&o.return()}finally{if(e)throw r}}},1/0)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Layer=void 0;var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(2),i=r(0);e.Layer=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._canvas=document.createElement("canvas"),this._ctx=this._canvas.getContext("2d"),this._entities=[],this.resizeCanvas(e,r),document.body.appendChild(this._canvas),i.Platform.loop.add(this.renderLayer,1/0,this)}return n(t,[{key:"getCanvas",value:function(){return this._canvas}},{key:"getContext",value:function(){return this._ctx}},{key:"getWidth",value:function(){return this._canvas.width}},{key:"getHeight",value:function(){return this._canvas.height}},{key:"addEntity",value:function(t){if(!(t instanceof o.Item))throw Error("Entities must be valid");return t.draw&&t.draw(t._ctx),this._entities[this._entities.length]=t}},{key:"getEntities",value:function(){return this._entities}},{key:"clearCanvas",value:function(){this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height)}},{key:"resizeCanvas",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.innerWidth,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.innerHeight;if(this._boundariesLocked)throw Error("Cannot resize canvas when boundaries are locked");this._canvas.width=this._width=t,this._canvas.height=this._height=e}},{key:"lockBoundaries",value:function(){this._boundariesLocked=!0}},{key:"unlockBoundaries",value:function(){this._boundariesLocked=!1}},{key:"renderLayer",value:function(){this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height);var t=!0,e=!1,r=void 0;try{for(var n,o=this._entities[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){var a=n.value,u=a.getCanvas(),c=a.getCoordinates(),s=c.dx,f=c.dy;i.Platform.config.boundryBoxEnabled&&a._ctx.strokeRect(0,0,u.width,u.height),this._ctx.drawImage(u,s,f)}}catch(t){e=!0,r=t}finally{try{!t&&o.return&&o.return()}finally{if(e)throw r}}}},{key:"Class",get:function(){return t}}]),t}()}]);