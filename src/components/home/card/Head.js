import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo, faRedoAlt } from '@fortawesome/free-solid-svg-icons'

const HeadStyled = styled.div`
    border-bottom: solid 1px #eee;
`;
const HeadingText = styled.h3`
    display: inline-block;
`;
const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
    float: right;
    cursor: pointer;
    margin-top: 20px;
`;

function Head(props) {
    return (
        <HeadStyled>
            <HeadingText>Your Marketer's Data</HeadingText>
            <FontAwesomeIconStyled icon={faRedoAlt} onClick={props.fetchTableData} />
        </HeadStyled>
    )
}
Head.propTypes = {
    fetchTableData: PropTypes.func
}
export default Head;