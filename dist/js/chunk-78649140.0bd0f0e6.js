(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78649140"],{"74ec":function(t,a,i){},"7edf":function(t,a,i){},"953d":function(t,a,i){"use strict";i.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return t.isMounted?n("div",[n("section",{staticClass:"section_table pt-5 pb-5 flex-column"},[n("div",{staticClass:"container "},[n("h1",{staticClass:"w-100 text-center align-items-center"},[t._v(" "+t._s(t.$t("transaction_history"))+" ")]),n("div",{staticClass:"section_table_body"},[n("table",{attrs:{id:"customers"}},[n("tr",[n("th",[t._v(" "+t._s(t.$t("card_number"))+" ")]),n("th",[t._v(t._s(t.$t("date")))]),n("th",[t._v(" "+t._s(t.$t("withdraw_method"))+" ")]),n("th",[t._v(" "+t._s(t.$t("summa"))+" ")]),n("th",[t._v(t._s(t.$t("Status")))])]),t._l(t.transactionList,(function(a){return n("tr",{key:a.id},[n("td",[t._v(t._s(t.maskCardNumber(a.client_card)))]),n("td",[t._v(t._s(a.payment_time))]),n("td",[t._v(t._s(a.pay_method_type))]),n("td",[t._v("$ "+t._s(a.amount))]),0==a.payment_status?n("td",[t._v("IN PROGRESS")]):t._e(),1==a.payment_status?n("td",[t._v("Completed")]):t._e()])}))],2)]),t.paginationCount>1?n("ul",{staticClass:"pagination mt-3"},[t.transactionData.previous?n("li",[n("button",{staticClass:"prev border-0 bg-light",on:{click:function(a){return t.getTransactionData("previous")}}},[n("img",{attrs:{src:i("cbf7"),alt:""}})])]):t._e(),t._l(t.paginationCount,(function(a){return n("li",{key:a,staticClass:"pageNumber",class:[t.currentPage==a?"active":""]},[n("span",{staticClass:"border-0",on:{click:function(i){return t.getTransactionData(a)}}},[t._v(" "+t._s(a)+" ")])])})),t.transactionData.next?n("li",[n("button",{staticClass:"next border-0 bg-light",on:{click:function(a){return t.getTransactionData("next")}}},[n("img",{attrs:{src:i("70be"),alt:""}})])]):t._e()],2):t._e()])]),n("Additional"),n("Information")],1):t._e()},s=[],e=i("1da1"),r=(i("96cf"),i("b018")),o=i("f697"),c=i("357a"),_={data:function(){return{transactionData:null,isMounted:!1,currentPage:1}},mounted:function(){var t=this;return Object(e["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(c["b"])("/api/v1/transaction/history?page=".concat(t.currentPage));case 2:i=a.sent,200==i.status&&(t.isMounted=!0,t.transactionData=i.data);case 4:case"end":return a.stop()}}),a)})))()},computed:{transactionList:function(){return this.transactionData.results},paginationCount:function(){if(this.transactionData.count>10)return console.log(Math.ceil(this.transactionData.count/10)),Math.ceil(this.transactionData.count/10)}},methods:{maskCardNumber:function(t){for(var a="",i=0;i<t.length;i++)i>4&&i<14&&" "!=t[i]?a+="*":a+=t[i];return a},getImgUrl:function(t){return i("1771")("./"+t)},getTransactionData:function(t){var a=this;console.log("🚀 ~ file: Transactionhistory.vue ~ line 100 ~ getTransactionData ~ page",t);var i="/api/v1/transaction/history?page="+this.currentPage;"next"==t?(this.currentPage++,i=this.transactionData.next):"previous"==t?(this.currentPage--,i=this.transactionData.previous):(this.currentPage=t,i="/api/v1/transaction/history?page="+t),Object(c["b"])(i).then((function(t){a.transactionData=t.data}))}},components:{Information:o["a"],Additional:r["a"]}},l=_,u=(i("b6b3"),i("2877")),d=Object(u["a"])(l,n,s,!1,null,"222d6ade",null);a["default"]=d.exports},b018:function(t,a,i){"use strict";var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("section",{staticClass:"section_cards_2"},[i("div",{staticClass:"container"},[i("h1",[t._v(" "+t._s(t.$t("qoshimcha_func"))+" ")]),i("div",{staticClass:"card_container"},t._l(t.cards,(function(a){return i("div",{key:a.id,staticClass:"card"},[i("div",{staticClass:"img_block"},[i("img",{attrs:{src:t.getImgUrl(a.img),alt:""}})]),i("div",{staticClass:"description"},[i("p",{staticClass:"title"},[t._v(" "+t._s(a.name)+" ")]),i("p",{staticClass:"descr_text"},[t._v(" "+t._s(a.paragraph)+" ")])]),i("p",[i("a",{attrs:{href:a.link}},[t._v(t._s(a.link_name))])])])})),0)])])},s=[],e={data:function(){return{cards:[{id:1,img:"images/human.png",name:"Do'stlaringizni taklif qiling va ular uchun naqd pul olish",paragraph:"Havola yordamida ro'yxatdan o'tgandan so'ng, do'stingiz 'Megabonus' sodiqlik dasturida 'Savdogar' darajasini oladi. Do'stingiz har safar ...",link_name:"'Do'stlardan keladigan daromad' haqida batafsil",link:"https://youtube.com"},{id:2,img:"images/human.png",name:"Do'stlaringizni taklif qiling va ular uchun naqd pul olish",paragraph:"Havola yordamida ro'yxatdan o'tgandan so'ng, do'stingiz 'Megabonus' sodiqlik dasturida 'Savdogar' darajasini oladi. Do'stingiz har safar ...",link_name:"'Do'stlardan keladigan daromad' haqida batafsil",link:"https://youtube.com"},{id:3,img:"images/human.png",name:"Do'stlaringizni taklif qiling va ular uchun naqd pul olish",paragraph:"Havola yordamida ro'yxatdan o'tgandan so'ng, do'stingiz 'Megabonus' sodiqlik dasturida 'Savdogar' darajasini oladi. Do'stingiz har safar ...",link_name:"'Do'stlardan keladigan daromad' haqida batafsil",link:"https://youtube.com"}]}},methods:{getImgUrl:function(t){return i("1771")("./"+t)}}},r=e,o=(i("cc38"),i("2877")),c=Object(o["a"])(r,n,s,!1,null,"1806466b",null);a["a"]=c.exports},b6b3:function(t,a,i){"use strict";i("7edf")},cc38:function(t,a,i){"use strict";i("74ec")},f697:function(t,a,i){"use strict";var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("section",{staticClass:"section_four"},[i("div",{staticClass:"container"},[i("div",{staticClass:"items"},[i("h2",[t._v(" "+t._s(t.$t("section_4_item_title_1"))+" ")]),i("br"),i("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item1_link1"))+" ")]),i("br"),i("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item1_link2"))+" ")]),i("br"),i("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item1_link3"))+" ")]),i("br"),i("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item1_link4"))+" ")]),i("br"),i("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item1_link5"))+" ")]),i("br")]),i("div",{staticClass:"items"},[i("h2",[t._v(" "+t._s(t.$t("section_4_item_title_2")))]),i("br"),i("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item2_link1"))+" ")]),i("br"),i("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item2_link2"))+" ")]),i("br"),i("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item2_link3"))+" ")]),i("br"),i("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item2_link4"))+" ")]),i("br"),i("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item2_link5"))+" ")]),i("br"),i("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item2_link6"))+" ")]),i("br"),i("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item2_link7"))+" ")]),i("br"),i("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item2_link8"))+" ")]),i("br")]),i("div",{staticClass:"items"},[i("h2",[t._v(" "+t._s(t.$t("section_4_item_title_3"))+" ")]),i("br"),i("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item3_link1"))+" ")]),i("br"),i("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item3_link2"))+" ")]),i("br"),i("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item3_link3"))+" ")]),i("br"),i("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.$t("section_4_item3_link4"))+" ")]),i("br")]),i("div",{staticClass:"items"},[i("h2",[t._v(" "+t._s(t.$t("section_4_item_title_4")))]),i("br"),i("p",[t._v(" "+t._s(t.$t("section_4_item4_link"))+" ")])])])])},s=[],e={},r=e,o=i("2877"),c=Object(o["a"])(r,n,s,!1,null,"b92d7b3a",null);a["a"]=c.exports}}]);
//# sourceMappingURL=chunk-78649140.0bd0f0e6.js.map