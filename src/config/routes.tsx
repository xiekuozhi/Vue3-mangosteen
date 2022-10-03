import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/First";
import { Forth } from "../components/welcome/Forth";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Welcome } from "../views/Welcome";
import {FirstActions}from "../components/welcome/FirstAction"
import { ThirdActions } from "../components/welcome/ThirdAction";
import { SecondActions } from "../components/welcome/SecondAction";
import { ForthActions } from "../components/welcome/ForthAction";


export const routes:RouteRecordRaw[] = [
    { path: '/', redirect: '/welcome/1'},
    { 
      path:'/welcome',
    component:Welcome,
    children:[
      {path:'1',components:{main:First,footer:FirstActions}},
      {path:'2',components:{main:Second,footer:SecondActions}},
      {path:'3',components:{main:Third,footer:ThirdActions}},
      {path:'4',components:{main:Forth,footer:ForthActions}},
  ]}
  ]