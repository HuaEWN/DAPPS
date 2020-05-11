<template>
    <div>
        <van-nav-bar
        title="设置"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
       
        />

        <div class="grxx" @click="toinformation()">
            <span class="texts">个人信息</span>
            <img src="../assets/img/sets.png" alt="" class="imgs">
        </div>
        <div class="grxx" @click="tologinpassword()">
            <span class="texts">登录密码</span>
            <img src="../assets/img/sets.png" alt="" class="imgs">
        </div>
        <div class="grxx" @click="totransaction()">
            <span class="texts">交易密码</span>
            <img src="../assets/img/sets.png" alt="" class="imgs">
        </div>
        <div class="grxx" @click="tochangephone()">
            <span class="texts">手机号码</span>
            <img src="../assets/img/sets.png" alt="" class="imgs">
        </div>

    </div>
</template>
<script>
// import { Toast } from 'vant';
export default {
    data(){
        return{
            token:null  //token
        }
    },
    methods:{
        onClickLeft() {
            this.$router.go(-1);
        },
        toinformation(){
            this.$router.push({
                path:'/Information'
            })
        },
        tologinpassword(){
            this.$router.push({
                path:'/Loginpassword'
            })
        },
        totransaction(){
            this.$router.push({
                path:'/Transaction'
            })
        },
        tochangephone(){
            this.$router.push({
                path:'/Changephone'
            })
        }
    }
}
</script>
<style scoped>
/deep/.van-nav-bar .van-icon {
    color: #000;
}
.texts{
    font-size: 3.8vw;
    color: #303030;
}
.grxx{
    display: flex;
    border-bottom: 1px solid #E5E5E5;
    width: 95vw;
    margin: 0 auto;
    height: 8vh;
    line-height: 8vh;
    align-items: center;
    justify-content: space-between;
}
.imgs{
    width: 2vw;
    height: 2vh;
}
</style>