import React from "react";
import "./App.css";
const data = require("./data.json");
function TableAvg() {
  const unique = [...new Set(data.map((item) => item.college))];

  let ageArr = (clgName) =>
    data
      .filter((clg) => {
        return clg.college === `${clgName}`;
      })
      .map((ag) => ag.age);

  let avgAge = (name) =>
    (
      ageArr(name).reduce((acc, next) => acc + next, 0) / ageArr(name).length
    ).toFixed(2);

  return (
    <div>
      <h1>collages age</h1>
      <table>
        <tr>
          <th>college</th> <th>max-age</th> <th>avg-age</th>
        </tr>

        {unique.map((e) => {
          return (
            <>
              <tr>
                <td>{e}</td>
                <td>{Math.max(...ageArr(e))}</td>
                <td>{avgAge(e)}</td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
}

export default TableAvg;
