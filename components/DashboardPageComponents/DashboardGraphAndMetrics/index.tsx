import { FontSpaceMono } from '@/utils/typography';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import { useEffect, useState } from 'react';

const kpiMetrics = [
  { label: 'KPI METRIC 1', value: '1,230.01' },
  { label: 'KPI METRIC 2', value: '429' },
  { label: 'KPI METRIC 3', value: '12.42' },
  { label: 'KPI METRIC 4', value: '800.52' },
];

function DashboardGraphAndMetrics() {
  const [chartOptions, setChartOptions] = useState<Highcharts.Options>({});

  useEffect(() => {
    const generateDummyData = () => {
      const data = [];
      const startDate = Date.UTC(2022, 0, 1);
      const endDate = Date.UTC(2022, 8, 1);
      for (let date = startDate; date <= endDate; date += 24 * 3600 * 1000) {
        data.push([date, 150 + Math.random() * 50]);
      }
      return data;
    };

    const options: Highcharts.Options = {
      chart: {
        height: 430,
        backgroundColor: 'transparent',
        style: { fontFamily: 'Arial, sans-serif' },
      },
      title: {
        text: 'CUMULATIVE AMOUNT PAST 30 DAYS',
        align: 'left',
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          fontFamily: `${FontSpaceMono.style.fontFamily}`,
        },
      },
      subtitle: {
        text: '20,200,150',
        align: 'left',
        style: {
          fontSize: '24px',
          fontWeight: 'bold',
          fontFamily: `${FontSpaceMono.style.fontFamily}`,
          color: 'black',
        },
      },
      xAxis: {
        type: 'datetime',
        labels: {
          format: '{value:%d %b}',
          style: { color: '#666', fontSize: '10px' },
        },
        tickLength: 0,
        lineColor: '#ccc',
        crosshair: true,
      },
      legend: { enabled: false },
      series: [
        {
          type: 'areaspline',
          name: 'Cumulative Amount',
          data: generateDummyData(),
          color: '#24837B',
          fillColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, 'rgba(0, 255, 255, 0.3)'],
              [1, 'rgba(0, 255, 255, 0)'],
            ],
          },
          lineWidth: 2,
          marker: { enabled: false },
        },
      ],
      tooltip: {
        shared: true,
        valueSuffix: ' LST',
        valueDecimals: 2,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderRadius: 10,
      },
      rangeSelector: {
        buttons: [
          { type: 'month', count: 1, text: '1m' },
          { type: 'month', count: 3, text: '3m' },
          { type: 'month', count: 6, text: '6m' },
          { type: 'year', count: 1, text: '1y' },
          { type: 'all', text: 'All' },
        ],
        selected: 0,
        inputEnabled: false,
        buttonTheme: {
          fill: '#E3E3E3',
          stroke: 'none',
          'stroke-width': 0,
          r: 8,
          style: {
            color: 'black',
            fontWeight: '500',
            fontSize: '12px',
          },
          states: {
            hover: {
              fill: '#00B6A6',
              style: { color: 'black', fontWeight: 'bold' },
            },
            select: {
              fill: 'rgba(0, 182, 166, 0.14)',
              style: { color: 'black', fontWeight: 'bold' },
            },
          },
        },
      },
      navigator: {
        enabled: true,
        height: 49,
        margin: 5,
        outlineWidth: 0,
        maskFill: 'rgba(0, 182, 166, 0.31)',
        xAxis: { labels: { enabled: false } },
        series: { type: 'area', color: '#24837B', lineWidth: 1 },
        handles: {
          backgroundColor: '#D9D9D9',
          borderColor: 'black',
        },
      },
      responsive: {
        rules: [
          {
            condition: { maxWidth: 768 },
            chartOptions: {
              chart: { height: '300px' },
              subtitle: { style: { fontSize: '18px' } },
              yAxis: {
                labels: { align: 'left', x: 0, y: -2 },
                title: { text: null },
              },
              rangeSelector: {},
              navigator: { enabled: false },
            },
          },
        ],
      },
    };

    setChartOptions(options);
  }, []);

  return (
    <div className="mb-6">
      <div className="flex flex-col lg:flex-row w-full justify-between gap-3">
        <div className="flex flex-row lg:flex-col px-3 py-3 lg:p-0 gap-3 overflow-x-auto lg:overflow-x-visible lg:w-1/4">
          {kpiMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white p-3 lg:p-4 border-2 rounded-sm border-black shadow-brut-sm min-w-[200px] lg:min-w-0 w-full"
            >
              <div className={`${FontSpaceMono.className} font-bold text-sm lg:text-lg mb-1`}>{metric.label}</div>
              <div className={`${FontSpaceMono.className} text-2xl lg:text-4xl font-bold`}>{metric.value}</div>
            </div>
          ))}
        </div>
        <div className="lg:w-3/4 bg-white border-2 border-black rounded-sm shadow-brut-sm flex-1 min-h-[300px] lg:min-h-[400px]">
          <div className="p-4 h-full">
            <HighchartsReact highcharts={Highcharts} options={chartOptions} constructorType={'stockChart'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardGraphAndMetrics;
