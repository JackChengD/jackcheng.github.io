(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{423:function(t,a,s){"use strict";s.r(a);var r=s(45),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_2-的幂"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-的幂"}},[t._v("#")]),t._v(" 2 的幂")]),t._v(" "),s("h2",{attrs:{id:"难度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#难度"}},[t._v("#")]),t._v(" 难度")]),t._v(" "),s("p",[t._v("简单")]),t._v(" "),s("h2",{attrs:{id:"描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),s("p",[t._v("给你一个整数 n，请你判断该整数是否是 2 的幂次方。如果是，返回 true ；否则，返回 false 。"),s("br"),t._v("\n如果存在一个整数 x 使得 n == 2x ，则认为 n 是 2 的幂次方。")]),t._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("p",[t._v("示例 1：")]),t._v(" "),s("blockquote",[s("p",[t._v("输入：n = 1\n输出：true\n解释：20 = 1")])]),t._v(" "),s("p",[t._v("示例 2：")]),t._v(" "),s("blockquote",[s("p",[t._v("输入：n = 16\n输出：true\n解释：24 = 16")])]),t._v(" "),s("p",[t._v("示例 3：")]),t._v(" "),s("blockquote",[s("p",[t._v("输入：n = 3\n输出：false")])]),t._v(" "),s("p",[t._v("示例 4：")]),t._v(" "),s("blockquote",[s("p",[t._v("输入：n = 4\n输出：true")])]),t._v(" "),s("p",[t._v("示例 5：")]),t._v(" "),s("blockquote",[s("p",[t._v("输入：n = 5\n输出：false")])]),t._v(" "),s("h2",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),s("p",[t._v("2的幂，反向思考即可，取余如果为0，那么取商继续，最后如果为1，则是2的幂。")]),t._v(" "),s("h2",{attrs:{id:"实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("isPowerOfTwo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"题源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题源"}},[t._v("#")]),t._v(" 题源")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://leetcode-cn.com/problems/power-of-two/",target:"_blank",rel:"noopener noreferrer"}},[t._v("231. 2 的幂"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);