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
      // state.items.push({
      //   id: action.payload.id,
      //   title: action.payload.title,
      //   image: action.payload.image,
      //   price: action.payload.price,
      // })
      console.log('payload', action.payload)
    }
  }
})

export const {addItem} = cardItemsSlice.actions

export default cardItemsSlice.reducer