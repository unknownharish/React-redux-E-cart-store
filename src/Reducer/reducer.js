import img1 from '../myComponents/images/drag.jpg';
import img2 from '../myComponents/images/eggs.jpg';
import img3 from '../myComponents/images/peas.jpg';
import img4 from '../myComponents/images/frontend.jpg';


const initialState = {

    cart: [],     //id title desc image qty price
    current: null,
    products: [{
        id: 1,
        name: 'Product 1',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum iste sequi hic, facilis suscipit a! Natus eligendi consequatur ex.',
        image: img1,
        price: 20,
        qty: 1
    },
    {
        id: 2,
        name: 'Product 2',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum iste sequi hic, facilis suscipit a! Natus eligendi consequatur ex.',
        image: img2,
        price: 5,
        qty: 1
    },
    {
        id: 3,
        name: 'Product 3',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum iste sequi hic, facilis suscipit a! Natus eligendi consequatur ex.',
        image: img3,
        price: 7,
        qty: 1
    },
    {
        id: 4,
        name: 'Product 4',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam earum iste sequi hic, facilis suscipit a! Natus eligendi consequatur ex.',
        image: img4,
        price: 20,
        qty: 1
    }], //id title desc image qty price

}



const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'Add_to_cart':
            //adding to cart[]    
            // check if item already present or not in cart
            const cart_ = state.products.find(item => item.id === action.payload.id);
            const incart = state.cart.find(item => item.id === action.payload.id ? true : false)
            return {

                ...state,
                cart: incart ?
                    state.cart.map(item => item.id === action.payload.id ?
                        { ...item, qty: item.qty + 1 } : item) :
                    [...state.cart, { ...cart_, qty: 1 }],
            }

        case 'Remove_from_cart':


            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)

               
            }


        case 'Adjust_qty':

            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ?
                    { ...item, qty: +action.payload.qty } : item)
            }

        case 'Load_Current_Item':

            return {
                ...state,
                current: action.payload
            }

        default:
            return state;
    }


}

export default reducer;