(window.webpackJsonp=window.webpackJsonp||[]).push([[445],{1482:function(v,_,l){"use strict";l.r(_);var i=l(15),p=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"期中测试丨10道高并发系统设计题目自测"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#期中测试丨10道高并发系统设计题目自测"}},[v._v("#")]),v._v(" 期中测试丨10道高并发系统设计题目自测")]),v._v(" "),l("p",[v._v("到目前为止，我们的课程已经更新一半了，你的学习效果如何呢？十分感谢你能在工作之余抽出时间拓展知识面不断学习和了解高并发系统设计的相关知识。那么，为了检验你的学习成果，帮助你加深对课程內容的理解，我策划了这次期中考试题，希望以阶段性考察的方式，用 10 道题目帮你查漏补缺。")]),v._v(" "),l("p",[v._v("题目包括单选题和多选题，内容出自之前的课程，欢迎你参加，自测一下自己对高并发系统设计知识的掌握程度。")]),v._v(" "),l("ol",[l("li",[l("p",[v._v("关于池化技术，以下说法错误的是:")]),v._v(" "),l("ul",[l("li",[v._v("A. 使用线程池应该关注队列中，数据的堆积情况")]),v._v(" "),l("li",[v._v("B. 线程池中应该使用无界队列尽量降低任务丢弃的概率")]),v._v(" "),l("li",[v._v("C. 对于任何类型的系统，我们都可以使用原生的 Java 线程池，来提升任务执行的并发度")]),v._v(" "),l("li",[v._v("D. 可以定时地校验数据库连接池中的连接可用情况")])])]),v._v(" "),l("li",[l("p",[v._v("以下那种场景不适合使用缓存？")]),v._v(" "),l("ul",[l("li",[v._v("A.  社区系统中查询用户信息")]),v._v(" "),l("li",[v._v("B. 电商系统中查询商品信息")]),v._v(" "),l("li",[v._v("C. 社区系统中搜索社区内容信息")]),v._v(" "),l("li",[v._v("D. 网站中查看图片和视频信息")])])]),v._v(" "),l("li",[l("p",[v._v("以下哪种场景可能造成读出数据的错误？")]),v._v(" "),l("ul",[l("li",[v._v("A. 数据写入主库，读取从库")]),v._v(" "),l("li",[v._v("B. 新数据在写入数据库的同时也写入缓存，读取时，优先从缓存读取数据")]),v._v(" "),l("li",[v._v("C. 更新数据库中的数据之后，也更新缓存中的数据")]),v._v(" "),l("li",[v._v("D. 更新数据库中的数据之后，让缓存中的数据过期")])])]),v._v(" "),l("li",[l("p",[v._v("以下关于一致性 Hash 算法的说法，错误的是")]),v._v(" "),l("ul",[l("li",[v._v("A. 一致性 Hash 算法可以避免缓存穿透的发生")]),v._v(" "),l("li",[v._v("B. 一致性 Hash 算法可以减少缓存节点数量变化，导致的数据访问抖动")]),v._v(" "),l("li",[v._v("C. 在缓存节点发生故障时，可以通过增加虚拟节点的方式，将请求尽量平均分配到其它节点上")]),v._v(" "),l("li",[v._v("D. 一致性 Hash 算法可能会产生脏数据")])])]),v._v(" "),l("li",[l("p",[v._v("以下哪些场景不适合于使用 N-SQL 数据库")]),v._v(" "),l("ul",[l("li",[v._v("A. 在一个社区系统中搜索社区中的用户")]),v._v(" "),l("li",[v._v("B. 支付之类的强事务场景")]),v._v(" "),l("li",[v._v("C. 存储电商用户的未读消息数量")]),v._v(" "),l("li",[v._v("D. 存储电商系统中的商品信息")])])]),v._v(" "),l("li",[l("p",[v._v("关于分表策略的选择，以下哪一种是不正确的？")]),v._v(" "),l("ul",[l("li",[v._v("A. 在通过创建时间，查询用户内容列表的场景下，按照创建时间，做区间拆分存储列表数据")]),v._v(" "),l("li",[v._v("B. 查询一个人内容列表场景下，用户内容列表数据，按照用户 D 做 Hash 拆分存储，内容实体数据，按照内容心做 Hash 拆分存储")]),v._v(" "),l("li",[v._v("C. 查询一条内容下的图片信息，按照图片的做 Hash 拆分存储图片信息")]),v._v(" "),l("li",[v._v("D. 按照昵称查询用户，按照昵称 Hash 拆分存储昵称，和之间的关系，再按照用户 1D 做 Hash 拆分存用户信息")])])]),v._v(" "),l("li",[l("p",[v._v("下面解决缓存穿透的方法，哪一种说法是不对的？")]),v._v(" "),l("ul",[l("li",[v._v("A. 大量地请求不存在的用户信息，在这种场景下，可以使用回种空值的方式来解决")]),v._v(" "),l("li",[v._v("B. 使用布隆过滤器时，可以使用多个 Hash 函数，来減少 Hash 冲突的几率")]),v._v(" "),l("li",[v._v("C. 可以通过增加分布式锁的方式，减少缓存穿透造成的，大量请求到数据库的情况")]),v._v(" "),l("li",[v._v("D. 缓存穿透的问题也要结合缓存的原理来分析，比如 Memcached 的 Slab class 满了， Memcached 会剔除数据，也会造成缓存的穿透")])])]),v._v(" "),l("li",[l("p",[v._v("下面关于消息丢失的说法，哪种是错误的？")]),v._v(" "),l("ul",[l("li",[v._v("A. 可以通过配置服务集群的方式，来解决消息丢失的问题")]),v._v(" "),l("li",[v._v("B. 可以在接收到消息后，自动更新消费进度，然后再执行消费处理逻辑")]),v._v(" "),l("li",[v._v("C. 可以配置同步刷盘的方式，减少消息丢失的可能")]),v._v(" "),l("li",[v._v("D. 可以重复发送消息，来减少消息丢失的可能")])])]),v._v(" "),l("li",[l("p",[v._v("关于降低消息延迟的方式，哪种说法是错误的？")]),v._v(" "),l("ul",[l("li",[v._v("A. 你可以增加消费者的数量，来提升存储在 Kafka 中，消息的消费性能")]),v._v(" "),l("li",[v._v("B. 你可以在消费端启动多个线程，来提升消息的消费性能")]),v._v(" "),l("li",[v._v("C. 在存储上使用 Page Cache 异步刷盘，提升写入的性能")]),v._v(" "),l("li",[v._v("D. 使用零拷贝技术，减少数据拷贝的次数提升消息队列的性能")])])]),v._v(" "),l("li",[l("p",[v._v("下面提升系统性能的说法，哪一种是错误的？")]),v._v(" "),l("ul",[l("li",[v._v("A. 数据库分库分表可以減少单表的数据量，能有效地提升数据的查询性能")]),v._v(" "),l("li",[v._v("B. 可以使用本地缓存来提升热点数据的读取性能，本地缓存越大，容纳的热点数据越多，所以应该尽量增加本地缓存的大小")]),v._v(" "),l("li",[v._v("C. CDN 可以让用户就近访问静态资源，避免跨地域的获取资源，对性能的提升比较明显")]),v._v(" "),l("li",[v._v("D. 数据在缓存中要分片存储，分片越多并行度越高，性能越好")])])])]),v._v(" "),l("p",[l("font",{attrs:{size:"5"}},[l("strong",[v._v("笔者答")])])],1),v._v(" "),l("ol",[l("li",[l("p",[v._v("关于池化技术，以下说法错误的是:")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("A. 使用线程池应该关注队列中，数据的堆积情况")])]),v._v(" "),l("li",[l("p",[v._v("B. 线程池中应该使用无界队列尽量降低任务丢弃的概率")]),v._v(" "),l("p",[v._v("首先要考虑的就是队列中数据占用空间，如果是无界的，那么内存是否能撑住？")]),v._v(" "),l("p",[v._v("另外是对于处理时延的问题，能否接受？")])]),v._v(" "),l("li",[l("p",[v._v("C. 对于任何类型的系统，我们都可以使用原生的 Java 线程池，来提升任务执行的并发度")]),v._v(" "),l("p",[v._v("笔者觉得可以，本课程中第 7 章中说，不能使用是因为 JDK 原生线程池使用了队列来暂存，而不是创建更多的线程。这一点好像我不是很认同。明明可以根据 核心和最大数量 来新建线程，并不是需要放到队列中才行。")])]),v._v(" "),l("li",[l("p",[v._v("D. 可以定时地校验数据库连接池中的连接可用情况")])])])]),v._v(" "),l("li",[l("p",[v._v("以下那种场景不适合使用缓存？")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("A.  社区系统中查询用户信息")])]),v._v(" "),l("li",[l("p",[v._v("B. 电商系统中查询商品信息")])]),v._v(" "),l("li",[l("p",[v._v("C. 社区系统中搜索社区内容信息")])]),v._v(" "),l("li",[l("p",[v._v("D. 网站中查看图片和视频信息")]),v._v(" "),l("p",[v._v("如果这里说的缓存是 jvm 缓存或则 redis 这样的缓存，不太适合，适合的是走 CDN 缓存")])])])]),v._v(" "),l("li",[l("p",[v._v("以下哪种场景可能造成读出数据的错误？")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("A. 数据写入主库，读取从库")]),v._v(" "),l("p",[v._v("当主从有时延时，从库可能读取不到最新的数据")])]),v._v(" "),l("li",[l("p",[v._v("B. 新数据在写入数据库的同时也写入缓存，读取时，优先从缓存读取数据")]),v._v(" "),l("p",[v._v("这种方式叫  "),l("strong",[v._v("Cache Aside（旁路缓存）策略")]),v._v("，它的核心问题是：并发时，「写缓存」是一个竞争操作，先后顺序不保证，就有可能旧的数据覆盖了新的数据。")])]),v._v(" "),l("li",[l("p",[v._v("C. 更新数据库中的数据之后，也更新缓存中的数据")]),v._v(" "),l("p",[v._v("严格来说，同样有并发竞争操作问题")])]),v._v(" "),l("li",[l("p",[v._v("D. 更新数据库中的数据之后，让缓存中的数据过期")]),v._v(" "),l("p",[v._v("严格来说，核心问题还是并发竞争操作。")])])])]),v._v(" "),l("li",[l("p",[v._v("以下关于一致性 Hash 算法的说法，错误的是")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("A. 一致性 Hash 算法可以避免缓存穿透的发生")]),v._v(" "),l("p",[v._v("并不能，缓存穿透是查询缓存查询不到，去数据库查询了，一致性 Hash 并不能阻挡不存在的数据去数据库中查询。")])]),v._v(" "),l("li",[l("p",[v._v("B. 一致性 Hash 算法可以减少缓存节点数量变化，导致的数据访问抖动")])]),v._v(" "),l("li",[l("p",[v._v("C. 在缓存节点发生故障时，可以通过增加虚拟节点的方式，将请求尽量平均分配到其它节点上")])]),v._v(" "),l("li",[l("p",[v._v("D. 一致性 Hash 算法可能会产生脏数据")])])])]),v._v(" "),l("li",[l("p",[v._v("以下哪些场景不适合于使用 NO-SQL 数据库")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("A. 在一个社区系统中搜索社区中的用户")])]),v._v(" "),l("li",[l("p",[v._v("B. 支付之类的强事务场景")]),v._v(" "),l("p",[v._v("一般的 NO_SQL 不支持强事物")])]),v._v(" "),l("li",[l("p",[v._v("C. 存储电商用户的未读消息数量")])]),v._v(" "),l("li",[l("p",[v._v("D. 存储电商系统中的商品信息")])])])]),v._v(" "),l("li",[l("p",[v._v("关于分表策略的选择，以下哪一种是不正确的？")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("A. 在通过创建时间，查询用户内容列表的场景下，按照创建时间，做区间拆分存储列表数据")])]),v._v(" "),l("li",[l("p",[v._v("B. 查询一个人内容列表场景下，用户内容列表数据，按照用户 ID 做 Hash 拆分存储，内容实体数据，按照内容做 Hash 拆分存储")]),v._v(" "),l("p",[v._v("主要目的是查询某个用户的内容列表数据，内容做分区键的话，这将会导致查询某个人的内容时去所有分区查询内容")])]),v._v(" "),l("li",[l("p",[v._v("C. 查询一条内容下的图片信息，按照图片的做 Hash 拆分存储图片信息")])]),v._v(" "),l("li",[l("p",[v._v("D. 按照昵称查询用户，按照昵称 Hash 拆分存储昵称，和之间的关系，再按照用户 ID 做 Hash 拆分存用户信息")])])])]),v._v(" "),l("li",[l("p",[v._v("下面解决缓存穿透的方法，哪一种说法是不对的？")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("A. 大量地请求不存在的用户信息，在这种场景下，可以使用回种空值的方式来解决")])]),v._v(" "),l("li",[l("p",[v._v("B. 使用布隆过滤器时，可以使用多个 Hash 函数，来減少 Hash 冲突的几率")]),v._v(" "),l("p",[v._v("hash 值是固定的，无论多少个计算出来的值范围是有限的，那么就减少不了冲突")])]),v._v(" "),l("li",[l("p",[v._v("C. 可以通过增加分布式锁的方式，减少缓存穿透造成的，大量请求到数据库的情况")])]),v._v(" "),l("li",[l("p",[v._v("D. 缓存穿透的问题也要结合缓存的原理来分析，比如 Memcached 的 Slab class 满了， Memcached 会剔除数据，也会造成缓存的穿透")])])])]),v._v(" "),l("li",[l("p",[v._v("下面关于消息丢失的说法，哪种是错误的？")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("A. 可以通过配置服务集群的方式，来解决消息丢失的问题")])]),v._v(" "),l("li",[l("p",[v._v("B. 可以在接收到消息后，自动更新消费进度，然后再执行消费处理逻辑")]),v._v(" "),l("p",[v._v("先更新进度，再处理，如果处理异常，或则掉电，不就会导致这条消息未处理完成，相当于消息丢失了")])]),v._v(" "),l("li",[l("p",[v._v("C. 可以配置同步刷盘的方式，减少消息丢失的可能")])]),v._v(" "),l("li",[l("p",[v._v("D. 可以重复发送消息，来减少消息丢失的可能")])])])]),v._v(" "),l("li",[l("p",[v._v("关于降低消息延迟的方式，哪种说法是错误的？")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("A. 你可以增加消费者的数量，来提升存储在 Kafka 中，消息的消费性能")]),v._v(" "),l("p",[v._v("kafka 的消费模式是一个分区只能一个消费者，所以不能通过此方式来提高消费性能")])]),v._v(" "),l("li",[l("p",[v._v("B. 你可以在消费端启动多个线程，来提升消息的消费性能")])]),v._v(" "),l("li",[l("p",[v._v("C. 在存储上使用 Page Cache 异步刷盘，提升写入的性能")])]),v._v(" "),l("li",[l("p",[v._v("D. 使用零拷贝技术，减少数据拷贝的次数提升消息队列的性能")])])])]),v._v(" "),l("li",[l("p",[v._v("下面提升系统性能的说法，哪一种是错误的？")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("A. 数据库分库分表可以減少单表的数据量，能有效地提升数据的查询性能")])]),v._v(" "),l("li",[l("p",[v._v("B. 可以使用本地缓存来提升热点数据的读取性能，本地缓存越大，容纳的热点数据越多，所以应该尽量增加本地缓存的大小")])]),v._v(" "),l("li",[l("p",[v._v("C. CDN 可以让用户就近访问静态资源，避免跨地域的获取资源，对性能的提升比较明显")])]),v._v(" "),l("li",[l("p",[v._v("D. 数据在缓存中要分片存储，分片越多并行度越高，性能越好")]),v._v(" "),l("p",[v._v("并不是分片越多性能越高，一个分片查询耗时  10 毫秒，分 10 个分片，合并都需要 10 毫秒呢？不能是越多越好")])])])])])])}),[],!1,null,null,null);_.default=p.exports}}]);