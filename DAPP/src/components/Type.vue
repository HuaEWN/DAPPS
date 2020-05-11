<template>
    <div>
        <van-nav-bar
        title="币种"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
        />

        <div class="types" v-for="(index,item) in lists" :key="item">
            <div class="left">
                <img :src="index.imgs" alt="" class="imgs">
                <span class="btb">{{index.type}}</span>
                <span class="name">{{index.name}}</span>
            </div>
            <van-switch v-model="checked" active-color="#61D66C" inactive-color="#F0F0F0" />

        </div>



    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data(){
        return{
            checked: true,     //通过v-model绑定开关的选中状态，true表示开，false表示关
           
            lists:[
                 {imgs:require("../assets/img/btb.png"),type:"BTC",name:"比特币"}
                // ,
                // {imgs:require("../assets/img/btb.png"),type:"BTC",name:"比特币",check:true},
                // {imgs:require("../assets/img/btb.png"),type:"BTC",name:"比特币",check:true}
            ],
            token:null  //token
        }
    },
    methods: {
        onClickLeft() {
        Toast('返回');
        },
        
  }
}
</script>
<style scoped>

/deep/ .van-nav-bar .van-icon {
    color: #000!important;
}
/deep/ .van-nav-bar__title {
    max-width: 60%;
    margin: 0 auto;
    color: #303030;
    font-weight: 500;
    font-size: 4.5vw;
}
.types{
    display: flex;
    width: 100vw;
    height: 6vh;
    padding: 0 3vw;
    /* background-color: #ccc; */
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    border-bottom: 1px solid #F0F0F0;
}
.imgs{
    width: 5vw;
    height: 2.5vh;
}
.left{
    display: flex;
}
.btb{
        font-size: 4vw;
    margin: 0 2vw;
}
.name{
    font-size: 3vw;
    color: #909090;
    padding-top: .2vh;
}
</style>