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
      state.cardItems.items.push(action.payload)
      // const find = state.cardItems.items.find(el => el.id === action.payload.id)
    },
    clearCard(state,action) {
      state.cardItems.items = []
    },
  }
})

export const {addItem, clearCard} = cardItemsSlice.actions
export const cardItemsReducer =  cardItemsSlice.reducer