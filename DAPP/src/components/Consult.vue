<template>
    <div>
        <div class="zxtops">
            <van-nav-bar
            title="咨讯"
            left-text=""
            
            left-arrow
            />
        </div>
        <div class="banner">
            <van-swipe :show-indicators=false>
            <van-swipe-item v-for="(image, index) in images" :key="index" >
                <img v-lazy="image" />
            </van-swipe-item>
            </van-swipe>
        </div>

        <div v-for="(index,item) in listes" :key="item">
            <div class="fab" @click="todetail(index.url)">
                <div class="lefts">
                    <span class="ltops">{{index.description}}</span>
                    <span class="lcen">{{index.title}}</span>
                    <div class="lbot">
                        <img src="../assets/img/zxtime.png" alt="" class="eye">
                        <span class="eyes">{{index.ctime}}</span>
                        <!-- <img src="../assets/img/zxeye.png" alt="" class="time"> -->
                        <!-- <span class="numb">{{index.number}}</span> -->
                    </div>
                </div>
                <div class="rights">
                    <img :src="index.picUrl" alt="" class="jinrong">
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

    </div>
</template>
<script>
    import Vue from 'vue';
    import { Lazyload } from 'vant';
    import { Toast } from 'vant';
    Vue.use(Lazyload);
    export default {
        data(){
            return{
                active: 3,  //vant底部导航
                images: [
                    require('../assets/img/banner.png'),
                    require('../assets/img/banner.png')
                ],
                // lists:[
                //     {texttop:"百度超级链新品及生态合作计划发布会",textbot:"这是一篇关于密码时间中热门应用领域",time:"16分钟前",number:"165",rightimg:require('../assets/img/rights.png')},
                //     {texttop:"百度超级链新品及生态合作计划发布会",textbot:"这是一篇关于密码时间中热门应用领域",time:"16分钟前",number:"165",rightimg:require('../assets/img/rights.png')},
                //     {texttop:"百度超级链新品及生态合作计划发布会",textbot:"这是一篇关于密码时间中热门应用领域",time:"16分钟前",number:"165",rightimg:require('../assets/img/rights.png')},
                //     {texttop:"百度超级链新品及生态合作计划发布会",textbot:"这是一篇关于密码时间中热门应用领域",time:"16分钟前",number:"165",rightimg:require('../assets/img/rights.png')}
                // ],
                listes:null,
                token:null  //token
            }
        },
        created(){
            let qwe = localStorage.getItem("cun");
            this.token = qwe;

            this.$get("user/information",{token:this.token}).then((res)=>{
                console.log(res);
                this.listes=res.data.newslist;
            }).catch((err)=>{
                console.log(err);
                Toast('网络出现错误，请重试');
            })
        },
        methods:{
            todetail:function(e){
                // this.$router.push({path:`${index.url}`})
                window.location.href=e;
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
        }
    }
</script>
<style scoped>
/deep/.van-nav-bar .van-icon {
    color: #1989fa;
    font-size: 0;
}
/deep/.van-nav-bar {
    position: relative;
    z-index: 1;
    height: 46px;
    line-height: 46px;
    text-align: center;
    background-color: #3D9BFD;
    -webkit-user-select: none;
    user-select: none;
    width: 100vw;
}
.zxtops{
        position: fixed;
    top: 0;
    display: flex;
    width: 100vw;
    z-index: 999;
}
/deep/.van-nav-bar__title {
    max-width: 60%;
    margin: 0 auto;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
}
/deep/.van-swipe {
    position: relative;
    overflow: hidden;
    cursor: grab;
    -webkit-user-select: none;
    user-select: none;
    width: 100%;
    height: 100%;
}
.banner{
    width: 95vw;
    height: 23vh;
    /* background-color: #ccc; */
    margin: 8.5vh auto 1vh;
}
.fab{
    width: 95vw;
    height: 18vh;
    /* background-color: #ccc; */
    margin: 0 auto;
    border-bottom: 1px solid #F0F0F0;
    display: flex;
    justify-content: space-between;
}
.lefts{
        display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 55%;
        justify-content: space-evenly;
}
.lbot{
    display: flex;
}
.eye{
    width: 3vw;
    height: 1.6vh;
    margin-top: .5vh;
}
.time{
    width: 4vw;
    height: 1.5vh;
    margin-top: .5vh;
    margin-left: 6vw;
    margin-right: 1vw;
}
.ltops{
    font-size: 4vw;
    color: #303030;
    font-weight: 600;
}
.lcen{
    font-size: 3vw;
    color: #909090;
}
.eyes{
    font-size: 3vw;
    color: #909090;
        margin-left: 1vw;
}
.numb{
    font-size: 3vw;
    color: #909090;
}
.jinrong{
    width: 32vw;
    height: 14vh;
}
</style>