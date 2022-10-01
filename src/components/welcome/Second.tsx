import { defineComponent } from "vue";
import s from "./WelcomeLayout.module.scss";
import clock from "../../assets/icons/clock.svg";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";
export const Second = defineComponent({
  setup: () => {
    const slots={
      icon:()=> <img class={s.icon} src={clock} />,
      title:()=> <h2>每日提醒<br/>不遗漏每一笔账单</h2>,
      buttons:()=>
      <>
      <RouterLink to="/welcome/1">上一页</RouterLink>
      <RouterLink to="/welcome/3">下一页</RouterLink>
      <RouterLink class={s.skip} to="/start">跳过</RouterLink>
      </>
    }
    return () => (
      <WelcomeLayout v-slots={slots}></WelcomeLayout>
    );
  },
});


