import style from "./Homepage.module.scss";
import nubank from "../../assets/img/nubank_logo.png";
import bradesco from "../../assets/img/bradesco_logo.png";

function HomePage() {
  return (
    <>
      <div className={style.home}>
        <h1 className={style.title}>Escolha o banco:</h1>
        <div className={style.options}>
          <div className={style.nubank}>
            <img src={nubank} alt="logo_nubank" className={style.logo_nubank} />
            <h2>Nubank</h2>
          </div>
          <div className={style.bradesco}>
            <img
              src={bradesco}
              alt="logo_bradesco"
              className={style.logo_bradesco}
            />
            <h2>Bradesco</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
