import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart }            from 'react-chartjs-2'

function HomeChart() {
    const [jsonData, setJsonData] = useState([]);
    const [dateColumn, setDateColumn] = useState(null); // Initialize dateColumn state
    
    useEffect(() => {
        const filename = '15_MIN_AUSTIN.json';
        axios
          .get(`http://127.0.0.1:8000/sdei/grabJson/${filename}`)
          .then((response) => {
            const data = response.data;
        
            // Find the date column dynamically by checking if values can be parsed as Dates
            if (!dateColumn) {
              for (const key in data[0]) {
                if (data[0].hasOwnProperty(key)) {
                  const sampleValue = data[0][key];
                  if (sampleValue && !isNaN(new Date(sampleValue).getTime())) {
                    setDateColumn(key);
                    break;
                  }
                }
              }
            }
      
            if (!dateColumn) {
              console.error('No date column found in the data.');
              return;
            }
      
            // Find the latest date in the data
            const latestDate = new Date(data[data.length - 1][dateColumn]);
      
            // Calculate the start date as 24 hours before the latest date
            const startDate = new Date(latestDate);
            startDate.setHours(startDate.getHours() - 24);
      
            // Filter the data to include only the 24-hour period starting from the calculated start date
            const filteredData = data.filter((entry) => {
              const entryDate = new Date(entry[dateColumn]);
              return entryDate >= startDate && entryDate <= latestDate;
            });
      
            setJsonData(filteredData);
          })
          .catch((error) => {
            console.error('Error grabbing JSON Data:', error);
          });
      }, [dateColumn]);
      
      
      
      

   
      const labels = jsonData?.map((item) => item[dateColumn]);

      const totalUsage = jsonData?.map((item) => item.grid * 0.25);

      const totalUsageSum = totalUsage.reduce((acc, value) => acc + value, 0);



    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Total Usage of all Appliances',
                data: totalUsage,
                fill: true,
                borderColor: 'green',
                backgroundColor: 'rgba(19, 146, 97, 0.2)', // Set the background color for bars
                borderWidth: 1, // Set the border width for bars
                hoverBackgroundColor: 'rgba(19, 146, 97, 0.4)', // Set the background color when hovering
            },
        ],
        
    };

    const chartOptions = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date/Time'
                },
                type: 'category', // Use 'category' scale for X-axis
                position: 'bottom', // Optional: Position the labels at the bottom
            },
            y: {
                title: {
                    display: true,
                    text: 'kWh',
                },
                beginAtZero: true, // Customize Y-axis as needed
            },
        },
    };

    return (
        <div>
            <h2>Total House Usage 24 Hours</h2>
            <h3>Total Usage : {totalUsageSum} kWh</h3>
            <Line data={chartData} options={chartOptions}/>
        </div>
    );
}

export default HomeChart;