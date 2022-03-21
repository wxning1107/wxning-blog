(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{1007:function(v,_,t){"use strict";t.r(_);var n=t(15),p=Object(n.a)({},(function(){var v=this,_=v.$createElement,n=v._self._c||_;return n("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[n("h1",{attrs:{id:"桶排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#桶排序"}},[v._v("#")]),v._v(" 桶排序")]),v._v(" "),n("p",[v._v("桶排序、计数排序、基数排序这些排序算法的时间复杂度是线性的（ O(n) ），所以我们把这类排序算法叫作"),n("strong",[v._v("线性排序")]),v._v("（Linear sort）。")]),v._v(" "),n("p",[v._v("之所以能做到线性的时间复杂度，主要原因是，这三个算法是非基于比较的排序算法，都不涉及元素之间的比较操作。")]),v._v(" "),n("p",[v._v("桶排序，顾名思义，会用到“桶”，核心思想是将要排序的数据分到几个有序的桶里，每个桶里的数据再单独进行排序。桶内排完序之后，再把每个桶里的数据按照顺序依次取出，组成的序列就是有序的了。")]),v._v(" "),n("p",[n("img",{attrs:{src:t(561),alt:"img"}})]),v._v(" "),n("p",[v._v("桶排序的时间复杂度为什么是 O(n) 呢？我们一块儿来分析一下。")]),v._v(" "),n("p",[v._v("如果要排序的数据有 n 个，我们把它们均匀地划分到 m 个桶内，每个桶里就有 k=n/m 个元素。每个桶内部使用快速排序，时间复杂度为 O(k * logk)。m 个桶排序的时间复杂度就是 O(m * k * logk)，因为 k=n/m，所以整个桶排序的时间复杂度就是 O(n*log(n/m))。当桶的个数 m 接近数据个数 n 时，log(n/m) 就是一个非常小的常量，这个时候桶排序的时间复杂度接近 O(n)。")]),v._v(" "),n("p",[n("strong",[v._v("桶排序看起来很优秀，那它是不是可以替代我们之前讲的排序算法呢？")])]),v._v(" "),n("p",[v._v("答案当然是否定的。为了让你轻松理解桶排序的核心思想，我刚才做了很多假设。实际上，桶排序对要排序数据的要求是非常苛刻的。")]),v._v(" "),n("p",[v._v("首先，要排序的数据需要很容易就能划分成 m 个桶，并且，桶与桶之间有着天然的大小顺序。这样每个桶内的数据都排序完之后，桶与桶之间的数据不需要再进行排序。")]),v._v(" "),n("p",[v._v("其次，数据在各个桶之间的分布是比较均匀的。如果数据经过桶的划分之后，有些桶里的数据非常多，有些非常少，很不平均，那桶内数据排序的时间复杂度就不是常量级了。在极端情况下，如果数据都被划分到一个桶里，那就退化为 O(nlogn) 的排序算法了。")]),v._v(" "),n("p",[n("strong",[v._v("桶排序比较适合用在外部排序中")]),v._v("。所谓的外部排序就是数据存储在外部磁盘中，数据量比较大，内存有限，无法将数据全部加载到内存中。")]),v._v(" "),n("p",[v._v("比如说我们有 10GB 的订单数据，我们希望按订单金额（假设金额都是正整数）进行排序，但是我们的内存有限，只有几百 MB，没办法一次性把 10GB 的数据都加载到内存中。这个时候该怎么办呢？")]),v._v(" "),n("p",[v._v("我们可以先扫描一遍文件，看订单金额所处的数据范围。假设经过扫描之后我们得到，订单金额最小是 1 元，最大是 10 万元。我们将所有订单根据金额划分到 100 个桶里，第一个桶我们存储金额在 1 元到 1000 元之内的订单，第二桶存储金额在 1001 元到 2000 元之内的订单，以此类推。每一个桶对应一个文件，并且按照金额范围的大小顺序编号命名（00，01，02…99）。")]),v._v(" "),n("p",[v._v("理想的情况下，如果订单金额在 1 到 10 万之间均匀分布，那订单会被均匀划分到 100 个文件中，每个小文件中存储大约 100MB 的订单数据，我们就可以将这 100 个小文件依次放到内存中，用快排来排序。等所有文件都排好序之后，我们只需要按照文件编号，从小到大依次读取每个小文件中的订单数据，并将其写入到一个文件中，那这个文件中存储的就是按照金额从小到大排序的订单数据了。")]),v._v(" "),n("p",[v._v("不过，你可能也发现了，订单按照金额在 1 元到 10 万元之间并不一定是均匀分布的 ，所以 10GB 订单数据是无法均匀地被划分到 100 个文件中的。有可能某个金额区间的数据特别多，划分之后对应的文件就会很大，没法一次性读入内存。这又该怎么办呢？")]),v._v(" "),n("p",[v._v("针对这些划分之后还是比较大的文件，我们可以继续划分，比如，订单金额在 1 元到 1000 元之间的比较多，我们就将这个区间继续划分为 10 个小区间，1 元到 100 元，101 元到 200 元，201 元到 300 元…901 元到 1000 元。如果划分之后，101 元到 200 元之间的订单还是太多，无法一次性读入内存，那就继续再划分，直到所有的文件都能读入内存为止。")]),v._v(" "),n("p",[v._v("再或者，如何根据年龄给 100 万用户排序？")]),v._v(" "),n("p",[v._v("实际上，根据年龄给 100 万用户排序，就类似按照成绩给 50 万考生排序。我们假设年龄的范围最小 1 岁，最大不超过 120 岁。我们可以遍历这 100 万用户，根据年龄将其划分到这 120 个桶里，然后依次顺序遍历这 120 个桶中的元素。这样就得到了按照年龄排序的 100 万用户数据。")])])}),[],!1,null,null,null);_.default=p.exports},561:function(v,_,t){v.exports=t.p+"assets/img/image-20211103140058099.362cb700.png"}}]);