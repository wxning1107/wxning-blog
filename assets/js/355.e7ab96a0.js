(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{1258:function(s,t,n){"use strict";n.r(t);var a=n(15),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"如何快速定位一个ip地址的归属地"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何快速定位一个ip地址的归属地"}},[s._v("#")]),s._v(" 如何快速定位一个IP地址的归属地？")]),s._v(" "),n("p",[s._v("当我们想要查询 202.102.133.13 这个 IP 地址的归属地时，我们就在地址库中搜索，发现这个 IP 地址落在 [202.102.133.0, 202.102.133.255] 这个地址范围内，那我们就可以将这个 IP 地址范围对应的归属地“山东东营市”显示给用户了。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[202.102.133.0, 202.102.133.255]  山东东营市 \n[202.102.135.0, 202.102.136.255]  山东烟台 \n[202.102.156.34, 202.102.157.255] 山东青岛 \n[202.102.48.0, 202.102.48.255] 江苏宿迁 \n[202.102.49.15, 202.102.51.251] 江苏泰州 \n[202.102.56.0, 202.102.56.255] 江苏连云港\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[n("strong",[s._v("假设我们有 12 万条这样的 IP 区间与归属地的对应关系，如何快速定位出一个 IP 地址的归属地呢？")])]),s._v(" "),n("p",[s._v("如果 IP 区间与归属地的对应关系不经常更新，我们可以先预处理这 12 万条数据，让其按照起始 IP 从小到大排序。如何来排序呢？我们知道，IP 地址可以转化为 32 位的整型数。所以，我们可以将起始地址，按照对应的整型值的大小关系，从小到大进行排序。")]),s._v(" "),n("blockquote",[n("p",[s._v("举例：一个ip地址为10.0.3.193")]),s._v(" "),n("p",[s._v("每段数字 相对应的二进制数")]),s._v(" "),n("p",[s._v("10 00001010")]),s._v(" "),n("p",[s._v("0 00000000")]),s._v(" "),n("p",[s._v("3 00000011")]),s._v(" "),n("p",[s._v("193 11000001")]),s._v(" "),n("p",[s._v("组合起来即为：00001010 00000000 00000011 11000001,转换为10进制就是：167773121，即该IP地址转换后的数字就是它了。")])]),s._v(" "),n("p",[s._v("然后，这个问题就可以转化为我刚讲的第四种变形问题“在有序数组中，查找最后一个小于等于某个给定值的元素”了。")]),s._v(" "),n("p",[s._v("当我们要查询某个 IP 归属地时，我们可以先通过二分查找，找到最后一个起始 IP 小于等于这个 IP 的 IP 区间，然后，检查这个 IP 是否在这个 IP 区间内，如果在，我们就取出对应的归属地显示；如果不在，就返回未查找到。")])])}),[],!1,null,null,null);t.default=e.exports}}]);