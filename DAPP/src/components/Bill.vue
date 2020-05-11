<template>
    <div>
        <van-nav-bar
        title="账单"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
        />

        <div v-for="(index,item) in lists" :key="item">
            <div class="biao">
                <div class="biaoleft">
                    <span class="tops">{{index.type}}</span>
                    <div class="time">
                        <span class="day">{{index.day}}</span>
                        <span class="timesmall">{{index.times}}</span>
                    </div>
                </div>
                <div class="biaoright">
                    <span :class="index.iscolor?'money':'falsemoney'">{{index.money}}</span>
                    <span class="success">{{index.success}}</span>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
// import { Toast } from 'vant'
export default {
    data(){
        return{
            lists:[
                {type:"USTD-充值",day:"3-28",times:"11:19",money:"+16",success:"充值成功",iscolor:true},
                {type:"USTD-充值",day:"3-28",times:"11:19",money:"+16",success:"充值成功",iscolor:true},
                {type:"USTD-充值",day:"3-28",times:"11:19",money:"+16",success:"充值成功",iscolor:false},
                {type:"USTD-充值",day:"3-28",times:"11:19",money:"+16",success:"充值成功",iscolor:true}
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
/deep/.van-icon-arrow-left::before {
    content: "\F008";
    color: #000;
}
.biao{
        display: flex;
    justify-content: space-between;
    width: 95vw;
    margin: 0 auto;
    height: 9vh;
        border-bottom: 1px solid #F0F0F0;
}
.biaoleft{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.biaoright{
        display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
.time{
    display: flex;
}
.tops{
    font-size: 4vw;
    color: #202020;
}
.day{
    font-size: 3vw;
    color: #909090;
        margin-right: 4vw;
}
.timesmall{
    font-size: 3vw;
    color: #909090;
}
.money{
    font-size: 5vw;
    color: #3D9BFD;
}
.falsemoney{
    font-size: 5vw;
    color: #202020;
}
.success{
    font-size: 3vw;
    color: #909090;
}
</style>