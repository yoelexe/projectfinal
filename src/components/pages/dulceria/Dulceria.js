import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Buscadores } from "./Buscadores";
import CardDulceria from "./CardDulceria";


const Dulceria = () => {
  const dulces = useSelector(state => state.dulces)
  const filtrado = useSelector(state => state.filtrado)
  const [data, setData] = useState([])
  useEffect(()=>{
    (filtrado.length === 0) ? setData(dulces) : setData(filtrado)
  }, [ filtrado, dulces ])
  return (
  <>
    <Buscadores setData={setData} />
    <ul className="row row-cols-1 row-cols-md-4 g-4">
      {data.map((el) => (
        <CardDulceria key={el.id_dulceria} {...el}/>
      ))}
    </ul>
  </>
  );
};

export default Dulceria;
