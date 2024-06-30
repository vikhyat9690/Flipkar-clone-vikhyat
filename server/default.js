

import {products} from './constants/data.js';
import Product  from './model/product-schema.js';

const DefaultData = async() => {
    try{
      
        await Product.insertMany(products);
         console.log('Default data inserted successfully');
    }catch(error){
        console.log('Error whiel inserting default data',error.mesage);
    }

}

export default DefaultData;