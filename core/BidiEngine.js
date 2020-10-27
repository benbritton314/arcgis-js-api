// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","./bidiEngineTables"],(function(r,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function r(){this.inputFormat="ILYNN",this.outputFormat="VLNNN",this.sourceToTarget=[],this.targetToSource=[],this.levels=[]}return r.prototype.bidiTransform=function(r,t,n){if(this.sourceToTarget=[],this.targetToSource=[],!r)return"";if(function(r,t,e){g=[],F=[];for(var n=0;n<e;n++)r[n]=n,t[n]=n,g[n]=n}(this.sourceToTarget,this.targetToSource,r.length),!this.checkParameters(t,n))return r;t=this.inputFormat,n=this.outputFormat;var o=r,c=N,l=_(t.charAt(1)),h=_(n.charAt(1)),R=("I"===t.charAt(0)?"L":t.charAt(0))+l,S=("I"===n.charAt(0)?"L":n.charAt(0))+h,O=t.charAt(2)+n.charAt(2);c.defInFormat=R,c.defOutFormat=S,c.defSwap=O;var C=function r(t,e,n,o,f){var s=function(r,t,e){void 0===t.inFormat&&(t.inFormat=e.defInFormat);void 0===t.outFormat&&(t.outFormat=e.defOutFormat);void 0===t.swap&&(t.swap=e.defSwap);if(t.inFormat===t.outFormat)return t;var n,a=t.inFormat.substring(0,1),o=t.outFormat.substring(0,1),u=t.inFormat.substring(1,4),f=t.outFormat.substring(1,4);"C"===u.charAt(0)&&(n=i(r),u="ltr"===n||"rtl"===n?n.toUpperCase():"L"===t.inFormat.charAt(2)?"LTR":"RTL",t.inFormat=a+u);"C"===f.charAt(0)&&("rtl"===(n=i(r))?f="RTL":"ltr"===n?(n=function(r){var t=r.split("");return t.reverse(),i(t.join(""))}(r),f=n.toUpperCase()):f="L"===t.outFormat.charAt(2)?"LTR":"RTL",t.outFormat=o+f);return t}(t,{inFormat:e,outFormat:n,swap:o},f);if(s.inFormat===s.outFormat)return t;e=s.inFormat,n=s.outFormat,o=s.swap;var T=e.substring(0,1),A=e.substring(1,4),c=n.substring(0,1),l=n.substring(1,4);if(f.inFormat=e,f.outFormat=n,f.swap=o,"L"===T&&"VLTR"===n){if("LTR"===A)return f.dir=E,a(t,f);if("RTL"===A)return f.dir=w,a(t,f)}if("V"===T&&"V"===c)return f.dir="RTL"===A?w:E,u(t,f);if("L"===T&&"VRTL"===n)return"LTR"===A?(f.dir=E,t=a(t,f)):(f.dir=w,t=a(t,f)),u(t);if("VLTR"===e&&"LLTR"===n)return f.dir=E,a(t,f);if("V"===T&&"L"===c&&A!==l)return t=u(t),"RTL"===A?r(t,"LLTR","VLTR",o,f):r(t,"LRTL","VRTL",o,f);if("VRTL"===e&&"LRTL"===n)return r(t,"LRTL","VRTL",o,f);if("L"===T&&"L"===c){var h=f.swap;return f.swap=h.substr(0,1)+"N","RTL"===A?(f.dir=w,t=a(t,f),f.swap="N"+h.substr(1,2),f.dir=E,t=a(t,f)):(f.dir=E,t=a(t,f),f.swap="N"+h.substr(1,2),t=r(t,"VLTR","LRTL",f.swap,f)),t}return t}(r,R,S,O,c),V=!1;return"R"===n.charAt(1)?V=!0:"C"!==n.charAt(1)&&"D"!==n.charAt(1)||(V="rtl"===this.checkContextual(C)),this.sourceToTarget=g,this.targetToSource=function(r){for(var t=new Array(r.length),e=0;e<r.length;e++)t[r[e]]=e;return t}(this.sourceToTarget),p=this.targetToSource,o=t.charAt(3)===n.charAt(3)?C:"S"===n.charAt(3)?function(r,t,n){if(0===t.length)return"";void 0===r&&(r=!0);void 0===n&&(n=!0);var i=(t=String(t)).split(""),a=0,o=1,u=i.length;r||(a=i.length-1,o=-1,u=1);for(var c=function(r,t,n,i,a){for(var o=0,u=[],f=0,c=t;c*n<i;c+=n)if(s(r[c])||L(r[c])){if("ل"===r[c]&&A(r,c+n,n,i)){r[c]=d(r[c+n],0===o?e.LamAlefInialTableFE:e.LamAlefMedialTableFE),b(r,c+=n,n,i),a&&(u[f]=c,f++),o=0;continue}var l=r[c];1===o?r[c]=T(r,c+n,n,i)?U(r[c]):v(r[c],e.FinalForm):!0===T(r,c+n,n,i)?r[c]=v(r[c],e.InitialForm):r[c]=v(r[c],e.IsolatedForm),L(l)||(o=1),!0===B(l)&&(o=0)}else o=0;return u}(i,a,o,u,n),l="",h=0;h<i.length;h++)n&&f(c,c.length,h)>-1?(m(p,h,!r,-1),g.splice(h,1)):l+=i[h];return l}(V,C,!0):function(r,t,n){if(0===r.length)return"";void 0===n&&(n=!0);void 0===t&&(t=!0);r=String(r);for(var i="",a=r.split(""),o=0;o<r.length;o++){var u=!1;if(a[o]>="ﹰ"&&a[o]<"\ufeff"){var f=r.charCodeAt(o);a[o]>="ﻵ"&&a[o]<="ﻼ"?(t?(o>0&&n&&" "===a[o-1]?i=i.substring(0,i.length-1)+"ل":(i+="ل",u=!0),i+=e.AlefTable[(f-65269)/2]):(i+=e.AlefTable[(f-65269)/2],i+="ل",o+1<r.length&&n&&" "===a[o+1]?o++:u=!0),u&&(m(p,o,!0,1),g.splice(o,0,g[o]))):i+=e.FETo06Table[f-65136]}else i+=a[o]}return i}(C,V,!0),this.sourceToTarget=g,this.targetToSource=p,this.levels=F,o},r.prototype._inputFormatSetter=function(r){if(!O.test(r))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.inputFormat=r},r.prototype._outputFormatSetter=function(r){if(!O.test(r))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.outputFormat=r},r.prototype.checkParameters=function(r,t){return r?this._inputFormatSetter(r):r=this.inputFormat,t?this._outputFormatSetter(t):t=this.outputFormat,r!==t},r.prototype.checkContextual=function(r){var t=i(r);if("ltr"!==t&&"rtl"!==t){try{t=document.dir.toLowerCase()}catch(r){}"ltr"!==t&&"rtl"!==t&&(t="ltr")}return t},r.prototype.hasBidiChar=function(r){return C.test(r)},r}();function i(r){var t=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(r);return t?t[0]<="z"?"ltr":"rtl":""}function a(r,t){var e=r.split(""),n=[];return o(e,n,t),function(r,t,e){if(0===e.hiLevel||e.swap.substr(0,1)===e.swap.substr(1,2))return;for(var n=0;n<r.length;n++)1===t[n]&&(r[n]=h(r[n]))}(e,n,t),c(2,e,n,t),c(1,e,n,t),F=n,e.join("")}function o(r,t,n){var i,a,o,u=r.length,f=n.dir?e.impTabRtl:e.impTabLtr,s=0,T=-1,A=[],c=[];n.hiLevel=n.dir,n.lastArabic=!1,n.hasUbatAl=!1,n.hasUbatB=!1,n.hasUbatS=!1;for(var h=0;h<u;h++)A[h]=(i=r[h],a=void 0,o=void 0,a=i.charCodeAt(0),(o=e.PrimaryTable[a>>8])<e.TBBASE?o:e.UnicodeTable[o-e.TBBASE][255&a]);for(var B=0;B<u;B++){var U=s,v=l(r,A,c,B,n);c[B]=v;var L=240&(s=f[U][v]),_=f[s&=15][R];if(t[B]=_,L>0)if(16===L){for(h=T;h<B;h++)t[h]=1;T=-1}else T=-1;if(f[s][S])-1===T&&(T=B);else if(T>-1){for(h=T;h<B;h++)t[h]=_;T=-1}A[B]===e.UBAT_B&&(t[B]=0),n.hiLevel|=_}n.hasUbatS&&function(r,t,n,i){for(var a=0;a<n;a++)if(r[a]===e.UBAT_S){t[a]=i.dir;for(var o=a-1;o>=0&&r[o]===e.UBAT_WS;o--)t[o]=i.dir}}(A,t,u,n)}function u(r,t){var e=r.split("");if(t){var n=[];o(e,n,t),F=n}return e.reverse(),g.reverse(),e.join("")}function f(r,t,e){for(var n=0;n<t;n++)if(r[n]===e)return n;return-1}function s(r){for(var t=0;t<e.ArabicAlefBetIntervalsBegine.length;t++)if(r>=e.ArabicAlefBetIntervalsBegine[t]&&r<=e.ArabicAlefBetIntervalsEnd[t])return!0;return!1}function T(r,t,e,n){for(;t*e<n&&L(r[t]);)t+=e;return!!(t*e<n&&s(r[t]))}function A(r,t,n,i){for(;t*n<i&&L(r[t]);)t+=n;var a=" ";if(!(t*n<i))return!1;a=r[t];for(var o=0;o<e.AlefTable.length;o++)if(e.AlefTable[o]===a)return!0;return!1}function c(r,t,e,n){if(!(n.hiLevel<r)){if(1===r&&n.dir===w&&!n.hasUbatB)return t.reverse(),void g.reverse();for(var i,a,o,u,f,s=t.length,T=0;T<s;){if(e[T]>=r){for(i=T+1;i<s&&e[i]>=r;)i++;for(a=T,o=i-1;a<o;a++,o--)u=t[a],t[a]=t[o],t[o]=u,f=g[a],g[a]=g[o],g[o]=f;T=i}T++}}}function l(r,t,n,i,a){var o=t[i];return{UBAT_L:function(){return a.lastArabic=!1,e.UBAT_L},UBAT_R:function(){return a.lastArabic=!1,e.UBAT_R},UBAT_ON:function(){return e.UBAT_ON},UBAT_AN:function(){return e.UBAT_AN},UBAT_EN:function(){return a.lastArabic?e.UBAT_AN:e.UBAT_EN},UBAT_AL:function(){return a.lastArabic=!0,a.hasUbatAl=!0,e.UBAT_R},UBAT_WS:function(){return e.UBAT_ON},UBAT_CS:function(){var r,o;return i<1||i+1>=t.length||(r=n[i-1])!==e.UBAT_EN&&r!==e.UBAT_AN||(o=t[i+1])!==e.UBAT_EN&&o!==e.UBAT_AN?e.UBAT_ON:(a.lastArabic&&(o=e.UBAT_AN),o===r?o:e.UBAT_ON)},UBAT_ES:function(){return(i>0?n[i-1]:e.UBAT_B)===e.UBAT_EN&&i+1<t.length&&t[i+1]===e.UBAT_EN?e.UBAT_EN:e.UBAT_ON},UBAT_ET:function(){if(i>0&&n[i-1]===e.UBAT_EN)return e.UBAT_EN;if(a.lastArabic)return e.UBAT_ON;for(var r=i+1,o=t.length;r<o&&t[r]===e.UBAT_ET;)r++;return r<o&&t[r]===e.UBAT_EN?e.UBAT_EN:e.UBAT_ON},UBAT_NSM:function(){if("VLTR"===a.inFormat){for(var o=t.length,u=i+1;u<o&&t[u]===e.UBAT_NSM;)u++;if(u<o){var f=r[i].charCodeAt[0],s=f>=1425&&f<=2303||64286===f,T=t[u];if(s&&(T===e.UBAT_R||T===e.UBAT_AL))return e.UBAT_R}}return i<1||t[i-1]===e.UBAT_B?e.UBAT_ON:n[i-1]},UBAT_B:function(){return a.lastArabic=!0,a.hasUbatB=!0,a.dir},UBAT_S:function(){return a.hasUbatS=!0,e.UBAT_ON},UBAT_LRE:function(){return a.lastArabic=!1,e.UBAT_ON},UBAT_RLE:function(){return a.lastArabic=!1,e.UBAT_ON},UBAT_LRO:function(){return a.lastArabic=!1,e.UBAT_ON},UBAT_RLO:function(){return a.lastArabic=!1,e.UBAT_ON},UBAT_PDF:function(){return a.lastArabic=!1,e.UBAT_ON},UBAT_BN:function(){return e.UBAT_ON}}[e.TYPES_NAMES[o]]()}function h(r){for(var t,n=0,i=e.SwapTable.length-1;n<=i;)if(t=Math.floor((n+i)/2),r<e.SwapTable[t][0])i=t-1;else{if(!(r>e.SwapTable[t][0]))return e.SwapTable[t][1];n=t+1}return r}function B(r){for(var t=0;t<e.StandAlonForm.length;t++)if(e.StandAlonForm[t]===r)return!0;return!1}function U(r){for(var t=0;t<e.BaseForm.length;t++)if(r===e.BaseForm[t])return e.MedialForm[t];return r}function v(r,t){for(var n=0;n<e.BaseForm.length;n++)if(r===e.BaseForm[n])return t[n];return r}function L(r){return r>="ً"&&r<="ٕ"}function _(r){return"L"===r?"LTR":"R"===r?"RTL":"C"===r?"CLR":"D"===r?"CRL":""}function b(r,t,e,n){for(;t*e<n&&L(r[t]);)t+=e;return t*e<n&&(r[t]=" ",!0)}function d(r,t){for(var n=0;n<e.AlefTable.length;n++)if(r===e.AlefTable[n])return t[n];return r}function m(r,t,e,n){for(var i=0;i<r.length;i++)(r[i]>t||!e&&r[i]===t)&&(r[i]+=n)}t.default=n;var g=[],p=[],F=[],N={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,hasUbatAl:!1,hasBlockSep:!1,hasSegSep:!1,defOutFormat:""},R=5,S=6,E=0,w=1,O=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/,C=/[\u0591-\u06ff\ufb1d-\ufefc]/}));