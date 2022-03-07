(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{1001:function(t,s,e){"use strict";e.r(s);var i=e(15),n=Object(i.a)({},(function(){var t=this.$createElement,s=this._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[s("h1",{attrs:{id:"缓存击穿"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存击穿"}},[this._v("#")]),this._v(" 缓存击穿")]),this._v(" "),s("p",[this._v("缓存击穿是指，针对某个访问非常频繁的热点数据的请求，无法在缓存中进行处理，紧接着，访问该数据的大量请求，一下子都发送到了后端数据库，导致了数据库压力激增，会影响数据库处理其他请求。缓存击穿的情况，经常发生在热点数据过期失效时.")]),this._v(" "),s("p",[this._v("为了避免缓存击穿给数据库带来的激增压力，我们的解决方法也比较直接，对于访问特别频繁的热点数据，我们就不设置过期时间了。这样一来，对热点数据的访问请求，都可以在缓存中进行处理，而 Redis 数万级别的高吞吐量可以很好地应对大量的并发请求访问。")])])}),[],!1,null,null,null);s.default=n.exports}}]);