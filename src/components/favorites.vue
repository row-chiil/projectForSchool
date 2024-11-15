<template>
    <div class="favoritesContent">
        <div class="offer" v-if="!isAuth"> Сначала <RouterLink :to="{ name: 'profile' }">Зарегестрируйтесь</RouterLink></div>
        <div v-else>
            izbrannoe
        </div>
    </div>
</template>

<script>
    export default{
        name:"favoritesVue",
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
    .favoritesContent{
        margin-top: 2vw;
        display: flex;
        align-items: center;
        flex-direction: column;

        /* border: 1px solid rgba(0, 0, 0, 0.6); */

        width: 100%;
        height: 100%;
}
.offer{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: start;

        margin-top: 0.5vw;
        height: 7vw;
        border: 1px solid rgba(220, 227, 235, 1);
        border-radius: 0.5vw;
        width: 70%;
    }
</style>