import { defineComponent } from "vue";
import s from "./WelcomeLayout.module.scss";
import chart from "../../assets/icons/chart.svg";
import { WelcomeLayout } from "./WelcomeLayout";
import { RouterLink } from "vue-router";
export const Third = defineComponent({
  setup: () => {
    const slots={
      icon:()=><img class={s.icon} src={chart} />,
      title:()=><h2>每日提醒<br />不遗漏每一笔账单</h2>,
      buttons:()=>
      <>
      <RouterLink to="/welcome/2">上一页</RouterLink>
      <RouterLink to="/welcome/4">下一页</RouterLink>
      <RouterLink class={s.skip} to="/start"> 跳过</RouterLink>
      </>
    }
    return () => (
    <WelcomeLayout v-slots={slots}></WelcomeLayout>
    );
  },
});


          
          