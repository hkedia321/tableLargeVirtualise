import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import styled, { createGlobalStyle } from 'styled-components';
import * as utils from 'utils';

const TotalHeading = styled.h4`
    position: absolute;
    z-index: 1;
    padding-right: 10px;
    font-weight: normal;
    right: 15px;
    top: -3px;
    text-align: right;
`;
const graphStaticOptions = {
    chart: {
        type: 'area',
        height: (7 / 16 * 100) + '%'
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
            '' 
          )
        },
      },
  }

function Graph(props) {
    const options = {
        ...graphStaticOptions,
        series: [{
            data: props.data
          }]
    }
    
      return (
          <>
            <TotalHeading>&euro; {utils.formatNumberForDisplay(props.total)}</TotalHeading>
            <HighchartsReact
            highcharts={Highcharts}
            options={options}
            />
        </>
      )
}

Graph.propTypes = {
    data: PropTypes.array,
    total: PropTypes.number
}

export default Graph;