(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{1:function(t,e){},2:function(t,e){},"8b24":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"container"},[a("div",{staticClass:"row q-col-gutter-md q-px-md q-py-md"},[a("div",{staticStyle:{width:"95vw"}},[a("apex-line")],1)]),a("div",{staticStyle:{"font-size":"xx-small"}},[t._v("Permission is granted to anyone to use this software/screenshots for any purpose. Based on data from (CSSE) at Johns Hopkins University. No responsibility is taken for the accuracy of the data.")])])},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-base",[a("apexchart",{ref:"realtimeChart",attrs:{type:"line",height:"300",options:t.chartOptions,series:t.series}}),a("div",{staticClass:"row"},[a("q-select",{staticStyle:{width:"100px"},attrs:{filled:"",options:["Cases","Deaths"],label:"Show"},model:{value:t.showWhat,callback:function(e){t.showWhat=e},expression:"showWhat"}}),a("q-select",{staticStyle:{width:"140px"},attrs:{filled:"",options:t.countriesOptions,label:"Home Country"},model:{value:t.homeCountry,callback:function(e){t.homeCountry=e},expression:"homeCountry"}}),a("q-select",{staticStyle:{width:"120px"},attrs:{filled:"",options:t.countriesOptions,label:"Second Country"},model:{value:t.secondCountry,callback:function(e){t.secondCountry=e},expression:"secondCountry"}}),a("q-select",{staticStyle:{width:"150px"},attrs:{filled:"",multiple:"",options:t.countriesOptions,label:"Other"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),a("q-input",{staticStyle:{width:"40px"},attrs:{type:"number",label:"Days to show"},model:{value:t.days,callback:function(e){t.days=e},expression:"days"}}),a("q-btn",{attrs:{label:"Update"},on:{click:t.UpdateCountrySelection}})],1),a("q-inner-loading",{attrs:{showing:t.loading}},[a("q-spinner-gears",{attrs:{size:"50px",color:"primary"}})],1)],1)},o=[],r=(a("ac6a"),a("cadf"),a("06db"),a("456d"),a("5df3"),a("1c4c"),a("28a5"),a("7f7f"),a("6762"),a("2fdb"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"my-card",style:{backgroundImage:t.bgColor}},[a("q-card-section",[t._t("default")],2)],1)}),c=[],l={name:"CardBase",props:{bgColor:{default:"linear-gradient( 135deg, #FFFFDF 30%, #FFFFEF 40%)"}}},h=l,d=a("2877"),u=a("eebe"),p=a.n(u),f=a("f09f"),y=a("a370"),m=Object(d["a"])(h,r,c,!1,null,null,null),C=m.exports;p()(m,"components",{QCard:f["a"],QCardSection:y["a"]});var x=a("bd4c"),b={name:"ApexLine",components:{CardBase:C},data:function(){return{loading:!0,showWhat:"Cases",lastShowWhat:"Cases",countries:{},countriesOptions:[],homeCountry:"Pakistan",secondCountry:"Italy",selected:["Iran","China"],days:-1,xaxisHeader:[],series:[{name:"Pakistan",data:[100]},{name:"italy",data:[100]}],chartOptions:{colors:["#006400","#0000FF","#17ead9","#f02fc2","#933a34","#ecd178","#dd99e5","#89ddb5","#829cc7"],chart:{height:500,type:"line"},grid:{show:!0,strokeDashArray:0,xaxis:{lines:{show:!0}}},stroke:{curve:"smooth"},dropShadow:{enabled:!0,opacity:.3,blur:5,left:-7,top:22},dataLabels:{enabled:!1},title:{text:"Cases tracker by country (Loadig Data)..........",align:"left",style:{color:"#FFF0000"}},subtitle:{text:"Behind",align:"left",style:{color:"#545454"}},xaxis:{categories:[],labels:{style:{colors:"#Df00D0"}}},yaxis:{title:{text:"Number of cases",style:{color:"#FF6347"}},labels:{style:{color:"#FF6347"}}}}}},mounted:function(){var t=this;setTimeout((function(){t.setDataLineChart()}),500)},computed:{},methods:{UpdateCountrySelection:function(){var t=this;if(this.loading=!0,this.lastShowWhat!==this.showWhat)return this.lastShowWhat=this.showWhat,void setTimeout((function(){t.setDataLineChart()}),100);var e=[],a=this.countries,s=JSON.parse(JSON.stringify(this.selected)),i=s.indexOf(this.secondCountry);i>-1&&s.splice(i,1),i=s.indexOf(this.homeCountry),i>-1&&s.splice(i,1),s.includes(this.secondCountry)||s.unshift(this.secondCountry),s.includes(this.homeCountry)||s.unshift(this.homeCountry),s.forEach((function(t){e.push(JSON.parse(JSON.stringify(a[t])))}));var n=0,o="Cases"===this.showWhat?100:1;e.forEach((function(e){var s=e.data.length,i=0;while(i<s&&e.data[i]<o)++i;a[e.name].startDateIndex=i,i>0&&e.data.splice(0,i),t.days>0&&e.data.length>t.days&&e.data.splice(t.days,e.data.length-t.days),e.data.length>n&&(n=e.data.length)})),this.series=e,this.chartOptions.xaxis.categories=[];for(var r=0;r<n;r++)this.chartOptions.xaxis.categories.push("Day "+r);if(this.xaxisHeader.length){var c=this.xaxisHeader[this.xaxisHeader.length-1];c=c.split("/");var l=x["a"].buildDate({year:"20"+c[2],month:c[0],date:c[1]});this.chartOptions.title.text="Cases tracker by country (Database date: ".concat(x["a"].formatDate(l,"DD MMM YYYY"),")")}this.chartOptions.yaxis.title.text="Number of "+this.showWhat,this.chartOptions.yaxis.title.style.color="Cases"===this.showWhat?"#FFCC00":"#FF0000";var h=a[this.homeCountry].startDateIndex,d=a[this.secondCountry].startDateIndex,u=d-h;this.chartOptions.subtitle.text=this.homeCountry+" is "+Math.abs(u)+" days "+(u<0?"behind":"ahead")+" "+this.secondCountry,this.updateSeriesLine(),this.loading=!1},getRandomArbitrary:function(t,e){return Math.floor(99*Math.random())},setDataLineChart:function(){var t=this,e="Cases"===this.showWhat?"https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv":"https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv",s=this.$axios.get(e,{crossDomain:!0});s.then((function(e){console.log(e);var s=a("f289");s(e.data,{},(function(e,a){for(var s={},i=1;i<a.length;++i){var n=a[i];void 0===s[n[1]]&&(s[n[1]]={name:n[1],data:[]});for(var o=s[n[1]],r=4;r<n.length;++r){var c=r-4,l=parseInt(n[r]);o.data.length>c?isNaN(l)||(o.data[c]+=l):isNaN(l)?o.data.push(0):o.data.push(l)}}t.countries=s;var h=Array.from(Object.keys(s)).sort();t.countriesOptions=h,console.log(t.countriesOptions);for(var d=[],u=4;u<a[0].length;++u){var p=a[0][u];d.push(p)}t.xaxisHeader=d,t.UpdateCountrySelection()}))}))},updateSeriesLine:function(){this.$refs.realtimeChart.updateSeries(this.series,!1,!0),this.$refs.realtimeChart.updateOptions(JSON.parse(JSON.stringify(this.chartOptions)),!0,!0,!0)}}},g=b,v=a("ddd8"),w=a("27f9"),S=a("9c40"),O=a("74f7"),_=a("cf57"),D=Object(d["a"])(g,n,o,!1,null,null,null),F=D.exports;p()(D,"components",{QSelect:v["a"],QInput:w["a"],QBtn:S["a"],QInnerLoading:O["a"],QSpinnerGears:_["a"]});var k={name:"PageIndex",components:{ApexLine:F}},q=k,I=a("9989"),N=Object(d["a"])(q,s,i,!1,null,null,null);e["default"]=N.exports;p()(N,"components",{QPage:I["a"]})}}]);