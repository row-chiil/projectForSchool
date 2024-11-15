<template>
    <div class="mainContent">
        <RouterView ></RouterView>
    </div>
</template>

<script>
// import chatsVue from './chats.vue';
// import SerchingVue from './components/Serching.vue'

    export default{
        name:"mainVue",
        data(){
            return{
                isAuth: false, 
            }
        }, 

    }
</script>

<style>
    .mainContent{
        width: 65vw;
        height: 60vw;
        max-height: 800px;

        display: flex;
        justify-content: start;
        flex-direction: column;
        align-items: start;

        /* border: 1px solid rgb(0, 0, 0); */
    }
    
</style>
