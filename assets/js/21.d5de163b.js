(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{376:function(t,a,s){"use strict";s.r(a);var n=s(45),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"重构改善既有代码的设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重构改善既有代码的设计"}},[t._v("#")]),t._v(" 重构改善既有代码的设计")]),t._v(" "),s("h2",{attrs:{id:"什么是重构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是重构"}},[t._v("#")]),t._v(" 什么是重构")]),t._v(" "),s("p",[t._v("在不改变代码外在行为的提前下，对代码做出修改，以改进程序的内部结构")]),t._v(" "),s("h2",{attrs:{id:"为什么要重构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要重构"}},[t._v("#")]),t._v(" 为什么要重构")]),t._v(" "),s("p",[t._v("1、重构改进软件的设计；"),s("br"),t._v("\n2、重构使软件更容易理解；"),s("br"),t._v("\n3、重构帮助找到bug；"),s("br"),t._v("\n4、重构提高编程速度。")]),t._v(" "),s("h2",{attrs:{id:"什么时候要重构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么时候要重构"}},[t._v("#")]),t._v(" 什么时候要重构")]),t._v(" "),s("p",[t._v("1、预备性重构：让添加新功能更容易；"),s("br"),t._v("\n2、帮助理解的重构：使代码更易懂；"),s("br"),t._v("\n3、捡垃圾式重构；"),s("br"),t._v("\n4、有计划的重构和见机行事的重构；"),s("br"),t._v("\n5、长期重构；"),s("br"),t._v("\n6、复审代码时重构；"),s("br"),t._v("\n7、怎么对经理说；"),s("br"),t._v("\n8、何时不应该重构。")]),t._v(" "),s("h2",{attrs:{id:"重构得挑战"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重构得挑战"}},[t._v("#")]),t._v(" 重构得挑战")]),t._v(" "),s("p",[t._v("1、延缓新功能开发；"),s("br"),t._v("\n2、代码所有权；"),s("br"),t._v("\n3、分支；"),s("br"),t._v("\n4、测试；"),s("br"),t._v("\n5、遗留代码。")]),t._v(" "),s("h2",{attrs:{id:"代码的怪味道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码的怪味道"}},[t._v("#")]),t._v(" 代码的怪味道")]),t._v(" "),s("p",[t._v("1、神秘命名；"),s("br"),t._v("\n2、重复带；"),s("br"),t._v("\n3、过长函数；"),s("br"),t._v("\n4、过长参数列表；"),s("br"),t._v("\n5、全局数据；"),s("br"),t._v("\n6、可变数据；"),s("br"),t._v("\n7、发散式变法；"),s("br"),t._v("\n8、霰弹式修改；"),s("br"),t._v("\n9、依恋情结；"),s("br"),t._v("\n10、数据泥团；"),s("br"),t._v("\n11、基本类型偏执；"),s("br"),t._v("\n12、重复的switch；"),s("br"),t._v("\n13、循环语句；"),s("br"),t._v("\n14、冗赘的元素；"),s("br"),t._v("\n15、夸夸其谈通用性；"),s("br"),t._v("\n16、临时字段；"),s("br"),t._v("\n17、过长的信息链；"),s("br"),t._v("\n18、中间人；"),s("br"),t._v("\n19、内幕交易；"),s("br"),t._v("\n20、过大的类；"),s("br"),t._v("\n21、异曲同工的类；"),s("br"),t._v("\n22、纯数据类；"),s("br"),t._v("\n23、被拒绝的馈赠；"),s("br"),t._v("\n24、注释。")]),t._v(" "),s("h2",{attrs:{id:"重构手法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重构手法"}},[t._v("#")]),t._v(" 重构手法")]),t._v(" "),s("h3",{attrs:{id:"提炼函数-extract-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提炼函数-extract-function"}},[t._v("#")]),t._v(" 提炼函数(Extract Function)")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printOwing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("invoice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printBanner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" outstanding "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calculateOutstanding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// print details")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("name：")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("invoice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("customer"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("amount：")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("outstanding"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("=>")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printOwing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("invoice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printBanner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" outstanding "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calculateOutstanding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printDetails")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("outstanding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printDetails")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("outstanding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("name:")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("invoice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("customer"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("amount:")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("outstanding"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"动机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动机"}},[t._v("#")]),t._v(" 动机")]),t._v(" "),s("p",[t._v("1、函数过长；"),s("br"),t._v("\n2、代码类似；"),s("br"),t._v("\n3、明确代码用意。")]),t._v(" "),s("h4",{attrs:{id:"做法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#做法"}},[t._v("#")]),t._v(" 做法")]),t._v(" "),s("p",[t._v("1、创建一个新函数（以它“做什么”来命名，而不是以它“怎么做”命名）；"),s("br"),t._v("\n2、将待提炼的代码从源函数复制到新建的目标函数中；"),s("br"),t._v("\n3、仔细检查提炼出的代码，看看其中是否引用了作用域限于源函数、在提炼出的新函数中访问不到的变量。若是，以参数的形式将它们传递给新函数；"),s("br"),t._v("\n4、所有变量都处理完之后，编译；"),s("br"),t._v("\n5、在源函数中，将被提炼代码段替换为对目标函数的调用；"),s("br"),t._v("\n6、测试；"),s("br"),t._v("\n7、查看其他代码是否有与被提炼的代码段相同或相似之处。如果有，考虑使用"),s("a",{attrs:{href:"#%E4%BB%A5%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8%E5%8F%96%E4%BB%A3%E5%86%85%E8%81%94%E4%BB%A3%E7%A0%81-replace-inline-code-with-function-call"}},[t._v("以函数调用取代内联代码")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"以函数调用取代内联代码-replace-inline-code-with-function-call"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#以函数调用取代内联代码-replace-inline-code-with-function-call"}},[t._v("#")]),t._v(" 以函数调用取代内联代码(Replace Inline Code with Function Call)")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" appliesToMass "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" s "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" states"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MA"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" appliesToMass "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("=>")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  appliesToMass "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MA"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"动机-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动机-2"}},[t._v("#")]),t._v(" 动机")]),t._v(" "),s("p",[t._v("1、善用函数可以将相关的行为打包起来；"),s("br"),t._v("\n2、配合一些库函数使用，会使本手法效果更佳。")]),t._v(" "),s("h4",{attrs:{id:"做法-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#做法-2"}},[t._v("#")]),t._v(" 做法")]),t._v(" "),s("p",[t._v("1、将内联代码替代为对一个既有函数的调用；"),s("br"),t._v("\n2、测试。")]),t._v(" "),s("h3",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),s("h2",{attrs:{id:"好句子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#好句子"}},[t._v("#")]),t._v(" 好句子")]),t._v(" "),s("p",[t._v("如果你要给程序添加一个特性，但发现代码因缺乏良好的结构而不易于进行更改，那就先重构那个程序，使其比较容易添加该特性，然后再添加该特性。")]),t._v(" "),s("p",[t._v("重构前，先检查自己是否有一套可靠的测试集。这些测试必须有自我检验能力。")]),t._v(" "),s("p",[t._v("重构技术就是以微小的步伐修改程序。如果你犯下错误，很容易便可发现它。")]),t._v(" "),s("p",[t._v("傻瓜都能写出计算机可以理解的代码。唯有能写出人类容易理解的代码，才是优秀的程序员。")]),t._v(" "),s("p",[t._v("编程时，需要遵循营地法则：保证你离开时的代码库一定比来时更健康。")]),t._v(" "),s("p",[t._v("好代码的检验标准就是人们是否能轻而易举地修改它。")]),t._v(" "),s("p",[t._v("重构得唯一目的就是让我们开发更快，用更少得工作量创造更大得价值。")]),t._v(" "),s("p",[t._v("当你感觉需要要撰写注释时，请先尝试重构，试着让所有注释变得多余。")])])}),[],!1,null,null,null);a.default=r.exports}}]);