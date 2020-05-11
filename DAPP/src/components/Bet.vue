<template>
    <div>
        <van-nav-bar :title="this.types"  left-arrow  @click-left="onClickLeft" @click-right="onClickRight">
        <template #right>
            <van-icon name="clock-o" size="18" />
        </template> 
        </van-nav-bar>

        <div class="top">
            <span class="aa">涨幅指数</span>
            <span class="bb">收益率</span>
            <span class="cc">可交易量</span>
        </div>

        <div v-for="(index,item) in listes" :key="item">
            <!-- <router-link :to="{name:'Order',}"  class="number"> -->
            <div  class="number" @click="toorder(index)">
            
                <div class="lefts">
                    <img src="../assets/img/up.png" alt="" class="imgs" v-if="index.floating_rate>0">
                    <img src="../assets/img/down.png" alt="" class="imgs" v-else>
                    
                    <span :class="index.floating_rate>0 ? 'bai' : 'oncebai'">{{index.floating_rate}}%~{{index.floating_rate_end}}%</span>
                </div>
                <div class="center">{{index.earnings}}%</div>
                <div class="rights">{{index.can_be_traded}}</div>
            <!-- </router-link> -->
            </div>
        </div>

    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data(){
        return{
            // lists:[
            //     {imgs:require("../assets/img/up.png"),zhang:"1%",lv:"4.68%",liang:"5211314.10",isupd:true},
            //     {imgs:require("../assets/img/up.png"),zhang:"1%",lv:"4.68%",liang:"5211314.10",isupd:true},
            //     {imgs:require("../assets/img/up.png"),zhang:"1%",lv:"4.68%",liang:"5211314.10",isupd:true},
            //     {imgs:require("../assets/img/down.png"),zhang:"1%",lv:"4.68%",liang:"5211314.10",isupd:false},
            //     {imgs:require("../assets/img/down.png"),zhang:"1%",lv:"4.68%",liang:"5211314.10",isupd:false},
            //     {imgs:require("../assets/img/down.png"),zhang:"1%",lv:"4.68%",liang:"5211314.10",isupd:false}
            // ],
            listes:null,
            token:null,
            types:null   //index传入币种类型
        }
    },
    methods:{
        onClickLeft() {
            this.$router.go(-1);
        },
        onClickRight(){
            this.$router.push({
                path:'/History'
            })
        },
        toorder:function(index){
            this.$router.push({
                path:'/Order',
                query:{
                    rate:index.floating_rate,
                    end:index.floating_rate_end,
                    earnings:index.earnings,
                    volume:index.user_max_volume,
                    topname:this.types,
                    ids:index.id
                }
            })
            console.log(index);
        }
    },
    created(){
        let qwe = localStorage.getItem("cun");
        this.token = qwe;
        
        this.types = this.$route.query.ids;
        console.log(this.types);
        this.$get("market/market_detail_list",{token:this.token,id:this.types}).then((res)=>{
            console.log(res);
            this.listes=res.data
        }).catch((err)=>{
            console.log(err);
            Toast('网络出现错误，请重试');
        })
    }
}
</script>
<style scoped>
/deep/ .van-nav-bar .van-icon {
    color: #000!important;
}
/deep/ .van-nav-bar__title {
    max-width: 60%;
    margin: 0 auto;
    color: #303030;
    font-weight: 500;
    font-size: 4.5vw;
}
.top{
        width: 100vw;
    height: 4vh;
    background-color: #F0F0F0;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.aa{
    font-size: 3vw;
    flex: 1;
    text-align: center;
}
.bb{
        font-size: 3vw;
    flex: 1;
    text-align: center;
}
.cc{
        font-size: 3vw;
    flex: 1;
    text-align: center;
}
.number{
    width: 100vw;
    height: 5.5vh;
    /* background-color: #ccc; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #F0F0F0;
}
.lefts{
    display: flex;
    flex: 1;
    justify-content: center;
}
.imgs{
    width: 2vw;
    height: 1.5vh;
    padding-top: 1.5vw;
}
.bai{
        font-size: 4vw;
    padding-left: 1vw;
    color: #7FCA5A;
}
.oncebai{
    font-size: 4vw;
    padding-left: 1vw;
    color: #F45C6E;
}
.center{
    font-size: 4vw;
    flex: 1;
    text-align: center;
    color: #303030;
}
.rights{
        font-size: 4vw;
    flex: 1;
    text-align: center;
    color: #3D9BFD
}
</style>