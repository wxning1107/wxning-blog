(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{916:function(_,v,s){"use strict";s.r(v);var e=s(15),t=Object(e.a)({},(function(){var _=this,v=_.$createElement,s=_._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[s("h1",{attrs:{id:"如何避免单线程模型的阻塞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何避免单线程模型的阻塞"}},[_._v("#")]),_._v(" 如何避免单线程模型的阻塞？")]),_._v(" "),s("p",[_._v("五个阻塞点：")]),_._v(" "),s("ul",[s("li",[_._v("集合全量查询和聚合操作；")]),_._v(" "),s("li",[_._v("bigkey 删除；")]),_._v(" "),s("li",[_._v("清空数据库；")]),_._v(" "),s("li",[_._v("AOF 日志同步写；")]),_._v(" "),s("li",[_._v("从库加载 RDB 文件。")])]),_._v(" "),s("h1",{attrs:{id:"redis-实例有哪些阻塞点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis-实例有哪些阻塞点"}},[_._v("#")]),_._v(" Redis 实例有哪些阻塞点？")]),_._v(" "),s("ul",[s("li",[_._v("客户端：网络 IO，键值对增删改查操作，数据库操作；")]),_._v(" "),s("li",[_._v("磁盘：生成 RDB 快照，记录 AOF 日志，AOF 日志重写；")]),_._v(" "),s("li",[_._v("主从节点：主库生成、传输 RDB 文件，从库接收 RDB 文件、清空数据库、加载 RDB 文件；")]),_._v(" "),s("li",[_._v("切片集群实例：向其他实例传输哈希槽信息，数据迁移。")])]),_._v(" "),s("h1",{attrs:{id:"_1-和客户端交互时的阻塞点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-和客户端交互时的阻塞点"}},[_._v("#")]),_._v(" 1.和客户端交互时的阻塞点")]),_._v(" "),s("p",[_._v("网络 IO 有时候会比较慢，但是 Redis 使用了 IO 多路复用机制，避免了主线程一直处在等待网络连接或请求到来的状态，所以，网络 IO 不是导致 Redis 阻塞的因素。")]),_._v(" "),s("p",[_._v("键值对的增删改查操作是 Redis 和客户端交互的主要部分，也是 Redis 主线程执行的主要任务。所以，复杂度高的增删改查操作肯定会阻塞 Redis。")]),_._v(" "),s("p",[_._v("那么，怎么判断操作复杂度是不是高呢？这里有一个最基本的标准，就是看操作的复杂度是否为 O(N)。")]),_._v(" "),s("p",[_._v("Redis 中涉及集合的操作复杂度通常为 O(N)。例如集合元素全量查询操作 HGETALL、SMEMBERS，以及集合的聚合统计操作，例如求交、并和差集。这些操作可以作为 "),s("strong",[_._v("Redis 的第一个阻塞点：集合全量查询和聚合操作。")])]),_._v(" "),s("p",[_._v("除此之外，集合自身的删除操作同样也有潜在的阻塞风险。")]),_._v(" "),s("p",[_._v("删除操作的本质是要释放键值对占用的内存空间。释放内存只是第一步，为了更加高效地管理内存空间，在应用程序释放内存时，操作系统需要把释放掉的内存块插入一个空闲内存块的链表，以便后续进行管理和再分配。这个过程本身需要一定时间，而且会阻塞当前释放内存的应用程序，所以，如果一下子释放了大量内存，空闲内存块链表操作时间就会增加，相应地就会造成 Redis 主线程的阻塞。")]),_._v(" "),s("p",[_._v("所以，"),s("strong",[_._v("bigkey(包含了大量元素的集合) 删除操作就是 Redis 的第二个阻塞点。")])]),_._v(" "),s("p",[s("strong",[_._v("自然Redis 的第三个阻塞点：清空数据库。")])]),_._v(" "),s("h1",{attrs:{id:"_2-和磁盘交互时的阻塞点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-和磁盘交互时的阻塞点"}},[_._v("#")]),_._v(" 2.和磁盘交互时的阻塞点")]),_._v(" "),s("p",[_._v("Redis 直接记录 AOF 日志时，会根据不同的写回策略对数据做落盘保存。一个同步写磁盘的操作的耗时大约是 1～2ms，如果有大量的写操作需要记录在 AOF 日志中，并同步写回的话，就会阻塞主线程了。这就得到了 Redis 的"),s("strong",[_._v("第四个阻塞点了：AOF 日志同步写。")])]),_._v(" "),s("h1",{attrs:{id:"_3-主从节点交互时的阻塞点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-主从节点交互时的阻塞点"}},[_._v("#")]),_._v(" 3.主从节点交互时的阻塞点")]),_._v(" "),s("p",[_._v("在主从集群中，主库需要生成 RDB 文件，并传输给从库。主库在复制的过程中，创建和传输 RDB 文件都是由子进程来完成的，不会阻塞主线程。但是，对于从库来说，它在接收了 RDB 文件后，需要使用 FLUSHDB 命令清空当前数据库，这就正好撞上了刚才我们分析的第三个阻塞点。")]),_._v(" "),s("p",[_._v("此外，从库在清空当前数据库后，还需要把 RDB 文件加载到内存，这个过程的快慢和 RDB 文件的大小密切相关，RDB 文件越大，加载过程越慢，所以，"),s("strong",[_._v("加载 RDB 文件就成为了 Redis 的第五个阻塞点。")])]),_._v(" "),s("h1",{attrs:{id:"_4-切片集群实例交互时的阻塞点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-切片集群实例交互时的阻塞点"}},[_._v("#")]),_._v(" 4.切片集群实例交互时的阻塞点")]),_._v(" "),s("p",[_._v("最后，当我们部署 Redis 切片集群时，每个 Redis 实例上分配的哈希槽信息需要在不同实例间进行传递，同时，当需要进行负载均衡或者有实例增删时，数据会在不同的实例间进行迁移。不过，哈希槽的信息量不大，而数据迁移是渐进式执行的，所以，一般来说，这两类操作对 Redis 主线程的阻塞风险不大。")]),_._v(" "),s("p",[_._v("不过，如果你使用了 Redis Cluster 方案，而且同时正好迁移的是 bigkey 的话，就会造成主线程的阻塞，因为 Redis Cluster 使用了同步迁移。")]),_._v(" "),s("h1",{attrs:{id:"哪些阻塞点可以异步执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#哪些阻塞点可以异步执行"}},[_._v("#")]),_._v(" 哪些阻塞点可以异步执行？")]),_._v(" "),s("p",[_._v("对于 Redis 来说，读操作会等待读取的数据返回。而 Redis 的第一个阻塞点“集合全量查询和聚合操作”都涉及到了读操作，所以，它们是不能进行异步操作了。")]),_._v(" "),s("p",[_._v("删除操作并不需要给客户端返回具体的数据结果，。而我们刚才总结的第二个阻塞点“bigkey 删除”，和第三个阻塞点“清空数据库”，都是对数据做删除。因此，我们可以使用后台子线程来异步执行删除操作。")]),_._v(" "),s("p",[_._v("对于第四个阻塞点“AOF 日志同步写”来说，为了保证数据可靠性，Redis 实例需要保证 AOF 日志中的操作记录已经落盘，这个操作虽然需要实例等待，但它并不会返回具体的数据结果给实例。所以，我们也可以启动一个子线程来执行 AOF 日志的同步写，而不用让主线程等待 AOF 日志的写完成。")]),_._v(" "),s("p",[_._v("最后，我们再来看下“从库加载 RDB 文件”这个阻塞点。从库要想对客户端提供数据存取服务，就必须把 RDB 文件加载完成。所以，我们必须让从库的主线程来执行。")]),_._v(" "),s("h1",{attrs:{id:"redis异步的子线程机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis异步的子线程机制"}},[_._v("#")]),_._v(" Redis异步的子线程机制")]),_._v(" "),s("p",[_._v("Redis 主线程启动后，会使用操作系统提供的 pthread_create 函数创建 3 个子线程，分别由它们负责 AOF 日志写操作、键值对删除以及文件关闭的异步执行。主线程通过一个链表形式的任务队列和子线程进行交互。当收到键值对删除和清空数据库的操作时，主线程会把这个操作封装成一个任务，放入到任务队列中，然后给客户端返回一个完成信息，表明删除已经完成。")]),_._v(" "),s("p",[_._v("但实际上，这个时候删除还没有执行，等到后台子线程从任务队列中读取任务后，才开始实际删除键值对，并释放相应的内存空间。因此，我们把这种异步删除也称为惰性删除（lazy free）。此时，删除或清空操作不会阻塞主线程，这就避免了对主线程的性能影响。")]),_._v(" "),s("p",[_._v("和惰性删除类似，当 AOF 日志配置成 everysec 选项后，主线程会把 AOF 写日志操作封装成一个任务，也放到任务队列中。后台子线程读取任务后，开始自行写入 AOF 日志，这样主线程就不用一直等待 AOF 日志写完了。")]),_._v(" "),s("p",[_._v("异步的键值对删除和数据库清空操作是 Redis 4.0 后提供的功能，Redis 也提供了新的命令来执行这两个操作。当你的集合类型中有大量元素（例如有百万级别或千万级别元素）需要删除时，我建议你使用 UNLINK 命令。如果你使用的是 4.0 之前的版本，当你遇到 bigkey 删除时，我给你个小建议：先使用集合类型提供的 SCAN 命令读取数据，然后再进行删除。因为用 SCAN 命令可以每次只读取一部分数据并进行删除，这样可以避免一次性删除大量 key 给主线程带来的阻塞。")]),_._v(" "),s("p",[_._v("总结：")]),_._v(" "),s("p",[_._v("集合全量查询和聚合操作、从库加载 RDB 文件是在关键路径上，无法使用异步操作来完成。")]),_._v(" "),s("p",[_._v("集合全量查询和聚合操作：可以使用 SCAN 命令，分批读取数据，再在客户端进行聚合计算。")]),_._v(" "),s("p",[_._v("从库加载 RDB 文件：把主库的数据量大小控制在 2~4GB 左右，以保证 RDB 文件能以较快的速度加载。")])])}),[],!1,null,null,null);v.default=t.exports}}]);