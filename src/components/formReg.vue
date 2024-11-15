<template>
    <div class="formReg">
        <input type="text" v-model="dataUser.name">
        <input type="password" v-model="dataUser.password">
        <input type="password" v-model="dataUser.passwordRepeat">
        <button @click="dataUser.typeUser = 'Entrepreneur'">Преприниматель</button>
        <button @click="dataUser.typeUser = 'Supplier'">Поставщик</button>
        <button @click="dataUser.typeUser = 'HiringCompany'">Комапния по найму</button>
        <button v-on:click="regUser">Регистрация</button>
    </div>
</template>

<script>
export default{
    name:'formRegVue',
    data(){
        return{
            dataUser:{
                name:"", 
                password:"",
                passwordRepeat:"" ,
                typeUser:""
            }, 
            requestOptionsPost:{ 
                method: 'POST',
                mode: 'cors', 
                headers: {
                    "Content-Type": "application/json",},
                body: {},
            },
        }
    },
    methods:{
        regUser(){
            console.log(this.dataUser);
            if(this.dataUser.passwordRepeat==this.dataUser.password && this.dataUser.password!="" && this.dataUser.name !=""){
                console.log(JSON.stringify(this.dataUser));
                this.requestOptionsPost.body = JSON.stringify(this.dataUser)
                fetch('http://192.168.0.18:3000/userReg', this.requestOptionsPost)
                    .then(res => {
                        console.log(res)
                    })
                this.ThisForma == !this.ThisForma
                console.log(this.dataUser);
            }else if(this.dataUser.passwordRepeat!=this.dataUser.password){
                console.log("Пароли не совпадают");
            }else if(this.dataUser.passwordRepeat=="" || this.dataUser.password=="" || this.dataUser.name ==""){
                console.log("Вы оставили обязательное поле пустым");
            }
        }
    },
    
}
</script>

<style>
.formReg{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;

    width: 100%;
    height: 30vw;
}
</style>