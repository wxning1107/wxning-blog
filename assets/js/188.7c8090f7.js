(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{833:function(e,t,s){"use strict";s.r(t);var i=s(15),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"redis-分片集群是怎样的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-分片集群是怎样的"}},[e._v("#")]),e._v(" Redis 分片集群是怎样的？")]),e._v(" "),s("p",[e._v("Redis Cluster 方案采用哈希槽， 来处理数据和实例之间的映射关系。在 Redis Cluster 方案中，一个切片集群共有 16384 个哈希槽，这些哈希槽类似于数据分区，每个键值对都会根据它的 key，被映射到一个哈希槽中。")]),e._v(" "),s("p",[e._v("具体的映射过程分为两大步:首先根据键值对的 key，按照CRC16 算法计算一个 16 bit 的值;然后，再用这个 16bit 值对 16384 取模，得到 0~16383 范围内的模数，每个模数代表一个相应编号的哈希槽")]),e._v(" "),s("p",[e._v("如果集群中有 N 个实例，那么，每个实例上的槽个数为 16384/N 个。")]),e._v(" "),s("p",[e._v("在集群中，实例和哈希槽的对应关系并不是一成不变的，最常见的变化有两个:")]),e._v(" "),s("ul",[s("li",[e._v("在集群中，实例有新增或删除，Redis 需要重新分配哈希槽;")]),e._v(" "),s("li",[e._v("为了负载均衡，Redis 需要把哈希槽在所有实例上重新分布一遍。")])]),e._v(" "),s("p",[e._v("此时，实例之间还可以通过相互传递消息，获得最新的哈希槽分配信息，但是，客户端是无法主动感知这些变化的。Redis Cluster 方案提供了一种重定向机制，所谓的“重定向”，就是指，客户端给一个实 例发送数据读写操作时，这个实例上并没有相应的数据，客户端要再给一个新实例发送操 作命令。")])])}),[],!1,null,null,null);t.default=r.exports}}]);