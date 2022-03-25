(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{498:function(o,e,r){o.exports=r.p+"assets/img/image-20220312165456595.73619e2b.png"},499:function(o,e,r){o.exports=r.p+"assets/img/image-20220312165925076.387068e1.png"},998:function(o,e,r){"use strict";r.r(e);var t=r(15),n=Object(t.a)({},(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[t("h1",{attrs:{id:"redo-log日志和binlog日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redo-log日志和binlog日志"}},[o._v("#")]),o._v(" redo log日志和binlog日志")]),o._v(" "),t("h1",{attrs:{id:"redo-log-日志模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redo-log-日志模块"}},[o._v("#")]),o._v(" redo log 日志模块")]),o._v(" "),t("p",[o._v("MySQL采用的 WAL 技术全称是 Write-Ahead Logging，它的关键点就是先写日志，再写磁盘。")]),o._v(" "),t("p",[o._v("具体来说，当有一条记录需要更新的时候，InnoDB 引擎就会先把记录写到 redo log 里面，并更新内存，这个时候更新就算完成了。同时，InnoDB 引擎会在适当的时候，将这个操作记录更新到磁盘里面，而这个更新往往是在系统比较空闲的时候做。")]),o._v(" "),t("p",[o._v("InnoDB 的 redo log 是固定大小的，比如可以配置为一组 4 个文件，每个文件的大小是 1GB，那么总共就可以记录 4GB 的操作。从头开始写，写到末尾就又回到开头循环写。")]),o._v(" "),t("p",[t("img",{attrs:{src:r(498),alt:"img"}})]),o._v(" "),t("p",[o._v("write pos 是当前记录的位置，一边写一边后移，写到第 3 号文件末尾后就回到 0 号文件开头。checkpoint 是当前要擦除的位置，也是往后推移并且循环的，擦除记录前要把记录更新到数据文件。")]),o._v(" "),t("p",[o._v("write pos 和 checkpoint 之间还空着的部分，可以用来记录新的操作。如果 write pos 追上 checkpoint，表示“粉板”满了，这时候不能再执行新的更新，得停下来先擦掉一些记录，把 checkpoint 推进一下。")]),o._v(" "),t("p",[o._v("有了 redo log，InnoDB 就可以保证即使数据库发生异常重启，之前提交的记录都不会丢失，这个能力称为crash-safe。")]),o._v(" "),t("h1",{attrs:{id:"binlog-日志模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binlog-日志模块"}},[o._v("#")]),o._v(" binlog 日志模块")]),o._v(" "),t("p",[o._v("redo log 是 InnoDB 引擎特有的日志，而 Server 层也有自己的日志，称为 binlog（归档日志）。")]),o._v(" "),t("p",[o._v("这两种日志有以下三点不同。")]),o._v(" "),t("ul",[t("li",[t("p",[o._v("redo log 是 InnoDB 引擎特有的；binlog 是 MySQL 的 Server 层实现的，所有引擎都可以使用。")])]),o._v(" "),t("li",[t("p",[o._v("redo log 是物理日志，记录的是“在某个数据页上做了什么修改”；binlog 是逻辑日志，记录的是这个语句的原始逻辑，比如“给 ID=2 这一行的 c 字段加 1 ”。")])]),o._v(" "),t("li",[t("p",[o._v("redo log 是循环写的，空间固定会用完；binlog 是可以追加写入的。“追加写”是指 binlog 文件写到一定大小后会切换到下一个，并不会覆盖以前的日志。")])])]),o._v(" "),t("p",[o._v("我们再来看执行器和 InnoDB 引擎在执行这个简单的 update 语句时的内部流程。")]),o._v(" "),t("p",[o._v("1.执行器先找引擎取 ID=2 这一行。ID 是主键，引擎直接用树搜索找到这一行。如果 ID=2 这一行所在的数据页本来就在内存中，就直接返回给执行器；否则，需要先从磁盘读入内存，然后再返回。")]),o._v(" "),t("p",[o._v("2.执行器拿到引擎给的行数据，把这个值加上 1，比如原来是 N，现在就是 N+1，得到新的一行数据，再调用引擎接口写入这行新数据。")]),o._v(" "),t("p",[o._v("3.引擎将这行新数据更新到内存中，同时将这个更新操作记录到 redo log 里面，此时 redo log 处于 prepare 状态。然后告知执行器执行完成了，随时可以提交事务。")]),o._v(" "),t("p",[o._v("4.执行器生成这个操作的 binlog，并把 binlog 写入磁盘。")]),o._v(" "),t("p",[o._v("5.执行器调用引擎的提交事务接口，引擎把刚刚写入的 redo log 改成提交（commit）状态，更新完成。")]),o._v(" "),t("p",[t("img",{attrs:{src:r(499),alt:"img"}})]),o._v(" "),t("p",[o._v('最后三步看上去有点“绕”，将 redo log 的写入拆成了两个步骤：prepare 和 commit，这就是"两阶段提交"。')]),o._v(" "),t("p",[o._v("为什么必须有“两阶段提交”呢？这是为了让两份日志之间的逻辑一致。")])])}),[],!1,null,null,null);e.default=n.exports}}]);