(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{336:function(t,a,s){"use strict";s.r(a);var e=s(33),l=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"linux常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux常用命令"}},[t._v("#")]),t._v(" Linux常用命令")]),t._v(" "),s("h2",{attrs:{id:"防火墙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防火墙"}},[t._v("#")]),t._v(" 防火墙")]),t._v(" "),s("p",[t._v("systemctl start firewalld  # 开启防火墙\nsystemctl stop firewalld   # 关闭防火墙\nsystemctl status firewalld # 查看防火墙开启状态，显示running则是正在运行\nfirewall-cmd --reload      # 重启防火墙，永久打开端口需要reload一下")]),t._v(" "),s("ul",[s("li",[t._v("添加开启端口，--permanent表示永久打开，不加是临时打开重启之后失效")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("firewall-cmd --permanent --zone"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --add-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8888")]),t._v("/tcp\n")])])]),s("ul",[s("li",[t._v("查看防火墙，添加的端口也可以看到")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("firewall-cmd --list-all\n")])])])])}),[],!1,null,null,null);a.default=l.exports}}]);