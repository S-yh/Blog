---
title: HTML
---
## HTML语义化

* 用正确的标签做正确的事情；
* html 语义化让页面的内容结构化，结构更清晰；
* 便于对浏览器、搜索引擎解析；
* 即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的；
* 搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，利于 SEO；
* 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。

所谓语义化的标签, 说明让标签有自己的含义, 典型的例子就是`header`,`footer`, 它可以让你在没有样式的情况下, 识别他就是头部或者底部,他存在的意义就是在开发过程中,更容易去阅读代码.

## 多个域名存储网站资源

* 确保用户在不同地区能用最快的速度打开网站，其中某个域名崩溃用户也能通过其他域名访问网站。
* CDN 缓存更方便。简单来说，CDN 主要用来使用户就近获取资源。
* 突破浏览器并发限制。同一时间针对同一域名下的请求有一定数量限制，超过限制数目的请求会被阻塞。大多数浏览器的并发数量都控制在6以内。有些资源的请求时间很长，因而会阻其他资源的请求。因此，对于一些静态资源，如果放到不同的域名下面就能实现与其他资源的并发请求。
* Cookieless, 节省带宽，尤其是上行带宽 一般比下行要慢。
* 对于 UGC 的内容和主站隔离，防止不必要的安全问题。
* 数据做了划分，甚至切到了不同的物理集群，通过子域名来分流比较省事. 这个可能被用的不多。

:::tip
CDN: 是构建在网络之上的内容发布网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容发布、调度等功能模块，是用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。CDN的关键技术主要是内容存储和分布技术。简单来说，CDN主要用来使用户就近获取资源。
:::

## window常用属性与方法

* window 对象的常用属性
  * window.self          返回当前窗口的引用
  * window.parent        返回当前窗体的父窗体对象
  * window.top           返回当前窗体最顶层的父窗体的引用
  * window.outerwidth    返回当前窗口的外部宽
  * window.outerheight   返回当前窗口的外部高
  * window.innerwidth    返回当前窗口的可显示区域宽
  * window.innerheight   返回当前窗口的可显示区域高

* window 对象的常用方法
  * window.prompt()                                 弹出一个输入提示框，若用户点击了“取消”则返回 null
  * window.alert()                                  弹出一个警告框
  * window.confirm()                                弹出一个确认框
  * window.close()                                  关闭当前浏览器窗口。 有些浏览器对此方法有限制。
  * window.open(uri, [name], [features])            打开一个浏览器窗口，显示指定的网页。name属性值可以是“_blank”、“_self”、“_parent”、“_top”、任意指定的一个窗口名。
  * window.blur( )                                  指定当前窗口失去焦点
  * window.focus( )                                 指定当前窗口获得焦点
  * window.showModalDialog(uri, [dataFromParent])   打开一个“模态窗口”（打开的子窗口只要不关闭，其父窗口即无法获得焦点；且父子窗口间可以传递数据）

## document常用属性与方法

* document 常见的属性
  * body 提供对 元素的直接访问。对于定义了框架集的文档，该属性引用最外层的 。
  * cookie 设置或返回与当前文档有关的所有 cookie。
  * domain 返回当前文档的域名。
  * lastModified 返回文档被最后修改的日期和时间。
  * referrer 返回载入当前文档的文档的 URL。
  * title 返回当前文档的标题。
  * URL 返回当前文档的 URL。

* document常见的方法
  * write()：动态向页面写入内容
  * createElement(Tag)：创建一个 HTML 标签对象
  * getElementById(ID)：获得指定 id 的对象
  * getElementsByName(Name)：获得之前 Name 的对象
  * body.appendChild(oTag)：向 HTML 中插入元素对象

## src与href区别

* href指向网络资源所在, 建立和当前元素(锚点)或当前文档的链接,用于超链接
* src指向外部资源的位置，指向的内容将会嵌入到文档中当前标签的位置
* 请求src资源时会将指向的资源下载并应用到文档内，包括（图片，js脚本，frame等），当浏览器解析到该元素的时候，会暂停其他资源的下载和处理，知道该资源加载，执行完毕。这也是为什么将js脚本放在底部而不是头部

## reflow和repaint

repaint就是重绘，reflow就是回流（重排）。性能消耗: reflow > repaint  
repaint是某个DOM元素进行重绘, reflow是对整个文档页面进行重排，重新渲染所有DOM元素  
 
常见触发场景:
* repaint
  * color的修改
  * text-algin的修改
  * a:hover
* reflow
  * width/height/border/margin/padding的修改
  * 动画
  * appendchild
  * background的修改, 部分属性只触发repaint
  * scroll页面
  * resize页面
  * 读取元素的属性 ??( offsetLeft、offsetTop、offsetHeight、offsetWidth、scrollTop/Left/Width/Height、clientTop/Left/Width/Height、getComputedStyle())  

如何避免:
* 尽可能在 DOM 末梢通过改变 class 来修改元素的 style 属性：尽可能的减少受影响的 DOM 元素。
* 避免设置多项内联样式：使用常用的 class 的方式进行设置样式，以避免设置样式时访问 DOM 的低效率。
* 设置动画元素 position 属性为 fixed 或者 absolute：由于当前元素从 DOM 流中独立出来，因此受影响的只有当前元素，元素 repaint。
* 牺牲平滑度满足性能：动画精度太强，会造成更多次的 repaint/reflow，牺牲精度，能满足性能的损耗，获取性能和平滑度的平衡。
* 避免使用 table 进行布局：table 的每个元素的大小以及内容的改动，都会导致整个 table 进行重新计算，造成大幅度的 repaint 或者 reflow。改用 div 则可以进行针对性的 repaint 和避免不必要的 reflow。
* 避免在 CSS 中使用运算式：学习 CSS 的时候就知道，这个应该避免，不应该加深到这一层再去了解，因为这个的后果确实非常严重，一旦存在动画性的 repaint/reflow，那么每一帧动画都会进行计算，性能消耗不容小觑。

## html5新特性

* 绘画canvas
* 媒介回放 video, audio
* 本地存储 localstorage
* sessionstorage浏览器关闭自动删除
* 语义话更好的内容article, footer, header, nav, section
* 表单控件 calendar, date, time, email, url, search
* 新技术 webworker, websocket, Geolocation


## [浏览器多标签页的通信](https://juejin.im/post/5acdba01f265da23826e5633)

* WebSocket、SharedWorker；
* 也可以调用 localstorge、cookies 等本地存储方式；
* localstorge 在另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，我们通过监听事件，控制它的值来进行页面信息通信； 注意 quirks：Safari 在无痕模式下设置 localstorge 值时会抛出 QuotaExceededError 的异常；

## 移动端click延迟300ms

* 为了实现双击缩放操作, 在单击300ms后, 如果未进行第二次点击, 则执行click单击操作, 也就是为了判断用户是否双击, 但是在app中无论是否需要双击缩放, click都会产生300ms延迟
* 解决方案:
  * 使用touchstart替换click: 将click替换成touchstart不仅解决了click事件延时问题. 还解决了穿透问题, 因为穿透问题是在touch和click混用时产生的  
	* 使用fastclick库, 

## 移动端click点击穿透

* 双层元素叠加时, 在上层元素上绑定touch事件, 下层元素绑定click事件, 由于click发生在touch之后, 点击上层元素, 元素消失, 下层元素会触发click事件, 由此产生了点击穿透的效果

## script标签的defer和async

* defer
	* 如果 script 标签设置了该属性，则浏览器会异步的下载该文件并且不会影响到后续 DOM 的渲染；
	* 如果有多个设置了 defer 的 script 标签存在，则会按照顺序执行所有的 script；
	* defer 脚本会在文档渲染完毕后，DOMContentLoaded 事件调用前执行。
* async
	* async 的设置，会使得 script 脚本异步的加载并在允许的情况下执行 async 的执行，
	* 并不会按着 script 在页面中的顺序来执行，而是谁先加载完谁执行。

概括来讲，就是这两个属性都会使 script 标签异步加载，然而执行的时机是不一样的。也就是说 async 是乱序的，而 defer 是顺序执行，这也就决定了async 比较适用于百度分析或者谷歌分析这类不依赖其他脚本的库。