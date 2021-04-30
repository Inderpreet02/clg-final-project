import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: null,
  basket: [],
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    LOGIN: (state, action) => {
      state.user = action.payload;
    },
    LOGOUT: (state) => {
      state.user = null;
    },
    ADD_TO_CART: (state, action) => {
      state.basket = [...state.basket, action.payload]
    },
    REMOVE_FROM_CART: (state, action) => {
      const index = state.basket.findIndex(
        (item) => item.id === action.payload.id.item.id
      );

      console.log("FOR LOOP");
      
      let newBasket = [...state.basket];
      var x;
      
      for(let i=0; i<newBasket.length;i++){
        if( newBasket[i].item.id === action.payload.id.item.id){
          x = i;
        }
      }

      console.log("FOR EACH")

      if(x >= 0) {
          newBasket.splice(x, 1);
          window.alert("An Item is removed to the Basket!!!!");
        
        }else{
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket`
          )
        }

      state.basket = newBasket;
    }
  },
});

export const { LOGIN, LOGOUT, ADD_TO_BASKET, REMOVE_FROM_BASKET, EMPTY_BASKET } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
