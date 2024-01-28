/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./index.css";
import { Main } from "./main";
import { Train } from "./Train";
import { Combat } from "./Combat";
import { Toaster } from "solid-toast";
import { Inventory } from "./Inventory";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <Router base="/CultivationIdle">
      <Route path="/" component={Main} />
      <Route path="/train" component={Train} />
      <Route path="/combat" component={Combat} />
      <Route path="/inventory" component={Inventory} />
    </Router>
  ),
  root!,
);
