(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{1013:function(t,s,r){"use strict";r.r(s);var o=r(15),n=Object(o.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h3",{attrs:{id:"举例分析排序函数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#举例分析排序函数"}},[t._v("#")]),t._v(" 举例分析排序函数")]),t._v(" "),r("p",[t._v("为了让你对如何实现一个排序函数有一个更直观的感受，我拿 Glibc 中的 qsort() 函数举例说明一下。虽说 qsort() 从名字上看，很像是基于快速排序算法实现的，实际上它并不仅仅用了快排这一种算法。")]),t._v(" "),r("p",[t._v("如果你去看源码，你就会发现，"),r("strong",[t._v("qsort() 会优先使用归并排序来排序输入数据")]),t._v("，因为归并排序的空间复杂度是 O(n)，所以对于小数据量的排序，比如 1KB、2KB 等，归并排序额外需要 1KB、2KB 的内存空间，这个问题不大。现在计算机的内存都挺大的，我们很多时候追求的是速度。还记得我们前面讲过的用空间换时间的技巧吗？这就是一个典型的应用。")]),t._v(" "),r("p",[t._v("但如果数据量太大，就跟我们前面提到的，排序 100MB 的数据，这个时候我们再用归并排序就不合适了。所以，"),r("strong",[t._v("要排序的数据量比较大的时候，qsort() 会改为用快速排序算法来排序")]),t._v("。")]),t._v(" "),r("p",[t._v("那 qsort() 是如何选择快速排序算法的分区点的呢？如果去看源码，你就会发现，qsort() 选择分区点的方法就是“三数取中法”。是不是也并不复杂？")]),t._v(" "),r("p",[t._v("还有我们前面提到的递归太深会导致堆栈溢出的问题，qsort() 是通过自己实现一个堆上的栈，手动模拟递归来解决的。我们之前在讲递归那一节也讲过，不知道你还有没有印象？")]),t._v(" "),r("p",[t._v("实际上，qsort() 并不仅仅用到了归并排序和快速排序，它还用到了插入排序。在快速排序的过程中，当要排序的区间中，元素的个数小于等于 4 时，qsort() 就退化为插入排序，不再继续用递归来做快速排序，因为我们前面也讲过，在小规模数据面前，"),r("strong",[t._v("O(n^2) 时间复杂度的算法并不一定比 O(nlogn) 的算法执行时间长")]),t._v("。")])])}),[],!1,null,null,null);s.default=n.exports}}]);