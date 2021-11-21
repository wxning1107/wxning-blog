(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{348:function(t,s,a){t.exports=a.p+"assets/img/image-20211121095126907.10c2272a.png"},349:function(t,s,a){t.exports=a.p+"assets/img/image-20211121095151139.2740fc83.png"},350:function(t,s,a){t.exports=a.p+"assets/img/image-20211121104430852.fc967db4.png"},706:function(t,s,a){"use strict";a.r(s);var n=a(15),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"grpc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[t._v("#")]),t._v(" GRPC")]),t._v(" "),n("p",[t._v("传统的服务之间通信方式REST需要指定各种规范：")]),t._v(" "),n("ul",[n("li",[t._v("协议(HTTP)")]),t._v(" "),n("li",[t._v("服务器地址(HTTPS://api.test.com)")]),t._v(" "),n("li",[t._v("路径(/api)")]),t._v(" "),n("li",[t._v("参数")]),t._v(" "),n("li",[t._v("数据类型")]),t._v(" "),n("li",[t._v("数据编码(JSON)")]),t._v(" "),n("li",[t._v("安全性(Header with token)")]),t._v(" "),n("li",[t._v("错误处理(HTTP status)")])]),t._v(" "),n("p",[t._v("可以看出来我们发一个请求非常复杂，这些数据一旦出错请求就会失败，GRPC就是解决这个问题的。")]),t._v(" "),n("h2",{attrs:{id:"http1与http2区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http1与http2区别"}},[t._v("#")]),t._v(" HTTP1与HTTP2区别")]),t._v(" "),n("p",[n("img",{attrs:{src:a(348),alt:"img"}})]),t._v(" "),n("p",[t._v("首先HTTP1与HTTP2有相同的协议，包括方法，头部，body，这是他们的相同点。")]),t._v(" "),n("p",[t._v("不同之处在于，HTTP2采用二进制数据传输，传输效率更高。")]),t._v(" "),n("p",[t._v("另外，HTTP2采用流式传输，HTTP1的请求服务器需要把这个请求所有的数据和头部都生成完成然后再返回给客户端，这期间的时间就浪费了。但流式传输就不同了，采用流式传输的服务器生成多少数据就返回给客户端多少数据，服务器一边在生成数据，客户端一边在渲染，这样速度就快很多。")]),t._v(" "),n("p",[t._v("再者，HTTP2采用多路复用机制，HTTP1对没个请求都会创建一个连接，建连接需要TCP三次握手，这是一个耗时的操作，下图是官方的图片，stream1，stream3，stream5是三个请求，这三个请求在共用这个连接。")]),t._v(" "),n("p",[t._v("虽然HTTP1也可以共用连接，但是HTTP1无法复用连接，就像图中的例子，请求1（stream1）在这个连接上发送，请求3（stream3）不能在这个连接上发送，必须等待请求1返回后才能发请求3。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(349),alt:"img"}})]),t._v(" "),n("h2",{attrs:{id:"grpc-特性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#grpc-特性"}},[t._v("#")]),t._v(" GRPC 特性")]),t._v(" "),n("p",[n("img",{attrs:{src:a(350),alt:"img"}})]),t._v(" "),n("ul",[n("li",[n("p",[t._v("GRPC基于HTTP2协议")]),t._v(" "),n("p",[t._v("GRPC调用和参数都是通过HTTP2进行编码")])]),t._v(" "),n("li",[n("p",[t._v("请求方法")]),t._v(" "),n("p",[t._v("GRPC请求方法都是POST")])]),t._v(" "),n("li",[n("p",[t._v("请求路径")]),t._v(" "),n("p",[t._v("请求路径格式是：/service/method，比如说：/TripService/GetTrip，路径的定义规范与HTTP截然不同，这里采用的是动词而非名词。")])]),t._v(" "),n("li",[n("p",[t._v("参数")]),t._v(" "),n("p",[t._v("请求参数还是放在body中")])]),t._v(" "),n("li",[n("p",[t._v("安全性")]),t._v(" "),n("p",[t._v("连接层面的安全性主要靠HTTP2协议，而应用层的安全性比如用户的token放到header中。")])]),t._v(" "),n("li",[n("p",[t._v("数据传输")]),t._v(" "),n("p",[t._v("数据传输采用二进制数据流，真正传输的数据会以二进制的形式放到body中。")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("p",[t._v("HTTP2是二进制传输并不一定说明它的body也是二进制数据，真正传输什么类型的数据是由应用层决定的，HTTP2的二进制传输是指方法，头部等编码是二进制编码，但是真正的body数据有应用层决定，可以理解为给什么传什么，它不会把给的文本转二进制。而GRPC body中的数据存放的是二进制数据。")])])]),t._v(" "),n("li",[n("p",[t._v("二进制数据如何编码")])])]),t._v(" "),n("p",[t._v("GRPC二进制数据如何编码？使用ProtoBuf")]),t._v(" "),n("h2",{attrs:{id:"grpc优点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#grpc优点"}},[t._v("#")]),t._v(" GRPC优点")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("高效数据传输")])]),t._v(" "),n("li",[n("p",[t._v("语言无关的领域模型定义")]),t._v(" "),n("p",[t._v("二进制数据里的字段和值需要一个语言无关的领域模型定义，一个字段是整数，那它到底是32位的还是64位的呢？占用多大空间呢？大端在前还是小端在前呢？这些都是由ProtoBuf统管的。")])])]),t._v(" "),n("p",[t._v("其他领域模型定义DSL/IDL:")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Thrift")]),t._v(" "),n("p",[t._v("facebook推出的二进制传输数据框架")])]),t._v(" "),n("li",[n("p",[t._v("Swagger")]),t._v(" "),n("p",[t._v("使用YAML描述REST API，相当于对JSON数据结构进行了规定")])]),t._v(" "),n("li",[n("p",[t._v("Goa")]),t._v(" "),n("p",[t._v("使用Go语言描述，通过Goa工具生成真正可以运行的代码，可以生成其他语言的代码，甚至可以生成Swagger和GRPC")])])]),t._v(" "),n("h2",{attrs:{id:"protobuf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#protobuf"}},[t._v("#")]),t._v(" ProtoBuf")]),t._v(" "),n("p",[t._v("我们定义一个message，并且给字段加上编号，字段名最好表义清楚，例如下面的 duration_sec 和 fee_cent：")]),t._v(" "),n("div",{staticClass:"language-protobuf line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-protobuf"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("message")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Trip")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" start "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" end "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v(" duration_sec "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义变量时最好说明类型，这里duration就是second")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v(" fee_cent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("定义生成文件路径，位置是 coolcar/proto/gen/go，包的名字叫 trippb：")]),t._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("option "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("go_package")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"coolcar/proto/gen/go;trippb"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("通过命令生成 Go 代码：")]),t._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("protoc -I"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(". --go_out"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("paths"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("source_relative:gen/go trip.proto\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("生成 Go 语言的 Trip 结构体：")]),t._v(" "),n("div",{staticClass:"language-protobuf line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-protobuf"}},[n("code",[t._v("type Trip struct "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tStart                "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("   `protobuf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bytes,1,opt,name=start,proto3"')]),t._v(" json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start,omitempty"')]),t._v("`\n\tEnd                  "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("   `protobuf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bytes,2,opt,name=end,proto3"')]),t._v(" json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"end,omitempty"')]),t._v("`\n\tDurationSec          "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v("    `protobuf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"varint,3,opt,name=duration_sec,json=durationSec,proto3"')]),t._v(" json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"duration_sec,omitempty"')]),t._v("`\n\tFeeCent              "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v("    `protobuf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"varint,4,opt,name=fee_cent,json=feeCent,proto3"')]),t._v(" json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fee_cent,omitempty"')]),t._v("`\n\tXXX_NoUnkeyedLiteral struct"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" `json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),t._v("`\n\tXXX_unrecognized     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("byte   `json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),t._v("`\n\tXXX_sizecache        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int32")]),t._v("    `json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),t._v("`\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])]),n("p",[t._v("对这个结构体转换为二进制流，下面相当于模拟了客户端和服务器对二进制流的处理，服务器将 message 编码为二进制流（即：0a03616263120364656618901c20904e）发到网络上，客户端拿到二进制流解码为 ProtoBuf 的 message：")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("trip "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" trippb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Trip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tStart"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("       "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tEnd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("         "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"def"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tDurationSec"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tFeeCent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("trip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// start:"abc" end:"def" duration_sec:3600 fee_cent:10000 ')]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 序列化二进制流")]),t._v("\n\tb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" proto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Marshal")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("trip"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%x\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0a03616263120364656618901c20904e")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将二进制流转换为message")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" trip2 trippb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Trip\n\t"),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" proto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Unmarshal")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("trip2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("trip2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// start:"abc" end:"def" duration_sec:3600 fee_cent:10000 ')]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br")])]),n("p",[t._v("当然我们也可以编码成 json 格式数据：")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Marshal")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("trip2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// {"start":"abc","end":"def","duration_sec":3600,"fee_cent":10000}')]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);