import ContentEditButton from "@/Components/Dashboard/ContentEditButton";
import appendReactElement from "./appendReactElement";
import ContentAddButton from "@/Components/Dashboard/ContentAddButton";

export const renderEditButtons = (parentId?: string) => {
  const element = parentId ? document.getElementById(parentId) : document;
  // Handle single elements (not inside data-group)
  const singleElements = element.querySelectorAll(
    "[data-content]:not([data-group] [data-content])"
  );
  singleElements.forEach((el) => {
    appendReactElement(el, <ContentEditButton element={el} type="single" />);
  });

  // Handle group elements
  const groupElements = element.querySelectorAll("[data-group]");
  groupElements.forEach((el) => {
    appendReactElement(el, <ContentEditButton element={el} type="multiple" />);
  });
};

export const renderAddButtons = (parentId?: string) => {
  const element = parentId ? document.getElementById(parentId) : document;
  const arrayElements = element.querySelectorAll("[data-array]");
  arrayElements.forEach((el) => {
    appendReactElement(el, <ContentAddButton element={el as HTMLElement} />);
  });
};
