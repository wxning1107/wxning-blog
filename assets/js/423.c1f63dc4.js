(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{1476:function(v,t,e){"use strict";e.r(t);var _=e(15),r=Object(_.a)({},(function(){var v=this,t=v.$createElement,e=v._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"简述-tcp-协议的延迟-ack-和累计应答"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简述-tcp-协议的延迟-ack-和累计应答"}},[v._v("#")]),v._v(" 简述 TCP 协议的延迟 ACK 和累计应答")]),v._v(" "),e("p",[e("strong",[v._v("延迟 ACK：")])]),v._v(" "),e("p",[v._v("tcp协议规定在接受到数据段时需要向对方发送一个确认,但如果只是单纯的发送一个确认,代价会比较高(20字节的ip首部,20字节的tcp首部),最好能附带响应数据一起发送给对方.所以tcp在何时发送ack给对方有以下规定:")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("当有响应数据要发送时,ack会随响数据立即发送给对方。")])]),v._v(" "),e("li",[e("p",[v._v('如果没有响应数据,ack的发送将会有一个延迟,以等待看是否有响应数据可以一起发送,这称是"Delayed Ack".但这个延迟最多不会超过500ms,一般为200ms.如果在200ms内有数据要发送,那么ack会随数据一起立即发送给对方.注意这里的延迟200ms,不是指的从接受到对方数据到发送ack的最长等待时间差.而是指的内核启动的一个定时器,它每隔200ms就查看下是否有ack要发送。例如:假设定时器在0ms时启动,对方的数据段在 185ms时到达,那么ack最迟会在200ms时发送,而不是385ms时发送.')])]),v._v(" "),e("li",[e("p",[v._v("如果在等待发送ack期间,对方的第二个数据段又到达了,这时要立即发送ack.但是如果对方的三个数据段相继到达,那么第二个数据段到达时ack立即发送,但第三个数据段到达时是否立即发送,则取决于上面两条。")])])]),v._v(" "),e("p",[e("strong",[v._v("累计应答：")])]),v._v(" "),e("p",[v._v("有例如下：")]),v._v(" "),e("p",[v._v("1.Server 发送80个字节 Part1，seq = 1")]),v._v(" "),e("p",[v._v("2.Server 发送120个字节Part2，Seq = 81")]),v._v(" "),e("p",[v._v("3.Server发送160个字节Part3，Seq = 201，此包由于其他原因丢失")]),v._v(" "),e("p",[v._v("4.Client收到前2个报文段，并发送ACK = 201")]),v._v(" "),e("p",[v._v("5.Server发送140个字节Part4， Seq = 361")]),v._v(" "),e("p",[v._v("6.Server收到Client对于前两个报文段的ACK，将2个报文从窗口中移除，窗口有200个字节的余量")]),v._v(" "),e("p",[v._v("7.报文3的重传定时器到期，没有收到ACK，进行重传")]),v._v(" "),e("p",[v._v("8.这个时候Client已经收到报文4，存放在缓冲区中，也不会发送ACK【累计通知，发送ACK就表示3也收到了】，等待报文3，报文3收到之后，一块对3,4进行确认")]),v._v(" "),e("p",[v._v("9.Server收到确认之后，将报文3,4移除窗口，所有数据发送完成")])])}),[],!1,null,null,null);t.default=r.exports}}]);