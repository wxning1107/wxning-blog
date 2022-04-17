(window.webpackJsonp=window.webpackJsonp||[]).push([[410],{1453:function(v,_,t){"use strict";t.r(_);var T=t(15),s=Object(T.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"get-和-post-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-和-post-区别"}},[v._v("#")]),v._v(" GET 和 POST 区别")]),v._v(" "),t("p",[v._v("最本质的区别是：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("GET用于获取指定的资源（幂等）")])]),v._v(" "),t("li",[t("p",[v._v("POST用于创建/更新某个资源 （非幂等）")])])]),v._v(" "),t("p",[v._v("GET 和 POST 只是 HTTP 协议中两种请求方式，而 HTTP 协议是基于 TCP/IP 的应用层协议，无论 GET 还是 POST，用的都是同一个传输层协议，所以在传输上，没有区别。")]),v._v(" "),t("p",[t("font",{attrs:{size:"5"}},[t("strong",[v._v("POST 方法比 GET 方法安全？")])])],1),v._v(" "),t("p",[v._v("按照网上大部分文章的解释，POST 比 GET 安全，因为数据在地址栏上不可见。")]),v._v(" "),t("p",[v._v("然而，从传输的角度来说，他们都是不安全的，因为 HTTP 在网络上是明文传输的，只要在网络节点上捉包，就能完整地获取数据报文。")]),v._v(" "),t("p",[v._v("要想安全传输，就只有加密，也就是 HTTPS。")]),v._v(" "),t("p",[t("font",{attrs:{size:"5"}},[t("strong",[v._v("GET 方法的长度限制是怎么回事？")])])],1),v._v(" "),t("p",[v._v("在网上看到很多关于两者区别的文章都有这一条，提到浏览器地址栏输入的参数是有限的。")]),v._v(" "),t("p",[v._v("首先说明一点，HTTP 协议没有 Body 和 URL 的长度限制，对 URL 限制的大多是浏览器和服务器的原因。")]),v._v(" "),t("p",[v._v("浏览器原因就不说了，服务器是因为处理长 URL 要消耗比较多的资源，为了性能和安全（防止恶意构造长 URL 来攻击）考虑，会给 URL 长度加限制。")]),v._v(" "),t("p",[t("font",{attrs:{size:"5"}},[t("strong",[v._v("POST 方法会产生两个TCP数据包？")])])],1),v._v(" "),t("p",[v._v("有些文章中提到，post 会将 header 和 body 分开发送，先发送 header，服务端返回 100 状态码再发送 body。")]),v._v(" "),t("p",[v._v("HTTP 协议中没有明确说明 POST 会产生两个 TCP 数据包，而且实际测试(Chrome)发现，header 和 body 不会分开发送。")]),v._v(" "),t("p",[v._v("所以，header 和 body 分开发送是部分浏览器或框架的请求方法，不属于 post 必然行为。")]),v._v(" "),t("p",[v._v("另外，w3schools上面的参考答案也是可以酌情说一些的")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("GET在浏览器回退时是无害的，而POST会再次提交请求。")])]),v._v(" "),t("li",[t("p",[v._v("GET请求会被浏览器主动cache，而POST不会，除非手动设置。")])]),v._v(" "),t("li",[t("p",[v._v("GET请求只能进行url编码，而POST支持多种编码方式。")])]),v._v(" "),t("li",[t("p",[v._v("GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。")])]),v._v(" "),t("li",[t("p",[v._v("GET请求在URL中传送的参数是有长度限制的，而POST么有。")])]),v._v(" "),t("li",[t("p",[v._v("对参数的数据类型，GET只接受ASCII字符，而POST没有限制。")])]),v._v(" "),t("li",[t("p",[v._v("GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。")])]),v._v(" "),t("li",[t("p",[v._v("GET参数通过URL传递，POST放在Request body中。")])])]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),t("p",[v._v("GET 和 HEAD 既是安全的也是幂等的，DELETE 可以多次删除同一个资源，效果都是“资源不存在”，所以也是幂等的。PUT 是“替换或更新数据”，多次更新一个资源，资源还是会第一次更新的状态，所以是幂等的。")]),v._v(" "),t("p",[v._v("POST 是“新增或提交数据”，多次提交数据会创建多个资源，所以不是幂等的；")])])])}),[],!1,null,null,null);_.default=s.exports}}]);