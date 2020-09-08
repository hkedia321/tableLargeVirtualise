import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const DataCellStyled = styled.div`
    position: relative;
    padding: 20px;
`;

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
    padding-right: 10px;
    width: 20px;

`;

const TextIdStyled = styled.span`
    width: calc(100% - 25px);
    display: inline-block;

`;

const DataCellCampaignId = React.memo(function(props) {
    const { text, isOpen } = props;
    return <DataCellStyled className="dataCellCampaignId" style={props.style} data-testid="dataCellCampaignId">
        {isOpen && <>
        <FontAwesomeIconStyled size={'lg'} color='#3F51B5' icon={faAngleRight} />
            <TextIdStyled>{text}</TextIdStyled>
            </>}
        </DataCellStyled>
})

export default DataCellCampaignId;

DataCellCampaignId.propTypes = {
    text: PropTypes.string,
    isOpen: PropTypes.bool
}