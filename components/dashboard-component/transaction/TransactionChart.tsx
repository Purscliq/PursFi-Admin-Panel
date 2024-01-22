"use client";
import { Line } from "@ant-design/plots";

const TransactionChart = () => {
 
  const data = [
    {
      time: "13th may",
      value: 142,
      category: "failed",
    },
    {
      time: "13th may",
      value: 504,
      category: "sucess",
    },
  
    {
      time: "14th may",
      value: 367,
      category: "failed",
    },
    {
      time: "14th may",
      value: 245,
      category: "sucess",
    },
    {
      time: "15th may",
      value: 456,
      category: "failed",
    },
    {
      time: "15th may",
      value: 156,
      category: "sucess",
    },
    {
      time: "16th may",
      value: 754,
      category: "failed",
    },
    {
      time: "16th may",
      value: 218,
      category: "sucess",
    },
    {
      time: "17th may",
      value: 727,
      category: "sucess",
    },
    {
      time: "17th may",
      value: 253,
      category: "failed",
    },
    {
      time: "18th may",
      value: 727,
      category: "sucess",
    },
    {
      time: "19th may",
      value: 253,
      category: "failed",
    },
    {
      time: "19th may",
      value: 256,
      category: "failed",
    },
    {
      time: "19th may",
      value: 293,
      category: "failed",
    },
  ]
const config = {
  data,
  xField: "time",
  yField: "value",
  legend: { size: false },
  seriesField: "category",
  color: [ "#E74A4ACC","#036F92CC"]

}
return <Line {...config} />
};

export default TransactionChart;
