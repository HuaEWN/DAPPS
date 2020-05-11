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
                    <img src="../assets/img/矩形 5(1).png" alt="" class="imgsb">
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

                <div class="oncepass">
                    <img src="../assets/img/矩形 6(3).png" alt="" class="oncesuo" >
                    <input type="password" placeholder="请再次输入密码" autocomplete="off" ref="oncepass" @blur="oncepassyz()" v-if="onceiseye">
                    <input type="text" placeholder="请再次输入密码" autocomplete="off" ref="oncepass" @blur="oncepassyz()" v-else>
                    <img src="../assets/img/矩形 6(2).png" alt="" class="onceeye" v-if="onceiseye" @click="onceiseye=!onceiseye">
                    <img src="../assets/img/矩形 6 拷贝.png" alt="" class="onceeye" v-else @click="onceiseye=!onceiseye">
                </div>
                <div class="oncepassyz">{{oncepass}}</div>

                <div class="yzm">
                    <img src="../assets/img/矩形 6(1).png" alt="" class="yzms">
                    <input type="text" placeholder="请输入邀请码(选填)" autocomplete="off">
                </div>

                <div class="duanxin">
                    <img src="../assets/img/矩形 6(4).png" alt="" class="dx" >
                    <input type="text" placeholder="请输入短信验证码">
                    <button class="yzm" @click.prevent="huoqu()">获取验证码</button>
                </div>
                <div class="bot" @click="toaxios()">确定</div>
            </form>

            <div class="bjj" v-if="isregister"></div>
            <div class="success" v-if="isregister">
                <p>{{this.msg}}</p>
                <div class="tologin" @click="gologin">去登陆</div>
            </div>

        </div>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data(){
        return{
            truephone:false,
            phone:'',  //手机号验证结果
            phoneId:null,   //保存用户输入的手机号
            truepassword:false,
            password:'', //密码验证结果
            psaawordId:null,   //保存用户输入的密码
            oncepsaawordId:null,   //保存用户再次输入的密码
            trueoncepass:false,
            oncepass:'',  //确认密码结果
            isregister:false,    //弹框是否显示
            iseye:true,        //密码眼睛
            onceiseye:true,      //再次密码眼睛
            msg:'',  //注册结果
            code:''   //获取到验证码
        }
    },
    methods:{
        
        gologin:function(){
            this.$router.push({
                path:'/Login'
            })
        },
        phoneyz:function(){
            console.log(this.$refs.telephone.value)
            var r = /^1[3-9]\d{9}$/;
            if(r.test(this.$refs.telephone.value)){
                // console.log("正确");
                this.phone="";
                this.truephone=true;
                this.phoneId=this.$refs.telephone.value;
                
            }else{
                this.phoneId=this.$refs.telephone.value;
                // console.log("错误");
                this.phone="手机号格式错误";
                return;
            }
        },
        passyz:function(){
            var r = /^[0-9a-zA-Z]{6,}$/;
            if(r.test(this.$refs.passwords.value)){
                // console.log("正确");
                this.password="";
                this.truepassword=true;
                this.psaawordId=this.$refs.passwords.value;
                
            }else{
                // console.log("错误");
                this.psaawordId=this.$refs.passwords.value;
                this.password="密码格式错误(6位以上不能有特殊字符)";
                return;
            }
        },
        oncepassyz:function(){
            if(this.$refs.oncepass.value==''){
                this.oncepass="不能为空";
                this.oncepsaawordId=null;
                return;
            }else if(this.$refs.oncepass.value==this.psaawordId){
                this.oncepsaawordId=this.$refs.oncepass.value;
                this.trueoncepass=true;
                this.oncepass="";
            }else{
                this.oncepsaawordId=this.$refs.oncepass.value;
                this.oncepass="两次密码不一致";
            }
        },
        toaxios:function(){
            if(this.truephone&&this.truepassword&&this.oncepsaawordId){
                console.log("请求"+this.phoneId)
                this.axios.post("https://dapp.quxiangyuntui.com/index.php/api/login/register",{
                    
                        phone:this.phoneId,
                        password:this.psaawordId,
                        again_password:this.oncepsaawordId
                    
                }).then(ok=>{
                    this.isregister=true;
                    this.msg=ok.data.msg;
                    console.log(ok.data);
                }).catch(err=>{
                    this.msg=err.data.msg;
                    console.log(err);
                })
            }
        },
        huoqu:function(){
            // console.log(this.phone.length)
            // console.log(this.password.length)
            // console.log(this.oncepass.length)
            if(this.phone.length>0||this.password.length>0||this.oncepass.length>0){
                Toast("表单不能为空");
            }else{
                this.$post("transfer/singleSend",{mobile:this.phoneId}).then((res)=>{
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
    top: 1.93rem;
}
.imgsb{
    position: absolute;
    left: 60vw;
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
    font-size: 4vw;
        outline: none;
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

.oncepass{
    position: relative;
}
.oncepass input{
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
.oncepass input::placeholder{
    font-size: 2vh;
    color: #909090;
}
.oncepass .oncesuo{
    width: 5.5vw;
    height: 3vh;
    position: absolute;
    top: 2vw;
    left: 14vw;
}
.oncepass .onceeye{
    width: 5.5vw;
    height: 3vh;
    position: absolute;
    top: 2vw;
    left: 80vw;
}
.oncepassyz{
    width: 75vw;
    height: 3vh;
    line-height: 3vh;
    font-size: 2vh;
    margin: 0 auto;
    text-align: center;
    /* border: 1px solid #aaa; */
}

.yzm{
    
    position: relative;
}
.yzm input{
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
.yzm input::placeholder{
    font-size: 2vh;
    color: #909090;
}
.yzm .yzms{
    width: 5.5vw;
    height: 3vh;
    position: absolute;
    top: 2vw;
    left: 14vw;
} 

.duanxin{
    margin-top: 3vh;
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
    z-index: 999;
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

.bjj{
    position: absolute;
     top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    margin: auto;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .3);
}

.success{
    width: 50vw;
    height: 23vh;
    background-color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 999;
    border-radius: 2vw;
}
.success p{
    font-size: 4vw;
    text-align: center;
    margin-top: 6vh;
    font-weight: 900;
}
.success .tologin{
    font-size: 3vw;
    color: #fff;
    background: -webkit-gradient(linear,0 0,100% 0,from(#56C6F4),to(#4FA6F8));
    width: 26vw;
    height: 5vh;
    line-height: 5vh;
    text-align: center;
    /* margin-top: 6vh; */
    margin: 6vh auto 0;
    border-radius: 6vw;
}
</style>