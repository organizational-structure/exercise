//该文件用于专门创建整个应用的路由器
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import New from '../pages/New'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
//创建一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',//不要写成/news因为底层会给我们带上/
                    component:New
                },
                {
                    path:'message',
                    component:Message,   
                }
            ]
        },
    ]
})