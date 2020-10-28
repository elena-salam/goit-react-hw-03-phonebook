import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import styled from 'styled-components';

const List = styled.ul`
width: 350px;
padding-left: 5px;
`;

const ContactList = ({contacts, onDeleteContact}) =>(
    <List>
        {contacts.map(({id, name, number}) => (
            <ContactListItem key={id} name={name} number={number} onDelete={()=>onDeleteContact(id)}/>
        ))}        
    </List>

)

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    onDeleteContact: PropTypes.func,

}

export default ContactList;