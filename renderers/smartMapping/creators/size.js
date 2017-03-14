// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/i18n!../../nls/smartMapping","dojo/_base/lang","../../../core/lang","../../ClassBreaksRenderer","../statistics/summaryStatistics","../symbology/size","../../support/utils","../../../core/promiseUtils","../../../views/SceneView","./support/utils","../support/utils"],function(e,a,r,i,l,n,s,t,o,u,m,d,p){function c(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return u.reject(d.createError("size-visual-variable:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));var a=i.mixin({},e);return a.basemap=d.getBasemapId(a.basemap),a.layer=p.createLayerAdapter(a.layer),a.layer?!a.worldScale||a.view instanceof m?a.layer.load().then(function(){var e=a.layer.geometryType;if(a.worldScale&&"point"!==e&&"multipoint"!==e)return u.reject(d.createError("size-visual-variable:not-supported","'worldScale' sizing is not supported for polyline and polygon layers"));var r=p.getFieldsList({field:a.field,normalizationField:a.normalizationField,valueExpression:a.valueExpression}),i=d.verifyBasicFieldValidity(a.layer,r,"size-visual-variable:invalid-parameters");return i?u.reject(i):a}):u.reject(d.createError("size-visual-variable:invalid-parameters","'view' parameter should be an instance of SceneView when 'worldScale' parameter is true")):u.reject(d.createError("size-visual-variable:invalid-parameters","'layer' must be one of these types: "+V))}function y(e){if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return u.reject(d.createError("size-continuous-renderer:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required"));var a=i.mixin({},e);return a.basemap=d.getBasemapId(a.basemap),a.symbolType=a.symbolType||"2d",a.layer=p.createLayerAdapter(a.layer),a.layer?a.symbolType.indexOf("3d-volumetric")>-1&&!(a.view instanceof m)?u.reject(d.createError("size-continuous-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric'")):a.layer.load().then(function(){var e=a.layer.geometryType,r=a.symbolType.indexOf("3d")>-1;if(r&&"point"!==e&&"multipoint"!==e)return u.reject(d.createError("size-continuous-renderer:not-supported","3d symbols are not supported for polyline and polygon layers"));var i=p.getFieldsList({field:a.field,normalizationField:a.normalizationField,valueExpression:a.valueExpression}),l=d.verifyBasicFieldValidity(a.layer,i,"size-continuous-renderer:invalid-parameters");return l?u.reject(l):a}):u.reject(d.createError("size-continuous-renderer:invalid-parameters","'layer' must be one of these types: "+V))}function v(e){var a=i.mixin({},e),r=a.symbolType.indexOf("3d-volumetric")>-1,l=a;return l.worldScale=r,r&&(l.axis="3d-volumetric-uniform"===a.symbolType?"all":"height"),delete a.symbolType,delete a.defaultSymbolEnabled,l}function f(e,a){var r=e.sizeScheme;if(r)r=t.cloneScheme(r);else{var i=t.getSchemes({basemap:e.basemap,geometryType:a,worldScale:e.worldScale,view:e.view});r=i&&i.primaryScheme}return r}function b(e,a){var r;switch(a){case"point":case"multipoint":var i=e;r=[i.minSize,i.maxSize];break;case"polyline":var l=e;r=[l.minWidth,l.maxWidth];break;case"polygon":var n=e;r=[n.marker.minSize,n.marker.maxSize]}return r}function h(e,a,r){var i=r.layer,l=r.field,n="function"==typeof l,s=l&&!n?i.getField(l):null,o=s&&s.type===g,m=i.geometryType,p=f(r,m);if(!p)return u.reject(d.createError("size-visual-variable:insufficient-info","Unable to find size scheme"));var c=b(p,m),y=d.getDefaultDataRange(e,o,!1),v=y||[e.min,e.max],h=[],z=c[0],x=c[1],S=void 0;if("height"===r.axis){var E=2.3;h.push({type:"size",axis:"width-and-depth",minSize:((x-z)/2+z)/(2*E)}),S="height",x*=2}return h.unshift({type:"size",field:l,valueExpression:r.valueExpression,valueUnit:"unknown",normalizationField:a,axis:S,minSize:z,maxSize:x,minDataValue:v[0],maxDataValue:v[1],legendOptions:r.legendOptions}),u.resolve({basemapId:r.basemap,visualVariables:h,statistics:e,defaultValuesUsed:!!y,sizeScheme:t.cloneScheme(p),authoringInfo:{visualVariables:[{type:"size",minSliderValue:e.min,maxSliderValue:e.max}]}})}function z(e,a,i,s){var u=s.layer,m=s.field,p=u.geometryType,c=null==s.defaultSymbolEnabled?!0:s.defaultSymbolEnabled,y=t.cloneScheme(e.sizeScheme),v="polygon"===p,f=v?y.marker:y,b=v?y.background:null,h="polyline"===p?f.noDataWidth:f.noDataSize,z=b?d.createSymbol(b,b.color,p,s.symbolType):null,x=new n({backgroundFillSymbol:z,classBreakInfos:[{minValue:-E,maxValue:E,symbol:d.createSymbol(f,f.color,v?"point":p,s.symbolType)}],defaultLabel:c?r.other:null,defaultSymbol:c?d.createSymbol(f,f.noDataColor,v?"point":p,s.symbolType,h):null,field:m,normalizationField:i,normalizationType:a,valueExpression:s.valueExpression,visualVariables:e.visualVariables.map(function(e){return o.cloneSizeVariable(e)}),authoringInfo:l.clone(e.authoringInfo)});return{renderer:x,visualVariables:e.visualVariables.map(function(e){return o.cloneSizeVariable(e)}),statistics:e.statistics,defaultValuesUsed:e.defaultValuesUsed,sizeScheme:t.cloneScheme(e.sizeScheme),basemapId:e.basemapId}}function x(e){return c(e).then(function(e){var a,r=e.normalizationField,i=r?"field":void 0;return a=e.statistics?u.resolve(e.statistics):s({layer:e.layer,field:e.field,valueExpression:e.valueExpression,sqlExpression:e.sqlExpression,sqlWhere:e.sqlWhere,normalizationType:i,normalizationField:r,minValue:e.minValue,maxValue:e.maxValue}),a.then(function(a){return h(a,r,e)})})}function S(e){return y(e).then(function(e){return x(v(e)).then(function(a){var r=e.normalizationField,i=r?"field":void 0;return z(a,i,r,e)})})}var g="date",E=Math.pow(2,53)-1,V=p.supportedLayerTypes.join(", ");a.createVisualVariables=x,a.createContinuousRenderer=S});