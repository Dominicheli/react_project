import Nubank from "../components/Nubank/Nubank";
import SideBar from "../components/SideBar/Sidebar";
import style from "./App.module.scss";

function App() {
  return (
    <>
      <div className={style.container}>
        <SideBar />
        <Nubank />
      </div>
    </>
  );
}

export default App;
