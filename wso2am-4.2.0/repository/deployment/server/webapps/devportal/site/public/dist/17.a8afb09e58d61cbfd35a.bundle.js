(this.webpackJsonp=this.webpackJsonp||[]).push([[17],{2617:function(e,r,n){"use strict";n.r(r),n.d(r,"b",(function(){return s}));var t=n(1242),i=Object.defineProperty,o=(e,r)=>i(e,"name",{value:r,configurable:!0});function f(e,r){return r.forEach((function(r){r&&"string"!=typeof r&&!Array.isArray(r)&&Object.keys(r).forEach((function(n){if("default"!==n&&!(n in e)){var t=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(e,n,t.get?t:{enumerable:!0,get:function(){return r[n]}})}}))})),Object.freeze(e)}o(f,"_mergeNamespaces");var l={exports:{}};!function(e){function r(r){return function(n,t){var i=t.line,f=n.getLine(i);function l(r){for(var o,l=t.ch,a=0;;){var s=l<=0?-1:f.lastIndexOf(r[0],l-1);if(-1!=s){if(1==a&&s<t.ch)break;if(o=n.getTokenTypeAt(e.Pos(i,s+1)),!/^(comment|string)/.test(o))return{ch:s+1,tokenType:o,pair:r};l=s-1}else{if(1==a)break;a=1,l=f.length}}}function a(r){var t,o,f=1,l=n.lastLine(),a=r.ch;e:for(var s=i;s<=l;++s)for(var u=n.getLine(s),c=s==i?a:0;;){var p=u.indexOf(r.pair[0],c),g=u.indexOf(r.pair[1],c);if(p<0&&(p=u.length),g<0&&(g=u.length),(c=Math.min(p,g))==u.length)break;if(n.getTokenTypeAt(e.Pos(s,c+1))==r.tokenType)if(c==p)++f;else if(!--f){t=s,o=c;break e}++c}return null==t||i==t?null:{from:e.Pos(i,a),to:e.Pos(t,o)}}o(l,"findOpening"),o(a,"findRange");for(var s=[],u=0;u<r.length;u++){var c=l(r[u]);c&&s.push(c)}for(s.sort((function(e,r){return e.ch-r.ch})),u=0;u<s.length;u++){var p=a(s[u]);if(p)return p}return null}}o(r,"bracketFolding"),e.registerHelper("fold","brace",r([["{","}"],["[","]"]])),e.registerHelper("fold","brace-paren",r([["{","}"],["[","]"],["(",")"]])),e.registerHelper("fold","import",(function(r,n){function t(n){if(n<r.firstLine()||n>r.lastLine())return null;var t=r.getTokenAt(e.Pos(n,1));if(/\S/.test(t.string)||(t=r.getTokenAt(e.Pos(n,t.end+1))),"keyword"!=t.type||"import"!=t.string)return null;for(var i=n,o=Math.min(r.lastLine(),n+10);i<=o;++i){var f=r.getLine(i).indexOf(";");if(-1!=f)return{startCh:t.end,end:e.Pos(i,f)}}}o(t,"hasImport");var i,f=n.line,l=t(f);if(!l||t(f-1)||(i=t(f-2))&&i.end.line==f-1)return null;for(var a=l.end;;){var s=t(a.line+1);if(null==s)break;a=s.end}return{from:r.clipPos(e.Pos(f,l.startCh+1)),to:a}})),e.registerHelper("fold","include",(function(r,n){function t(n){if(n<r.firstLine()||n>r.lastLine())return null;var t=r.getTokenAt(e.Pos(n,1));return/\S/.test(t.string)||(t=r.getTokenAt(e.Pos(n,t.end+1))),"meta"==t.type&&"#include"==t.string.slice(0,8)?t.start+8:void 0}o(t,"hasInclude");var i=n.line,f=t(i);if(null==f||null!=t(i-1))return null;for(var l=i;null!=t(l+1);)++l;return{from:e.Pos(i,f+1),to:r.clipPos(e.Pos(l))}}))}(t.a.exports);var a=l.exports,s=Object.freeze(f({__proto__:null,[Symbol.toStringTag]:"Module",default:a},[l.exports]))}}]);
//# sourceMappingURL=17.a8afb09e58d61cbfd35a.bundle.js.map