import { defineComponent } from "vue";
import s from "./WelcomeLayout.module.scss";
import cloud from "../../assets/icons/cloud.svg";
import { RouterLink } from "vue-router";
import { WelcomeLayout } from "./WelcomeLayout";
export const Forth = defineComponent({
  setup: () => {
    return () => (
      <WelcomeLayout>
        {{
          icon:()=><img src={cloud} />,
          title:()=> <h2>会挣钱<br/>还要会省钱</h2>,
          buttons:()=>
          <>
            <RouterLink to="/welcome/3">上一页</RouterLink>
            <RouterLink to="/start">完成</RouterLink>
            <RouterLink class={s.fake} to="/start">跳过</RouterLink>
          </>
        }}
      </WelcomeLayout>
    );
  },
});
