import React, { StrictMode } from 'react';
import Header from './Header/header';
import Form from "./Form/form";
import List from './List/List';
import { store } from './Template/store'
import { Provider } from 'react-redux'

import {Color_Provider} from './context/change-theme';


import "./style/style.scss"

function App() {
  return (

    <Color_Provider>
        <Provider store={store}>
            <StrictMode>
                <Header/>
                    <div className="container-icon" >
                        <Form/>
                        <List/>
                    </div>
            </StrictMode>
        </Provider>
    </Color_Provider>
  )
}

export default App
