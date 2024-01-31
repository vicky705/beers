import React, { useContext, useEffect, useState } from 'react'
import beerContext from '../Context/beerContext'
import Beercard from './Beercard'

const Faveratebeer = () => {
    const {faverateBeer, getBeerById, faverate, getFaverateBeer} = useContext(beerContext)
    
    useEffect(() => {
        getFaverateBeer()
    }, [])

    return (
        <div className='faverate-page'>
            <div className="container">
                <p className='title'>Favourite Beer</p>
            </div>
            <div className="container fav-beer">
                <div className="row">
                    {
                        faverateBeer.length <= 0 ? 'Empty list' : faverateBeer.map((item) => {
                            return (
                                <Beercard key={item.id} data={item}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Faveratebeer
