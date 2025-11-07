import { useState } from "react";
import axios from "axios";

const useContactFormSubmitter = () => {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const submit = async (form: HTMLFormElement) => {
    setIsSending(true);
    setStatus(null);

    try {
      const formData = new FormData(form);
      await axios.post("/send-contact-email", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setStatus("success");
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return { submit, isSending, status };
};

export default useContactFormSubmitter;
