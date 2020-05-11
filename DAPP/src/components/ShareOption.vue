<template>
    <div>
        <div class="top">
            <div class="btc">
                BTC
                <img src="../assets/img/tobot.png" alt="" class="down">
            </div>
            <span class="buytime" v-show="this.istoptime">购买时间：{{this.settime}}</span>
        </div>
    <div class="all">

        <div class="tu">
            <div class="myecharts" ref="mychart" style="width: 95vw;height:34vh;"></div>
        </div>

        <div class="yinying"></div>

        <van-tabs v-model="activeName" color="#3D9BFD" title-active-color="#3D9BFD" line-width=50vw @click="onClick">
            <van-tab title="交易实况" name="a">
                <div class="jiaoyi" v-for="(index,item) in lists" :key="item">
                    <div class="jiaoleft">
                        <img :src="index.imgs" alt="" class="jiaoimg">
                        <span class="phone">{{index.phone}}</span>
                    </div>
                    <span :class="index.isup?'look':'downlook' ">{{index.zhang}}</span>
                </div>

                <div class="button" v-if="this.isbutton">
                    <div class="butl" @click="lookup()">看涨 198%</div>
                    <div class="butr" @click="lookup()">看跌 198%</div>
                </div>

                <div class="jiaoge" v-else>交割时间：{{this.jgtime}}</div>

            </van-tab>
            <van-tab title="当前仓位" name="b">
                <div class="cangweiall">
                    <div class="cangweitop">
                        <span class="zhangfu">涨幅</span>
                        <span class="zhangfu">收益率</span>
                        <span class="zhangfu">价格</span>
                        <span class="zhangfu">时间</span>
                        <span class="zhangfu">开奖</span>
                        <span class="zhangfu">收益</span>
                    </div>
                    <div class="zhangfubot" v-for="(a,b) in jiaoyi" :key="b">
                        <span :class="a.isup?'kzup':'kzdown'">{{a.ups}}</span>
                        <span class="shouyilv">{{a.lv}}</span>
                        <span class="price">{{a.money}}</span>
                        <span class="shijian">{{a.time}}</span>
                        <span class="daojishi">{{a.jiang}}</span>
                        <span class="makemoney">{{a.shou}}</span>
                    </div>
                    <div class="jisuantype">
                        <span class="jisuant">注：收益=本金*收益率-本金</span>
                        <span class="jisuanb">输直接扣除本金，保留小数点后两位</span>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>

        <div class="zhedang" v-if="this.isyinying">
            <div class="buy" v-if="this.cai">
                <img src="../assets/img/deletes.png" alt="" class="delete" @click="del()">
                <p class="change">选择竞猜数量</p>
                <div class="btn">
                    <span class="numbers" v-for="(i,t) in numbers" :key="t"   @click="changeone(i)">{{i.nums}}</span>
                </div>
            </div>
        </div>

        <van-number-keyboard
        :show="show"
        extra-key="."
        
        @blur="show = false"
        @input="onInput"
        @delete="onDelete"
        />
        <!-- close-button-text="完成"
        @close="onclose" -->

        <!-- 密码框 -->
        <div class="passwords" v-if="this.zhifupass">
            <img src="../assets/img/deletes.png" alt="" class="cuowu" @click="zfpass()">
            <p class="shu">输入支付密码</p>
            <span class="money">$25</span>

            <van-password-input
            :value="value"
            
            :focused="show"
            @focus="show = true"
            />
            
        </div>

        <van-tabbar v-model="active">
        <van-tabbar-item icon="wap-home-o" @click="toindex()">首页</van-tabbar-item>
        <van-tabbar-item icon="pending-payment" @click="toproperty()">资产</van-tabbar-item>
        <van-tabbar-item icon="bar-chart-o" @click="toshareoption()">期权</van-tabbar-item>
        <van-tabbar-item icon="bell" @click="toconsult()">咨讯</van-tabbar-item>
        <van-tabbar-item icon="user-o" @click="topersonage()">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
// import { Toast } from 'vant';
export default {
    data(){
        return{
            istoptime:true,  //顶部倒计时是否显示
            isyinying:false, //遮挡层
            settime:50,  //购买倒计时
            jgtime:10, //交割时间
            isbutton:true,  //购买按钮是否显示
            active: 2,  //vant底部导航
            activeName: 'a',
            lists:[
                {imgs:require("../assets/img/jiaoyiimg.png"),phone:"158****9686",zhang:"看涨+10",isup:true},
                {imgs:require("../assets/img/jiaoyiimg.png"),phone:"158****9686",zhang:"看涨+10",isup:false},
               
                
                {imgs:require("../assets/img/jiaoyiimg.png"),phone:"158****9686",zhang:"看涨+10",isup:true}
            ],
            numbers:[
                {nums:10},
                {nums:20},
                {nums:50},
                {nums:100},
                {nums:200}
            ],
            zhifupass:false, //支付密码框
            cai:true,   //竞猜显示
            show:false,   //数字键盘显示
            value: '',   //密码内容

            //仓位交易
            jiaoyi:[
                {ups:"看涨+10",lv:"198%",money:"5045",time:"18:49:05",jiang:"倒计时：10",shou:"+10",isup:true},
                {ups:"看涨+10",lv:"198%",money:"5045",time:"18:49:05",jiang:"倒计时：10",shou:"+10",isup:false},
                {ups:"看涨+10",lv:"198%",money:"5045",time:"18:49:05",jiang:"倒计时：10",shou:"+10",isup:true},
                {ups:"看涨+10",lv:"198%",money:"5045",time:"18:49:05",jiang:"倒计时：10",shou:"+10",isup:false},
                {ups:"看涨+10",lv:"198%",money:"5045",time:"18:49:05",jiang:"倒计时：10",shou:"+10",isup:true},
                {ups:"看涨+10",lv:"198%",money:"5045",time:"18:49:05",jiang:"倒计时：10",shou:"+10",isup:false},
                {ups:"看涨+10",lv:"198%",money:"5045",time:"18:49:05",jiang:"倒计时：10",shou:"+10",isup:true},
                {ups:"看涨+10",lv:"198%",money:"5045",time:"18:49:05",jiang:"倒计时：10",shou:"+10",isup:false},
                {ups:"看涨+10",lv:"198%",money:"5045",time:"18:49:05",jiang:"倒计时：10",shou:"+10",isup:true}
            ],
            token:null  //token
        }
    },
    created(){
        
        
        
    },
    mounted(){
        this.drawcolumn();

        //倒计时
        // this.mydingshiqi();
        
        
    },
    methods:{
        //tab栏切换
        onClick(name,title){
            
            if(title=="当前仓位"){
                // console.log(name+++title)
                this.istoptime=false
            }else{
                this.istoptime=true
            }
        },


        lookup:function(){
            this.isyinying=true;
            this.cai=true;
        },

        // onclose(){
           
        //     this.zhifupass=false;  //支付密码隐藏
        //     Toast('下单成功');
        //     this.value="";
        //     // console.log(this.value)
        // },
        onInput(key) {
        this.value = (this.value + key).slice(0, 6);
        
        // console.log("支付密码")
        },
        onDelete() {
        this.value = this.value.slice(0, this.value.length - 1);
        },

        // onInput(value) {
        // Toast(value);
        // },
        // onDelete() {
        // Toast('删除');
        // },
        
        //交割时间倒计时
        bot(){
            var j =this.jgtime;   //交割时间：jgtime
            j--;
            this.jgtime=j;
            if(j<=10&&j>0){
            setTimeout(()=>{
                    this.bot();   
                },1000)
            }else{
                this.jgtime=10;
                this.settime=50;
                this.isbutton=true;
                this.mydingshiqi();    
            }
        },
        //倒计时定时器
        mydingshiqi(){
            let i = this.settime;  //顶部倒计时settime
            i--;
            this.settime=i;
            if(i>10){
                setTimeout(()=>{
                    this.mydingshiqi()
                },1000)
                
            }else{
                this.bot();
                this.isbutton=false;
                
            }
        },
        changeone:function(i){
            console.log(i.nums)
            this.zhifupass=true
            this.show=true
        },
        del(){
            this.cai=!this.cai;
            this.isyinying=false;
        },
        // 支付密码框
        zfpass(){
            this.zhifupass=false
        },
        
        
        drawcolumn(){
            let myChart = this.$echarts.init(this.$refs.mychart)
 
             var option = {
                    xAxis: {
                        name:'时',
                        type: 'category',
                        data: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00','16:00','17:00','18:00'],
                        boundaryGap: false,
                        axisLabel:{
                            interval:0,
                            rotate:30,  //偏移
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#C5C5C5",
                                
                            }
                        }
                    },
                    yAxis: {
                        name:'价格',
                        type: 'value',
                        axisLine:{
                            lineStyle:{
                                color:"#C5C5C5",
                                
                            }
                        }
                    },
                    series: [
                        {
                        symbol:'circle',
                        itemStyle:{
                            normal:{
                                color:"#3D9BFD",
                            }
                        },
                        lineStyle:{
                            normal:{
                                color:"#3D9BFD",
                                lineStyle:{
                                    color:"#3D9BFD"
                                }
                            }
                        },
                        data: [820, 932, 901, 934, 1290, 1330, 1320, 1243, 657, 888],
                        type: 'line',
                        areaStyle:{
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: 'rgba(150,203,250,0.5)' // 0% 处的颜色
                                }, {
                                    offset: 0.5, color: 'rgba(107,181,250,0.3)' // 50% 处的颜色
                                },{
                                    offset: 1, color: 'rgba(61,155,253,0.1)' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        }
                        },
                        

                    ]
                };
                 myChart.setOption(option);
        },


        // 底部导航跳转
        
        toindex(){
            this.$router.push({
                path:'/Index'
            })
        },
        toproperty:function(){
            this.$router.push({
                path:'/Property'
            })
        },
        toshareoption:function(){
            this.$router.push({
                path:'/ShareOption'
            })
        },
        toconsult:function(){
            this.$router.push({
                path:'/Consult'
            })
        },
        topersonage:function(){
            this.$router.push({
                path:'/Personage'
            })
        }

        

    }
}
</script>
<style scoped>
.top{
        display: flex;
    background-color: #3D9BFD;
    height: 7vh;
    line-height: 7vh;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 99;
}
.down{
    margin-bottom: .5vh;
    width: 2vw;
    height: 1vh;
}
.btc{
    font-size: 5vw;
    color: #fff;
    margin-left: 43vw;
}
.buytime{
    font-size: 3vw;
    width: 25vw;
    height: 4vh;
    line-height: 4vh;
    text-align: center;
    color: #fff;
    background-color: #368EE9;
    border-radius: 1vw;
    margin-top: 1.5vh;
    margin-left: 16vw;
}
.tu{
    width: 95vw;
    margin: 7vh auto 0;
}
.yinying{
    width: 100vw;
    background-color: #F0F0F0;
    height: 1.5vh;
}
.jiaoyi{
    display: flex;
    width: 95vw;
    height: 6.5vh;
    background-color: #F0F0F0;
    margin: 1.5vh auto 0;
    border-radius: 1vw;
    justify-content: space-between;
    align-items: center;
}
.jiaoimg{
        width: 7vw;
    height: 4vh;
    margin: 0 3vw;
}
.jiaoleft{
    display: flex;
}
.phone{
    font-size: 4vw;
    height: 4vh;
    display: inline-block;
    line-height: 4vh;
    color: #3A6B9D;
}
.look{
    font-size: 3vw;
    display: inline-block;
    width: 16vw;
    height: 4vh;
    line-height: 4vh;
    text-align: center;
    color: #85D15F;
    border: 1px solid #85D15F;
    border-radius: 1vw;
    margin-right: 2vw;
}
.downlook{
    font-size: 3vw;
    display: inline-block;
    width: 16vw;
    height: 4vh;
    line-height: 4vh;
    text-align: center;
    color: #F56778;
    border: 1px solid #F56778;
    border-radius: 1vw;
    margin-right: 2vw;
}
.button{
        display: flex;
    justify-content: space-evenly;
        margin-top: 2vh;
}
.butl{
    
    font-size: 3vw;
    display: inline-block;
    padding: 2vh 8vw;
    background-color: #85D15F;
    color: #fff;
    border-radius: 1vw;
}
.butr{
    font-size: 3vw;
    display: inline-block;
    padding: 2vh 8vw;
    background-color: #F56778;
    color: #fff;
    border-radius: 1vw;
}
.all{
        height: 100vh;
        overflow: hidden;
        overflow-y: auto;
    margin-bottom: 9vh;
}
.jiaoge{
        width: 100vw;
    background-color: #F0F0F0;
    color: #C5C5C5;
    font-size: 4vw;
    height: 6vh;
    line-height: 6vh;
    text-align: center;
        margin-top: 2vh;
}
.change{
        font-size: 4vw;
    margin-top: 1vh;
    text-indent: 5vw;
}
.numbers{
    font-size: 3vw;
}
.zhedang{
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.2);
    z-index: 99;
}
.buy{
    position: absolute;
    bottom: -9vh;
    background-color: #fff;
    display: flex;
    width: 100vw;
    height: 27vh;
    border-top-left-radius: 6vw;
    border-top-right-radius: 6vw;
    flex-direction: column;
}
.btn{
    display: flex;
    justify-content: space-around;
    margin-top: 2.5vh;
}
.numbers{
    font-size: 3vw;
    display: inline-block;
    padding: .7vh 6vw;
    border-radius: 1vw;
    background-color: #3D9BFD;
    color: #fff;
}
.delete{
    width: 3.8vw;
    height: 2.5vh;
        margin-left: 91vw;
    margin-top: 2vh;
}

/* 输入框 */
/deep/.van-number-keyboard__body {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
}
.shu{
    font-size: 4vw;
    text-align: center;
    height: 4vh;
    line-height: 4vh;
}
.money{
font-size: 7vw;
    text-align: center;
    height: 11vh;
    line-height: 11vh;
}


.passwords{
    width: 60vw;
    background-color: #fff;
    display: flex;
    height: 30vh;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    flex-direction: column;
    border-radius: 1vh;
    z-index: 99;
}
.cuowu{
    width: 4vw;
    height: 4vw;
    margin-top: 2vh;
    margin-left: 30vh;
}


/* 当前仓位 */
.cangweiall{
    display: flex;
    flex-direction: column;
        margin-bottom: 14vh;
}
.cangweitop{
display: flex;
    background-color: #F0F0F0;
    color: #999;
    height: 5vh;
    line-height: 5vh;
}
.zhangfu{
font-size: 3vw;
    flex: 1;
    text-align: center;
}
.zhangfubot{
    display: flex;
    text-align: center;
    border-bottom: 1px solid #F0F0F0;
    height: 5.8vh;
}
.kzup{
    font-size: 3vw;
    background-color: #85D15F;
    color: #fff;
    padding: .5vh 1.5vw;
    height: 2.5vh;
    margin-top: 1vh;
    margin-left: 1vw;
}
.kzdown{
    font-size: 3vw;
    
    background-color: #F56778;
    color: #fff;
    padding: .5vh 1.5vw;
    height: 2.5vh;
    margin-top: 1vh;
    margin-left: 1vw;
}
.shouyilv{
    font-size: 3vw;
    flex: 1;
    line-height: 5.5vh;
}
.price{
    font-size: 3vw;
    flex: 1;
    line-height: 5.5vh;
}
.shijian{
    font-size: 3vw;
    flex: 1;
    line-height: 5.5vh;
}
.daojishi{
font-size: 3vw;
    flex: 1;
    line-height: 3.5vh;
    color: #2D5D8F;
    background-color: #CEE6FF;
    height: 3.5vh;
    margin-top: 1vh;
}
.makemoney{
    font-size: 3vw;
    flex: 1;
    line-height: 5.5vh;
    color: #3D9BFD;
}

.jisuantype{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFDFE3;
    padding: .5vh 0;
    position: fixed;
    bottom: 7.5vh;
    width: 100vw;
}
.jisuant{
    font-size: 3vw;
    color: #973B47;
}
.jisuanb{
    font-size: 3vw;
    color: #973B47;
}
</style>