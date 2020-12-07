(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6VP7":function(t,i,e){"use strict";e.d(i,"a",(function(){return r}));var c=e("z6cu"),n=e("JIr8"),a=e("fXoL"),s=e("tk/3");let r=(()=>{class t{constructor(t){this.http=t,this.apiUrl="http://localhost:8080"}getAllPets(){return this.http.get(this.apiUrl+"/api/pets").pipe(Object(n.a)(this.handleError))}getOnePet(t){return this.http.get(`${this.apiUrl}/api/pets/${t}`).pipe(Object(n.a)(this.handleError))}getPetHealth(t){return this.http.get(`${this.apiUrl}/api/pets/health/${t}`).pipe(Object(n.a)(this.handleError))}getPetVaccination(t){return this.http.get(`${this.apiUrl}/api/pets/vaccination/${t}`).pipe(Object(n.a)(this.handleError))}getPetSanitation(t){return this.http.get(`${this.apiUrl}/api/pets/sanitation/${t}`).pipe(Object(n.a)(this.handleError))}getPetOwner(t){return this.http.get(`${this.apiUrl}/api/pets/owner/${t}`).pipe(Object(n.a)(this.handleError))}postPetMain(t){return this.http.post(this.apiUrl+"/api/pets/main",t).pipe(Object(n.a)(this.handleError))}postPetAdditional(t,i){return this.http.post(`${this.apiUrl}/api/pets/additional/${i}`,t).pipe(Object(n.a)(this.handleError))}postPetCatchInfo(t,i){return this.http.post(`${this.apiUrl}/api/pets/catch/${i}`,t).pipe(Object(n.a)(this.handleError))}postPetMove(t,i){return this.http.post(`${this.apiUrl}/api/pets/move/${i}`,t).pipe(Object(n.a)(this.handleError))}postPetResponsible(t,i){return this.http.post(`${this.apiUrl}/api/pets/responsible/${i}`,t).pipe(Object(n.a)(this.handleError))}postPetOwner(t,i){return this.http.post(`${this.apiUrl}/api/pets/owner/${i}`,t).pipe(Object(n.a)(this.handleError))}postPetVactination(t,i){return this.http.post(`${this.apiUrl}/api/pets/vactination/${i}`,t).pipe(Object(n.a)(this.handleError))}postPetSanitation(t,i){return this.http.post(`${this.apiUrl}/api/pets/sanitation/${i}`,t).pipe(Object(n.a)(this.handleError))}postPetHealth(t,i){return this.http.post(`${this.apiUrl}/api/pets/health/${i}`,t).pipe(Object(n.a)(this.handleError))}updatePetMain(t,i){return this.http.put(`${this.apiUrl}/api/pets/main/${i}`,t).pipe(Object(n.a)(this.handleError))}updatePetAdditional(t,i){return this.http.put(`${this.apiUrl}/api/pets/additional/${i}`,t).pipe(Object(n.a)(this.handleError))}updatePetCatchInfo(t,i){return this.http.put(`${this.apiUrl}/api/pets/catch/${i}`,t).pipe(Object(n.a)(this.handleError))}updatePetMove(t,i){return this.http.put(`${this.apiUrl}/api/pets/move/${i}`,t).pipe(Object(n.a)(this.handleError))}updatePetResponsible(t,i){return this.http.put(`${this.apiUrl}/api/pets/responsible/${i}`,t).pipe(Object(n.a)(this.handleError))}getReadyPets(){return this.http.get(this.apiUrl+"/api/pets/ready/all").pipe(Object(n.a)(this.handleError))}handleError(t){let i="";return i=t.error instanceof ErrorEvent?"Error: "+t.error.message:`Error Code: ${t.status}\nMessage: ${t.message}`,console.log(i),Object(c.a)(i)}}return t.\u0275fac=function(i){return new(i||t)(a.hc(s.a))},t.\u0275prov=a.Tb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},a8kK:function(t,i,e){"use strict";e.r(i),e.d(i,"AnimalsModule",(function(){return j}));var c=e("ofXK"),n=e("tyNb"),a=e("fXoL"),s=e("6VP7"),r=e("6NWb"),o=e("7EHt"),l=e("oOf3"),p=e("bSwM"),d=e("G+dJ");const h=["petList"];function g(t,i){if(1&t){const t=a.ec();a.dc(0,"li",20),a.dc(1,"mat-checkbox",21,22),a.lc("change",(function(e){a.Dc(t);const c=i.$implicit;return a.pc(2).changeFilter(e,"species",c)})),a.qc(3,"petFilters"),a.Nc(4),a.cc(),a.cc()}if(2&t){const t=i.$implicit,e=a.Bc(2),c=a.pc(2);a.Lb(1),a.vc("disabled",c.checkDisabled("species",t,a.sc(3,2,c.animals,c.activeFilters),e)),a.Lb(3),a.Pc(" ",t," ")}}function f(t,i){if(1&t){const t=a.ec();a.dc(0,"li",20),a.dc(1,"mat-checkbox",21,23),a.lc("change",(function(e){a.Dc(t);const c=i.$implicit;return a.pc(2).changeFilter(e,"gender",c)})),a.qc(3,"petFilters"),a.Nc(4),a.cc(),a.cc()}if(2&t){const t=i.$implicit,e=a.Bc(2),c=a.pc(2);a.Lb(1),a.vc("disabled",c.checkDisabled("gender",t,a.sc(3,2,c.animals,c.activeFilters),e)),a.Lb(3),a.Pc(" ",t," ")}}function _(t,i){if(1&t){const t=a.ec();a.dc(0,"li",20),a.dc(1,"mat-checkbox",21,24),a.lc("change",(function(e){a.Dc(t);const c=i.$implicit;return a.pc(2).changeFilter(e,"hair_color",c)})),a.qc(3,"petFilters"),a.Nc(4),a.cc(),a.cc()}if(2&t){const t=i.$implicit,e=a.Bc(2),c=a.pc(2);a.Lb(1),a.vc("disabled",c.checkDisabled("hair_color",t,a.sc(3,2,c.animals,c.activeFilters),e)),a.Lb(3),a.Pc(" ",t," ")}}function b(t,i){if(1&t){const t=a.ec();a.dc(0,"li",20),a.dc(1,"mat-checkbox",21,25),a.lc("change",(function(e){a.Dc(t);const c=i.$implicit;return a.pc(2).changeFilter(e,"hair_type",c)})),a.qc(3,"petFilters"),a.Nc(4),a.cc(),a.cc()}if(2&t){const t=i.$implicit,e=a.Bc(2),c=a.pc(2);a.Lb(1),a.vc("disabled",c.checkDisabled("hair_type",t,a.sc(3,2,c.animals,c.activeFilters),e)),a.Lb(3),a.Pc(" ",t," ")}}function m(t,i){if(1&t){const t=a.ec();a.dc(0,"li",20),a.dc(1,"mat-checkbox",21,26),a.lc("change",(function(e){a.Dc(t);const c=i.$implicit;return a.pc(2).changeFilter(e,"ears_type",c)})),a.qc(3,"petFilters"),a.Nc(4),a.cc(),a.cc()}if(2&t){const t=i.$implicit,e=a.Bc(2),c=a.pc(2);a.Lb(1),a.vc("disabled",c.checkDisabled("ears_type",t,a.sc(3,2,c.animals,c.activeFilters),e)),a.Lb(3),a.Pc(" ",t," ")}}function u(t,i){if(1&t){const t=a.ec();a.dc(0,"li",20),a.dc(1,"mat-checkbox",21,27),a.lc("change",(function(e){a.Dc(t);const c=i.$implicit;return a.pc(2).changeFilter(e,"tail_type",c)})),a.qc(3,"petFilters"),a.Nc(4),a.cc(),a.cc()}if(2&t){const t=i.$implicit,e=a.Bc(2),c=a.pc(2);a.Lb(1),a.vc("disabled",c.checkDisabled("tail_type",t,a.sc(3,2,c.animals,c.activeFilters),e)),a.Lb(3),a.Pc(" ",t," ")}}function v(t,i){if(1&t){const t=a.ec();a.dc(0,"li",20),a.dc(1,"mat-checkbox",21,28),a.lc("change",(function(e){a.Dc(t);const c=i.$implicit;return a.pc(2).changeFilter(e,"size",c)})),a.qc(3,"petFilters"),a.Nc(4),a.cc(),a.cc()}if(2&t){const t=i.$implicit,e=a.Bc(2),c=a.pc(2);a.Lb(1),a.vc("disabled",c.checkDisabled("size",t,a.sc(3,2,c.animals,c.activeFilters),e)),a.Lb(3),a.Pc(" ",t," ")}}function x(t,i){if(1&t&&(a.dc(0,"div",14),a.dc(1,"div",15),a.dc(2,"div",16),a.dc(3,"p",17),a.Nc(4,"\u0412\u0438\u0434 \u0436\u0438\u0432\u043e\u0442\u043d\u043e\u0433\u043e"),a.cc(),a.dc(5,"ul",18),a.Lc(6,g,5,5,"li",19),a.cc(),a.cc(),a.cc(),a.dc(7,"div",15),a.dc(8,"div",16),a.dc(9,"p",17),a.Nc(10,"\u041f\u043e\u043b"),a.cc(),a.dc(11,"ul",18),a.Lc(12,f,5,5,"li",19),a.cc(),a.cc(),a.cc(),a.dc(13,"div",15),a.dc(14,"div",16),a.dc(15,"p",17),a.Nc(16,"\u041e\u043a\u0440\u0430\u0441"),a.cc(),a.dc(17,"ul",18),a.Lc(18,_,5,5,"li",19),a.cc(),a.cc(),a.cc(),a.dc(19,"div",15),a.dc(20,"div",16),a.dc(21,"p",17),a.Nc(22,"\u0428\u0435\u0440\u0441\u0442\u044c"),a.cc(),a.dc(23,"ul",18),a.Lc(24,b,5,5,"li",19),a.cc(),a.cc(),a.cc(),a.dc(25,"div",15),a.dc(26,"div",16),a.dc(27,"p",17),a.Nc(28,"\u0423\u0448\u0438"),a.cc(),a.dc(29,"ul",18),a.Lc(30,m,5,5,"li",19),a.cc(),a.cc(),a.cc(),a.dc(31,"div",15),a.dc(32,"div",16),a.dc(33,"p",17),a.Nc(34,"\u0425\u0432\u043e\u0441\u0442"),a.cc(),a.dc(35,"ul",18),a.Lc(36,u,5,5,"li",19),a.cc(),a.cc(),a.cc(),a.dc(37,"div",15),a.dc(38,"div",16),a.dc(39,"p",17),a.Nc(40,"\u0420\u0430\u0437\u043c\u0435\u0440"),a.cc(),a.dc(41,"ul",18),a.Lc(42,v,5,5,"li",19),a.cc(),a.cc(),a.cc(),a.cc()),2&t){const t=a.pc();a.Lb(6),a.vc("ngForOf",t.filters[0].options),a.Lb(6),a.vc("ngForOf",t.filters[1].options),a.Lb(6),a.vc("ngForOf",t.filters[2].options),a.Lb(6),a.vc("ngForOf",t.filters[3].options),a.Lb(6),a.vc("ngForOf",t.filters[4].options),a.Lb(6),a.vc("ngForOf",t.filters[5].options),a.Lb(6),a.vc("ngForOf",t.filters[6].options)}}const P=function(t,i){return["/shelter",t,i]};function O(t,i){if(1&t&&(a.dc(0,"div",34),a.dc(1,"a",35),a.dc(2,"div",36),a.dc(3,"span",37),a.Nc(4),a.cc(),a.cc(),a.dc(5,"div",38),a.dc(6,"div",38),a.Yb(7,"img",39),a.cc(),a.cc(),a.dc(8,"div",40),a.dc(9,"p",41),a.Nc(10),a.cc(),a.dc(11,"p",41),a.Nc(12),a.cc(),a.dc(13,"p",41),a.Nc(14),a.cc(),a.dc(15,"p",41),a.Nc(16),a.cc(),a.dc(17,"p",41),a.Nc(18),a.cc(),a.dc(19,"p",41),a.Nc(20),a.cc(),a.cc(),a.cc(),a.cc()),2&t){const t=i.$implicit;a.Lb(1),a.vc("routerLink",a.zc(8,P,t.shelter_id,t.id)),a.Lb(3),a.Oc(t.name),a.Lb(6),a.Pc("\u0412\u0438\u0434: ",t.species,""),a.Lb(2),a.Pc("\u041f\u043e\u0440\u043e\u0434\u0430: ",t.breed,""),a.Lb(2),a.Pc("\u041f\u043e\u043b: ",t.gender,""),a.Lb(2),a.Pc("\u0420\u0430\u0437\u043c\u0435\u0440: ",t.size,""),a.Lb(2),a.Pc("\u0412\u043e\u0437\u0440\u0430\u0441\u0442 (\u0433\u043e\u0434): ",t.age,""),a.Lb(2),a.Pc("\u0412\u0435\u0441: ",t.weight," \u043a\u0433")}}const L=function(t){return{itemsPerPage:20,currentPage:t}};function F(t,i){if(1&t&&(a.bc(0),a.Lc(1,O,21,11,"div",33),a.qc(2,"paginate"),a.qc(3,"petFilters"),a.ac()),2&t){const t=a.pc(2);a.Lb(1),a.vc("ngForOf",a.sc(2,1,a.sc(3,4,t.animals,t.activeFilters),a.yc(7,L,t.curPage)))}}function $(t,i){1&t&&(a.dc(0,"span",42),a.Nc(1,"\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e."),a.cc())}function w(t,i){if(1&t&&(a.dc(0,"div",29,30),a.Lc(2,F,4,9,"ng-container",31),a.qc(3,"petFilters"),a.Lc(4,$,2,0,"ng-template",null,32,a.Mc),a.cc()),2&t){const t=a.Bc(5),i=a.pc();a.Lb(2),a.vc("ngIf",a.sc(3,2,i.animals,i.activeFilters).length>0)("ngIfElse",t)}}const C=[{path:"",component:(()=>{class t{constructor(t,i,e){this.animalService=t,this.activatedRoute=i,this.location=e,this.filters=[],this.filtersToDelete=["id","card_num","age","weight","name","breed","id_tag","date_in","reason","shelter_id","special","enclosure","Pets_additional","Pets_move"],this.activeFilters=[],this.filtersIsLoaded=!1,this.curPage=1}ngOnInit(){this.getReadyPets()}getReadyPets(){this.animalService.getReadyPets().subscribe(t=>{this.animals=t,console.log(this.animals);for(let i in t[0])this.getFilters(t,i);this.filtersIsLoaded=!0})}pageChanged(t){this.curPage=t,this.petList.nativeElement.scrollIntoView({behavior:"smooth"})}getFilters(t,i){this.filtersToDelete.find(t=>t==i)||(this.filters.push({name:i,options:[...new Set(t.map(t=>t[""+i]))].sort()}),this.activeFilters.push({name:i,options:[]})),console.log(this.filters)}changeFilter(t,i,e){1==t.checked?this.addFilter(i,e):this.removeFilter(i,e)}addFilter(t,i){this.activeFilters.find(i=>i.name==t).options.push({option:i}),this.activeFilters=this.activeFilters.slice(),this.lastAddedFilter=t}removeFilter(t,i){let e=this.activeFilters.find(i=>i.name==t),c=e.options.findIndex(t=>t.option==i);e.options.splice(c,1),this.activeFilters=this.activeFilters.slice()}checkDisabled(t,i,e,c){return this.lastAddedFilter!=t?!(e.filter(e=>e[t]==i).length>0):!!c.disabled}goBack(){this.location.back()}}return t.\u0275fac=function(i){return new(i||t)(a.Xb(s.a),a.Xb(n.a),a.Xb(c.i))},t.\u0275cmp=a.Rb({type:t,selectors:[["app-animals-list"]],viewQuery:function(t,i){var e;1&t&&a.Sc(h,!0),2&t&&a.Ac(e=a.mc())&&(i.petList=e.first)},decls:21,vars:2,consts:[[1,"animals-list"],[1,"animals-list__container","container"],[1,"animals-list__header"],[1,"animals-list__back","back",3,"click"],["icon","chevron-left",1,"back__icon","icon"],[1,"back__text"],[1,"animals-list__title"],[1,"animals-list__animal-list","list"],[1,"list__filters","animal-filters"],[1,"animal-filters__title"],["class","animal-filters__list",4,"ngIf"],["class","list__items",4,"ngIf"],[1,"animals-list__page-controls"],["previousLabel","\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f","nextLabel","\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f","autoHide","true","maxSize","8",3,"pageChange","pageBoundsCorrection"],[1,"animal-filters__list"],[1,"animal-filters__filter-container"],[1,"animal-filters__filter","filter"],[1,"filter__name"],[1,"filter__options"],["class","filter__option",4,"ngFor","ngForOf"],[1,"filter__option"],["color","warn",3,"disabled","change"],["speciesCheckbox",""],["genderCheckbox",""],["hair_colorCheckbox",""],["hair_typeCheckbox",""],["ears_typeCheckbox",""],["tail_typeCheckbox",""],["sizeCheckbox",""],[1,"list__items"],["petList",""],[4,"ngIf","ngIfElse"],["elseTemplate",""],["class","list__item",4,"ngFor","ngForOf"],[1,"list__item"],[1,"list__card","card",3,"routerLink"],[1,"card__header"],[1,"card__title"],[1,"card__image"],["src","/assets/images/1581\u0437-20.jpg","alt","\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u0436\u0438\u0432\u043e\u0442\u043d\u043e\u0433\u043e",1,"card__image-img"],[1,"card__info","info"],[1,"info__text"],[1,"list__no-item"]],template:function(t,i){1&t&&(a.dc(0,"section",0),a.dc(1,"div",1),a.dc(2,"div",2),a.dc(3,"button",3),a.lc("click",(function(){return i.goBack()})),a.Yb(4,"fa-icon",4),a.dc(5,"span",5),a.Nc(6,"\u041d\u0430\u0437\u0430\u0434"),a.cc(),a.cc(),a.dc(7,"h2",6),a.Nc(8,"\u0421\u043f\u0438\u0441\u043e\u043a \u0436\u0438\u0432\u043e\u0442\u043d\u044b\u0445"),a.cc(),a.cc(),a.dc(9,"div",7),a.dc(10,"div",8),a.dc(11,"mat-accordion"),a.dc(12,"mat-expansion-panel"),a.dc(13,"mat-expansion-panel-header"),a.dc(14,"mat-panel-title"),a.dc(15,"span",9),a.Nc(16,"\u0424\u0438\u043b\u044c\u0442\u0440\u044b"),a.cc(),a.cc(),a.cc(),a.Lc(17,x,43,7,"div",10),a.cc(),a.cc(),a.cc(),a.cc(),a.Lc(18,w,6,5,"div",11),a.cc(),a.dc(19,"div",12),a.dc(20,"pagination-controls",13),a.lc("pageChange",(function(t){return i.pageChanged(t)}))("pageBoundsCorrection",(function(t){return i.pageChanged(t)})),a.cc(),a.cc(),a.cc()),2&t&&(a.Lb(17),a.vc("ngIf",1==i.filtersIsLoaded),a.Lb(1),a.vc("ngIf",i.animals))},directives:[r.a,o.a,o.c,o.d,o.e,c.m,l.c,c.l,p.a,n.e],pipes:[d.a,l.b],styles:[".animals-list[_ngcontent-%COMP%]{margin-top:20px;padding-bottom:40px}.animals-list__container[_ngcontent-%COMP%]{padding:0 10px}.animals-list__header[_ngcontent-%COMP%]{position:relative}.animals-list__back[_ngcontent-%COMP%]{position:absolute;left:0;top:50%;transform:translateY(-50%)}.animals-list__title[_ngcontent-%COMP%]{text-align:center}.animals-list__animal-list[_ngcontent-%COMP%]{margin-top:15px}.animals-list__page-controls[_ngcontent-%COMP%]{text-align:center;margin-top:30px}.animal-filters__title[_ngcontent-%COMP%]{font-family:Commissioner;font-size:20px}.animal-filters__list[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}.animal-filters__filter-container[_ngcontent-%COMP%]{flex:0 0 20%;padding:10px}.filter[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:4px;padding:10px 10px 10px 0}.filter__name[_ngcontent-%COMP%]{font-size:18px;padding-left:20px}.filter__options[_ngcontent-%COMP%]{min-height:140px;max-height:140px;overflow-y:auto;margin-top:5px;padding-left:20px}.filter__option[_ngcontent-%COMP%]{font-size:16px;margin-top:8px;padding-right:8px;word-wrap:wrap}.list__title-container[_ngcontent-%COMP%]{text-align:center;margin-top:25px}.list__filters[_ngcontent-%COMP%]{margin-top:10px}.list__items[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:flex-start;align-items:flex-start;margin:15px -15px 0}.list__no-item[_ngcontent-%COMP%]{font-size:26px;font-weight:500;margin:0 auto}.list__item[_ngcontent-%COMP%]{flex:0 0 25%;padding:15px;overflow:hidden}.card[_ngcontent-%COMP%]{display:block;border-radius:4px;box-shadow:0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15);cursor:pointer;overflow:hidden}.card__header[_ngcontent-%COMP%]{text-align:center;align-items:center;padding:4px 0}.card__title[_ngcontent-%COMP%]{font-size:20px;font-weight:500}.card__image[_ngcontent-%COMP%]{overflow:hidden;width:100%;height:200px}.card__image-img[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.info[_ngcontent-%COMP%]{padding:8px}.info__text[_ngcontent-%COMP%]{font-weight:300;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px;height:4px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, [_ngcontent-%COMP%]::-webkit-scrollbar-track{border-radius:2px}"]}),t})()}];let k=(()=>{class t{}return t.\u0275mod=a.Vb({type:t}),t.\u0275inj=a.Ub({factory:function(i){return new(i||t)},imports:[[n.f.forChild(C)],n.f]}),t})();var M=e("rgdS");let j=(()=>{class t{}return t.\u0275mod=a.Vb({type:t}),t.\u0275inj=a.Ub({factory:function(i){return new(i||t)},imports:[[c.c,k,l.a,p.b,o.b,M.a,r.c]]}),t})()}}]);