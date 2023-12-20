import {configureStore} from '@reduxjs/toolkit'
import usersReducer from "@/lib/users/users";
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'

export const store = configureStore({
    reducer: {users: usersReducer},
})


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector