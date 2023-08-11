//import React from "react";
//import { useState } from "react";

const Week1 = () => {
  const products = [
    {
      id: 1,
      itName: "珍珠奶茶",
      itDesc: "香濃奶茶搭配QQ珍珠",
      itPrice: 50,
      itQty: 20,
    },
    {
      id: 2,
      itName: "冬瓜檸檬",
      itDesc: "清新冬瓜配上新鮮檸檬",
      itPrice: 45,
      itQty: 18,
    },
    {
      id: 3,
      itName: "翡翠檸檬",
      itDesc: "綠茶與檸檬的完美結合",
      itPrice: 55,
      itQty: 34,
    },
    {
      id: 4,
      itName: "四季春茶",
      itDesc: "香醇四季春茶，回甘無比",
      itPrice: 45,
      itQty: 10,
    },
    {
      id: 5,
      itName: "阿薩姆奶茶",
      itDesc: "阿薩姆紅茶搭配香醇鮮奶",
      itPrice: 50,
      itQty: 25,
    },
    {
      id: 6,
      itName: "檸檬冰茶",
      itDesc: "檸檬與冰茶的清新組合",
      itPrice: 45,
      itQty: 20,
    },
    {
      id: 7,
      itName: "芒果綠茶",
      itDesc: "芒果與綠茶的獨特風味",
      itPrice: 55,
      itQty: 15,
    },
    {
      id: 8,
      itName: "抹茶拿鐵",
      itDesc: "抹茶與鮮奶的絕配",
      itPrice: 60,
      itQty: 20,
    },
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">品項</th>
            <th scope="col">描述</th>
            <th scope="col">價格</th>
            <th scope="col">庫存</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.itName}</td>
              <td>
                <small>{product.itDesc}</small>
              </td>
              <td>{product.itPrice}</td>
              <td>
                <button>-</button>
                {product.itQty}
                <button>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Week1;
