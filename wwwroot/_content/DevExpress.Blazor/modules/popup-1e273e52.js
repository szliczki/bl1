import{a as t}from"./_tslib-158249d5.js";import{a as e,S as i,R as s}from"./rect-7fc5c2ef.js";import{R as o}from"./rafaction-bba7928b.js";import{P as n,a as r}from"./point-9c6ab88a.js";import{T as a}from"./transformhelper-ebad0156.js";import{L as h,D as l}from"./layouthelper-4b19d191.js";import{PositionChangingEvent as c}from"./positiontracker-dba18a16.js";import{E as d}from"./elementobserver-5f004683.js";import{a as p,b as u,P as m,c as g,d as b,D as f}from"./supportcaptureelement-9559d03a.js";import{BranchActivatedEvent as v,BranchIdContext as w}from"./branch-9dee15d3.js";import{c as C}from"./capturemanager-c7d5aef8.js";import{E as y}from"./eventhelper-8570b930.js";import{B as P,v as T,b as R,p as E}from"./popuproot-8d4e49e8.js";import{L as H,i as L}from"./logicaltreehelper-15991dcb.js";import{a as x}from"./simpleevent-84045703.js";import{n as B}from"./nameof-factory-64d95f5b.js";import{C as O}from"./custom-events-helper-18f7786a.js";import{r as S,$ as z}from"./lit-element-ee330000.js";import{e as N}from"./property-d3853089.js";import{n as I}from"./custom-element-bd7061f2.js";const D=new class{constructor(){this._x=0,this._y=0,this.handlePointerDown=this.pointerEventHandler.bind(this)}get x(){return this._x}get y(){return this._y}subscribe(){window.addEventListener("pointerdown",this.handlePointerDown,{capture:!0,passive:!0}),window.addEventListener("pointermove",this.handlePointerDown,{capture:!0,passive:!0}),window.addEventListener("pointerup",this.handlePointerDown,{capture:!0,passive:!0})}unsubscribe(){window.removeEventListener("pointerdown",this.handlePointerDown),window.removeEventListener("pointermove",this.handlePointerDown),window.removeEventListener("pointerup",this.handlePointerDown)}pointerEventHandler(t){this._x=t.pageX,this._y=t.pageY}};D.subscribe();class F{constructor(t,e){this.xField=t,this.yField=e}get x(){return this.xField}get y(){return this.yField}}F.zero=new F(0,0);class A{static add(t,e){return new F(t.x+e.x,t.y+e.y)}static multiply(t,e){return new F(t.x*e,t.y*(1/e))}static divide(t,e){return new F(t.x*(1/e),t.y*(1/e))}static getLength(t){return Math.sqrt(t.x*t.x+t.y*t.y)}static normalize(t){const e=Math.max(Math.abs(t.x),Math.max(t.y)),i=A.divide(t,e);return A.divide(i,A.getLength(i))}}class _{static viewport(){return new e(window.scrollX,window.scrollY,document.documentElement.clientWidth,document.documentElement.clientHeight)}static page(){return new e(0,0,document.body.clientWidth,document.body.clientHeight)}}class M{constructor(t,e){this.target=t,this.callback=e}get position(){return this.callback(this.target)}}class W{constructor(t,e){this.observer=null,this.elementScrollHandler=this.handleElementScroll.bind(this),this.resizeHandler=this.handleResize.bind(this),this.overflows=[],this.resizing=[],this.targetElement=null,this.rafAction=new o,this.callback=t,this.options=e}get raf(){return this.options.raf}observe(t){this.disconnect(),this.targetElement=t,this.subscribeEvents()}disconnect(){var t;this.unsubscribeEvents(),this.rafAction.cancel(),null===(t=this.observer)||void 0===t||t.disconnect(),this.observer=null}getTargetBoundingClientRect(){return this.targetElement?h.getRelativeElementRect(this.targetElement):e.Empty}subscribeEvents(){if(!this.targetElement)return;window.addEventListener("scroll",this.elementScrollHandler);const t=[],e=[];for(const i of h.getRootPathAndSelf(this.targetElement)){const s=i;if(!s)return;if(this.isInShadowDom(s))continue;new ResizeObserver(this.resizeHandler).observe(s,{box:"border-box"}),e.push(),l.isScrollable(s)&&(s.addEventListener("scroll",this.elementScrollHandler,{capture:!0}),t.push(s))}this.overflows=t,this.resizing=e}isInShadowDom(t){return t.getRootNode()instanceof ShadowRoot}unsubscribeEvents(){window.removeEventListener("scroll",this.elementScrollHandler),this.overflows.forEach((t=>{t.removeEventListener("scroll",this.elementScrollHandler)})),this.resizing.forEach((t=>{t.disconnect()}))}handleResize(t,e){this.raisePositionChanged()}handleElementScroll(t){this.raisePositionChanged()}raisePositionChanged(){this.raf?this.rafAction.execute((()=>this.raisePositionChangedCore())):this.raisePositionChangedCore()}raisePositionChangedCore(){this.callback(new M(this.targetElement,this.getTargetBoundingClientRect),this)}}var k;const V=B();class q{constructor(t){this.closeReason=t}}class j extends CustomEvent{constructor(t){super(j.eventName,{detail:new q(t),bubbles:!0,composed:!0,cancelable:!0})}}j.eventName="dxbl-popup.closingRequested",O.register(j.eventName,(t=>t.detail));class $ extends CustomEvent{constructor(t){super($.eventName,{detail:new q(t),bubbles:!0,composed:!0,cancelable:!0})}}var U,K,X,Y,G,J,Q;$.eventName="dxbl-popup.closingResultRequested",O.register($.eventName,(t=>t.detail)),function(t){t.Viewport="viewport",t.Page="page",t.Rectangle="rectangle",t.TargetElement="targetelement"}(U||(U={})),function(t){t.None="none",t.Hide="hide",t.Close="close"}(K||(K={})),function(t){t[t.TopLeft=0]="TopLeft",t[t.TopRight=1]="TopRight",t[t.BottomLeft=2]="BottomLeft",t[t.BottomRight=3]="BottomRight",t[t.Center=4]="Center"}(X||(X={}));class Z{constructor(t,e){this.targetInterestPoint=t,this.childInterestPoint=e}}!function(t){t.Absolute="absolute",t.Relative="relative",t.Bottom="bottom",t.Center="center",t.Right="right",t.AbsolutePoint="absolutepoint",t.RelativePoint="relativepoint",t.Mouse="mouse",t.MousePoint="mousepoint",t.Left="left",t.Top="top",t.Custom="custom"}(Y||(Y={})),function(t){t.Near="near",t.Far="far"}(G||(G={})),function(t){t.top="top",t.bottom="bottom"}(J||(J={})),function(t){t[t.None=0]="None",t[t.Horizontal=1]="Horizontal",t[t.Vertical=2]="Vertical"}(Q||(Q={}));class tt{constructor(t=new n(0,0),e=new i(0,0)){this.childSize=i.Empty,this.mousePosition=null,this.visuallyHidden=!1,this.closingRequested=!1,this.lockPlacement=!1,this.lockedPosition=0,this.topLeft=t,this.size=e}}class et{constructor(t,e,i,s,o){this.dropOpposite=!1,this.dropDirection=G.Near,this.dropAlignment=J.bottom,this.axis=e,this.point=t,this.dropOpposite=i,this.dropAlignment=o,this.dropDirection=s}}class it{constructor(t,e){this.customPlacement=null,this._childPoints=t,this._placementTargetPoints=e}get childPoints(){return this._childPoints}get placementTargetPoints(){return this._placementTargetPoints}}class st extends CustomEvent{constructor(t){super(st.eventName,{detail:t,bubbles:!0,composed:!1,cancelable:!0})}}st.eventName="dxbl-popup-custom-placement";class ot{}class nt extends CustomEvent{constructor(t){super(nt.eventName,{detail:t,bubbles:!0,composed:!1,cancelable:!0})}}nt.eventName="dxbl-popup-shown";class rt extends CustomEvent{constructor(t){super(rt.eventName,{detail:t,bubbles:!0,composed:!1,cancelable:!0})}}rt.eventName="dxbl-popup-closed";let at=k=class extends p{constructor(){super(),this._renderedVisible=!1,this.hasOwnLogicalParent=!1,this.tolerance=.01,this.repositionAction=new o,this.positionInfo=new tt,this._child=null,this.childResizeObserver=new ResizeObserver(this.handleChildSizeChanged.bind(this)),this._dropOpposite=!1,this._dropFromRight=!1,this._offset=n.zero,this.placementTargetElementField=null,this.positionChangingHandler=this.handlePositionChanging.bind(this),this.sizeChangedHandler=this.handleSizeChanged.bind(this),this.placementTargetPositionChangedHandler=this.handlePlacementTargetPositionChanged.bind(this),this.placementTargetPositionObserver=new W(this.placementTargetPositionChangedHandler,{raf:!1}),this.placementTargetElementChangedHandler=this.handlePlacementTargetElementChanged.bind(this),this.placementTargetObserver=null,this._autoFocus=!1,this._interceptor=null,this.bridgeSlotChangedHandler=this.handleBridgeSlotChange.bind(this),this.closingResultRequestedTcs=new u,this._positionChangedEvent=new x,this._parentPopup=null,this.positionChangedHandler=this.handleParentPopupPositionChanged.bind(this),this.closeOnOutsideClick=!1,this.preventCloseOnPositionTargetClick=!1,this.closeMode=K.Hide,this.fitToRestriction=!1,this.preventInteractions=!1,this.hasServerSideClosing=!1,this.parentBranchId=null,this.rootCssStyle=null,this.placement=Y.Absolute,this.horizontalOffset=0,this.verticalOffset=0,this.placementTarget=null,this.restrictTarget=null,this.restrict=U.Viewport,this.width=null,this.maxWidth=null,this.minWidth=null,this.height=null,this.maxHeight=null,this.minHeight=null,this.desiredWidth=null,this.desiredHeight=null,this.minDesiredWidth=null,this.minDesiredHeight=null,this.renderWidth=null,this.renderHeight=null,this.restrictRectangle=e.Empty,this.placementRectangle=e.Empty,this.actualDropDirection=G.Near,this.actualDropAlignment=J.bottom,this.actualDropOpposite=!1,this._isOpen=!1,this.animationEnabled=!1,this.resizing=!1}get branchType(){return P.DropDown}get positionChanged(){return this._positionChangedEvent}static get styles(){return S`
            :host {
                display: flex;
                flex: 1 1 auto;
                flex-direction: column;
                min-height: 0;
            }
            dxbl-branch {
                display: flex;
                flex: 1 1 auto;
                flex-direction: column;
                min-height: 0;
            }
            .content-holder {
                display: flex;
                flex: 1 0 auto;
                flex-direction: column;
                min-height: 0;
            }
        `}get renderedVisible(){var t,e;return this._renderedVisible&&(null===(e=null===(t=this._parentPopup)||void 0===t?void 0:t.renderedVisible)||void 0===e||e)}updated(t){t.has("closeOnOutsideClick")&&this.processCapture(this.closeOnOutsideClick),this.reposition()}get child(){return this._child}get isOpen(){return this._isOpen}get placementTargetElement(){return this.placementTargetElementField}set placementTargetElement(t){this.unsubscribeFromPlacementTargetPositionObserver(),this.placementTargetElementField=t,this.subscribeToPlacementTargetPositionObserver()}get dropOpposite(){return this._dropOpposite}get autoFocus(){return this._autoFocus}get dropFromRight(){return this._dropFromRight}get offset(){return this._offset}set offset(t){this._offset=t,this.style.transform=a.translateByPoint(t)}get childSize(){return this.positionInfo.childSize}render(){return this.renderTemplate()}willUpdate(t){if(this.renderWidth=this.calcRenderWidth(),this.renderHeight=this.calcRenderHeight(),this.shouldUpdateRootCssStyle(t)){let t="";this.shouldCalcWidth()&&(t+=`width: ${this.calcWidth()}; `),this.shouldCalcMinWidth()&&(t+=`min-width: ${this.calcMinWidth()}; `),this.shouldCalcMaxWidth()&&(t+=`max-width: ${this.calcMaxWidth()}; `),this.shouldCalcHeight()&&(t+=`height: ${this.calcHeight()}; `),this.shouldCalcMinHeight()&&(t+=`min-height: ${this.calcMinHeight()}; `),this.shouldCalcMaxHeight()&&(t+=`max-height: ${this.calcMaxHeight()}; `),this.rootCssStyle=t}t.has(V("placementTarget"))&&this.processPlacementTargetChanged()}processPlacementTargetChanged(){this.unsubscribeFromPlacementTargetObserver(),this.unsubscribeFromPlacementTargetPositionObserver(),this.subscribeToPlacementTargetObserver(),this.subscribeToPlacementTargetPositionObserver()}calcRenderHeight(){var t;return null!==(t=this.desiredHeight)&&void 0!==t?t:this.height}calcRenderWidth(){var t;return null!==(t=this.desiredWidth)&&void 0!==t?t:this.width}calcMaxWidth(){return this.maxWidth}calcMaxHeight(){return this.maxHeight}calcMinWidth(){var t;return null!==(t=this.minDesiredWidth)&&void 0!==t?t:this.minWidth}calcMinHeight(){var t;return null!==(t=this.minDesiredHeight)&&void 0!==t?t:this.minHeight}shouldCalcMinHeight(){return!!this.minHeight||!!this.minDesiredHeight}shouldCalcMinWidth(){return!!this.minWidth||!!this.minDesiredWidth}shouldCalcMaxWidth(){return!!this.maxWidth}shouldCalcMaxHeight(){return!!this.maxHeight}shouldCalcWidth(){return!!this.renderWidth}shouldCalcHeight(){return!!this.renderHeight}calcWidth(){return this.renderWidth}calcHeight(){return this.renderHeight}shouldUpdateRootCssStyle(t){return t.has("width")||t.has("minWidth")||t.has("maxWidth")||t.has("height")||t.has("minHeight")||t.has("maxHeight")||t.has("desiredWidth")||t.has("desiredHeight")||t.has("renderWidth")||t.has("renderHeight")||t.has("minDesiredWidth")||t.has("minDesiredHeight")}renderTemplate(){return z`
            <div class="${this.rootCssStyle}">
                ${this.renderSlot}
            </div>
        `}renderSlot(){return z`
            ${this.renderDefaultSlot()}
            ${this.renderAdditionalSlots()}
            ${this.renderBridgeSlot()}
        `}renderDefaultSlot(){return z`<slot></slot>`}renderBridgeSlot(){return z`
            <slot name="bridge" @slotchange=${this.bridgeSlotChangedHandler}></slot>
        `}renderAdditionalSlots(){return z`
            <slot name="top-left" slot="top-left"></slot>
            <slot name="top-right" slot="top-right"></slot>
            <slot name="bottom-left" slot="bottom-left"></slot>
            <slot name="bottom-right" slot="bottom-right"></slot>
        `}firstUpdated(){this.child&&(this.childResizeObserver.observe(this.child),this.reposition())}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.close()}handleBridgeSlotChange(t){const e=t.target.assignedNodes();this._interceptor=e[0]}async processCapturedPointerDownAsync(t,e){e.handled||(e.nextInteractionHandled=e.nextInteractionHandled||this.preventInteractions,m.containsInComposedPath(t,this)||this.shouldCloseOnPlacementTargetClick(t)||await g.processCapturedPointerDown(this,t,e))}shouldCloseOnPlacementTargetClick(t){return!(!this.preventCloseOnPositionTargetClick||!this.placementTargetElement)&&y.containsInComposedPath(t,(t=>t===this.placementTargetElement))}async closeAsync(t,e){const i=await this.raiseClosingResultRequestedAsync(e);return this.closingResultRequestedTcs=new u,t.nextInteractionHandled=t.nextInteractionHandled||this.preventInteractions,t.handled=!0,Promise.resolve(!!i)}async closeHierarchyAsync(t,e,i){await g.closeHierarchyAsync(this,t,e,i)}async closeRootAsync(t,e,i){await g.closeRootAsync(this,t,e,i)}async processCapturedKeyDownAsync(t,e){if(await super.processCapturedKeyDownAsync(t,e),!e.handled&&"Escape"===t.key){y.markHandled(t);const i=await this.raiseClosingResultRequestedAsync(b.EscapePress);if(this.closingResultRequestedTcs=new u,!i)return void(e.handled=!0);C.releaseCapture(this)}}lostCapture(){super.lostCapture()}gotCapture(){super.gotCapture(),this.activate()}raiseEvent(t,e){var i;null===(i=this._interceptor)||void 0===i||i.raise(t,e)}unsubscribeFromPlacementTargetObserver(){this.placementTargetObserver&&(this.placementTargetObserver.disconnect(),this.placementTargetObserver=null)}subscribeToPlacementTargetObserver(){this.isOpen&&(this.placementTargetObserver=new d(this.placementTarget,this.placementTargetElementChangedHandler),this.placementTargetObserver.observe())}unsubscribeFromPlacementTargetPositionObserver(){this.placementTargetPositionObserver.disconnect()}subscribeToParentPopup(){const t=H.findParent(this,(t=>L(t,(()=>["closeHierarchyAsync","closeAsync","processCapturedPointerDownAsync","addEventListener","removeEventListener","contains","focus","positionChanged","renderedVisible"]))));if(t&&L(t,(()=>["closeHierarchyAsync","closeAsync","processCapturedPointerDownAsync","addEventListener","removeEventListener","contains","focus","positionChanged","renderedVisible"]))){const e=t;e.positionChanged.subscribe(this.positionChangedHandler),this._parentPopup=e}}unsubscribeFromParentPopup(){this._parentPopup&&(this._parentPopup.positionChanged.unsubscribe(this.positionChangedHandler),this._parentPopup=null)}handleParentPopupPositionChanged(t,e){this.updatePosition()}subscribeToPlacementTargetPositionObserver(){this.placementTargetElement&&this.isOpen&&this.placementTargetPositionObserver.observe(this.placementTargetElement)}show(){this.isOpen||(this._isOpen=!0,this.raiseShown(),this.addToLogicalTree(),this.addToVisibleBranchTree(),this.subscribeEvents(),this.initializeCapture(),this.reposition())}ensureBranchId(){if(!this.branchId)throw new Error("branchId should not be null")}addToVisibleBranchTree(){this.ensureBranchId(),T.register(this.branchId)}removeFromVisibleBranchTree(){this.ensureBranchId(),T.unregister(this.branchId)}raiseShown(){const t=new ot;this.dispatchEvent(new nt(t))}raiseClosed(){const t=new ot;this.dispatchEvent(new rt(t))}close(){this.isOpen&&(this._isOpen=!1,this.raiseClosed(),this.removeFromLogicalTree(),this.removeFromVisibleBranchTree(),this.unsubscribeEvents(),this.releaseCapture(),this.cleanUpAfterClose(),this.reposition())}notifyCloseCanceled(){this.processClosingRequested(!1),this.positionInfo.closingRequested=!1}cleanUpAfterClose(){this.updateVisibility(!1),this.animationEnabled=!1,this.positionInfo=new tt}shouldCapture(){return this.closeOnOutsideClick||this.preventInteractions}addToLogicalTree(){if(this.hasLogicalParent)return void(this.hasOwnLogicalParent=!0);this.ensureBranchId();const t=R.getParentId(this.branchId),e=E.getPopup(t);e&&L(e,(()=>["logicalChildren","addLogicalChild","removeLogicalChild"]))&&e.addLogicalChild(this)}removeFromLogicalTree(){if(this.hasOwnLogicalParent)return void(this.hasOwnLogicalParent=!1);const t=H.getParent(this,!0);t&&L(t,(()=>["logicalChildren","addLogicalChild","removeLogicalChild"]))&&t.removeLogicalChild(this)}initializeCapture(){this.shouldCapture&&C.capture(this)}releaseCapture(){this.processClosingRequested(!0),C.releaseCapture(this)}processClosingRequested(t){this.closingResultRequestedTcs.resolve(t),this.closingResultRequestedTcs=new u,this.positionInfo.closingRequested=!1}subscribeToChild(t){t&&this.childResizeObserver.observe(t,{box:"border-box"})}unsubscribeFromChild(t){t&&this.childResizeObserver.unobserve(t)}subscribeEvents(){document.addEventListener(c.eventName,this.positionChangingHandler),this.addEventListener(c.eventName,this.positionChangingHandler),window.addEventListener("resize",this.sizeChangedHandler),this.subscribeToPlacementTargetObserver(),this.subscribeToPlacementTargetPositionObserver(),this.subscribeToParentPopup()}unsubscribeEvents(){document.removeEventListener(c.eventName,this.positionChangingHandler),this.removeEventListener(c.eventName,this.positionChangingHandler),this.removeEventListener("resize",this.sizeChangedHandler),this.unsubscribeFromPlacementTargetPositionObserver(),this.unsubscribeFromPlacementTargetObserver(),this.unsubscribeFromParentPopup()}reposition(){this.repositionAction.execute(this.updatePosition.bind(this))}activate(){const t=new v(new w(this.branchId));this.dispatchEvent(t)}forceReposition(){this.repositionAction.cancel(),this.updatePosition()}lockPlacement(){this.positionInfo.lockPlacement=!0}unlockPlacement(){this.positionInfo.lockPlacement=!1}handleChildSizeChanged(t,e){this.reposition()}handlePositionChanging(t){this.reposition()}handleSizeChanged(t){this.reposition()}handlePlacementTargetPositionChanged(t,e){this.reposition()}handlePlacementTargetElementChanged(t,e){this.placementTargetElement=t.element,this.reposition()}isAbsolutePlacementMode(t){switch(t){case Y.MousePoint:case Y.Mouse:case Y.AbsolutePoint:case Y.Absolute:return!0}return!1}interestPointsFromRect(t){const e=new Array(5);return e[X.TopLeft]=t.topLeft,e[X.TopRight]=t.topRight,e[X.BottomLeft]=t.bottomLeft,e[X.BottomRight]=t.bottomRight,e[X.Center]=new n(t.x+t.width/2,t.y+t.height/2),e}getPlacementTargetInterestPoints(t){let o,a=e.Empty;const l=this.placementTargetElement,c=new F(this.horizontalOffset,this.verticalOffset);if(!l||this.isAbsolutePlacementMode(t))t!==Y.Mouse&&t!==Y.MousePoint||(this.positionInfo.mousePosition||(this.positionInfo.mousePosition=new n(D.x,D.y)),a=e.create(this.positionInfo.mousePosition,i.Empty)),a=s.offset(a,c),o=this.interestPointsFromRect(a);else{a=this.placementRectangle,s.areSame(a,e.Empty)&&(a=t!==Y.Relative&&t!==Y.RelativePoint?new e(0,0,l.offsetWidth,l.offsetHeight):e.Empty),a=s.offset(a,c),o=this.interestPointsFromRect(a);const i=h.getRelativeElementRect(l).topLeft;for(let t=0;t<5;t++)o[t]=r.add(o[t],i)}return o}getChildInterestPoints(t){return this.interestPointsFromRect(this.child?new e(0,0,this.child.offsetWidth,this.child.offsetHeight):e.Empty)}getBounds(t){let i=t[0].x,s=t[0].x,o=t[0].y,n=t[0].y;return t.forEach((t=>{const e=t.x,r=t.y;e<i&&(i=e),e>s&&(s=e),r<o&&(o=r),r>n&&(n=r)})),new e(i,o,s-i,n-o)}raiseCustomPlacement(t,e){const i=new st(new it(t,e));return this.dispatchEvent(i),i.detail.customPlacement}getNumberOfCombinations(t){switch(t){case Y.Mouse:return 2;case Y.Bottom:case Y.Top:case Y.Right:case Y.Left:case Y.RelativePoint:case Y.MousePoint:case Y.AbsolutePoint:return 4;case Y.Custom:return 0;default:return 1}}getPointCombination(t,e){const i=this.dropFromRight;switch(t){case Y.Mouse:if(i){if(0===e)return[new Z(X.BottomRight,X.TopRight),Q.Horizontal,!1,G.Near,J.bottom];if(1===e)return[new Z(X.TopRight,X.BottomRight),Q.Horizontal,!1,G.Near,J.bottom]}else{if(0===e)return[new Z(X.BottomLeft,X.TopLeft),Q.Horizontal,!1,G.Near,J.bottom];if(1===e)return[new Z(X.TopLeft,X.BottomLeft),Q.Horizontal,!1,G.Near,J.bottom]}break;case Y.Bottom:if(i){if(0===e)return[new Z(X.BottomRight,X.TopRight),Q.Horizontal,!1,G.Far,J.bottom];if(1===e)return[new Z(X.TopRight,X.BottomRight),Q.Horizontal,!0,G.Far,J.top];if(2===e)return[new Z(X.BottomLeft,X.TopLeft),Q.Horizontal,!1,G.Near,J.bottom];if(3===e)return[new Z(X.TopLeft,X.BottomLeft),Q.Horizontal,!0,G.Near,J.top]}else{if(0===e)return[new Z(X.BottomLeft,X.TopLeft),Q.Horizontal,!1,G.Near,J.bottom];if(1===e)return[new Z(X.TopLeft,X.BottomLeft),Q.Horizontal,!0,G.Near,J.top];if(2===e)return[new Z(X.BottomRight,X.TopRight),Q.Horizontal,!1,G.Far,J.bottom];if(3===e)return[new Z(X.TopRight,X.BottomRight),Q.Horizontal,!0,G.Far,J.top]}break;case Y.Top:if(i){if(0===e)return[new Z(X.TopRight,X.BottomRight),Q.Horizontal,!1,G.Far,J.top];if(1===e)return[new Z(X.BottomRight,X.TopRight),Q.Horizontal,!0,G.Far,J.bottom];if(2===e)return[new Z(X.TopLeft,X.BottomLeft),Q.Horizontal,!1,G.Near,J.top];if(3===e)return[new Z(X.BottomLeft,X.TopLeft),Q.Horizontal,!0,G.Near,J.bottom]}else{if(0===e)return[new Z(X.TopLeft,X.BottomLeft),Q.Horizontal,!1,G.Near,J.top];if(1===e)return[new Z(X.BottomLeft,X.TopLeft),Q.Horizontal,!0,G.Near,J.bottom];if(2===e)return[new Z(X.TopRight,X.BottomRight),Q.Horizontal,!1,G.Far,J.top];if(3===e)return[new Z(X.BottomRight,X.TopRight),Q.Horizontal,!0,G.Far,J.bottom]}break;case Y.Right:case Y.Left:if(i&&t===Y.Right||!i&&t===Y.Left){if(0===e)return[new Z(X.TopLeft,X.TopRight),Q.Vertical,!1,G.Near,J.bottom];if(1===e)return[new Z(X.BottomLeft,X.BottomRight),Q.Vertical,!0,G.Near,J.top];if(2===e)return[new Z(X.TopRight,X.TopLeft),Q.Vertical,!1,G.Far,J.bottom];if(3===e)return[new Z(X.BottomRight,X.BottomLeft),Q.Vertical,!0,G.Far,J.top]}else{if(0===e)return[new Z(X.TopRight,X.TopLeft),Q.Vertical,!1,G.Near,J.bottom];if(1===e)return[new Z(X.BottomRight,X.BottomLeft),Q.Vertical,!0,G.Near,J.top];if(2===e)return[new Z(X.TopLeft,X.TopRight),Q.Vertical,!1,G.Far,J.bottom];if(3===e)return[new Z(X.BottomLeft,X.BottomRight),Q.Vertical,!0,G.Far,J.top]}break;case Y.Relative:case Y.RelativePoint:case Y.MousePoint:case Y.AbsolutePoint:if(i){if(0===e)return[new Z(X.TopLeft,X.TopRight),Q.Horizontal,!1,G.Far,J.bottom];if(1===e)return[new Z(X.TopLeft,X.TopLeft),Q.Horizontal,!1,G.Near,J.bottom];if(2===e)return[new Z(X.TopLeft,X.BottomRight),Q.Horizontal,!0,G.Far,J.top];if(3===e)return[new Z(X.TopLeft,X.BottomLeft),Q.Horizontal,!0,G.Near,J.top]}else{if(0===e)return[new Z(X.TopLeft,X.TopLeft),Q.Horizontal,!1,G.Near,J.bottom];if(1===e)return[new Z(X.TopLeft,X.TopRight),Q.Horizontal,!1,G.Far,J.bottom];if(2===e)return[new Z(X.TopLeft,X.BottomLeft),Q.Horizontal,!0,G.Near,J.top];if(3===e)return[new Z(X.TopLeft,X.BottomRight),Q.Horizontal,!0,G.Far,J.top]}break;case Y.Center:return[new Z(X.Center,X.Center),Q.None,!1,G.Near,J.bottom];default:return[new Z(X.TopLeft,X.TopLeft),Q.None,!1,G.Near,J.bottom]}return[new Z(X.TopLeft,X.TopLeft),Q.None,!1,G.Near,J.bottom]}getRestrictBounds(){switch(this.restrict){case U.Viewport:return _.viewport();case U.Page:return _.page();case U.TargetElement:{if(!this.restrictTarget)throw new Error("restrictTarget should be specified if restrictmode is custom");const t=document.querySelector(this.restrictTarget);return h.getRelativeElementRect(t)}case U.Rectangle:return this.restrictRectangle}return _.viewport()}updatePosition(){if(!this.isOpen)return this._renderedVisible=!1,void(this.style.display=f.none);const t=this.renderedVisible;this._renderedVisible=!0;const e=this.renderedVisible;if(!e)return this.updateVisibility(!0),void(t!==e&&this.raisePositionChanged(this.offset,!1));this.style.display=f.flex;const i=this.placement,o=this.getPlacementTargetInterestPoints(i),a=this.getChildInterestPoints(i),h=this.getBounds(o);let l=this.getBounds(a);const c=l.width*l.height;let d=-1,p=new F(this.positionInfo.topLeft.x,this.positionInfo.topLeft.y),u=!1,m=-1,g=Q.None,v=0,w=this.actualDropDirection,C=this.actualDropOpposite,y=this.actualDropAlignment,P=null,T=null;i===Y.Custom?(T=this.processCustomPlacement(a,o),v=T?T.length:0):v=this.getNumberOfCombinations(i);for(let t=0;t<v;t++){if(this.positionInfo.lockPlacement&&this.positionInfo.lockedPosition!==t)continue;let e=new F(0,0),n=Q.None,h=!1,u=G.Near,b=J.bottom,f=null;if(i===Y.Custom)f=T[t],e=A.add(o[X.TopLeft],f.point),n=f.axis,h=f.dropOpposite,u=f.dropDirection,b=f.dropAlignment;else{const[s,n,l,c,d]=this.getPointCombination(i,t);h=l,u=c,b=d,e=r.sub(o[s.targetInterestPoint],a[s.childInterestPoint])}const v=s.offset(l,e),R=this.getRestrictBounds(),E=s.intersect(R,v),H=E.isEmpty?0:E.width*E.height;if(H-m>this.tolerance&&(d=t,p=e,m=H,g=n,w=u,C=h,y=b,P=f,Math.abs(H-c)<this.tolerance))break}this.actualDropOpposite=C,this.actualDropDirection=w,this.actualDropAlignment=y,l=s.offset(l,p);const R=this.getRestrictBounds(),E=s.intersect(R,l);[p,u]=this.calcRestrictedBestTranslation(E,l,o,R,h,p),this.processBestTranslationResults(p,l,h,R,C,w,y,g,P),this.positionInfo.lockedPosition=d,this.positionInfo.childSize=l.size;const H=Math.round(p.x),L=Math.round(p.y);let x=!1;H===this.positionInfo.topLeft.x&&L===this.positionInfo.topLeft.y||(this.positionInfo.topLeft=new n(H,L),this.offset=this.positionInfo.topLeft,x=!0);const B=!e||u,O=this.updateVisibility(B);x=x||O,this.animationEnabled=e&&!u,x&&this.raisePositionChanged(this.offset,B),this.closeMode===K.Close&&!this.positionInfo.closingRequested&&B&&(this.positionInfo.closingRequested=!0,this.raiseClosingRequested(b.Programmatically))}raisePositionChanged(t,e){this._positionChangedEvent.raise(this,[!e,t])}updateVisibility(t){return this._renderedVisible=!t,this.positionInfo.visuallyHidden!==t&&(this.style.opacity=t?"0":"1",this.positionInfo.visuallyHidden=t,!0)}processCustomPlacement(t,e){return this.raiseCustomPlacement(t,e)}raiseClosingRequested(t){this.dispatchEvent(new j(t))}raiseClosingResultRequested(t){this.dispatchEvent(new $(t))}async raiseClosingResultRequestedAsync(t){if(!this.hasServerSideClosing)return this.raiseClosingRequested(t),!0;const e=new u;return this.closingResultRequestedTcs=e,this.raiseClosingResultRequested(t),e.promise}calcRestrictedBestTranslation(t,e,i,s,o,n){return[this.fitToRestriction?this.calcRestrictedFitBestTranslation(t,e,i,s,n):n,this.closeMode!==K.None&&this.calcRestrictedShouldHide(s,o)]}calcRestrictedShouldHide(t,e){if(!this.placementTargetElement)return!k.checkTargetEdgesWithin(t,e);let i=t;return h.getClippingParents(this.placementTargetElement).forEach((t=>{const e=h.getRelativeElementRect(t);i=s.intersect(i,e)})),!!i.isEmpty||!k.checkTargetEdgesWithin(i,e)}static checkTargetEdgesWithin(t,e){return s.contains(t,e.topLeft)||s.contains(t,e.topRight)||s.contains(t,e.bottomLeft)||s.contains(t,e.bottomRight)}calcRestrictedFitBestTranslation(t,e,i,s,o){if(Math.abs(t.width-e.width)>this.tolerance||Math.abs(t.height-e.height)>this.tolerance){const t=i[X.TopLeft],n=r.sub(i[X.TopRight],t),a=A.normalize(new F(n.x,n.y));Number.isNaN(a.y)||Math.abs(a.y)<this.tolerance?e.right>s.right?o=new F(s.right-e.width,o.y):e.left<s.left&&(o=new F(s.left,o.y)):Math.abs(a.x)<this.tolerance&&(e.bottom>s.bottom?o=new F(o.x,s.bottom-e.bottom):e.top<s.top&&(o=new F(o.x,s.top)));const h=r.sub(t,i[X.BottomLeft]),l=A.normalize(h);Number.isNaN(l.x)||Math.abs(l.x)<this.tolerance?e.bottom>s.bottom?o=new F(o.x,s.bottom-e.height):e.top<s.top&&(o=new F(o.x,s.top)):Math.abs(l.y)<this.tolerance&&(e.right>s.right?o=new F(s.right-e.width,o.y):e.left<s.left&&(o=new F(s.x,o.y)))}return o}processCapture(t){}processBestTranslationResults(t,e,i,s,o,n,r,a,h){}};function ht(){}function lt(t){return t}t([N({type:Boolean,attribute:"close-on-outside-click"})],at.prototype,"closeOnOutsideClick",void 0),t([N({type:Boolean,attribute:"prevent-close-on-position-target-click"})],at.prototype,"preventCloseOnPositionTargetClick",void 0),t([N({type:String,attribute:"close-mode"})],at.prototype,"closeMode",void 0),t([N({type:Boolean,attribute:"fit-to-restriction"})],at.prototype,"fitToRestriction",void 0),t([N({type:Boolean,attribute:"prevent-interactions"})],at.prototype,"preventInteractions",void 0),t([N({type:Boolean,attribute:"has-serverside-closing"})],at.prototype,"hasServerSideClosing",void 0),t([N({type:String,attribute:"branch-id"})],at.prototype,"branchId",void 0),t([N({type:String,attribute:"parent-branch-id"})],at.prototype,"parentBranchId",void 0),t([N({type:String,reflect:!1})],at.prototype,"rootCssStyle",void 0),t([N({type:String,attribute:"placement"})],at.prototype,"placement",void 0),t([N({type:Number,attribute:"horizontal-offset"})],at.prototype,"horizontalOffset",void 0),t([N({type:Number,attribute:"vertical-offset"})],at.prototype,"verticalOffset",void 0),t([N({type:String,attribute:"placement-target"})],at.prototype,"placementTarget",void 0),t([N({type:String,attribute:"restrict-target"})],at.prototype,"restrictTarget",void 0),t([N({type:String,attribute:"restrict"})],at.prototype,"restrict",void 0),t([N({type:String,attribute:"width"})],at.prototype,"width",void 0),t([N({type:String,attribute:"max-width"})],at.prototype,"maxWidth",void 0),t([N({type:String,attribute:"min-width"})],at.prototype,"minWidth",void 0),t([N({type:String,attribute:"height"})],at.prototype,"height",void 0),t([N({type:String,attribute:"max-height"})],at.prototype,"maxHeight",void 0),t([N({type:String,attribute:"min-height"})],at.prototype,"minHeight",void 0),t([N({type:String,attribute:"desired-width"})],at.prototype,"desiredWidth",void 0),t([N({type:String,attribute:"desired-height"})],at.prototype,"desiredHeight",void 0),t([N({type:String,attribute:"min-desired-width"})],at.prototype,"minDesiredWidth",void 0),t([N({type:String,attribute:"min-desired-height"})],at.prototype,"minDesiredHeight",void 0),t([N({type:String,reflect:!1})],at.prototype,"renderWidth",void 0),t([N({type:String,reflect:!1})],at.prototype,"renderHeight",void 0),t([N({type:String,attribute:"restrict-rect",converter:t=>t?s.parse(t):e.Empty})],at.prototype,"restrictRectangle",void 0),t([N({type:String,attribute:"placement-rect",converter:t=>t?s.parse(t):e.Empty})],at.prototype,"placementRectangle",void 0),t([N({type:String,attribute:"x-drop-direction",reflect:!0})],at.prototype,"actualDropDirection",void 0),t([N({type:String,attribute:"x-drop-alignment",reflect:!0})],at.prototype,"actualDropAlignment",void 0),t([N({type:String,attribute:"x-drop-opposite",reflect:!0,converter:{toAttribute:(t,e)=>t?"true":"false"}})],at.prototype,"actualDropOpposite",void 0),t([N({type:Boolean,attribute:"x-is-open",reflect:!0,converter:{fromAttribute:(t,e)=>{throw new Error("readonly")}}})],at.prototype,"_isOpen",void 0),t([N({type:Boolean,reflect:!1})],at.prototype,"animationEnabled",void 0),t([N({type:Boolean,attribute:"resizing"})],at.prototype,"resizing",void 0),at=k=t([I("dxbl-popup")],at);const ct=Object.freeze({__proto__:null,dxPopupTagName:"dxbl-popup",PopupClosingRequestedEvent:j,PopupClosingResultRequestedEvent:$,get CloseMode(){return K},get InterestPoint(){return X},get PlacementMode(){return Y},get DropDirection(){return G},get DropAlignment(){return J},get PopupPrimaryAxis(){return Q},CustomPopupPlacement:et,CustomPlacementEvent:st,PopupContext:ot,PopupShownEvent:nt,PopupClosedEvent:rt,get DxPopup(){return at},init:ht,getReference:lt,default:{init:ht,getReference:lt,dxPopupTagName:"dxbl-popup",DxPopup:at}});export{et as C,at as D,X as I,nt as P,F as V,G as a,J as b,rt as c,Y as d,Q as e,ct as p};
