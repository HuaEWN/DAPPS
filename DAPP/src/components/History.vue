<template>
    <div class="big">
        <van-nav-bar
        title="订单记录"
        left-text=""
        
        left-arrow
        @click-left="onClickLeft"
        
        />
    
        <div class="mtop">
            <div class="history" v-for="(index,item) in listes" :key="item">
                <div class="lefts">
                    <span class="jiaoyi">交易指数</span>
                    <span class="time">交易时间</span>
                    <span class="number">下单数量</span>
                    <span class="lv">收益率</span>
                    <span class="jiesuan">结算指数</span>
                    <span class="money">收益</span>
                </div>
                <div class="centers">
                    <span class="one">{{index.floating_rate}}%~{{index.floating_rate_end}}%</span>
                    <span class="two">{{index.create_time}}</span>
                    <span class="three">{{index.money}}</span>
                    <span class="four">{{index.earnings}}</span>
                    <span :class="index.end_time>1 ? 'oncefive' : 'five'">{{index.end_time}}</span>
                    <span class="six">{{index.predict}}</span>
                </div>
                <div class="rights" v-show="index.istrue">
                    <img src="../assets/img/over.png" alt="" class="imgs">
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
            // lists:[
            //     {one:"1%",two:"2020-04-03 9:30",three:"100",four:"4.68%",five:"未结算",six:"0",istrue:false},
            //     {one:"1%",two:"2020-04-03 9:30",three:"100",four:"4.68%",five:"1.59%",six:"4.46",istrue:true},
            //     {one:"1%",two:"2020-04-03 9:30",three:"100",four:"4.68%",five:"1.59%",six:"4.46",istrue:true},
            //     {one:"1%",two:"2020-04-03 9:30",three:"100",four:"4.68%",five:"未结算",six:"0",istrue:false},
            //     {one:"1%",two:"2020-04-03 9:30",three:"100",four:"4.68%",five:"1.59%",six:"4.46",istrue:true}
            // ],
            listes:null,
            token:null   //token值
        }
    },
    created(){
        let qwe = localStorage.getItem("cun");
        this.token = qwe;
        this.$get("Market/order_record",{token:this.token}).then((res)=>{
            console.log(res);
            this.listes=res.data;
        })
    },
    methods:{
        onClickLeft() {
            this.$router.go(-1);
        }
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
    margin-top: 60px;
}
.big{
        width: 100vw;
        height: 100vh;
        background-color: #f2f2f2;
        overflow: hidden;
    overflow-y: auto;
        
    }

    .history{
        width: 95vw;
        height: 21vh;
        background-color: #fff;
        margin: 2vh auto 0;
        display: flex;
        /* box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28); */
        border-radius: 1.5vw;
    }
  

    .lefts{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    /* flex: 1; */
    width: 20%;
    height: 100%;
    /* background-color: deepskyblue; */
    text-align: end;
    } 
      .jiaoyi{
        font-size: 3vw;
        height: 3.5vh;
        line-height: 3.5vh;
        color: #303030;
    }
    .time{
        font-size: 3vw;
        height: 3.5vh;
        line-height: 3.5vh;
        color: #303030;
    }
    .number{
        font-size: 3vw;
        height: 3.5vh;
        line-height: 3.5vh;
        color: #303030;
    }
    .lv{
        font-size: 3vw;
        height: 3.5vh;
        line-height: 3.5vh;
        color: #303030;
    }
    .jiesuan{
        font-size: 3vw;
        height: 3.5vh;
        line-height: 3.5vh;
        color: #303030;
    }
    .money{
        font-size: 3vw;
        height: 3.5vh;
        line-height: 3.5vh;
        color: #303030;
    }
.one{
    font-size: 3vw;
    height: 3.5vh;
    line-height: 3.5vh;
    text-indent: 6vw;
    color: #60D16B;
}

 .two{
    font-size: 3vw;
    height: 3.5vh;
    line-height: 3.5vh;
    text-indent: 6vw;
    color: #9A9A9A;
}
.three{
    font-size: 3vw;
    height: 3.5vh;
    line-height: 3.5vh;
    text-indent: 6vw;
    color: #9A9A9A;
}
.four{
    font-size: 3vw;
    height: 3.5vh;
    line-height: 3.5vh;
    text-indent: 6vw;
    color: #9A9A9A;
}
.five{
    font-size: 3vw;
    height: 3.5vh;
    line-height: 3.5vh;
    text-indent: 6vw;
    color: #9A9A9A;
}
.oncefive{
    font-size: 3vw;
    height: 3.5vh;
    line-height: 3.5vh;
    text-indent: 6vw;
    color: #60D16B;
}
.six{
    font-size: 3vw;
    height: 3.5vh;
    line-height: 3.5vh;
    text-indent: 6vw;
    color: #9A9A9A;
}
.centers{
    display: flex;
    flex-direction: column;
    /* background-color: pink; */
    width: 40%;
    height: 100%;
    color: #9A9A9A;
}
.rights{
    width: 40%;
    height: 100%;
    /* background-color: skyblue; */
    display: flex;
}
.imgs{
    width: 22vw;
    height: 11vh;
    margin: auto;
}
</style>