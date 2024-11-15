<template>
    <div>
        <div class="formReg">
            <input type="text" v-model="dataUser.name">
            <input type="password" v-model="dataUser.password">
            <button v-on:click="LogInUser">Войти</button>
        </div>
    </div>
</template>

<script>
export default{
    name:'formLogInVue',
    data(){
        return{
            dataUser:{
                name:"", 
                password:"",
                typeUser:"", 
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
        LogInUser(){
            if(this.dataUser.password!="" && this.dataUser.name !=""){
                console.log(JSON.stringify(this.dataUser));
                this.requestOptionsPost.body = JSON.stringify(this.dataUser)
                fetch('http://192.168.0.18:3000/userLogIn', this.requestOptionsPost)
                    .then(res => {
                        res.text().then(function(value){
                            sessionStorage.setItem("typeUser", value)
                            console.log(value);
                        })
                        sessionStorage.setItem("userName", this.dataUser.name)
                        location. reload()
                    })
            }else if(this.dataUser.password=="" || this.dataUser.name ==""){
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