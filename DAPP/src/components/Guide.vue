<template>
    <div class="bjs">
        <van-nav-bar
        title="新手指南"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
       
        />

        <div class="mtop">
            <div class="links" v-for="(v,i) in lists" :key="i">
                    <router-link :to="{name:'GuidePage'}" class="sonlink">
                        <div class="top">
                            <span class="tleft">{{v.about}}</span>
                            <span class="tright" v-if="v.new"></span>
                        </div>
                        <div class="bot">
                            <div class="bleft">
                                <img src="../assets/img/系统消息.png" alt="" class="imgs">
                                <span class="gonggao">{{v.som}}</span>
                            </div>
                            <span class="time">{{v.times}}</span>
                        </div>
                    </router-link>
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
                {about:"闪兑指南",new:true,som:"系统消息",times:"2020-4-1 11:23"},
                {about:"资产指南",new:true,som:"系统消息",times:"2020-4-2 11:23"},
                
                {about:"行情指南",new:true,som:"系统消息",times:"2020-4-2 11:23"},
                {about:"行情|早间数字货币行情战报",new:false,som:"系统公告",times:"2020-4-3 11:23"}
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
    color: #202020;
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
.mtop{
    margin-top: 55px;
}
.bjs{
    width: 100vw;
    height: 100vh;
    background-color: #f2f2f2;
    overflow: hidden;
    overflow-y: auto;
}
.sonlink{
        display: block;
    width: 95vw;
    height: 7vh;
    background-color: #fff;
    margin: 1.3vh auto;
    padding: 1.5vw;
    box-sizing: border-box;
    border-radius: 1.5vw;
    }

.top{
    display: flex;
    justify-content: space-between;
    }
    .top .tleft{
        font-size: 3.7vw;
    color: #000;
    font-weight: 600;
    }
    .top .tright{
        width: 2.5vw;
    height: 2.5vw;
    background-color: #3D9BFD;
    border-radius: 50vw;
    }
    .bot{
                display: flex;
    margin-top: 1vw;
    justify-content: space-between;
    }

    .bleft{
        display: flex;
    }
    .bleft .imgs{
    width: 3vw;
    height: 1.5vh;
    margin-top: 1vw;
    }
    .bleft .gonggao{
        font-size: 3vw;
        color: #909090;
    }
    .time{
        font-size: 3vw;
        color: #909090;
    }
</style>