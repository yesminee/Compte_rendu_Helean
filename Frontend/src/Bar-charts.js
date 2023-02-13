import React ,{ useState } from  'react';
import {
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
 
} from "recharts";
  //DIAGRAMME EN BATONS
export default function BarCharts({data}) {
 const [highestValue, setHighestValue] = useState(0);
  return (
      <BarChart
      width={600} 
     height={400} 
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >  
        <Bar dataKey="value" fill="#82ca9d" isAnimationActive={true}>
          {//iterer sur les valeurs du json pour trouver la valeur maximale
          data.map((entry) => {
            	if(highestValue<entry.value){
                setHighestValue(entry.value);
              }
            })}
            {
              //comparer les vaaleurs dans le json avec la valeur maximale trouvée
          	data.map((entry, index) => {
              //color sera rouge si les 2 valeurs sont egaux sinon vert
            	const color = entry.value === highestValue ? '#ef5350' : "#82ca9d";
            	return <Cell key={index} fill={color} />;
            })
          }
          </Bar>
         <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hour" />
        <YAxis />
        <Tooltip />
        <Legend />
      </BarChart>

    
  );
}
