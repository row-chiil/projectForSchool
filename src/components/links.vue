<template>
    <div class="linksDiv">
        <RouterLink :to="{name: 'SerchingVue'}" class="link"><img src="../assets/serch.png" alt="" class="icon">Поиск</RouterLink>
        <RouterLink :to="{ name: 'chatsVue' }" class="link"><img src="../assets/chats.png" alt="" class="icon">Чаты</RouterLink>
        <RouterLink :to="{ name: 'favorites' }" class="link"><img src="../assets/hert.png" alt="" class="icon">Избранное</RouterLink>
        <RouterLink :to="{ name: 'responses' }" class="link"><img src="../assets/mail.png" alt="" class="icon">Отклики</RouterLink>
        <RouterLink :to="{ name: 'profile' }" class="link"><img src="../assets/user.png" alt="" class="icon" style="width: 1.5vw;">Профиль</RouterLink>
    </div>
</template>

<script>

    export default{
        name:"linksVue",

    }
</script>

<style>
.linksDiv{
    height: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
}
.icon{
    width: 1.5vw;
}
.link{
    text-decoration: none;
    color: darkslategray;
    font-size: 30px;
}
template{
    height: 100%;
}
</style>