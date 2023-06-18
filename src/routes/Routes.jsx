import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Signin from '../pages/Signin'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Accessories from '../pages/Accessories'
// import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Signup from '../pages/Signup'

import Footer from '../components/Footer'

const Routes = () => {

   
    return (
        <Switch> 
        <Route path='/' exact component={Home} />
        <Route path='/Signin' exact component={Signin} />
        <Route path='/catalog/:slug' component={Product} />
        <Route path='/catalog' component={Catalog} />
        <Route path='/cart' component={Cart} />
        <Route path='/accessories' component={Accessories} />
        {/* <Route path='/contact' component={Contact} /> */}
        <Route path='/contact' component={Footer} />
        <Route path='/signup' component={Signup} />
        </Switch>
    )
}

export default Routes
