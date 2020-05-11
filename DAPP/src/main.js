import Vue from "vue";
import './plugins/axios';
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { post,fetch } from "./config/axios";
Vue.prototype.$get=fetch;
Vue.prototype.$post=post;


import Vant from 'vant';
import 'vant/lib/index.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueJsonp from 'vue-jsonp'

Vue.config.productionTip = false;

import { Lazyload } from 'vant';

import echarts from 'echarts'
Vue.prototype.$echarts = echarts


import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

Vue.use(ElementUI);

Vue.use(Lazyload);

Vue.use(VueJsonp)
Vue.use(Vant)
new Vue({
  router,
  store,
  render: h => h(App) 
}).$mount("#app");


router.beforeEach((to,from,next)=>{
  if((to.path=='/Login' || to.path=='/Register' || to.path=='/Forget')){
    // alert('请您先登录');
    next();
  }else if((to.path!='/Login' || to.path!='/Register' || to.path!='/Forget') && localStorage.getItem("cun")==null){
    next('/Login');
  }else{
    next();
  }
  
})
