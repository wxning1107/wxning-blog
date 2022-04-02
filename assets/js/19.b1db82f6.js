(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1127:function(t,s,a){"use strict";a.r(s);var n=a(15),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"协程非抢占式多任务处理讲一下"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#协程非抢占式多任务处理讲一下"}},[t._v("#")]),t._v(" 协程非抢占式多任务处理讲一下？")]),t._v(" "),n("video",{attrs:{id:"video",width:"1000px",height:"600px",controls:"controls"}},[n("source",{attrs:{id:"mp4",src:a(433),type:"video/mp4"}})]),t._v(" "),n("video",{attrs:{id:"video",width:"1000px",height:"600px",controls:"controls"}},[n("source",{attrs:{id:"mp4",src:a(434),type:"video/mp4"}})]),t._v(" "),n("p",[t._v("线程在任何时候都会被操作系统切换，所以线程是抢占式多任务处理，线程没有控制权的，哪怕做到一半甚至是语句执行到一半都会被操作系统从中间掐掉然后转到其他线程上去做。协程不一样，协程是非抢占式的，什么时候交出控制权是由协程内部决定的，正是由于非抢占式才使得协程变得轻量级，抢占式需要处理保存上一个线程更多的上下文，对资源消耗多一些，说白了就是线程的切换比协程需要保存的上下文更多。协程是编译器/解释器/虚拟机层面的多任务，不是操作系统层面的多任务，go语言自己的调度器调度协程而不需要操作系统调度器，因此多个协程可以在一个线程上执行。")]),t._v(" "),n("p",[t._v("虽然goroutine是非抢占式的，但是gmp调度器还是可以对协程进行切换。")]),t._v(" "),n("p",[t._v("goroutine可能切换的点：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("I/O，select")])]),t._v(" "),n("li",[n("p",[t._v("channel")])]),t._v(" "),n("li",[n("p",[t._v("等待锁")])]),t._v(" "),n("li",[n("p",[t._v("函数调用 （有时）")])]),t._v(" "),n("li",[n("p",[t._v("runtime.GoSched()")])])]),t._v(" "),n("p",[t._v("来源：ccmouse goroutine")]),t._v(" "),n("h1",{attrs:{id:"go-1-13"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#go-1-13"}},[t._v("#")]),t._v(" go 1.13")]),t._v(" "),n("p",[t._v("下面代码在go1.13中会阻塞，实际上它会在stw时阻塞。")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n             n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n             fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br")])]),n("p",[n("img",{attrs:{src:a(435),alt:"img"}})]),t._v(" "),n("p",[t._v("gc的stw逻辑是gc需要抢占所有的p，将当前的p、陷入系统调用的p、空闲状态的p设置为_Pgcstop状态，对于还有g在运行的p，则会将其对应的g.stackguard0设置为一个特殊标识runtime.stackPreempt，告诉它GC在等待你让出呢，此外，还会设置一个gcwaiting标识（sched.gcwaiting=1）。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(436),alt:"img"}})]),t._v(" "),n("p",[t._v("接下来会通过这两个标识符的配合来实现运行中的p的抢占，怎么实现呢？")]),t._v(" "),n("p",[t._v("goroutine在创建之初，栈的大小是固定的，为了防止出现栈溢出的情况，编译器会在有明显栈消耗的函数头部插入一些检验代码，通过g.stackguard0来判断是否需要进行栈增长，但如果g.stackguard0被设置为特殊标识runtime.stackPreempt，便不会执行栈增长，而是去执一次调度（schedule()）。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(437),alt:"img"}})]),t._v(" "),n("p",[t._v("在调度执行时会检测sched.gcwaiting标识，若发现gc在等待执行，便会让出当前p，将其设置为_Pgstop状态，这就是协作式抢占。所以像for{}这种没有函数调用也就没机会执行栈增长检测代码，所以它并不知道gc在等待它让出。")]),t._v(" "),n("p",[t._v("这是go 1.13中的情况，依赖栈增长检测代码的方式。不算是真正的抢占式调度，不过在1.14中真正实现了抢占式调度")]),t._v(" "),n("p",[t._v("参考："),n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/386998235",target:"_blank",rel:"noopener noreferrer"}},[t._v("幼麟实验室"),n("OutboundLink")],1)]),t._v(" "),n("h1",{attrs:{id:"go-1-14-基于信号实现异步抢占"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#go-1-14-基于信号实现异步抢占"}},[t._v("#")]),t._v(" go 1.14 基于信号实现异步抢占")]),t._v(" "),n("p",[t._v("在linux操作系统上这种真正的抢占式调度是基于信号实现的，所以也成为异步抢占，函数preempone用来抢占一个p，主要是设置g.preempt=true，并将g.startguard0设置为特殊标识stackPreempt，而且增加了最后的if语句，判断当前硬件环境是否支持异步抢占并且用户是否允许开启异步抢占，当然默认是允许的，如果if条件通过了，就将p.preempt字段置为true。")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("preemptone")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_p_ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     mp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" _p_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ptr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" mp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" mp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getg")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("m "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     gp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" mp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("curg\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" gp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" gp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" mp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g0 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     gp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("preempt"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n     gp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stackguard0"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stackPreempt\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" preemptMSupported "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" debug"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("asyncpreemptoff "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         _p_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("preempt"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("preemptM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     returntrue\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br")])]),n("p",[t._v("实际的抢占操作会交由preemptM函数来完成，它的主要逻辑是通过runtime.SignalM函数向指定M发送sigPreempt信号，SignalM会调用操作系统中信号相关的系统调用，将指定信号发送给目标线程，")]),t._v(" "),n("img",{staticStyle:{zoom:"40%"},attrs:{src:a(438),alt:"image-20220320162613592"}}),t._v(" "),n("p",[t._v("线程接收到信号以后，会调用对应的信号handler处理，go语言的信号交由runtime.sigHandler来处理，sigHandler在确定信号为sigPreempt以后，会调用doSigPreempt函数，它会首先确认runtime是否要对指定的g进行异步抢占：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("首先指定的g与其对应的p的preempt字段都为true")])]),t._v(" "),n("li",[n("p",[t._v("指定的g还要处于running状态")])]),t._v(" "),n("li",[n("p",[t._v("然后还要确认在当前位置打断g并执行异步抢占是安全的，首先，指定的g可以挂起并安全的扫描它的栈和寄存器，并且当前被打断的位置并没有打断写屏障。第二，指定的g还有足够的栈空间来注入一个异步抢占函数调用。第三，这里可以安全的和runtime交互，主要就是确定当前并没有持有runtime相关的锁，继而不会在后续尝试获得锁时造成死锁")])])]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSigPreempt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("g"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctxt "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("sigctxt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wantAsyncPreempt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isAsyncSafePoint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctxt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sigpc")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ctxt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sigsp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctxt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("siglr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         ctxt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushCall")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("funcPC")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("asyncPreempt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n     atomic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Xadd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("gp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("preemptGen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     atomic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Store")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("gp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("signalPending"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n \n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" GOOS "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"darwin"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         atomic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Xadd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("pendingPreemptSignals"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("p",[t._v("在确认了要抢占这个g并且在此时抢占是安全的以后，就可以放心的通过pushCall向g的执行上下文注入异步抢占函数（asyncPreempt）了，被注入的异步抢占函数是一个汇编函数，它会先把各个寄存器的值保存在栈上，也就是先保存现场到栈上，然后调用runtime.asyncPreempt2函数，其中preemptStop主要在GC标记时被用来挂起运行中的goroutine，preemptPark函数会把当前g切换至_Gpreempted状态，然后调用schedule函数。到这里异步抢占就完成了。")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("asyncPreempt2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     gp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getg")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     gp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("asyncSafePoint"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" gp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("preemptStop "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mcall")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("preemptPark"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mcall")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gopreempt_m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     gp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("asyncSafePoint"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])]),n("p",[t._v("即使for{}没有执行栈增长检测代码，通过注入异步回调函数的方式，依然不会阻塞，实现抢占式调度。")]),t._v(" "),n("p",[t._v("抢占流程由抢占的发起方向被抢占线程发送 SIGURG 信号。")]),t._v(" "),n("p",[t._v("抢占会在下列时机发生：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("STW 期间")])]),t._v(" "),n("li",[n("p",[t._v("在 P 上执行 safe point 函数期间")])]),t._v(" "),n("li",[n("p",[t._v("sysmon 后台监控期间")])]),t._v(" "),n("li",[n("p",[t._v("gc pacer 分配新的 dedicated worker 期间")])]),t._v(" "),n("li",[n("p",[t._v("panic 崩溃期间")])])]),t._v(" "),n("p",[t._v("参考：")]),t._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/387003228",target:"_blank",rel:"noopener noreferrer"}},[t._v("幼麟实验室"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://blog.csdn.net/cch1234/article/details/119113759",target:"_blank",rel:"noopener noreferrer"}},[t._v("csdn文章"),n("OutboundLink")],1)])])])])}),[],!1,null,null,null);s.default=e.exports},433:function(t,s,a){t.exports=a.p+"assets/media/抢占式调度(1).a82a9b09.mp4"},434:function(t,s,a){t.exports=a.p+"assets/media/抢占式调度(2).b321ec1d.mp4"},435:function(t,s,a){t.exports=a.p+"assets/img/image-20220320150733754.119e0070.png"},436:function(t,s,a){t.exports=a.p+"assets/img/image-20220320145644107.318abeda.png"},437:function(t,s,a){t.exports=a.p+"assets/img/image-20220320151723157.dd80a770.png"},438:function(t,s,a){t.exports=a.p+"assets/img/image-20220320162613592.1e4d8db4.png"}}]);