import "./App.css";
import BottomComponent from "./componets/BottomComponent";
import ShowExcel from "./componets/ShowExcel";
import UploadExcel from "./componets/UploadExcel";

function App() {
  return (
    <div className="App">
      <UploadExcel />
      <ShowExcel />
      <BottomComponent />
    </div>
  );
}

export default App;
