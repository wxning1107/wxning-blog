(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{1015:function(a,t,e){"use strict";e.r(t);var v=e(15),_=Object(v.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[a._v("#")]),a._v(" 索引")]),a._v(" "),e("h1",{attrs:{id:"innodb-的索引模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#innodb-的索引模型"}},[a._v("#")]),a._v(" InnoDB 的索引模型")]),a._v(" "),e("p",[a._v("在 InnoDB 中，表都是根据主键顺序以索引的形式存放的，这种存储方式的表称为索引组织表。")]),a._v(" "),e("p",[a._v("根据叶子节点的内容，索引类型分为主键索引和非主键索引。")]),a._v(" "),e("p",[a._v("主键索引的叶子节点存的是整行数据。在 InnoDB 里，主键索引也被称为聚簇索引（clustered index）。")]),a._v(" "),e("p",[a._v("非主键索引的叶子节点内容是主键的值。在 InnoDB 里，非主键索引也被称为二级索引（secondary index）。")]),a._v(" "),e("h1",{attrs:{id:"索引维护"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引维护"}},[a._v("#")]),a._v(" 索引维护")]),a._v(" "),e("p",[a._v("B+ 树为了维护索引有序性，在插入新值的时候需要做必要的维护。新插入数据时可能会导致挪动后面的数据，而更糟的情况是，如果所在的数据页已经满了，根据 B+ 树的算法，这时候需要申请一个新的数据页，然后挪动部分数据过去。这个过程称为页分裂。当然有分裂就有合并。当相邻两个页由于删除了数据，利用率很低之后，会将数据页做合并。")]),a._v(" "),e("p",[a._v("除了性能外，页分裂操作还影响数据页的利用率。原本放在一个页的数据，现在分到两个页中，整体空间利用率降低大约 50%。")]),a._v(" "),e("h1",{attrs:{id:"为什么推荐使用自增主键"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么推荐使用自增主键"}},[a._v("#")]),a._v(" 为什么推荐使用自增主键？")]),a._v(" "),e("p",[a._v("自增主键的插入数据模式，符合递增插入的场景。每次插入一条新记录，都是追加操作，都不涉及到挪动其他记录，也不会触发叶子节点的分裂。")]),a._v(" "),e("p",[a._v("除了考虑性能外，我们还可以从存储空间的角度来看。假设你的表中确实有一个唯一字段，比如字符串类型的身份证号，那应该用身份证号做主键，还是用自增字段做主键呢？")]),a._v(" "),e("p",[a._v("由于每个非主键索引的叶子节点上都是主键的值。如果用身份证号做主键，那么每个二级索引的叶子节点占用约 20 个字节，而如果用整型做主键，则只要 4 个字节，如果是长整型（bigint）则是 8 个字节。")]),a._v(" "),e("p",[e("strong",[a._v("显然，主键长度越小，普通索引的叶子节点就越小，普通索引占用的空间也就越小。")])]),a._v(" "),e("p",[a._v("所以，从性能和存储空间方面考量，自增主键往往是更合理的选择。")]),a._v(" "),e("p",[a._v("有没有什么场景适合用业务字段直接做主键的呢？还是有的。比如，有些业务的场景需求是这样的：")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("只有一个索引；")])]),a._v(" "),e("li",[e("p",[a._v("该索引必须是唯一索引。")])])]),a._v(" "),e("p",[a._v("你一定看出来了，这就是典型的 KV 场景。")]),a._v(" "),e("p",[a._v("由于没有其他索引，所以也就不用考虑其他索引的叶子节点大小的问题。这时候我们就要优先考虑上一段提到的“尽量使用主键查询”原则，直接将这个索引设置为主键，可以避免每次查询需要搜索两棵树。")]),a._v(" "),e("h1",{attrs:{id:"覆盖索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#覆盖索引"}},[a._v("#")]),a._v(" 覆盖索引")]),a._v(" "),e("p",[a._v("如果执行的语句是 select ID from T where k between 3 and 5，这时只需要查 ID 的值，而 ID 的值已经在 k 索引树上了，因此可以直接提供查询结果，不需要回表。也就是说，在这个查询里面，索引 k 已经“覆盖了”我们的查询需求，我们称为覆盖索引。")]),a._v(" "),e("p",[e("strong",[a._v("由于覆盖索引可以减少树的搜索次数，显著提升查询性能，所以使用覆盖索引是一个常用的性能优化手段。")])]),a._v(" "),e("h1",{attrs:{id:"最左前缀原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最左前缀原则"}},[a._v("#")]),a._v(" 最左前缀原则")]),a._v(" "),e("p",[a._v("B+ 树这种索引结构，可以利用索引的“最左前缀”，来定位记录。不只是索引的全部定义，只要满足最左前缀，就可以利用索引来加速检索。这个最左前缀可以是联合索引的最左 N 个字段，也可以是字符串索引的最左 M 个字符。")]),a._v(" "),e("h1",{attrs:{id:"在建立联合索引的时候-如何安排索引内的字段顺序。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在建立联合索引的时候-如何安排索引内的字段顺序。"}},[a._v("#")]),a._v(" 在建立联合索引的时候，如何安排索引内的字段顺序。")]),a._v(" "),e("p",[a._v("这里我们的评估标准是，索引的复用能力。因为可以支持最左前缀，所以当已经有了 (a,b) 这个联合索引后，一般就不需要单独在 a 上建立索引了。因此，第一原则是，如果通过调整顺序，可以少维护一个索引，那么这个顺序往往就是需要优先考虑采用的。")]),a._v(" "),e("p",[a._v("那么，如果既有联合查询，又有基于 a、b 各自的查询呢？查询条件里面只有 b 的语句，是无法使用 (a,b) 这个联合索引的，这时候你不得不维护另外一个索引，也就是说你需要同时维护 (a,b)、(b) 这两个索引。")]),a._v(" "),e("p",[a._v("这时候，我们要考虑的原则就是空间了。比如 name 字段是比 age 字段大的 ，那我就建议你创建一个（name,age) 的联合索引和一个 (age) 的单字段索引。")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),e("p",[a._v("联合索引与where条件的顺序无关，where a=1 and b=2 和 where b=2 and a=1都会使用（a,b）联合索引。")])]),a._v(" "),e("h1",{attrs:{id:"索引下推"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引下推"}},[a._v("#")]),a._v(" 索引下推")]),a._v(" "),e("p",[a._v("我们以市民表的联合索引（name, age）为例。如果现在有一个需求：检索出表中“名字第一个字是张，而且年龄是 10 岁的所有男孩”。那么，SQL 语句是这么写的：")]),a._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("select * from tuser where name like '张 %' and age=10 and ismale=1;\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("你已经知道了前缀索引规则，所以这个语句在搜索索引树的时候，只能用 “张”，找到第一个满足条件的记录 ID3。当然，这还不错，总比全表扫描要好。")]),a._v(" "),e("p",[a._v("然后呢？")]),a._v(" "),e("p",[a._v("当然是判断其他条件是否满足。")]),a._v(" "),e("p",[a._v("在 MySQL 5.6 之前，只能从 ID3 开始一个个回表。到主键索引上找出数据行，再对比字段值。即，这个过程 InnoDB 并不会去看 age 的值，只是按顺序把“name 第一个字是’张’”的记录一条条取出来回表。")]),a._v(" "),e("p",[a._v("而 MySQL 5.6 引入的索引下推优化（index condition pushdown)， 可以在索引遍历过程中，对索引中包含的字段先做判断，直接过滤掉不满足条件的记录，减少回表次数。InnoDB 在 (name,age) 索引内部就判断了 age 是否等于 10，对于不等于 10 的记录，直接判断并跳过。减少回表次数。")])])}),[],!1,null,null,null);t.default=_.exports}}]);