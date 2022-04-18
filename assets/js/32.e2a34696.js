(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{387:function(t,a,s){"use strict";s.r(a);var n=s(45),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[t._v("#")]),t._v(" 函数")]),t._v(" "),s("p",[t._v("在编程的早期岁月，系统是由程序和子程序组成。后来，到Fortran和PL/1的年代，系统由程序、子程序和函数组成。如今，只有函数存活下来。函数是所有程序中的第一组代码。接下来将讨论如何写好函数。")]),t._v(" "),s("h2",{attrs:{id:"短小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#短小"}},[t._v("#")]),t._v(" 短小")]),t._v(" "),s("p",[t._v("函数的第一条规则是要短小，第二条规则是还要更短。我们看能见过长达一千行以上的函数，也见过许多100到300行的函数，还见过20~30行的函数，但是我们都知道函数应该越短越好，因为长函数会带来一定的阅读难度。")]),t._v(" "),s("p",[t._v("在20世纪80年代，函数不该长于一屏，那时候是VT100屏幕只有24行、80列，而编辑器先占去4行空间放菜单。而如今，用上精致的字体和宽大的显示器，一屏里面可以显示100行，每行能容纳150个字符。每行都不应该有150个字符那么多。函数也不该有100行那么长，20行封顶最佳。")]),t._v(" "),s("p",[t._v("短小的前提也要注意代码块和缩进，if语句、else语句、while语句等，其中的代码应该只占一行，该行大致应该是一个函数的调用语句。这样不但能保持函数短小，而且，因为块内调用的函数拥有较具说明性的名称，所以增加了文档上的价值。当然，这样的函数也易于阅读和理解。")]),t._v(" "),s("h2",{attrs:{id:"只做一件事"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#只做一件事"}},[t._v("#")]),t._v(" 只做一件事")]),t._v(" "),s("p",[t._v("函数应该做一件事。做好这件事。只做这一件事。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderPageWithSetupsAndTearDowns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("pageData， isSuite")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isTestPage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pageData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("includeSetupAndTearDownsPages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pageData， isSuite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" pageData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHtml")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("问题在于很难知道那件该做的事是什么，比如以上函数很容易看作以下是3件事件:"),s("br"),t._v("\n(1)判断是否为测试页面;"),s("br"),t._v("\n(2)如果是，则容纳进设置和分拆步骤;"),s("br"),t._v("\n(3)渲染成HTML。")]),t._v(" "),s("p",[t._v("那件事是什么?函数是做了一件事，还是做了3件事呢?注意，这3个步骤均在该函数名下的同一抽象层上，从函数名renderPageWithsSetupsAndTeardowns可知，检查页面是否为测试页，如果是测试页，就容纳进设置和分拆步骤，无论是否是测试页，都渲染成HTML。")]),t._v(" "),s("p",[t._v("如果函数只做了该函数名下统一抽象层上的步骤，则函数还是只做了一件事情。编写函数毕竟是为了把较大的概念(函数名)拆分成另一层抽象层上的一系列步骤。")]),t._v(" "),s("p",[t._v("以上例子，其实还可以将if语句拆出来做一个名为includeSetupAndTeardownsIfTestpage的函数，但那只是重新诠释代码，并没有改变抽象层级。所以也可以不拆。")]),t._v(" "),s("h3",{attrs:{id:"每个函数一个抽象层级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#每个函数一个抽象层级"}},[t._v("#")]),t._v(" 每个函数一个抽象层级")]),t._v(" "),s("p",[t._v("要确保函数只做一件事，函数中的语句就要在统一抽象层级上。函数中如果混杂不同抽象层级，往往会让人迷惑，读者可能无法判断某一个表达式是基础概念还是细节。更恶劣的是，就像破损的窗户，一旦细节与基础概念混杂，更多的细节就会在函数中纠结起来。")]),t._v(" "),s("h2",{attrs:{id:"使用具有描述性的名称"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用具有描述性的名称"}},[t._v("#")]),t._v(" 使用具有描述性的名称")]),t._v(" "),s("p",[t._v('ward原则:"如果每个例程都让你感到深合已意，那就是整洁代码"。要遵循这一原则，为只做一件事的小函数起个好名字。函数越短小，功能越集中，就越便于起个好名字。')]),t._v(" "),s("p",[t._v("别害怕起长名称。长而巨有描述性的名称，要比短而令人费解的名称好。长而巨有描述性的名称，要比描述性的长注释好。使用某种命名约定，让函数名称中的多个单词容易阅读，然后使用这里单词给函数起个能说清其功能的名称。")]),t._v(" "),s("p",[t._v("别害怕花时间起名字。你当尝试不同的名称来实测其阅读效果。现代编辑器修改名称也易如反掌。")]),t._v(" "),s("h2",{attrs:{id:"函数参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数参数"}},[t._v("#")]),t._v(" 函数参数")]),t._v(" "),s("p",[t._v("最理想的参数数量是0（零参数函数），其次是1（单参数函数），再次是2（双参数函数），应尽量避免3（三参数函数），有足够特殊的理由才能用3个以上参数（多参数函数）。")]),t._v(" "),s("p",[t._v("参数不易对付。它们带有太多概念性。从测试的角度看，参数甚至更叫人为难。想想看，要编写能够确保参数的各种组合运行正常的测试用例，是多么困难的事。如果是没有参数，就是小菜一碟。如果是一个参数，也不太困难。有两个参数，有问题就麻烦多了。如果参数多于两个，测试覆盖所有可能值的组合简直令人生畏。")]),t._v(" "),s("h3",{attrs:{id:"标识参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标识参数"}},[t._v("#")]),t._v(" 标识参数")]),t._v(" "),s("p",[t._v("标识参数丑陋不堪。向函数传入布尔值简直是骇人听闻的做法。这样做，方法签名会立刻变成复杂起来，这相当于大声宣布本函数不止做一件事，即如果标识为true将会这样，则标识为false会那样做！")]),t._v(" "),s("h3",{attrs:{id:"双参数函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双参数函数"}},[t._v("#")]),t._v(" 双参数函数")]),t._v(" "),s("p",[t._v("有两个参数的函数要比单参数函数难懂。比如，writeField(name)和writeField(outputStream， name)好懂，并且双参数你还需要弄清楚传参数的顺序不能搞错。")]),t._v(" "),s("p",[t._v("当然有些时候两个参数正好，比如Point P = new Point(0, 0)。如果看到new Point(0)，我们会倍感惊讶。")]),t._v(" "),s("p",[t._v("双参数函数并不算恶劣，而且你当然也会编写双参数函数。不过，你的小心，使用双参数函数付出的代价，我们应该尽量利用一些机制将其转换成单参数函数。例如，可以将writeField方法写成outputStream的成员之一，从而能够这样用：outputStream.writeField(name)。或者，也可以把outputStream写成当前类的成员变量，再传递它。还可以分离出类似于FieldWriter的新类，在其构造器总采用outputStream，并且包含一个write方法。")]),t._v(" "),s("h3",{attrs:{id:"三参数函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三参数函数"}},[t._v("#")]),t._v(" 三参数函数")]),t._v(" "),s("p",[t._v("三参数的函数要比双参数函数难懂的多。排序、琢磨、忽略的问题都会加倍，建议你在写三参数函数前一定要想清楚。")]),t._v(" "),s("h3",{attrs:{id:"参数对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数对象"}},[t._v("#")]),t._v(" 参数对象")]),t._v(" "),s("p",[t._v("如果函数看起来需要2个、3个或3个以上参数，可以考虑其中一些参数应该封装为类。"),s("br"),t._v("\n例如，下面两个生命的差别：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Circle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeCircle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" radius"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Circle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeCircle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Point")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" radius"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"动词与关键字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动词与关键字"}},[t._v("#")]),t._v(" 动词与关键字")]),t._v(" "),s("p",[t._v("给函数起个好名字，能较好地解释函数的意图，以及参数的顺序和意图。对于单参数函数，函数和参数应当形成一种非常良好的动词/名词对形式。例如，write(name)就相当令人认可。不管这个“name”是什么，都要被“write”。更好的名称大概writeField(name)，它告诉我们，“name”是一个“field”。")]),t._v(" "),s("p",[t._v("上述列子展示了函数名称的"),s("strong",[t._v("关键字")]),t._v("形式，再例如，把assertEquals(expected, actual)改成assertExpectedEqualsActual(expected, actual)会不会好一点，这大大减轻了记忆参数顺序的负担。")]),t._v(" "),s("h2",{attrs:{id:"无副作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无副作用"}},[t._v("#")]),t._v(" 无副作用")]),t._v(" "),s("p",[t._v("副作用是一种谎言。函数承诺只做一件事情，但还是会做其他被藏起来的事。有时，它会对自己类中的变量做出未能预期的改动。有时，它会把变量搞成向函数传递的参数或是系统全局变量。无论哪种情况，都具有破坏性，有会导致古怪的时序性耦合及顺序依赖。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserValidator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cryptographer")]),t._v(" cryptographer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkPassword")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" userName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" user "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserGateway")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findByName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NULL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" codePhrase "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPhraseEncodedByPassword")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" phrase "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cryptographer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decrypt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("codedPhrase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Valid Password"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("phrase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Session")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("显然，副作用就在于Session.initalize()的调用。checkPassword函数，顾名思义，就是用来检查密码的，它的名称并未暗示它会初始化会话。所有，当某个调用者信了函数名的调用者想要检查用户有效性时，就得冒抹除现有会话数据的风险。")]),t._v(" "),s("p",[t._v("这一副作用造成一次时序性耦合。也就是说，checkPassword只能在特定时刻调用（换言之，在初始化会话时安全的时候调用）。如果在不适合的时间调用，会话数据就会有可能沉默地丢失。虽然可以将将函数重命名为checkPasswordInitializeSession，但是仍会违反了“只做一件事情的规则”。")]),t._v(" "),s("h2",{attrs:{id:"分隔指令与询问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分隔指令与询问"}},[t._v("#")]),t._v(" 分隔指令与询问")]),t._v(" "),s("p",[t._v("函数要么做什么事，要么回答什么事，但两者不可得兼。函数应该修改某对象的状态，或是返回该对象的有关信息。如果两样都干，常会导致混乱。看看下面例子:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" attribute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("该函数设置某个指定属性，如果成功，就返回true，如果不存在那个属性，就返回false，这样就导致了以下语句:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unclebob"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("p",[t._v("从读者的角度考虑一下吧。这是什么意思呢？它是什么意思呢？它是在问username属性是否之前已设置为unclebob，还是在问username属性值是否成功设置为unclebob呢？从该行调用语句很难判断该含义，因为set是动词还是形容词并不清楚。")]),t._v(" "),s("p",[t._v("从作者本意是，set是一个动词，但在if语句的上下文中，感觉它像是一个形容词。该语句读起来像是再说“如果username属性之前已被设置过为unclebob”，而不是“设置username属性为unclebob，看看是否可行，然后....”。要解决这个问题，可以将set函数重命名为setAndCheckIfExists，但这对提高if语句的可读性帮助不大。真正的解决方案是把指令与询问分割开来，防止混淆的产生；")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attributeExists")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unclebob"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"使用异常替代返回错误码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用异常替代返回错误码"}},[t._v("#")]),t._v(" 使用异常替代返回错误码")]),t._v(" "),s("p",[t._v("从指令式函数返回错误码略微违反了指令与询问分隔的规则，它鼓励了在if语句判断中把指令当作表达式使用。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deletePage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" E_OK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("这不会引起动词/形容词混淆，但会导致更深层次的嵌套结构。当返回错误码时，就是会要求调用者立刻处理错误。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deletePage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" E_OK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteReference")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" E_OK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("configKeys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" E_OK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"page deleted"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"configKey not deleted"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deleteReference from registry failed"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"delete failed"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" E_ERROR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("另外，如果使用异常替代返回错误码，错误处理代码就能从主路径中分离出来而得到简化。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deletePage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteReference")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        configKeys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"抽离try-catch代码块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#抽离try-catch代码块"}},[t._v("#")]),t._v(" 抽离try/catch代码块")]),t._v(" "),s("p",[t._v("try/catch代码块丑陋不堪。它们搞乱了代码结构，把错误处理与正常流程混成一谈。最好把try和catch代码块的主体部分抽离出来，另外形成函数。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Page")]),t._v(" page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deletePageAndAllReferences")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("logError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deletePageAndAllReferences")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Page")]),t._v(" page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deletePage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        registry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteReference")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        configKeys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("makeKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("logError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在上例中，delete函数只与错误处理有关系，很容易理解然后忽略。deletePageAndAllReferences函数只与完全删除一个page有关，错误处理可以忽略。有了这样美妙的区隔，代码就更容易理解和修改了。")]),t._v(" "),s("h3",{attrs:{id:"错误处理就是一件事"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误处理就是一件事"}},[t._v("#")]),t._v(" 错误处理就是一件事")]),t._v(" "),s("p",[t._v("函数应该只做一件事情。错误处理就是一件事，因此，处理错误的函数不该做其他事，这意味着（如上例所示）如果关键字try在某个函数中存在，它就应该事这个函数的第一个单词，而且在catch/finally代码块后面也不该有其他内容。")]),t._v(" "),s("h2",{attrs:{id:"别重复自己"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#别重复自己"}},[t._v("#")]),t._v(" 别重复自己")]),t._v(" "),s("p",[t._v("重复可能是软件中一切邪恶的根源。许多原则与实践规则都是为控制与消除重复而创建的。例如，全部Codd（关系数据库之父）数据库范式就是为消除数据重复而服务的。再想想看，面向对象编程如何将代码集中到基类，从而避免了冗余。面向方面编程（Aspect Oriented Programming）、面向组件编程（Component Oriented Programming）多少也都是消除重复的一种策略。看来，自子程序发明以来，软件开发领域的所有创新都是在不断尝试从源代码中消灭重复。")]),t._v(" "),s("h2",{attrs:{id:"如何写出这样的函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何写出这样的函数"}},[t._v("#")]),t._v(" 如何写出这样的函数")]),t._v(" "),s("p",[t._v("写代码和写别的东西很像。在写论文或写文章时，你先想好什么就写什么，然后再打磨它。初稿也许粗陋无序，你可以对其斟酌推敲，直至达到你心目中的样子。")]),t._v(" "),s("p",[t._v("写函数时，一开始都冗长而复杂。有太多缩进和嵌套循环，有过长的参数列表。名称随意起的，也会有重复的代码。不过我们可以会配上一套单元测试，覆盖每行丑陋的代码。")]),t._v(" "),s("p",[t._v("然后打磨这些代码，分解函数、修改名称、消除重复。缩短和重新安置方法。有时还可以拆解类，同时保持测试通过。")]),t._v(" "),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("p",[t._v("每个系统都是使用某种领域特定语言搭建的，而这种语言时程序员设计来描述那个系统的。函数是语言的动词，类是名词。这并非是要退回到最初设想的那种认为需求文档中的名词和动词就是系统中类和函数的可怕的旧观念。其实这是个历史更久的真理。编程艺术是且一直是语言设计的艺术。")]),t._v(" "),s("p",[t._v("大师级程序员把系统当作故事来讲，而不是当作程序来写。他们使用选定编程语言提供的工具构建一种更为丰富且更具表达力的语言，用来讲那个故事。那种领域特定语言的一个部分，就是描述在系统中发生的各种行为的函数层级。在一种狡猾的递归操作中，这些行为使用它们定义的与领域紧密相关的语言讲述自己的那个小故事。")]),t._v(" "),s("p",[t._v("本章所讲述的是有关编写良好函数的机制。如果你遵循这些规则，函数就会短小，有个好名字，而且被很好地归置。不过永远别忘记，真正的目标在于讲述系统的故事，而你编写的函数必须干净利落地拼装到一起，形成一种精确而清晰的语言，帮助你讲故事。")])])}),[],!1,null,null,null);a.default=e.exports}}]);