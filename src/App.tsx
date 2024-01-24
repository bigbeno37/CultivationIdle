import { createSignal, type Component, Show } from "solid-js";

import styles from "./App.module.css";
import { state, setState, tickSpeed, tick } from "./store";

import Main from "./main";
import Test from "./Test";

const App: Component = () => {
  const timer = setInterval(() => {
    setState("bar", (bar) => bar + 1.0 / tickSpeed());
    if (state.bar > 100) {
      setState("bar", 0.0);
      tick[state.action]();
    }
  }, 10);

  return (
    <div class={styles.App}>
      <div class={styles.nav}>
        <button
          class={styles.nav_item}
          onClick={() => {
            setState("menu", "Main");
          }}
        >
          Main
        </button>
        <button
          class={styles.nav_item}
          onClick={() => {
            setState("menu", "Test");
          }}
        >
          Test
        </button>
      </div>
      <progress max="100" value={state.bar}>
        {" "}
      </progress>
      <Show when={state.menu === "Main"}>
        <Main />
      </Show>
      <Show when={state.menu === "Test"}>
        <Test />
      </Show>
    </div>
  );
};

export default App;
