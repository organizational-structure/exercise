//该文件用于专门创建整个应用的路由器
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import New from '../pages/New'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
//创建一个路由器
const router =  new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{title:'关于',isAuth:false}
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'主页',isAuth:false},
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:New,
                    meta:{title:'新闻',isAuth:true}
                },
                {
                    name:'xinxi',
                    path:'message',
                    component:Message,
                    meta:{title:'信息',isAuth:true},
                    children:[
                        {
                            name:'xiangqing',
                            // path:'detail/:id/:title',//占位符,用于params
                            path:'detail',//占位符
                            component:Detail,
                            meta:{title:'详情',isAuth:true},
                            //第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
                            // props:{id:666,title:'你好啊'}

                            //第二种写法，值为布尔值，若为true，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                            // props:true

                            //第三种写法，值为函数，返回的必须是一个对象
                            // props($route){
                            //     return {id:$route.params.id,title:$route.params.title}
                            // }
                            props($route){
                                return {id:$route.query.id,title:$route.query.title}
                            }
                        }
                        
                    ]
                }
            ]
        },
    ]
})

//全局前置路由守卫——初始化的时候被调用、每次路由器切换之前被调用
router.beforeEach((to,from,next)=>{
    console.log(to,from)
    if(to.meta.isAuth){
        if(localStorage.getItem('school') === 'atguigu'){
            next()
        }else{
            alert('学校名字不是atguigu，没有权限')
        }
    }else{
        next()
    }
})

router.afterEach((to)=>{
   document.title = to.meta.title
})
export default router