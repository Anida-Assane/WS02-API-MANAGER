(this.webpackJsonp=this.webpackJsonp||[]).push([[43,59],{1390:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(1221),r=n(1253),s=Object.defineProperty,o=(t,e)=>s(t,"name",{value:e,configurable:!0});function a(t={eatWhitespace:t=>t.eatWhile(i.s),lexRules:i.i,parseRules:i.j,editorConfig:{}}){return{startState(){const e={level:0,step:0,name:null,kind:null,type:null,rule:null,needsSeparator:!1,prevState:null};return d(t.parseRules,e,r.a.DOCUMENT),e},token:(e,n)=>l(e,n,t)}}function l(t,e,n){var i;if(e.inBlockstring)return t.match(/.*"""/)?(e.inBlockstring=!1,"string"):(t.skipToEnd(),"string");const{lexRules:r,parseRules:s,eatWhitespace:o,editorConfig:a}=n;if(e.rule&&0===e.rule.length?p(e):e.needsAdvance&&(e.needsAdvance=!1,h(e,!0)),t.sol()){const n=(null==a?void 0:a.tabSize)||2;e.indentLevel=Math.floor(t.indentation()/n)}if(o(t))return"ws";const l=m(r,t);if(!l){return t.match(/\S+/)||t.match(/\s/),d(u,e,"Invalid"),"invalidchar"}if("Comment"===l.kind)return d(u,e,"Comment"),"comment";const f=c({},e);if("Punctuation"===l.kind)if(/^[{([]/.test(l.value))void 0!==e.indentLevel&&(e.levels=(e.levels||[]).concat(e.indentLevel+1));else if(/^[})\]]/.test(l.value)){const t=e.levels=(e.levels||[]).slice(0,-1);e.indentLevel&&t.length>0&&t[t.length-1]<e.indentLevel&&(e.indentLevel=t[t.length-1])}for(;e.rule;){let n="function"==typeof e.rule?0===e.step?e.rule(l,t):null:e.rule[e.step];if(e.needsSeparator&&(n=null==n?void 0:n.separator),n){if(n.ofRule&&(n=n.ofRule),"string"==typeof n){d(s,e,n);continue}if(null===(i=n.match)||void 0===i?void 0:i.call(n,l))return n.update&&n.update(e,l),"Punctuation"===l.kind?h(e,!0):e.needsAdvance=!0,n.style}g(e)}return c(e,f),d(u,e,"Invalid"),"invalidchar"}function c(t,e){const n=Object.keys(e);for(let i=0;i<n.length;i++)t[n[i]]=e[n[i]];return t}o(a,"onlineParser"),o(l,"getToken"),o(c,"assign");const u={Invalid:[],Comment:[]};function d(t,e,n){if(!t[n])throw new TypeError("Unknown rule: "+n);e.prevState=Object.assign({},e),e.kind=n,e.name=null,e.type=null,e.rule=t[n],e.step=0,e.needsSeparator=!1}function p(t){t.prevState&&(t.kind=t.prevState.kind,t.name=t.prevState.name,t.type=t.prevState.type,t.rule=t.prevState.rule,t.step=t.prevState.step,t.needsSeparator=t.prevState.needsSeparator,t.prevState=t.prevState.prevState)}function h(t,e){var n;if(f(t)&&t.rule){const n=t.rule[t.step];if(n.separator){const e=n.separator;if(t.needsSeparator=!t.needsSeparator,!t.needsSeparator&&e.ofRule)return}if(e)return}for(t.needsSeparator=!1,t.step++;t.rule&&!(Array.isArray(t.rule)&&t.step<t.rule.length);)p(t),t.rule&&(f(t)?(null===(n=t.rule)||void 0===n?void 0:n[t.step].separator)&&(t.needsSeparator=!t.needsSeparator):(t.needsSeparator=!1,t.step++))}function f(t){const e=Array.isArray(t.rule)&&"string"!=typeof t.rule[t.step]&&t.rule[t.step];return e&&e.isList}function g(t){for(;t.rule&&(!Array.isArray(t.rule)||!t.rule[t.step].ofRule);)p(t);t.rule&&h(t,!1)}function m(t,e){const n=Object.keys(t);for(let i=0;i<n.length;i++){const r=e.match(t[n[i]]);if(r&&r instanceof Array)return{kind:n[i],value:r[0]}}}o(d,"pushRule"),o(p,"popRule"),o(h,"advanceRule"),o(f,"isList"),o(g,"unsuccessful"),o(m,"lex")},2182:function(t,e,n){"use strict";n.r(e),n.d(e,"s",(function(){return c}));var i=n(1242),r=Object.defineProperty,s=(t,e)=>r(t,"name",{value:e,configurable:!0});function o(t,e){return e.forEach((function(e){e&&"string"!=typeof e&&!Array.isArray(e)&&Object.keys(e).forEach((function(n){if("default"!==n&&!(n in t)){var i=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return e[n]}})}}))})),Object.freeze(t)}s(o,"_mergeNamespaces");var a={exports:{}};!function(t){function e(t,e){if(this.cm=t,this.options=e,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length,this.options.updateOnCursorActivity){var n=this;t.on("cursorActivity",this.activityFunc=function(){n.cursorActivity()})}}t.showHint=function(t,e,n){if(!e)return t.showHint(n);n&&n.async&&(e.async=!0);var i={hint:e};if(n)for(var r in n)i[r]=n[r];return t.showHint(i)},t.defineExtension("showHint",(function(n){n=r(this,this.getCursor("start"),n);var i=this.listSelections();if(!(i.length>1)){if(this.somethingSelected()){if(!n.hint.supportsSelection)return;for(var s=0;s<i.length;s++)if(i[s].head.line!=i[s].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var o=this.state.completionActive=new e(this,n);o.options.hint&&(t.signal(this,"startCompletion",this),o.update(!0))}})),t.defineExtension("closeHint",(function(){this.state.completionActive&&this.state.completionActive.close()})),s(e,"Completion");var n=window.requestAnimationFrame||function(t){return setTimeout(t,1e3/60)},i=window.cancelAnimationFrame||clearTimeout;function r(t,e,n){var i=t.options.hintOptions,r={};for(var s in h)r[s]=h[s];if(i)for(var s in i)void 0!==i[s]&&(r[s]=i[s]);if(n)for(var s in n)void 0!==n[s]&&(r[s]=n[s]);return r.hint.resolve&&(r.hint=r.hint.resolve(t,e)),r}function o(t){return"string"==typeof t?t:t.text}function a(t,e){var n={Up:function(){e.moveFocus(-1)},Down:function(){e.moveFocus(1)},PageUp:function(){e.moveFocus(1-e.menuSize(),!0)},PageDown:function(){e.moveFocus(e.menuSize()-1,!0)},Home:function(){e.setFocus(0)},End:function(){e.setFocus(e.length-1)},Enter:e.pick,Tab:e.pick,Esc:e.close};/Mac/.test(navigator.platform)&&(n["Ctrl-P"]=function(){e.moveFocus(-1)},n["Ctrl-N"]=function(){e.moveFocus(1)});var i=t.options.customKeys,r=i?{}:n;function o(t,i){var o;o="string"!=typeof i?s((function(t){return i(t,e)}),"bound"):n.hasOwnProperty(i)?n[i]:i,r[t]=o}if(s(o,"addBinding"),i)for(var a in i)i.hasOwnProperty(a)&&o(a,i[a]);var l=t.options.extraKeys;if(l)for(var a in l)l.hasOwnProperty(a)&&o(a,l[a]);return r}function l(t,e){for(;e&&e!=t;){if("LI"===e.nodeName.toUpperCase()&&e.parentNode==t)return e;e=e.parentNode}}function c(e,n){this.id="cm-complete-"+Math.floor(Math.random(1e6)),this.completion=e,this.data=n,this.picked=!1;var i=this,r=e.cm,s=r.getInputField().ownerDocument,c=s.defaultView||s.parentWindow,u=this.hints=s.createElement("ul");u.setAttribute("role","listbox"),u.setAttribute("aria-expanded","true"),u.id=this.id;var d=e.cm.options.theme;u.className="CodeMirror-hints "+d,this.selectedHint=n.selectedHint||0;for(var p=n.list,h=0;h<p.length;++h){var f=u.appendChild(s.createElement("li")),g=p[h],m="CodeMirror-hint"+(h!=this.selectedHint?"":" CodeMirror-hint-active");null!=g.className&&(m=g.className+" "+m),f.className=m,h==this.selectedHint&&f.setAttribute("aria-selected","true"),f.id=this.id+"-"+h,f.setAttribute("role","option"),g.render?g.render(f,n,g):f.appendChild(s.createTextNode(g.displayText||o(g))),f.hintId=h}var v=e.options.container||s.body,k=r.cursorCoords(e.options.alignWithWord?n.from:null),y=k.left,T=k.bottom,E=!0,b=0,S=0;if(v!==s.body){var A=-1!==["absolute","relative","fixed"].indexOf(c.getComputedStyle(v).position)?v:v.offsetParent,O=A.getBoundingClientRect(),I=s.body.getBoundingClientRect();b=O.left-I.left-A.scrollLeft,S=O.top-I.top-A.scrollTop}u.style.left=y-b+"px",u.style.top=T-S+"px";var N=c.innerWidth||Math.max(s.body.offsetWidth,s.documentElement.offsetWidth),_=c.innerHeight||Math.max(s.body.offsetHeight,s.documentElement.offsetHeight);v.appendChild(u),r.getInputField().setAttribute("aria-autocomplete","list"),r.getInputField().setAttribute("aria-owns",this.id),r.getInputField().setAttribute("aria-activedescendant",this.id+"-"+this.selectedHint);var D,F=e.options.moveOnOverlap?u.getBoundingClientRect():new DOMRect,C=!!e.options.paddingForScrollbar&&u.scrollHeight>u.clientHeight+1;if(setTimeout((function(){D=r.getScrollInfo()})),F.bottom-_>0){var x=F.bottom-F.top;if(k.top-(k.bottom-F.top)-x>0)u.style.top=(T=k.top-x-S)+"px",E=!1;else if(x>_){u.style.height=_-5+"px",u.style.top=(T=k.bottom-F.top-S)+"px";var M=r.getCursor();n.from.ch!=M.ch&&(k=r.cursorCoords(M),u.style.left=(y=k.left-b)+"px",F=u.getBoundingClientRect())}}var R,w=F.right-N;if(C&&(w+=r.display.nativeBarWidth),w>0&&(F.right-F.left>N&&(u.style.width=N-5+"px",w-=F.right-F.left-N),u.style.left=(y=k.left-w-b)+"px"),C)for(var L=u.firstChild;L;L=L.nextSibling)L.style.paddingRight=r.display.nativeBarWidth+"px";r.addKeyMap(this.keyMap=a(e,{moveFocus:function(t,e){i.changeActive(i.selectedHint+t,e)},setFocus:function(t){i.changeActive(t)},menuSize:function(){return i.screenAmount()},length:p.length,close:function(){e.close()},pick:function(){i.pick()},data:n})),e.options.closeOnUnfocus&&(r.on("blur",this.onBlur=function(){R=setTimeout((function(){e.close()}),100)}),r.on("focus",this.onFocus=function(){clearTimeout(R)})),r.on("scroll",this.onScroll=function(){var t=r.getScrollInfo(),n=r.getWrapperElement().getBoundingClientRect();D||(D=r.getScrollInfo());var i=T+D.top-t.top,o=i-(c.pageYOffset||(s.documentElement||s.body).scrollTop);if(E||(o+=u.offsetHeight),o<=n.top||o>=n.bottom)return e.close();u.style.top=i+"px",u.style.left=y+D.left-t.left+"px"}),t.on(u,"dblclick",(function(t){var e=l(u,t.target||t.srcElement);e&&null!=e.hintId&&(i.changeActive(e.hintId),i.pick())})),t.on(u,"click",(function(t){var n=l(u,t.target||t.srcElement);n&&null!=n.hintId&&(i.changeActive(n.hintId),e.options.completeOnSingleClick&&i.pick())})),t.on(u,"mousedown",(function(){setTimeout((function(){r.focus()}),20)}));var P=this.getSelectedHintRange();return 0===P.from&&0===P.to||this.scrollToActive(),t.signal(n,"select",p[this.selectedHint],u.childNodes[this.selectedHint]),!0}function u(t,e){if(!t.somethingSelected())return e;for(var n=[],i=0;i<e.length;i++)e[i].supportsSelection&&n.push(e[i]);return n}function d(t,e,n,i){if(t.async)t(e,i,n);else{var r=t(e,n);r&&r.then?r.then(i):i(r)}}function p(e,n){var i,r=e.getHelpers(n,"hint");if(r.length){var o=s((function(t,e,n){var i=u(t,r);function o(r){if(r==i.length)return e(null);d(i[r],t,n,(function(t){t&&t.list.length>0?e(t):o(r+1)}))}s(o,"run"),o(0)}),"resolved");return o.async=!0,o.supportsSelection=!0,o}return(i=e.getHelper(e.getCursor(),"hintWords"))?function(e){return t.hint.fromList(e,{words:i})}:t.hint.anyword?function(e,n){return t.hint.anyword(e,n)}:function(){}}e.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.options.updateOnCursorActivity&&this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&t.signal(this.data,"close"),this.widget&&this.widget.close(),t.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(e,n){var i=e.list[n],r=this;this.cm.operation((function(){i.hint?i.hint(r.cm,e,i):r.cm.replaceRange(o(i),i.from||e.from,i.to||e.to,"complete"),t.signal(e,"pick",i),r.cm.scrollIntoView()})),this.options.closeOnPick&&this.close()},cursorActivity:function(){this.debounce&&(i(this.debounce),this.debounce=0);var t=this.startPos;this.data&&(t=this.data.from);var e=this.cm.getCursor(),r=this.cm.getLine(e.line);if(e.line!=this.startPos.line||r.length-e.ch!=this.startLen-this.startPos.ch||e.ch<t.ch||this.cm.somethingSelected()||!e.ch||this.options.closeCharacters.test(r.charAt(e.ch-1)))this.close();else{var s=this;this.debounce=n((function(){s.update()})),this.widget&&this.widget.disable()}},update:function(t){if(null!=this.tick){var e=this,n=++this.tick;d(this.options.hint,this.cm,this.options,(function(i){e.tick==n&&e.finishUpdate(i,t)}))}},finishUpdate:function(e,n){this.data&&t.signal(this.data,"update");var i=this.widget&&this.widget.picked||n&&this.options.completeSingle;this.widget&&this.widget.close(),this.data=e,e&&e.list.length&&(i&&1==e.list.length?this.pick(e,0):(this.widget=new c(this,e),t.signal(e,"shown")))}},s(r,"parseOptions"),s(o,"getText"),s(a,"buildKeyMap"),s(l,"getHintElement"),s(c,"Widget"),c.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode&&this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var t=this.completion.cm.getInputField();t.removeAttribute("aria-activedescendant"),t.removeAttribute("aria-owns");var e=this.completion.cm;this.completion.options.closeOnUnfocus&&(e.off("blur",this.onBlur),e.off("focus",this.onFocus)),e.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var t=this;this.keyMap={Enter:function(){t.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(e,n){if(e>=this.data.list.length?e=n?this.data.list.length-1:0:e<0&&(e=n?0:this.data.list.length-1),this.selectedHint!=e){var i=this.hints.childNodes[this.selectedHint];i&&(i.className=i.className.replace(" CodeMirror-hint-active",""),i.removeAttribute("aria-selected")),(i=this.hints.childNodes[this.selectedHint=e]).className+=" CodeMirror-hint-active",i.setAttribute("aria-selected","true"),this.completion.cm.getInputField().setAttribute("aria-activedescendant",i.id),this.scrollToActive(),t.signal(this.data,"select",this.data.list[this.selectedHint],i)}},scrollToActive:function(){var t=this.getSelectedHintRange(),e=this.hints.childNodes[t.from],n=this.hints.childNodes[t.to],i=this.hints.firstChild;e.offsetTop<this.hints.scrollTop?this.hints.scrollTop=e.offsetTop-i.offsetTop:n.offsetTop+n.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=n.offsetTop+n.offsetHeight-this.hints.clientHeight+i.offsetTop)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1},getSelectedHintRange:function(){var t=this.completion.options.scrollMargin||0;return{from:Math.max(0,this.selectedHint-t),to:Math.min(this.data.list.length-1,this.selectedHint+t)}}},s(u,"applicableHelpers"),s(d,"fetchHints"),s(p,"resolveAutoHints"),t.registerHelper("hint","auto",{resolve:p}),t.registerHelper("hint","fromList",(function(e,n){var i,r=e.getCursor(),s=e.getTokenAt(r),o=t.Pos(r.line,s.start),a=r;s.start<r.ch&&/\w/.test(s.string.charAt(r.ch-s.start-1))?i=s.string.substr(0,r.ch-s.start):(i="",o=r);for(var l=[],c=0;c<n.words.length;c++){var u=n.words[c];u.slice(0,i.length)==i&&l.push(u)}if(l.length)return{list:l,from:o,to:a}})),t.commands.autocomplete=t.showHint;var h={hint:t.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnPick:!0,closeOnUnfocus:!0,updateOnCursorActivity:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null,paddingForScrollbar:!0,moveOnOverlap:!0};t.defineOption("hintOptions",null)}(i.a.exports);var l=a.exports,c=Object.freeze(o({__proto__:null,[Symbol.toStringTag]:"Module",default:l},[a.exports]))},2184:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o}));var i=Object.defineProperty,r=(t,e)=>i(t,"name",{value:e,configurable:!0});class s{constructor(t){this.getStartOfToken=()=>this._start,this.getCurrentPosition=()=>this._pos,this.eol=()=>this._sourceText.length===this._pos,this.sol=()=>0===this._pos,this.peek=()=>this._sourceText.charAt(this._pos)?this._sourceText.charAt(this._pos):null,this.next=()=>{const t=this._sourceText.charAt(this._pos);return this._pos++,t},this.eat=t=>{if(this._testNextCharacter(t))return this._start=this._pos,this._pos++,this._sourceText.charAt(this._pos-1)},this.eatWhile=t=>{let e=this._testNextCharacter(t),n=!1;for(e&&(n=e,this._start=this._pos);e;)this._pos++,e=this._testNextCharacter(t),n=!0;return n},this.eatSpace=()=>this.eatWhile(/[\s\u00a0]/),this.skipToEnd=()=>{this._pos=this._sourceText.length},this.skipTo=t=>{this._pos=t},this.match=(t,e=!0,n=!1)=>{let i=null,r=null;if("string"==typeof t){r=new RegExp(t,n?"i":"g").test(this._sourceText.substr(this._pos,t.length)),i=t}else t instanceof RegExp&&(r=this._sourceText.slice(this._pos).match(t),i=null==r?void 0:r[0]);return!(null==r||!("string"==typeof t||r instanceof Array&&this._sourceText.startsWith(r[0],this._pos)))&&(e&&(this._start=this._pos,i&&i.length&&(this._pos+=i.length)),r)},this.backUp=t=>{this._pos-=t},this.column=()=>this._pos,this.indentation=()=>{const t=this._sourceText.match(/\s*/);let e=0;if(t&&0!==t.length){const n=t[0];let i=0;for(;n.length>i;)9===n.charCodeAt(i)?e+=2:e++,i++}return e},this.current=()=>this._sourceText.slice(this._start,this._pos),this._start=0,this._pos=0,this._sourceText=t}_testNextCharacter(t){const e=this._sourceText.charAt(this._pos);let n=!1;return n="string"==typeof t?e===t:t instanceof RegExp?t.test(e):t(e),n}}r(s,"CharacterStream");class o{constructor(t,e){this.containsPosition=t=>this.start.line===t.line?this.start.character<=t.character:this.end.line===t.line?this.end.character>=t.character:this.start.line<=t.line&&this.end.line>=t.line,this.start=t,this.end=e}setStart(t,e){this.start=new a(t,e)}setEnd(t,e){this.end=new a(t,e)}}r(o,"Range");class a{constructor(t,e){this.lessThanOrEqualTo=t=>this.line<t.line||this.line===t.line&&this.character<=t.character,this.line=t,this.character=e}setLine(t){this.line=t}setCharacter(t){this.character=t}}r(a,"Position")},4890:function(t,e,n){"use strict";n.r(e);var i=n(1242),r=(n(2182),n(1240)),s=n(1496),o=n(1757),a=n(1359),l=n(1411),c=n(2120),u=n(1253),d=n(1759),p=n(1221),h=n(2184),f=n(1390),g=n(1637),m=(n(2),n(353),Object.defineProperty),v=(t,e)=>m(t,"name",{value:e,configurable:!0});function k(t){let e;return T(t,t=>{switch(t.kind){case"Query":case"ShortQuery":case"Mutation":case"Subscription":case"FragmentDefinition":e=t}}),e}function y(t,e,n){return n===g.a.name&&t.getQueryType()===e?g.a:n===g.b.name&&t.getQueryType()===e?g.b:n===g.c.name&&Object(r.D)(e)?g.c:"getFields"in e?e.getFields()[n]:null}function T(t,e){const n=[];let i=t;for(;null==i?void 0:i.kind;)n.push(i),i=i.prevState;for(let t=n.length-1;t>=0;t--)e(n[t])}function E(t){const e=Object.keys(t),n=e.length,i=new Array(n);for(let r=0;r<n;++r)i[r]=t[e[r]];return i}function b(t,e){return S(e,O(t.string))}function S(t,e){if(!e)return A(t,t=>!t.isDeprecated);return A(A(t.map(t=>({proximity:I(O(t.label),e),entry:t})),t=>t.proximity<=2),t=>!t.entry.isDeprecated).sort((t,e)=>(t.entry.isDeprecated?1:0)-(e.entry.isDeprecated?1:0)||t.proximity-e.proximity||t.entry.label.length-e.entry.label.length).map(t=>t.entry)}function A(t,e){const n=t.filter(e);return 0===n.length?t:n}function O(t){return t.toLowerCase().replace(/\W/g,"")}function I(t,e){let n=N(e,t);return t.length>e.length&&(n-=t.length-e.length-1,n+=0===t.indexOf(e)?0:.5),n}function N(t,e){let n,i;const r=[],s=t.length,o=e.length;for(n=0;n<=s;n++)r[n]=[n];for(i=1;i<=o;i++)r[0][i]=i;for(n=1;n<=s;n++)for(i=1;i<=o;i++){const s=t[n-1]===e[i-1]?0:1;r[n][i]=Math.min(r[n-1][i]+1,r[n][i-1]+1,r[n-1][i-1]+s),n>1&&i>1&&t[n-1]===e[i-2]&&t[n-2]===e[i-1]&&(r[n][i]=Math.min(r[n][i],r[n-2][i-2]+s))}return r[s][o]}v(k,"getDefinitionState"),v(y,"getFieldDef"),v(T,"forEachState"),v(E,"objectValues"),v(b,"hintList"),v(S,"filterAndSortList"),v(A,"filterNonEmpty"),v(O,"normalizeText"),v(I,"getProximity"),v(N,"lexicalDistance");const _={command:"editor.action.triggerSuggest",title:"Suggestions"},D=v(t=>{const e=[];if(t)try{Object(s.c)(Object(o.a)(t),{FragmentDefinition(t){e.push(t)}})}catch(t){return[]}return e},"collectFragmentDefs");function F(t,e,n,i,s,o){var a;const l=Object.assign(Object.assign({},o),{schema:t}),c=i||V(e,n),u="Invalid"===c.state.kind?c.state.prevState:c.state;if(!u)return[];const d=u.kind,h=u.step,f=Y(t,c.state);if(d===p.k.DOCUMENT)return b(c,[{label:"query",kind:p.c.Function},{label:"mutation",kind:p.c.Function},{label:"subscription",kind:p.c.Function},{label:"fragment",kind:p.c.Function},{label:"{",kind:p.c.Constructor}]);if(d===p.k.IMPLEMENTS||d===p.k.NAMED_TYPE&&(null===(a=u.prevState)||void 0===a?void 0:a.kind)===p.k.IMPLEMENTS)return R(c,u,t,e,f);if(d===p.k.SELECTION_SET||d===p.k.FIELD||d===p.k.ALIASED_FIELD)return x(c,f,l);if(d===p.k.ARGUMENTS||d===p.k.ARGUMENT&&0===h){const t=f.argDefs;if(t)return b(c,t.map(t=>{var e;return{label:t.name,insertText:t.name+": ",command:_,detail:String(t.type),documentation:null!==(e=t.description)&&void 0!==e?e:void 0,kind:p.c.Variable,type:t.type}}))}if((d===p.k.OBJECT_VALUE||d===p.k.OBJECT_FIELD&&0===h)&&f.objectFieldDefs){const t=E(f.objectFieldDefs),e=d===p.k.OBJECT_VALUE?p.c.Value:p.c.Field;return b(c,t.map(t=>{var n;return{label:t.name,detail:String(t.type),documentation:null!==(n=t.description)&&void 0!==n?n:void 0,kind:e,type:t.type}}))}if(d===p.k.ENUM_VALUE||d===p.k.LIST_VALUE&&1===h||d===p.k.OBJECT_FIELD&&2===h||d===p.k.ARGUMENT&&2===h)return M(c,f,e,t);if(d===p.k.VARIABLE&&1===h){const n=Object(r.A)(f.inputType);return b(c,j(e,t,c).filter(t=>t.detail===(null==n?void 0:n.name)))}return d===p.k.TYPE_CONDITION&&1===h||d===p.k.NAMED_TYPE&&null!=u.prevState&&u.prevState.kind===p.k.TYPE_CONDITION?w(c,f,t):d===p.k.FRAGMENT_SPREAD&&1===h?L(c,f,t,e,Array.isArray(s)?s:D(s)):d===p.k.VARIABLE_DEFINITION&&2===h||d===p.k.LIST_TYPE&&1===h||d===p.k.NAMED_TYPE&&u.prevState&&(u.prevState.kind===p.k.VARIABLE_DEFINITION||u.prevState.kind===p.k.LIST_TYPE||u.prevState.kind===p.k.NON_NULL_TYPE)?H(c,t):d===p.k.DIRECTIVE?B(c,u,t):[]}v(F,"getAutocompleteSuggestions");const C=v(t=>{const e=t.type;if(Object(r.D)(e))return" {\n  $1\n}";if(Object(r.J)(e)&&Object(r.D)(e.ofType))return" {\n  $1\n}";if(Object(r.L)(e)){if(Object(r.D)(e.ofType))return" {\n  $1\n}";if(Object(r.J)(e.ofType)&&Object(r.D)(e.ofType.ofType))return" {\n  $1\n}"}return null},"getInsertText");function x(t,e,n){var i;if(e.parentType){const s=e.parentType;let o=[];return"getFields"in s&&(o=E(s.getFields())),Object(r.D)(s)&&o.push(a.d),s===(null===(i=null==n?void 0:n.schema)||void 0===i?void 0:i.getQueryType())&&o.push(a.a,a.c),b(t,o.map((t,e)=>{var n;const i={sortText:String(e)+t.name,label:t.name,detail:String(t.type),documentation:null!==(n=t.description)&&void 0!==n?n:void 0,deprecated:Boolean(t.deprecationReason),isDeprecated:Boolean(t.deprecationReason),deprecationReason:t.deprecationReason,kind:p.c.Field,type:t.type},r=C(t);return r&&(i.insertText=t.name+r,i.insertTextFormat=p.f.Snippet,i.command=_),i}))}return[]}function M(t,e,n,i){const s=Object(r.A)(e.inputType),o=j(n,i,t).filter(t=>t.detail===s.name);if(s instanceof r.a){return b(t,s.getValues().map(t=>{var e;return{label:t.name,detail:String(s),documentation:null!==(e=t.description)&&void 0!==e?e:void 0,deprecated:Boolean(t.deprecationReason),isDeprecated:Boolean(t.deprecationReason),deprecationReason:t.deprecationReason,kind:p.c.EnumMember,type:s}}).concat(o))}return s===l.a?b(t,o.concat([{label:"true",detail:String(l.a),documentation:"Not false.",kind:p.c.Variable,type:l.a},{label:"false",detail:String(l.a),documentation:"Not true.",kind:p.c.Variable,type:l.a}])):o}function R(t,e,n,i,s){if(e.needsSeparator)return[];const o=E(n.getTypeMap()).filter(r.H),a=o.map(({name:t})=>t),l=new Set;G(i,(t,e)=>{var i,o,c,u,d;if(e.name&&(e.kind!==p.k.INTERFACE_DEF||a.includes(e.name)||l.add(e.name),e.kind===p.k.NAMED_TYPE&&(null===(i=e.prevState)||void 0===i?void 0:i.kind)===p.k.IMPLEMENTS))if(s.interfaceDef){if(null===(o=s.interfaceDef)||void 0===o?void 0:o.getInterfaces().find(({name:t})=>t===e.name))return;const t=n.getType(e.name),i=null===(c=s.interfaceDef)||void 0===c?void 0:c.toConfig();s.interfaceDef=new r.c(Object.assign(Object.assign({},i),{interfaces:[...i.interfaces,t||new r.c({name:e.name,fields:{}})]}))}else if(s.objectTypeDef){if(null===(u=s.objectTypeDef)||void 0===u?void 0:u.getInterfaces().find(({name:t})=>t===e.name))return;const t=n.getType(e.name),i=null===(d=s.objectTypeDef)||void 0===d?void 0:d.toConfig();s.objectTypeDef=new r.f(Object.assign(Object.assign({},i),{interfaces:[...i.interfaces,t||new r.c({name:e.name,fields:{}})]}))}});const c=s.interfaceDef||s.objectTypeDef,u=((null==c?void 0:c.getInterfaces())||[]).map(({name:t})=>t);return b(t,o.concat([...l].map(t=>({name:t}))).filter(({name:t})=>t!==(null==c?void 0:c.name)&&!u.includes(t)).map(t=>{const e={label:t.name,kind:p.c.Interface,type:t};return(null==t?void 0:t.description)&&(e.documentation=t.description),e}))}function w(t,e,n,i){let s;if(e.parentType)if(Object(r.C)(e.parentType)){const t=Object(r.j)(e.parentType),i=n.getPossibleTypes(t),o=Object.create(null);i.forEach(t=>{t.getInterfaces().forEach(t=>{o[t.name]=t})}),s=i.concat(E(o))}else s=[e.parentType];else{s=E(n.getTypeMap()).filter(r.D)}return b(t,s.map(t=>{const e=Object(r.A)(t);return{label:String(t),documentation:(null==e?void 0:e.description)||"",kind:p.c.Field}}))}function L(t,e,n,i,s){if(!i)return[];const o=n.getTypeMap(),a=k(t.state),l=U(i);s&&s.length>0&&l.push(...s);return b(t,l.filter(t=>o[t.typeCondition.name.value]&&!(a&&a.kind===p.k.FRAGMENT_DEFINITION&&a.name===t.name.value)&&Object(r.D)(e.parentType)&&Object(r.D)(o[t.typeCondition.name.value])&&Object(c.a)(n,e.parentType,o[t.typeCondition.name.value])).map(t=>({label:t.name.value,detail:String(o[t.typeCondition.name.value]),documentation:`fragment ${t.name.value} on ${t.typeCondition.name.value}`,kind:p.c.Field,type:o[t.typeCondition.name.value]})))}v(x,"getSuggestionsForFieldNames"),v(M,"getSuggestionsForInputValues"),v(R,"getSuggestionsForImplements"),v(w,"getSuggestionsForFragmentTypeConditions"),v(L,"getSuggestionsForFragmentSpread");const P=v((t,e)=>{var n,i,r,s,o,a,l,c,u,d;return(null===(n=t.prevState)||void 0===n?void 0:n.kind)===e?t.prevState:(null===(r=null===(i=t.prevState)||void 0===i?void 0:i.prevState)||void 0===r?void 0:r.kind)===e?t.prevState.prevState:(null===(a=null===(o=null===(s=t.prevState)||void 0===s?void 0:s.prevState)||void 0===o?void 0:o.prevState)||void 0===a?void 0:a.kind)===e?t.prevState.prevState.prevState:(null===(d=null===(u=null===(c=null===(l=t.prevState)||void 0===l?void 0:l.prevState)||void 0===c?void 0:c.prevState)||void 0===u?void 0:u.prevState)||void 0===d?void 0:d.kind)===e?t.prevState.prevState.prevState.prevState:void 0},"getParentDefinition");function j(t,e,n){let i,r=null;const s=Object.create({});return G(t,(t,o)=>{if((null==o?void 0:o.kind)===p.k.VARIABLE&&o.name&&(r=o.name),(null==o?void 0:o.kind)===p.k.NAMED_TYPE&&r){const t=P(o,p.k.TYPE);(null==t?void 0:t.type)&&(i=e.getType(null==t?void 0:t.type))}r&&i&&(s[r]||(s[r]={detail:i.toString(),insertText:"$"===n.string?r:"$"+r,label:r,type:i,kind:p.c.Variable},r=null,i=null))}),E(s)}function U(t){const e=[];return G(t,(t,n)=>{n.kind===p.k.FRAGMENT_DEFINITION&&n.name&&n.type&&e.push({kind:p.k.FRAGMENT_DEFINITION,name:{kind:u.a.NAME,value:n.name},selectionSet:{kind:p.k.SELECTION_SET,selections:[]},typeCondition:{kind:p.k.NAMED_TYPE,name:{kind:u.a.NAME,value:n.type}}})}),e}function H(t,e,n){return b(t,E(e.getTypeMap()).filter(r.G).map(t=>({label:t.name,documentation:t.description,kind:p.c.Variable})))}function B(t,e,n,i){var r;if(null===(r=e.prevState)||void 0===r?void 0:r.kind){return b(t,n.getDirectives().filter(t=>W(e.prevState,t)).map(t=>({label:t.name,documentation:t.description||"",kind:p.c.Function})))}return[]}function V(t,e){let n=null,i=null,r=null;const s=G(t,(t,s,o,a)=>{if(a===e.line&&t.getCurrentPosition()>=e.character)return n=o,i=Object.assign({},s),r=t.current(),"BREAK"});return{start:s.start,end:s.end,string:r||s.string,state:i||s.state,style:n||s.style}}function G(t,e){const n=t.split("\n"),i=Object(f.a)();let r=i.startState(),s="",o=new h.a("");for(let t=0;t<n.length;t++){for(o=new h.a(n[t]);!o.eol();){s=i.token(o,r);if("BREAK"===e(o,r,s,t))break}e(o,r,s,t),r.kind||(r=i.startState())}return{start:o.getStartOfToken(),end:o.getCurrentPosition(),string:o.current(),state:r,style:s}}function W(t,e){var n;if(!t||!t.kind)return!1;const i=t.kind,r=e.locations;switch(i){case p.k.QUERY:return-1!==r.indexOf(d.a.QUERY);case p.k.MUTATION:return-1!==r.indexOf(d.a.MUTATION);case p.k.SUBSCRIPTION:return-1!==r.indexOf(d.a.SUBSCRIPTION);case p.k.FIELD:case p.k.ALIASED_FIELD:return-1!==r.indexOf(d.a.FIELD);case p.k.FRAGMENT_DEFINITION:return-1!==r.indexOf(d.a.FRAGMENT_DEFINITION);case p.k.FRAGMENT_SPREAD:return-1!==r.indexOf(d.a.FRAGMENT_SPREAD);case p.k.INLINE_FRAGMENT:return-1!==r.indexOf(d.a.INLINE_FRAGMENT);case p.k.SCHEMA_DEF:return-1!==r.indexOf(d.a.SCHEMA);case p.k.SCALAR_DEF:return-1!==r.indexOf(d.a.SCALAR);case p.k.OBJECT_TYPE_DEF:return-1!==r.indexOf(d.a.OBJECT);case p.k.FIELD_DEF:return-1!==r.indexOf(d.a.FIELD_DEFINITION);case p.k.INTERFACE_DEF:return-1!==r.indexOf(d.a.INTERFACE);case p.k.UNION_DEF:return-1!==r.indexOf(d.a.UNION);case p.k.ENUM_DEF:return-1!==r.indexOf(d.a.ENUM);case p.k.ENUM_VALUE:return-1!==r.indexOf(d.a.ENUM_VALUE);case p.k.INPUT_DEF:return-1!==r.indexOf(d.a.INPUT_OBJECT);case p.k.INPUT_VALUE_DEF:switch(null===(n=t.prevState)||void 0===n?void 0:n.kind){case p.k.ARGUMENTS_DEF:return-1!==r.indexOf(d.a.ARGUMENT_DEFINITION);case p.k.INPUT_DEF:return-1!==r.indexOf(d.a.INPUT_FIELD_DEFINITION)}}return!1}function Y(t,e){let n,i,s,o,a,l,c,u,d,h,f;return T(e,e=>{var g;switch(e.kind){case p.k.QUERY:case"ShortQuery":h=t.getQueryType();break;case p.k.MUTATION:h=t.getMutationType();break;case p.k.SUBSCRIPTION:h=t.getSubscriptionType();break;case p.k.INLINE_FRAGMENT:case p.k.FRAGMENT_DEFINITION:e.type&&(h=t.getType(e.type));break;case p.k.FIELD:case p.k.ALIASED_FIELD:h&&e.name?(a=d?y(t,d,e.name):null,h=a?a.type:null):a=null;break;case p.k.SELECTION_SET:d=Object(r.A)(h);break;case p.k.DIRECTIVE:s=e.name?t.getDirective(e.name):null;break;case p.k.INTERFACE_DEF:e.name&&(c=null,f=new r.c({name:e.name,interfaces:[],fields:{}}));break;case p.k.OBJECT_TYPE_DEF:e.name&&(f=null,c=new r.f({name:e.name,interfaces:[],fields:{}}));break;case p.k.ARGUMENTS:if(e.prevState)switch(e.prevState.kind){case p.k.FIELD:i=a&&a.args;break;case p.k.DIRECTIVE:i=s&&s.args;break;case p.k.ALIASED_FIELD:{const n=null===(g=e.prevState)||void 0===g?void 0:g.name;if(!n){i=null;break}const r=d?y(t,d,n):null;if(!r){i=null;break}i=r.args;break}default:i=null}else i=null;break;case p.k.ARGUMENT:if(i)for(let t=0;t<i.length;t++)if(i[t].name===e.name){n=i[t];break}l=null==n?void 0:n.type;break;case p.k.ENUM_VALUE:const m=Object(r.A)(l);o=m instanceof r.a?m.getValues().find(t=>t.value===e.name):null;break;case p.k.LIST_VALUE:const v=Object(r.B)(l);l=v instanceof r.d?v.ofType:null;break;case p.k.OBJECT_VALUE:const k=Object(r.A)(l);u=k instanceof r.b?k.getFields():null;break;case p.k.OBJECT_FIELD:const T=e.name&&u?u[e.name]:null;l=null==T?void 0:T.type;break;case p.k.NAMED_TYPE:e.name&&(h=t.getType(e.name))}}),{argDef:n,argDefs:i,directiveDef:s,enumValue:o,fieldDef:a,inputType:l,objectFieldDefs:u,parentType:d,type:h,interfaceDef:f,objectTypeDef:c}}v(j,"getVariableCompletions"),v(U,"getFragmentDefinitions"),v(H,"getSuggestionsForVariableDefinition"),v(B,"getSuggestionsForDirective"),v(V,"getTokenAtPosition"),v(G,"runOnlineParser"),v(W,"canUseDirective"),v(Y,"getTypeInfo"),i.C.registerHelper("hint","graphql",(t,e)=>{const n=e.schema;if(!n)return;const r=t.getCursor(),s=t.getTokenAt(r),o=null!==s.type&&/"|\w/.test(s.string[0])?s.start:s.end,a=new h.b(r.line,o),l={list:F(n,t.getValue(),a,s,e.externalFragments).map(t=>({text:t.label,type:t.type,description:t.documentation,isDeprecated:t.isDeprecated,deprecationReason:t.deprecationReason})),from:{line:r.line,ch:o},to:{line:r.line,ch:s.end}};return(null==l?void 0:l.list)&&l.list.length>0&&(l.from=i.C.Pos(l.from.line,l.from.ch),l.to=i.C.Pos(l.to.line,l.to.ch),i.C.signal(t,"hasCompletion",t,l,s)),l})}}]);
//# sourceMappingURL=43.13e3318823eabfbe7145.bundle.js.map