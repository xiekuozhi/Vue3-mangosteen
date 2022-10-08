import { defineComponent } from "vue";
import { Button } from "../shared/Button";
import s from './StartPage.module.scss'

export const StartPage=defineComponent({
   
    setup:(props,context)=>{
        const onClick=()=>{
            console.log('hi')
        }
        return ()=>(
            <div>
                <div class={s.button_wrapper}>
                <Button onClick={onClick} class={s.button} >测试</Button>
                </div>
                
            </div>
        )
    }
})