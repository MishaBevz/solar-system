import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './style.scss'

import Header from './Header'

import Footer from './Footer'

import Orbits2d from './Orbits2d'

import Orbits3d from './Orbits3d'

import Error from './Error'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(                 
            <BrowserRouter> 
                <div>  
                    <Header/>    
                    <Switch>     
                        <Route path="/" component={Orbits2d} exact/>
                        <Route path="/3d" component={Orbits3d}/>
                        <Route component={Error}/>
                    </Switch> 
                    <Footer/>
                </div>      
            </BrowserRouter>  
                           
                
               
        )
    }
}