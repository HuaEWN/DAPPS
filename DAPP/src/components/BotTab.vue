<template>
    <div>
        <van-tabbar v-model="active" class="bott">
            <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="pending-payment">资产</van-tabbar-item>
            <van-tabbar-item icon="bar-chart-o">期权</van-tabbar-item>
            <van-tabbar-item icon="bell">咨讯</van-tabbar-item>
            <van-tabbar-item icon="user-o">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return{
            token:null,  //token
            active: 0  //vant底部导航
        }
    }
}
</script>
<style scoped>
.bott{
    position: fixed;
    bottom: 0;
}
</style>