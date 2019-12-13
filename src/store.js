import storage from 'redux-persist/es/storage'
import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { createFilter   } from 'redux-persist-transform-filter';
import { persistReducer, persistStore } from 'redux-persist'
import { routerMiddleware } from 'connected-react-router'
import createApiMiddleware from './middleware';
import createRootReducer from './reducers'

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
    const persistedFilter = createFilter(
        'auth', ['access', 'refresh']);
    const reducer = persistReducer(
        {
            key: 'polls',
            storage: storage,
            whitelist: ['auth'],
            transforms: [persistedFilter]
        },
        createRootReducer(history))
    const store = createStore(
        reducer, // root reducer with router state
        {},
        compose(
            applyMiddleware(
                createApiMiddleware,
                routerMiddleware(history), // for dispatching history actions
                // ... other middlewares ...
            ),
        ),
    )
    persistStore(store)

    return store
}
