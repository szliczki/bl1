import{d as t}from"./dom-39effdbe.js";import{e as o,c as e}from"./dom-utils-259d2ab3.js";import"./browser-d96520d8.js";import"./_tslib-158249d5.js";let s;function i(t,i){i&&s&&s.clearHover();const l=(t=o(t)).querySelector(".dx-chart-tooltip");l&&e((()=>l.classList.remove("show")))}function l(o,l,n){o.tooltip={enabled:!1,forceEvents:!0,location:l.location},o.onTooltipHidden=function(t){t.isPointerOut&&i(t.element.closest("div.dx-blazor-widget"),!1)},o.onTooltipShown=function(o){const i=o.target;if(!i||!i.series)return;const l=o.element.closest("div.dx-blazor-widget").querySelector(".dx-chart-tooltip"),r=l.offsetParent,c=o.x-t.DomUtils.getAbsolutePositionX(r),d=l.querySelector(".dx-tooltip-pointer"),a=`calc(${o.y-t.DomUtils.getAbsolutePositionY(r)}px - 0.625rem)`,p=l.classList;e((function(){l.style.top=a,l.style.left=c+"px",d.style.left="50%",p.contains("show")||p.add("show")})),s=i,n.invokeMethodAsync("ShowTooltip",i.data,i.tag,i.series.index)}}const n={hideTooltip:i};export{n as default,i as hideTooltip,l as setupTooltip};
