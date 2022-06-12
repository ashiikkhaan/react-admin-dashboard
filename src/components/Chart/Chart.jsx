import React from 'react';
import "./Chart.scss";
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({aspect , title}) => {
    const data = [
        {Month: 'January', Revenue: 1000, Cost: 800},
        {Month: 'February', Revenue: 1400, Cost: 1000},
        {Month: 'March', Revenue: 1100, Cost: 1300},
        {Month: 'April', Revenue: 1600, Cost: 1000},
        {Month: 'May', Revenue: 1800, Cost: 1200},
        {Month: 'June', Revenue: 2000, Cost: 1400},
        
      ];
    return (
        <div className='chart'>
            <div className="title">{title}</div>
           <ResponsiveContainer width="100%" aspect={aspect}>
           <AreaChart data={data}
                margin={{ top: 20, right: 15, left: 10, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="Month" stroke='gray'/>
                <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
                <Tooltip />
                <Area type="monotone" dataKey="Cost" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="Revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
           </ResponsiveContainer>
        </div>
    );
};

export default Chart;