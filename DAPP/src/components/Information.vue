<template>
    <div>
        <van-nav-bar
        title="个人信息"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
        
        />
        <div class="tops">
            <img :src="this.imgs" alt="" class="touxiang">
            <span class="name">{{this.topname}}</span>
        </div>
        <div class="yinying"></div>

        <van-cell-group>
            <span class="nicheng">昵称</span>
            <van-field v-model="nicheng" placeholder="YEARD`" />
        </van-cell-group>

        <van-cell-group>
            <span class="nicheng">手机</span>
            <van-field v-model="phone" placeholder="158****9950" disabled v-if="this.isdisabled"/>
            <van-field v-model="phone" placeholder="158****9950"  v-else/>
            <span class="changes" @click.once="change()">更换</span>
        </van-cell-group>

        <div class="sex">
            <span class="sexs">性别</span>
            <el-radio v-model="radio" label="1">男</el-radio>
            <el-radio v-model="radio" label="2">女</el-radio>
        </div>

        <van-cell-group>
            <span class="gxqm">个性签名</span>
            <van-field v-model="gxqms" placeholder="给梦想插上飞翔的翅膀" />
        </van-cell-group>

        <div class="baocun">
            <van-button type="info">保存</van-button>
        </div>

    </div>
</template>
<script>
// import { Toast } from 'vant';
export default {
    data(){
        return{
            imgs:require("../assets/img/touxiang.png"),
            topname:"YEARE", //顶部信息名
            nicheng:"",
            phone:"",
            isdisabled:true,
            radio:"1", //单选框选中
            gxqms:"",
            token:null  //token
        }
    },
    methods:{
        onClickLeft() {
            this.$router.go(-1);
        },
        change:function(){
            this.isdisabled=!this.isdisabled;
            // console.log(123)
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
.name{
    font-size: 4vw;
}
.tops{
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    width: 100vw;
    /* background-color: #ccc; */
    height: 23vh;
}
.touxiang{
        width: 21vw;
    height: 12vh;
}
.yinying{
    width: 100vw;
    height: .5vh;
    background-color: #F0F0F0;
}
.nicheng{
    font-size: 4vw;
    width: 30vw;
    height: 6vh;
    line-height: 6vh;
    text-indent: 3vw;
    color: #303030;
}
/deep/.van-cell-group {
    background-color: #fff;
    display: flex;
    border-bottom: 1px solid #f2f2f2;
}
.changes{
    font-size: 4vw;
    position: absolute;
    top: 1vh;
    right: 3vw;
    color: #909090;
    border: 1px solid #909090;
    border-radius: 1vw;
    padding: 1vw 3vw;
}
.sex{
    width: 100vw;
    /* background-color: #ccc; */
    display: flex;
    height: 8vh;
    line-height: 8vh;
    border-bottom: 1px solid #f0f0f0;
    align-items: center;
}
.sexs{
    font-size: 4vw;
    margin-left: 3vw;
    color: #303030;
        margin-right: 16vw;
}
.gxqm{
    font-size: 4vw;
    color: #303030;
    width: 30vw;
    height: 6vh;
    line-height: 6vh;
    text-indent: 3vw;
}
/deep/.van-button {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    height: 44px;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 42px;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;
    -webkit-transition: opacity .2s;
    transition: opacity .2s;
    -webkit-appearance: none;
    -webkit-text-size-adjust: 100%;
    width: 100vw;
}
.baocun{
    width: 100vw;
    display: flex;
    position: absolute;
    bottom: 0;
}
</style>