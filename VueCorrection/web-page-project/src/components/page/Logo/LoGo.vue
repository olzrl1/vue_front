<template>
  <div class="Logo">
    <router-link to="/">
      <img class="LogoImage" src="../../../assets/3.png">
    </router-link>
  </div>
</template>

<script>
export default{
  name : 'LoGo',
  components: {

  },
}
</script>



<style>
.Logo{
  width:13%;
  padding-left: 1%;
  padding-top:1%;
}
.LogoImage{
  width:80%;
}



/* Mobile */
/* .Logo{
    width: 50px;
    padding-left: 10px;
    padding-bottom: 5%;;
  } */

/* Tablet */
/* @media screen and (min-width:768px){
  .Logo{
    width:50px;
    padding-left: 20px;
    padding-top: 1%;
    padding-bottom: 5%;;
  }
} */

/* PC */
/* @media screen and (min-width:1440px){
  .Logo{
    width:50px;
    padding-left: 20px;
    padding-top: 1%;
    padding-bottom: 5%;
  }
} */

/* Mobile */
/* .Logo1{
  width:50px
} */

/* Tablet */
/* @media screen and (min-width:768px){
  .Logo1{
    width:100px;
  }
} */

/* PC */
/* @media screen and (min-width:1440px){
  .Logo1{
    width:150px;
  }
} */

</style>
