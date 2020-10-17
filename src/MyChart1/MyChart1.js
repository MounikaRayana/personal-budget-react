import React, { useEffect } from "react";
import Chart from "chart.js";
import axios from "axios";

export default function App() {

  useEffect(() => {
    var dataSource = {
      datasets: [
          {
              data: [],
              backgroundColor: [
                  '#ffcd56',
                  '#ff6384',
                  '#36a2eb',
                  '#fd6b19',
                  "#878BB6",
                  "#4ACAB4",
                  "#FF8153"
              ],
          }  
      ],
      labels: []
    };

    axios.get('http://localhost:3000/budget')
      .then(res => {
        console.log(res);
        for (var i = 0; i < res.data.length; i++) {
            dataSource.datasets[0].data[i] = res.data[i].budget;
            dataSource.labels[i] = res.data[i].title;
        }
        //console.log(data);

      const ctx = document.getElementById("myChart");
      new Chart(ctx, {
      type: "pie",
      data: dataSource
    });
  });
  });
  
  return (
    <div className="App">
      <canvas id="myChart"/>
    </div>
  );
}