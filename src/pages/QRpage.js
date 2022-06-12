import React, { useState } from 'react'
import {QrReader} from 'react-qr-reader'
import '../styles/QRPage.css'
import SignIn from './SignIn';
import {useDispatch,useSelector} from 'react-redux'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { getTableNo, setTableNo } from '../redux/slices/userSlice';
import SignUp from './SignUp';
const QRpage=()=> {
    // const [data, setData] = useState('');
    const tableNo = useSelector(getTableNo)
    
    const dispatch = useDispatch()
    const [signUp,setSignUp] = useState(false)
  return (
    <>
   
    
    <div className='qr_main'>
        {tableNo ? 
        <div>
            <h1 className='qr_title'>Welcome to Fine Dine</h1>
            <div style={{display:'flex',justifyContent:'center'}}>

        <CheckCircleIcon fontSize='large'  className='success_icon' />
            </div>
        <h3 className='text-center'>QR Code scanned successfully.</h3>
        <p style={{textAlign:'center'}}>Your table number is : {tableNo} </p>
        {signUp ?
        <>
        <SignUp />
        <p >If you have already registered , <b style={{cursor:'pointer'}} onClick={()=>setSignUp(false)}>Sign In</b></p>
        </>
          : 
        <>
        <SignIn />
        <p >If you haven't registered , <b style={{cursor:'pointer'}} onClick={()=>setSignUp(true)}>Register Now</b></p>
        </>
        }
        </div>
        :
        <>
        <div className='qr_title_div'>
            <h1 className='qr_title'>Welcome to Fine Dine</h1>
            <h5 className='qr_subtitle'>Scan the QR code from any table</h5>

        </div>

        <div className='qr_reader_div'>

      <QrReader
      className='qr-reader'
        onResult={(result, error) => {
          if (!!result) {
            console.log(result?.text)
            dispatch(setTableNo(result?.text))
            // setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '50%' }}
      />
        </div>
        </>
        }
      
    
    </div>
    
    </>
  )
}

export default QRpage