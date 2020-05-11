<template>
    <div class="bj">
        <div class="banner">
            <van-swipe :show-indicators=false>
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
            </van-swipe>
        </div>
        <div class="xinxi">
            <img src="../assets/img/lb.png" alt="" class="lb">
            <van-swipe class="my-swipe myclass" :show-indicators=false :autoplay="2000" :duration="2000" vertical>
                <van-swipe-item v-for="(i,t) in some" :key="t">{{i.news}}</van-swipe-item>
                
            </van-swipe>
        </div>

        <div class="imgs">
            <div class="imgleft" @click="towar()">
                <p class="xxzb">消息战报</p>
                <p class="pbots">每日最新消息</p>
            </div>
            <div class="imgright">
                <div class="rtop" @click="toguide()">
                    <p class="xszn">新手指南</p>
                    <p class="zn">每日最新消息</p>
                </div>
                <div class="rbot" @click="generalize()">
                    <p class="xszn">推广</p>
                    <p class="tg">每日最新消息</p>
                </div>
            </div>
        </div>

        <div class="typetop">
            <span class="bz">币种</span>
            <img src="../assets/img/small.png" alt="" class="small">
        </div>

        <div class="margtop">
            <div v-for="(index,item) in listes" :key="item">
                <div   class="money">
                    <div class="btbleft">
                        <img :src="index.logo_png" alt="" class="btb">
                        <div class="typeright">
                            <span class="aa">{{index.symbol}}</span>
                            <span class="bb"></span>
                            <p class="cc">{{index.price_btc}}</p>
                        </div>
                    </div>
                    <div class="btbright">
                        <div class="bail">
                            <div class="bai">
                                <img src="../assets/img/up.png" alt="" class="upd" v-if="index.percent_change_24h>0">
                                <img src="../assets/img/down.png" alt="" class="upd" v-else>
                                <p :class="index.percent_change_24h>0 ? 'bfb' : 'afa'">{{index.percent_change_24h}}</p>
                            </div>
                            <p class="qian">${{index.price_usd}}</p>
                        </div>
                        <van-button type="info" class="buttons" @click="tobet(index)">Bet</van-button>
                    </div>
                </div>
            </div>
        </div>

        <van-tabbar v-model="active">
        <van-tabbar-item icon="wap-home-o" @click="toindex()">首页</van-tabbar-item>
        <van-tabbar-item icon="pending-payment" @click="toproperty()">资产</van-tabbar-item>
        <van-tabbar-item icon="bar-chart-o" @click="toshareoption()">期权</van-tabbar-item>
        <van-tabbar-item icon="bell" @click="toconsult()">咨讯</van-tabbar-item>
        <van-tabbar-item icon="user-o" @click="topersonage()">个人中心</van-tabbar-item>
        </van-tabbar>
        <!-- <BotTab></BotTab> -->
    </div>
</template>
<script>
// import BotTab from "./BotTab"
import { Toast } from 'vant';
export default {
    data(){
        return{
            active: 0,  //vant底部导航
            images: [
                require('../assets/img/banner.png'),
                require('../assets/img/banner.png')
            ],
            some:[
                {news:"截至2020年3月30号19：00已公布最新战报"},
                {news:"截至2020年3月31号19：00已公布最新战报"},
                {news:"截至2020年3月32号19：00已公布最新战报"}
            ],
            lists:[
                    {imgs:require("../assets/img/btb.png"),typec:"BTC",type:"比特币",num:"0.5211314",upd:require("../assets/img/up.png"),bai:"0.64%",money:"$2345",isupd:true},
                    {imgs:require("../assets/img/btb.png"),typec:"BTC",type:"比特币",num:"0.5211314",upd:require("../assets/img/down.png"),bai:"0.64%",money:"$2345",isupd:false},
                    {imgs:require("../assets/img/btb.png"),typec:"BTC",type:"比特币",num:"0.5211314",upd:require("../assets/img/up.png"),bai:"0.64%",money:"$2345",isupd:true},
                    {imgs:require("../assets/img/btb.png"),typec:"BTC",type:"比特币",num:"0.5211314",upd:require("../assets/img/up.png"),bai:"0.64%",money:"$2345",isupd:true},
                    {imgs:require("../assets/img/btb.png"),typec:"BTC",type:"比特币",num:"0.5211314",upd:require("../assets/img/up.png"),bai:"0.64%",money:"$2345",isupd:true}
                ],
            // upd:require("../assets/img/up.png"),
            // updown:require("../assets/img/down.png"),
            listes:null,
            token:null  //token
        }
    },
    created(){
        let qwe = localStorage.getItem("cun");
        this.token = qwe;
        console.log(qwe);

        this.$get("market/market_list",{token:this.token}).then((res)=>{
            console.log(res);
            this.listes=res.data;
            console.log(this.listes);
        }).catch((err)=>{
            console.log(err);
            Toast('网络出现错误，请重试');
        })
    },
    methods:{
        tobet:function(index){
        this.$router.push({
                path:'/Bet',
                query:{
                    ids:index.id,
                }

            })
        // console.log(index)
        },
        towar:function(){
            this.$router.push({
                path:'/War'
            })
        },
        toguide:function(){
            this.$router.push({
                path:'/Guide'
            })
        },
        generalize:function(){
            this.$router.push({
                path:'/Generalize'
            })
        },
        toindex(){
            this.$router.push({
                path:'/Index'
            })
        },
        toproperty:function(){
            this.$router.push({
                path:'/Property'
            })
        },
        toshareoption:function(){
            this.$router.push({
                path:'/ShareOption'
            })
        },
        toconsult:function(){
            this.$router.push({
                path:'/Consult'
            })
        },
        topersonage:function(){
            this.$router.push({
                path:'/Personage'
            })
        }
    },
    components:{
        // BotTab
    }
}
</script>
<style scoped>
.van-swipe{
    width: 95vw;
    height: 24vh;
}
.bj{
    height: 100vh;
    width: 100vw;
    background: url(../assets/img/bjs.png);
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.banner{
    width: 95vw;
    margin: 0 auto;
}
.van-swipe-item img{
    width: 100%;
    height: 100%;
}
.xinxi{
    width: 95vw;
    height: 6.5vh;
    background-color: #fff;
    margin: 1vh auto;
    border-radius: 1vw;
}
.myclass {
    width: 95vw;
    height: 6.5vh;
    
    
    color: #25588C;
  
  text-align: center;
  
}

.van-swipe__track{
    width: 95vw!important;
    height: 6.5vh!important;
}
.van-swipe__track>.van-swipe-item{
    font-size: 4vw;
    width: 95vw;
    line-height: 6.5vh;
}
.lb{
    width: 7vw;
    height: 4vh;
    position: absolute;
    top: 26.5vh;
    z-index: 999;
    background-color: #fff;
}
.imgs{
    width: 95vw;
    height: 23vh;
    /* background-color: #ccc; */
    margin: 0 auto;
    display: flex;
}
.xxzb{
        font-size: 4vw;
    color: #4D4D4D;
    text-indent: 3vw;
    margin: 1vh 0 1vh 0;
}
.xszn{
    font-size: 4vw;
    text-indent: 3vw;
    padding-top: 1vh;
    padding-bottom: 1vh;
}
.zn{
    font-size: 3vw;
    text-indent: 3vw;
    color: #33A9FB;
}
.tg{
    font-size: 3vw;
    text-indent: 3vw;
    color: #EC7437;
}
.pbots{
    font-size: 3vw;
    text-indent: 3vw;
    color: #CC972E;
}
.imgleft{
    flex: 1;
    background: url(../assets/img/indexgj.png);
    background-position: center;
    background-size: 101% 100%;
    background-repeat: no-repeat;
}
.imgright{
    flex: 1;
}
.imgright .rtop{
    width: 100%;
    height: 50%;
    background: url(../assets/img/bj2.png);
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.imgright .rbot{
    width: 100%;
    height: 50%;
    background: url(../assets/img/bj3.png);
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.typetop{
    width: 95vw;
    height: 6vh;
    margin: 0 auto;
    /* background-color: #ccc; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.bz{
    font-size: 4vw;
    color: #303030;
}
.small{
    width: 1vw;
    height: 1vh;
}
.margtop{
        margin-bottom: 9vh;
}
.money{
    width: 95vw;
    height: 9vh;
    margin: 0 auto;
    /* background-color: #ccc; */
    border-top: 1px solid #F2F2F2;
    border-bottom: 1px solid #F2F2F2;
    display: flex;
    justify-content: space-between;
}
.btbleft{
        width: 30vw;
    height: 100%;
    /* background-color: #ccc; */
    display: flex;
    align-items: center;
}
.btb{
    width: 6vw;
    height: 3vh;
}
.typeright{
    display: flex;
    flex-wrap: wrap;
}
.aa{
        font-size: 4vw;
    width: 42%;
    text-align: center;
    color: #303030;
    font-weight: 900;
}
.bb{
    font-size: 3vw;
    width: 50%;
    color: #909090;
    padding-top: .3vh;
}
.cc{
    font-size: 3vw;
    width: 100%;
    text-indent: 2vw;
    margin-top: 1.3vh;
    color: #909090;
}
.btbright{
    display: flex;
    width: 34vw;
    align-items: center;
    justify-content: space-between;
}
.bail{
    display: flex;
    flex-wrap: wrap;
}
.bai{
        display: flex;
    width: 100%;
}
.bfb{
        font-size: 3vw;
    padding-bottom: 1vh;
    color: #7FCA5A;
}
.afa{
        font-size: 3vw;
    padding-bottom: 1vh;
    color: #F45C6E;
}
.qian{
    font-size: 3vw;
    width: 100%;
    text-indent: 3vw;
    color: #909090;
}
.upd{
        width: 1.5vw;
    height: 1.5vh;
    padding-top: 0.6vh;
    margin-right: 1.5vw;
}
.buttons{
    font-size: 4vw;
    width: 15vw;
    height: 5vh;
    line-height: 5vh;
    font-weight: 400;
    border-radius: 5vw;
}
</style>