import React, {Component} from 'react';
import PropTypes from'prop-types';
import styled from 'styled-components';


const PhonebookForm = styled.form`
margin-bottom: 20px
`;

const PhoneInput = styled.input`
display: block;
/* margin: 0 auto; */
/* width: 95%; */
height: 20px;
/* margin-bottom: 10px; */
border-radius: 3px;
border: 2px solid #797d7f;
`;

const PhoneButton = styled.button`
padding: 5px;
background-color:#2E71BB;
border-radius: 3px;
border: none;
color: #fff;
font-weight: 700;
font-size: 14px;
cursor: pointer;
outline: none;
`;


export default class ContactForm extends Component{
    static propTypes={
        onAddContact: PropTypes.func,
    }

    state = {
        name: '',
        number: '',
    }

    handleSubmit = e =>{
        e.preventDefault();
        
        this.props.onAddContact({
            name: this.state.name,
            number: this.state.number,
        });
        this.setState({
            name:'',
            number: '',
        });
    }

    handleInputChange = e =>{
        const {name, value} = e.target;
        
        this.setState({
            [name]: value,
        })
       
    }

    render(){
        const {name, number} = this.state;
        return(
            <PhonebookForm onSubmit={this.handleSubmit}>
                <label>
                    <h3>Name</h3>
                        <PhoneInput type="text" value={name} 
                        onChange={this.handleInputChange} name="name" required/>
                </label>
                <label>
                    <h3>Number</h3>
                        <PhoneInput type="text" value={number} 
                        onChange={this.handleInputChange} name="number" required/>
                </label>
                    <br/>
                    <PhoneButton type="submit">Add contact</PhoneButton>
                
            </PhonebookForm>
        );
    }
}
