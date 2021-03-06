import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from '../User/AddUser.module.css'

const AddUser = (props)=>{

    const submitHandler = (event)=>{
        event.preventDefault();
    }
    return (
        <Card className={classes.input}>
        <form onSubmit ={submitHandler}>
            <label htmlFor="username">Username</label>
            <input id = "username" type = "text"/>
            <label htmlFor="age">Age (Years)</label>
            <input id = "age" type = "number"/>
            <Button type ="submit">Add User</Button>
        </form>
        </Card>
    );
}

export default AddUser;