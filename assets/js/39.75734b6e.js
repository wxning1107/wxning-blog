(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{470:function(s,t,e){s.exports=e.p+"assets/img/image-20220312100818964.fcf5fb74.png"},471:function(s,t,e){s.exports=e.p+"assets/img/image-20220312101025015.28e11a2a.png"},472:function(s,t,e){s.exports=e.p+"assets/img/image-20220314154811173.e2b69358.png"},930:function(s,t,e){"use strict";e.r(t);var a=e(15),v=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"如何用redis实现分布式锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何用redis实现分布式锁"}},[s._v("#")]),s._v(" 如何用Redis实现分布式锁?")]),s._v(" "),a("p",[s._v("设计原则：")]),s._v(" "),a("p",[s._v("分布式锁同样可以用一个变量来实现。客户端加锁和释放锁的操作逻辑，也和单机上的加锁和释放锁操作逻辑一致:加锁时同样需要判断锁变量的值，根据锁变量值来判断能否加锁成功;释放锁时需要把锁变量值设置为 0，表明客户端不再持有锁。")]),s._v(" "),a("p",[s._v("但是，和线程在单机上操作锁不同的是，在分布式场景下，锁变量需要由一个共享存储系统来维护，只有这样，多个客户端才可以通过访问共享存储系统来访问锁变量。相应的， 加锁和释放锁的操作就变成了读取、判断和设置共享存储系统中的锁变量值。")]),s._v(" "),a("h1",{attrs:{id:"基于单个-redis-节点实现分布式锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于单个-redis-节点实现分布式锁"}},[s._v("#")]),s._v(" 基于单个 Redis 节点实现分布式锁")]),s._v(" "),a("p",[a("img",{attrs:{src:e(470),alt:"img"}})]),s._v(" "),a("p",[s._v("可以看到，Redis 可以使用一个键值对 lock_key:0 来保存锁变量，其中，键是 lock_key， 也是锁变量的名称，锁变量的初始值是 0。")]),s._v(" "),a("p",[s._v("客户端 A 和 C 同时请求加锁。因为 Redis 使用单线程处理请求，所以，即使客户 端 A 和 C 同时把加锁请求发给了 Redis，Redis 也会串行处理它们的请求。")]),s._v(" "),a("p",[a("img",{attrs:{src:e(471),alt:"img"}})]),s._v(" "),a("p",[s._v("因为加锁包含了三个操作(读取锁变量、判断锁变量值以及把锁变量值设置为 1)，而这 三个操作在执行时需要保证原子性。那怎么保证原子性呢?")]),s._v(" "),a("p",[s._v("我们就可以用 SETNX 和 DEL 命令组合来实现加锁和释放锁操作。SETNX 命令用于设置键值对的值。具体来说，就是这个命令在执行时会判断键值对是否存在，如果不存在，就设置键值对的值，如果存在，就不做任何设置。对于释放锁操作来说，我们可以在执行完业务逻辑后，使用 DEL 命令删除锁变量。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" // 加锁\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" SETNX lock_key "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" // 业务逻辑\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" DO THINGS\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" // 释放锁\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" DEL lock_key\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("存在两个潜在的风险:")]),s._v(" "),a("p",[s._v("第一个风险是，假如某个客户端在执行了 SETNX 命令、加锁之后，紧接着却在操作共享数 据时发生了异常，结果一直没有执行最后的 DEL 命令释放锁。因此，锁就一直被这个客户 端持有，其它客户端无法拿到锁。针对这个问题，一个有效的解决方法是，给锁变量设置一个过期时间。")]),s._v(" "),a("p",[s._v("第二个风险是如果客户端 A 执行了 SETNX 命令加锁后，假设客户端 B 执行了 DEL 命令释放锁，此时，客户端 A 的锁就被误释放了。如果客户端 C 正好也在申请加锁，就可以成功获得锁，进而开始操作共享数据。这样一来，客户端 A 和 C 同时在对共享数据进行操作，数据就会被修改错误，这也是业务层不能接受的。为了应对这个问题，我们需要能区分来自不同客户端的锁操作。")]),s._v(" "),a("p",[s._v("在使用 SETNX 命令进行加锁的方法中，我们通过把锁变量值设置为 1 或 0，表示是否加锁 成功。1 和 0 只有两种状态，无法表示究竟是哪个客户端进行的锁操作。所以，"),a("strong",[s._v("我们在加锁操作时，可以让每个客户端给锁变量设置一个唯一值，这里的唯一值就可以用来标识当前操作的客户端。在释放锁操作时，客户端需要判断，当前锁变量的值是否和自己的唯一标识相等，只有在相等的情况下，才能释放锁。这样一来，就不会出现误释放锁的问题了。")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("举例")]),s._v(" "),a("p",[s._v("上面这种场景举例：比如客户端 A 拿到了锁，但是还未执行完自己的逻辑就已经达到了锁过期时间，这时 Redis 会将锁自动删除，此时，其他客户端就可以获取锁了，而等到客户端 A 执行完自己逻辑后删除锁时，实际上删除的是其他人的锁，而不是自己当初申请的锁。所以在高并发场景下需要给每个客户端增加一个 uuid 似的唯一标识，在删除锁时需要判断当前的 value 是否等于该 uuid，只有相等时才可以删除。")])]),s._v(" "),a("p",[a("img",{attrs:{src:e(472),alt:"img"}})]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("锁超时时间如何设置")]),s._v(" "),a("p",[a("strong",[s._v("可以先给锁超时时间设置为 t ms，然后开协程开启一个定时器 timer，这个定时器每隔 t/3 时间就判断当前客户端的锁是否存在，如果存在就重置锁的超时时间为 t。")])])]),s._v(" "),a("p",[s._v("这里，我们现在只用了一个 Redis 实例来保存锁变量，如果这个 Redis 实例发生故障宕机了，那么锁变量就没有了。此时，客户端也无法进行锁操作了，这就会影响到业务的正常执行。这就需要基于多个 Redis 节点实现分布式锁的方式了。")]),s._v(" "),a("h1",{attrs:{id:"基于多个-redis-节点实现高可靠的分布式锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于多个-redis-节点实现高可靠的分布式锁"}},[s._v("#")]),s._v(" 基于多个 Redis 节点实现高可靠的分布式锁")]),s._v(" "),a("p",[s._v("为了避免 Redis 实例故障而导致的锁无法工作的问题，Redis 的开发者 Antirez 提出了"),a("strong",[s._v("分布式锁算法 Redlock。")])]),s._v(" "),a("p",[s._v("Redlock 算法的基本思路，是让客户端和多个独立的 Redis 实例依次请求加锁，如果客户 端能够和半数以上的实例成功地完成加锁操作，那么我们就认为，客户端成功地获得分布 式锁了，否则加锁失败。这样一来，即使有单个 Redis 实例发生故障，因为锁变量在其它 实例上也有保存，所以，客户端仍然可以正常地进行锁操作，锁变量并不会丢失。")]),s._v(" "),a("p",[a("strong",[s._v("第一步是，客户端获取当前时间。")])]),s._v(" "),a("p",[a("strong",[s._v("第二步是，客户端按顺序依次向 N 个 Redis 实例执行加锁操作。")])]),s._v(" "),a("p",[s._v("这里的加锁操作和在单实例上执行的加锁操作一样，使用 SET 命令，带上 NX，EX/PX 选 项，以及带上客户端的唯一标识。当然，如果某个 Redis 实例发生故障了，为了保证在这 种情况下，Redlock 算法能够继续运行，我们需要给加锁操作设置一个超时时间。")]),s._v(" "),a("p",[s._v("如果客户端在和一个 Redis 实例请求加锁时，一直到超时都没有成功，那么此时，客户端 会和下一个 Redis 实例继续请求加锁。加锁操作的超时时间需要远远地小于锁的有效时 间，一般也就是设置为几十毫秒。")]),s._v(" "),a("p",[a("strong",[s._v("第三步是，一旦客户端完成了和所有 Redis 实例的加锁操作，客户端就要计算整个加锁过 程的总耗时。")])]),s._v(" "),a("p",[s._v("客户端只有在满足下面的这两个条件时，才能认为是加锁成功。")]),s._v(" "),a("ul",[a("li",[s._v("条件一:客户端从超过半数(大于等于 N/2+1)的 Redis 实例上成功获取到了锁;")]),s._v(" "),a("li",[s._v("条件二:客户端获取锁的总耗时没有超过锁的有效时间。")])]),s._v(" "),a("p",[s._v("在满足了这两个条件后，我们需要重新计算这把锁的有效时间，计算的结果是锁的最初有效时间减去客户端为获取锁的总耗时。如果锁的有效时间已经来不及完成共享数据的操作\n了，我们可以释放锁，以免出现还没完成数据操作，锁就过期了的情况。")]),s._v(" "),a("p",[s._v("当然，如果客户端在和所有实例执行完加锁操作后，没能同时满足这两个条件，那么，客户端向所有 Redis 节点发起释放锁的操作。")]),s._v(" "),a("p",[s._v("在 Redlock 算法中，释放锁的操作和在单实例上释放锁的操作一样，只要执行释放锁的 Lua 脚本就可以了。这样一来，只要 N 个 Redis 实例中的半数以上实例能正常工作，就能保证分布式锁的正常工作了。")]),s._v(" "),a("p",[s._v("由于 Redlock 需要多个实例加锁，所以性能稍微差一点。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("一般不使用 Redlock，而是使用 Zookeeper 实现分布式锁。")])])])}),[],!1,null,null,null);t.default=v.exports}}]);