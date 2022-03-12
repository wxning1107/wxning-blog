(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{859:function(s,t,_){"use strict";_.r(t);var e=_(15),v=Object(e.a)({},(function(){var s=this,t=s.$createElement,_=s._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[_("h1",{attrs:{id:"如何避免-redis-单线程模型阻塞"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何避免-redis-单线程模型阻塞"}},[s._v("#")]),s._v(" 如何避免 Redis 单线程模型阻塞?")]),s._v(" "),_("h1",{attrs:{id:"_1-和客户端交互时的阻塞点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-和客户端交互时的阻塞点"}},[s._v("#")]),s._v(" 1.和客户端交互时的阻塞点")]),s._v(" "),_("p",[s._v("Redis 中涉及集合的操作复杂度通常为 O(N)，我们要在使用时重视起来。例如集合元素全 量查询操作 HGETALL、SMEMBERS，以及集合的聚合统计操作，例如求交、并和差集。 "),_("strong",[s._v("这些操作可以作为 Redis 的第一个阻塞点:集合全量查询和聚合操作。")])]),s._v(" "),_("p",[s._v("除此之外，集合自身的删除操作同样也有潜在的阻塞风险。删除操作的本质是要释放键值对占用的内存空间。为了更加高效地管理内存空间，在应用程序释放内存时，操作系统需要把释放掉的内存块插入一个空闲内存块的链表，以便后续进行管理和再分配。这个过程本身需要一定时间，而且会阻塞当前释放内存的应用程序，所以，如果一下子释放了大量内存，空闲内存块链表操作时间就会增加，相应地就会造成 Redis 主线程的阻塞。")]),s._v(" "),_("p",[s._v("那么，什么时候会释放大量内存呢?其实就是在删除大量键值对数据的时候，最典型的就 是删除包含了大量元素的集合，也称为 bigkey 删除。"),_("strong",[s._v("bigkey 删除操作就是 Redis 的第二个阻塞点。")])]),s._v(" "),_("p",[s._v("既然频繁删除键值对都是潜在的阻塞点了,"),_("strong",[s._v("Redis 的第三个阻塞点:清空数据库。")])]),s._v(" "),_("h1",{attrs:{id:"_2-和磁盘交互时的阻塞点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-和磁盘交互时的阻塞点"}},[s._v("#")]),s._v(" 2.和磁盘交互时的阻塞点")]),s._v(" "),_("p",[s._v("Redis 进一步设计为采 用子进程的方式生成 RDB 快照文件，以及执行 AOF 日志重写操作。这样一来，这两个操作由子进程负责执行，慢速的磁盘 IO 就不会阻塞主线程了。但是，Redis 直接记录 AOF 日志时，会根据不同的写回策略对数据做落盘保存。一个同步 写磁盘的操作的耗时大约是 1~2ms，如果有大量的写操作需要记录在 AOF 日志中，并同 步写回的话，就会阻塞主线程了。"),_("strong",[s._v("这就得到了 Redis 的第四个阻塞点了:AOF 日志同步写。")])]),s._v(" "),_("h1",{attrs:{id:"_3-主从节点交互时的阻塞点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-主从节点交互时的阻塞点"}},[s._v("#")]),s._v(" 3.主从节点交互时的阻塞点")]),s._v(" "),_("p",[s._v("在主从集群中，主库需要生成 RDB 文件，并传输给从库。主库在复制的过程中，创建和传 输 RDB 文件都是由子进程来完成的，不会阻塞主线程。但是，对于从库来说，它在接收了 RDB 文件后，需要使用 FLUSHDB 命令清空当前数据库，这就正好撞上了刚才我们分析的 第三个阻塞点。")]),s._v(" "),_("p",[s._v("此外，从库在清空当前数据库后，还需要把 RDB 文件加载到内存，这个过程的快慢和 RDB 文件的大小密切相关，RDB 文件越大，加载过程越慢，所以，"),_("strong",[s._v("加载 RDB 文件就成为 了 Redis 的第五个阻塞点。")])]),s._v(" "),_("h1",{attrs:{id:"异步的子线程机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#异步的子线程机制"}},[s._v("#")]),s._v(" 异步的子线程机制")]),s._v(" "),_("p",[_("strong",[s._v("除了“集合全量查询和聚合操作”和“从库加载 RDB 文 件”，其他三个阻塞点涉及的操作都不在关键路径上，所以，我们可以使用 Redis 的异步子线程机制来实现 bigkey 删除，清空数据库，以及 AOF 日志同步写。")])]),s._v(" "),_("p",[s._v("Redis 主线程启动后，会使用操作系统提供的 pthread_create 函数创建 3 个子线程，分别 由它们负责 AOF 日志写操作、键值对删除以及文件关闭的异步执行。")]),s._v(" "),_("p",[s._v("主线程通过一个链表形式的任务队列和子线程进行交互。当收到键值对删除和清空数据库的操作时，主线程会把这个操作封装成一个任务，放入到任务队列中，然后给客户端返回一个完成信息，表明删除已经完成。")]),s._v(" "),_("p",[s._v("但实际上，这个时候删除还没有执行，等到后台子线程从任务队列中读取任务后，才开始实际删除键值对，并释放相应的内存空间。因此，我们把这种异步删除也称为惰性删除 (lazy free)。此时，删除或清空操作不会阻塞主线程，这就避免了对主线程的性能影 响。")]),s._v(" "),_("p",[s._v("和惰性删除类似，当 AOF 日志配置成 everysec 选项后，主线程会把 AOF 写日志操作封 装成一个任务，也放到任务队列中。后台子线程读取任务后，开始自行写入 AOF 日志，这 样主线程就不用一直等待 AOF 日志写完了。")]),s._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),_("p",[s._v("异步的键值对删除和数据库清空操作是 Redis 4.0 后提供 的功能。使用 UNLINK 命令删除。")])]),s._v(" "),_("h1",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),_("p",[s._v("bigkey 删除、清空数据库、AOF 日志同步写不属于关键路径操作，可以使用异步子线程机制来完成。Redis 在运行时会创建三个子线程，主线程会通过一个任务队列和三个子线程进行交互。子线程会根据任务的具体类型，来执行相应的异步操作。")]),s._v(" "),_("p",[s._v("不过，异步删除操作是 Redis 4.0 以后才有的功能，如果你使用的是 4.0 之前的版本，当 你遇到 bigkey 删除时，我给你个小建议:先使用集合类型提供的 SCAN 命令读取数据， 然后再进行删除。因为用 SCAN 命令可以每次只读取一部分数据并进行删除，这样可以避 免一次性删除大量 key 给主线程带来的阻塞。")]),s._v(" "),_("p",[s._v("最后，我想再提一下，集合全量查询和聚合操作、从库加载 RDB 文件是在关键路径上，无法使用异步操作来完成。对于这两个阻塞点，我也给你两个小建议。")]),s._v(" "),_("ul",[_("li",[_("strong",[s._v("集合全量查询和聚合操作：可以使用 SCAN 命令，分批读取数据，再在客户端进行聚合计算;")])]),s._v(" "),_("li",[s._v("从库加载 RDB 文件：把主库的数据量大小控制在 2~4GB 左右，以保证 RDB 文件能以较快的速度加载。")])])])}),[],!1,null,null,null);t.default=v.exports}}]);