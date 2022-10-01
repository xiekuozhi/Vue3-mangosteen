import { defineComponent } from "vue";
import s from "./WelcomeLayout.module.scss";
import pig from "../../assets/icons/piggy.svg";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";
export const First = defineComponent({
  setup: () => {
    const slots = {
      icon: () => <img src={pig} />,
      title: () => (<h2>会挣钱<br />还会省钱</h2>),
      buttons: () => (
        <>
          <RouterLink to="">上一页</RouterLink>
          <RouterLink to="/welcome/2">下一页</RouterLink>
          <RouterLink class={s.skip} to="/start">跳过</RouterLink>
        </>
      ),
    };
    return () => <WelcomeLayout v-slots={slots}></WelcomeLayout>;
  },
});
