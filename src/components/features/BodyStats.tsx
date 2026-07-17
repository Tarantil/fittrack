import Widget from "../layout/Widget";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    type ChartData,
    type ChartOptions,
    type Plugin
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { useTheme } from "../../hooks/useTheme";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);

const chartTheme = {
    light: {
      primary: "#7FB239",
      mutedText: "#6b7280",
      background: "#f7f8f3",
    },
    dark: {
      primary: "#9BC85B",
      mutedText: "#a1a1aa",
      background: "#0f1411",
    },
  };



export default function BodyStats() {
    const {theme} = useTheme();
    const colors= chartTheme[theme];
    const plugin: Plugin<'line'> = {
        id: 'chartAreaBackground',
        beforeDraw(chart) {
            const { ctx, chartArea } = chart;
            if (!chartArea) return;
            const { left, top, right, bottom } = chartArea;
            ctx.save();
            ctx.fillStyle = colors.background;
            ctx.beginPath();
            ctx.roundRect(
                left,
                top,
                right - left,
                bottom - top,
                10
            );
            ctx.fill();
            ctx.restore();

        }
    };
    const options: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: true,
        animations: {
            y: {
                easing: 'easeInOutElastic',
                from: 30
            }
        },
        scales: {
            y: {
                suggestedMin: 45,
                suggestedMax:110,
                ticks: {
                    autoSkipPadding: 10,
                    color: colors.mutedText
                },
                grid: {
                    display: false,
             
                },
                border: {
                    display:false
                },
            },
            x: {
                grid: {
                    display: false,
                },
                border: {
                    display:false
                },
                ticks: {
                    autoSkipPadding: 10,
                    color: colors.mutedText
                }
            }
        },
        interaction: {
            intersect: false,
            mode: 'nearest',
            axis: 'xy'
        },
        elements: {
            line: {
                borderWidth: 2,
                tension: 0.3,
            },
            point: {
                radius: 2,
                hoverRadius: 3,
            },
        },
        plugins: {
            tooltip: {
                displayColors: false,
                callbacks: {
                    label: (context) => `${context.parsed.y} kg`
                },
            },

        }

    };
    const labels = ['Apr 20', 'Apr 29', 'May 10', 'May 21', 'May 30'];
    const data: ChartData<'line'> = {
        labels,
        datasets: [
            {
                label: '',
                data: [80, 76, 73, 70, 72],
                borderColor: colors.primary,
            },
        ],
    };
    return (

        <Widget title="Body Stats"  size='small'>
            <Line key={theme} options={options} data={data} plugins={[plugin]} />
        </Widget>

    );
}