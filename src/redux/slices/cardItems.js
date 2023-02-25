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
      const find = state.cardItems.items.find(el => el.id === action.payload.id)
    }
  }
})

export const {addItem} = cardItemsSlice.actions
export const cardItemsReducer =  cardItemsSlice.reducer