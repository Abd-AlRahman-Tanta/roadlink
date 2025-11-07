import { createInertiaApp } from "@inertiajs/react";
import { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import "../css/app.css";
import "./bootstrap";
import RoadLinkLayout from "./Layouts/RoadLinkLayout";

createInertiaApp({
  resolve: (name) => {
    //@ts-ignore
    const pages = import.meta.glob("./Pages/**/*.tsx", { eager: true });
    let page = pages[`./Pages/${name}.tsx`];
    page.default.layout = (page: ReactNode) => <RoadLinkLayout children={page} />;
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
