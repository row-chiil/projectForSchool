<template>
    <div class="chatsComponent">
        <div v-if="isAuth == false">Сначала <RouterLink :to="{ name: 'profile' }">Зарегестрируйтесь</RouterLink></div>
        <div class="chats" v-else>
            <div>
                <div>Имя компании/поставщика</div>
                <div>Последнее сообщение</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:"chatsVue", 
        data(){
            return{
                isAuth: false
            }
        },
        mounted(){
            if (localStorage.getItem("userName")){
                this.isAuth = true
            }
        }
    }
</script>

<style>

    .chatsComponent{
        display: flex;
        align-items: start;
        flex-direction: column;

        width: 100%;
    }
    .chats{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: start;

        height: 7vw;
        border: 1px solid rgba(0, 0, 0, 0.6);
        width: 100%;
    }

</style>