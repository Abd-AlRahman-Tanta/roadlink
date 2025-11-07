import axios from "axios";

export const uploadFile = async (file: File) => {
  try {
    const res = await axios.post(
      "/upload-file",
      { file: file },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return res.data.url;
  } catch (err) {}
};
