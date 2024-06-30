
import { useState, useContext } from 'react';

import {Dialog,Box,TextField,Typography,Button,styled} from '@mui/material';

import { authenticatesSignup ,authenticatesLogin} from '../../service/api.js';

import { DataContext } from '../../context/DataProvider';


const Component = styled(Box)`
height:100vh;
width:100vh;
`;

const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding : 20px 35px;
flex : 1;
& > div,& > button ,& >p{
margin-top:15px
}`


const Image = styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)center 85% no-repeat;
height:81.5%;
width:28%;
padding :45px 35px;
& > p, & > h5 {
color: white;
font-weight:600;
}
`
const LoginButton = styled(Button)`
text-transform:none;
background : #fb641b;
color :#fff;
height :48px;
border-radius :2px;
`
const RequestOTP = styled(Button)`
text-transform:none;
background : #fff;
color :#2874f0;
height :48px;
border-radius :2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%)
`

const Text = styled(Typography)`
font-size:12px;
color:#878787;`

const CreateAccount = styled(Typography)`
    font-size:14px;
    text-align:center;
    color:#2874f0;
    font-weight:600;
    cursor:pointer`

const Error = styled(Typography)`
    font-size:12px;
    color:#ff6161;
    line-height:0;
    margin-top:10px;
    font-weight:600;`

const accountIntitialValues = {
    login:{
        view:'login',
        heading:"Login",
        subHeading:"Get access to your Orders,Wishlist and Recommendations"
    },
    signup:{
        view:'signup',
        heading:"Looks like you're new here!",
        subHeading:"Sign up with your mobile to get started"
    }
}

const signupIntitialValues = {
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:'',
   
}

const loginIntitialValues = {
    username:'',
    password:''
}

const LoginDialog = ({open , setOpen}) =>{

    const [account,toggleAccount] = useState(accountIntitialValues.login);

    const [signup,setSignup] = useState(signupIntitialValues);

    const [login,setLogin]= useState(loginIntitialValues)

    const {setAccount} = useContext(DataContext);

    const [error,setError] = useState(false);


    const handleClose = () =>{
        setOpen(false);
        toggleAccount(accountIntitialValues.login);
        setError(false);
    }

    const toggleSignup = () =>{
        toggleAccount(accountIntitialValues.signup)
    }

   const OnInputChange = (e) =>{
    setSignup({...signup, [e.target.name]: e.target.value})
   

   }

   const signupUser  = async() =>{
   let response = await authenticatesSignup(signup);
    if(!response) return;
    handleClose();
    setAccount(signup.firstname);

   }
   const onValueChange = (e) => {
    setLogin({...login,[e.target.name]:e.target.value})

   }

   const loginUser = async() =>{
  let response =  await authenticatesLogin(login);
  console.log(response);
  if(response.status === 200){
    setAccount(response.data.data.firstname);
    handleClose();
  }else{
    setError(true);

  }
   }

    return (
       <Dialog open = {open} onClose={handleClose} PaperProps = {{sx :{maxwidth:'unset'}}}>
        <Component>
            <Box style = {{display :'flex' ,height :'100%'}}>
            <Image>
                <Typography variant='h5' >{account.heading}</Typography>
                <Typography style={{marginTop :20}}>{account.subHeading}</Typography>
            </Image>
            {
                account.view === 'login'?
            <Wrapper>
            <TextField  label="Username" variant="standard" onChange={(e) =>onValueChange(e)} name='username'/>
            {error && <Error>Please enter valid username or password</Error> }
            <TextField  label="Enter Password" variant="standard" onChange={(e) =>onValueChange(e)} name='password' />
            <Text>By continuing,you agree to Flipkart's Team of Use and Privacy Policy.</Text>
            <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
            <Typography style={{textAlign :'center'}}>OR</Typography>
            <RequestOTP>Requst OTP</RequestOTP>
            <CreateAccount onClick={()=> toggleSignup()}>New to Flipkart?Create an account</CreateAccount>
            </Wrapper>
            :
            <Wrapper>
            <TextField  label="Enter Firstname" variant="standard" name='firstname' onChange={(e)=>OnInputChange(e)} />
            <TextField  label="Enter Lastname" variant="standard"  name='lastname' onChange={(e)=>OnInputChange(e)} />
            <TextField  label="Enter Username" variant="standard"  name='username' onChange={(e)=>OnInputChange(e)} />
            <TextField  label="Enter Email" variant="standard"   name='email' onChange={(e)=>OnInputChange(e)} />
            <TextField  label="Enter Password" variant="standard" name='password' onChange={(e)=>OnInputChange(e)} />
            <TextField  label="Enter Phone" variant="standard" name='phone' onChange={(e)=>OnInputChange(e)} />
            <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
        

         
         
            </Wrapper>
}
            </Box>
        </Component>

       </Dialog>
    )
}

export default LoginDialog;