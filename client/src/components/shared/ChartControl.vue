<template>
  <div class="chartElem">
    <div class="row">
      <highcharts
        class="chart"
        :options="chartOptions"
        :updateArgs="updateArgs"
      ></highcharts>
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
    seriesName: {
      type: String,
      required: false,
      default: () => '',
    },
    seriesData: {
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
        series: [
          {
            name: this.seriesName,
            marker: {
              enabled: false,
              states: {
                hover: {
                  enabled: true,
                },
              },
            },
            data: this.seriesData,
          },
        ],
      },
    };
  },
};
</script>
