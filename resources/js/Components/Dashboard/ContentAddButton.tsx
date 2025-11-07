import { useDashboardStore } from "@/Stores/useDashboardStore";

const ContentAddButton = ({ element }: { element: HTMLElement }) => {
  const { setEditedElements, setParentElement } = useDashboardStore();

  const handleClick = () => {
    // Find the first child with data-group
    const groupChild = element.querySelector<HTMLElement>("[data-group]");
    if (!groupChild) return;

    // Generate a new ID
    const newId = Date.now().toString();
    groupChild.setAttribute("data-id", newId);

    // Find all children with data-content
    const contentChildren =
      groupChild.querySelectorAll<HTMLElement>("[data-content]");

    // Add them to editedElements
    setEditedElements(Array.from(contentChildren));

    // Set parentElement
    setParentElement(groupChild);
  };

  return (
    <button
      type="button"
      className="px-4 py-2 bg-green-600 text-white rounded centerV right-0"
      onClick={handleClick}
    >
      Add
    </button>
  );
};

export default ContentAddButton;
