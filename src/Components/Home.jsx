import React, { useContext, useEffect } from 'react'
import Beercard from './Beercard'
import beerContext from '../Context/beerContext'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Link } from 'react-router-dom'

const Home = () => {
    const {beer, loadMoreBeer, page, setPage} = useContext(beerContext)
    const loadMoreHandler = () => {
        setPage(page+1)
    }
  return (
    <div className='home'>
        <div className="container faverate">
            <p className='title'>All Beers</p>
        </div>
        <div className="container">

            <InfiniteScroll 
                    dataLength={beer.length}
                    next={loadMoreHandler}
                    hasMore={true}
                    loader={<h4 style={{textAlign:'center'}}>Loading...</h4>}
                    >
                <div className="row">
                    
                    {
                        beer.length <= 0 ? 'No Result' : beer.map((item) => <Beercard key={item.id} data={item} />)
                    }
                </div>
            </InfiniteScroll>
        </div>
    </div>
  )
}

export default Home
