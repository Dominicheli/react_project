import style from "./Nubank.module.scss";

const titlesTable = {
  data: "Data",
  description: "Descrição",
  parcel: "Parcela",
  responsible: "Responsável",
  category: "Categoria",
  value: "Valor",
};

const conta = [
  {
    data: "22/09/2022",
    description: "Compra",
    parcela: "1/12",
    responsible: "Felipe",
    category: "Mercado",
    value: 20,
  },
  {
    data: "22/09/2022",
    description: "Compra",
    parcela: "1/12",
    responsible: "Felipe",
    category: "Mercado",
    value: 20,
  },
  {
    data: "22/09/2022",
    description: "Compra",
    parcela: "1/12",
    responsible: "Felipe",
    category: "Mercado",
    value: 20,
  },
];

function Nubank() {
  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <h2>Nubank</h2>
          <button>Nova conta</button>
        </div>
        <div className={style.title}>
          <span>Setembro/2022</span>
        </div>
        <table className={style.table}>
          <thead>
            <tr>
              <th>{titlesTable.data}</th>
              <th>{titlesTable.description}</th>
              <th>{titlesTable.parcel}</th>
              <th>{titlesTable.responsible}</th>
              <th>{titlesTable.category}</th>
              <th>{titlesTable.value}</th>
            </tr>
          </thead>
          <tbody>
            {conta.map((item, index) => [
              <tr>
                <td>{item.data}</td>
                <td>{item.description}</td>
                <td>{item.parcela}</td>
                <td>{item.responsible}</td>
                <td>{item.category}</td>
                <td>R$ {item.value}</td>
              </tr>,
            ])}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Nubank;
