import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import SerchingVue from './components/Serching.vue'
import chatsVue from './components/chats.vue'
import favoritesVue from './components/favorites.vue'
import profileVue from './components/profile.vue'
import responsesVue from './components/responses.vue'
import formRegVue from './components/formReg.vue'
import formLogInVue from './components/formLog.vue'
// import linksVue from "./components/links.vue"
import App from './App.vue'

const routers = createRouter({
    routes:[{
        path:"/",
        component: SerchingVue, 
        name: "SerchingVue"
    }, 
    {
        path:"/chats",
        component: chatsVue, 
        name: "chatsVue"
    }, 
    {
        path:"/favorites",
        component: favoritesVue, 
        name: "favorites"
    }, 
    {
        path:"/profile",
        component: profileVue, 
        name: "profile", 
        children:[
            {
                path:"/reg", 
                component: formRegVue, 
                name:'formReg'
            }, 
            {
                path:"/login", 
                component: formLogInVue, 
                name:"formLogIn"
            }
        ]
    }, 
    {
        path:"/responses",
        component: responsesVue, 
        name: "responses"
    }, 
], 
    history: createWebHistory()
})

const app = createApp(App)
app.use(routers)
app.mount('#app')