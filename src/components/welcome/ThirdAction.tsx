import { RouterLink } from "vue-router";
import s from "./Welcome.module.scss";
import { FunctionalComponent } from 'vue';
export const ThirdActions:FunctionalComponent=()=>{
  return   (<div class={s.actions}>
      <RouterLink  to="/welcome/2">上一页</RouterLink>
      <RouterLink to="/welcome/4">下一页</RouterLink>
      <RouterLink class={s.skip} to="/start">跳过</RouterLink>
    </div>)
}
ThirdActions.displayName = 'ThirdActions'

