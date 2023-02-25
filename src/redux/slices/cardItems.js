import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  cardItems: {
    items: [],
  },
}

const cardItemsSlice = createSlice({
  name: 'cardItems',
  initialState,
  reducers: {
    addItem(state,action) {
      const find = state.cardItems.items.find(el => el.id === action.payload.id)
      if (find) {
        find.quantity++
        //TODO
        //тут ошибка, при добавлении 9 рубашек не округляет до 2х знаков
        find.amount = find.price*find.quantity.toFixed(2)
      } else {
        const amount = action.payload.price
        state.cardItems.items.push({...action.payload, amount})
      }

    },
    removeItem(state,action) {
      const find = state.cardItems.items.find(el => el.id === action.payload.id)
      if (find && find.quantity>1) {
        find.quantity--
        find.amount = find.price*find.quantity.toFixed(2)
      } else {
        state.cardItems.items = state.cardItems.items.filter(el => el.id !== action.payload.id)
      }
    },
    clearCard(state) {
      state.cardItems.items = []
    },
  }
})

export const {addItem, clearCard, removeItem} = cardItemsSlice.actions
export const cardItemsReducer =  cardItemsSlice.reducer