<template>
    <div class="bj">
        <div class="top">
            <div class="kong"></div>
            <span class="zichan">资产</span>
            <div class="ic">
                <van-icon name="shrink" class="one" @click="tochange()"/>
                <van-icon name="notes-o" class="two" @click="tobill()"/>
            </div>
        </div>

        <div class="money">
            <div class="moneyleft">
                <span class="zc">总资产(元)</span>
                <div class="btomoney">
                    <input type="text" class="txts" v-model="text" v-if="iseye">
                    <input type="password" class="txts" v-model="text" v-else>
                    <img src="../assets/img/眼睛.png" alt="" class="imgs" v-if="iseye" @click="iseye=!iseye">
                    <img src="../assets/img/eyeclose.png" alt="" class="imgs" v-else @click="iseye=!iseye">
                </div>
            </div>
            <div class="moneyright">
                <div class="chongzhi" @click="torecharge()">充值</div>
                <div class="chongzhi" @click="towithdraw()">提现</div>
            </div>
        </div>

        <div class="bizhong">
            <span class="bz">币种</span>
            <img src="../assets/img/small.png" alt="" class="small">
        </div>

        <div class="btb" v-for="(index,item) in lists" :key="item">
            <div class="btbleft">
                <img :src="'https://dapp.quxiangyuntui.com/'+index.logo" alt="" class="btbimg">
                <div class="btright">
                    <div class="bttop">
                        <span class="jian">{{index.currency}}</span>
                        <!-- <span class="name">{{index.name}}</span> -->
                    </div>
                    <div class="btbot">
                        <span class="mou">{{index.money_address}}</span>
                        <img src="../assets/img/add.png" 
                        v-clipboard:copy="index.money_address" 
                        v-clipboard:success="copy" 
                        v-clipboard:error="onError" class="adds">
                    </div>
                </div>
            </div>
            <div class="btbright">
                <span class="sums">{{index.balance}}</span>
                <span class="qian">{{index.US}}</span>
            </div>
        </div>

        <!-- <span>{{this.txtes}}</span>
        <img src="../assets/img/add.png" 
        v-clipboard:copy="this.txtes" 
        v-clipboard:success="copy" 
        v-clipboard:error="onError" class="adds"> -->

        <van-tabbar v-model="active" class="bott">
        <van-tabbar-item icon="wap-home-o" @click="toindex()">首页</van-tabbar-item>
        <van-tabbar-item icon="pending-payment" @click="toproperty()">资产</van-tabbar-item>
        <van-tabbar-item icon="bar-chart-o" @click="toshareoption()">期权</van-tabbar-item>
        <van-tabbar-item icon="bell" @click="toconsult()">咨讯</van-tabbar-item>
        <van-tabbar-item icon="user-o" @click="topersonage()">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data(){
        return{
            token:null,  //token
            
            active: 1,  //vant底部导航
            iseye:true,
            text:'',  //总资产数
            // lists:[
            //     {imgs:require("../assets/img/btb.png"),type:"BTB",name:"比特币",some:"sadfsfjfyyjafad",adds:require("../assets/img/add.png"),number:"100",money:"$1234"},
            //     {imgs:require("../assets/img/btb.png"),type:"BTB",name:"比特币",some:"sadfsfjfyyjafad",adds:require("../assets/img/add.png"),number:"100",money:"$1234"},
            //     {imgs:require("../assets/img/btb.png"),type:"BTB",name:"比特币",some:"sadfsfjfyyjafad",adds:require("../assets/img/add.png"),number:"100",money:"$1234"},
            //     {imgs:require("../assets/img/btb.png"),type:"BTB",name:"比特币",some:"sadfsfjfyyjafad",adds:require("../assets/img/add.png"),number:"100",money:"$1234"},
            //     {imgs:require("../assets/img/btb.png"),type:"BTB",name:"比特币",some:"sadfsfjfyyjafad",adds:require("../assets/img/add.png"),number:"100",money:"$1234"}
            // ]
            lists:null,
            txtes:"asd"
        }
    },
    components:{
        
    },
    created(){
        let qwe = localStorage.getItem("cun");
        this.token = qwe;
        //个人资产
        this.$get("User/property",{token:this.token}).then((res)=>{
            // console.log(res);
            this.lists=res.data
        }).catch((err)=>{
                    console.log(err);
                    Toast('网络出现错误，请重试');
                })
        //总资产
        this.$get("User/all",{token:this.token}).then((res)=>{
            console.log(res);
            this.text=`$`+res.data.all
            
        }).catch((err)=>{
                    console.log(err);
                    Toast('网络出现错误，请重试');
                })
    },
    methods:{
        copy(e) {
            console.log(e.text);
        },
        onError(e) {
            console.log(e);
        },
        tobill(){
            this.$router.push({
                path:'/Bill'
            })
        },
        tochange(){
            this.$router.push({
                path:'/Change'
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
        },
        torecharge:function(){
            this.$router.push({
                path:'/Recharge'
            })
        },
        towithdraw:function(){
            this.$router.push({
                path:'/Withdraw'
            })
        }
    }
}
</script>
<style scoped>

.bj{
    height: 100vh;
    width: 100vw;
    background: url(../assets/img/white.png);
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    overflow: hidden;
}
.zichan{
    font-size: 5vw;
    color: #fff;
    margin-left: 12vw;
}
.top{
    display: flex;
    justify-content: space-between;
    width: 95vw;
    margin: 2vh auto 0;
}
.ic{
    display: flex;
}
.one{
    font-size: 7vw;
    color: #fff;
    padding-right: 1vw;
}
.two{
    font-size: 7vw;
    color: #fff;
}
.money{
    width: 95vw;
    height: 15vh;
    margin: 4vh auto 0;

    background: url(../assets/img/moneybj.png);
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
}
.zc{
    font-size: 3.9vw;
    color: #fff;
}
.moneyleft{
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 3vw;
}
.btomoney{
    display: flex;
}
.txts{
    width: 38vw;
    height: 4vh;
    outline: none;
    background-color: transparent;
    border: none;
}
.moneyright{
        flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
}
.imgs{
        width: 6vw;
    height: 2.5vh;
    padding-top: .8vh;
}
.chongzhi{
        font-size: 3vw;
    width: 20vw;
    height: 4vh;
    line-height: 4vh;
    background-color: #fff;
    text-align: center;
    border-top-left-radius: 4vw;
    border-bottom-left-radius: 4vw;
    margin-top: 1vh;
    color: #3D9BFD;
}
.btomoney input{
        font-size: 6vw;
    color: #fff;
}
.bz{
        font-size: 4vw;
    color: #303030;
    margin-left: 3vw;
}
.bizhong{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #F2F2F2;
    width: 100vw;
    height: 7vh;
    line-height: 7vh;
}
.small{
    width: 2vw;
    height: 1vh;
    margin-right: 2vw;
}

.btb{
    display: flex;
    width: 95vw;
    margin: 0 auto;
    height: 8vh;
    border-bottom: 1px solid #F2F2F2;
}
.btbleft{
        display: flex;
    flex: 1;
    align-items: center;
}
.btbimg{
    width: 5vw;
    height: 3vh;
}
.btright{
    display: flex;
    flex-direction: column;
    margin-left: 2vw;
}
.bttop{
    display: flex;
        margin-bottom: .6vh;
}
.btbot{
    display: flex;
        align-items: flex-end;
}
.jian{
    font-size: 4vw;
}
.name{
    font-size: 3vw;
        color: #909090;
    padding-top: .3vh;
    padding-left: 2vw;
}
.mou{
        font-size: 3vw;
    color: #909090;
    display: inline-block;
    width: 30vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.btbright{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex: 1;
    justify-content: space-evenly;
}
.adds{
        width: 5vw;
    height: 3vh;
    margin-left: 5vw;
}

.sums{
    font-size: 3vw;
    color: #303030;
}
.qian{
    font-size: 3vw;
    color: #909090;
}
</style>