export const initialState = {
    basket: [
        {
            id:'103',
            title: "MSI GeForce RTX 3090 Gaming X Trio 24G I 24GB GDDR6X I 384-bit PCI Express Gen 4 Gaming Graphic Card",
            price: 2_14_999,
            rating: 5,
            image: "https://m.media-amazon.com/images/I/81f6GdD799L._SX450_.jpg"
        },
        {
            id:'1030',
            title: "MSI GeForce RTX 3090 Gaming X Trio 24G I 24GB GDDR6X I 384-bit PCI Express Gen 4 Gaming Graphic Card",
            price: 2_14_999,
            rating: 5,
            image: "https://m.media-amazon.com/images/I/81f6GdD799L._SX450_.jpg"
        }
    ],
    user: null,
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "ADD_TO_BASKET":
            // ADD to basket
            return { 
                ...state,
                basket: [...state.basket, action.item],
            }; 
            
        case "REMOVE_FROM_BASKET":
            // REMOVE FROM BASKET

            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0){
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id ${action.id})`
                )
            }
            return { ...state, basket: newBasket };
            

        default:
            return state;
    }
}

export default reducer;