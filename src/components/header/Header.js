import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import ClarisightsLogo from '../../images/clarisightsLogo.svg';

const HeaderDiv = styled.div`
    background-color: #dddddd;
    padding: 15px 25px;
    border-bottom: 1px solid #d3d3d3;
    box-shadow: #d9d9d9 2px 2px 4px 0px;
    `;
const ImgLogo = styled.img`
    vertical-align: middle;
    `;
const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
    float: right;
    margin-top: 4px;
    cursor: pointer;
`;
    

function Header() {
    
    return (
        <HeaderDiv>
            <ImgLogo src={ClarisightsLogo} />
            <FontAwesomeIconStyled icon={faBars} />
        </HeaderDiv>
    )
}
export default Header;