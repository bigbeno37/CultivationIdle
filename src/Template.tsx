import { type Component, JSXElement, onCleanup } from "solid-js";
import utils from "./styles/utils.module.css";
import { state, setState, tick, tickSpeed, pause, perTick } from "./store";
import { Nav } from "./Nav";
import { QuickInfo } from "./QuickInfo";
import { Toaster } from "solid-toast";

export const Template: Component<{ children: JSXElement }> = (props) => {
  const timer = setInterval(() => {
    if (!pause()) {
      setState("bar", (bar) => bar + 1.0 / tickSpeed());
    }
    if (state.bar > 100) {
      setState("bar", 0.0);
      tick[state.action]();
      perTick();
    }
  }, 10);
  onCleanup(() => {
    clearInterval(timer);
  });
  return (
    <div class={utils.App}>
      <Toaster />
      <QuickInfo />
      <progress max="100" value={state.bar}>
        {state.bar}/100
      </progress>
      {props.children}
      <Nav />
    </div>
  );
};
