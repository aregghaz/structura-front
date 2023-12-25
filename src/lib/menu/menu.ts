import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'

// Define a type for the slice state
export interface menuState {
    menu: Array<{ id: number, count: number }>,
    loading: boolean,

}

// Define the initial state using that type
const initialState: menuState = {
    menu: [],
    loading: false,
}

export const MenuSlice = createSlice({
    name: 'menu',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setMenu: (state, action: PayloadAction<string>): void => {
            state.menu = action.payload
        },
        setLoading: (state, action: PayloadAction<boolean>): void => {
            state.loading = action.payload
        },
    }
})

export const {setMenu, setLoading} = MenuSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getMenu = (state: RootState) => state.menus.menu
export const getLoading = (state: RootState) => state.menus.loading


export default MenuSlice.reducer