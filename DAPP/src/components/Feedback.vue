<template>
    <div class="bj">
        <van-nav-bar
        title="意见反馈"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
       
        />

        <div class="text">
            <el-input
            type="textarea"
            :rows="7"
            resize="none"
            placeholder="请输入您的宝贵意见"
            v-model="textarea">
            </el-input>
        </div>

        <div class="tijiao">
            <van-button type="info" @click="tosubmit()">提交</van-button>
        </div>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data(){
        return{
            textarea: '',  //用户输入内容
            token:null  //token
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
        tosubmit:function(){
            setTimeout(()=>{
                this.$post("user/opinion",{token:this.token,opinion:this.textarea}).then((res)=>{
                    console.log(res);
                    Toast(`${res.msg}`);
                    this.textarea="";
                }).catch((err)=>{
                    console.log(err);
                    Toast('网络出现错误，请重试');
                })
            },1000)
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
.bj{
    width: 100vw;
    height: 100vh;
    background-color: #f2f2f2;
}
.text{
    display: flex;
    width: 95vw;
    margin: 3vh auto 0;
}
.tijiao{
        display: flex;
    justify-content: center;
    margin-top: 9vh;
}
.van-button {
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
    width: 67vw;
    border-radius: 1vw;
}
.van-button--info {
    color: #fff;
    background-color: #3D9BFD;
    border: 1px solid #3D9BFD;
}
</style>