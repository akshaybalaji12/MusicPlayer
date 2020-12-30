import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import AppComponent from './app/App';

export default function App() {

    return(

        <Provider store={store}>
            <AppComponent />
        </Provider>

    )

}