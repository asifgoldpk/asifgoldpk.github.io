(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"713b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),a("q-toolbar-title",[e._v("\n        COVID-19 tracker\n      ")]),a("div",[e._v("by Asif Raza (asifgoldpk@gmail.com)\n      "),a("q-tooltip",[e._v("\n        Based on data from the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University\n      ")])],1)],1)],1),a("q-drawer",{attrs:{bordered:"","content-class":"bg-grey-1"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v("\n        Links\n      ")]),e._l(e.essentialLinks,(function(t){return a("EssentialLink",e._b({key:t.title},"EssentialLink",t,!1))}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},i=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:e.link}},[e.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1):e._e(),a("q-item-section",[a("q-item-label",[e._v(e._s(e.title))]),a("q-item-label",{attrs:{caption:""}},[e._v("\n      "+e._s(e.caption)+"\n    ")])],1)],1)},l=[],o={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},s=o,c=a("2877"),p=a("eebe"),u=a.n(p),b=a("66e5"),f=a("4074"),d=a("0016"),m=a("0170"),k=Object(c["a"])(s,r,l,!1,null,null,null),q=k.exports;u()(k,"components",{QItem:b["a"],QItemSection:f["a"],QIcon:d["a"],QItemLabel:m["a"]});var v={name:"MainLayout",components:{EssentialLink:q},data:function(){return{leftDrawerOpen:!1,essentialLinks:[{title:"Facebook",caption:"@razagoldpk-a",icon:"public",link:""}]}}},g=v,w=a("4d5a"),_=a("e359"),Q=a("65c6"),y=a("9c40"),L=a("6ac5"),h=a("05c0"),O=a("9404"),S=a("1c1c"),D=a("09e3"),E=Object(c["a"])(g,n,i,!1,null,null,null);t["default"]=E.exports;u()(E,"components",{QLayout:w["a"],QHeader:_["a"],QToolbar:Q["a"],QBtn:y["a"],QToolbarTitle:L["a"],QTooltip:h["a"],QDrawer:O["a"],QList:S["a"],QItemLabel:m["a"],QPageContainer:D["a"]})}}]);