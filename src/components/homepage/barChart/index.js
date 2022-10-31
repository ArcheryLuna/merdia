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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Study of stressed vs unstressed people | Data from 2019',
        },
    },
};

const labels = ['Atentivness', 'Performance', 'Depression', 'Anxiety'];
const unstressed = [823, 327, 82, 129]
const stressed = [170, 166, 345, 590]

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
    return <motion.div
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
    >
        <Bar options={options} data={data} className="relative content-center" />
    </motion.div>;
}
