'use client';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend, Filler);

const data = {
  labels: ['2023', '2025', '2027', '2029', '2031', '2033'],
  datasets: [
    {
      label: 'Mercado Global (em Bilhões de USD)',
      data: [8.9, 12.5, 17.6, 24.7, 34.7, 43.9],
      fill: true,
      borderColor: '#008B8B',
      backgroundColor: 'rgba(0, 206, 203, 0.2)',
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    tooltip: {
      callbacks: {
        label: (context: import('chart.js').TooltipItem<'line'>) => `$${context.raw}B`,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: (tickValue: string | number) => `$${tickValue}B`,
      },
    },
  },
};

export default function MercadoChart() {
  return (
    <div className="w-full max-w-xl mx-auto h-72 md:h-80 bg-gray-100 rounded-lg p-4">
      <Line data={data} options={options} />
    </div>
  );
}
