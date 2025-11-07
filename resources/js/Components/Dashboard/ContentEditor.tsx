import { useEffect } from "react";
import { useDashboardStore } from "@/Stores/useDashboardStore";
import ContentEditorModal from "./ContentEditorModal";
import { renderAddButtons, renderEditButtons } from "@/Utils/DashboardUtils";

const ContentEditor = () => {
  const { editedElements } = useDashboardStore();

  useEffect(() => {
    renderEditButtons();
    renderAddButtons();

    const rerenderers =
      document.querySelectorAll<HTMLElement>("[data-rerenderer]");

    const handler = (e: Event) => {
      setTimeout(() => {
        const target = e.target as HTMLElement;
        const parentId = target.getAttribute("data-rerenderer");
        renderEditButtons(parentId);
        renderAddButtons(parentId);
      }, 500);
    };

    rerenderers.forEach((el) => el.addEventListener("click", handler));

    return () => {
      rerenderers.forEach((el) => el.removeEventListener("click", handler));
    };
  }, []);

  if (editedElements.length == 0) return null;

  return <ContentEditorModal />;
};

export default ContentEditor;
