(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{1006:function(t,r,s){"use strict";s.r(r);var v=s(15),_=Object(v.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"怎样做到高可用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎样做到高可用"}},[t._v("#")]),t._v(" 怎样做到高可用？")]),t._v(" "),s("h2",{attrs:{id:"系统设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统设计"}},[t._v("#")]),t._v(" 系统设计")]),t._v(" "),s("p",[s("strong",[t._v("1.failover（故障转移）")])]),t._v(" "),s("p",[t._v("举个例子，Nginx 可以配置当某一个 Tomcat 出现大于 500 的请求的时候，重试请求另一个 Tomcat 节点")]),t._v(" "),s("p",[s("strong",[t._v("2.调用超时控制")])]),t._v(" "),s("p",[t._v("超时时间如何选择？")]),t._v(" "),s("p",[s("strong",[t._v("通过收集系统之间的调用日志，统计比如说 99% 的响应时间是怎样的，然后依据这个时间来指定超时时间")])]),t._v(" "),s("p",[s("strong",[t._v("3.降级")])]),t._v(" "),s("p",[t._v("比方说我们发一条微博会先经过反垃圾服务检测，检测内容是否是广告，通过后才会完成诸如写数据库等逻辑。")]),t._v(" "),s("p",[t._v("反垃圾的检测是一个相对比较重的操作，因为涉及到非常多的策略匹配，在日常流量下虽然会比较耗时却还能正常响应。但是当并发较高的情况下，它就有可能成为瓶颈，而且它也不是发布微博的主体流程，所以我们可以暂时关闭反垃圾服务检测，这样就可以保证主体的流程更加稳定。")]),t._v(" "),s("p",[s("strong",[t._v("4. 限流")])]),t._v(" "),s("h2",{attrs:{id:"系统运维"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统运维"}},[t._v("#")]),t._v(" 系统运维")]),t._v(" "),s("p",[s("strong",[t._v("1.灰度发布")])]),t._v(" "),s("p",[s("strong",[t._v("2.故障演练")])]),t._v(" "),s("p",[t._v("故障演练指的是对系统进行一些破坏性的手段，观察在出现局部故障时，整体的系统表现是怎样的，从而发现系统中存在的，潜在的可用性问题。")])])}),[],!1,null,null,null);r.default=_.exports}}]);