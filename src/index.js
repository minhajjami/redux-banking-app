import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import {createStore}  from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import {bankingReducers} from './reducers/bankingReducers'
import {Provider}  from 'react-redux'

const store = createStore(bankingReducers)

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>
,document.getElementById('root'))