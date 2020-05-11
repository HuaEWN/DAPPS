<template>
    <div>
        <van-nav-bar
        title="BTC"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
        
        />

        <van-cell-group>
            <span class="money">￥</span>
        <van-field v-model="value" placeholder="买入点数" />
        </van-cell-group>

        <div class="but">
            <span class="one"  v-for="(index,item) in money" :key="item" @click="funa(index)">{{index.num}}</span>
            
        </div>

        <div class="bj"></div>

        <div class="way">
            <span class="fkfs">付款方式</span>
            <div class="yue">
                <span class="yumoney">余额</span>
                <img src="../assets/img/yue.png" alt="" class="yu">
            </div>
        </div>

        <van-button type="info" @click="fukuan()">确定</van-button>

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
            <span class="moneys">${{this.value}}</span>

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
            money:[
                {num:100},
                {num:500},
                {num:1500}
            ],
            token:null,  //token
            value:null,  //钱
            show:false,   //数字键盘显示
            values: '',   //密码内容
            iszhe:false,  //遮挡层显示与否
            ispasswords:false,  //密码框显示与否
            id:'',
            some:''  //下单后后端返回结果
        }
    },
    created(){
        let qwe = localStorage.getItem("cun");
        this.token = qwe;

        this.id=this.$route.query.id;
        console.log(this.id)
    },
    methods:{
        onClickLeft() {
            this.$router.go(-1);
        },
        funa:function(index){
            this.value=index.num;
            
        },
        onInput(key) {
        this.values = (this.values + key).slice(0, 6);
        // console.log(this.values.length)
            if(this.values.length==6){
                this.$post("market/deal",{token:this.token,market_detail_id:this.id,money:this.value}).then((res)=>{
                    console.log(res);
                    
                        this.show=false;
                        this.iszhe=false;
                        this.ispasswords=false;
                        this.some=res.msg;
                        Toast(`${this.some}`);
                    
                }).catch((err)=>{
                    console.log(err);
                    Toast('网络出现错误，请重试');
                })
            }
        },
        onDelete() {
        this.values = this.values.slice(0, this.values.length - 1);
        },

        //点击确定按钮
        fukuan:function(){
            if(this.value==null){
                Toast('请输入金额');
                return;
            }else if(this.value<=0){
                Toast('请输入正确金额');
                return;
            }else{
                this.show=true;
                this.iszhe=true;
                this.ispasswords=true;
            }
            
        },
        //密码框叉号
        dianji:function(){
            this.iszhe=false;
            this.ispasswords=false;
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
/deep/.van-field__control {
    display: block;
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: .5vh;
    color: #323233;
    line-height: inherit;
    text-align: left;
    background-color: transparent;
    border: 0;
    resize: none;
}
/deep/.van-button--normal {
    /* padding: 0 15px; */
    padding-left: 26vw;
    font-size: 14px;
    width: 60vw;
    height: 6vh;
    line-height: 6vh;
    margin: 9vh auto 0;
    display: flex;
    border-radius: 1vw;
}
    .money{
    font-size: 8vw;
    width: 9vw;
    height: 7vh;
    line-height: 7vh;
    text-align: center;
    }

.but{
    display: flex;
}
    .one{
    font-size: 3vw;
    background-color: #D6EAFF;
    margin: 3vw 1.5vh;
    text-align: center;
    padding: .4vh 2vh;
    color: #3D9BFD;
    }

.bj{
    width: 100vw;
    margin-top: 4vh;
    height: 2vh;
    background-color: #F9F9F9;
}
.way{
    display: flex;
    width: 95vw;
    height: 7vh;
    line-height: 7vh;
    margin: 0 auto;
    justify-content: space-between;
}
.fkfs{
    font-size: 4vw;
    color: #303030;
}
.yue{
    display: flex;
}
.yumoney{
        font-size: 3vw;
    color: #C5C5C5;
}
.yu{
        width: 2vw;
    height: 2vh;
    margin-top: 2.7vh;
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
</style>