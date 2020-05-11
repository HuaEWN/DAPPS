<template>
    <div class="bj">
        <div class="father">
            
            <img class="dapp" src="../assets/img/矩形 6.png" alt="">
            <div class="cs">
                测试系统:区块链一站式服务商！
            </div>
        
                <div class="rout">
                    <router-link to="/Login" class="one">密码登录</router-link>
                    <router-link to="/Register">注册</router-link>
                
                    <img src="../assets/img/矩形 5(1).png" alt="" class="imgs">
                </div>
            <form class="biao">
                <div class="phone">
                    <img src="../assets/img/矩形 6(1).png" alt="" class="six">
                    <span class="baliv">+86</span>
                    <input type="text" placeholder="请输入手机号" autocomplete="off" ref="telephone" @blur="phoneyz()">
                </div>
                <div class="phoneyz">{{phone}}</div>

                <div class="pass">
                    <img src="../assets/img/矩形 6(3).png" alt="" class="suo" >
                    <input type="password" placeholder="请输入密码" autocomplete="off" ref="passwords" @blur="passyz()" v-if="iseye">
                    <input type="text" placeholder="请输入密码" autocomplete="off" ref="passwords" @blur="passyz()" v-else>
                    <img src="../assets/img/矩形 6(2).png" alt="" class="eye" v-if="iseye" @click="iseye=!iseye">
                    <img src="../assets/img/矩形 6 拷贝.png" alt="" class="eye" v-else @click="iseye=!iseye">
                </div>
                <div class="passyz">{{password}}</div>

                <!-- <div class="duanxin">
                    <img src="../assets/img/矩形 6(4).png" alt="" class="dx" >
                    <input type="text" placeholder="请输入短信验证码">
                    <button class="yzm">获取验证码</button>
                </div> -->
                <button class="forget" @click="forget()">忘记密码</button>
                <div class="bot" @click="toaxios()">确定</div>
            </form>
        </div>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data(){
        return{
            phone:'',  //手机号验证结果
            phoneId:'',   //保存用户输入的手机号
            phoneajax:false,
            password:'', //密码验证结果
            psaawordId:'',   //保存用户输入的密码
            iseye:true,        //密码眼睛
            token:null,
            passajax:false,
            textes:''   //接口登录结果
        }
    },
    
    methods:{
        forget:function(){
            this.$router.push({
                path:'/Forget'
            })
        },
        phoneyz:function(){
            console.log(this.$refs.telephone.value)
            var r = /^1[3-9]\d{9}$/;
            if(r.test(this.$refs.telephone.value)){
                // console.log("正确");
                this.phone="";
                this.phoneId=this.$refs.telephone.value;
                this.phoneajax=true
            }else{
                // console.log("错误");
                this.phone="手机号格式错误";
                this.phoneajax=false
                return;
            }
        },
        passyz:function(){
            var r = /^[0-9a-zA-Z]{6,}$/;
            if(r.test(this.$refs.passwords.value)){
                // console.log("正确");
                this.password="";
                this.passajax=true;
                this.psaawordId=this.$refs.passwords.value;
            }else{
                // console.log("错误");
                this.passajax=false;
                this.password="密码格式错误(6位以上不能有特殊字符)";
                return;
            }
        },
        toaxios:function(){
            if(this.phoneajax&&this.passajax){
                console.log("请求"+this.phoneId)
                this.axios.post("https://dapp.quxiangyuntui.com/index.php/api/login/login",{
                    
                        phone:this.phoneId,
                        password:this.psaawordId
                    
                    // responseType: 'json'
                }).then(ok=>{
                    console.log(ok.data);
                    this.token=ok.data.data;
                    if(ok.data.code==200){
                        let strs = this.token;
                        localStorage.setItem("cun",strs);   //存储cookie
                        Toast('登录成功');
                        setTimeout(()=>{
                            this.$router.push({
                                path:'/Index',
                                // query:{
                                //     token:this.token,
                                // }
                            })
                        },3000)
                    }else{
                        this.textes=ok.data.data;
                        Toast(this.textes);
                    }
                }).catch(err=>{
                    Toast('网络出现错误，请重试');
                    console.log(err);
                })
                // this.$jsonp('https://dapp.quxiangyuntui.com/index.php/api/login/login',{
                //      params:{
                //         Phone:this.phoneId,
                //         password:this.psaawordId
                //     }
                // }).then(ok=>{
                //     console.log(ok+'123');
                // }).catch(err=>{
                //     console.log(err+'123');
                // })
            }else{
                console.log("不能请求")
            }
        }
    }
}
</script>
<style scoped>

.bj{
    height: 100%;
    background: -webkit-gradient(linear,0 0,0 100%,from(#5B98FE),to(#B986F9));
}
.father{
    width: 100%;
    height: 100%;
    background: url(../assets/img/矩形\ 5.png);
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    overflow: hidden;
}
.dapp{
    display: block;
    margin: .5rem auto .15rem;
}

.cs{
    width: 2.4rem;
    height: .15rem;
    font-size: .15rem;
    color: #fff;
    margin: 0 auto .48rem;
    text-align: center;
}
.rout{
    overflow: hidden;
    padding-bottom: .25rem;
}
.rout a{
    color: #202020;
    font-weight: .15rem;
    text-decoration: none;
    font-weight: 900;
    font-size: .15rem;
    float: left;
}
.one{
    margin-left: 1.16rem;
    margin-right: .47rem;

}
.imgs{
    position: absolute;
    left: 1.34rem;
    top: 1.98rem;
}
.imgsb{
    position: absolute;
    left: 2.26rem;
    top: 1.98rem;
}

.biao{
    margin-top: 2vh;
}

.phone{
    
    position: relative;
}
.phone input{
    width: 75vw;
    margin: 0 auto;
    display: block;
    border: none;
    border-bottom: 1px solid #f0f0f0;
    text-indent: 21vw;
    height: 5vh;
        outline: none;
        font-size: 4vw;
}
.phone input::placeholder{
    font-size: 2vh;
    color: #909090;
}
.phone .six{
    width: 5.5vw;
    height: 3vh;
    position: absolute;
    top: 2vw;
    left: 14vw;
} 
.phone .baliv{
    font-size: 1vw;
    position: absolute;
    top: .8vh;
    left: 24vw;
    display: inline-block;
    /* background-color: #ccc; */
    padding: .7vw;
    border: 1px solid #F0F0F0;
    color: #909090;
}

.phoneyz{
    width: 75vw;
    height: 3vh;
    line-height: 3vh;
    font-size: 2vh;
    margin: 0 auto;
    text-align: center;
    /* border: 1px solid #aaa; */
}


.pass{
    position: relative;
}
.pass input{
    width: 75vw;
    margin: 0 auto;
    display: block;
    border: none;
    border-bottom: 1px solid #f0f0f0;
    text-indent: 12vw;
    height: 5vh;
        outline: none;
        font-size: 4vw;
}
.pass input::placeholder{
    font-size: 2vh;
    color: #909090;
}
.pass .suo{
    width: 5.5vw;
    height: 3vh;
    position: absolute;
    top: 2vw;
    left: 14vw;
}
.pass .eye{
    width: 5.5vw;
    height: 3vh;
    position: absolute;
    top: 2vw;
    left: 80vw;
}
.passyz{
    width: 75vw;
    height: 3vh;
    line-height: 3vh;
    font-size: 2vh;
    margin: 0 auto;
    text-align: center;
    /* border: 1px solid #aaa; */
}

.duanxin{
    
    position: relative;
}
.duanxin input{
    width: 75vw;
    margin: 0 auto;
    display: block;
    border: none;
    border-bottom: 1px solid #f0f0f0;
    text-indent: 12vw;
    height: 5vh;
    outline: none;
    font-size: 4vw;
}
.duanxin input::placeholder{
    font-size: 2vh;
    color: #909090;
}
.duanxin .dx{
    width: 5.5vw;
    height: 3vh;
    position: absolute;
    top: 2vw;
    left: 14vw;
}
.duanxin .yzm{
    color: #3D9BFD;
    font-size: 3vw;
    background-color: #fff;
    box-shadow: none;
    border: 1px solid #3D9BFD;
    position: absolute;
    top: 1.2vh;
    right: 15vw;
}
.forget{
    width: 15vw;
    height: 3vh;
    color: #3D9BFD;
    line-height: 3vh;
    font-size: .13rem;
    margin: 0;
    padding: 0;
    background-color: #fff;
    box-shadow: none;
    border: none;
    float: right;
    margin-right: 15vw;
    margin-top: 2vh;
    font-weight: 900;
}
.bot{
        width: 64vw;
    height: 6vh;
    line-height: 6vh;
    margin: 7vh auto 0;
    color: #FEFEFE;
    font-size: 4vw;
    text-align: center;
    /* background-color: #4FA6F8; */
    background: -webkit-gradient(linear,0 0,100% 0,from(#56C6F4),to(#4FA6F8));
    border-radius: 5vw;
}
</style>