## 组件间通信的方式

### 一、组件的自定义事件

​		1.适用于：<font color='red'>**子组件===>父组件**</font>

​		2.使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（<span style="color:red">事件的回调在A中</span>）。

#### 二、全局事件总线

​		1.一种组件间通信的方式，适用于<span style="color:red">任意组件间通信</span>。

#### 三、消息订阅与发布（pubsub）

​	     1.一种组件间通信的方式，适用于<span style="color:red">任意组件间通信</span>。

#### 四、插槽

​		 1.作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于 <strong style="color:red">父组件 ===> 子组件</strong> 