(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1176:function(t,a,s){"use strict";s.r(a);var v=s(15),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[t._v("#")]),t._v(" 索引")]),t._v(" "),v("h1",{attrs:{id:"innodb-的索引模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#innodb-的索引模型"}},[t._v("#")]),t._v(" InnoDB 的索引模型")]),t._v(" "),v("p",[t._v("在 InnoDB 中，表都是根据主键顺序以索引的形式存放的，这种存储方式的表称为索引组织表。")]),t._v(" "),v("p",[t._v("根据叶子节点的内容，索引类型分为主键索引和非主键索引。")]),t._v(" "),v("p",[t._v("主键索引的叶子节点存的是整行数据。在 InnoDB 里，主键索引也被称为聚簇索引（clustered index）。")]),t._v(" "),v("p",[t._v("非主键索引的叶子节点内容是主键的值。在 InnoDB 里，非主键索引也被称为二级索引（secondary index）。")]),t._v(" "),v("h1",{attrs:{id:"索引维护"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引维护"}},[t._v("#")]),t._v(" 索引维护")]),t._v(" "),v("p",[t._v("B+ 树为了维护索引有序性，在插入新值的时候需要做必要的维护。新插入数据时可能会导致挪动后面的数据，而更糟的情况是，如果所在的数据页已经满了，根据 B+ 树的算法，这时候需要申请一个新的数据页，然后挪动部分数据过去。这个过程称为页分裂。当然有分裂就有合并。当相邻两个页由于删除了数据，利用率很低之后，会将数据页做合并。")]),t._v(" "),v("p",[t._v("除了性能外，页分裂操作还影响数据页的利用率。原本放在一个页的数据，现在分到两个页中，整体空间利用率降低大约 50%。")]),t._v(" "),v("h1",{attrs:{id:"为什么推荐使用自增主键"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么推荐使用自增主键"}},[t._v("#")]),t._v(" 为什么推荐使用自增主键？")]),t._v(" "),v("p",[t._v("自增主键的插入数据模式，符合递增插入的场景。每次插入一条新记录，都是追加操作，都不涉及到挪动其他记录，也不会触发叶子节点的分裂。")]),t._v(" "),v("p",[t._v("除了考虑性能外，我们还可以从存储空间的角度来看。假设你的表中确实有一个唯一字段，比如字符串类型的身份证号，那应该用身份证号做主键，还是用自增字段做主键呢？")]),t._v(" "),v("p",[t._v("由于每个非主键索引的叶子节点上都是主键的值。如果用身份证号做主键，那么每个二级索引的叶子节点占用约 20 个字节，而如果用整型做主键，则只要 4 个字节，如果是长整型（bigint）则是 8 个字节。")]),t._v(" "),v("p",[v("strong",[t._v("显然，主键长度越小，普通索引的叶子节点就越小，普通索引占用的空间也就越小。")])]),t._v(" "),v("p",[t._v("所以，从性能和存储空间方面考量，自增主键往往是更合理的选择。")]),t._v(" "),v("p",[t._v("有没有什么场景适合用业务字段直接做主键的呢？还是有的。比如，有些业务的场景需求是这样的：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("只有一个索引；")])]),t._v(" "),v("li",[v("p",[t._v("该索引必须是唯一索引。")])])]),t._v(" "),v("p",[t._v("你一定看出来了，这就是典型的 KV 场景。")]),t._v(" "),v("p",[t._v("由于没有其他索引，所以也就不用考虑其他索引的叶子节点大小的问题。这时候我们就要优先考虑上一段提到的“尽量使用主键查询”原则，直接将这个索引设置为主键，可以避免每次查询需要搜索两棵树。")]),t._v(" "),v("h1",{attrs:{id:"覆盖索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#覆盖索引"}},[t._v("#")]),t._v(" 覆盖索引")]),t._v(" "),v("p",[t._v("如果执行的语句是 select ID from T where k between 3 and 5，这时只需要查 ID 的值，而 ID 的值已经在 k 索引树上了，因此可以直接提供查询结果，不需要回表。也就是说，在这个查询里面，索引 k 已经“覆盖了”我们的查询需求，我们称为覆盖索引。")]),t._v(" "),v("p",[v("strong",[t._v("由于覆盖索引可以减少树的搜索次数，显著提升查询性能，所以使用覆盖索引是一个常用的性能优化手段。")])]),t._v(" "),v("h1",{attrs:{id:"最左前缀原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#最左前缀原则"}},[t._v("#")]),t._v(" 最左前缀原则")]),t._v(" "),v("p",[t._v("B+ 树这种索引结构，可以利用索引的“最左前缀”，来定位记录。不只是索引的全部定义，只要满足最左前缀，就可以利用索引来加速检索。这个最左前缀可以是联合索引的最左 N 个字段，也可以是字符串索引的最左 M 个字符。")]),t._v(" "),v("h1",{attrs:{id:"在建立联合索引的时候-如何安排索引内的字段顺序。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#在建立联合索引的时候-如何安排索引内的字段顺序。"}},[t._v("#")]),t._v(" 在建立联合索引的时候，如何安排索引内的字段顺序。")]),t._v(" "),v("p",[t._v("这里我们的评估标准是，索引的复用能力。因为可以支持最左前缀，所以当已经有了 (a,b) 这个联合索引后，一般就不需要单独在 a 上建立索引了。因此，第一原则是，如果通过调整顺序，可以少维护一个索引，那么这个顺序往往就是需要优先考虑采用的。")]),t._v(" "),v("p",[t._v("那么，如果既有联合查询，又有基于 a、b 各自的查询呢？查询条件里面只有 b 的语句，是无法使用 (a,b) 这个联合索引的，这时候你不得不维护另外一个索引，也就是说你需要同时维护 (a,b)、(b) 这两个索引。")]),t._v(" "),v("p",[t._v("这时候，我们要考虑的原则就是空间了。比如 name 字段是比 age 字段大的 ，那我就建议你创建一个（name,age) 的联合索引和一个 (age) 的单字段索引。")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("联合索引与where条件的顺序无关，where a=1 and b=2 和 where b=2 and a=1都会使用（a,b）联合索引。")])]),t._v(" "),v("h1",{attrs:{id:"索引下推"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引下推"}},[t._v("#")]),t._v(" 索引下推")]),t._v(" "),v("p",[t._v("我们以市民表的联合索引（name, age）为例。如果现在有一个需求：检索出表中“名字第一个字是张，而且年龄是 10 岁的所有男孩”。那么，SQL 语句是这么写的：")]),t._v(" "),v("div",{staticClass:"language-mysql line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("select * from tuser where name like '张 %' and age=10 and ismale=1;\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[t._v("你已经知道了前缀索引规则，所以这个语句在搜索索引树的时候，只能用 “张”，找到第一个满足条件的记录 ID3。当然，这还不错，总比全表扫描要好。")]),t._v(" "),v("p",[t._v("然后呢？")]),t._v(" "),v("p",[t._v("当然是判断其他条件是否满足。")]),t._v(" "),v("p",[t._v("在 MySQL 5.6 之前，只能从 ID3 开始一个个回表。到主键索引上找出数据行，再对比字段值。即，这个过程 InnoDB 并不会去看 age 的值，只是按顺序把“name 第一个字是’张’”的记录一条条取出来回表。")]),t._v(" "),v("p",[t._v("而 MySQL 5.6 引入的索引下推优化（index condition pushdown)， 可以在索引遍历过程中，对索引中包含的字段先做判断，直接过滤掉不满足条件的记录，减少回表次数。InnoDB 在 (name,age) 索引内部就判断了 age 是否等于 10，对于不等于 10 的记录，直接判断并跳过。减少回表次数。")]),t._v(" "),v("h1",{attrs:{id:"索引失效场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引失效场景"}},[t._v("#")]),t._v(" 索引失效场景")]),t._v(" "),v("p",[v("font",{attrs:{size:"5"}},[v("strong",[t._v("条件字段函数操作")])])],1),t._v(" "),v("p",[t._v("例如：统计发生在所有年份中 7 月份的交易记录总数")]),t._v(" "),v("div",{staticClass:"language-mysql line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("mysql> select count(*) from tradelog where month(t_modified)=7;\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[v("font",{attrs:{size:"5"}},[v("strong",[t._v("隐式类型转换")])])],1),t._v(" "),v("p",[t._v("tradeid 的字段类型是 varchar(32)，而输入的参数却是整型，所以需要做类型转换:")]),t._v(" "),v("div",{staticClass:"language-mysql line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("mysql> select * from tradelog where tradeid=110717;\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[v("font",{attrs:{size:"5"}},[v("strong",[t._v("隐式字符编码转换")])])],1),t._v(" "),v("p",[t._v("utf8mb4 与 utf8 字符集转换")]),t._v(" "),v("p",[v("font",{attrs:{size:"5"}},[v("strong",[t._v("其他索引失效场景")])])],1),t._v(" "),v("p",[v("img",{attrs:{src:s(507),alt:"img"}})]),t._v(" "),v("h1",{attrs:{id:"什么时候不适合建索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么时候不适合建索引"}},[t._v("#")]),t._v(" 什么时候不适合建索引?")]),t._v(" "),v("p",[v("strong",[t._v("哪些情况下不适合建索引?")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("经常增删改的表的字段不适合建立索引")])]),t._v(" "),v("li",[v("p",[t._v("表记录太少")])]),t._v(" "),v("li",[v("p",[t._v("where条件中用不到的字段不适合建立索引")])]),t._v(" "),v("li",[v("p",[t._v("表数据可以确定比较少的不需要建索引")])]),t._v(" "),v("li",[v("p",[t._v("数据重复且发布比较均匀的的字段不适合建索引（唯一性太差的字段不适合建立索引），例如性别，真假值")])]),t._v(" "),v("li",[v("p",[t._v("参与列计算的列不适合建索引")])])]),t._v(" "),v("p",[v("br"),v("br")]),t._v(" "),v("p",[v("strong",[t._v("哪些情况下适合建索引?")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("主键自动建立唯一索引。")])]),t._v(" "),v("li",[v("p",[t._v("频繁作为where条件语句查询的字段")])]),t._v(" "),v("li",[v("p",[t._v("关联字段需要建立索引，例如外键字段，student表中的classid,   classes表中的schoolid 等")])]),t._v(" "),v("li",[v("p",[t._v("排序字段可以建立索引")])]),t._v(" "),v("li",[v("p",[t._v("分组字段可以建立索引，因为分组的前提是排序")])]),t._v(" "),v("li",[v("p",[t._v("统计字段可以建立索引，例如count(),max()")])])]),t._v(" "),v("h1",{attrs:{id:"聚簇索引和非聚簇索引区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#聚簇索引和非聚簇索引区别"}},[t._v("#")]),t._v(" 聚簇索引和非聚簇索引区别?")]),t._v(" "),v("p",[t._v("聚簇索引是将数据存储与索引放到了一起，非聚簇索引是将数据与索引分开存储，MyIsam 的B+树的叶子节点记录的是真实数据的存储地址。")]),t._v(" "),v("p",[v("img",{attrs:{src:s(508),alt:"img"}})]),t._v(" "),v("p",[v("img",{attrs:{src:s(509),alt:"img"}})]),t._v(" "),v("p",[v("strong",[t._v("参考：")]),t._v(" https://cloud.tencent.com/developer/article/1541265")]),t._v(" "),v("h1",{attrs:{id:"索引为什么不使用其他数据结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引为什么不使用其他数据结构"}},[t._v("#")]),t._v(" 索引为什么不使用其他数据结构？")]),t._v(" "),v("p",[v("strong",[t._v("哈希表这种结构适用于只有等值查询的场景")]),t._v("，比如 Memcached 及其他一些 NoSQL 引擎。哈希表不适用于区间查询。")]),t._v(" "),v("p",[t._v("虽然"),v("strong",[t._v("有序数组在等值查询和范围查询场景中的性能就都非常优秀")]),t._v("，但是在需要更新数据的时候就麻烦了，你往中间插入一个记录就必须得挪动后面所有的记录，成本太高。所以，"),v("strong",[t._v("有序数组索引只适用于静态存储引擎")]),t._v("，比如你要保存的是 2017 年某个城市的所有人口信息，这类不会再修改的数据。")]),t._v(" "),v("p",[t._v("二叉树会随着数据的增加树高越来越高，查询效率也越来越低。而且范围查询效率也很低，需要回旋查找。")]),t._v(" "),v("p",[t._v("同样b树虽然解决了二叉树树高越来越高的问题，但是在返回查找时还是需要回旋查找。")]),t._v(" "),v("p",[t._v("以 InnoDB 的一个整数字段索引为例，这个 N 叉树的 N 差不多是 1200。这棵树高是 4 的时候，就可以存 1200 的 3 次方个值，这已经 17 亿了。考虑到树根的数据块总是在内存中的，一个 10 亿行的表上一个整数字段的索引，查找一个值最多只需要访问 3 次磁盘。")]),t._v(" "),v("p",[v("img",{attrs:{src:s(510),alt:"img"}})]),t._v(" "),v("p",[t._v("b+树叶子结点有指针相连接，范围查找直接通过指针找到下一个元素，叶子结点已经排好序了。")]),t._v(" "),v("p",[v("img",{attrs:{src:s(511),alt:"img"}})]),t._v(" "),v("p",[t._v("B+树与B树的不同：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("B+树非叶子节点不存在数据只存索引，B树非叶子节点存储数据")])]),t._v(" "),v("li",[v("p",[t._v("B+树查询效率更高。B+树使用双向链表串连所有叶子节点，区间查询效率更高（因为所有数据都在B+树的叶子节点，扫描数据库 只需扫一遍叶子结点就行了），但是B树则需要通过中序遍历才能完成查询范围的查找。")])]),t._v(" "),v("li",[v("p",[t._v("B+树查询效率更稳定。B+树每次都必须查询到叶子节点才能找到数据，而B树查询的数据可能不在叶子节点，也可能在，这样就会造成查询的效率的不稳定")])]),t._v(" "),v("li",[v("p",[t._v("B+树的磁盘读写代价更小。B+树的内部节点并没有指向关键字具体信息的指针，因此其内部节点相对B树更小，通常B+树矮更胖，高度小查询产生的I/O更少。")])])]),t._v(" "),v("p",[v("strong",[t._v("参考：")]),t._v(" https://www.bilibili.com/video/BV1t5411u7Fg?p=2")])])}),[],!1,null,null,null);a.default=_.exports},507:function(t,a,s){t.exports=s.p+"assets/img/image-20220313201542668.a145215b.png"},508:function(t,a,s){t.exports=s.p+"assets/img/image-20220227130938278.5b772f2c.png"},509:function(t,a,s){t.exports=s.p+"assets/img/image-20220227130954259.1cd269f7.png"},510:function(t,a,s){t.exports=s.p+"assets/img/image-20220227112218602.7609c2d9.png"},511:function(t,a,s){t.exports=s.p+"assets/img/image-20220227112246500.fef4fef9.png"}}]);