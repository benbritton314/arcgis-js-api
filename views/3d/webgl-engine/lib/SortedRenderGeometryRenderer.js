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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/MapUtils","../../../../core/PooledArray","./Material","./rendererUtils"],(function(e,t,r,i,s,a){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){},d=function(){function e(e,t,r){this._rctx=e,this._materialRep=t,this.emitUpdatingChanged=r,this._pendingAddsRemoves=new Map,this._adds=new i,this._removes=new i,this._updates=new i({allocator:function(e){return e||new n},deallocator:function(e){return e.renderGeometry=null,e}}),this._materialRenderers=new Map,this._sortedMaterialRenderers=new i,this._hasHighlights=!1,this._hasWater=!1}return e.prototype.dispose=function(){this._adds.prune(),this._removes.prune(),this._updates.prune()},Object.defineProperty(e.prototype,"updating",{get:function(){return this._pendingAddsRemoves.size>0||this._updates.length>0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasHighlights",{get:function(){return this._hasHighlights},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasWater",{get:function(){return this._hasWater},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rendersOccluded",{get:function(){return r.someMap(this._materialRenderers,(function(e){return e.rendersOccluded}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isEmpty",{get:function(){return!this.updating&&0===this._materialRenderers.size},enumerable:!0,configurable:!0}),e.prototype.commitChanges=function(){var e=this,t=!1;if(!this.updating)return!1;this.updateAddsRemoves();var i={numToAdd:this._adds.length,toAdd:this._adds.data,numToRemove:this._removes.length,toRemove:this._removes.data,numToUpdate:this._updates.length,toUpdate:this._updates.data},s=a.splitRenderGeometryChangeSetByMaterial(i),n=!1,d=!1;return s.forEach((function(r,i){var s=e._materialRenderers.get(i);if(!s&&r.toAdd.length>0&&(s=i.createRenderer(e._rctx,e._materialRep),e._materialRenderers.set(i,s),t=!0,n=!0,d=!0),s){var a=n||s.hasHighlights,o=d||s.hasWater;s.modify(r),n=n||a!==s.hasHighlights,d=d||o!==s.hasWater,s.isEmpty&&(e._materialRenderers.delete(i),s.dispose(),t=!0)}})),this._adds.clear(),this._removes.clear(),this._updates.clear(),this._pendingAddsRemoves.clear(),t&&this.updateSortedMaterialRenderers(),n&&(this._hasHighlights=r.someMap(this._materialRenderers,(function(e){return e.hasHighlights}))),d&&(this._hasWater=r.someMap(this._materialRenderers,(function(e){return e.hasWater}))),this.emitUpdatingChanged(),!0},e.prototype.add=function(e){for(var t=0===this._pendingAddsRemoves.size,r=0,i=e;r<i.length;r++){var s=i[r];this._pendingAddsRemoves.set(s,0)}t&&this._pendingAddsRemoves.size>0&&this.emitUpdatingChanged()},e.prototype.remove=function(e){for(var t=0===this._pendingAddsRemoves.size,r=0,i=e;r<i.length;r++){var s=i[r],a=this._pendingAddsRemoves.get(s);0===a?this._pendingAddsRemoves.set(s,2):2!==a&&this._pendingAddsRemoves.set(s,1)}t&&this._pendingAddsRemoves.size>0&&this.emitUpdatingChanged()},e.prototype.modify=function(e,t){for(var r=0===this._updates.length,i=0,s=e;i<s.length;i++){var a=s[i],n=this._updates.pushNew();n.renderGeometry=a,n.updateType=t}r&&this._updates.length>0&&this.emitUpdatingChanged()},e.prototype.updateLogic=function(e){for(var t=!1,r=0;r<this._sortedMaterialRenderers.length;r++){var i=this._sortedMaterialRenderers.data[r].materialRenderer;i.updateLogic&&i.updateLogic(e)&&(t=!0)}return t},e.prototype.draw=function(e,t,r){for(var i=0;i<this._sortedMaterialRenderers.length;i++){var a=this._sortedMaterialRenderers.data[i];if(s.materialPredicate(a.material,e)){var n=r.getMaterialRenderStatsObject(a.materialRenderer.type);a.materialRenderer.render(null,e,t,n)}}},e.prototype.updateSortedMaterialRenderers=function(){var e=this;this._sortedMaterialRenderers.clear(),this._materialRenderers.forEach((function(t,r){e._sortedMaterialRenderers.push({material:r,materialRenderer:t})})),this._sortedMaterialRenderers.sort((function(e,t){return t.material.renderPriority-e.material.renderPriority}))},e.prototype.updateAddsRemoves=function(){var e=this;this._adds.clear(),this._removes.clear(),this._pendingAddsRemoves.forEach((function(t,r){switch(t){case 0:e._adds.push(r);break;case 1:e._removes.push(r)}}));for(var t=0;t<this._updates.length;){var r=this._updates.data[t].renderGeometry;this._pendingAddsRemoves.has(r)?this._updates.removeUnorderedIndex(t):t++}},Object.defineProperty(e.prototype,"test",{get:function(){return{sortedMaterialRenderers:this._sortedMaterialRenderers}},enumerable:!0,configurable:!0}),e}();t.SortedRenderGeometryRenderer=d}));