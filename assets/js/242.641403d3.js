(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{956:function(a,t,s){"use strict";s.r(t);var e=s(15),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"kafka生产者分区分配策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kafka生产者分区分配策略"}},[a._v("#")]),a._v(" Kafka生产者分区分配策略")]),a._v(" "),s("p",[a._v("所谓分区策略是决定生产者将消息发送到哪个分区的算法。")]),a._v(" "),s("h1",{attrs:{id:"轮询策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#轮询策略"}},[a._v("#")]),a._v(" 轮询策略")]),a._v(" "),s("p",[a._v("也称 Round-robin 策略，即顺序分配。比如一个主题下有 3 个分区，那么第一条消息被发送到分区 0，第二条被发送到分区 1，第三条被发送到分区 2，以此类推。当生产第 4 条消息时又会重新开始，即将其分配到分区 0。")]),a._v(" "),s("p",[a._v("轮询策略有非常优秀的负载均衡表现，它总是能保证消息最大限度地被平均分配到所有分区上，故默认情况下它是最合理的分区策略，也是我们最常用的分区策略之一。")]),a._v(" "),s("h1",{attrs:{id:"随机策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#随机策略"}},[a._v("#")]),a._v(" 随机策略")]),a._v(" "),s("p",[a._v("也称 Randomness 策略。所谓随机就是我们随意地将消息放置到任意一个分区上，原理是先计算出该主题总的分区数，然后随机地返回一个小于它的正整数。")]),a._v(" "),s("p",[a._v("本质上看随机策略也是力求将数据均匀地打散到各个分区，但从实际表现来看，它要逊于轮询策略，所以如果追求数据的均匀分布，还是使用轮询策略比较好。")]),a._v(" "),s("h1",{attrs:{id:"按消息键保序策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按消息键保序策略"}},[a._v("#")]),a._v(" 按消息键保序策略")]),a._v(" "),s("p",[a._v("Kafka 允许为每条消息定义消息键，简称为 Key。这个 Key 的作用非常大，它可以是一个有着明确业务含义的字符串，比如客户代码、部门编号或是业务 ID 等；也可以用来表征消息元数据。特别是在 Kafka 不支持时间戳的年代，在一些场景中，工程师们都是直接将消息创建时间封装进 Key 里面的。一旦消息被定义了 Key，那么你就可以保证同一个 Key 的所有消息都进入到相同的分区里面，由于每个分区下的消息处理都是有顺序的，故这个策略被称为按消息键保序策略")])])}),[],!1,null,null,null);t.default=r.exports}}]);