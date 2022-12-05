

import React from 'react';
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

var labels = ['Atentivness', 'Performance', 'Depression', 'Anxiety'];

const chartData = async () => {
    const result = fetch("http://node1.lunacs.co.uk:7321/api/v1/table")
        .then((response) => response.json())
        .then((data) => {
            return data[0];
        });

    return result;
}

const datas = chartData()
var unstressed = [datas.attentivnessNot, datas.performanceNot, datas.depressionNot, datas.anxietyNot]
var stressed = [datas.attentivnessStress, datas.performanceStress, datas.depressionStress, datas.anxietyStress]

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'An annonimous survey of users to show how they feel about the effects of stress on their lives',
        },
    },
};

export const data = {
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

export function RowChart() {

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
