(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{1143:function(t,e,a){"use strict";a.r(e);var s=a(15),u=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"kafka消费者是push还是pull"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kafka消费者是push还是pull"}},[t._v("#")]),t._v(" kafka消费者是push还是pull？")]),t._v(" "),a("p",[t._v("consumer 采用 pull(拉)模式从 broker 中读取数据。")]),t._v(" "),a("p",[t._v("push(推)模式很难适应消费速率不同的消费者，因为消息发送速率是由 broker 决定的。 它的目标是尽可能以最快速度传递消息，但是这样很容易造成 consumer 来不及处理消息，典型的表现就是拒绝服务以及网络拥塞。而 pull 模式则可以根据 consumer 的消费能力以适 当的速率消费消息。")]),t._v(" "),a("p",[t._v("pull 模式不足之处是，如果 kafka 没有数据，消费者可能会陷入循环中，一直返回空数 据。针对这一点，Kafka 的消费者在消费数据时会传入一个时长参数 timeout，如果当前没有数据可供消费，consumer 会等待一段时间之后再返回，这段时长即为 timeout。")])])}),[],!1,null,null,null);e.default=u.exports}}]);