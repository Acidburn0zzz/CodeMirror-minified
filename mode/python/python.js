'use strict';(function(f){"object"==typeof exports&&"object"==typeof module?f(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],f):f(CodeMirror)})(function(f){function n(g){return new RegExp("^(("+g.join(")|(")+"))\\b")}function g(g){return g.scopes[g.scopes.length-1]}var z=n(["and","or","not","is"]),r="as assert break class continue def del elif else except finally for from global if import lambda pass raise return try while with yield in".split(" "),
t="abs all any bin bool bytearray callable chr classmethod compile complex delattr dict dir divmod enumerate eval filter float format frozenset getattr globals hasattr hash help hex id input int isinstance issubclass iter len list locals map max memoryview min next object oct open ord pow property range repr reversed round set setattr slice sorted staticmethod str sum super tuple type vars zip __import__ NotImplemented Ellipsis __debug__".split(" "),A="apply basestring buffer cmp coerce execfile file intern long raw_input reduce reload unichr unicode xrange False True None".split(" "),
B=["exec","print"],C=["ascii","bytes","exec","print"],D="nonlocal False True None async await".split(" ");f.registerHelper("hintWords","python",r.concat(t));f.defineMode("python",function(q,e){function m(a,b){a.sol()&&(b.indent=a.indentation());if(a.sol()&&"py"==g(b).type){var c=g(b).offset;if(a.eatSpace()){var d=a.indentation();d>c?u(b):d<c&&v(a,b)&&(b.errorToken=!0);return null}d=w(a,b);0<c&&v(a,b)&&(d+=" error");return d}return w(a,b)}function w(a,b){if(a.eatSpace())return null;if("#"==a.peek())return a.skipToEnd(),
"comment";if(a.match(/^[0-9\.]/,!1)){var c=!1;a.match(/^\d*\.\d+(e[\+\-]?\d+)?/i)&&(c=!0);a.match(/^\d+\.\d*/)&&(c=!0);a.match(/^\.\d+/)&&(c=!0);if(c)return a.eat(/J/i),"number";c=!1;a.match(/^0x[0-9a-f]+/i)&&(c=!0);a.match(/^0b[01]+/i)&&(c=!0);a.match(/^0o[0-7]+/i)&&(c=!0);a.match(/^[1-9]\d*(e[\+\-]?\d+)?/)&&(a.eat(/J/i),c=!0);a.match(/^0(?![\dx])/i)&&(c=!0);if(c)return a.eat(/L/i),"number"}if(a.match(x))return b.tokenize=E(a.current()),b.tokenize(a,b);if(a.match(F)||a.match(G))return"punctuation";
if(a.match(H)||a.match(y))return"operator";if(a.match(I))return"punctuation";if("."==b.lastToken&&a.match(l))return"property";if(a.match(J)||a.match(z))return"keyword";if(a.match(K))return"builtin";if(a.match(/^(self|cls)\b/))return"variable-2";if(a.match(l))return"def"==b.lastToken||"class"==b.lastToken?"def":"variable";a.next();return"error"}function E(a){function b(b,g){for(;!b.eol();)if(b.eatWhile(/[^'"\\]/),b.eat("\\")){if(b.next(),c&&b.eol())return"string"}else{if(b.match(a))return g.tokenize=
m,"string";b.eat(/['"]/)}if(c){if(e.singleLineStringErrors)return"error";g.tokenize=m}return"string"}for(;0<="rub".indexOf(a.charAt(0).toLowerCase());)a=a.substr(1);var c=1==a.length;b.isString=!0;return b}function u(a){for(;"py"!=g(a).type;)a.scopes.pop();a.scopes.push({offset:g(a).offset+q.indentUnit,type:"py",align:null})}function v(a,b){for(var c=a.indentation();g(b).offset>c;){if("py"!=g(b).type)return!0;b.scopes.pop()}return g(b).offset!=c}var I=e.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.]/,
H=e.doubleOperators||/^([!<>]==|<>|<<|>>|\/\/|\*\*)/,G=e.doubleDelimiters||/^(\+=|\-=|\*=|%=|\/=|&=|\|=|\^=)/,F=e.tripleDelimiters||/^(\/\/=|>>=|<<=|\*\*=)/;if(e.version&&3==parseInt(e.version,10))var y=e.singleOperators||/^[\+\-\*\/%&|\^~<>!@]/,l=e.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;else y=e.singleOperators||/^[\+\-\*\/%&|\^~<>!]/,l=e.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;var p=e.hangingIndent||q.indentUnit,h=r,k=t;void 0!=e.extra_keywords&&(h=h.concat(e.extra_keywords));
void 0!=e.extra_builtins&&(k=k.concat(e.extra_builtins));if(e.version&&3==parseInt(e.version,10))var h=h.concat(D),k=k.concat(C),x=/^(([rb]|(br))?('{3}|"{3}|['"]))/i;else h=h.concat(B),k=k.concat(A),x=/^(([rub]|(ur)|(br))?('{3}|"{3}|['"]))/i;var J=n(h),K=n(k);return{startState:function(a){return{tokenize:m,scopes:[{offset:a||0,type:"py",align:null}],indent:a||0,lastToken:null,lambda:!1,dedent:0}},token:function(a,b){var c=b.errorToken;c&&(b.errorToken=!1);var d;a:{d=b.tokenize(a,b);var f=a.current();
if("@"==f)d=e.version&&3==parseInt(e.version,10)?a.match(l,!1)?"meta":"operator":a.match(l,!1)?"meta":"error";else{"variable"!=d&&"builtin"!=d||"meta"!=b.lastToken||(d="meta");if("pass"==f||"return"==f)b.dedent+=1;"lambda"==f&&(b.lambda=!0);":"!=f||b.lambda||"py"!=g(b).type||u(b);var h=1==f.length?"[({".indexOf(f):-1;if(-1!=h){var h="])}".slice(h,h+1),k=a.match(/^([\s\[\{\(]|#.*)*$/,!1)?null:a.column()+1;b.scopes.push({offset:b.indent+p,type:h,align:k})}h="])}".indexOf(f);if(-1!=h)if(g(b).type==f)b.indent=
b.scopes.pop().offset-p;else{d="error";break a}0<b.dedent&&a.eol()&&"py"==g(b).type&&(1<b.scopes.length&&b.scopes.pop(),--b.dedent)}}d&&"comment"!=d&&(b.lastToken="keyword"==d||"punctuation"==d?a.current():d);"punctuation"==d&&(d=null);a.eol()&&b.lambda&&(b.lambda=!1);return c?d+" error":d},indent:function(a,b){if(a.tokenize!=m)return a.tokenize.isString?f.Pass:0;var c=g(a),d=c.type==b.charAt(0);return null!=c.align?c.align-(d?1:0):c.offset-(d?p:0)},electricInput:/^\s*[\}\]\)]$/,closeBrackets:{triples:"'\""},
lineComment:"#",fold:"indent"}});f.defineMIME("text/x-python","python");f.defineMIME("text/x-cython",{name:"python",extra_keywords:"by cdef cimport cpdef ctypedef enum exceptextern gil include nogil property publicreadonly struct union DEF IF ELIF ELSE".split(" ")})});