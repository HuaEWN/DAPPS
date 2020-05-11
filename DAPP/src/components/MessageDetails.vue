<template>
    <div class="bj">
        <van-nav-bar
        title="消息战报"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
       
        />
        <img src="../assets/img/shuzi.png" alt="" class="szhb">
        <p class="topzb">行情|早间数字货币行情战报</p>
        <p class="time">时间截止 ：{{this.time}}</p>
        <div class="zbxq">
            <div class="zby">
                <div class="lefts">
                    <div class="tops">
                        <img :src="this.imgone" alt="" class="hb">
                        <span class="type">{{this.type}}</span>
                        <span class="name">{{this.name}}</span>
                    </div>
                    <div class="bots">
                        <span :class="this.one">{{this.number}}</span>
                        <span class="numb">{{this.float}}</span>
                    </div>
                </div>
                <div class="rights">
                    <span class="zf">24小时涨幅</span>
                    <div class="bai">
                        <img :src="this.imgtwo" alt="" class="upd">
                        <span :class="this.isup ? 'bai' : 'oncebai'">{{this.bai}}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="rank">
            <div class="ranktop">
                <van-icon name="bar-chart-o" />BTC收益排行榜
            </div>

            <div class="rankbj">
                <div class="rankflexfa" v-for="(index,item) in moneys" :key="item">
                    <span class="rankids">{{item+1}}</span>
                    <div class="rankflexs">
                        <div class="ranklefts">
                            <img :src="index.imgs" alt="" class="rankpeople">
                            <span class="rankname">{{index.name}}</span>
                        </div>
                        <div class="rankrights">
                            <span class="rankteam">收益</span>
                            <span class="rankmoney">{{index.mon}}</span>
                        </div>
                    </div>
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
            
                time:"2020-4-2 11:23",
                imgone:require("../assets/img/btb.png"),
                type:"BTC",
                name:"比特币",
                number:"1",
                float:"0.2012564",
                imgtwo:require("../assets/img/up.png"),
                bai:"0.64",
                isup:true,    //增长或是降低
                one:"first",   //排名

                moneys:[
                {id:1,imgs:require("../assets/img/dl.png"),name:"古力娜扎",mon:9990},
                {id:2,imgs:require("../assets/img/dl.png"),name:"古力娜扎",mon:9990},
                {id:3,imgs:require("../assets/img/dl.png"),name:"古力娜扎",mon:9990},
                {id:4,imgs:require("../assets/img/dl.png"),name:"古力娜扎",mon:9990},
                {id:4,imgs:require("../assets/img/dl.png"),name:"古力娜扎",mon:9990},
                {id:5,imgs:require("../assets/img/dl.png"),name:"古力娜扎",mon:9990},
                {id:6,imgs:require("../assets/img/dl.png"),name:"古力娜扎",mon:9990}
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
.bj{
    width: 100vw;
        height: 100vh;
        background-color: #f2f2f2;
}
.szhb{
    display: flex;
    width: 100vw;
    height: 15vh;
}
.topzb{
    font-size: 3.6vw;
    width: 95vw;
    margin: 3vw auto 0;
    color: #000;
}
.time{
    font-size: 3vw;
    color: #909090;
    width: 95vw;
    margin: 1.5vw auto 0;
}
.zbxq{
    width: 95vw;
    height: 7vh;
    background-color: #fff;
    margin: 1.3vh auto 0;
    border-radius: 1vw;
}
.zby{
        width: 100%;
    display: flex;
    height: 100%;
    justify-content: space-between;
}
.lefts{
    /* background-color: #ccc; */
    width: 35vw;
    height: 100%;
}
.tops{
    display: flex;
}
.hb{
    width: 5vw;
    height: 3vh;
    padding-top: .5vh;
    padding-left: 1vw;
}
.bots{
    display: flex;
}
.type{
    font-size: 4vw;
    /* font-weight: 600; */
    color: #303030;
    padding: .5vh 2vw 0;
        
}
.name{
    font-size: 3vw;
    color: #909090;
    padding-top: .3vh;
        padding: .6vh 2vw 0;
}
.first{
    font-size: 2vw;
    display: inline-block;
    width: 3.3vw;
    height: 2vh;
    line-height: 2vh;
    text-align: center;
    background-color: skyblue;
    margin: 1vw 2vw;
    border-radius: .7vw;
    color: #fff;
}

.second{
    font-size: 2vw;
    display: inline-block;
    width: 3.3vw;
    height: 2vh;
    line-height: 2vh;
    text-align: center;
    background-color: #FD9C3D;
    margin: 1vw 2vw;
    border-radius: .7vw;
    color: #fff;
}
.mc{
    font-size: 2vw;
    display: inline-block;
    width: 3.3vw;
    height: 2vh;
    line-height: 2vh;
    text-align: center;
    background-color: #ccc;
    margin: 1vw 2vw;
    border-radius: .7vw;
    color: #fff;
}
.numb{
        font-size: 3vw;
    display: inline-block;
    width: 19vw;
    height: 3vh;
    line-height: 3.2vh;
    color: #909090;
    text-indent: 1vw;
}
.rights{
   /* background-color: #ccc; */
    width: 23vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 2vw;
}


.zf{
    font-size: 3vw;
    padding-top: .7vh;
    color: #909090;
}
.ups{
    font-size: 3vw;
}
.bai{
    display: flex;
    display: flex;
    margin-top: .5vh;
    color: #7FCA5A;
    font-size: 3vw;
}
.oncebai{
    display: flex;
    display: flex;
    margin-top: .5vh;
    color: #F45C6E;
    font-size: 3vw;
}
.upd{
    width: 2vw;
    height: 1.5vh;
    padding-top: .7vh;
    padding-right: 2vw;
}
.rank{
    width: 95vw;
    background-color: #fff;
    height: 57vh;
    margin: 1.3vh auto;
    border-radius: 2vw;
    overflow: hidden;
    overflow-y: auto;
}

.ranktop{
    font-size: 4vw;
    background-color: #FAD6D1;
    width: 95vw;
    height: 6vh;
    line-height: 6vh;
    text-align: center;
    color: #CC5240;
    border-top-left-radius: 2vw;
    border-top-right-radius: 2vw;
    position: fixed;
}


.rankbj{
    width: 100%;
        margin-top: 6vh;
    background-color: #fff;
    }
.rankflexfa{
            display: flex;
    justify-content: space-between;
    }
 .rankids{
            font-size: 5vw;
    width: 11vw;
    text-align: center;
    line-height: 18vw;
    color: #C5C5C5;

    }
.rankflexs{
        flex: 1;
    display: flex;
    justify-content: space-between;
    padding-right: 4vw;
    padding-top: 1.5vh;
    padding-bottom: 1.5vh;
    border-bottom: .22vh solid #F2F2F2;
    }
    .ranklefts{
        display: flex;
    }
    .rankpeople{
        width: 11vw;
    height: 6vh;
    }
    .rankname{
        font-size: 4vw;
    }
    .rankrights{
            display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    .rankteam{
        font-size: 3vw;
        color: #505050;
    }
    .rankmoney{
        font-size: 5vw;
        color: #FD5151;

    }
</style>