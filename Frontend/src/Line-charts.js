import React from  'react';
import {
    LineChart,
   CartesianGrid,
   Tooltip,
   Legend,
    Line,
    XAxis,
    YAxis,
   
} from 'recharts';
//DIAGRAMME EN LIGNE CONTINUE
export default function LineCharts({data}) {

  return (
      <LineChart  
        width={600} 
        height={400} 
        data={data}
        margin={{
          top: 5,
          right: 20,
          left: 20,
          bottom: 5,
        }}>
            
          <CartesianGrid strokeDasharray="3 3" />
            <Line  type="monotone" dataKey="value"
                        stroke="#4169E1" activeDot={{ r:5 }} />
           
           <XAxis dataKey="hour" />
        
            <YAxis />
             <Tooltip />
          <Legend />
        </LineChart>
  );
}
