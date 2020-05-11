<template>
    <div>
        <van-nav-bar
        title="登录密码"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
       
        />
        <van-field v-model="password" type="password" label="新密码" placeholder="请输入密码，不能纯数字" />
        <van-field v-model="oncepassword" type="password" label="确认密码" placeholder="请再次输入密码" />
        
        <van-cell-group>
            <span class="yzm">验证码</span>
            <van-field v-model="value" placeholder="输入验证码" />
            <span class="huoqu" @click="huoquyzm()">获取验证码</span>
        </van-cell-group>

        <div class="qd">
            <van-button type="info" @click="changepassword()">确定</van-button>
        </div>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data(){
        return{
            password:"",  //新密码
            oncepassword:"",  //确认密码
            value:"",   //验证码
            token:null,  //token
            texts:"",   //修改结果
            code:""   //后端验证码
        }
    },
    created(){
        let qwe = localStorage.getItem("cun");
        this.token = qwe;
    },
    methods:{
        //获取验证码
        huoquyzm(){
            this.$get("transfer/singlesend",{token:this.token}).then((res)=>{
                console.log(res); 
                Toast(res.msg);
                this.code=res.data.code; 
            }).catch((err)=>{
                console.log(err);
                Toast('网络出现错误，请重试');
            })
        },
        onClickLeft() {
            this.$router.go(-1);
        },
        changepassword(){
            this.$post("user/change_login_pwd",{token:this.token,password:this.password,new_password:this.oncepassword,code:this.value}).then((res)=>{
                    console.log(res);
                    this.texts=res.msg;
                    Toast(this.texts);
                    localStorage.clear();  //删除localstorage中cookie
                    // console.log(localStorage.getItem("cun")+"123456");  //此时cookie为空
                    setTimeout(()=>{
                        this.$router.push({
                            path:'/Login'
                        })
                    },2000)
                }).catch((err)=>{
                    console.log(err);
                    Toast("网络出现错误");
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
/deep/.van-cell {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    background-color: #fff;
    border-bottom: 1px solid #E5E5E5;
}
/deep/[data-v-40e7d9f8] .van-cell {
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    background-color: #fff;
    border-bottom: none;
    width: 40vw;
}
/deep/.van-button--info {
    color: #fff;
    background-color: #F0F0F0;
    border: 1px solid #F0F0F0;
}
/deep/[data-v-40e7d9f8] .van-button--info {
    color: #909090;
    background-color: #F0F0F0;
    border: 1px solid #F0F0F0;
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
/deep/.van-cell-group {
    background-color: #fff;
    display: flex;
        border-bottom: 1px solid #f2f2f2;
}


.yzm{
    font-size: 3.5vw;
    width: 24vw;
    height: 7vh;
    line-height: 7vh;
    text-align: left;
    color: #303030;
    text-indent: 4vw;
}
.txt{
    text-indent: 24vw;
}
.huoqu{
        font-size: 3vw;
    position: absolute;
    top: 2vh;
    right: 3vw;
    display: inline-block;
    border: 1px solid #3D9BFD;
    padding: .7vw;
    color: #3D9BFD;
}
.qd{
    display: flex;
    position: absolute;
    bottom: 0;
}
</style>