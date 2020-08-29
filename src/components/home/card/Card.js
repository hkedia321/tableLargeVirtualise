import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Head from './Head';

const CardStyled = styled.div`
    background-color: #fff;
    padding: 0 15px 25px;
    box-shadow: #eee 2px 2px;
    margin: 50px auto;
    width: 80%;
`;

const CardBody = styled.div`
    padding: 20px 0px;
`;

function Card(props) {
    return (
        <CardStyled>
            <Head fetchTableData={props.fetchTableData} title={props.title} />
            <CardBody>
                {props.children}
            </CardBody>
        </CardStyled>
    )
}

Card.propTypes = {
    fetchTableData: PropTypes.func,
    title: PropTypes.string
}


export default Card;