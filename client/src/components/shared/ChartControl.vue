<!-- Global Chart control, decopled from the state -->
<!-- 
It receives:
- (chartTitle) value shown above the chart as a big title, based on: https://api.highcharts.com/highcharts/series.spline
- (chartSubTitle) value shown above the chart as a smaller title, based on: https://api.highcharts.com/highcharts/series.spline
- (yAxisLabel) value used as a label for the y axis, based on: https://api.highcharts.com/highcharts/series.spline
- (serisDataFull) array of series, based on: https://api.highcharts.com/highcharts/series.spline
-->

<template>
  <div class="chartElem">
    <div class="row">
      <highcharts class="chart" :options="chartOptions"></highcharts>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChartControl',
  props: {
    chartTitle: {
      type: String,
      required: false,
      default: () => '',
    },
    chartSubTitle: {
      type: String,
      required: false,
      default: () => '',
    },
    yAxisLabel: {
      type: String,
      required: false,
      default: () => '',
    },
    serisDataFull: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'spline',
        },
        title: {
          text: this.chartTitle,
        },
        subtitle: {
          text: this.chartSubTitle,
        },
        xAxis: {
          type: 'datetime',
        },
        yAxis: {
          title: {
            text: this.yAxisLabel,
          },
          labels: {
            formatter: function () {
              return this.value;
            },
          },
        },
        tooltip: {
          crosshairs: true,
          shared: true,
          borderRadius: 10,
        },
        plotOptions: {
          spline: {
            marker: {
              radius: 4,
              lineColor: '#666666',
              lineWidth: 1,
            },
          },
        },
        series: this.serisDataFull.map((item) => {
          return {
            name: item.seriesName,
            data: item.seriesData,
            color: item.seriesColor,
            marker: {
              enabled: false,
              states: {
                hover: {
                  enabled: true,
                },
              },
            },
          };
        }),
      },
    };
  },
};
</script>
