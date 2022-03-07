(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1005:function(v,_,e){"use strict";e.r(_);var t=e(15),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"分层架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分层架构"}},[v._v("#")]),v._v(" 分层架构")]),v._v(" "),t("h2",{attrs:{id:"常见分层架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见分层架构"}},[v._v("#")]),v._v(" 常见分层架构")]),v._v(" "),t("p",[v._v("架构分层：")]),v._v(" "),t("p",[v._v("MVC架构，它将整体的系统分成了 Model（模型），View（视图）和 Controller（控制器）三个层次，也就是将用户视图和业务处理隔离开，并且通过控制器连接起来，很好地实现了 "),t("strong",[v._v("表现和逻辑的解耦")]),v._v("，是一种标准的软件分层架构。")]),v._v(" "),t("p",[t("img",{attrs:{src:e(704),alt:"img"}})]),v._v(" "),t("p",[v._v("另外一种常见的分层方式是将整体架构分为表现层、逻辑层和数据访问层：")]),v._v(" "),t("ul",[t("li",[v._v("表现层，顾名思义嘛，就是展示数据结果和接受用户指令的，是最靠近用户的一层；")]),v._v(" "),t("li",[v._v("逻辑层里面有复杂业务的具体实现；")]),v._v(" "),t("li",[v._v("数据访问层则是主要处理和存储之间的交互。")])]),v._v(" "),t("p",[v._v("这是在架构上最简单的一种分层方式。比如在构建项目的时候，我们通常会建立三个目录：Web、Service 和 Dao，它们分别对应了表现层、逻辑层还有数据访问层。")]),v._v(" "),t("p",[v._v("参照阿里发布的"),t("a",{attrs:{href:"https://yq.aliyun.com/articles/69327",target:"_blank",rel:"noopener noreferrer"}},[v._v("《阿里巴巴 Java 开发手册 v1.4.0（详尽版）》 (opens new window)"),t("OutboundLink")],1),v._v("，我们可以将原先的三层架构细化成下面的样子：")]),v._v(" "),t("p",[t("img",{attrs:{src:e(705),alt:"img"}})]),v._v(" "),t("p",[v._v("解释如下：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("终端显示层：")]),v._v(" "),t("p",[v._v("各端模板渲染并执行显示的层。当前主要是 Velocity 渲染，JS 渲染， JSP 渲染，移动端展示等。")])]),v._v(" "),t("li",[t("p",[v._v("开放接口层：")]),v._v(" "),t("p",[v._v("将 Service 层方法封装成开放接口，同时进行网关安全控制和流量控制等。")])]),v._v(" "),t("li",[t("p",[v._v("Web 层：")]),v._v(" "),t("p",[v._v("主要是对访问控制进行转发，各类基本参数校验，或者不复用的业务简单处理等。")])]),v._v(" "),t("li",[t("p",[v._v("Service 层：业务逻辑层。")])]),v._v(" "),t("li",[t("p",[v._v("Manager 层：")]),v._v(" "),t("p",[v._v("通用业务处理层。这一层主要有两个作用：")]),v._v(" "),t("ul",[t("li",[v._v("其一，你可以将原先 Service 层的一些通用能力下沉到这一层，比如 "),t("strong",[v._v("与缓存和存储交互策略")]),v._v("，中间件的接入；")]),v._v(" "),t("li",[v._v("其二，你也可以在这一层 "),t("strong",[v._v("封装对第三方接口的调用，比如调用支付服务，调用审核服务等")]),v._v("。")])])]),v._v(" "),t("li",[t("p",[v._v("DAO 层：")]),v._v(" "),t("p",[v._v("数据访问层，与底层 MySQL、Oracle、Hbase 等进行数据交互。")])]),v._v(" "),t("li",[t("p",[v._v("外部接口或第三方平台：")]),v._v(" "),t("p",[v._v("包括其它部门 RPC 开放接口，基础平台，其它公司的 HTTP 接口。")])])]),v._v(" "),t("p",[v._v("在这个分层架构中 "),t("strong",[v._v("主要增加了 Manager 层")]),v._v("，它与 Service 层的关系是："),t("strong",[v._v("Manager 层提供原子的服务接口，Service 层负责依据业务逻辑来编排原子接口")]),v._v("。举例来说，Manager 层提供 "),t("strong",[v._v("创建用户")]),v._v(" 和 "),t("strong",[v._v("获取用户信息")]),v._v(" 的接口，而 Service 层负责将这两个接口组装起来。这样就把原先散布在表现层的业务逻辑都统一到了 Service 层，每一层的边界就非常清晰了。")]),v._v(" "),t("p",[t("strong",[v._v("层次之间一定是相邻层互相依赖")]),v._v("，"),t("strong",[v._v("数据的流转也只能在相邻的两层之间流转")]),v._v("。")]),v._v(" "),t("h2",{attrs:{id:"分层优缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分层优缺点"}},[v._v("#")]),v._v(" 分层优缺点")]),v._v(" "),t("p",[v._v("分层的好处：")]),v._v(" "),t("ul",[t("li",[v._v("分层的设计可以简化系统设计，让不同的人专注做某一层次的事情")]),v._v(" "),t("li",[v._v("分层之后可以做到很高的复用")]),v._v(" "),t("li",[v._v("分层架构可以让我们更容易做横向扩展")])]),v._v(" "),t("p",[v._v("分层的缺点：")]),v._v(" "),t("ul",[t("li",[v._v("增加了代码的复杂度")]),v._v(" "),t("li",[v._v("多层的架构在性能上会有损耗，多一跳")])])])}),[],!1,null,null,null);_.default=r.exports},704:function(v,_,e){v.exports=e.p+"assets/img/image-20211022132136068.ca5235cc.png"},705:function(v,_,e){v.exports=e.p+"assets/img/image-20211022132433073.4a7815f3.png"}}]);