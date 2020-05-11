<template>
    <div class="bj">
        <van-nav-bar
        title="推广"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
       
        />

    <div class="cent">
        <div class="solid">

            <div class="tou">
                <img :src="this.touxiang" alt="" class="touimg">
                <span class="name">{{this.name}}</span>
            </div>

            <p class="numb">你的邀请码 ： {{this.yqm}}</p>

            <div class="ewm">
                <img :src="this.ewm" alt="" class="ewmimg">
                <span class="sao">扫描二维码下载DAPP</span>
            </div>

            <div class="bot">
                <div class="pyq">
                    <img src="../assets/img/pyq.png" alt="" class="pyimg">
                    <span class="py">朋友圈</span>
                </div>
                <div class="pyq">
                    <img src="../assets/img/wx.png" alt="" class="pyimg">
                    <span class="py">微信</span>
                </div>
                <div class="pyq">
                    <img src="../assets/img/wb.png" alt="" class="pyimg">
                    <span class="py">微博</span>
                </div>
                <div class="pyq">
                    <img src="../assets/img/qq.png" alt="" class="pyimg">
                    <span class="py">QQ好友</span>
                </div>
                <div class="pyq">
                    <img src="../assets/img/qqkj.png" alt="" class="pyimg">
                    <span class="py">QQ空间</span>
                </div>
            </div>

        </div>
    </div>

    </div>
</template>
<script>
// import { Toast } from 'vant';
export default {
    data(){
        return{
            touxiang:require("../assets/img/touxiang.png"),
            name:"YERE",
            yqm:"3026530",
            ewm:require("../assets/img/ewm.png"),
            token:null  //token
        }
    },
    created(){
        let qwe = localStorage.getItem("cun");
        this.token = qwe;

        // this.$get("user/index",{token:this.token}).then((res)=>{
        //     console.log(res);
            
        // }).catch((err)=>{
        //     console.log(err);
        //     Toast('网络出现错误，请重试');
        // })
    },
     methods: {
        onClickLeft() {
        this.$router.go(-1);
        }
  }
}
</script>
<style scoped>
/deep/.van-nav-bar {
    position: relative;
    z-index: 1;
    height: 46px;
    line-height: 46px;
    text-align: center;
    background-color: #56C6F4;
    -webkit-user-select: none;
    user-select: none;
}
/deep/.van-nav-bar__title {
    max-width: 60%;
    margin: 0 auto;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
}
/deep/.van-nav-bar .van-icon {
    color: #fff;
}
/deep/[class*=van-hairline]::after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border: none;
    -webkit-transform: scale(.5);
    transform: scale(.5);
}

.bj{
    width: 100vw;
    height: 100vh;
    background: -webkit-gradient(linear,0 0,0 100%,from(#56C6F4),to(#4FA6F8));
}
.cent{
    width: 95vw;
    height: 87vh;
    background-color: #fff;
    margin: 3vh auto 0;
    border-radius: 2vw;
    overflow: hidden;
}
.solid{
    width: 90vw;
    height: 82vh;
    
    margin: 2.5vh auto 0;
    border: 1px dashed #3D9BFD;
    display: flex;
    flex-direction: column;
}
.tou{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
        margin-top: 3vh;
}
.touimg{
        width: 21vw;
    height: 12vh;
}
.ewm{
        display: flex;
    flex-direction: column;
    align-items: center;
}
.ewmimg{
        width: 45vw;
    height: 25vh;
}
.name{
    font-size: 5vw;
    margin-top: -1vh;
    color: #303030;
}
.numb{
    font-size: 4vw;
    text-align: center;
    color: #3D9BFD;
    margin: 3vh 0;
}
.sao{
    font-size: 3vw;
    color: #000;
}
.py{
    font-size: 3vw;
        margin-top: 1vh;
}
.bot{
    display: flex;
    justify-content: space-around;
    margin-top: 12vh;
}
.pyq{
    display: flex;
    flex-direction: column;
    width: 20%;
    align-items: center;
}
.pyimg{
    width: 11vw;
    height: 6vh;
}
</style>