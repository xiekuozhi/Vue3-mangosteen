import s from "./Welcome.module.scss";
import {  FunctionalComponent, } from "vue";

export const First:FunctionalComponent = () => {
    return  (
      <div class={s.card}>
        <svg>
          <use xlinkHref='#piggy'></use>
        </svg>
        <h2>会挣钱<br />还会省钱</h2>
      </div>
    )
}
First.displayName='First'


