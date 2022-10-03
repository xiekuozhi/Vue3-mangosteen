import { RouterLink } from "vue-router";
import s from "./Welcome.module.scss";
import { FunctionalComponent } from 'vue';
 export const ForthActions :FunctionalComponent = () => {
    return (
        <div class={s.actions}>
            <RouterLink to="/welcome/3">上一页</RouterLink>
            <RouterLink to="/start">完成</RouterLink>
            <RouterLink class={s.fake} to="/start">跳过</RouterLink>
        </div>)
 }
 ForthActions.displayName = 'ForthActions'