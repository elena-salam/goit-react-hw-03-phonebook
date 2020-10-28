import React, {Component} from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import Layout from './Layout/Layout';
import {v4 as uuid } from 'uuid';
import styled from 'styled-components';


const Title = styled.h2`
margin-bottom: 10px;
`;

export default class App extends Component {
    state = {
        contacts: [],
        filter: '',
       
    }

    componentDidMount(){
        console.log('Contacts componentDidMount');
        const persistedContacts = localStorage.getItem('contacts');
        if(persistedContacts !==null){
            // console.log(persistedContacts);
            // console.log(JSON.parse(persistedContacts));
            this.setState({
                contacts: JSON.parse(persistedContacts),
            })
        }
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log('Contacts componentDidUpdate');
        // console.log('prevState: ', prevState);
        // console.log('thisState: ', this.state);
        if(prevState.contacts !== this.state.contacts){
            localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
        }
    }
    handleContactAdd = contact =>{
          const {contacts} = this.state;
          const isIncludes = contacts.some(item =>item.name ===contact.name);
          if(isIncludes){
              alert (`${contact.name} is already in contacts`);
              return;
          }
          const newContactData ={
              id: uuid(),
              name:contact.name,
              number:contact.number,
          }
          this.setState(prevState =>({
              contacts: [...prevState.contacts, newContactData],
          }));
        }  

        handleInputChange = e =>{
            const {name, value} = e.target;
            this.setState({[name]: value,})
        }
        handleChangeFilter = filter =>{
            this.setState({filter});
        }
        handleDeleteContact = contactId =>
        this.setState(prevState=>({
            contacts:prevState.contacts.filter(contact => contact.id !==contactId),
        }));
        
        filterContacts=()=>{
            const {contacts, filter} = this.state;
            return contacts.filter(contact =>
                contact.name.toLowerCase().includes(filter.toLowerCase()),
                );
        };


    render(){
        const {filter} = this.state;
        const contacts = this.filterContacts();

        return(
            <Layout>
                <Title>Phonebook</Title>
                <ContactForm onAddContact={this.handleContactAdd}/>
                <Title>Contacts</Title>
                <Filter value={filter} onChangeFilter={this.handleChangeFilter}/>
                {/* {contacts.length>0 &&  */}
                <ContactList contacts={contacts} onDeleteContact={this.handleDeleteContact}/>
            </Layout>
        )
    } 
}
