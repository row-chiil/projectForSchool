<template>
    <div v-if="!isAuth"> Сначала <RouterLink :to="{ name: 'profile' }">Зарегестрируйтесь</RouterLink></div>
    <div v-else>
        Отклики
    </div>
</template>

<script>
    export default{
        name:"responsesVue",
        data(){
            return{
                isAuth: false
            }
        }, 
        mounted(){
            if (sessionStorage.getItem("userName")){
                this.isAuth = true
            }
        }
    }
</script>

<style>

</style>