(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{1003:function(t,_,v){"use strict";v.r(_);var s=v(15),a=Object(s.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"消息积压了该如何处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#消息积压了该如何处理"}},[t._v("#")]),t._v(" 消息积压了该如何处理？")]),t._v(" "),v("h1",{attrs:{id:"_1-发送端性能优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-发送端性能优化"}},[t._v("#")]),t._v(" 1.发送端性能优化")]),t._v(" "),v("p",[t._v("发送端业务代码的处理性能，实际上和消息队列的关系不大，因为一般发送端都是先执行自己的业务逻辑，最后再发送消息。如果说，你的代码发送消息的性能上不去，你需要优先检查一下，是不是发消息之前的业务逻辑耗时太多导致的。")]),t._v(" "),v("p",[t._v("对于发送消息的业务逻辑，只需要注意设置合适的并发和批量大小，就可以达到很好的发送性能。无论是增加每次发送消息的批量大小，还是增加并发，都能成倍地提升发送性能。")]),t._v(" "),v("p",[t._v("如果在线业务比较在意的是请求响应时延，选择批量发送必然会影响服务的时延。这种情况，比较明智的方式就是通过并发来提升发送性能。")]),t._v(" "),v("p",[t._v("如果你的系统是一个离线分析系统，它不关心时延，更注重整个系统的吞吐量。这种情况就更适合批量发送，你可以批量从数据库读取数据，然后批量来发送消息。")]),t._v(" "),v("h1",{attrs:{id:"_2-消费端性能优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-消费端性能优化"}},[t._v("#")]),t._v(" 2.消费端性能优化")]),t._v(" "),v("p",[t._v("使用消息队列的时候，大部分的性能问题都出现在消费端，如果消费的速度跟不上发送端生产消息的速度，就会造成消息积压。我们在设计系统的时候，"),v("strong",[t._v("一定要保证消费端的消费性能要高于生产端的发送性能，")]),t._v(" 这样的系统才能健康的持续运行。")]),t._v(" "),v("p",[t._v("消费端的性能优化除了优化消费业务逻辑以外，也可以通过水平扩容，增加消费端的并发数来提升总体的消费性能。特别需要注意的一点是，"),v("strong",[t._v("在扩容 Consumer 的实例数量的同时，必须同步扩容主题中的分区（也叫队列）数量，确保 Consumer 的实例数和分区数量是相等的。")]),t._v(" 如果 Consumer 的实例数量超过分区数量，这样的扩容实际上是没有效果的。原因我们之前讲过，因为对于消费者来说，在每个分区上实际上只能支持单线程消费。")]),t._v(" "),v("h1",{attrs:{id:"消息积压了该如何处理-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#消息积压了该如何处理-2"}},[t._v("#")]),t._v(" 消息积压了该如何处理？")]),t._v(" "),v("p",[t._v("还有一种消息积压的情况是，日常系统正常运转的时候，没有积压或者只有少量积压很快就消费掉了，但是某一个时刻，突然就开始积压消息并且积压持续上涨。这种情况下需要你在短时间内找到消息积压的原因，迅速解决问题才不至于影响业务。")]),t._v(" "),v("p",[t._v("能导致积压突然增加，最粗粒度的原因，只有两种：要么是发送变快了，要么是消费变慢了。")]),t._v(" "),v("p",[t._v("如果是单位时间发送的消息增多，比如说是赶上大促或者抢购，短时间内不太可能优化消费端的代码来提升消费性能，唯一的方法是通过扩容消费端的实例数来提升总体的消费能力。")]),t._v(" "),v("p",[t._v("如果短时间内没有足够的服务器资源进行扩容，没办法的办法是，将系统降级，通过关闭一些不重要的业务，减少发送方发送的数据量，最低限度让系统还能正常运转，服务一些重要业务。")]),t._v(" "),v("p",[t._v("还有一种不太常见的情况，你通过监控发现，无论是发送消息的速度还是消费消息的速度和原来都没什么变化，这时候你需要检查一下你的消费端，是不是消费失败导致的一条消息反复消费这种情况比较多，这种情况也会拖慢整个系统的消费速度。")]),t._v(" "),v("p",[t._v("如果监控到消费变慢了，你需要检查你的消费实例，分析一下是什么原因导致消费变慢。优先检查一下日志是否有大量的消费错误，如果没有错误的话，可以通过打印堆栈信息，看一下你的消费线程是不是卡在什么地方不动了，比如触发了死锁或者卡在等待某些资源上了。")])])}),[],!1,null,null,null);_.default=a.exports}}]);