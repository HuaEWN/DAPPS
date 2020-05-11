<template>
    <div>
        <van-nav-bar
        title="绑定手机"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
       
        />

        <van-cell-group>
            <span class="phone">手机号</span>
            <van-field v-model="value" placeholder="158****8045" />
            <span class="change" @click="tobindphone()">更换</span>
        </van-cell-group>
    </div>
</template>
<script>
// import { Toast } from 'vant';
export default {
    data(){
        return{
            value:"",
            token:null  //token
        }
    },
    methods:{
        onClickLeft() {
            this.$router.go(-1);
        },
        tobindphone(){
            this.$router.push({
                path:'/Bindphone'
            })
        }
    }
}
</script>
<style scoped>
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
    border: none;
    -webkit-transform: scale(.5);
    transform: scale(.5);
}
/deep/.van-cell-group {
    background-color: #fff;
    display: flex;
    border-bottom: 1px solid #f2f2f2;
}
/deep/.van-cell {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    background-color: #fff;
    width: 50vw;
}
.phone{
    font-size: 4vw;
    width: 24vw;
    height: 6vh;
    line-height: 6.5vh;
    display: inline-block;
    text-indent: 3vw;
}
.change{
    font-size: 4vw;
    position: absolute;
    top: 2vw;
    right: 3vw;
    padding: 1vw 3vw;
    color: #3D9BFD;
    border: 1px solid #3D9BFD;
    border-radius: 1vw;
}
</style>