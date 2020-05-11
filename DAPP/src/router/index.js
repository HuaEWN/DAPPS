import Vue from "vue";
import VueRouter from "vue-router";
import Forget from "../views/Forget.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Forget",
    component: Forget
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import("../views/Login.vue")
  },
  {
    path: "/Register",
    name: "Register",
    component: () =>
      import("../views/Register.vue")
  },
  {
    path: "/Forget",
    name: "Forget",
    component: () =>
      import("../views/Forget.vue")
  },
  {
    path: "/War",
    name: "War",
    component: () =>
      import("../components/War.vue")
  },
  {
    path: "/Index",
    name: "Index",
    component: () =>
      import("../components/Index.vue")
  },
  {
    path: "/Type",
    name: "Type",
    component: () =>
      import("../components/Type.vue")
  },
  {
    path: "/Bet",
    name: "Bet",
    component: () =>
      import("../components/Bet.vue")
  },
  {
    path: "/History",
    name: "History",
    component: () =>
      import("../components/History.vue")
  },
  {
    path: "/Order",
    name: "Order",
    component: () =>
      import("../components/Order.vue")
  },
  {
    path: "/OrderSuccess",
    name: "OrderSuccess",
    component: () =>
      import("../components/OrderSuccess.vue")
  },
  {
    path: "/Notice",
    name: "Notice",
    component: () =>
      import("../components/Notice.vue")
  },
  {
    path: "/Guide",
    name: "Guide",
    component: () =>
      import("../components/Guide.vue")
  },
  {
    path: "/GuidePage",
    name: "GuidePage",
    component: () =>
      import("../components/GuidePage.vue")
  },
  {
    path: "/GeneraLize",
    name: "GeneraLize",
    component: () =>
      import("../components/GeneraLize.vue")
  },
  {
    path: "/Message",
    name: "Message",
    component: () =>
      import("../components/Message.vue")
  },
  {
    path: "/MessageDetails",
    name: "MessageDetails",
    component: () =>
      import("../components/MessageDetails.vue")
  },
  {
    path: "/Property",
    name: "Property",
    component: () =>
      import("../components/Property.vue")
  },
  {
    path: "/Bill",
    name: "Bill",
    component: () =>
      import("../components/Bill.vue")
  },
  {
    path: "/Change",
    name: "Change",
    component: () =>
      import("../components/Change.vue")
  },
  {
    path: "/Withdraw",
    name: "Withdraw",
    component: () =>
      import("../components/Withdraw.vue")
  },
  {
    path: "/Recharge",
    name: "Recharge",
    component: () =>
      import("../components/Recharge.vue")
  },
  {
    path: "/Personage",
    name: "Personage",
    component: () =>
      import("../components/Personage.vue")
  },
  {
    path: "/Team",
    name: "Team",
    component: () =>
      import("../components/Team.vue")
  },
  {
    path: "/Announcement",
    name: "Announcement",
    component: () =>
      import("../components/Announcement.vue")
  },
  {
    path: "/Feedback",
    name: "Feedback",
    component: () =>
      import("../components/Feedback.vue")
  },
  {
    path: "/Earnings",
    name: "Earnings",
    component: () =>
      import("../components/Earnings.vue")
  },
  {
    path: "/Financial",
    name: "Financial",
    component: () =>
      import("../components/Financial.vue")
  },
  {
    path: "/Setting",
    name: "Setting",
    component: () =>
      import("../components/Setting.vue")
  },
  {
    path: "/Transaction",
    name: "Transaction",
    component: () =>
      import("../components/Transaction.vue")
  },
  {
    path: "/Loginpassword",
    name: "Loginpassword",
    component: () =>
      import("../components/Loginpassword.vue")
  },
  {
    path: "/Changephone",
    name: "Changephone",
    component: () =>
      import("../components/Changephone.vue")
  },
  {
    path: "/Bindphone",
    name: "Bindphone",
    component: () =>
      import("../components/Bindphone.vue")
  },
  {
    path: "/Information",
    name: "Information",
    component: () =>
      import("../components/Information.vue")
  },
  {
    path: "/Consult",
    name: "Consult",
    component: () =>
      import("../components/Consult.vue")
  },
  {
    path: "/Consultdetail",
    name: "Consultdetail",
    component: () =>
      import("../components/Consultdetail.vue")
  },
  {
    path: "/ShareOption",
    name: "ShareOption",
    component: () =>
      import("../components/ShareOption.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
