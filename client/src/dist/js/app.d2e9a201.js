(function(t){function o(o){for(var n,c,s=o[0],a=o[1],u=o[2],p=0,f=[];p<s.length;p++)c=s[p],i[c]&&f.push(i[c][0]),i[c]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);h&&h(o);while(f.length)f.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,o=0;o<r.length;o++){for(var e=r[o],n=!0,s=1;s<e.length;s++){var a=e[s];0!==i[a]&&(n=!1)}n&&(r.splice(o--,1),t=c(c.s=e[0]))}return t}var n={},i={app:0},r=[];function c(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=n,c.d=function(t,o,e){c.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,o){if(1&o&&(t=c(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)c.d(e,n,function(o){return t[o]}.bind(null,n));return e},c.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(o,"a",o),o},c.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=o,s=s.slice();for(var u=0;u<s.length;u++)o(s[u]);var h=a;r.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("1d50")},"1d50":function(t,o,e){"use strict";e.r(o);e("5bcf"),e("7dc0"),e("f450"),e("6ad8");var n=e("0bc4"),i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("Sandbox")},r=[],c=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"game-container"},[e("div",{staticClass:"score-container"},[e("div",{staticClass:"points"},[t._v(t._s(this.points))])]),t._l(t.hoopLocations,function(o,n){return e("div",{key:"hoop-"+n,staticClass:"hoop",style:{top:o[1]+"px",left:o[0]+"px"}},[t._v(t._s(o[1])+"\n    ")])}),e("div",{staticClass:"rocket",style:{top:t.rocketLocation[1]+"px",left:t.rocketLocation[0]+"px"}})],2)},s=[],a=(e("4351"),{name:"Sandbox",data:function(){return{rocketLocation:[0,window.innerHeight/2],isMovingRight:!1,isMovingLeft:!1,hoopLocations:[],points:0}},methods:{createHoops:function(){var t=Math.floor(Math.random()*window.innerWidth/2);this.hoopLocations.push([t,0]),setTimeout(this.createHoops,4e3)},moveHoops:function(){var t=this;this.hoopLocations.forEach(function(o,e){t.hoopLocations[e][1]=t.hoopLocations[e][1]+5;var n=t.rocketLocation[0]-t.hoopLocations[e][0];Math.abs(t.hoopLocations[e][1]-t.rocketLocation[1])<20&&n<200&&n>0?t.points=t.points+1:o[1]>window.innerHeight-10&&t.hoopLocations.splice(e,1)}),this.$forceUpdate(),setTimeout(this.moveHoops,50)},keyDown:function(t){var o=t.code;"ArrowLeft"==o&&this.rocketLocation[0]>0?(this.isMovingLeft=!0,this.moveRight()):"ArrowRight"==o&&this.rocketLocation[0]<window.innerWidth-10&&(this.isMovingRight=!0,this.moveLeft())},keyUp:function(t){var o=t.code;"ArrowLeft"==o&&this.rocketLocation[0]>0?this.isMovingRight=!1:"ArrowRight"==o&&this.rocketLocation[0]<window.innerWidth-10&&(this.isMovingLeft=!1)},moveRight:function(t){console.log("fired"),this.rocketLocation[0]=this.rocketLocation[0]+30,this.isMovingRight&&setTimeout(this.moveRight,50)},moveLeft:function(t){this.rocketLocation[0]=this.rocketLocation[0]-30,this.isMovingLeft&&setTimeout(this.moveLeft,50)}},created:function(){this.createHoops(),this.moveHoops(),window.addEventListener("keydown",this.keyDown),window.addEventListener("keyup",this.keyUp)}}),u=a,h=(e("7137"),e("c9da")),p=Object(h["a"])(u,c,s,!1,null,null,null),f=p.exports,l={name:"app",components:{Sandbox:f}},d=l,v=(e("e5cd"),Object(h["a"])(d,i,r,!1,null,null,null)),g=v.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(g)}}).$mount("#app")},"2ece":function(t,o,e){},7137:function(t,o,e){"use strict";var n=e("ca1f"),i=e.n(n);i.a},ca1f:function(t,o,e){},e5cd:function(t,o,e){"use strict";var n=e("2ece"),i=e.n(n);i.a}});
//# sourceMappingURL=app.d2e9a201.js.map