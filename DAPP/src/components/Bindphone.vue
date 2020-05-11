<template>
    <div>
        <van-nav-bar
        title="绑定手机"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
        
        />
        <van-cell-group>
            <van-field v-model="value" placeholder="输入手机号" />
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="yanzheng" placeholder="输入验证码" />
            <span class="yzm" @click="huoquyzm()">获取验证码</span>
        </van-cell-group>
        <div class="bot">
            <van-button type="info">确定</van-button>
        </div>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data(){
        return{
            value:"",
            yanzheng:"",
            token:null,  //token
            code:""  //后端验证码
        }
    },
    created(){
        let qwe = localStorage.getItem("cun");
        this.token = qwe;
    },
    methods:{
        onClickLeft() {
        this.$router.go(-1);
        },
        huoquyzm(){
            this.$get("transfer/singlesend",{token:this.token}).then((res)=>{
                console.log(res); 
                Toast(res.msg);
                this.code=res.data.code; 
            }).catch((err)=>{
                console.log(err);
                Toast('网络出现错误，请重试');
            })
        }
    }
}
</script>
<style scoped>
/deep/.van-nav-bar .van-icon {
    color: #000;
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
    border: none;
    -webkit-transform: scale(.5);
    transform: scale(.5);
}
/deep/.van-cell-group {
    background-color: #fff;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
}
/* /deep/[data-v-73e01ed1] .van-cell-group {
    background-color: #fff;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
} */
/deep/.van-button--normal {
    padding: 0 15px;
    font-size: 14px;
    width: 100vw;
}
.yzm{
    font-size: 4vw;
    width: 20vw;
    padding: 1vw 2vw;
    display: inline-block;
    position: absolute;
    top: 1vh;
    right: 3vw;
    color: #3D9BFD;
    border: 1px solid #3D9BFD;
    border-radius: 1vw;
}
.bot{
    display: flex;
    position: absolute;
    bottom: 0;
}
</style>