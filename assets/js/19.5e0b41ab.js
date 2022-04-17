(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{375:function(t,r,s){"use strict";s.r(r);var n=s(45),a=Object(n.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),s("p",[t._v("上一篇文章，nuxt部署感觉出现了问题，发现我的部署只是表明部署，不是真正的部署，为了解决这个问题写了这文章")]),t._v(" "),s("h2",{attrs:{id:"pm2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pm2"}},[t._v("#")]),t._v(" pm2")]),t._v(" "),s("h3",{attrs:{id:"安装pm2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装pm2"}},[t._v("#")]),t._v(" 安装pm2")]),t._v(" "),s("blockquote",[s("p",[t._v("前面我们已经安装过node、nginx，在这我就不说了，可以看看我的上一篇文章"),s("br"),t._v("\n全局安装pm2")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("    cnpm install -g pm2 \n")])])]),s("blockquote",[s("p",[t._v("pm2的一些命令详情"),s("br"),t._v("\npm2 ls # 查看当前守护情况"),s("br"),t._v("\npm2 start all  # 启动所有应用"),s("br"),t._v("\npm2 restart all  # 重启所有应用"),s("br"),t._v("\npm2 stop all # 停止所有的应用程序"),s("br"),t._v("\npm2 delete all # 关闭并删除所有应用"),s("br"),t._v("\npm2 logs # 控制台显示所有日志"),s("br"),t._v("\npm2 start 0  # 启动 id为 0的指定应用程序"),s("br"),t._v("\npm2 restart 0  # 重启 id为 0的指定应用程序"),s("br"),t._v("\npm2 stop 0 # 停止 id为 0的指定应用程序"),s("br"),t._v("\npm2 delete 0 # 删除 id为 0的指定应用程序"),s("br"),t._v("\npm2 logs 0 # 控制台显示编号为0的日志"),s("br"),t._v("\npm2 show 0  # 查看执行编号为0的进程"),s("br"),t._v("\npm2 monit jsyfShopNuxt # 监控名称为jsyfShopNuxt的进程")])]),t._v(" "),s("h2",{attrs:{id:"nuxt部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nuxt部署"}},[t._v("#")]),t._v(" nuxt部署")]),t._v(" "),s("blockquote",[s("p",[t._v("只需要把项目放入远程服务器(阿里云、腾讯云)你的指定位置，文件（除node_modules）不需要放入"),s("br"),t._v("\n进入到你的指定位置"),s("br"),t._v("\nnpm install 安装依赖"),s("br"),t._v('\npm2 start npm --name "nuxt" -- run dev'),s("br"),t._v("\n通过pm2 ls就可以看到pm2守护情况，这时候浏览器就可以访问了"),s("br"),t._v("\n注意：服务器需要开启对应的端口、run dev是你项目的运行命令")])]),t._v(" "),s("h2",{attrs:{id:"express部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#express部署"}},[t._v("#")]),t._v(" express部署")]),t._v(" "),s("blockquote",[s("p",[t._v("只需要把项目放入远程服务器(阿里云、腾讯云)你的指定位置，文件（除node_modules）不需要放入"),s("br"),t._v("\n进入到你的指定位置\nnpm install 安装依赖"),s("br"),t._v("\npm2 start bin/www即可"),s("br"),t._v("\n通过pm2 ls就可以看到pm2守护情况，这时候浏览器就可以访问了"),s("br"),t._v("\n注意：服务器需要开启对应的端口、bin/www是你的运行文件")])])])}),[],!1,null,null,null);r.default=a.exports}}]);