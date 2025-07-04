'use client';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['População Geral', 'Mulheres', 'Jovens (18-24)'],
  datasets: [
    {
      label: 'Prevalência de Ansiedade (%)',
      data: [45, 55, 65],
      backgroundColor: ['#008B8B', '#00CECB', '#FF5E5B'],
      borderColor: '#fff',
      borderWidth: 2,
    },
  ],
};

const options = {
  indexAxis: 'y' as const,
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        callback: function (tickValue: string | number) {
          return `${tickValue}%`;
        },
      },
    },
  },
};

export default function PrevalenciaChart() {
  return (
    <div className="chart-container w-full max-w-xl mx-auto h-72 md:h-80 bg-gray-100 rounded-lg p-4">
      <Bar data={data} options={options} />
    </div>
  );
}
