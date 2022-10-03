import { RouterLink } from "vue-router";
import s from "./Welcome.module.scss";
import { FunctionalComponent } from 'vue';
export const FirstActions:FunctionalComponent=()=>{
  return   (<div class={s.actions}>
      <RouterLink  to="">上一页</RouterLink>
      <RouterLink to="/welcome/2">下一页</RouterLink>
      <RouterLink class={s.skip} to="/start">跳过</RouterLink>
    </div>)
}
FirstActions.displayName = 'FirstActions'
