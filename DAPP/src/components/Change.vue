<template>
    <div class="bj">
        <van-nav-bar
        title="闪兑"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
        />

        <div class="mtops">

                <div class="top">
                    <span class="gongshi">1 BTC=5525 USDT</span>
                    <span class="gongshi">1 BTC=5525 USDT</span>
                    <span class="gongshi">1 BTC=5525 USDT</span>
                    <span class="gongshi">1 BTC=5525 USDT</span>
                    <span class="gongshi">1 BTC=5525 USDT</span>
                    <span class="gongshi">1 BTC=5525 USDT</span>
                    <span class="gongshi">1 BTC=5525 USDT</span>
                    <span class="gongshi">1 BTC=5525 USDT</span>
                    
                </div>

            <div class="centers">
                <div class="select">
                    <div class="texts">
                        <div class="toptype" @click="xiala()">
                            <img :src="`https://dapp.quxiangyuntui.com`+this.btcimg" alt="" class="btcimg">
                            <input type="text" placeholder="请选择" v-model="choise" class="bizhongchange">
                            <img src="../assets/img/downxia.png" alt="" class="downxia">
                        </div>
                        <div class="bottype" v-if="this.isla">
                            <span class="onety" v-for="(index,item) in list" :key="item" @click.stop="thisone(index)">{{index.currency}}</span>
                        </div>
                    </div>
                       
                    <div class="texts">
                        <div class="toptype" @click="xialatwo()">
                            <img :src="`https://dapp.quxiangyuntui.com`+this.btcimgtwo" alt="" class="btcimg">
                            <input type="text" placeholder="请选择" v-model="choisetwo" class="bizhongchange">
                            <img src="../assets/img/downxia.png" alt="" class="downxia">
                        </div>
                        <div class="bottype" v-if="this.islatwo">
                            <span class="onety" v-for="(a,b) in listtwo" :key="b" @click.stop="thisonetwo(a)">{{a.currency}}</span>
                        </div>
                    </div>
                </div>

                <div class="number">
                    <input type="text" placeholder="输入数量" v-model="first">
                    <img src="../assets/img/changea.png" alt="" class="asd">
                    <input type="text" placeholder="输入数量" v-model="second">
                </div>

                <div class="shouxu">手续费:<span class="shoumoney">{{this.shouxumoney}}</span></div>
                
                <van-button type="info" class="duih" @click="changes()">兑换</van-button>

            </div>

            <p class="jilu">兑换记录</p>
            <div v-for="(index,item) in lists" :key="item">
                <div class="bto">
                    <div class="btop">
                        <span class="dhq">{{index.data}}</span>
                        <!-- <span class="dh">兑换</span> -->
                        <!-- <span class="dhh">{{index.hou}}</span> -->
                    </div>
                    <span class="time">{{index.create_time}}</span>
                </div>
            </div>
            
            <div class="zhe" v-show="istrue">
                <div class="white">
                    <img src="../assets/img/delete.png" alt="" @click="func()" class="imgs">
                    <span class="succ">兑换成功</span>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data(){
        return{
            token:null,  //token
          
            lists:null,  //兑换记录
            istrue:false,    //遮挡层是否显示
            
            first:"", //第一个数量
            second:"",  //第二个数量
            shouxumoney:"2 USDT",   //手续费

            list:null,   //币种
            choise:"",    //当前选择的币种
            isla:false,   //下拉列表显示
            onids:"",   //当前选中的id
            btcimg:"",  //select左边图片

            listtwo:null,   //币种
            choisetwo:"",    //当前选择的币种
            islatwo:false,   //下拉列表显示
            onidstwo:"",   //当前选中的id
            btcimgtwo:"",  //select左边图片
        }
    },
    created(){
        let qwe = localStorage.getItem("cun");
        this.token = qwe;
        
        //兑换记录
        this.$get("user/coin_record",{token:this.token}).then((res)=>{
            console.log(res);
            this.lists=res.data;
        }).catch((err)=>{
            console.log(err);
            Toast('网络出现错误，请重试');
        })

        //币种列表
        this.$get("transfer/currency",{token:this.token}).then((res)=>{
            console.log(res);
            this.list=res.data;
            this.listtwo=res.data;
        }).catch((err)=>{
            console.log(err);
            Toast('网络出现错误，请重试');
        })
    },
    methods:{
        //兑换按钮
        changes(){
            this.$post("transfer/conversion",{token:this.token,coin_money:this.first,coin_passivity_money:this.second,coin:this.onids,coin_passivity:this.onidstwo}).then((res)=>{
                    console.log(res);
                    Toast(res.msg);
                }).catch((err)=>{
                    console.log(err);
                    Toast("网络出现错误");
                })
        },
        xiala(){
            this.isla=!this.isla;
        },
        xialatwo(){
            this.islatwo=!this.islatwo;
        },
        thisone(index){
            console.log(index)
            this.choise=index.currency;
            this.onids=index.id;
            this.btcimg=index.logo;
            this.isla=false;
        },
        thisonetwo(a){
            console.log(a)
            this.choisetwo=a.currency;
            this.onidstwo=a.id;
            this.btcimgtwo=a.logo;
            this.islatwo=false;
        },


        onClickLeft() {
            this.$router.go(-1);
        },
        func:function(){
            this.istrue=!this.istrue
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
    background-color: #3D9BFD;
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

/deep/.van-nav-bar {
    position: relative;
    z-index: 1;
    height: 46px;
    line-height: 46px;
    text-align: center;
    background-color: #3D9BFD;
    -webkit-user-select: none;
    user-select: none;
    position: fixed;
    width: 100vw;
}
.mtops{
    margin-top: 55px;
}
.bj{
    width: 100vw;
    height: 100vh;
    background-color: #f2f2f2;
    overflow: hidden;
    overflow-y: auto;
}
.top{
        width: 95vw;
    height: 15vh;
    background-color: #fff;
    border-radius: 1vw;
    margin: 2vh auto;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    overflow-y: auto;
}
.gongshi{
        font-size: 3VW;
    width: 50%;
    text-align: center;
    height: 33.33%;
    line-height: 5vh;
    color: #303030;
}
.centers{
    width: 95vw;
    height: 32vh;
    background-color: #fff;
    border-radius: 1vw;
    margin: 2vh auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
.jilu{
    font-size: 4vw;
    color: #303030;
    width: 95vw;
    margin: 6vh auto 0;
    font-weight: 600;
}
.bto{
        display: flex;
    flex-direction: column;
    width: 95vw;
    height: 8vh;
    background-color: #fff;
    margin: 2vh auto 0;
    border-radius: 1vw;
    justify-content: space-evenly;
    }
.btop{
    display: flex;
}
.dhq{
    font-size: 3.5vw;
        padding-left: 1vw;
}
.dh{
    font-size: 3vw;
    color: #3D9BFD;
    padding: 0 2vw;
}
.dhh{
    font-size: 3.5vw;
}
.time{
    font-size: 3vw;
    color: #C5C5C5;
        padding-left: 1vw;
}
.zhe{
    position: absolute;
    top: 0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .3);
}
.white{
    width: 50vw;
    height: 23vh;
    background-color: #fff;
    border-radius: 1vw;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.imgs{
    position: absolute;
    top: 1vh;
    right: 2vw;
}
.succ{
    font-size: 4vw;
    font-weight: 600;
}

.el-select {
    display: inline-block;
    position: relative;
    width: 32vw;
}
.select{
    display: flex;
    justify-content: space-around;
    margin-top: 4vh;
}
.number{
    display: flex;
    justify-content: center;
    margin-top: 2vh;
    align-items: center;
}
.number input{
    width: 32vw;
    height: 5vh;
    font-size: 3vw;
        border: none;
    border-bottom: 1px solid #f2f2f2;
    
}

.number input::placeholder{
    font-size: 2vh;
    color: #909090;
}
.asd{
    width: 5vw;
    height: 3vh;
    margin: 0 5vw;
}

.shouxu{
    font-size: 3vw;
    color: #C5C5C5;
    text-indent: 7vw;
    margin-top: 2vh;
}
.shoumoney{
    font-size: 3vw;
    color: #C5C5C5;
}
.duih{
    
        width: 75vw;
    margin: 3vh auto;
    border-radius: 1vw;
}



.texts{
    display: flex;
    flex-direction: column;
    width: 30vw;
    position: relative;
    height: 6vh;
    
}
.toptype{
    display: flex;
    width: 30vw;
    height: 6vh;
    position: absolute;
    background-color: #C1DFFD;
    box-sizing: border-box;
    border-radius: 1vw;
    align-items: center;
}
.bottype{
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 6vh;
    width: 30vw;
    height: 20vh;
    overflow: hidden;
    overflow-y: auto;
    z-index: 99;
    background-color: #fff;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
}
.bizhongchange{
    width: 20vw;
    height: 5vh;
    background-color: transparent;
    border: navajowhite;
    font-size: 3vw;
    margin-top: .5vh;
    text-indent: 6vw;
}
.onety{
    font-size: 3vw;
    display: block;
    height: 5vh;
    line-height: 5vh;
    text-align: center;
}
.downxia{
    width: 3vw;
    height: 1.5vh;
}
input::input-placeholder{ 

    font-size: 3vw;
    
    }

.btcimg{
    width: 4vw;
    height: 2vh;
}
</style>