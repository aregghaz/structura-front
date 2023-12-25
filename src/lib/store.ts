import {configureStore} from '@reduxjs/toolkit'
import usersReducer from "@/lib/users/users";
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import DocumentReducer from "@/lib/document/document";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        documents: DocumentReducer
    },
})


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector