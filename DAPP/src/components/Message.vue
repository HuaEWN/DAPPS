<template>
    <div class="bj">
        <van-nav-bar
        title="消息战报"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
       
        />
        <img src="../assets/img/shuzi.png" alt="" class="szhb">
        <p class="topzb">行情|早间数字货币行情战报</p>
        <p class="time">时间截止 ：{{this.times}}</p>
        <div class="zbxq" v-for="(index,item) in lists" :key="item">
            <router-link :to="{name:'MessageDetails'}" class="zby">
                <div class="lefts">
                    <div class="tops">
                        <img :src="index.imgone" alt="" class="hb">
                        <span class="type">{{index.type}}</span>
                        <span class="name">{{index.name}}</span>
                    </div>
                    <div class="bots">
                        <span :class="index.one">{{index.number}}</span>
                        <span class="numb">{{index.float}}</span>
                    </div>
                </div>
                <div class="rights">
                    <span class="zf">24小时涨幅</span>
                    <div class="bai">
                        <img :src="index.imgtwo" alt="" class="upd">
                        <span :class="index.isup ? 'bai' : 'oncebai'">{{index.bai}}</span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
// import { Toast } from 'vant';
export default {
    data(){
        return{
            times:"2020-4-2 11:23",
            lists:[
                {imgone:require("../assets/img/btb.png"),type:"BTC",name:"比特币",number:"1",float:"0.2012564",imgtwo:require("../assets/img/up.png"),bai:"0.64",isup:true,one:"first"},
                {imgone:require("../assets/img/btb.png"),type:"BTC",name:"比特币",number:"2",float:"0.2012564",imgtwo:require("../assets/img/up.png"),bai:"0.64",isup:true,one:"second"},
                {imgone:require("../assets/img/btb.png"),type:"BTC",name:"比特币",number:"3",float:"0.2012564",imgtwo:require("../assets/img/down.png"),bai:"0.64",isup:false,one:"mc"},
                {imgone:require("../assets/img/btb.png"),type:"BTC",name:"比特币",number:"4",float:"0.2012564",imgtwo:require("../assets/img/up.png"),bai:"0.64",isup:true,one:"mc"}
            ],
            token:null  //token
        }
    },
    methods:{
        onClickLeft() {
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
/deep/.van-nav-bar .van-icon {
    color: #000;
}
.bj{
    width: 100vw;
        height: 100vh;
        background-color: #f2f2f2;
}
.szhb{
    display: flex;
    width: 100vw;
    height: 15vh;
}
.topzb{
    font-size: 4vw;
    width: 95vw;
    margin: 3vw auto 0;
    color: #000;
}
.time{
    font-size: 3vw;
    color: #909090;
    width: 95vw;
    margin: 1.5vw auto 0;
}
.zbxq{
        width: 95vw;
    height: 7vh;
    background-color: #fff;
    margin: 2vh auto 0;
    border-radius: 1vw;
}
.zby{
        width: 100%;
    display: flex;
    height: 100%;
    justify-content: space-between;
}
.lefts{
    /* background-color: #ccc; */
    width: 35vw;
    height: 100%;
}
.tops{
    display: flex;
}
.hb{
        width: 5vw;
    height: 2.9vh;
    padding-top: .5vh;
    padding-left: 1vw;
}
.bots{
    display: flex;
}
.type{
    font-size: 4vw;
    font-weight: 600;
    color: #303030;
    padding: 0 2vw;
        padding: .5vh 2vw 0;
}
.name{
    font-size: 3vw;
    color: #909090;
    padding-top: .3vh;
        padding: .6vh 2vw 0;
}
.first{
    font-size: 3vw;
    display: inline-block;
    width: 3.3vw;
    height: 2vh;
    line-height: 2vh;
    text-align: center;
    background-color: skyblue;
    margin: 2vw 2vw;
    border-radius: .7vw;
    color: #fff;
}
.second{
    font-size: 3vw;
    display: inline-block;
    width: 3.3vw;
    height: 2vh;
    line-height: 2vh;
    text-align: center;
    background-color: #FD9C3D;
    margin: 2vw 2vw;
    border-radius: .7vw;
    color: #fff;
}
.mc{
    font-size: 3vw;
    display: inline-block;
    width: 3.3vw;
    height: 2vh;
    line-height: 2vh;
    text-align: center;
    background-color: #ccc;
    margin: 2vw 2vw;
    border-radius: .7vw;
    color: #fff;
}
.numb{
        font-size: 3vw;
    display: inline-block;
    width: 19vw;
    height: 3vh;
    line-height: 4vh;
    color: #909090;
    text-indent: 1vw;
}
.rights{
   /* background-color: #ccc; */
    width: 23vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 2vw;
}


.zf{
    font-size: 3vw;
    padding-top: .7vh;
    color: #909090;
}
.ups{
    font-size: 3vw;
}
.bai{
    display: flex;
    display: flex;
    margin-top: .5vh;
    color: #7FCA5A;
    font-size: 3vw;
}
.oncebai{
    display: flex;
    display: flex;
    margin-top: .5vh;
    color: #F45C6E;
    font-size: 3vw;
}
.upd{
    width: 2vw;
    height: 2vh;
    padding-top: .4vh;
    padding-right: 2vw;
}
</style>