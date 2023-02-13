import React from 'react';
import { PieChart, Pie } from 'recharts';


export default function PieCharts({data}) {
  //console.log(data.data);
  return (
        <PieChart width={700} height={400}>
          
          <Pie data={data} dataKey="value" cx="50%" cy="50%"  outerRadius={100} innerRadius={50} fill="#6F8FAF" label />
        </PieChart>
  );
}