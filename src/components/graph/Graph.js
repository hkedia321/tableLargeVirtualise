import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './graph.css';

const graphStaticOptions = {
    chart: {
        type: 'area',
        height: (7 / 16 * 100) + '%',
        margin: 0
    },
    credits: {enabled: false},
    title: false,
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
            color: '#c8c9ff',
            marker: {
                radius: 2.5
            }
        },
    },
    tooltip: {
        formatter: function() {
          return (
              `
              <span class="graphTooltipValue">Value: ${this.y}</span>
              <br/>
              <span class="graphTooltipDate">Date: ${this.key} </span> 
               `
          )
        },
      },
  }

const Graph = React.memo(function(props) {
    const options = {
        ...graphStaticOptions,
        series: [{
            data: props.data
          }]
    }
    
      return (
        <HighchartsReact
            data-testid="highChartGraph"
            highcharts={Highcharts}
            options={options}
        />
      )
})

Graph.propTypes = {
    data: PropTypes.array.isRequired
}

export default Graph;