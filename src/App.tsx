import "./App.css";
import BasicInformation from "./components/BasicInformation";
import MoreInformation from "./components/MoreInformation";
function App() {
  return (
    <>
      <div className="flex md:flex-row flex-col gap-2 w-full md:h-screen p-5 bg-pink-900">
        <BasicInformation />
        <MoreInformation />
      </div>
    </>
  );
}

export default App;
