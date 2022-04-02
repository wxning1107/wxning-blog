(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{1107:function(t,r,v){"use strict";v.r(r);var _=v(15),a=Object(_.a)({},(function(){var t=this,r=t.$createElement,_=t._self._c||r;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"rpc和grpc实现原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rpc和grpc实现原理"}},[t._v("#")]),t._v(" rpc和grpc实现原理")]),t._v(" "),_("h1",{attrs:{id:"什么是rpc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是rpc"}},[t._v("#")]),t._v(" 什么是rpc？")]),t._v(" "),_("p",[t._v("我理解的 RPC 是帮助我们屏蔽网络编程细节，实现调用远程方法就跟调用本地(同一个项 目中的方法)一样的体验，我们不需要因为这个方法是远程调用就需要编写很多与业务无关的代码。")]),t._v(" "),_("p",[t._v("所以我认为，RPC 的作用就是体现在这样两个方面:")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("屏蔽远程调用跟本地调用的区别，让我们感觉就是调用项目内的方法;")])]),t._v(" "),_("li",[_("p",[t._v("隐藏底层网络通信的复杂性，让我们更专注于业务逻辑。")])])]),t._v(" "),_("h1",{attrs:{id:"rpc通信流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rpc通信流程"}},[t._v("#")]),t._v(" rpc通信流程")]),t._v(" "),_("p",[t._v("RPC 一般默认采用 TCP 来传输。")]),t._v(" "),_("p",[t._v("网络传输的数据必须是二进制数据，但调用方请求的出入参数都是对象。对象是肯定没法直接在网络中传输的，需要提前把它转成可传输的二进制，并且要求转换算法是可逆的，这个过程我们一般叫做“序列化”。")]),t._v(" "),_("p",[t._v("调用方持续地把请求参数序列化成二进制后，经过 TCP 传输给了服务提供方。服务提供方从 TCP 通道里面收到二进制数据。那如何知道一个请求的数据到哪里结束，是一个什么类型的请求呢? 我们把数据格式的约定内容叫做“协议”。大多数的协议会分成两部分，分别是数据头和消息体。数据头一般用于身份识别，包括协议标识、数据大小、请求类型、序列化类型等信息;消息体主要是请求的业务参数信息和扩展属性等。")]),t._v(" "),_("p",[t._v("根据协议格式，服务提供方就可以正确地从二进制数据中分割出不同的请求来，同时根据请求类型和序列化类型，把二进制的消息体逆向还原成请求对象。这个过程叫作“反序列化”。")]),t._v(" "),_("p",[t._v("服务提供方再根据反序列化出来的请求对象找到对应的实现类，完成真正的方法调用，然后把执行结果序列化后，回写到对应的 TCP 通道里面。调用方获取到应答的数据包后，再反序列化成应答对象，这样调用方就完成了一次 RPC 调用。")]),t._v(" "),_("p",[_("img",{attrs:{src:v(400),alt:"img"}})]),t._v(" "),_("h1",{attrs:{id:"json、protobuf序列化优缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#json、protobuf序列化优缺点"}},[t._v("#")]),t._v(" JSON、Protobuf序列化优缺点")]),t._v(" "),_("p",[t._v("Protobuf优点：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("序列化后体积相比 JSON、Hessian 小很多;")])]),t._v(" "),_("li",[_("p",[t._v("IDL 能清晰地描述语义，所以足以帮助并保证应用程序之间的类型不会丢失，无需类似 XML 解析器;")])]),t._v(" "),_("li",[_("p",[t._v("序列化反序列化速度很快，不需要通过反射获取类型;")])]),t._v(" "),_("li",[_("p",[t._v("消息格式升级和兼容性不错，可以做到向后兼容。")])])]),t._v(" "),_("p",[t._v("JSON缺点：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("JSON 进行序列化的额外空间开销比较大，对于大数据量服务这意味着需要巨大的内存 和磁盘开销;")])]),t._v(" "),_("li",[_("p",[t._v("JSON 没有类型，但像 Java 这种强类型语言，需要通过反射统一解决，所以性能不会太好。")])])])])}),[],!1,null,null,null);r.default=a.exports},400:function(t,r,v){t.exports=v.p+"assets/img/image-20220322160846536.9f0f5cab.png"}}]);