<template>
    <div>
        <van-nav-bar
        :title="this.type"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
        
        />

        <div class="upd">
            <p class="zhang">涨幅指数</p>
        </div>
        <div class="bai">
            <img src="../assets/img/up.png" alt="" class="imgs" v-if="this.up>0">
            <img src="../assets/img/down.png" alt="" class="imgs" v-else>
            <span :class="this.up>0 ? 'num' : 'oncenum'">{{this.up}}%~{{this.downs}}%</span>
        </div>

        <div class="center">
            <div class="cleft">
                <p class="aa">收益率</p>
                <p class="bb">{{this.shouyi}}%</p>
            </div>
            <span class="line"></span>
            <div class="cright">
                <p class="aa">可交易量</p>
                <p class="bb">{{this.jiaoyi}}</p>
            </div>
        </div>

        <van-button type="info" @click="toby()">下单</van-button>


    </div>
</template>
<script>
// import { Toast } from 'vant';
export default {
    data(){
        return{
            imgs:require("../assets/img/up.png"),
            id:'',
            type:"", //种类
            up:"",   //涨幅指数
            downs:"",  //涨幅指数
            shouyi:"",  //收益率
            jiaoyi:"",  //可交易量
            istrue:true,
            token:null  //token
        }
    },
    created(){
        this.up=this.$route.query.rate;
        this.downs=this.$route.query.end;
        this.shouyi=this.$route.query.earnings;
        this.jiaoyi=this.$route.query.volume;
        this.type = this.$route.query.topname;
        this.id=this.$route.query.ids;
    },
    methods:{
        onClickLeft() {
        this.$router.go(-1);
        },
        toby:function(){
            this.$router.push({
                path:'/OrderSuccess',
                query:{
                    id:this.id
                }
            })
        }
    }
}
</script>
<style scoped>
/deep/ .van-nav-bar {
    position: relative;
    z-index: 1;
    height: 46px;
    line-height: 46px;
    text-align: center;
    background-color: #3D9BFD;
    -webkit-user-select: none;
    user-select: none;
}
/deep/ .van-nav-bar .van-icon {
    color: #fff;
}
/deep/ .van-nav-bar__title {
    max-width: 60%;
    margin: 0 auto;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
}
/deep/.van-button--normal {
    padding: 0 36px;
    font-size: 4vw;
    display: flex;
    width: 60vw;
    height: 6vh;
    line-height: 6vh;
    align-items: center;
    justify-content: center;
    border-radius: 1vw;
    margin: 4vh auto;
}
.zhang{
    width: 100vw;
    font-size: 3vw;
    text-align: center;
    margin-top: 5vh;
}
.num{
    font-size: 4vw;
    color: #7FCA5A;
}
.oncenum{
    font-size: 4vw;
     color: #F45C6E;
}
.center{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 5vh;
    border-bottom: 1px solid #F0F0F0;
    padding-bottom: 3vh;
}
.line{
        width: .5vw;
    background-color: #ccc;
    height: 3.5vh;
}
.cleft{
    flex: 1;
    text-align: center;
}
.cright{
    flex: 1;
    text-align: center;
}
.imgs{
    width: 2vw;
    height: 1.5vh;
    margin-top: .9vh;
    margin-right: 1vw;
}
.bai{
    display: flex;
    justify-content: center;
    margin-top: 1vh;
}
.aa{
    font-size: 3vw;
    margin-bottom: 1vh;
}
.bb{
    font-size: 4vw;
    color: #3D9BFD;
}
</style>