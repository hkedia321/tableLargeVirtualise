import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Head from './Head';
import Loader from '../../loader/Loader'

const CardStyled = styled.div`
    background-color: #fff;
    padding: 0 15px 25px;
    box-shadow: #eee 2px 2px;
    margin: 50px auto;
    width: 80%;
`;

function Card(props) {
    return (
        <CardStyled>
            <Head fetchTableData={props.fetchTableData} />
            {props.children}
        </CardStyled>
    )
}

Card.propTypes = {
    fetchTableData: PropTypes.func
}


export default Card;