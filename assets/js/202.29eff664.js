(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{856:function(t,_,s){"use strict";s.r(_);var e=s(15),n=Object(e.a)({},(function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_5-给几千万数据的表字段加索引怎么做"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-给几千万数据的表字段加索引怎么做"}},[t._v("#")]),t._v(" 5.给几千万数据的表字段加索引怎么做？")]),t._v(" "),s("p",[t._v("注意事项：\n首先，应当考虑表空间和磁盘空间是否足够。我们知道索引也是一种数据，在建立索引的时候势必也会占用大量表空间。因此在对一大表建立索引的时候首先应当考虑的是空间容量问题。")]),t._v(" "),s("p",[t._v("其次，在对建立索引的时候要对表进行加锁，因此应当注意操作在业务空闲的时候进行。")]),t._v(" "),s("p",[t._v("二、性能调整方面：\n首当其冲的考虑因素便是磁盘I/O。物理上，应当尽量把索引与数据分散到不同的磁盘上（不考虑阵列的情况）。逻辑上，数据表空间与索引表空间分开。这是在建索引时应当遵守的基本准则。")]),t._v(" "),s("p",[t._v("其次，我们知道，在建立索引的时候要对表进行全表的扫描工作，因此，应当考虑调大初始化参数db_file_multiblock_read_count的值。一般设置为32或更大。")]),t._v(" "),s("p",[t._v("再次，建立索引除了要进行全表扫描外同时还要对数据进行大量的排序操作，因此，应当调整排序区的大小。\n9i之前，可以在session级别上加大sort_area_size的大小，比如设置为100m或者更大。\n9i以后，如果初始化参数workarea_size_policy的值为TRUE，则排序区从pga_aggregate_target里自动分配获得。")]),t._v(" "),s("p",[t._v("最后，建立索引的时候，可以加上nologging选项。以减少在建立索引过程中产生的大量redo，从而提高执行的速度 。")]),t._v(" "),s("p",[s("strong",[t._v("参考：")])]),t._v(" "),s("ul",[s("li",[t._v("https://blog.csdn.net/milunhailili/article/details/1658586")]),t._v(" "),s("li",[t._v("https://zhuanlan.zhihu.com/p/345067506")])]),t._v(" "),s("p",[s("br"),s("br")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("表中存在大量数据，而且正式库的表正在被当前系统所使用，我们不可能停掉服务去修改表，直接使用sql语句向表添加索引会造成数据库卡死。")]),t._v(" "),s("p",[t._v("总体思路就是：\n1先创建临时表t_sys_test_temp\n2向临时表t_sys_test_temp 添加索引\n3将目标表的数据查询出来插入到临时表，再将目标表t_sys_test重命名为temp2,\n将临时表t_sys_test_temp 重命名为结果表t_sys_test\n4删除临时表temp2")])])}),[],!1,null,null,null);_.default=n.exports}}]);