import axios from "axios";
// import { baseURL } from "./baseURL.js";

export const uploadExcel = async (file) => {
  const formData = new FormData();
  formData.append("excelFile", file);

  return axios
    .post("http://localhost:8000/api/book/uploadExcel", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error while uploading the Excel file:", error);
      throw error;
    });
};

export const saveToDB = async (data) => {
  return axios
    .post("http://localhost:8000//api/book/saveExcel", data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error occurred while save the data in database:", error);
      throw error;
    });
};
