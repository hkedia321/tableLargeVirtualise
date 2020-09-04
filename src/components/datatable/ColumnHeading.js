import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import * as utils from 'utils';

const FontAwesomeIconStyled = styled(({isOpen, ...rest}) => <FontAwesomeIcon {...rest} />)`
    cursor: pointer;
    transform: ${props => props.isOpen ? null : 'rotate(-90deg)'}
`;

const TableHeadingCell = styled.th`
    padding: 10px;
    text-align: right;
    width: ${props => props.isOpen ? 'auto' : '150px'};
    color: #4b4b4b;
    font-weight: normal;
    padding-bottom: ${props => props.isGraphHeader ? '10px' : '25px'};
`;

const TotalAmount = styled.h4`
    margin: 0px;
    color: #7f7f7f;
    font-weight: normal;
`;

const ColumnHeading = React.memo(function(props){

    const { text, columnKey, data, isGraphHeader, isOpen } = props;
    const total = isGraphHeader && data.reduce((total, campaignItem)=> total + 
    campaignItem.trend.reduce((campaignTotal, dayItem) => campaignTotal + dayItem[columnKey],0) ,0);
    return (
        <TableHeadingCell isGraphHeader={isGraphHeader} isOpen={isOpen}>
            {text} <FontAwesomeIconStyled key={isOpen? 'is-open' : 'not-open'} data-tip data-for='columnCollapseTooltip' isOpen={isOpen} icon={faCaretDown} onClick={props.handleToggleColumnShow} />
            {isGraphHeader && <TotalAmount dangerouslySetInnerHTML={{ __html:utils.formatCurrencyForDisplay(total)}}></TotalAmount>}

            {isOpen && <ReactTooltip id='columnCollapseTooltip' place='bottom' effect='solid'>
                 <span>Hide Column</span>
            </ReactTooltip>}
            {!isOpen && <ReactTooltip id='columnCollapseTooltip' place='bottom' effect='solid'>
                 <span>Show Column</span>
            </ReactTooltip>}
        </TableHeadingCell>
    )
})

ColumnHeading.propTypes = {
    text: PropTypes.string.isRequired,
    columnKey: PropTypes.string,
    data: PropTypes.array,
    isGraphHeader: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
    handleToggleColumnShow: PropTypes.func
}

export default ColumnHeading;