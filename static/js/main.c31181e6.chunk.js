(this.webpackJsonpbootcamp=this.webpackJsonpbootcamp||[]).push([[0],{13:function(e,l,t){},14:function(e,l,t){},15:function(e,l,t){"use strict";t.r(l);var n=t(0),o=t(1),c=t.n(o),s=t(3),r=t.n(s),a=(t(13),t(4)),i=t(5),u=t(7),d=t(6),b=function(e){e.cellColor;var l=e.handleClick;return Object(n.jsx)("td",{onClick:l,onDragOver:l,draggable:!0})},j=function(e){for(var l=e.cellColor,t=e.columns,o=e.handleClick,c=[],s=0;s<t;s++)c.push(Object(n.jsx)(b,{cellColor:l,handleClick:o},s));return Object(n.jsx)("tr",{children:c})},h=function(e){for(var l=e.cellColor,t=e.rows,o=e.columns,c=e.handleClick,s=[],r=0;r<t;r++)s.push(Object(n.jsx)(j,{cellColor:l,columns:o,handleClick:c},r));return Object(n.jsx)("table",{className:"Table",children:Object(n.jsx)("tbody",{children:s})})},m=(t(14),function(e){Object(u.a)(t,e);var l=Object(d.a)(t);function t(e){var n;return Object(a.a)(this,t),(n=l.call(this,e)).addRow=function(){n.setState({rows:n.state.rows+1})},n.addColumn=function(){n.setState({columns:n.state.columns+1})},n.removeRow=function(){if(n.state.rows<1)return alert("Error: there are now rows to delete.");n.setState({rows:n.state.rows-1})},n.removeColumn=function(){if(n.state.columns<1)return alert("Error: there are no columns to delete.");n.setState({columns:n.state.columns-1})},n.selectedColor=function(e){n.setState({cellColor:e.target.value})},n.fillAllCells=function(e){for(var l=document.getElementsByTagName("td"),t=0;t<l.length;t++)l[t].style.backgroundColor=n.state.cellColor},n.fillAllUncoloredCells=function(e){for(var l=document.getElementsByTagName("td"),t=0;t<l.length;t++)""===l[t].style.backgroundColor&&(l[t].style.backgroundColor=n.state.cellColor)},n.clearAllCells=function(e){for(var l=document.getElementsByTagName("td"),t=0;t<l.length;t++)l[t].style.backgroundColor=""},n.handleClick=function(e){e.target.style.backgroundColor=n.state.cellColor},n.state={cellColor:"",rows:1,columns:1,fillAllCells:"",fillAllUncoloredCells:"",clearAllCells:""},n}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"butns",children:[Object(n.jsx)("button",{className:"btns",onClick:function(){return e.addRow(e.state)},children:"Add Row"}),Object(n.jsx)("button",{className:"btns",onClick:function(){return e.addColumn(e.state)},children:"Add Column"}),Object(n.jsx)("button",{className:"btns",onClick:function(){return e.removeRow(e.state)},children:"Delete Row"}),Object(n.jsx)("button",{className:"btns",onClick:function(){return e.removeColumn(e.state)},children:"Delete Column"}),Object(n.jsx)("button",{className:"btns",onClick:function(){return e.fillAllCells(e.state)},children:"Fill all cells"}),Object(n.jsx)("button",{className:"btns",onClick:function(){return e.fillAllUncoloredCells(e.state)},children:"Fill all uncolored cells"}),Object(n.jsx)("button",{className:"btns",onClick:function(){return e.clearAllCells(e.state)},children:"Clear all cells"})]}),Object(n.jsx)("div",{className:"dropdown",children:Object(n.jsxs)("select",{value:this.state.cellColor,onChange:this.selectedColor,children:[Object(n.jsx)("option",{value:"",children:"--Select A Color--"}),Object(n.jsx)("option",{className:"black",id:"black",value:"black",children:"Black"}),Object(n.jsx)("option",{className:"red",id:"red",value:"red",children:"Red"}),Object(n.jsx)("option",{className:"deepPink",id:"deepPink",value:"deepPink",children:"Deep Pink"}),Object(n.jsx)("option",{className:"pink",id:"pink",value:"pink",children:"Pink"}),Object(n.jsx)("option",{className:"purple",id:"purple",value:"purple",children:"Purple"}),Object(n.jsx)("option",{className:"blue",id:"blue",value:"blue",children:"Blue"}),Object(n.jsx)("option",{className:"lightBlue",id:"lightBlue",value:"lightBlue",children:"Light Blue"}),Object(n.jsx)("option",{className:"green",id:"green",value:"green",children:"Green"}),Object(n.jsx)("option",{className:"lightGreen",id:"lightGreen",value:"lightGreen",children:"Light Green"}),Object(n.jsx)("option",{className:"orange",id:"orange",value:"orange",children:"Orange"}),Object(n.jsx)("option",{className:"yellow",id:"yellow",value:"yellow",children:"Yellow"})]})}),Object(n.jsx)("div",{className:"Table",children:Object(n.jsx)(h,{rows:this.state.rows,columns:this.state.columns,cellColor:this.state.cellColor,handleClick:this.handleClick})})]})}}]),t}(o.Component)),C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(l){var t=l.getCLS,n=l.getFID,o=l.getFCP,c=l.getLCP,s=l.getTTFB;t(e),n(e),o(e),c(e),s(e)}))};r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),C()}},[[15,1,2]]]);
//# sourceMappingURL=main.c31181e6.chunk.js.map