import ApexCharts from "react-apexcharts";

interface LineChartProps {
   ChartData: number[];
   XAxis: string[];
   Symbol: string;
}

const LineChart = (props: LineChartProps) => {
   const chartOptions: ApexCharts.ApexOptions = {
      chart: {
         id: "line-chart",
         animations: {
            enabled: true,
            easing: "linear",
            dynamicAnimation: {
               speed: 2000,
            },
         },
         toolbar: {
            show: false,
         },
      },
      colors: ["#4FC289"],
      stroke: {
         curve: "straight",
         width: 2,
      },
      markers: {
         size: 4,
         colors: ["#fff"],
         strokeColors: ["#4FC289"],
         strokeWidth: 2,
         hover: {
            size: 7,
         },
      },
      xaxis: {
         categories: props.XAxis,
      },
      yaxis: {
         labels: {
            formatter: (value: number) => {
               return `${value.toFixed(4)} €`;
            },
         },
      },
      series: [
         {
            name: props.Symbol,
            data: props.ChartData,
         },
      ],
      noData: {
         text: "No data requested yet",
      },
   };

   return <ApexCharts options={chartOptions} series={chartOptions.series} type="line" height={"100%"} />;
};

export default LineChart;
