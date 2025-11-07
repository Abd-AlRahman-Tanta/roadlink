import axios from "axios";
import { FormEvent } from "react";

export const sendEmail = async (e: FormEvent) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget as HTMLFormElement);

  try {
    const response = await axios.post("/send-contact-email", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error sending contact email:", error);
    throw error;
  }
};
