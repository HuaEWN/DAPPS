<template>
    <div>
        <van-nav-bar
        title="财务账单"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
        
        />

        <div class="top">
            全部
            <img src="../assets/img/tobottom.png" alt="" class="imgs">
        </div>

        <div v-for="(index,item) in lists" :key="item">
            <div class="bottom">
                <div class="btop">
                    <span class="type">{{index.type}}</span>
                    <span :class="index.istrue ? 'upd' : 'down'">{{index.up}}</span>
                </div>
                <div class="bbot">
                    <div class="botl">
                        <span class="day">{{index.day}}</span>
                        <span class="time">{{index.time}}</span>
                    </div>
                    <span class="success">{{index.success}}</span>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
// import { Toast } from 'vant';
export default {
    data(){
        return{
            lists:[
                {type:"USTD-充值",up:"+16",day:"3-28",time:"11:19",success:"充值成功",istrue:true},
                {type:"USTD-充值",up:"-16",day:"3-28",time:"11:19",success:"充值成功",istrue:false},
                {type:"USTD-充值",up:"+16",day:"3-28",time:"11:19",success:"充值成功",istrue:true},
                {type:"USTD-充值",up:"+16",day:"3-28",time:"11:19",success:"充值成功",istrue:true}
            ],
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
.top{
    font-size: 3.5vw;
    display: flex;
    justify-content: center;
    background-color: #F0F0F0;
    height: 6vh;
    align-items: center;
}
.imgs{
        width: 2vw;
    height: 1vh;
    margin-left: 2vw;
}
.bottom{
        display: flex;
    flex-direction: column;
    width: 95vw;
    margin: 0 auto;
    border-bottom: 1px solid #F0F0F0;
}
.btop{
    display: flex;
    justify-content: space-between;
        height: 5vh;
    line-height: 5vh;
}
.bbot{
    display: flex;
    justify-content: space-between;
    height: 4vh;
    line-height: 3vh;
}
.botl{
    display: flex;
}
.type{
    font-size: 4vw;
}
.upd{
    font-size: 5.5vw;
    color: #3D9BFD;
}
.down{
    font-size: 5.5vw;
    color: #202020;
}
.day{
    font-size: 3vw;
    margin-right: 4vw;
    color: #909090;
}
.time{
    font-size: 3vw;
    color: #909090;
}
.success{
    font-size: 3vw;
    color: #909090;
}
</style>