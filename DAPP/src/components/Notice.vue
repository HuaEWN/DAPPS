<template>
    <div>
        <van-nav-bar
        title="平台公告"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
       
        />

        <div class="add">对于平台新增功能说明</div>
        <div class="time">{{this.times}}</div>
        <div class="text">
            <span class="top">
                {{this.textone}}
            </span>
            <img :src="this.imgs" alt="" class="imgs">
            <span class="top">
               {{this.texttwo}}
            </span>
        </div>

    </div>
</template>
<script>
// import { Toast } from 'vant';
export default {
    data(){
        return{
            times:"25分钟前",
            textone:"数字加密货币,比特币等行业新闻资讯，区块链咨询接口请点击区块链新闻",
            texttwo:"区块链咨询接口请点击区块链新闻,数字加密货币,比特币等行业新闻资讯，",
            imgs:require("../assets/img/ggimg.png"),
            token:null  //token
        }
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
    color: #202020;
}
.add{
    width: 95vw;
    margin: 0 auto;
    font-size: 3.7vw;
    font-weight: 900;
    
    color: #303030;
    /* background-color: #ccc; */
    height: 6vh;
    line-height: 6vh;
}
.time{
    width: 95vw;
    margin: 0 auto 3vh;
    font-size: 2vw;
    color: #909090;
    
        
}
.text{
        display: flex;
    flex-direction: column;
    width: 95vw;
    margin: 0 auto;
}
.imgs{
    width: 100%;
    height: 100%;
    margin: 1vh 0;
}
.top{
    font-size: 3vw;
    color: #505050;
}
</style>