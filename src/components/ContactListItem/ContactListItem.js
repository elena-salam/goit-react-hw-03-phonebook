import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContactItem = styled.li`
margin-bottom: 10px;
display: flex;
justify-content: space-between;
/* align-items: center; */
text-align: center;
font-size: 18px;
font-weight: 700;
`;

const ContactButton = styled.button`
padding: 5px 5px;
background-color: #2E71BB;
border-radius: 3px;
border: none;
color: #fff;
font-weight: 700;
cursor: pointer;
outline: none;
`;


const ContactListItem =({name, number, onDelete}) =>(
    
        <ContactItem>
            <span>{name}: {number}</span>
            <ContactButton type="button" onClick={onDelete}>
                Delete
            </ContactButton>
        </ContactItem>
    
)
ContactListItem.propTypes={
    name: PropTypes.string,
    number: PropTypes.string,
    onDelete: PropTypes.func,
}

export default ContactListItem;