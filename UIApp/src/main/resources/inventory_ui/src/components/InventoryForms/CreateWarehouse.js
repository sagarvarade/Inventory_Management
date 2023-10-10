
import React, { useState,useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const createWareHouse = () =>{
    //const form = useRef();
    //form.current.validateAll();
    const checkBtn = useRef();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [country, setCountry] = useState("");
    const [title, setTitle] = useState("");

    const onChangeFirstName = (e) => {
        const firstName = e.target.value;
        setFirstName(firstName);
    };
    
    const onChangeLastName = (e) => {
        const lastName = e.target.value;
        setLastName(lastName);
    };

    const onChangeCountry = (e) => {
        const country = e.target.value;
        setCountry(country);
    };

    const onChangeTitle = (e) => {
        const title = e.target.value;
        setTitle(title);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submit is called")    
    };
   

    return(
        <div className='App'>
        <h3>Create Warehouse</h3>
        <Form onSubmit={handleSubmit}>
          <div>
            <Input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={firstName}
              onChange={onChangeFirstName}
            />
          </div>
          <div>
            <Input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={lastName}
              onChange={onChangeLastName}
            />
          </div>
          <div>
            <Input
              type='text'
              name='country'
              placeholder='Country'
              value={country}
              onChange={onChangeCountry}
            />
          </div>
          <div>
            <Input
              type='text'
              name='title'
              placeholder='Title'
              value={title}
              onChange={onChangeTitle}
            />
          </div>
          <CheckButton style={{ display: "none" }} ref={checkBtn} />

          <button class='btn btn-success'>Submit</button>
        </Form>
      </div>
    )

}

export default createWareHouse