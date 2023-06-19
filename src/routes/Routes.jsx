import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Signin from '../pages/Signin'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Accessories from '../pages/Accessories'

import Home from '../pages/Home'
import Signup from '../pages/Signup'

import Footer from '../components/Footer'
import ForgetPassword from '../pages/ForgetPassword'
import Profile from '../pages/Profile'


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
        <Route path='/forgetpassword' component={ForgetPassword}/>

        <Route path='/profile' component={Profile}/>
        
        </Switch>
    )
}

export default Routes
