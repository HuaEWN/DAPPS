<template>
    <div>
        <van-nav-bar
        title="咨讯详情"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
        
        />
        <p class="toptext">对于平台新增功能说明</p>

        <div class="lbot">
            <img src="../assets/img/zxtime.png" alt="" class="eye">
            <span class="eyes">16分钟前</span>
            <img src="../assets/img/zxeye.png" alt="" class="time">
            <span class="numb">165</span>
        </div>

        <div class="text">
            <span class="texts">
                数字加密货币，比特币等行业新闻咨讯，区块链资讯接口请点击区块链新闻
                数字加密货币，比特币等行业新闻咨讯，区块链资讯接口请点击区块链新闻
                数字加密货币，比特币等行业新闻咨讯，区块链资讯接口请点击区块链新闻
            </span>
            <img src="../assets/img/ggimg.png" alt="" class="neirong">
            <span class="texts">
                数字加密货币，比特币等行业新闻咨讯，区块链资讯接口请点击区块链新闻
                数字加密货币，比特币等行业新闻咨讯，区块链资讯接口请点击区块链新闻
                数字加密货币，比特币等行业新闻咨讯，区块链资讯接口请点击区块链新闻
            </span>
        </div>

    </div>
</template>
<script>

export default {
    data(){
        return{
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
    color: #000;
}
.toptext{
    font-size: 4.5vw;
    width: 95vw;
    margin: 2vh auto 0;
    
}
.lbot{
    width: 95vw;
    
    margin: 1.5vh auto;
    display: flex;
}
.eyes{
    font-size: 3vw;
}
.numb{
    font-size: 3vw;
}
.eye{
    width: 3vw;
    height: 1.6vh;
    margin-top: .5vh;
    margin-right: 1vw;
    color: #909090;
}
.time{
    width: 4vw;
    height: 1.5vh;
    margin-top: .5vh;
    margin-left: 6vw;
    margin-right: 1vw;
    color: #909090;
}
.neirong{
        width: 95vw;
    height: 30vh;
    margin: 1vh 0;
}
.text{
    display: flex;
    flex-direction: column;
    width: 95vw;
    margin: 0 auto;
}
.texts{
    font-size: 3vw;
    color: #505050;
}
</style>

