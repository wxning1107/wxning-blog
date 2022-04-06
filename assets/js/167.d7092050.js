(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{1488:function(s,t,n){"use strict";n.r(t);var a=n(15),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"负载均衡-怎样提升系统的横向扩展能力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡-怎样提升系统的横向扩展能力"}},[s._v("#")]),s._v(" 负载均衡：怎样提升系统的横向扩展能力？")]),s._v(" "),a("p",[s._v("在基础篇中，我提到了高并发系统设计的三个通用方法：缓存、异步和横向扩展，到目前为止，你接触到了缓存的使用姿势，也了解了，如何使用消息队列异步处理业务逻辑，那么本节课，我将带你了解一下，如何提升系统的横向扩展能力。")]),s._v(" "),a("p",[s._v("在之前的课程中，我也提到过提升系统横向扩展能力的一些案例。比如，08 讲提到，可以通过部署多个从库的方式，来提升数据库的扩展能力，从而提升数据库的查询性能，那么就需要借助组件，将查询数据库的请求，按照一些既定的策略分配到多个从库上，这是负载均衡服务器所起的作用，而我们一般使用 "),a("strong",[s._v("DNS 服务器")]),s._v(" 来承担这个角色。")]),s._v(" "),a("p",[s._v("不过在实际的工作中，你经常使用的负载均衡的组件应该算是 Nginx，它的作用是承接前端的 HTTP 请求，然后将它们按照多种策略，分发给后端的多个业务服务器上。这样，我们可以随时通过扩容业务服务器的方式，来抵挡突发的流量高峰。"),a("strong",[s._v("与 DNS 不同的是，Nginx 可以在域名和请求 URL 地址的层面做更细致的流量分配，也提供更复杂的负载均衡策略")]),s._v(" 。")]),s._v(" "),a("p",[s._v("你可能会想到，在微服务架构中，我们也会启动多个服务节点，来承接从用户端到应用服务器的请求，自然会需要一个负载均衡服务器，作为流量的入口，实现流量的分发。那么在微服务架构中，如何使用负载均衡服务器呢？")]),s._v(" "),a("p",[s._v("在回答这些问题之前，我先带你了解一下，常见的负载均衡服务器都有哪几类，因为这样，你就可以依据不同类型负载均衡服务器的特点做选择了。")]),s._v(" "),a("p",[a("font",{attrs:{size:"5"}},[a("strong",[s._v("负载均衡服务器的种类")])])],1),s._v(" "),a("p",[a("strong",[s._v("负载均衡的含义是：")]),s._v(" 将负载（访问的请求）「均衡」地分配到多个处理节点上。这样可以减少单个处理节点的请求量，提升整体系统的性能。")]),s._v(" "),a("p",[s._v("同时，负载均衡服务器作为流量入口，可以对请求方屏蔽服务节点的部署细节，实现对于业务方无感知的扩容。它就像交通警察，不断地疏散交通，将汽车引入合适的道路上。")]),s._v(" "),a("p",[a("strong",[s._v("而在我看来，")]),s._v(" 负载均衡服务大体上可以分为两大类：一类是 "),a("strong",[s._v("代理类的负载均衡服务")]),s._v(" ；另一类是 "),a("strong",[s._v("客户端负载均衡服务")]),s._v(" 。")]),s._v(" "),a("p",[a("font",{attrs:{size:"4"}},[a("strong",[s._v("代理类的负载均衡服务")])])],1),s._v(" "),a("p",[s._v("代理类的负载均衡服务，以单独的服务方式部署，所有的请求都要先经过负载均衡服务，在负载均衡服务中，选出一个合适的服务节点后，再由负载均衡服务，调用这个服务节点来实现流量的分发。")]),s._v(" "),a("p",[a("img",{attrs:{src:n(968),alt:"img"}})]),s._v(" "),a("p",[s._v("由于这类服务需要承担全量的请求，所以对于性能的要求极高。代理类的负载均衡服务有很多开源实现，比较著名的有 LVS，Nginx 等等。LVS 在 OSI 网络模型中的第四层，传输层工作，所以 LVS 又可以称为四层负载；而 Nginx 运行在 OSI 网络模型中的第七层，应用层，所以又可以称它为七层负载（你可以回顾一下02 讲的内容）。")]),s._v(" "),a("p",[s._v("在项目的架构中，我们一般会同时部署 LVS 和 Nginx 来做 HTTP 应用服务的负载均衡。也就是说，在入口处部署 LVS，将流量分发到多个 Nginx 服务器上，再由 Nginx 服务器分发到应用服务器上， "),a("strong",[s._v("为什么这么做呢？")])]),s._v(" "),a("p",[s._v("主要和 LVS 和 Nginx 的特点有关，LVS 是在网络栈的四层做请求包的转发，请求包转发之后，由客户端和后端服务直接建立连接，后续的响应包不会再经过 LVS 服务器，所以相比 Nginx，性能会更高，也能够承担更高的并发。")]),s._v(" "),a("p",[s._v("可 LVS 缺陷是工作在四层，而请求的 URL 是七层的概念，不能针对 URL 做更细致地请求分发，而且 LVS 也没有提供探测后端服务是否存活的机制；而 Nginx 虽然比 LVS 的性能差很多，但也可以承担每秒几万次的请求，并且它在配置上更加灵活，还可以感知后端服务是否出现问题。")]),s._v(" "),a("p",[s._v("因此，LVS 适合在入口处，承担大流量的请求分发，而 Nginx 要部署在业务服务器之前做更细维度的请求分发。 "),a("strong",[s._v("我给你的建议是，")]),s._v(" 如果你的 QPS 在十万以内，那么可以考虑不引入 LVS 而直接使用 Nginx 作为唯一的负载均衡服务器，这样少维护一个组件，也会减少系统的维护成本。")]),s._v(" "),a("p",[s._v("不过这两个负载均衡服务适用于普通的 Web 服务，对于微服务架构来说，它们是不合适的。因为微服务架构中的服务节点存储在注册中心里，使用 LVS 就很难和注册中心交互，获取全量的服务节点列表。另外，一般微服务架构中，使用的是 RPC 协议而不是 HTTP 协议，所以 Nginx 也不能满足要求。")]),s._v(" "),a("p",[a("font",{attrs:{size:"4"}},[a("strong",[s._v("客户端负载均衡服务")])])],1),s._v(" "),a("p",[a("strong",[s._v("所以，我们会使用另一类的负载均衡服务，客户端负载均衡服务，也就是把负载均衡的服务内嵌在 RPC 客户端中。")])]),s._v(" "),a("p",[s._v("它一般和客户端应用，部署在一个进程中，提供多种选择节点的策略，最终为客户端应用提供一个最佳的，可用的服务端节点。这类服务一般会结合注册中心来使用，注册中心提供服务节点的完整列表，客户端拿到列表之后使用负载均衡服务的策略选取一个合适的节点，然后将请求发到这个节点上。")]),s._v(" "),a("p",[a("img",{attrs:{src:n(969),alt:"img"}})]),s._v(" "),a("p",[s._v("了解负载均衡服务的分类，是你学习负载均衡服务的第一步，接下来，你需要掌握负载均衡策略，这样一来，你在实际工作中，配置负载均衡服务的时候，可以对原理有更深刻的了解。")]),s._v(" "),a("p",[a("font",{attrs:{size:"5"}},[a("strong",[s._v("常见的负载均衡策略有哪些")])])],1),s._v(" "),a("p",[s._v("负载均衡策略从大体上来看可以分为两类：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("一类是静态策略，也就是说负载均衡服务器在选择服务节点时，不会参考后端服务的实际运行的状态。")])]),s._v(" "),a("li",[a("p",[s._v("一类是动态策略，也就是说负载均衡服务器会依据后端服务的一些负载特性，来决定要选择哪一个服务节点。")])])]),s._v(" "),a("p",[a("font",{attrs:{size:"4"}},[a("strong",[s._v("静态策略")])])],1),s._v(" "),a("p",[s._v("常见的静态策略有几种，其中使用最广泛的是 "),a("strong",[s._v("轮询的策略（RoundRobin，RR），")]),s._v(" 这种策略会记录上次请求后端服务的地址或者序号，然后在请求时，按照服务列表的顺序，请求下一个后端服务节点。伪代码如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AtomicInteger")]),s._v(" lastCounter "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getLastCounter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取上次请求的服务节点的序号 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" serverList "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getServerList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取服务列表")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" currentIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" lastCounter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addAndGet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 增加序列号")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("currentIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" serverList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  currentIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setLastCounter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("currentIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" serverList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("currentIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("它其实是一种通用的策略，基本上，大部分的负载均衡服务器都支持。轮询的策略可以做到将请求尽量平均地分配到所有服务节点上，但是，它没有考虑服务节点的具体配置情况。比如，你有三个服务节点，其中一个服务节点的配置是 8 核 8G，另外两个节点的配置是 4 核 4G，那么如果使用轮询的方式来平均分配请求的话，8 核 8G 的节点分到的请求数量和 4 核 4G 的一样多，就不能发挥性能上的优势了")]),s._v(" "),a("p",[s._v("所以，我们考虑给节点加上权重值，比如给 8 核 8G 的机器配置权重为 2，那么就会给它分配双倍的流量， "),a("strong",[s._v("这种策略就是带有权重的轮询策略。")])]),s._v(" "),a("p",[s._v("除了这两种策略之外，目前开源的负载均衡服务还提供了很多静态策略：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Nginx 提供了 ip_hash 和 url_hash 算法；")])]),s._v(" "),a("li",[a("p",[s._v("LVS 提供了按照请求的源地址，和目的地址做 hash 的策略；")])]),s._v(" "),a("li",[a("p",[s._v("Dubbo 也提供了随机选取策略，以及一致性 hash 的策略。")])])]),s._v(" "),a("p",[a("strong",[s._v("但是在我看来，")]),s._v(" 轮询和带有权重的轮询策略，能够将请求尽量平均地分配到后端服务节点上，也就能够做到对于负载的均衡分配，在没有更好的动态策略之前，应该优先使用这两种策略，比如 Nginx 就会优先使用轮询的策略。")]),s._v(" "),a("p",[a("font",{attrs:{size:"4"}},[a("strong",[s._v("动态策略")])])],1),s._v(" "),a("p",[s._v("而目前开源的负载均衡服务中，也会提供一些动态策略，我强调一下它们的原理。")]),s._v(" "),a("p",[s._v("在负载均衡服务器上会收集对后端服务的调用信息，比如从负载均衡端到后端服务的活跃连接数，或者是调用的响应时间，然后从中选择连接数最少的服务，或者响应时间最短的后端服务。  "),a("strong",[s._v("我举几个具体的例子：")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Dubbo 提供的 LeastAcive 策略，就是优先选择活跃连接数最少的服务；")])]),s._v(" "),a("li",[a("p",[s._v("Spring Cloud 全家桶中的 Ribbon 提供了 WeightedResponseTimeRule 是使用响应时间，给每个服务节点计算一个权重，然后依据这个权重，来给调用方分配服务节点。")])])]),s._v(" "),a("p",[a("strong",[s._v("这些策略的思考点")]),s._v(" 是从调用方的角度出发，选择负载最小、资源最空闲的服务来调用，以期望能得到更高的服务调用性能，也就能最大化地使用服务器的空闲资源，请求也会响应地更迅速， "),a("strong",[s._v("所以，我建议你，")]),s._v(" 在实际开发中，优先考虑使用动态的策略。")]),s._v(" "),a("p",[s._v("到目前为止，你已经可以根据上面的分析，选择适合自己的负载均衡策略，并选择一个最优的服务节点， "),a("strong",[s._v("那么问题来了：")]),s._v(" 你怎么保证选择出来的这个节点，一定是一个可以正常服务的节点呢？如果你采用的是轮询的策略，选择出来的，是一个故障节点又要怎么办呢？所以，为了降低请求被分配到一个故障节点的几率，有些负载均衡服务器，还提供了对服务节点的故障检测功能。")]),s._v(" "),a("p",[a("font",{attrs:{size:"5"}},[a("strong",[s._v("如何检测节点是否故障")])])],1),s._v(" "),a("p",[s._v("24 讲中，我带你了解到，在微服务化架构中，服务节点会定期地向注册中心发送心跳包，这样注册中心就能够知晓服务节点是否故障，也就可以确认传递给负载均衡服务的节点，一定是可用的。")]),s._v(" "),a("p",[s._v("但对于 Nginx 来说， "),a("strong",[s._v("我们要如何保证配置的服务节点是可用的呢？")])]),s._v(" "),a("p",[s._v("这就要感谢淘宝开源的 Nginx 模块 "),a("code",[s._v("nginx_upstream_check_module")]),s._v(" 了，这个模块可以让 Nginx 定期地探测后端服务的一个指定的接口，然后根据返回的状态码，来判断服务是否还存活。当探测不存活的次数达到一定阈值时，就自动将这个后端服务从负载均衡服务器中摘除。 "),a("strong",[s._v("它的配置样例如下：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("upstream server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.1:8080"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.2:8080"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        // 检测间隔为 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" 秒，检测超时时间是 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 秒，使用 http 协议。如果连续失败次数达到 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" 次就认为服务不可用；如果连续连续成功次数达到 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 次，则认为服务可用。后端服务刚启动时状态是不可用的\n        check "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("interval")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rise")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fall")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("timeout")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("default_down")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        check_http_send "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET /health_check HTTP/1.0'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" // 检测 URL\n        check_http_expect_alive http_2xx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" // 检测返回状态码为 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" 时认为检测成功\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("Nginx 按照上面的方式配置之后，你的业务服务器也要实现一个 "),a("code",[s._v("/health_check")]),s._v(" 的接口，在这个接口中返回的 HTTP 状态码，这个返回的状态码可以存储在配置中心中，这样在变更状态码时，就不需要重启服务了（配置中心在第 33 节课中会讲到）。")]),s._v(" "),a("p",[s._v("节点检测的功能，还能够帮助我们实现 Web 服务的优雅关闭。在 24 讲中介绍注册中心时，我曾经提到，服务的优雅关闭需要先切除流量再关闭服务，使用了注册中心之后，就可以先从注册中心中摘除节点，再重启服务，以便达到优雅关闭的目的。那么 Web 服务要如何实现优雅关闭呢？接下来，我来给你了解一下，有了节点检测功能之后，服务是如何启动和关闭的。")]),s._v(" "),a("p",[a("strong",[s._v("在服务刚刚启动时，")]),s._v(" 可以初始化默认的 HTTP 状态码是 500，这样 Nginx 就不会很快将这个服务节点标记为可用，也就可以等待服务中，依赖的资源初始化完成，避免服务初始启动时的波动。")]),s._v(" "),a("p",[a("strong",[s._v("在完全初始化之后，")]),s._v(" 再将 HTTP 状态码变更为 200，Nginx 经过两次探测后，就会标记服务为可用。在服务关闭时，也应该先将 HTTP 状态码变更为 500，等待 Nginx 探测将服务标记为不可用后，前端的流量也就不会继续发往这个服务节点。在等待服务正在处理的请求全部处理完毕之后，再对服务做重启，可以避免直接重启导致正在处理的请求失败的问题。 "),a("strong",[s._v("这是启动和关闭线上 Web 服务时的标准姿势，你可以在项目中参考使用。")])]),s._v(" "),a("p",[a("font",{attrs:{size:"5"}},[a("strong",[s._v("课程小结")])])],1),s._v(" "),a("p",[s._v("本节课，我带你了解了与负载均衡服务相关的一些知识点，以及在实际工作中的运用技巧。我想强调几个重点：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("网站负载均衡服务的部署，是以 LVS 承接入口流量，在应用服务器之前，部署 Nginx 做细化的流量分发，和故障节点检测。当然，如果你的网站的并发不高，也可以考虑不引入 LVS。")])]),s._v(" "),a("li",[a("p",[s._v("负载均衡的策略可以优先选择动态策略，保证请求发送到性能最优的节点上；如果没有合适的动态策略，那么可以选择轮询的策略，让请求平均分配到所有的服务节点上。")])]),s._v(" "),a("li",[a("p",[s._v("Nginx 可以引入 nginx_upstream_check_module，对后端服务做定期的存活检测，后端的服务节点在重启时，也要秉承着「先切流量后重启」的原则，尽量减少节点重启对于整体系统的影响。")])])]),s._v(" "),a("p",[s._v("你可能会认为，像 Nginx、LVS 应该是运维所关心的组件，作为开发人员不用操心维护。 "),a("strong",[s._v("不过通过今天的学习你应该可以看到：")]),s._v(" 负载均衡服务是提升系统扩展性，和性能的重要组件，在高并发系统设计中，它发挥的作用是无法替代的。理解它的原理，掌握使用它的正确姿势，应该是每一个后端开发同学的必修课。")]),s._v(" "),a("p",[a("font",{attrs:{size:"5"}},[a("strong",[s._v("拓展阅读")])])],1),s._v(" "),a("ul",[a("li",[a("p",[s._v("对于普通 web 服务，nginx 有办法感知新增结点吗？")]),s._v(" "),a("p",[s._v("有一种 consul + nginx 方案，就是把节点信息写在 consul 里面，这样当节点变化时，nginx 可以得到通知")])]),s._v(" "),a("li",[a("p",[s._v("关闭服务之前，用 503 状态码响应健康检查语义更明确一些。")])])])])}),[],!1,null,null,null);t.default=e.exports},968:function(s,t,n){s.exports=n.p+"assets/img/7a76b0b7c6e3fc4b60cfcda8dbd93dc9.7a76b0b7.jpg"},969:function(s,t,n){s.exports=n.p+"assets/img/539f9fd7196c3c0b17eba55584d4c6c1.539f9fd7.jpg"}}]);