(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{1009:function(t,v,_){"use strict";_.r(v);var e=_(15),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"数据库中的acid分别是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据库中的acid分别是什么"}},[t._v("#")]),t._v(" 数据库中的ACID分别是什么？")]),t._v(" "),_("p",[t._v("用银行数据库来举例子解释一下这四个特性")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("原子性： 一个事务可能会包含多种操作，比如转账操作包括从你的账户上扣钱和对方账户加钱。虽然内部有多步操作，但是外部看来它们是一个整体，要么都成功执行，要么都不要执行。否则事务进行到一半出现问题，就可能会出现你的账户扣了钱，但是对方账户没有收到钱的问题")])]),t._v(" "),_("li",[_("p",[t._v("一致性：事务必须使整个系统状态保持一致，比如你和对方来回转账，不管转了多少次，你们两个账户总金额总是一样的，不会出现你转出1000，对方只收到500的情况")])]),t._v(" "),_("li",[_("p",[t._v("隔离性：多个事务同时执行时，必须等前一个事务执行完，才能执行后一个事务，否则会造成数据紊乱。比如你账户有1000元，你给A转账500元。事务进行到一半，也就是把500元从你的账户扣除，但是此时该事务还没有提交，B又向你转账1000元。此时第二个事务查询你的账户仍是1000元，并以这个数据进行后续操作。结果就是第一个事务执行完，你的账户变为500元，然后第二个事务执行完，你的账户变为2000元。银行亏大了。所以正确的做法是第二个事务等待第一个事务执行完，再读取你的账户数据就是正确的500元了。当然数据库中不可能所有事务都是这么串联的，否则效率太低，会通过不同级别的锁来控制事务的隔离性。")])]),t._v(" "),_("li",[_("p",[t._v("持久性：事务运行的结果对系统状态的影响必然是持久的，否则服务器一重启，数据全恢复前一天的记录，银行就甭干了")])])]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("原子性，是指一个事务操作不可分割，要么成功，要么失败，不能有一半成功一半失败的情况。")]),t._v(" "),_("p",[t._v("一致性，是指这些数据在事务执行完成这个时间点之前，读到的一定是更新前的数据，之后读到的一定是更新后的数据，不应该存在一个时刻，让用户读到更新过程中的数据。")]),t._v(" "),_("p",[t._v("隔离性，是指一个事务的执行不能被其他事务干扰。即一个事务内部的操作及使用的数据对正在进行的其他事务是隔离的，并发执行的各个事务之间不能互相干扰，这个有点儿像我们打网游中的副本，我们在副本中打的怪和掉的装备，与其他副本没有任何关联也不会互相影响。")]),t._v(" "),_("p",[t._v("持久性，是指一个事务一旦完成提交，后续的其他操作和故障都不会对事务的结果产生任何影响。")]),t._v(" "),_("p",[t._v("来源：消息队列高手课")])])}),[],!1,null,null,null);v.default=a.exports}}]);