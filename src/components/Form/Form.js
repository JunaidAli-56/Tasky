import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className="container  from-con">
                <div className="row m-0">
                    <div className="col-12">
                        <TextField
                            id="outlined-multiline-static"
                            label="Send Message"
                            placeholder="Type here..."
                            multiline
                            rows={4}
                            defaultValue=""
                        />
                    </div>
                    <div className="col-6">
                        <TextField
                            id="outlined-name-input"
                            label="First name"
                            type="text"
                            autoComplete="current-password"
                        />
                    </div>
                    <div className="col-6">
                        <TextField
                            id="outlined-name-input"
                            label="Last name"
                            type="text"
                            autoComplete="current-password"
                        />
                    </div>
                    <div className="col-6">
                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            type="text"
                            autoComplete="current-password"
                        />
                    </div>
                    <div className="col-6">
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                    </div>
                    <div className="col">
                        <TextField
                            id="outlined-text-input"
                            label="Enter subject"
                            type="text"
                            autoComplete="current-password"
                        />
                    </div>
                </div>
                <Button variant="outlined" size="large" className='big-btn'>
                    Send
                </Button>
            </div>
            <div>

            </div>
            {/* <div>
                <TextField
                    required
                    id="filled-required"
                    label="Required"
                    defaultValue="Hello World"
                    variant="filled"
                />
            </div> */}
        </Box>
    );
}