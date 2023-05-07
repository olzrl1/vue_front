<template>
  <div class="HeaderSector">
    <div>
      <Logo/>
    </div>
    <div class="HeaderInfo">
      <img class="HeaderLogo" src = "../../../assets/1.png">
      <div class="HeaderText1">
        한손에 담은 인테리어 
      </div>
      <div class="HeaderText2">
        프로젝트 내용을 한곳에 담아 현장을 체크, 기록, 공유합니다.
      </div>
    </div>
  </div> 
</template>

<script>
import Logo from '../Logo/LoGo.vue'
export default{
  name : 'HeaDer',
  components: {
    Logo,
  }
}
</script>

<style>
.HeaderSector{
    background-color: #141829;
    border: 1px solid   #141829; 
    border-radius: 0em 0em 1em 1em; 
    padding-bottom: 10%;
}
.HeaderInfo{
  padding-top: 7%;
  padding-left:12%;
  text-align: left;
}
.HeaderLogo{
  width:28em;
}
/* Tablet */
@media screen and (max-width:768px) {
  .HeaderLogo{
  width:15em;
}
}
@media screen and (max-width:640px) {
  .HeaderLogo{
  width:6em;
}
}

.HeaderText1{
  color:white;
  font-weight: bold;
  font-size:55px;
  padding-bottom: 1%;
}
/* Tablet */
@media screen and (max-width:768px) {
  .HeaderText1{
  color:white;
  font-weight: bold;
  font-size:30px;
  padding-bottom: 1%;
}
}
@media screen and (max-width:640px) {
  .HeaderText1{
  color:white;
  font-weight: bold;
  font-size:12px;
  padding-bottom: 1%;
}
}

.HeaderText2{
  color:white;
  font-size:18px;
}
/* Tablet */
@media screen and (max-width:768px) {
  .HeaderText2{
  color:white;
  font-size:1px;
}
}

/* SmartPhone */
@media screen and (max-width:640px) {
  .HeaderText2{
  color:white;
  font-size:10px;
}
}



/* PC */
@media screen and (max-width:1280px) {
	
}
/* Tablet */
@media screen and (max-width:768px) {

}

/* SmartPhone */
@media screen and (max-width:640px) {

}
</style>

