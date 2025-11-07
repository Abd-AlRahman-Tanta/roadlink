import { useDashboardStore } from "@/Stores/useDashboardStore";
import { Edit } from "@mui/icons-material";
import { ReactElement } from "react";

interface ContentEditButton {
  element: Element;
  type: "single" | "multiple";
}

const ContentEditButton = ({
  element,
  type,
}: ContentEditButton): ReactElement => {
  const { setEditedElements, setParentElement } = useDashboardStore();

  const handleClick = () => {
    if (type === "single") {
      setEditedElements([element]);
    } else if (type === "multiple") {
      setParentElement(element);
      const children = Array.from(element.querySelectorAll("[data-content]"));
      setEditedElements(children);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="absolute top-0 right-0  z-50 w-8 aspect-square rounded-full bg-black/30 flex items-center justify-center  hover:bg-black/50 duration-300"
    >
      <Edit />
    </button>
  );
};

export default ContentEditButton;
