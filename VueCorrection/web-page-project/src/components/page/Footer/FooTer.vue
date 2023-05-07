<template>
  <div>
    <fragment>
        <footer>
            <div class="footerWrapinner">
              <div class="footerInfo">
                    <div class="row" style="font-size: 25px;">
                        <span class="infoTxt">
                            (주) 데일리밀도
                        </span>
                        <br>
                        <ul>
                          <span class="infoTxt">대표 : 편용우</span>
                        <br>
                          <span class="infoTxt">주소 : </span>
                        <br>
                          <span class="infoTxt">사업자등록번호 : </span>
                        <br>
                          <span class="infoTxt">고객센터 : </span>
                        <br>
                          <span class="infoTxt">서비스 제안 및 문의 : jd@dailymildo.com</span>
                        <br>
                          <span class="infoTxt">제휴 제안 신청 : </span>   
                        <br>
                        <div class="footerCopyright">
                          Copyright ⓒ dailymildo. All rights reserved. 
                        </div> 
                        </ul>                      
                    </div>
  
              </div>
              <div class="footerMenu" style="padding-bottom: 100px; font-size: 20px; padding-left: 50px;">
                  <nav>
                        <a href="https://www.bizno.net/article/5058186384" target="_blank" rel="noopener">사업자정보확인</a>
                        <div class="space"></div>
                        <router-link to="/Service">서비스이용약관</router-link>
                        <div class="space"></div>
                        <router-link to="/Policy">개인정보처리방침</router-link>
                        <div class="space"></div>
                        <a href="https://www.bizno.net/article/5058186384" target="_blank" rel="noopener">회사정보</a>
                  </nav>
              </div>
            </div>
        </footer>
    </fragment>
  </div>
</template>

<script>
export default{
  name : 'FooTer',
  components: {

  }
}
</script>

<style>
footer {
    /* background: linear-gradient(169.91deg, #45507E 7.3%, #9EBDDE 65.14%, #8FA2E2 76.23%); */
    /* background: linear-gradient(172.5deg, #FDFDFD 6.13%, #9EBDDE 49.81%, #8FA2E2 91.44%); */
    /* background: linear-gradient(172.22deg, #FFFFFF 6.26%, #9EBDDE 42.05%, #45507E 65.32%); */
    background-color: #141829;
    color: white;
    border: 1px solid gray; 
    border-radius: 3em 3em 0em 0em;
  }
  .footerInfo{
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .space {
    width: 50px;
    height: auto;
    display: inline-block;
  }
  a{
     text-decoration-line: none;
  }
  a:link{
     color: white;
  }
  a:visited{
     color: white;
  }
  .footerWrapinner{
    padding: 50px;
    text-align: left;
  }
</style>
