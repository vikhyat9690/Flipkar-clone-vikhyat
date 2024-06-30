

import { useEffect } from 'react';



//Components
import NavBar from './Navbar';
import Banner from  './Banner';
import {Box,styled} from "@mui/material";

import {getProducts} from '../../redux/actions/productsActions';
import {useDispatch} from 'react-redux';
 
const Component =styled(Box)`
padding:10px 10px;
background-color: #ece8e8;`


const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])
    return (
        <>
            <NavBar/>
            <Component> 
                <Banner/>
            </Component>
           
        </>
        
    )
}

export default Home;