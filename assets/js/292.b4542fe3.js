(window.webpackJsonp=window.webpackJsonp||[]).push([[292],{1139:function(t,a,e){"use strict";e.r(a);var b=e(15),v=Object(b.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"kafka、rocketmq、rabbitmq区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kafka、rocketmq、rabbitmq区别"}},[t._v("#")]),t._v(" Kafka、RocketMQ、RabbitMQ区别？")]),t._v(" "),e("p",[e("font",{attrs:{size:"5"}},[e("strong",[t._v("RabbitMQ")])])],1),t._v(" "),e("p",[t._v("RabbitMQ 就像它的名字中的兔子一样：轻量级、迅捷，RabbitMQ 是一个相当轻量级的消息队列，非常容易部署和使用。RabbitMQ 一个比较有特色的功能是支持非常灵活的路由配置，和其他消息队列不同的是，它在生产者（Producer）和队列（Queue）之间增加了一个 Exchange 模块，你可以理解为交换机。这个 Exchange 模块的作用和交换机也非常相似，根据配置的路由规则将生产者发出的消息分发到不同的队列中。路由的规则也非常灵活，甚至你可以自己来实现路由规则。")]),t._v(" "),e("p",[t._v("RabbitMQ的几个问题：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("RabbitMQ 对消息堆积的支持并不好，在它的设计理念里面，消息队列是一个管道，大量的消息积压是一种不正常的情况，应当尽量去避免。当大量消息积压的时候，会导致 RabbitMQ 的性能急剧下降。")])]),t._v(" "),e("li",[e("p",[t._v("RabbitMQ 的性能是流行的消息队列中最差的，大概每秒钟可以处理几万到十几万条消息。")])]),t._v(" "),e("li",[e("p",[t._v("RabbitMQ 使用的编程语言 Erlang，如果你想基于 RabbitMQ 做一些扩展和二次开发什么的，建议你慎重考虑一下可持续维护的问题。")])])]),t._v(" "),e("p",[e("font",{attrs:{size:"5"}},[e("strong",[t._v("Kafka")])])],1),t._v(" "),e("p",[t._v("当下的 Kafka 已经发展为一个非常成熟的消息队列产品，无论在数据可靠性、稳定性和功能特性等方面都可以满足绝大多数场景的需求。Kafka 使用 Scala 和 Java 语言开发，设计上大量使用了批量和异步的思想，这种设计使得 Kafka 能做到超高的性能。Kafka 的性能，尤其是异步收发的性能，比RabbitMQ要好，与 RocketMQ 并没有量级上的差异，大约每秒钟可以处理几十万条消息。")]),t._v(" "),e("p",[t._v("但是 Kafka 这种异步批量的设计带来的问题是，它的同步收发消息的响应时延比较高，因为当客户端发送一条消息的时候，Kafka 并不会立即发送出去，而是要等一会儿攒一批再发送，在它的 Broker 中，很多地方都会使用这种“先攒一波再一起处理”的设计。当你的业务场景中，每秒钟消息数量没有那么多的时候，Kafka 的时延反而会比较高。所以，Kafka 不太适合在线业务场景。")]),t._v(" "),e("p",[e("font",{attrs:{size:"5"}},[e("strong",[t._v("RocketMQ")])])],1),t._v(" "),e("p",[t._v("RocketMQ 是阿里巴巴在 2012 年开源的消息队列产品，阿里内部也是使用 RocketMQ 作为支撑其业务的消息队列，经历过多次“双十一”考验，它的性能、稳定性和可靠性都是值得信赖的。")]),t._v(" "),e("p",[t._v("RocketMQ 对在线业务的响应时延做了很多的优化，大多数情况下可以做到毫秒级的响应，"),e("strong",[t._v("如果你的应用场景很在意响应时延，那应该选择使用 RocketMQ。")])]),t._v(" "),e("p",[t._v("RocketMQ 的性能比 RabbitMQ 要高一个数量级，每秒钟大概能处理几十万条消息。")]),t._v(" "),e("p",[t._v("RocketMQ 的一个劣势是，作为国产的消息队列，相比国外的比较流行的同类产品，在国际上还没有那么流行，与周边生态系统的集成和兼容程度要略逊一筹。")])])}),[],!1,null,null,null);a.default=v.exports}}]);