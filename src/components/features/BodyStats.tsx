import Widget from "../layout/Widget";
import { getCssVariable } from "../utils/getComputedStyles";
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);
const light = getCssVariable('--color-text-light');
const plugin:Plugin<'line'>={
    id:'chartAreaBackground',
    beforeDraw(chart, args, options) {
        const {ctx, chartArea} = chart;
        if (!chartArea) return;

        const { left, top, right, bottom } = chartArea;
        ctx.save();
        ctx.fillStyle = `rgb(from ${light} r g b / 10%)`;
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
const options:ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio:true,
    animations: {
        y: {
            easing: 'easeInOutElastic',
            from: 30
        }
    },
    scales: {
        y: {
            min: 30,
            max: 100,
            ticks: {
                maxTicksLimit: 5,
                autoSkipPadding: 10
            }
        },
        x:{
            grid: {
                display: false
            },
            ticks: {
                autoSkipPadding:10
            }
        }
    },
    interaction: {
        intersect: false,
        mode: 'nearest',
        axis:'xy'
    },
    elements: {
        line: {
          borderWidth: 2,
          tension: 0.1,
        },
        point: {
          radius: 2,
          hoverRadius: 3,
        },
    },
    plugins:{
        tooltip:{
            displayColors: false,
            callbacks:{
                label: (context) => `${context.parsed.y} kg`
            },
        }, 

    }

};



export default function BodyStats() {
    
    const primary = getCssVariable('--color-primary');
    const labels = ['Apr 20', 'Apr 29', 'May 10', 'May 21', 'May 30'];
    const data:ChartData<'line'> = {
        labels,
        datasets: [
            {
                label: '',
                data: [80, 76, 73, 70, 72],
                borderColor: primary,
            },
        ],
    };
    return (
      
            <Widget title="Body Stats">
                <Line options={options} data={data} plugins={[plugin]}/>
            </Widget>
     
    );
}