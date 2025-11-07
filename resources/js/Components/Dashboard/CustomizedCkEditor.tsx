import { CKEditor } from "@ckeditor/ckeditor5-react";
import { LineHeight } from "@rickx/ckeditor5-line-height";
import axios from "axios";
import {
  ClassicEditor,
  Command,
  Autosave,
  Bold,
  Essentials,
  Italic,
  Paragraph,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  Underline,
  Alignment,
  FontSize,
  List,
  FontColor,
  FontBackgroundColor,
  Strikethrough,
  Subscript,
  Superscript,
  Link,
  Image,
  ImageToolbar,
  ImageUpload,
  ImageStyle,
  ImageResize,
  SimpleUploadAdapter,
  ImageInsertUI,
  AutoLink,
  Plugin,
  ButtonView,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";

const CustomizedCkEditor = ({
  value,
  onChange,
  onUploadStart,
  onUploadComplete,
  setIsUploading,
}) => {
  class Direction extends Plugin {
    static get pluginName() {
      return "Direction";
    }

    init() {
      const editor = this.editor;

      editor.commands.add("setDirection", new SetDirectionCommand(editor));

      editor.ui.componentFactory.add("direction:ltr", (locale) => {
        const button = new ButtonView(locale);
        button.set({ label: "LTR", tooltip: true, withText: true });
        button.on("execute", () =>
          editor.execute("setDirection", { direction: "ltr" })
        );
        return button;
      });

      editor.ui.componentFactory.add("direction:rtl", (locale) => {
        const button = new ButtonView(locale);
        button.set({ label: "RTL", tooltip: true, withText: true });
        button.on("execute", () =>
          editor.execute("setDirection", { direction: "rtl" })
        );
        return button;
      });
    }
  }

  class SetDirectionCommand extends Command {
    execute({ direction }) {
      const view = this.editor.editing.view;
      const viewRoot = view.document.getRoot();

      view.change((writer) => {
        if (direction) {
          writer.setAttribute("dir", direction, viewRoot);
        } else {
          writer.removeAttribute("dir", viewRoot);
        }
      });
    }

    refresh() {
      this.isEnabled = true;
    }
  }

  class UploadFilePlugin extends Plugin {
    init() {
      const editor = this.editor;

      editor.ui.componentFactory.add("uploadFile", (locale) => {
        const view = new ButtonView(locale);
        view.set({
          label: "Upload File",
          withText: true,
          tooltip: true,
        });

        view.on("execute", () => {
          // Get selected text in editor model
          const selection = editor.model.document.selection;
          let selectedText = "";

          if (!selection.isCollapsed) {
            const range = selection.getFirstRange();
            selectedText =
              Array.from(range.getItems())
                .map((item) => item.data)
                .join("") || "";
          }

          if (!selectedText) {
            // Abort if no text selected
            return;
          }

          const input = document.createElement("input");
          input.type = "file";

          input.onchange = async () => {
            const file = input.files[0];
            const formData = new FormData();
            formData.append("file", file);

            try {
              setIsUploading(true);
              const response = await axios.post("/upload-file", formData, {
                headers: { "Content-Type": "multipart/form-data" },
              });

              const url = response.data.url;

              editor.model.change((writer) => {
                const linkText = writer.createText(selectedText, {
                  linkHref: url,
                });
                editor.model.insertContent(
                  linkText,
                  editor.model.document.selection
                );
              });
            } catch (error) {
              // handle upload error if needed
            } finally {
              setIsUploading(false);
            }
          };

          input.click();
        });

        return view;
      });
    }
  }

  const editorConfig = {
    toolbar: {
      items: [
        "heading",
        "|",
        "fontfamily",
        "fontsize",
        "fontColor",
        "fontBackgroundColor",

        "lineHeight",
        "direction:ltr",
        "direction:rtl",
        "|",
        "bold",
        "italic",
        "strikethrough",
        "subscript",
        "superscript",
        "code",
        "|",
        "link",
        "uploadImage",
        "uploadFile",
        "blockQuote",
        "codeBlock",
        "|",
        "bulletedList",
        "numberedList",
        "todoList",
        "outdent",
        "indent",
        "textPartLanguage",
        "insertTable",
        "alignment",
      ],
      shouldNotGroupWhenFull: false,
    },
    fontSize: {
      options: ["default", 8, 10, 12, 14, 16, 18, 20, 24, 28, 32],
      supportAllValues: true, // allows arbitrary values if needed
    },
    lineHeight: {
      // specify your otions in the lineHeight config object.
      // Default values are ['default', 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2, 2.5]
      options: ["default", "10px", "15px", "20px", "25px", "30px", "35px"],
      supportAllValues: true,
    },
    plugins: [
      Direction,
      LineHeight,
      Autosave,
      Bold,
      Essentials,
      Italic,
      Paragraph,
      Table,
      TableCaption,
      TableCellProperties,
      TableColumnResize,
      TableProperties,
      TableToolbar,
      Underline,
      Alignment,
      FontSize,
      List,
      FontColor,
      FontBackgroundColor,
      Strikethrough,
      Subscript,
      Superscript,
      Link,
      AutoLink,
      Image,
      ImageToolbar,
      ImageUpload,
      ImageStyle,
      ImageResize,
      ImageInsertUI,
      SimpleUploadAdapter,
      UploadFilePlugin,
    ],
    alignment: {
      options: [{ name: "center" }, { name: "justify" }],
    },
    table: {
      contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
    },
    image: {
      toolbar: ["imageTextAlternative", "imageStyle:full", "imageStyle:side"],
      upload: {
        types: ["jpeg", "png", "gif", "bmp", "webp", "tiff"],
      },
    },
    simpleUpload: {
      uploadUrl: "/upload-file",
      headers: {
        "X-CSRF-TOKEN": document
          .querySelector('meta[name="csrf-token"]')
          ?.getAttribute("content"),
      },
    },
    licenseKey: "GPL",
  };
  return (
    <CKEditor
      editor={ClassicEditor}
      data={value || ""}
      config={editorConfig}
      onChange={onChange}
      onUploadStart={onUploadStart}
      onUploadComplete={onUploadComplete}
    />
  );
};

export default CustomizedCkEditor;
