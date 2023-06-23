import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import mockData from "./MockData";


const ChartComponent = () => {
  const colorMap = {
    Main: "#B798F5",
    Solar: "#02E10C",
    DG: "#403F3D",
    Battery: "#FDE602",
    "Solar+Battery": "#86B0FF",
    "Battery+Solar": "#86B0FF",
    "Main+Solar": "#7243D0",
    "Main+Battery": "#32864B",
    "Main+Solar+Battery": "#8BC486",
    "DG+Battery": "magenta",
    "DG+Solar+Battery": "cyan",
    "DG+Battery+Solar": "cyan",
    Undetermined: "#BBE3FD",
    "": "white"
  };
  //**** I have commented below code. Because the API has CORS error. 
  // That error can be resolve from Server.I have used mock data instead. **** /

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://api.thunder.softoo.co/vis/api/dashboard/ssu/fixed",
  //         {
  //           headers: {
  //             "Access-Control-Allow-Origin": "*",
  //             "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
  //             "Access-Control-Allow-Headers": "Content-Type"
  //           }
  //         }
  //       );
  //       const apiData = response.data;
  //     } catch (error) {
  //       console.error("Error fetching data:", error.message);
  //     }
  //   };
  // fetchData();
  // }, []);

  const processData = () => {
    const data = [];
    const dates = new Set();

    mockData.forEach((item) => {
      const { sourceTag, minute_window } = item;
      const categoryIndex = Object.keys(colorMap).indexOf(sourceTag);
      const baseTime = new Date(minute_window).getTime();
      const duration = 5 * 60 * 1000; // Assuming 5 minutes duration

      const date = new Date(baseTime).toLocaleDateString("en-US");
      dates.add(date);

      data.push({
        name: sourceTag,
        value: [categoryIndex, baseTime, baseTime + duration, duration],
        itemStyle: {
          normal: {
            color: colorMap[sourceTag]
          }
        }
      });
    });

    const yAxisData = Array.from(dates).sort(
      (a, b) => new Date(a) - new Date(b)
    );

    return {
      data,
      yAxisData
    };
  };

  const renderItem = (params, api) => {
    const categoryIndex = api.value(0);
    const start = api.coord([api.value(1), categoryIndex]);
    const end = api.coord([api.value(2), categoryIndex]);
    const height = api.size([0, 1])[1] * 0.6;
    const rectShape = echarts.graphic.clipRectByRect(
      {
        x: start[0],
        y: start[1] - height / 2,
        width: end[0] - start[0],
        height: height
      },
      {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height
      }
    );

    return (
      rectShape && {
        type: "rect",
        transition: ["shape"],
        shape: rectShape,
        style: api.style()
      }
    );
  };

  const { data, yAxisData } = processData();

  const option = {
    theme: "dark", // Enable dark mode
    tooltip: {
      formatter: (params) => {
        const { name, value } = params;
        const timestamp = new Date(value[1]).toLocaleString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false
        });
        const colorIcon = `<span style="display:inline-block;margin-right:5px;width:10px;height:10px;background-color:${colorMap[name]}"></span>`;
        return `${colorIcon}${name}: ${timestamp}`;
      }
    },
    title: {
      text: "Electrical Power Supply",
      left: "center"
    },
    dataZoom: [
      {
        type: "slider",
        filterMode: "weakFilter",
        showDataShadow: false,
        top: 400,
        height: 10,
        borderColor: "transparent",
        backgroundColor: "#e2e2e2",
        fillerColor: "#cccccc",
        handleStyle: {
          color: "#cccccc"
        },
        handleSize: "100%",
        handleIcon: "path://M0,0 L100,0 L100,40 L0,40 L0,0 Z",
        textStyle: {
          color: "#333333"
        },
        yAxisIndex: 0,
        start: 0,
        end: 100
      },
      {
        type: "inside",
        filterMode: "weakFilter",
        yAxisIndex: 0
      }
    ],
    grid: {
      height: 250
    },
    xAxis: {
      type: "time",
      min: "2023-06-15 00:00:00+05",
      max: "2023-06-15 23:59:59+05",
      axisLabel: {
        formatter: (value) => {
          const date = new Date(value);
          return date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          });
        }
      }
    },
    yAxis: {
      type: "category",
      data: yAxisData
    },
    series: [
      {
        type: "custom",
        renderItem: renderItem,
        dimensions: ["category", "startTime", "endTime", "duration"],
        encode: {
          x: [1, 2],
          y: 0
        },
        data: data
      }
    ]
  };

  return (
    <ReactEcharts
      option={option}
      echarts={echarts}
    />
  );
};

export default ChartComponent;
