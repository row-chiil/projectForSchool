<template>

        <div class="profile">
            <div v-if="isAuth">
                привет, {{userName}}
            </div>
            <div v-else>
                <div>
                    <RouterLink :to="{ path:'/reg' }">Регистрация</RouterLink>
                    <RouterLink :to="{ path:'/login' }">Вход</RouterLink>
                </div>
                <div><RouterView></RouterView></div>
            </div>
        </div>
</template>

<script>
    export default{
        name:"profileVue", 
        data() {
        return { 
            isAuth: false, 
            userName: ""
        }
    }, 
    mounted(){
        if (sessionStorage.getItem("userName") != null){
            this.isAuth = true
            this.userName = sessionStorage.getItem("userName")
        }
    }
}
</script>

<style>
.profile{
    width: 100%;
}
</style>