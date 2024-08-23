import { useState } from "react";
import "./App.css";
import BottomComponent from "./componets/BottomComponent";
import ShowExcel from "./componets/ShowExcel";
import UploadExcel from "./componets/UploadExcel";
import { uploadExcel, saveToDB } from "../services/bookServices";
function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState(null);

  const handleFileChange = (event) => {
    uploadExcel(event.target.files[0])
      .then((res) => {
        console.log(res);
        setData(res);
        console.log("Upload Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSave = () => {
    console.log(data);
    saveToDB(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancel = () => {
    setData(null);
  };

  return (
    <div className="App">
      <UploadExcel handleFileChange={handleFileChange} />
      <ShowExcel data={data} />
      <BottomComponent handleSave={handleSave} handleCancel={handleCancel} />
    </div>
  );
}

export default App;
