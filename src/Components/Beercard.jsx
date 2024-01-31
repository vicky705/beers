import React, { useContext, useEffect, useState } from 'react'
import beerContext from '../Context/beerContext'

const Beercard = ({data}) => {
    const [isFaverate, setIsFaverate] = useState(false)
    const {faverate, setAsFaverateToggle} = useContext(beerContext)
    useEffect(() => {
        setIsFaverate(faverate.includes(data.id))
    }, [faverate])

    const handlerToggle = () => {
        setAsFaverateToggle(data.id)
        setIsFaverate(!isFaverate)
    }
  return (
    <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
        <div className='beer-card mt-3'>
            <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 col-12 img-dev">
                    <img className='image' src={data.image_url} />
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                    <div className="row">
                        <p className='name'>{data.name}</p>
                        <p className='description'>{data.description.substring(0, 300)}{data.description.length > 300 ? '...' : ''}</p>
                        <i className={`fa-regular fa-star not-fav ${isFaverate ? 'd-none' : ''}`} title='Mark as faverate.' onClick={() => handlerToggle(data.id)}></i>
                        <i className={`fa-solid fa-star fav ${isFaverate ? '' : 'd-none'}`} title='Faverate.' onClick={() => handlerToggle()}></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Beercard
