import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import AppComponent from './app/App';

export default function App() {

    return(

        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <AppComponent />
            </PersistGate>
        </Provider>

    )

}