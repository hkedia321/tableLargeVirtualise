import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import styled from 'styled-components';


function Graph({}) {
    const options = {
        chart: {
            type: 'area'
        },
        title: false,
        series: [{
          data: [1, 2, 3]
        }],
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                enabled: false
            },
            title: false,
            tickLength: 0,
            lineColor: 'transparent',  
        },
        yAxis: {
            labels: {
                enabled: false
            },
            title: false,
            gridLineWidth: 0
        },
        plotOptions: {
            series: {
                fillColor: '#eaebfe',
                color: '#c8c9ff'
            }
        },
      }
    
      return (
        <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
      )
}

export default Graph;