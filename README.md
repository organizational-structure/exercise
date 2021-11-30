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

#### 五、vuex

​		何时使用：多个组件需要共享数据时

![vuex](https://vuex.vuejs.org/vuex.png)

## 路由

### 一、路由的使用

​	Vue.js + Vue Router 创建单页应用，不需要刷新页面，而实现组件之间的跳转

​	1.安装路由

​		``npm i vue-router``

​		通过Vue.use()来使用插件

​	2.``<router-link>``默认会被渲染成一个``<a>``标签,`to`属性指定链接

​	``<router-link to="/foo">Go to Foo</router-link>``

​	3.路由出口,路由匹配到的组件将渲染在这里

​	``<router-view></router-view>``

### 二、几个注意点

​	1.路由组件通常存放在``pages``文件夹，一般组件通常存放在``components``文件夹

​	2.通过切换，“隐藏”了路由器组件，默认是被销毁掉的，需要的时候再去挂载

​	3.每个组件都有自己的``$route``属性，里面存储着自己的路由信息。

​	4.整个应用只有一个router，可以通过组件的``$router``属性获取到

### 三、多级路由

​	

```
{

​      path:'/home',

​      component:Home,

​      children:[

​        {

​          path:'news',//不要写成/news因为底层会给我们带上/

​          component:New

​        },

​        {

​          path:'message',

​          component:Message,  

​        }

​      ]

​    },
```

使用children这个数组，可以进行多层嵌套

### 四、路由的参数

#### 1.query参数

​	

```
<!-- 跳转路由并携带query参数，to的对象写法 -->

​        <router-link :to="{

​          path:'/home/message/detail',

​          query:{

​            id:m.id,

​            title:m.title

​          }

​        }">

通过解构的方式：
<router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`"></router-link>
```

#### 2.params参数

1.配置路由，声明接收params参数

```
{
	path:'/home',
	component:Home,
	children:[
		{
			path:'news',
			component:News
		},
		{
			component:Message,
			children:[
				{
					name:'xiangqing',
					path:'detail/:id/:title', //使用占位符声明接收params参数
					component:Detail
				}
			]
		}
	]
}
```

2.传递参数

```
<router-link :to="{

​          name:'xiangqing',

​          params:{

​            id:m.id,

​            title:m.title

​          }

​        }">
```

​			**特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！**

### 五、路由的props配置

​	作用：让路由组件更方便的收到参数

​	第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。

​	``props:{id:666,title:'你好啊'}``

​	第二种写法，值为布尔值，若为true，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件.``props:true``

​	第三种写法，值为函数，返回的必须是一个对象

​	

```
 props($route){

​                return {id:$route.query.id,title:$route.query.title}

​              }
```

