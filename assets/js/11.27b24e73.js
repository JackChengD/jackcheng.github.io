(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{369:function(t,a,e){"use strict";e.r(a);var s=e(45),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"环境搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),e("h2",{attrs:{id:"git安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git安装"}},[t._v("#")]),t._v(" git安装")]),t._v(" "),e("p",[t._v("找到"),e("a",{attrs:{href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git"),e("OutboundLink")],1),t._v("进行傻瓜式安装\n通过cmd查看是否安装成功 git --version，若打印出版本即安装完毕")]),t._v(" "),e("h2",{attrs:{id:"node安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node安装"}},[t._v("#")]),t._v(" node安装")]),t._v(" "),e("p",[t._v("找到"),e("a",{attrs:{href:"http://nodejs.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node"),e("OutboundLink")],1),t._v("进行傻瓜式安装\n通过cmd查看是否安装成功 node --version，npm --version。若打印出版本即安装完毕")]),t._v(" "),e("h2",{attrs:{id:"hexo-cli安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hexo-cli安装"}},[t._v("#")]),t._v(" hexo-cli安装")]),t._v(" "),e("p",[t._v("通过npm install hexo-cli -g，对hexo-cli进行全局安装")]),t._v(" "),e("h2",{attrs:{id:"初始化项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目"}},[t._v("#")]),t._v(" 初始化项目")]),t._v(" "),e("p",[t._v("hexo init blog：初始化项目，耐心等待\ncd blog：进入blog文件\nnpm install：安装依赖")]),t._v(" "),e("h3",{attrs:{id:"文件介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件介绍"}},[t._v("#")]),t._v(" 文件介绍")]),t._v(" "),e("p",[t._v("node_modules：依赖包\npublic：存放生成的页面\nscaffolds：生成文章的一些模板\nsource：用来存放你的文章\nthemes：主题\n_config.yml：博客的配置文件")]),t._v(" "),e("h3",{attrs:{id:"启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[t._v("#")]),t._v(" 启动")]),t._v(" "),e("p",[t._v("hexo clean：清除你之前生成的东西，也可以不加\nhexo generate：生成静态文章，可以用hexo g缩写\nhexo server 启动hexo，可以在浏览器localhost:4000查看你的博客，可以用hexo s缩写")]),t._v(" "),e("h2",{attrs:{id:"部署到个人github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署到个人github"}},[t._v("#")]),t._v(" 部署到个人GitHub")]),t._v(" "),e("h3",{attrs:{id:"github创建个人仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github创建个人仓库"}},[t._v("#")]),t._v(" github创建个人仓库")]),t._v(" "),e("p",[t._v("在这里默认你已经有自己的github并且密钥都配置好了\n这时你可以在Github.com中点击New repository新建仓库，创建一个和你用户名相同的仓库，后面加.github.io，只有这样，将来要部署到GitHub page的时候，才会被识别，也就是xxxx.github.io，其中xxx就是你注册GitHub的用户名")]),t._v(" "),e("h3",{attrs:{id:"hexo配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hexo配置"}},[t._v("#")]),t._v(" hexo配置")]),t._v(" "),e("p",[t._v("现在需要我们将hexo和github关联起来。在你初始化的hexo文件找到_config.yml，翻到最后做如下配置\n将repository中的JackChengD修改为个人的GitHub账户名")]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" git\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repository")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" git@github.com"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("JackChengD/JackChengD.github.io.git\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n")])])]),e("h2",{attrs:{id:"最后一步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最后一步"}},[t._v("#")]),t._v(" 最后一步")]),t._v(" "),e("p",[t._v("这时候，你已经基本完成hexo个人博客的搭建，只需要将以下命令操作一下就可以成功了\nhexo clean---清除你之前生成的东西，也可以不加\nhexo generate---生成静态文章，可以用hexo g缩写\nhexo deploy---部署文章，可以用hexo d缩写\n操作完毕后，你就可以访问到自己的github博客，地址栏输入jackchengd.github.io。将jackchengd改为你个人GitHub账户就可以访问啦")]),t._v(" "),e("h1",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("利用hexo搭建个人博客是不是非常的简洁快速，你还可以选择个人主题对你的博客做更多美化哟，但接下来的操作需要你个人手动去实现哦，博主就不多说啦，加油，学习之路永不停止")])])}),[],!1,null,null,null);a.default=r.exports}}]);