import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export function QuestionForm () {
    const classes = useStyles();

    let history = useHistory();
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');
    let [question, setQuestion] = useState('');
    let submit = (event) => {
        event.stopPropagation();
        event.preventDefault();
        (async () => {
            let response = fetch("http://localhost:3001/users", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({firstName, lastName, email})
            });
            console.log(response.body);
            history.push("/theme-parks");
        })();
    }
    return <>
        <h2>Contact Us</h2>
        <form className={classes.root} autoComplete="off" onSubmit={(event) => submit(event)}>
        <div>
            <div className="row">
                <TextField
                    required
                    value={firstName}
                    id="outlined-required"
                    label="First Name"
                    defaultValue="First Name"
                    variant="outlined"
                    onChange={event => setFirstName(event.target.value)}
                />
                <TextField
                    required
                    value={lastName}
                    id="outlined-required"
                    label="Last Name"
                    defaultValue="Last Name"
                    variant="outlined"
                    onChange={event => setLastName(event.target.value)}
                />
            </div>
            <div className="row">
                <TextField
                    required
                    value={email}
                    id="outlined-required"
                    label="Email"
                    defaultValue="Email"
                    variant="outlined"
                    onChange={event => setEmail(event.target.value)}
                />
            </div>
            <div className="row">
                <TextField
                    value={question}
                    id="outlined-multiline-static"
                    label="Your Question"
                    multiline
                    rows={6}
                    defaultValue="Your Question"
                    variant="outlined"
                    fullWidth={true}
                    onChange={event => setQuestion(event.target.value)}
                />
            </div>
        </div>
            <Button type={"submit"} className="float-left">Submit</Button>
    </form>
        </>
}