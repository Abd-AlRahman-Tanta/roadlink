import { useDashboardStore } from "@/Stores/useDashboardStore";
import ContentInput from "./ContentInput";
import { SyntheticEvent } from "react";
import axios from "axios";

const ContentEditorModal = () => {
  const { editedElements, parentElement } = useDashboardStore();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const inputs = e.currentTarget.querySelectorAll<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >("input[name], textarea[name], select[name]");

    const data: Record<string, { value: string; file: string }> = {};

    inputs.forEach((input) => {
      data[input.name] = {
        value: input.value,
        file: input.getAttribute("data-file") || "",
      };
    });

    const payload: Record<string, any> = { data };

    if (parentElement) {
      const dataId = parentElement.getAttribute("data-id");
      if (dataId) payload.dataId = dataId;

      const dataArr = parentElement.getAttribute("data-arr");
      if (dataArr) payload.dataArr = dataArr;
    }

    axios
      .post("/dashboard/update-content", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log(res));
  };

  const handleDelete = () => {
    if (!parentElement) return;

    const dataId = parentElement.getAttribute("data-id");
    const dataArr = parentElement.getAttribute("data-arr");
    const dataFile =
      parentElement.closest("[data-file]")?.getAttribute("data-file") || "";

    if (!dataId || !dataArr || !dataFile) return;

    axios
      .post(
        "/dashboard/delete-content",
        { dataId, dataArr, dataFile },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => console.log(res));
  };

  const isDeletable =
    parentElement?.getAttribute("data-deletable")?.toLowerCase() === "true";

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flexCenter">
      <form
        className="bg-white p-8 rounded-lg shadow w-full max-w-xl space-y-7"
        onSubmit={handleSubmit}
      >
        {editedElements.map((ele, idx) => (
          <ContentInput key={idx} element={ele} />
        ))}
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
          {isDeletable && (
            <button
              type="button"
              className="px-4 py-2 bg-red-600 text-white rounded"
              onClick={handleDelete}
            >
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContentEditorModal;
