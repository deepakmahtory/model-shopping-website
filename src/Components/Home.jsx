import axios from "axios";
import { useEffect, useState } from "react";
import aa from "./fakestore.module.css";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Redux/CartSlice";
import { productList } from "../Redux/ProductSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((e) => e.products);

  useEffect(() => {
    dispatch(productList());
  }, []);

  let increHandler = (p) => {
    dispatch(add(p));
  };

  return (
    <>
      <table className={aa.tab}>
        <tbody>
          {data.map((e) => (
            <tr key={e.id}>
              <td>
                <img src={e.image} alt="" srcSet="" id={aa.size} />
              </td>
              <td>{e.title}</td>
              <td id={aa.price}>Price: {e.price}</td>
              <td>
                <button id={aa.btn} onClick={() => increHandler(e)}>
                  Add to cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
