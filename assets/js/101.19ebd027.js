(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{622:function(t,v,_){"use strict";_.r(v);var s=_(15),n=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"微服务架构带来的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构带来的问题"}},[t._v("#")]),t._v(" 微服务架构带来的问题")]),t._v(" "),_("p",[t._v("微服务化带来的问题：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("服务接口的调用，不再是同一进程内的方法调用，而是跨进程的网络调用，这会增加接口响应时间的增加。")]),t._v(" "),_("p",[t._v("此时，我们就要选择高效的服务调用框架，同时，接口调用方需要知道服务部署在哪些机器的哪个端口上，这些信息需要存储在一个分布式一致性的存储中， "),_("strong",[t._v("于是就需要引入服务注册中心")])])]),t._v(" "),_("li",[_("p",[t._v("多个服务之间有着错综复杂的依赖关系。")]),t._v(" "),_("p",[t._v("一个服务会依赖多个其它服务，也会被多个服务所依赖，那么一旦被依赖的服务的性能出现问题，产生大量的慢请求，就会导致依赖服务的工作线程池中的线程被占满，那么依赖的服务也会出现性能问题。为了避免这种情况的发生， "),_("strong",[t._v("我们需要引入服务治理体系，")]),t._v(" 针对出问题的服务，采用熔断、降级、限流、超时控制的方法，使得问题被限制在单一服务中，保护服务网络中的其它服务不受影响。")])]),t._v(" "),_("li",[_("p",[t._v("分布式链路追踪")]),t._v(" "),_("p",[t._v("服务拆分到多个进程后，一条请求的调用链路上，涉及多个服务，那么一旦这个请求的响应时间增长，或者是出现错误，我们就很难知道，是哪一个服务出现的问题。另外，整体系统一旦出现故障，很可能外在的表现是所有服务在同一时间都出现了问题，你在问题定位时，很难确认哪一个服务是源头，这就需要 "),_("strong",[t._v("引入分布式追踪工具，以及更细致的服务端监控报表。")])])])])])}),[],!1,null,null,null);v.default=n.exports}}]);