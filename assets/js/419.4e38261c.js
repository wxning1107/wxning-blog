(window.webpackJsonp=window.webpackJsonp||[]).push([[419],{1477:function(t,n,s){"use strict";s.r(n);var e=s(15),r=Object(e.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"搜索引擎的设计与实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搜索引擎的设计与实现"}},[t._v("#")]),t._v(" 搜索引擎的设计与实现")]),t._v(" "),s("p",[t._v("在搜索引擎的设计与实现中，会用到大量的算法。像 Google 这样的大型商用搜索引擎，有成千上万的工程师，十年如一日地对它进行优化改进，所以，它所包含的技术细节非常多。我很难、也没有这个能力，通过一篇文章把所有细节都讲清楚。")]),t._v(" "),s("p",[t._v("所以，接下来的讲解，我主要给你展示，如何在一台机器上（假设这台机器的内存是 8GB， 硬盘是 100 多 GB），通过少量的代码，实现一个小型搜索引擎。不过，麻雀虽小，五脏俱全。跟大型搜索引擎相比，实现这样一个小型搜索引擎所用到的理论基础是相通的。")]),t._v(" "),s("p",[t._v("搜索引擎大致可以分为四个部分："),s("strong",[t._v("搜集")]),t._v("、"),s("strong",[t._v("分析")]),t._v("、"),s("strong",[t._v("索引")]),t._v("、"),s("strong",[t._v("查询")]),t._v("。其中，搜集，就是我们常说的利用爬虫爬取网页。分析，主要负责网页内容抽取、分词，构建临时索引，计算 PageRank 值这几部分工作。索引，主要负责通过分析阶段得到的临时索引，构建倒排索引。查询，主要负责响应用户的请求，根据倒排索引获取相关网页，计算网页排名，返回查询结果给用户。")]),t._v(" "),s("p",[t._v("接下来，我就按照网页处理的生命周期，从这四个阶段，依次来给你讲解，一个网页从被爬取到最终展示给用户，这样一个完整的过程。与此同时，我会穿插讲解，这个过程中需要用到哪些数据结构和算法。")])])}),[],!1,null,null,null);n.default=r.exports}}]);