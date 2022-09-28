import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";

export const App = defineComponent({
  setup: () => {
    return () => (
      <>
        <header>
          导航
          <ul>
            <li>
              <RouterLink to={"/"}>Foot</RouterLink>
            </li>
            <li>
              <RouterLink to="/about">bar</RouterLink>
            </li>
          </ul>
        </header>
        <div>
          <RouterView />
        </div>
        <footer>页脚</footer>
      </>
    );
  },
});
