export const initialState = {
    basket: [],
    user: null,
};



// For Cart Total
// export const getBasketTotal = (basket) =>
// basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    
    switch(action.type) {
        case "SET_USER": 
            return {
                ...state,
                user: action.user
            }
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