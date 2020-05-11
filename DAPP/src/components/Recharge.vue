<template>
    <div>
        <van-nav-bar
        title="充值"
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
        <span class="address">数量:</span>
        <van-field v-model="shuliang" placeholder="请输入数量" />
        </van-cell-group>

        <van-cell-group>
        <span class="address">备注:</span>
        <van-field v-model="beizhu" placeholder="请输入备注" />
        </van-cell-group>
        

        <div class="botb">
            <van-button type="info" @click="isshow()">确定</van-button>
        </div>

        <div class="zhedang" v-show="this.istrue">
            <div class="white">
                    <img src="../assets/img/delete.png" alt="" @click="func()" class="imgs">
                    <img :src="this.imgs" alt="" class="ewm">
                    <div class="bottoms">
                        <span class="number">{{this.ewmdress}}</span>
                        <img src="../assets/img/add.png" v-clipboard:copy="this.ewmdress" v-clipboard:success="copy" v-clipboard:error="onError" class="adds">
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
             
            shuliang:null,  //数量
            beizhu:null,   //备注
            istrue:false,    //遮挡层是否显示
            imgs:'', //二维码图片
            ewmdress:'',  //二维码地址
            token:null,  //token

            list:null,   //币种
            choise:"",    //当前选择的币种
            isla:false,   //下拉列表显示
            onids:"",   //当前选中的id
            
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
        copy(e) {
            console.log(e.text);
        },
        onError(e) {
            console.log(e);
        },
        xiala(){
            this.isla=!this.isla;
        },
        thisone(index){
            console.log(index)
            this.choise=index.currency;
            this.onids=index.id;
            this.isla=false;
        },


      
        onClickLeft() {
            this.$router.go(-1);
        },
        func:function(){
            this.istrue=!this.istrue
        },
        isshow:function(){
            
            if(this.shuliang==null||this.beizhu==null){
                Toast("文本框内容不能为空");
                return;
            }else{
                //充值接口
                this.$post("transfer/recharge",{token:this.token,currey_id:this.onids,money:this.shuliang,remake:this.beizhu}).then((res)=>{
                        console.log(res);
                        Toast(res.msg);
                    }).catch((err)=>{
                        console.log(err);
                        Toast("网络出现错误");
                    })

                this.$post("user/moeny_address",{token:this.token,currey_id:this.onids}).then((res)=>{
                        console.log(res);
                        
                        this.imgs=`https://dapp.quxiangyuntui.com`+res.data.pay_name.money_address_img;
                        this.ewmdress=res.data.pay_name.money_address;
                        this.istrue=true; //二维码页面显示
                    }).catch((err)=>{
                        console.log(err);
                        Toast("网络出现错误");
                    })
            }
            
        }
    }
}
</script>
<style scoped>
/deep/.van-nav-bar .van-icon {
    color: #000;
}
/deep/.van-cell-group {
    background-color: #fff;
    display: flex;
    width: 95vw;
    margin: 2vh auto;
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
.van-button--normal {
    padding: 0 15px;
    font-size: 14px;
    width: 75vw;
    height: 7.5vh;
    margin: 9vh auto;
    border-radius: 1vw;
}
.el-select {
    display: inline-block;
    position: relative;
    width: 27vw;
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
.address{
    font-size: 4vw;
    width: 26vw;
    height: 7vh;
    line-height: 6vh;
    text-align: left;
    color: #303030;
    }
.botb{
    display: flex;
    
}
.zhedang{
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, .3);
    z-index: 999;
}
.white{
    width: 65vw;
    height: 35vh;
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
        display: flex;
    flex-direction: column;
}
.imgs{
    position: absolute;
    top: 1vh;
    right: 2vw;
}
.number{
    font-size: 3vw;
    color: #909090;
    margin-right: 5vw;
        width: 43vw;
    overflow: hidden;
    text-overflow: ellipsis;
}
.bottoms{
    display: flex;
    align-items: center;
    margin-top: 2vh;
}
.ewm{
    width: 30vw;
    height: 17vh;
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