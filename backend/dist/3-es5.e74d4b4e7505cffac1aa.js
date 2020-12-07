function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,i=_getPrototypeOf(t);if(e){var r=_getPrototypeOf(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/uyH":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("z6cu"),r=n("JIr8"),a=n("fXoL"),o=n("tk/3"),s=function(){var t=function(){function t(e){_classCallCheck(this,t),this.http=e,this.apiUrl="http://localhost:8080"}return _createClass(t,[{key:"getShelters",value:function(){return this.http.get(this.apiUrl+"/api/shelters").pipe(Object(r.a)(this.handleError))}},{key:"getOneShelter",value:function(t){return this.http.get("".concat(this.apiUrl,"/api/shelters/").concat(t)).pipe(Object(r.a)(this.handleError))}},{key:"getPetsByShelter",value:function(t){return this.http.get("".concat(this.apiUrl,"/api/pets/shelterwithpets/").concat(t))}},{key:"handleError",value:function(t){var e;return e=t.error instanceof ErrorEvent?"Error: "+t.error.message:"Error Code: ".concat(t.status,"\nMessage: ").concat(t.message),console.log(e),Object(i.a)(e)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.hc(o.a))},t.\u0275prov=a.Tb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"6VP7":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("z6cu"),r=n("JIr8"),a=n("fXoL"),o=n("tk/3"),s=function(){var t=function(){function t(e){_classCallCheck(this,t),this.http=e,this.apiUrl="http://localhost:8080"}return _createClass(t,[{key:"getAllPets",value:function(){return this.http.get(this.apiUrl+"/api/pets").pipe(Object(r.a)(this.handleError))}},{key:"getOnePet",value:function(t){return this.http.get("".concat(this.apiUrl,"/api/pets/").concat(t)).pipe(Object(r.a)(this.handleError))}},{key:"getPetHealth",value:function(t){return this.http.get("".concat(this.apiUrl,"/api/pets/health/").concat(t)).pipe(Object(r.a)(this.handleError))}},{key:"getPetVaccination",value:function(t){return this.http.get("".concat(this.apiUrl,"/api/pets/vaccination/").concat(t)).pipe(Object(r.a)(this.handleError))}},{key:"getPetSanitation",value:function(t){return this.http.get("".concat(this.apiUrl,"/api/pets/sanitation/").concat(t)).pipe(Object(r.a)(this.handleError))}},{key:"getPetOwner",value:function(t){return this.http.get("".concat(this.apiUrl,"/api/pets/owner/").concat(t)).pipe(Object(r.a)(this.handleError))}},{key:"postPetMain",value:function(t){return this.http.post(this.apiUrl+"/api/pets/main",t).pipe(Object(r.a)(this.handleError))}},{key:"postPetAdditional",value:function(t,e){return this.http.post("".concat(this.apiUrl,"/api/pets/additional/").concat(e),t).pipe(Object(r.a)(this.handleError))}},{key:"postPetCatchInfo",value:function(t,e){return this.http.post("".concat(this.apiUrl,"/api/pets/catch/").concat(e),t).pipe(Object(r.a)(this.handleError))}},{key:"postPetMove",value:function(t,e){return this.http.post("".concat(this.apiUrl,"/api/pets/move/").concat(e),t).pipe(Object(r.a)(this.handleError))}},{key:"postPetResponsible",value:function(t,e){return this.http.post("".concat(this.apiUrl,"/api/pets/responsible/").concat(e),t).pipe(Object(r.a)(this.handleError))}},{key:"postPetOwner",value:function(t,e){return this.http.post("".concat(this.apiUrl,"/api/pets/owner/").concat(e),t).pipe(Object(r.a)(this.handleError))}},{key:"postPetVactination",value:function(t,e){return this.http.post("".concat(this.apiUrl,"/api/pets/vactination/").concat(e),t).pipe(Object(r.a)(this.handleError))}},{key:"postPetSanitation",value:function(t,e){return this.http.post("".concat(this.apiUrl,"/api/pets/sanitation/").concat(e),t).pipe(Object(r.a)(this.handleError))}},{key:"postPetHealth",value:function(t,e){return this.http.post("".concat(this.apiUrl,"/api/pets/health/").concat(e),t).pipe(Object(r.a)(this.handleError))}},{key:"updatePetMain",value:function(t,e){return this.http.put("".concat(this.apiUrl,"/api/pets/main/").concat(e),t).pipe(Object(r.a)(this.handleError))}},{key:"updatePetAdditional",value:function(t,e){return this.http.put("".concat(this.apiUrl,"/api/pets/additional/").concat(e),t).pipe(Object(r.a)(this.handleError))}},{key:"updatePetCatchInfo",value:function(t,e){return this.http.put("".concat(this.apiUrl,"/api/pets/catch/").concat(e),t).pipe(Object(r.a)(this.handleError))}},{key:"updatePetMove",value:function(t,e){return this.http.put("".concat(this.apiUrl,"/api/pets/move/").concat(e),t).pipe(Object(r.a)(this.handleError))}},{key:"updatePetResponsible",value:function(t,e){return this.http.put("".concat(this.apiUrl,"/api/pets/responsible/").concat(e),t).pipe(Object(r.a)(this.handleError))}},{key:"getReadyPets",value:function(){return this.http.get(this.apiUrl+"/api/pets/ready/all").pipe(Object(r.a)(this.handleError))}},{key:"handleError",value:function(t){var e;return e=t.error instanceof ErrorEvent?"Error: "+t.error.message:"Error Code: ".concat(t.status,"\nMessage: ").concat(t.message),console.log(e),Object(i.a)(e)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.hc(o.a))},t.\u0275prov=a.Tb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},avAx:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("fXoL"),r=n("6VP7"),a=function(){var t=function(){function t(e){_classCallCheck(this,t),this.animalService=e}return _createClass(t,[{key:"resolve",value:function(t,e){return this.animalService.getOnePet(t.params.animalId)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.hc(r.a))},t.\u0275prov=i.Tb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},qFsG:function(t,e,n){"use strict";n.d(e,"a",(function(){return E})),n.d(e,"b",(function(){return O}));var i=n("nLfN"),r=n("fXoL"),a=n("8LU1"),o=n("EY2u"),s=n("XNiG");n("xgIS"),n("3UWI"),n("1G5W"),n("ofXK");var c,u,l,h,p=Object(i.f)({passive:!0}),f=((u=function(){function t(e,n){_classCallCheck(this,t),this._platform=e,this._ngZone=n,this._monitoredElements=new Map}return _createClass(t,[{key:"monitor",value:function(t){var e=this;if(!this._platform.isBrowser)return o.a;var n=Object(a.e)(t),i=this._monitoredElements.get(n);if(i)return i.subject;var r=new s.a,c="cdk-text-field-autofilled",u=function(t){"cdk-text-field-autofill-start"!==t.animationName||n.classList.contains(c)?"cdk-text-field-autofill-end"===t.animationName&&n.classList.contains(c)&&(n.classList.remove(c),e._ngZone.run((function(){return r.next({target:t.target,isAutofilled:!1})}))):(n.classList.add(c),e._ngZone.run((function(){return r.next({target:t.target,isAutofilled:!0})})))};return this._ngZone.runOutsideAngular((function(){n.addEventListener("animationstart",u,p),n.classList.add("cdk-text-field-autofill-monitored")})),this._monitoredElements.set(n,{subject:r,unlisten:function(){n.removeEventListener("animationstart",u,p)}}),r}},{key:"stopMonitoring",value:function(t){var e=Object(a.e)(t),n=this._monitoredElements.get(e);n&&(n.unlisten(),n.subject.complete(),e.classList.remove("cdk-text-field-autofill-monitored"),e.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(e))}},{key:"ngOnDestroy",value:function(){var t=this;this._monitoredElements.forEach((function(e,n){return t.stopMonitoring(n)}))}}]),t}()).\u0275fac=function(t){return new(t||u)(r.hc(i.a),r.hc(r.F))},u.\u0275prov=Object(r.Tb)({factory:function(){return new u(Object(r.hc)(i.a),Object(r.hc)(r.F))},token:u,providedIn:"root"}),u),d=((c=function t(){_classCallCheck(this,t)}).\u0275mod=r.Vb({type:c}),c.\u0275inj=r.Ub({factory:function(t){return new(t||c)},imports:[[i.b]]}),c),v=n("FKr1"),y=n("kmnG"),_=n("3Pt+"),b=new r.u("MAT_INPUT_VALUE_ACCESSOR"),m=["button","checkbox","file","hidden","image","radio","range","reset","submit"],g=0,k=Object(v.v)((function t(e,n,i,r){_classCallCheck(this,t),this._defaultErrorStateMatcher=e,this._parentForm=n,this._parentFormGroup=i,this.ngControl=r})),E=((h=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,r,a,o,c,u,l,h,p,f){var d;_classCallCheck(this,n),(d=e.call(this,u,o,c,a))._elementRef=t,d._platform=r,d.ngControl=a,d._autofillMonitor=h,d._formField=f,d._uid="mat-input-"+g++,d.focused=!1,d.stateChanges=new s.a,d.controlType="mat-input",d.autofilled=!1,d._disabled=!1,d._required=!1,d._type="text",d._readonly=!1,d._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter((function(t){return Object(i.e)().has(t)}));var v=d._elementRef.nativeElement,y=v.nodeName.toLowerCase();return d._inputValueAccessor=l||v,d._previousNativeValue=d.value,d.id=d.id,r.IOS&&p.runOutsideAngular((function(){t.nativeElement.addEventListener("keyup",(function(t){var e=t.target;e.value||e.selectionStart||e.selectionEnd||(e.setSelectionRange(1,1),e.setSelectionRange(0,0))}))})),d._isServer=!d._platform.isBrowser,d._isNativeSelect="select"===y,d._isTextarea="textarea"===y,d._isNativeSelect&&(d.controlType=v.multiple?"mat-native-select-multiple":"mat-native-select"),d}return _createClass(n,[{key:"ngAfterViewInit",value:function(){var t=this;this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe((function(e){t.autofilled=e.isAutofilled,t.stateChanges.next()}))}},{key:"ngOnChanges",value:function(){this.stateChanges.next()}},{key:"ngOnDestroy",value:function(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement)}},{key:"ngDoCheck",value:function(){this.ngControl&&this.updateErrorState(),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}},{key:"focus",value:function(t){this._elementRef.nativeElement.focus(t)}},{key:"_focusChanged",value:function(t){t===this.focused||this.readonly&&t||(this.focused=t,this.stateChanges.next())}},{key:"_onInput",value:function(){}},{key:"_dirtyCheckPlaceholder",value:function(){var t,e,n=(null===(e=null===(t=this._formField)||void 0===t?void 0:t._hideControlPlaceholder)||void 0===e?void 0:e.call(t))?null:this.placeholder;if(n!==this._previousPlaceholder){var i=this._elementRef.nativeElement;this._previousPlaceholder=n,n?i.setAttribute("placeholder",n):i.removeAttribute("placeholder")}}},{key:"_dirtyCheckNativeValue",value:function(){var t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}},{key:"_validateType",value:function(){m.indexOf(this._type)}},{key:"_isNeverEmpty",value:function(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}},{key:"_isBadInput",value:function(){var t=this._elementRef.nativeElement.validity;return t&&t.badInput}},{key:"setDescribedByIds",value:function(t){t.length?this._elementRef.nativeElement.setAttribute("aria-describedby",t.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}},{key:"onContainerClick",value:function(){this.focused||this.focus()}},{key:"disabled",get:function(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled},set:function(t){this._disabled=Object(a.c)(t),this.focused&&(this.focused=!1,this.stateChanges.next())}},{key:"id",get:function(){return this._id},set:function(t){this._id=t||this._uid}},{key:"required",get:function(){return this._required},set:function(t){this._required=Object(a.c)(t)}},{key:"type",get:function(){return this._type},set:function(t){this._type=t||"text",this._validateType(),!this._isTextarea&&Object(i.e)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}},{key:"value",get:function(){return this._inputValueAccessor.value},set:function(t){t!==this.value&&(this._inputValueAccessor.value=t,this.stateChanges.next())}},{key:"readonly",get:function(){return this._readonly},set:function(t){this._readonly=Object(a.c)(t)}},{key:"empty",get:function(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}},{key:"shouldLabelFloat",get:function(){if(this._isNativeSelect){var t=this._elementRef.nativeElement,e=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&e&&e.label)}return this.focused||!this.empty}}]),n}(k)).\u0275fac=function(t){return new(t||h)(r.Xb(r.o),r.Xb(i.a),r.Xb(_.k,10),r.Xb(_.n,8),r.Xb(_.f,8),r.Xb(v.c),r.Xb(b,10),r.Xb(f),r.Xb(r.F),r.Xb(y.a,8))},h.\u0275dir=r.Sb({type:h,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-input-element","mat-form-field-autofill-control"],hostVars:9,hostBindings:function(t,e){1&t&&r.lc("focus",(function(){return e._focusChanged(!0)}))("blur",(function(){return e._focusChanged(!1)}))("input",(function(){return e._onInput()})),2&t&&(r.gc("disabled",e.disabled)("required",e.required),r.Mb("id",e.id)("data-placeholder",e.placeholder)("readonly",e.readonly&&!e._isNativeSelect||null)("aria-invalid",e.errorState)("aria-required",e.required.toString()),r.Ob("mat-input-server",e._isServer))},inputs:{id:"id",disabled:"disabled",required:"required",type:"type",value:"value",readonly:"readonly",placeholder:"placeholder",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"]},exportAs:["matInput"],features:[r.Kb([{provide:y.c,useExisting:h}]),r.Ib,r.Jb]}),h),O=((l=function t(){_classCallCheck(this,t)}).\u0275mod=r.Vb({type:l}),l.\u0275inj=r.Ub({factory:function(t){return new(t||l)},providers:[v.c],imports:[[d,y.d],d,y.d]}),l)}}]);