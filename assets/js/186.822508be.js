(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{1115:function(t,s,a){"use strict";a.r(s);var e=a(15),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"数组和切片的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数组和切片的区别"}},[t._v("#")]),t._v(" 数组和切片的区别？")]),t._v(" "),e("video",{attrs:{id:"video",width:"1000px",height:"600px",controls:"controls"}},[e("source",{attrs:{id:"mp4",src:a(411),type:"video/mp4"}})]),t._v(" "),e("p",[t._v("数组是具有固定长度且拥有零个或者多个相同数据类型元素的序列。数组是值类型，在初始化后长度是固定的，无法修改其长度。当作为方法的参数传入时将复制一份数组而不是引用同一指针。数组的长度也是其类型的一部分，通过内置函数len(array)获取其长度。由于数组的长度是数组类型的一部分，所以[3]int 和 [4]int 是两种不同的数组类型。因此在Go语言中很少直接使用数组（不同长度的数组因为类型不同无法直接赋值）")]),t._v(" "),e("p",[t._v("但是切片呢，切片表示一个拥有相同类型元素的可变长度的序列。简单来说切片是一个动态数组。切片的长度是不固定的。")]),t._v(" "),e("p",[t._v("切片是一种轻量级的数据结构，它有三个属性：指针、长度和容量。切片是饮引用传递。切片可以通过数组来初始化，也可以通过内置函数make()初始化，初始化时len=cap,在追加元素时如果容量cap不足时将扩容。")]),t._v(" "),e("p",[t._v("从底层角度讲：")]),t._v(" "),e("div",{staticClass:"language-go line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" SliceHeader "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Data "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uintptr")]),t._v("\n    Len  "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n    Cap  "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("一个slice是一个数组某个部分的引用。在内存中，它是一个包含3个域的结构体：指向slice中第一个元素的指针，slice的长度，以及slice的容量。长度是下标操作的上界，如x[i]中i必须小于长度。容量是分割操作的上界，如x[i:j]中j不能大于容量。")]),t._v(" "),e("p",[t._v("数组的slice并不会实际复制一份数据，它只是创建一个新的数据结构，包含了另外的一个指针，一个长度和一个容量数据。 如同分割一个字符串，分割数组也不涉及复制操作：它只是新建了一个结构来放置一个不同的指针，长度和容量。")]),t._v(" "),e("h1",{attrs:{id:"slice-扩容策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slice-扩容策略"}},[t._v("#")]),t._v(" slice 扩容策略")]),t._v(" "),e("p",[t._v("在分配内存空间之前需要先确定新的切片容量，运行时根据切片的当前容量选择不同的策略进行扩容：")]),t._v(" "),e("p",[t._v("1.如果期望容量大于当前容量的两倍就会使用期望容量；")]),t._v(" "),e("p",[t._v("2.如果当前切片的长度小于 1024 就会将容量翻倍；")]),t._v(" "),e("p",[t._v("3.如果当前切片的长度大于 1024 就会每次增加 25% 的容量，直到新容量大于期望容量；")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("上面只是确定大致容量，源码中还需要根据切片中的元素大小对齐内存减少碎片。")]),t._v(" "),e("p",[t._v("具体可看："),e("a",{attrs:{href:"https://draveness.me/golang/docs/part2-foundation/ch03-datastructure/golang-array-and-slice/#324-%E8%BF%BD%E5%8A%A0%E5%92%8C%E6%89%A9%E5%AE%B9",target:"_blank",rel:"noopener noreferrer"}},[t._v("draveness源码阅读"),e("OutboundLink")],1)])]),t._v(" "),e("h1",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("每个切片都指向一个底层数组")])]),t._v(" "),e("li",[e("p",[t._v("每个切片都保存了当前切片的长度、底层数组可用容量")])]),t._v(" "),e("li",[e("p",[t._v("使用len()计算切片长度时间复杂度为O(1)，不需要遍历切片")])]),t._v(" "),e("li",[e("p",[t._v("使用cap()计算切片容量时间复杂度为O(1)，不需要遍历切片")])]),t._v(" "),e("li",[e("p",[t._v("通过函数传递切片时，不会拷贝整个切片，因为切片本身只是个结构体而矣")])]),t._v(" "),e("li",[e("p",[t._v("使用append()向切片追加元素时有可能触发扩容，扩容后将会生成新的切片")])])])])}),[],!1,null,null,null);s.default=n.exports},411:function(t,s,a){t.exports=a.p+"assets/media/slice类型存什么？make和new？slice和数组？扩容规则？.a9a6c32b.mp4"}}]);