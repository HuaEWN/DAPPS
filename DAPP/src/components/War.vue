<template>
    <div class="big">
        <img src="../assets/img/箭头(3).png" alt="" class="arrow" @click="tonewpage()">
        <van-tabs v-model="activeName" color="#3D9BFD" title-active-color="#3D9BFD" line-width=30>   
        <van-tab title="消息战报" name="a">
            <div class="links" v-for="(v,i) in lists" :key="i">
                <router-link :to="{name:'Notice'}" class="sonlink">
                    <div class="top">
                        <span class="tleft">{{v.about}}</span>
                        <span class="tright" v-if="v.new"></span>
                    </div>
                    <div class="bot">
                        <div class="bleft">
                            <img src="../assets/img/系统消息.png" alt="" class="imgs">
                            <span class="gonggao">{{v.som}}</span>
                        </div>
                        <span class="time">{{v.times}}</span>
                    </div>
                </router-link>
            </div>
        </van-tab>
        <van-tab title="收益榜" name="b">
            <div class="bj">
                <div class="flexfa" v-for="(index,item) in moneys" :key="item">
                    <span class="ids">{{item+1}}</span>
                    <div class="flexs">
                        <div class="lefts">
                            <img :src="index.imgs" alt="" class="people">
                            <span class="name">{{index.name}}</span>
                        </div>
                        <div class="rights">
                            <span class="team">团队收益</span>
                            <span class="money">{{index.mon}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data(){
        return{
            token:null,  //token
            activeName: 'a',
            lists:[
                {about:"行情|早间数字货币行情战报",new:true,som:"系统消息",times:"2020-4-1 11:23"},
                {about:"行情|早间数字货币行情战报",new:true,som:"系统消息",times:"2020-4-2 11:23"},
                {about:"行情|早间数字货币行情战报",new:true,som:"系统消息",times:"2020-4-1 11:23"},
                
                {about:"行情|早间数字货币行情战报",new:false,som:"系统公告",times:"2020-4-3 11:23"}
                ],
            moneys:[
                {id:1,imgs:require("../assets/img/dl.png"),name:"古力娜扎",mon:9990},
                {id:2,imgs:require("../assets/img/dl.png"),name:"古力娜扎",mon:9990},
                {id:3,imgs:require("../assets/img/dl.png"),name:"古力娜扎",mon:9990}
            ]
        }
    },
    created(){
        let qwe = localStorage.getItem("cun");
        this.token = qwe;

        this.$get("user/source",{token:this.token}).then((res)=>{
            console.log(res);
            
        }).catch((err)=>{
            console.log(err);
            Toast('网络出现错误，请重试');
        })
    },
    methods:{
        tonewpage:function(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
/deep/.van-tabs__wrap {
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100vw;
}
/deep/.van-tab__pane, .van-tab__pane-wrapper {
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    box-sizing: border-box;
    width: 100%;
    margin-top: 44px;
}
    .big{
        width: 100vw;
        height: 100vh;
        background-color: #f2f2f2;
        box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
        border-radius: 1.5vw;
            overflow: hidden;
    overflow-y: auto;
    }
    .arrow{
    position: absolute;
    top: 5vw;
    left: 2vw;
    width: 3vw;
    height: 5vw;
    z-index: 999;
    }
    .top{
    display: flex;
    justify-content: space-between;
    }
    .top .tleft{
        font-size: 3.7vw;
    color: #000;
    font-weight: 600;
    }
    .top .tright{
        width: 2.5vw;
    height: 2.5vw;
    background-color: #3D9BFD;
    border-radius: 50vw;
    }
    .bot{
            display: flex;
            margin-top: 1vw;
    justify-content: space-between;
    }
    .bleft{
        display: flex;
    }
    .bleft .imgs{
    width: 3vw;
    height: 1.5vh;
    margin-top: 1vw;
    }
    .bleft .gonggao{
        font-size: 3vw;
        color: #909090;
    }
    .time{
        font-size: 3vw;
        color: #909090;
    }
    .sonlink{
    display: block;
    width: 95vw;
    height: 7vh;
    background-color: #fff;
    margin: 1.3vh auto;
    padding: 1.5vw;
    box-sizing: border-box;
    border-radius: 1.5vw;
    }



    .bj{
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    }
    .flexfa{
            display: flex;
    justify-content: space-between;
    }
    .ids{
            font-size: 5vw;
    width: 11vw;
    text-align: center;
    line-height: 18vw;

    }
    .flexs{
        flex: 1;
    display: flex;
    justify-content: space-between;
    padding-right: 4vw;
    padding-top: 1.5vh;
    padding-bottom: 1.5vh;
    border-bottom: .22vh solid #F2F2F2;
    }
    .lefts{
        display: flex;
    }
    .rights{
            display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    .people{
        width: 12vw;
    height: 7vh;
    }
    .name{
        font-size: 4vw;
    }
    .team{
        font-size: 4vw;
        color: #505050;
    }
    .money{
        font-size: 5vw;
        color: #FD5151;

    }
</style>