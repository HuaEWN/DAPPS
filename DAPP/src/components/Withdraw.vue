<template>
    <div>
        <van-nav-bar
        title="提现"
        left-text=""
       
        left-arrow
        @click-left="onClickLeft"
        
        />

        <div class="tops">
            <span class="type">币种:</span>
            <div class="texts">
                <div class="toptype" @click="xiala()">
                    <span class="img"></span>
                    <input type="text" placeholder="请选择" v-model="choise" class="bizhongchange">
                    <img src="../assets/img/downxia.png" alt="" class="downxia">
                </div>
                <div class="bottype" v-if="this.isla">
                    <span class="onety" v-for="(index,item) in list" :key="item" @click.stop="thisone(index)">{{index.currency}}</span>
                </div>
            </div>
        </div>

        
        <van-cell-group>
        <span class="money">￥</span>
        <van-field v-model="money" placeholder="输入金额" />
        </van-cell-group>

        <div class="yue">
            <span class="btc">BTC</span>
            <span class="mymoney">余额:256</span>
        </div>

        <div class="yinying"></div>

        <van-cell-group>
        <span class="address">提现地址:</span>
        <van-field v-model="moneyhome" placeholder="输入钱包地址" />
        <img src="../assets/img/saomiao.png" alt="" class="sao">
        </van-cell-group>

        <p class="shouxu">手续费：2%</p>

        <div class="yinying"></div>

        <van-cell-group>
        <span class="address">备注:</span>
        <van-field v-model="beizhu" placeholder="请输入备注" />
        </van-cell-group>

        <van-cell-group>
        <span class="address">验证码:</span>
        <van-field v-model="yanzhengma" placeholder="请输入验证码" />
        <span class="yzm" @click="huoquyzm()">获取验证码</span>
        </van-cell-group>

        <div class="botb">
            <van-button type="info" @click="fukuan()">确定</van-button>
        </div>

        <div class="zhedang" v-if="this.iszhe"></div>
        <van-number-keyboard
        :show="show"
        extra-key="."
        
        @blur="show = false"
        @input="onInput"
        @delete="onDelete"
        />
        <div class="passwords" v-if="ispasswords">
            <img src="../assets/img/deletes.png" alt="" class="cuowu" @click="dianji()">
            <p class="shu">输入支付密码</p>
            <span class="moneys">${{this.money}}</span>

            <van-password-input
            :value="values"
            
            :focused="show"
            @focus="show = true"
            />
            
        </div>


    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data(){
        return{
            
            money:'',   //金额
            moneyhome:'',  //钱包地址
            beizhu:'',    //备注
            yanzhengma:'',   //验证码
            show:false,   //数字键盘显示
            values: '',   //密码内容
            iszhe:false,  //遮挡层显示与否
            ispasswords:false,  //密码框显示与否
            isid:"",  //选择的id
            token:null,  //token

            list:null,   //币种
            choise:"",    //当前选择的币种
            isla:false,   //下拉列表显示
            code:null,    //验证码
            
        }
    },
    created(){
        let qwe = localStorage.getItem("cun");
        this.token = qwe;

        //币种列表
        this.$get("transfer/currency",{token:this.token}).then((res)=>{
            console.log(res);
            this.list=res.data;
        }).catch((err)=>{
            console.log(err);
            Toast('网络出现错误，请重试');
        })


    },
    methods:{
        //获取验证码
        huoquyzm:function(){
            console.log(123)
            this.$get("transfer/singlesend",{token:this.token}).then((res)=>{
                console.log(res); 
                Toast(res.msg);
                this.code=res.data.code; 
            }).catch((err)=>{
                console.log(err);
                Toast('网络出现错误，请重试');
            })
        },
        xiala(){
            this.isla=!this.isla;
        },
        thisone(index){
            console.log(index)
            this.choise=index.currency;
            this.isid=index.id;
            this.isla=false;
        },

        onClickLeft() {
        this.$router.go(-1);
        },
        onInput(key) {
            this.values = (this.values + key).slice(0, 6);
            if(this.values.length==6){
                //提现接口
                this.$post("transfer/cash",{token:this.token,pay_password:this.values,money:this.money,currey_id:this.isid}).then((res)=>{
                    console.log(res);
                    Toast(res.msg);
                    this.show=false;  //数字键盘
                    this.iszhe=false;  //遮挡曾
                    this.ispasswords=false;  //密码框

                }).catch((err)=>{
                    console.log(err);
                    Toast("网络出现错误");
                })
            }
        },
        onDelete() {
        this.values = this.values.slice(0, this.values.length - 1);
        },

        //点击确定按钮
        fukuan:function(){

            this.show=true;  //数字键盘
            this.iszhe=true;  //遮挡曾
            this.ispasswords=true;  //密码框
        },
        //密码框叉号
        dianji:function(){
            this.iszhe=false;
            this.ispasswords=false;
            this.values=""
        }
    }
}
</script>
<style scoped>
/deep/.van-field__body {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    width: 40vw;
}

/deep/.van-nav-bar .van-icon {
    color: #000;
}
/deep/.van-cell-group {
    /* background-color: #ccc; */
    display: flex;
    width: 95vw;
    height: 7vh;
    margin: 3vh auto 0;
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
    border-top: 0 solid #ebedf0;
    -webkit-transform: scale(.5);
    transform: scale(.5);
}
/deep/.van-button {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    height: 44px;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 42px;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;
    -webkit-transition: opacity .2s;
    transition: opacity .2s;
    -webkit-appearance: none;
    -webkit-text-size-adjust: 100%;
    width: 100vw;
}
.tops{
    display: flex;
    align-items: center;
    width: 95vw;
    margin: 2vh auto 0;
}
.type{
    font-size: 4vw;
    color: #303030;
        margin-right: 7vw;
}
.el-select {
    display: inline-block;
    position: relative;
    width: 27vw;
}
.money{
    font-size: 8vw;
    width: 9vw;
    height: 7vh;
    line-height: 7vh;
    text-align: center;
    }

.yue{
    display: flex;
    margin-top: 0.5vh;
    margin-bottom: 2vh;
}
.btc{
    font-size: 3vw;
    padding: 0 4vw;
}
.mymoney{
    font-size: 3vw;
    color: #3D9BFD;
}
.yinying{
    width: 100vw;
    height: 1vh;
    background-color: #F0F0F0;
}
.address{
    font-size: 4vw;
    width: 26vw;
    height: 7vh;
    line-height: 6vh;
    text-align: left;
    color: #303030;
    }

.yzm{
        font-size: 3vw;
    display: inline-block;
    width: 20vw;
    height: 3vh;
    line-height: 3vh;
    text-align: center;
    border: 1px solid #3D9BFD;
    color: #3D9BFD;
    position: absolute;
    top: 1.5vh;
    right: 1vw;
    border-radius: 1vw;
}
.sao{
    width: 6vw;
    height: 3vh;
    position: absolute;
    top: 1.5vh;
    right: 1vw;
}
.shouxu{
    font-size: 3vw;
    color: #909090;
    text-align: center;
    text-indent: 76vw;
    height: 5vh;
    line-height: 4vh;
}
.botb{
    display: flex;
    position: fixed;
    bottom: 0;
}


.zhedang{
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.2);
    z-index: 99;
}
.passwords{
    width: 60vw;
    background-color: #fff;
    display: flex;
    height: 30vh;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    flex-direction: column;
    border-radius: 1vh;
    z-index: 99;
}
.cuowu{
    width: 4vw;
    height: 4vw;
    margin-top: 2vh;
    margin-left: 30vh;
}
.shu{
    font-size: 4vw;
    text-align: center;
    height: 4vh;
    line-height: 4vh;
}
.moneys{
font-size: 7vw;
    text-align: center;
    height: 11vh;
    line-height: 11vh;
}

/deep/.van-number-keyboard__body {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
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
    background-color: #E5E5E5;
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
    margin-left: 6vw;
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
</style>