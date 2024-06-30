
import {navData} from "../../constants/data";
import {Box , Typography, styled} from '@mui/material';

const Component = styled(Box)`
display : flex;
margin :55px 60px 0 60px;
justify-content :space-between;`

const Container = styled(Box)`
padding: 12px 1px;
text-align: center;
`
const Text = styled(Typography)`
font-size:14px;
font-weight:bold;
font-family:inherit;`

const NavBar = () => {
    return(
       <Component>
          {
            navData.map(data =>(
                <Container>
                    <img src ={data.url} alt="nav" styled = {{width :64 }}/>
                    <Text>{data.text}</Text>
                </Container>
                    
             ) )
           }
       </Component>
    )
    
}

export default NavBar;