(this["webpackJsonphigharc-challenge"]=this["webpackJsonphigharc-challenge"]||[]).push([[0],{104:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var a=n(43),r=n.n(a),i=(n(104),n(44)),s=n(27),o=n(28),c=n(29),h=n(35),d=n(34),l=n(0),u=n.n(l),g=n(168),m=n(170),j=n(78),b=n(40),f=["cups","ounces","pounds"],p=n(165),O=n(163),S=n(175),v=n(162),_=n(80),x=n(6),y={name:"",quantity:"0",unit:f[0]},N=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e))._changeSmoothieName=function(e,t){a.setState({name:t||""})},a._addSmoothie=function(e){var t=a.props.onAddSmoothie,n=a.state,r=n.name,i=n.ingredients,o=n.tags;t(r,{ingredients:i.filter((function(e){return""!=e.name})).map((function(e){return Object(s.a)(Object(s.a)({},e),{},{unit:e.unit||f[0]})})),tags:o}),a.setState({name:"",ingredients:[y],tags:[],currTag:""})},a._ingredient=function(e,t){var n=isNaN(Number(e.quantity||"0"))?"Quantity must be a number.":"";return Object(x.jsxs)(g.a,{horizontal:!0,verticalAlign:"end",tokens:{childrenGap:10},children:[Object(x.jsx)(p.a,{label:"Ingredient name",value:e.name,required:!0,onChange:a._changeIngredientName(t)}),Object(x.jsx)(p.a,{label:"Quantity",value:e.quantity,required:!0,onChange:a._changeIngredientQuantity(t),errorMessage:n}),Object(x.jsx)(O.a,{label:"Unit",options:f.map((function(e){return{key:e,text:e}})),selectedKey:e.unit||f[0],onChange:a._changeUnit(t),styles:{root:{minWidth:80}}}),Object(x.jsx)(S.a,{iconProps:{iconName:"Delete"},onClick:a._deleteIngredient(t)})]},t)},a._addIngredient=function(e){var t=[].concat(Object(b.a)(a.state.ingredients),[{name:"",quantity:"0",unit:""}]);a.setState({ingredients:t})},a._changeIngredientName=function(e){return function(t,n){var r=JSON.parse(JSON.stringify(a.state.ingredients));r[e].name=n||"",a.setState({ingredients:r})}},a._changeIngredientQuantity=function(e){return function(t,n){var r=JSON.parse(JSON.stringify(a.state.ingredients));r[e].quantity=n||"",a.setState({ingredients:r})}},a._changeUnit=function(e){return function(t,n){if(n){var r=Object(b.a)(a.state.ingredients);r[e].unit=n.key.toString(),a.setState({ingredients:r})}}},a._deleteIngredient=function(e){return function(t){var n=a.state.ingredients;n.splice(e,1),a.setState({ingredients:n})}},a._tag=function(e,t){return Object(x.jsxs)(g.a,{horizontal:!0,verticalAlign:"center",tokens:{childrenGap:5},styles:{root:{borderRadius:15,backgroundColor:"#cccccc",paddingRight:10}},children:[Object(x.jsx)(S.a,{iconProps:{iconName:"StatusCircleErrorX"},styles:{root:{borderRadius:15}},onClick:a._deleteTag(t)}),Object(x.jsx)(m.a,{children:e})]},e)},a._changeCurrTag=function(e,t){a.setState({currTag:t||""})},a._addTag=function(e){if("Enter"==e.key&&!a._duplicateTag()){var t=[].concat(Object(b.a)(a.state.tags),[a.state.currTag]);a.setState({tags:t,currTag:""})}},a._deleteTag=function(e){return function(t){var n=Object(b.a)(a.state.tags);n.splice(e,1),a.setState({tags:n})}},a._isNameConflict=function(){var e=a.props.smoothies,t=a.state.name;if(!t)return!1;for(var n in e)if(n.toLowerCase()==t.toLowerCase())return!0;return!1},a._checkIngredients=function(){var e=a.state.ingredients;for(var t in e){var n=e[t],r=n.name,i=n.quantity;if(!r)return!1;var s=Number(i);if(isNaN(s)||s<=0)return!1}return!0},a._duplicateTag=function(){var e=a.state,t=e.currTag,n=e.tags;for(var r in n)if(n[r].toLowerCase()==t.toLowerCase())return!0;return!1},a.state={name:"",ingredients:[y],tags:[],currTag:""},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.name,a=t.ingredients,r=t.tags,i=t.currTag,s=!this._checkIngredients();return Object(x.jsxs)(g.a,{className:"card",tokens:{childrenGap:10},horizontalAlign:"start",styles:{root:{padding:10,alignSelf:"flex-start"}},children:[Object(x.jsx)(m.a,{variant:"large",children:"Add a smoothie"}),Object(x.jsxs)(g.a,{horizontal:!0,verticalAlign:"end",tokens:{childrenGap:10},children:[Object(x.jsx)(p.a,{label:"Smoothie name",value:n,required:!0,onChange:this._changeSmoothieName,errorMessage:this._isNameConflict()?"A smoothie with this name already exists.":""}),Object(x.jsx)(v.a,{text:"Add smoothie",onClick:this._addSmoothie,disabled:this._isNameConflict()||!n||a.length<1||s}),Object(x.jsxs)(g.a,{tokens:{childrenGap:5},styles:{root:{maxWidth:250}},children:[!n&&Object(x.jsx)(m.a,{className:"errorText",children:"Smoothie must have a nonempty name."}),a.length<1&&Object(x.jsx)(m.a,{className:"errorText",children:"Smoothie must have at least one ingredient."}),s&&Object(x.jsx)(m.a,{className:"errorText",children:"All ingredients must have a nonempty name and a positive numerical quantity."})]})]}),a.map((function(t,n){return e._ingredient(t,n)})),Object(x.jsx)(_.a,{text:"Add ingredient",onClick:this._addIngredient}),Object(x.jsx)(p.a,{placeholder:"Add tags (optional)",underlined:!0,value:i,errorMessage:this._duplicateTag()?"Tag already exists.":"",onChange:this._changeCurrTag,onKeyDown:this._addTag}),Object(x.jsx)(g.a,{horizontal:!0,wrap:!0,tokens:{childrenGap:10},styles:{root:{maxWidth:550}},children:r.map((function(t,n){return e._tag(t,n)}))})]})}}]),n}(l.Component),k=n(171),C=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e))._searchChange=function(e,t){a.setState({searchName:t||""})},a._searchForSmoothie=function(e){a.setState({searchName:e||""})},a._clearSearch=function(e){a.setState({searchName:""})},a._smoothie=function(e){var t=a.props.smoothies[e];return Object(x.jsxs)(g.a,{className:"card",tokens:{childrenGap:10},styles:{root:{padding:5,paddingBottom:10,paddingLeft:10}},children:[Object(x.jsxs)(g.a,{horizontal:!0,horizontalAlign:"space-between",verticalAlign:"center",tokens:{childrenGap:20},children:[Object(x.jsx)(m.a,{variant:"mediumPlus",children:e}),Object(x.jsx)(S.a,{iconProps:{iconName:"Delete"},onClick:a._deleteSmoothie(e)})]}),Object(x.jsx)(g.a,{tokens:{childrenGap:10},styles:{root:{paddingLeft:5}},children:t.ingredients.map((function(e){return a._ingredient(e)}))}),Object(x.jsx)(g.a,{horizontal:!0,wrap:!0,tokens:{childrenGap:5},styles:{root:{maxWidth:250}},children:t.tags.map((function(e){return Object(x.jsxs)(m.a,{variant:"small",children:["#",e]},e)}))})]},e)},a._ingredient=function(e){var t=e.name,n=e.quantity,a=e.unit;return 1===Number(n)&&(a=a.substring(0,a.length-1)),Object(x.jsxs)(m.a,{children:[n," ",a," of ",t.toLowerCase()]},t)},a._deleteSmoothie=function(e){return function(t){a.props.onDeleteSmoothie(e)}},a.state={searchName:""},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.smoothies,n=this.state.searchName,a=Object.keys(t);return n&&(a=a.filter((function(e){return-1!=e.toLowerCase().indexOf(n.toLowerCase())}))),Object(x.jsxs)(g.a,{tokens:{childrenGap:20},horizontalAlign:"start",children:[Object(x.jsx)(k.a,{underlined:!0,placeholder:"Search for a smoothie by name",onChange:this._searchChange,onSearch:this._searchForSmoothie,onClear:this._clearSearch,styles:{root:{minWidth:250}}}),Object(x.jsx)(g.a,{horizontal:!0,wrap:!0,tokens:{childrenGap:20},horizontalAlign:"start",children:a.map((function(t){return e._smoothie(t)}))})]})}}]),n}(l.Component);Object(j.a)();var T="smoothies",w=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;Object(o.a)(this,n),(a=t.call(this,e))._addSmoothie=function(e,t){var n=Object(s.a)(Object(s.a)({},a.state.smoothies),{},Object(i.a)({},e,t));a._updateStorage(n),a.setState({smoothies:n})},a._deleteSmoothie=function(e){var t=Object(s.a)({},a.state.smoothies);delete t[e],a._updateStorage(t),a.setState({smoothies:t})},a._updateStorage=function(e){window.localStorage.setItem(T,JSON.stringify(e))};var r=window.localStorage.getItem(T)||"{}";return a.state={smoothies:JSON.parse(r)},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.smoothies;return Object(x.jsxs)(g.a,{tokens:{childrenGap:20},styles:{root:{padding:10}},children:[Object(x.jsx)(m.a,{variant:"large",children:"Smoothie Recipe Book"}),Object(x.jsx)(N,{smoothies:e,onAddSmoothie:this._addSmoothie}),Object(x.jsx)(C,{smoothies:e,onDeleteSmoothie:this._deleteSmoothie})]})}}]),n}(u.a.Component);r.a.render(Object(x.jsx)(w,{}),document.getElementById("root"))}},[[108,1,2]]]);
//# sourceMappingURL=main.af2dd521.chunk.js.map