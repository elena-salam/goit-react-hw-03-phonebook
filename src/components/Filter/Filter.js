import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilterBox= styled.div`
margin-bottom: 15px;
text-align: start;
`;

const FilterLabel = styled.label`
/* margin-right: 25px; */
font-size: 18px;
text-align: left;
`;

const FilterInput = styled.input`
margin-left: 7px;
border: 2px solid #797d7f;
border-radius: 3px;
height: 20px;

`;


function Filter({value, onChangeFilter}){
    return(
        <FilterBox>
            <FilterLabel>
            Search contacts by name
            <FilterInput type="text" value={value}
            onChange={e=>onChangeFilter(e.target.value)}/>
            </FilterLabel>
        </FilterBox>
    );
}

Filter.propTypes={
    value: PropTypes.string,
    onChangeFilter: PropTypes.func,
}

export default Filter;