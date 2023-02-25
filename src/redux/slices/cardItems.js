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
      console.log('find: ',find)
      if (find) {
        find.quantity++
      } else {
        state.cardItems.items.push(action.payload)
      }

    },
    removeItem(state,action) {

    },
    clearCard(state) {
      state.cardItems.items = []
    },
  }
})

export const {addItem, clearCard, removeItem} = cardItemsSlice.actions
export const cardItemsReducer =  cardItemsSlice.reducer