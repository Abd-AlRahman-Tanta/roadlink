import { createRoot } from "react-dom/client";

const appendReactElement = (element: Element, component: React.ReactNode) => {
  const container = document.createElement("div");
  const root = createRoot(container);
  root.render(component);
  element.appendChild(container);
};

export default appendReactElement;
