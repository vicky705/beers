import React, { useContext } from 'react'
import beerContext from '../Context/beerContext'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const {searchBeerWithName} = useContext(beerContext)
    const location = useLocation()
    
  return (
    <div className='nav-bar'>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <div className="logo">
                        <p className='title'>Beer's</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-6 manu-parent">
                    <div className="menu">
                        <ul>
                            <li>
                                <Link to={'/'} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                            </li>
                            <li>
                                <Link to={'/favourite'} className={location.pathname === '/favourite' ? 'active' : ''}>Favourite</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 search">
                    <input type='text' placeholder='Search' onChange={e => searchBeerWithName(e.target.value)} disabled={location.pathname === '/favourite'}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
