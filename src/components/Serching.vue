<template>
  <div class="contentDiv">
    <div class="serchDiv">
      <input type="text" class="serchInput"> 
      <button class="serchButton"><img src="../assets/serch.png" alt="" class="sercPng"></button>
    </div>

  </div>
  <div class="offers">
    <div class="offer">
            <div>Название вакансии</div>
            <div>Имя компании/поставщика</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SerchingVue',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sercPng{
  width: 1vw;
  height: 20px;
}
.serchInput{
  width: 30vw;
}
.serchButton{
  /* margin-left: 10px; */
}
.serchDiv{
  width: 40vw;
  display: flex;
  justify-content: space-around;
  height: 30px;
  /* margin-top: 1vw; */
}
.contentDiv{
  width: 100%;
  border: #000000;
  border: 5px;
  display: flex;
  justify-content: center;
}
.offers{
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
