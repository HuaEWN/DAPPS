<template>
    <div class="bj">
        <van-nav-bar title="个人中心"  left-arrow >
        <template #right>
            <van-icon name="setting-o" size="18" @click="onClickRight" />
        </template>
        </van-nav-bar>

        <div class="tops">
            <img src="../assets/img/touxiang.png" alt="" class="imgs" @click="toinformation()">
            <div class="topright">
                <span class="names">TEARE`</span>
                <span class="gxqm">人生如梦一场~</span>
            </div>
        </div>

        <div class="team">
            <div class="one" @click="toteam()">
                <img src="../assets/img/team.png" alt="" class="teams">
                <span class="tuandui">团队</span>
            </div>
            <div class="one" @click="toannouncement()">
                <img src="../assets/img/gonggaos.png" alt="" class="teams">
                <span class="tuandui">公告</span>
            </div>
            <div class="one">
                <img src="../assets/img/tuijians.png" alt="" class="teams">
                <span class="tuandui">推荐</span>
            </div>
        </div>

        <div class="tonews">
            <div class="cwzd" @click="tofinancial()">
                <img src="../assets/img/myzd.png" alt="" class="cwzdimg">
                <div class="zdright">
                    <span class="texts">财务账单</span>
                    <img src="../assets/img/zdjt.png" alt="" class="jtimg">
                </div>
            </div>
            <div class="cwzd" @click="toearnings()">
                <img src="../assets/img/sylb.png" alt="" class="cwzdimg">
                <div class="zdright">
                    <span class="texts">收益列表</span>
                    <img src="../assets/img/zdjt.png" alt="" class="jtimg">
                </div>
            </div>
            <div class="cwzd">
                <img src="../assets/img/bzzx.png" alt="" class="cwzdimg">
                <div class="zdright">
                    <span class="texts">帮助中心</span>
                    <img src="../assets/img/zdjt.png" alt="" class="jtimg">
                </div>
            </div>
            <div class="cwzd">
                <img src="../assets/img/bbh.png" alt="" class="cwzdimg">
                <div class="zdright">
                    <span class="texts">版本号</span>
                    <span class="banben">V 1.1.2</span>
                </div>
            </div>
            <div class="cwzd" @click="tofeedback()">
                <img src="../assets/img/yjfk.png" alt="" class="cwzdimg">
                <div class="zdright">
                    <span class="texts">意见反馈</span>
                    <img src="../assets/img/zdjt.png" alt="" class="jtimg">
                </div>
            </div>
        </div>

        <div class="safe" @click="tuichu()">安全退出</div>

        <van-tabbar v-model="active">
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
            active:4,
            token:null  //token
        }
    },
    created(){
        let qwe = localStorage.getItem("cun");
        this.token = qwe;

        this.$get("user/index",{token:this.token}).then((res)=>{
            console.log(res);
            
        }).catch((err)=>{
            console.log(err);
            Toast('网络出现错误，请重试');
        })
    },
    methods:{
        //安全退出
        tuichu:function(){
            localStorage.clear();  //删除localstorage中cookie
            Toast('即将退出登录');
            setTimeout(()=>{
                this.$router.push({
                    path:'/Login'
                })
            },1000)
        },
        toinformation:function(){
            this.$router.push({
                path:'/Information'
            })
        },
        toteam:function(){
            this.$router.push({
                path:'/Team'
            })
        },
        toannouncement:function(){
            this.$router.push({
                path:'/Announcement'
            })
        },
        tofinancial:function(){
            this.$router.push({
                path:'/Financial'
            })
        },
        toearnings:function(){
            this.$router.push({
                path:'/Earnings'
            })
        },
        tofeedback:function(){
            this.$router.push({
                path:'/Feedback'
            })
        },
        onClickRight() {
            this.$router.push({
                    path:'/Setting'
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
        }
    }
}
</script>
<style scoped>
/deep/.van-icon-arrow-left::before {
    content: "\F008";
    font-size: 0;
}
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
    border: 0 solid #ebedf0;
    -webkit-transform: scale(.5);
    transform: scale(.5);
}
.bj{
    background-color: #f2f2f2;
    width: 100vw;
    height: 100vh;
}
.tops{
       width: 100vw;
    height: 23vh;
    background-color: #fff;
    display: flex;
}
.imgs{
        width: 21vw;
    height: 12vh;
}
.names{
    font-size: 4vw;
    color: #2B2B2B;
    font-weight: 500;
    margin-bottom: 2vh;
    margin-top: 1vh;
}
.gxqm{
    font-size: 3vw;
    color: #909090;
}
.topright{
    display: flex;
    flex-direction: column;
}
.team{
        width: 95vw;
    height: 14vh;
    background-color: #fff;
    /* margin: 0 auto; */
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
    border-radius: 1vw;
    position: absolute;
    top: 21.5vh;
    left: 2.5vw;
    display: flex;
}
.teams{
        width: 11vw;
    height: 6vh;
}
.one{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 33.33%;
}
.tuandui{
    
    font-size: 4vw;
    margin-top: 1vh;
}
.texts{
    font-size: 4vw;
    color: #282828;
}
.tonews{
        width: 95vw;
    margin: 8vh auto 0;
        border-radius: 2vw;
    overflow: hidden;
}
.cwzd{
        display: flex;
    background-color: #fff;
    width: 100%;
    height: 8.5vh;
    align-items: center;
}
.cwzdimg{
        width: 6vw;
    height: 3.5vh;
    padding: 0 1vw;
}
.zdright{
        display: flex;
    flex: 1;
    justify-content: space-between;
    border-bottom: 1px solid #E5E5E5;
    height: 8vh;
    align-items: center;
}
.jtimg{
    width: 2vw;
    height: 2vh;
    padding-right: 2vw;
}
.safe{
    font-size: 4vw;
    background-color: #ccc;
    width: 74vw;
    margin: 2vh auto 0;
    text-align: center;
    border-radius: 1vw;
    height: 7vh;
    line-height: 7vh;
    background-color: #FCDDE2;
    color: #CF5567;
}
.banben{
    font-size: 3vw;
    margin-right: 3vw;
}
</style>