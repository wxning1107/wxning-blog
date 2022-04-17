(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1166:function(v,_,t){"use strict";t.r(_);var e=t(15),p=Object(e.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"基于-zookeeper-实现分布式锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于-zookeeper-实现分布式锁"}},[v._v("#")]),v._v(" 基于 Zookeeper 实现分布式锁")]),v._v(" "),e("p",[v._v("Zookeeper是一个开源的分布式协调服务，是一个典型的分布式数据一致性解决方案。分布式应用程序可以基于Zookeeper实现诸如数据发布/订阅，负载均衡，命名服务，分布式协调/通知，集群管理，Master选举，分布式锁和分布式队列等功能。")]),v._v(" "),e("p",[e("font",{attrs:{size:"5"}},[e("strong",[v._v("ZK实现分布式锁的两个重要概念")])])],1),v._v(" "),e("p",[e("strong",[v._v("ZNode节点")])]),v._v(" "),e("p",[v._v("ZK的存储结构类似于Windows的文件系统。区别在于window他的目录是不能存储数据的，只有文件才能存储数据。")]),v._v(" "),e("p",[v._v("但是ZK的所有层级目录，都成为ZNode，他们都是一样的，没有目录和文件这种说法。只有父节点和子节点的概念。")]),v._v(" "),e("p",[v._v("无论是哪个层级的ZNode节点，都是可以存储数据的。")]),v._v(" "),e("p",[v._v("ZNode节点种类：")]),v._v(" "),e("img",{staticStyle:{zoom:"60%"},attrs:{src:t(410),alt:"image-20220417093146236"}}),v._v(" "),e("ul",[e("li",[e("p",[v._v("临时节点")]),v._v(" "),e("p",[v._v("客户端与zookeeper断开连接后，该节点会自动删除")])]),v._v(" "),e("li",[e("p",[v._v("临时有序节点")]),v._v(" "),e("p",[v._v("客户端与zookeeper断开连接后，该节点会自动删除，但是这些节点都是有序排列的。")])]),v._v(" "),e("li",[e("p",[v._v("持久节点")]),v._v(" "),e("p",[v._v("客户端与zookeeper断开连接后，该节点依然存在")])]),v._v(" "),e("li",[e("p",[v._v("持久有序节点")]),v._v(" "),e("p",[v._v("客户端与zookeeper断开连接后，该节点依然存在，但是这些节点都是有序排列的。")])])]),v._v(" "),e("p",[e("strong",[v._v("watch监听机制")])]),v._v(" "),e("p",[v._v("主要是监听以下节点变化信息。")]),v._v(" "),e("img",{staticStyle:{zoom:"60%"},attrs:{src:t(411),alt:"image-20220417093146236"}}),v._v(" "),e("p",[e("font",{attrs:{size:"5"}},[e("strong",[v._v("错误的实现分布式锁方式")])])],1),v._v(" "),e("p",[v._v("多个客户端同时去创建同一个临时节点，哪个客户端第一个创建成功，就成功的获取锁，其他客户端获取失败。")]),v._v(" "),e("p",[e("strong",[v._v("获取锁的流程：")])]),v._v(" "),e("p",[v._v("这里我们使用的是临时节点。")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("四个客户端同时创建一个临时节点。")])]),v._v(" "),e("li",[e("p",[v._v("谁第一个创建成功临时节点，就代表持有了这个锁（这里临时节点就代表锁）。")])]),v._v(" "),e("li",[e("p",[v._v("其他红色的客户端判断已经有人创建成功了，就开始监听这个临时节点的变化。")])])]),v._v(" "),e("img",{staticStyle:{zoom:"60%"},attrs:{src:t(412),alt:"image-20220417093146236"}}),v._v(" "),e("p",[e("strong",[v._v("释放锁的流程：")])]),v._v(" "),e("ul",[e("li",[e("p",[v._v("红色线的客户端执行任务完毕，与zookeeper断开了连接。")])]),v._v(" "),e("li",[e("p",[v._v("这时候临时节点会自动被删除掉，因为他是临时的。")])]),v._v(" "),e("li",[e("p",[v._v("其他绿色线的客户端watch监听到临时节点删除了，就会一拥而上去创建临时节点（也就是创建锁）")])])]),v._v(" "),e("img",{staticStyle:{zoom:"60%"},attrs:{src:t(413),alt:"image-20220417093146236"}}),v._v(" "),e("p",[e("strong",[v._v("存在的问题")])]),v._v(" "),e("p",[v._v("当临时节点被删除的时候，其余3个客户端一拥而上抢着创建节点。3个节点比较少，性能上看不出什么问题。")]),v._v(" "),e("p",[v._v("那如果是一千个客户端在监听节点呢？一旦节点被删除了，会唤醒一千个客户端，一千个客户端同时来创建节点。")]),v._v(" "),e("p",[v._v("但是只有一个客户端能创建成功，却要让一千个客户端来竞争。")]),v._v(" "),e("p",[v._v("对zookeeper的压力会很大，同时浪费这些客户端的线程资源，其中有999个客户端是白跑一趟的。")]),v._v(" "),e("p",[v._v("这就叫做惊群现象，也叫羊群现象。")]),v._v(" "),e("p",[v._v("一个节点释放删除了，却要惊动一千个客户端，这种做法太傻了吧。")]),v._v(" "),e("p",[e("font",{attrs:{size:"5"}},[e("strong",[v._v("正确的实现分布式锁方式")])])],1),v._v(" "),e("p",[v._v("这里用的是顺序临时节点。")]),v._v(" "),e("p",[e("strong",[v._v("锁原理：")])]),v._v(" "),e("p",[v._v("多个客户端来竞争锁，各自创建自己的节点，按照顺序创建，谁排在第一个，谁就成功的获取了锁。")]),v._v(" "),e("p",[e("strong",[v._v("创建锁的过程：")])]),v._v(" "),e("ul",[e("li",[e("p",[v._v("A、B、C、D四个客户端来抢锁")])]),v._v(" "),e("li",[e("p",[v._v("A先来了，他创建了000001的临时顺序节点，他发现自己是最小的节点，那么就成功的获取到了锁")])]),v._v(" "),e("li",[e("p",[v._v("然后B来获取锁，他按照顺序创建了000002的临时顺序节点，发现前面有一个比他小的节点，那么就获取锁失败。他开始监听A客户端，看他什么时候能释放锁")])]),v._v(" "),e("li",[e("p",[v._v("同理C和D。")])])]),v._v(" "),e("img",{staticStyle:{zoom:"60%"},attrs:{src:t(414),alt:"image-20220417093146236"}}),v._v(" "),e("p",[e("strong",[v._v("释放锁的过程：")])]),v._v(" "),e("img",{staticStyle:{zoom:"60%"},attrs:{src:t(415),alt:"image-20220417093146236"}}),v._v(" "),e("ul",[e("li",[e("p",[v._v("A客户端执行完任务后，断开了和zookeeper的会话，这时候临时顺序节点自动删除了，也就释放了锁（如果客户端A崩溃了，则会断开与 Zookeeper 服务端的链接，根据临时节点的特性，相关联的节点会随之自动删除）")])]),v._v(" "),e("li",[e("p",[v._v("B客户端一直在虎视眈眈的watch监听着A，发现他释放了锁，立马就判断自己是不是最小的节点，如果是就获取锁成功")])]),v._v(" "),e("li",[e("p",[v._v("C监听着B，D监听着C。")])])]),v._v(" "),e("p",[v._v("A释放锁会唤醒B，B获取到锁，对C和D是没有影响的，因为B的节点并没有发生变化。")]),v._v(" "),e("p",[v._v("同时B释放锁，唤醒C，C获取锁，对D是没有影响的，因为C的节点没有变化。")]),v._v(" "),e("p",[v._v("同理D。。。。")]),v._v(" "),e("p",[v._v("释放锁的操作，只会唤醒下一个客户端，不会唤醒所有的客户端。所以这种方案不存在惊群现象。")]),v._v(" "),e("p",[v._v("zookeeper实现的锁功能是比较健全的，但是性能上稍微差一些。比如zookeeper要维护集群自身信息的一致性，频繁创建和删除节点等原因。")])])}),[],!1,null,null,null);_.default=p.exports},410:function(v,_,t){v.exports=t.p+"assets/img/image-20220417101139917.e024797c.png"},411:function(v,_,t){v.exports=t.p+"assets/img/image-20220417101336027.c03c5044.png"},412:function(v,_,t){v.exports=t.p+"assets/img/image-20220417101448110.ec0cf205.png"},413:function(v,_,t){v.exports=t.p+"assets/img/image-20220417101555310.0b8fbbcb.png"},414:function(v,_,t){v.exports=t.p+"assets/img/image-20220417101827804.c304b23d.png"},415:function(v,_,t){v.exports=t.p+"assets/img/image-20220417101906926.dbd6264c.png"}}]);