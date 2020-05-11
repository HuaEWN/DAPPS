<template>
    <div class="teambj">
        <van-nav-bar
        title="团队"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
        
        />

        <div class="yaoqing">
            <div class="top">
                <span class="tone">邀请人数</span>
                <span class="tone">我的团队</span>
                <span class="tone">团队业绩</span>
            </div>
            <div class="bot">
                <span class="tbot">{{this.people}}</span>
                <span class="tbot">{{this.myteam}}</span>
                <span class="tbot">{{this.yj}}</span>
            </div>
        </div>

        <div class="xiangqing">
            <p class="xqtop">结算详情</p>
            <div class="xqbot">
                <div class="xqleft">
                    <span class="xqlefttop">昨日结算人数</span>
                    <span class="xqleftbot">{{this.yesterdaypeople}}</span>
                </div>
                <div class="xqright">
                    <span class="xqrighttop">昨日结算业绩</span>
                    <span class="xqrightbot">{{this.yesterdayyj}}</span>
                </div>
            </div>
        </div>

        <div class="xiangqing">
            <p class="xqtop">收益详情</p>
            <div class="xqbot">
                <div class="xqleft">
                    <span class="xqlefttop">昨日团队收益</span>
                    <span class="xqleftbot">{{this.yesterdayteam}}</span>
                </div>
                <div class="xqright">
                    <span class="xqrighttop">团队累计收益</span>
                    <span class="xqrightbot">{{this.yesterdaysy}}</span>
                </div>
            </div>
        </div>

        <div class="chengyuan">
            <p class="tdcy">团队成员</p>
            <div class="cycenter">
                <span class="cyname">姓名</span>
                <span class="cyshouyi">收益</span>
                <span class="cyname">邀请人数</span>
            </div>
            <div v-for="(index,item) in listes" :key="item">
                <div class="xxbot">
                    <span class="xxname">{{index.phone}}</span>
                    <span class="xxshouyi">{{index.bonus}}</span>
                    <span class="xxname">{{index.team_num}}</span>
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
            // lists:[
            //     {name:"用户(00521)",shouyi:"$521",renshu:"1"},
            //     {name:"用户(00521)",shouyi:"$521",renshu:"1"},
            //     {name:"用户(00521)",shouyi:"$521",renshu:"1"},
            //     {name:"用户(00521)",shouyi:"$521",renshu:"1"},
            //     {name:"用户(00521)",shouyi:"$521",renshu:"1"}
            // ],
            listes:null,

            //top
            people:"",  //邀请人数
            myteam:"",  //我的团队
            yj:"$6003",

            //center
            yesterdaypeople:"3",
            yesterdayyj:"$603",

            //bottom
            yesterdayteam:"3",
            yesterdaysy:"$603",

            token:null  //token
        }
    },
    created(){
        let qwe = localStorage.getItem("cun");
        this.token = qwe;

        this.$post("user/team",{token:this.token}).then((res)=>{
            console.log(res);
            this.people=res.data.num;
            this.myteam=res.data.team_num;

            this.listes = res.data.user_list;
        }).catch((err)=>{
                    console.log(err);
                    Toast('网络出现错误，请重试');
                })
    },
    methods:{
        onClickLeft() {
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
/deep/.van-nav-bar__title {
    max-width: 60%;
    margin: 0 auto;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
}
/deep/.van-icon-arrow-left::before {
    content: "\F008";
    color: #fff;
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
/deep/.van-nav-bar {
    position: relative;
    z-index: 1;
    height: 46px;
    line-height: 46px;
    text-align: center;
    background-color: transparent;
    -webkit-user-select: none;
    user-select: none;
}
.teambj{
    width: 100vw;
    height: 100vh;
    background: url(../assets/img/teambj.png);
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    overflow: hidden;
}
.yaoqing{
    width: 95vw;
    height: 15vh;
    background-color: #fff;
    border-radius: 1vw;
    margin: 7vh auto 0;
}
.yaoqing{
    display: flex;
    flex-direction: column;
}
.top{
        display: flex;
    justify-content: space-around;
    align-items: center;
        margin-top: 3vh;
        font-weight: 500;
}
.bot{
        display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40%;
}
.tone{
    font-size: 4vw;
    width: 33.33%;
    text-align: center;
    color: #202020;
}
.tbot{
    font-size: 4vw;
    width: 33.33%;
    text-align: center;
    color: #3D9BFD;
}
.xiangqing{
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 95vw;
    margin: 1.5vh auto 0px;
    border-radius: 1vw;
}
.xqtop{
    font-size: 4vw;
    border-bottom: 1px solid #F0F0F0;
    height: 6vh;
    line-height: 6vh;
    text-indent: 4vw;
}
.xqbot{
    display: flex;
    height: 13vh;
}
.xqleft{
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
        border-right: 1px solid #F0F0F0;
}
.xqright{
        display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
}
.xqlefttop{
        font-size: 4vw;
    margin: 2.5vh 0 2vh;
}
.xqleftbot{
    font-size: 4vw;
    color: #3D9BFD;
}
.xqrighttop{
     font-size: 4vw;
    margin: 2.5vh 0 2vh;
}
.xqrightbot{
    font-size: 4vw;
    color: #3D9BFD;
}

.chengyuan{
    width: 95vw;
    background-color: #fff;
    height: 26vh;
    border-radius: 1vw;
    margin: 1.5vh auto 0;
    overflow: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
}
.cycenter{
        display: flex;
    height: 4.6vh;
    line-height: 4.6vh;
    background-color: #B4D9FF;
    color: #315B87;
}
.xxbot{
    display: flex;
    height: 4.5vh;
    line-height: 4.5vh;
}
.tdcy{
    font-size: 3.5vw;
    height: 5vh;
    line-height: 5vh;
    text-indent: 2vw;
}
.cyname{
    font-size: 3vw;
    flex: 1;
    text-align: center;
}
.cyshouyi{
    font-size: 3vw;
    flex: 1;
    text-align: center;
    border-left: 1px solid #F0F0F0;
    border-right: 1px solid #F0F0F0;
}
.xxname{
    font-size: 3vw;
    flex: 1;
    text-align: center;
    color: #909090;
    border-bottom: 1px solid #F0F0F0;
}
.xxshouyi{
    font-size: 3vw;
    flex: 1;
    text-align: center;
    color: #909090;
    border-bottom: 1px solid #F0F0F0;
    border-left: 1px solid #F0F0F0;
    border-right: 1px solid #F0F0F0;
}
</style>