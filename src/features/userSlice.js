import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState : {
    user: null,
    basket: [],
  },
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
      
      let newBasket = [...state.basket];
      var x;
      
      for(let i=0; i<newBasket.length;i++){
        if( newBasket[i].id === action.payload.id){
          x = i;
        }
      }

      // console.log("FOR EACH", x, action.payload);

      if(x >= 0) {
          newBasket.splice(x, 1);        
        }else{
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket`
          )
        }

      state.basket = newBasket;
    },
    EMPTY_BASKET: (state) => {
      state.basket = [];
    }
  },
});

export const { LOGIN, LOGOUT, ADD_TO_CART, REMOVE_FROM_CART, EMPTY_BASKET } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export const selectBasket = (state) => state.user.basket;

export default userSlice.reducer;
