'use client';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const data = {
  labels: ['Utilizam Telepsicologia', 'Não Utilizam'],
  datasets: [
    {
      label: 'Adoção por Psicólogos no Brasil',
      data: [80, 20],
      backgroundColor: ['#008B8B', '#D8D8D8'],
      hoverOffset: 4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    tooltip: {
      callbacks: {
        label: (context: import('chart.js').TooltipItem<'doughnut'>) => `${context.label}: ${context.raw}%`,
      },
    },
  },
};

export default function TelepsicologiaChart() {
  return (
    <div className="w-full h-64 md:h-72 bg-gray-100 rounded-lg p-4">
      <Doughnut data={data} options={options} />
    </div>
  );
}
