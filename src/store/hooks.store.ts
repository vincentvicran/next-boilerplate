import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector
} from 'react-redux'
import {store} from './reducers.store'
import type {TypedUseSelectorHook} from 'react-redux'


type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useDispatch = () => useReduxDispatch<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
