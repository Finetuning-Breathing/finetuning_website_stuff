import React, { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';

export const InstrumentComponent = () => {
    // State variables
    const [instrument, setInstrument] = useState(null);

    async function addProduct() {
        try {
            // create a new Parse Object instance
            const Product = new Parse.Object('Products');
            // define the attributes you want for your Object
            Product.set('Instrument', 'Stradivarius B-flat trumpet');
            Product.set('Brand', 'Bach');
            Product.set('Desc', 'Used instrument, but in really great condition. Fully cleaned with no damage.');
            Product.set('Price', 1029.53);
            Product.set('Rating', 4.9);
            Product.set('Tags', []);
            Product.set('InCart', false);
            // save it on Back4App Data Store
            await Product.save();
            alert('Product saved!');
        } catch (error) {
            console.log('Error saving new product: ', error);
        }
    }

    async function fetchProduct() {
        // create your Parse Query using the Person Class you've created
        const query = new Parse.Query('Products');
        // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
        query.equalTo('Instrument', 'John');
        // run the query
        const Product = await query.first();
        // access the Parse Object attributes
        console.log('product instrument type: ', Product.get('Instrument'));
        console.log('product brand: ', Product.get('Brand'));
        console.log('product id: ', Product.id);
        setInstrument(Product);
    }

    return (
        <div>
            <button onClick={addProduct}>Add Product</button>
            <button onClick={fetchProduct}>Fetch Product</button>
            {instrument !== null && (
                <div>
                    <p>{`Name: ${instrument.get('Instrument')}`}</p>
                    <p>{`Email: ${instrument.get('Brand')}`}</p>
                </div>
            )}
        </div>
    );
};