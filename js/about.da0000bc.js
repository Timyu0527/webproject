(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0b42":function(t,e,a){var n=a("da84"),o=a("e8b5"),c=a("68ee"),r=a("861d"),s=a("b622"),i=s("species"),d=n.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,c(e)&&(e===d||o(e.prototype))?e=void 0:r(e)&&(e=e[i],null===e&&(e=void 0))),void 0===e?d:e}},"0b49":function(t,e,a){"use strict";a.r(e);a("fb6a");var n=a("7a23"),o={class:"container"},c=Object(n["f"])(" 購物車 "),r={class:"dataIn"},s={class:"content"},i=Object(n["e"])("b",null,"店家: ",-1),d={class:"content"},u=Object(n["e"])("b",null,"商品: ",-1),l={class:"content"},b=Object(n["e"])("b",null,"數量: ",-1),f={class:"item"},p=["onClick"],h=Object(n["e"])("label",{class:"checkContainer"},[Object(n["e"])("input",{type:"checkbox"}),Object(n["e"])("span",{class:"checkmark"})],-1),O={class:"shop"};function j(t,e,a,j,_,v){return Object(n["p"])(),Object(n["d"])("div",o,[Object(n["e"])("h1",null,[c,Object(n["e"])("button",{onClick:e[0]||(e[0]=function(t){return v.add({shop_data:_.shop_data,goods_data:_.goods_data,count_data:_.count_data})}),class:"button"},"新增")]),Object(n["e"])("div",r,[Object(n["e"])("label",s,[i,Object(n["D"])(Object(n["e"])("input",{class:"area","onUpdate:modelValue":e[1]||(e[1]=function(t){return _.shop_data=t})},null,512),[[n["A"],_.shop_data]])]),Object(n["e"])("label",d,[u,Object(n["D"])(Object(n["e"])("input",{class:"area","onUpdate:modelValue":e[2]||(e[2]=function(t){return _.goods_data=t})},null,512),[[n["A"],_.goods_data]])]),Object(n["e"])("label",l,[b,Object(n["D"])(Object(n["e"])("input",{class:"area","onUpdate:modelValue":e[3]||(e[3]=function(t){return _.count_data=t}),type:"number",min:"1"},null,512),[[n["A"],_.count_data]])])]),(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(_.items.slice().reverse(),(function(t,e){return Object(n["p"])(),Object(n["d"])("div",{key:t.id},[Object(n["e"])("div",f,[Object(n["e"])("i",{onClick:function(t){return v.onDelete(e)},class:"fas fa-times"},null,8,p),h,Object(n["e"])("p",O,"店家: "+Object(n["y"])(t.shop_data),1),Object(n["e"])("p",null,"商品: "+Object(n["y"])(t.goods_data),1),Object(n["e"])("p",null,"數量: "+Object(n["y"])(t.count_data),1)])])})),128))])}a("a434");var _=a("56d7"),v=a("a680"),g={name:"App",data:function(){return{items:[],shop_data:"",goods_data:"",count_data:"1"}},mounted:function(){var t=this;Object(v["b"])(Object(v["a"])(_["db"],"shopCart","item")).then((function(e){t.items=e.data().all_goods,console.log(e.data().all_goods),console.log(t.items)}))},methods:{add:function(t){Date.prototype.toJSONLocal=function(){function t(t){return(t<10?"0":"")+t}return this.getFullYear()+"-"+t(this.getMonth()+1)+"-"+t(this.getDate())},""!=t.shop_data||""!=t.goods_data?(this.items.push({id:Date.now(),shop_data:t.shop_data,goods_data:t.goods_data,count_data:t.count_data}),Object(v["d"])(Object(v["a"])(_["db"],"shopCart","item"),{all_goods:this.items}),this.goods_data="",this.shop_data="",this.count_data="1"):alert("輸入請勿留白")},onDelete:function(t){this.items.splice(t,1)}}},m=(a("4da6"),a("d959")),y=a.n(m);const w=y()(g,[["render",j]]);e["default"]=w},"1dde":function(t,e,a){var n=a("d039"),o=a("b622"),c=a("2d00"),r=o("species");t.exports=function(t){return c>=51||!n((function(){var e=[],a=e.constructor={};return a[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4da6":function(t,e,a){"use strict";a("8ac7")},"65f0":function(t,e,a){var n=a("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},8418:function(t,e,a){"use strict";var n=a("a04b"),o=a("9bf2"),c=a("5c6c");t.exports=function(t,e,a){var r=n(e);r in t?o.f(t,r,c(0,a)):t[r]=a}},"8ac7":function(t,e,a){},a434:function(t,e,a){"use strict";var n=a("23e7"),o=a("da84"),c=a("23cb"),r=a("5926"),s=a("07fa"),i=a("7b0b"),d=a("65f0"),u=a("8418"),l=a("1dde"),b=l("splice"),f=o.TypeError,p=Math.max,h=Math.min,O=9007199254740991,j="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!b},{splice:function(t,e){var a,n,o,l,b,_,v=i(this),g=s(v),m=c(t,g),y=arguments.length;if(0===y?a=n=0:1===y?(a=0,n=g-m):(a=y-2,n=h(p(r(e),0),g-m)),g+a-n>O)throw f(j);for(o=d(v,n),l=0;l<n;l++)b=m+l,b in v&&u(o,l,v[b]);if(o.length=n,a<n){for(l=m;l<g-n;l++)b=l+n,_=l+a,b in v?v[_]=v[b]:delete v[_];for(l=g;l>g-n+a;l--)delete v[l-1]}else if(a>n)for(l=g-n;l>m;l--)b=l+n-1,_=l+a-1,b in v?v[_]=v[b]:delete v[_];for(l=0;l<a;l++)v[l+m]=arguments[l+2];return v.length=g-n+a,o}})},e8b5:function(t,e,a){var n=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fb6a:function(t,e,a){"use strict";var n=a("23e7"),o=a("da84"),c=a("e8b5"),r=a("68ee"),s=a("861d"),i=a("23cb"),d=a("07fa"),u=a("fc6a"),l=a("8418"),b=a("b622"),f=a("1dde"),p=a("f36a"),h=f("slice"),O=b("species"),j=o.Array,_=Math.max;n({target:"Array",proto:!0,forced:!h},{slice:function(t,e){var a,n,o,b=u(this),f=d(b),h=i(t,f),v=i(void 0===e?f:e,f);if(c(b)&&(a=b.constructor,r(a)&&(a===j||c(a.prototype))?a=void 0:s(a)&&(a=a[O],null===a&&(a=void 0)),a===j||void 0===a))return p(b,h,v);for(n=new(void 0===a?j:a)(_(v-h,0)),o=0;h<v;h++,o++)h in b&&l(n,o,b[h]);return n.length=o,n}})}}]);
//# sourceMappingURL=about.da0000bc.js.map