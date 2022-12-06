

import React, {useState, useEffect} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import Survey from './survey';
import axios from "axios"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function RowChart() {
    const [chartData, setChartData] = useState({})
    var labels = ['Atentivness', 'Performance', 'Depression', 'Anxiety'];

    useEffect(() => {
        
            axios.get("https://media-api.archery-luna.com/api/v1/table")
                .then(res => {
                    console.log(res.data)
                    setChartData(res.data[0])
                })
                .catch(err => {
                    console.log(err)
                })

    }, [])

    const unstressed = [chartData.attentivnessNot, chartData.performanceNot, chartData.depressionNot, chartData.anxietyNot]
    const stressed = [chartData.attentivnessStress, chartData.performanceStress, chartData.depressionStress, chartData.anxietyStress]

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'An anonymous survey of users to show how they feel about the effects of stress on their lives',
            },
        },
    };
    
    const data = {
        labels,
        datasets: [
            {
                label: 'Stressed',
                data: stressed,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Unstressed',
                data: unstressed,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return <>
        <motion.div
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
        >
            <Bar options={options} data={data} className="relative content-center" />
        </motion.div>
        <Survey />
    </>;
}
