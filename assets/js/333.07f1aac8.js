(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{1285:function(r,t,e){"use strict";e.r(t);var _=e(15),l=Object(_.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"mysql你是怎么性能优化的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql你是怎么性能优化的"}},[r._v("#")]),r._v(" MySQL你是怎么性能优化的？")]),r._v(" "),e("p",[r._v("可以分为4个部分：")]),r._v(" "),e("ul",[e("li",[e("p",[r._v("硬件和操作系统层面优化")])]),r._v(" "),e("li",[e("p",[r._v("架构设计层面优化")])]),r._v(" "),e("li",[e("p",[r._v("MySQL程序配置优化")])]),r._v(" "),e("li",[e("p",[r._v("SQL执行优化")])])]),r._v(" "),e("p",[e("font",{attrs:{size:"5"}},[e("strong",[r._v("硬件和操作系统层面优化")])])],1),r._v(" "),e("p",[r._v("从硬件层面看，影响MySQL性能的因素主要是cpu、可用内存大小、磁盘读写速度、网络带宽。")]),r._v(" "),e("p",[r._v("从操作系统层面看，应用文件句柄数，操作系统的网络配置。")]),r._v(" "),e("p",[r._v("这部分优化一般由dba或者运维来完成，在硬件基础资源优化中我们应该重点关注服务本身承载的体量，然后提出合理的指标要求，避免出现资源浪费的现象")]),r._v(" "),e("p",[e("font",{attrs:{size:"5"}},[e("strong",[r._v("架构设计层面优化")])])],1),r._v(" "),e("p",[r._v("MySQL是一个磁盘IO访问非常频繁的数据库，在高并发和高性能的场景中，我们优化角度可以分为以下几个部分：")]),r._v(" "),e("ul",[e("li",[e("p",[r._v("搭建主从集群，保证服务高可用")])]),r._v(" "),e("li",[e("p",[r._v("读写分离，在读多写少的场景下可以避免读写冲突导致性能问题")])]),r._v(" "),e("li",[e("p",[r._v("分库分表，通过分库可以降低单个节点的IO压力，通过分表可以降低单表数据量，从而提升sql查询效率")])]),r._v(" "),e("li",[e("p",[r._v("针对热点数据，可以引入更为高效的数据库，比如redis、mongoDB，他们可以缓解mysql的访问压力，同时提升数据的检索性能")])])]),r._v(" "),e("p",[e("font",{attrs:{size:"5"}},[e("strong",[r._v("MySQL程序配置优化")])])],1),r._v(" "),e("p",[r._v("通过my.cnf配置文件完成，比如mysql 5.7版本默认最大链接数是151个，这个值可以在my.cnf中修改。第二，binlog日志默认不开启，可以修改开启。第三，缓存池bufferpool默认大小配置")]),r._v(" "),e("p",[e("font",{attrs:{size:"5"}},[e("strong",[r._v("SQL执行优化")])])],1),r._v(" "),e("ul",[e("li",[e("p",[r._v("第一，慢sql的定位和排查，我们可以通过慢查询日志和慢查询日志工具分析得到有问题的sql。")])]),r._v(" "),e("li",[e("p",[r._v("第二，执行计划分析，针对慢的sql使用关键字 explain 查看执行计划，可以重点关注type、key、rows等字段，从而定位执行慢的原因")])]),r._v(" "),e("li",[e("p",[r._v("第三，使用show profile工具，它是mysql提供的可以用来分析当前会话中sql语句资源消耗情况的工具，可以用于sql调优的测量，会保留最近15次运行结果，针对运行慢的sql可以得到执行过程中所有资源开销的情况，比如io开销、cpu开销、内存开销等。可以关注是否创建临时表（一般在group by中出现）和锁情况。")])])]),r._v(" "),e("hr"),r._v(" "),e("p",[r._v("关于sql优化有一个案例，来自ali玄惭慢SQL优化挑战赛中实现从190ms到2ms的优化。文章："),e("a",{attrs:{href:"https://developer.aliyun.com/article/183749",target:"_blank",rel:"noopener noreferrer"}},[r._v("阿里云慢SQL优化挑战大赛分析"),e("OutboundLink")],1),r._v(" ，视频讲解："),e("a",{attrs:{href:"https://www.bilibili.com/video/BV1QA411F7tJ/?spm_id_from=333.788",target:"_blank",rel:"noopener noreferrer"}},[r._v("190毫秒干到2毫秒！？2017阿里云SQL优化挑战赛实战分享"),e("OutboundLink")],1)]),r._v(" "),e("p",[r._v("还有一个涉及分页查询的优化案例："),e("a",{attrs:{href:"https://www.bilibili.com/video/BV1PL411g7Vj/?spm_id_from=333.788",target:"_blank",rel:"noopener noreferrer"}},[r._v("从76237到753毫秒,海量数据大页码MySQL查询该如何优化？"),e("OutboundLink")],1)]),r._v(" "),e("p",[r._v("针对MySQL执行计划优化案例："),e("a",{attrs:{href:"https://www.bilibili.com/video/BV1zL4y1p7dM/?spm_id_from=333.788",target:"_blank",rel:"noopener noreferrer"}},[r._v("看不懂MySQL执行计划谈什么SQL优化，几个实例带你整明白"),e("OutboundLink")],1),r._v(" 和 "),e("a",{attrs:{href:"https://www.bilibili.com/video/BV15U4y1T774/?spm_id_from=333.788",target:"_blank",rel:"noopener noreferrer"}},[r._v("MySQL多表关联执行计划"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=l.exports}}]);