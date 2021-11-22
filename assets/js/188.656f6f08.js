(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{826:function(t,e,s){"use strict";s.r(e);var n=s(15),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"并行查找"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并行查找"}},[t._v("#")]),t._v(" 并行查找")]),t._v(" "),s("p",[t._v("我们知道，散列表是一种非常适合快速查找的数据结构。")]),t._v(" "),s("p",[t._v("如果我们是给动态数据构建索引，在数据不断加入的时候，散列表的装载因子就会越来越大。为了保证散列表性能不下降，我们就需要对散列表进行动态扩容。对如此大的散列表进行动态扩容，一方面比较耗时，另一方面比较消耗内存。比如，我们给一个 2GB 大小的散列表进行扩容，扩展到原来的 1.5 倍，也就是 3GB 大小。这个时候，实际存储在散列表中的数据只有不到 2GB，所以内存的利用率只有 60%，有 1GB 的内存是空闲的。")]),t._v(" "),s("p",[t._v("实际上，我们可以将数据随机分割成 k 份（比如 16 份），每份中的数据只有原来的 1/k，然后我们针对这 k 个小数据集合分别构建散列表。这样，散列表的维护成本就变低了。当某个小散列表的装载因子过大的时候，我们可以单独对这个散列表进行扩容，而其他散列表不需要进行扩容。")]),t._v(" "),s("p",[t._v("还是刚才那个例子，假设现在有 2GB 的数据，我们放到 16 个散列表中，每个散列表中的数据大约是 150MB。当某个散列表需要扩容的时候，我们只需要额外增加 150*0.5=75MB 的内存（假设还是扩容到原来的 1.5 倍）。不管从扩容的执行效率还是内存的利用率上，这种多个小散列表的处理方法，都要比大散列表高效。")]),t._v(" "),s("p",[t._v("当我们要查找某个数据的时候，我们只需要通过 16 个线程，并行地在这 16 个散列表中查找数据。这样的查找性能，比起一个大散列表的做法，也并不会下降，反倒有可能提高。")]),t._v(" "),s("p",[t._v("当往散列表中添加数据的时候，我们可以选择将这个新数据放入装载因子最小的那个散列表中，这样也有助于减少散列冲突。")])])}),[],!1,null,null,null);e.default=r.exports}}]);