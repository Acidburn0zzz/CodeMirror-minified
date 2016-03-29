'use strict';(function(){function a(a){test.mode(a,c,Array.prototype.slice.call(arguments,1))}function b(a){test.mode(a,d,Array.prototype.slice.call(arguments,1))}var c=CodeMirror.getMode({tabSize:4},"gfm"),d=CodeMirror.getMode({tabSize:4},{name:"gfm",highlightFormatting:!0});b("codeBackticks","[comment&formatting&formatting-code `][comment foo][comment&formatting&formatting-code `]");b("doubleBackticks","[comment&formatting&formatting-code ``][comment foo ` bar][comment&formatting&formatting-code ``]");
b("codeBlock","[comment&formatting&formatting-code-block ```css]","[tag foo]","[comment&formatting&formatting-code-block ```]");b("taskList","[variable-2&formatting&formatting-list&formatting-list-ul - ][meta&formatting&formatting-task [ ]]][variable-2  foo]","[variable-2&formatting&formatting-list&formatting-list-ul - ][property&formatting&formatting-task [x]]][variable-2  foo]");b("formatting_strikethrough","[strikethrough&formatting&formatting-strikethrough ~~][strikethrough foo][strikethrough&formatting&formatting-strikethrough ~~]");
b("formatting_strikethrough","foo [strikethrough&formatting&formatting-strikethrough ~~][strikethrough bar][strikethrough&formatting&formatting-strikethrough ~~]");a("emInWordAsterisk","foo[em *bar*]hello");a("emInWordUnderscore","foo_bar_hello");a("emStrongUnderscore","[strong __][em&strong _foo__][em _] bar");a("fencedCodeBlocks","[comment ```]","[comment foo]","","[comment ```]","bar");a("fencedCodeBlockModeSwitching","[comment ```javascript]","[variable foo]","","[comment ```]","bar");a("fencedCodeBlocksNoTildes",
"~~~","foo","~~~");a("taskListAsterisk","[variable-2 * []] foo]","[variable-2 * [ ]]bar]","[variable-2 * [x]]hello]","[variable-2 * ][meta [ ]]][variable-2  [world]]]","    [variable-3 * ][property [x]]][variable-3  foo]");a("taskListPlus","[variable-2 + []] foo]","[variable-2 + [ ]]bar]","[variable-2 + [x]]hello]","[variable-2 + ][meta [ ]]][variable-2  [world]]]","    [variable-3 + ][property [x]]][variable-3  foo]");a("taskListDash","[variable-2 - []] foo]","[variable-2 - [ ]]bar]","[variable-2 - [x]]hello]",
"[variable-2 - ][meta [ ]]][variable-2  [world]]]","    [variable-3 - ][property [x]]][variable-3  foo]");a("taskListNumber","[variable-2 1. []] foo]","[variable-2 2. [ ]]bar]","[variable-2 3. [x]]hello]","[variable-2 4. ][meta [ ]]][variable-2  [world]]]","    [variable-3 1. ][property [x]]][variable-3  foo]");a("SHA","foo [link be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2] bar");a("SHAEmphasis","[em *foo ][em&link be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2][em *]");a("shortSHA","foo [link be6a8cc] bar");
a("tooShortSHA","foo be6a8c bar");a("longSHA","foo be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd22 bar");a("badSHA","foo be6a8cc1c1ecfe9489fb51e4869af15a13fc2cg2 bar");a("userSHA","foo [link bar@be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2] hello");a("userSHAEmphasis","[em *foo ][em&link bar@be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2][em *]");a("userProjectSHA","foo [link bar/hello@be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2] world");a("userProjectSHAEmphasis","[em *foo ][em&link bar/hello@be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2][em *]");
a("num","foo [link #1] bar");a("numEmphasis","[em *foo ][em&link #1][em *]");a("badNum","foo #1bar hello");a("userNum","foo [link bar#1] hello");a("userNumEmphasis","[em *foo ][em&link bar#1][em *]");a("userProjectNum","foo [link bar/hello#1] world");a("userProjectNumEmphasis","[em *foo ][em&link bar/hello#1][em *]");a("vanillaLink","foo [link http://www.example.com/] bar");a("vanillaLinkNoScheme","foo [link www.example.com] bar");a("vanillaLinkHttps","foo [link https://www.example.com/] bar");a("vanillaLinkDataSchema",
"foo [link data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==] bar");a("vanillaLinkPunctuation","foo [link http://www.example.com/]. bar");a("vanillaLinkExtension","foo [link http://www.example.com/index.html] bar");a("vanillaLinkEmphasis","foo [em *][em&link http://www.example.com/index.html][em *] bar");a("notALink","foo asfd:asdf bar");a("notALink","[comment ```css]","[tag foo] {[property color]:[keyword black];}",
"[comment ```][link http://www.example.com/]");a("notALink","[comment ``foo `bar` http://www.example.com/``] hello");a("notALink","[comment `foo]","[comment&link http://www.example.com/]","[comment `] foo","","[link http://www.example.com/]");a("headerCodeBlockGithub","[header&header-1 # heading]","","[comment ```]","[comment code]","[comment ```]","","Commit: [link be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2]","Issue: [link #1]","Link: [link http://www.example.com/]");a("strikethrough","[strikethrough ~~foo~~]");
a("strikethroughWithStartingSpace","~~ foo~~");a("strikethroughUnclosedStrayTildes","[strikethrough ~~foo~~~]");a("strikethroughUnclosedStrayTildes","[strikethrough ~~foo ~~]");a("strikethroughUnclosedStrayTildes","[strikethrough ~~foo ~~ bar]");a("strikethroughUnclosedStrayTildes","[strikethrough ~~foo ~~ bar~~]hello");a("strikethroughOneLetter","[strikethrough ~~a~~]");a("strikethroughWrapped","[strikethrough ~~foo]","[strikethrough foo~~]");a("strikethroughParagraph","[strikethrough ~~foo]","",
"foo[strikethrough ~~bar]");a("strikethroughEm","[strikethrough ~~foo][em&strikethrough *bar*][strikethrough ~~]");a("strikethroughEm","[em *][em&strikethrough ~~foo~~][em *]");a("strikethroughStrong","[strikethrough ~~][strong&strikethrough **foo**][strikethrough ~~]");a("strikethroughStrong","[strong **][strong&strikethrough ~~foo~~][strong **]")})();