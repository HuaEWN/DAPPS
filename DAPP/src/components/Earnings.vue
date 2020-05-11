<template>
    <div class="marg">
        <van-nav-bar
        title="收益列表"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
       
        />

        <div class="tops">
            <div v-for="(index,item) in listes" :key="item">

                <div class="shouyi" v-if="index.type==1">

                    <div class="top">
                        <span class="topleft">个人收益</span>
                        <span class="ups">{{index.money}}</span>
                    </div>
                    <div class="bot">
                        <span class="day">{{index.create_time}}</span>
                        <span class="time">{{index.type}}</span>
                    </div>
                </div>

                <div class="shouyi" v-else-if="index.type==2">
                    <div class="top">
                        <span class="topleft">团队收益</span>
                        <span class="ups">{{index.money}}</span>
                    </div>
                    <div class="bot">
                        <span class="day">{{index.create_time}}</span>
                        <span class="time">{{index.type}}</span>
                    </div>
                </div>
                <div v-else></div>
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
            //     {type:"个人收益",number:"+16",day:"2-28",time:"11:19"},
            //     {type:"团队收益",number:"+16",day:"2-28",time:"11:19"}
            // ],
            listes:null,
            newlistes:null,
            token:null  //token
        }
    },
    created(){
        let qwe = localStorage.getItem("cun");
        this.token = qwe;

        this.$get("user/commission",{token:this.token}).then((res)=>{
            console.log(res);
            this.listes=res.data;
            // this.newlistes=(this.listes.pop()).pop();
            // console.log(this.listes)
            // console.log(this.newlistes)
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
/deep/.van-nav-bar .van-icon {
    color: #000;
}
/deep/.van-nav-bar {
    position: relative;
    z-index: 1;
    height: 46px;
    line-height: 46px;
    text-align: center;
    background-color: #fff;
    -webkit-user-select: none;
    user-select: none;
    position: fixed;
    width: 100vw;
}
.tops{
    margin-top: 9vh;
}
.marg{
    overflow: hidden;
}
.shouyi{
    display: flex;
    flex-direction: column;
    width: 95vw;
    height: 9vh;
    margin: 0 auto;
    
        
        border-bottom: 1px solid #F0F0F0;
}
.top{
    display: flex;
    justify-content: space-between;
    height: 5vh;
    line-height: 5vh;
}
.bot{
    display: flex;
}
.topleft{
    font-size: 4vw;
    color: #202020;
}
.ups{
    font-size: 5.5vw;
    color: #3D9BFD;
}
.day{
    font-size: 3vw;
    color: #909090;
        margin-right: 3vw;
}
.time{
    font-size: 3vw;
    color: #909090;
}
</style>