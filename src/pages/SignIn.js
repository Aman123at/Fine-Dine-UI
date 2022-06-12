
import React, { useState } from 'react'

import '../styles/SignIn.css'
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Snackbar } from '@mui/material';
import {useDispatch,useSelector} from 'react-redux'
import MuiAlert from '@mui/material/Alert';
import { getTableNo, loginUser } from '../redux/slices/userSlice';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



// loginUser
function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const tableNo = useSelector(getTableNo)
    
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const [openSnk,setOpenSnk] = useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(email,password)
        if(!email || !password){
            setOpenSnk(true)
        }else{

            dispatch(loginUser({
                email,
                password,
                tableNo

            }))


            navigate("/")
        }
        


    }
   




 
  return (
    <>

<Snackbar open={openSnk} autoHideDuration={6000} onClose={()=>setOpenSnk(false)}>
        <Alert onClose={()=>setOpenSnk(false)} severity="error" sx={{ width: '100%' }}>
          All fields are required.
        </Alert>
      </Snackbar>
    
    <div className='signin_box'>

<Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
      
      <Button disabled={!email || !password} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </>
  )
}

export default SignIn