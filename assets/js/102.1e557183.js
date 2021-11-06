(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{631:function(t,v,_){"use strict";_.r(v);var n=_(15),s=Object(n.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"如何优化快速排序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何优化快速排序"}},[t._v("#")]),t._v(" 如何优化快速排序？")]),t._v(" "),_("p",[t._v("我们先来看下，为什么最坏情况下快速排序的时间复杂度是 O(n^2) 呢？我们前面讲过，如果数据原来就是有序的或者接近有序的，每次分区点都选择最后一个数据，那快速排序算法就会变得非常糟糕，时间复杂度就会退化为 O(n^2)。实际上，"),_("strong",[t._v("这种 O(n^2) 时间复杂度出现的主要原因还是因为我们分区点选的不够合理")]),t._v("。")]),t._v(" "),_("p",[t._v("那什么样的分区点是好的分区点呢？或者说如何来选择分区点呢？")]),t._v(" "),_("p",[t._v("最理想的分区点是："),_("strong",[t._v("被分区点分开的两个分区中，数据的数量差不多")]),t._v("。")]),t._v(" "),_("p",[t._v("如果很粗暴地直接选择第一个或者最后一个数据作为分区点，不考虑数据的特点，肯定会出现之前讲的那样，在某些情况下，排序的最坏情况时间复杂度是 O(n^2)。为了提高排序算法的性能，我们也要尽可能地让每次分区都比较平均。")]),t._v(" "),_("p",[t._v("我这里介绍两个比较常用、比较简单的分区算法，你可以直观地感受一下。")]),t._v(" "),_("p",[_("strong",[t._v("1. 三数取中法")])]),t._v(" "),_("p",[t._v("我们从区间的首、尾、中间，分别取出一个数，然后对比大小，取这 3 个数的中间值作为分区点。这样每间隔某个固定的长度，取数据出来比较，将中间值作为分区点的分区算法，肯定要比单纯取某一个数据更好。但是，如果要排序的数组比较大，那“三数取中”可能就不够了，可能要“五数取中”或者“十数取中”。")]),t._v(" "),_("p",[_("strong",[t._v("2.随机法")])]),t._v(" "),_("p",[t._v("随机法就是每次从要排序的区间中，随机选择一个元素作为分区点。这种方法并不能保证每次分区点都选的比较好，但是从概率的角度来看，也不大可能会出现每次分区点都选的很差的情况，所以平均情况下，这样选的分区点是比较好的。时间复杂度退化为最糟糕的 O(n^2) 的情况，出现的可能性不大。")]),t._v(" "),_("p",[t._v("我们知道，快速排序是用递归来实现的。我们在递归那一节讲过，递归要警惕堆栈溢出。为了避免快速排序里，递归过深而堆栈过小，导致堆栈溢出，我们有两种解决办法：第一种是限制递归深度。一旦递归过深，超过了我们事先设定的阈值，就停止递归。第二种是通过在堆上模拟实现一个函数调用栈，手动模拟递归压栈、出栈的过程，这样就没有了系统栈大小的限制。")])])}),[],!1,null,null,null);v.default=s.exports}}]);