import style from "./Sidebar.module.scss";
import logo from "../../assets/img/logo.svg";

function Welcome(props: any) {
  return (
    <>
      <div className={style.container}>
        <img src={logo} alt="logo" className={style.logo} />
        <div className={style.options}>
          <button className={style.button}>Bradesco</button>
          <button className={style.button}>Nubank</button>
        </div>
      </div>
    </>
  );
}

export default Welcome;
