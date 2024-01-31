import React, { useState, useEffect } from "react";
import BeerContext from "./beerContext";

const BASE_URL = "https://api.punkapi.com/v2" 

const BeerState = (props) => {
    const [page, setPage] = useState(1)
    const [totalItem, setTotalItem] = useState(20)

    const [beer, setBeer] = useState([])
    const [faverateBeer, setFaverateBeer] = useState([])
    const [faverate, setFaverate] = useState([])

    useEffect(() => {
        getBeerWithPage()
        if(localStorage.getItem('faverateList')){
        const fav = localStorage.getItem('faverateList').split(',').map(Number)
        setFaverate(fav)
        }
    }, [])

    const getBeerWithPage = async() => {
        try{
        const response = await fetch(`${BASE_URL}/beers?page=1&per_page=${totalItem}`)
        const data = await response.json()
        setBeer(data)
        }
        catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadMoreBeer()
    }, [page])

    const loadMoreBeer = async() => {
        try{
            const response = await fetch(`${BASE_URL}/beers?page=${page}&per_page=${totalItem}`)
            const moreBeer = await response.json()
            setBeer(beer.concat(moreBeer))
        }
        catch(error) {
            console.log(error)
        }
    }

    const searchBeerWithName = async(name) => {
        if(name.length <= 0) getBeerWithPage()
        else{
        try{
            const response = await fetch(`${BASE_URL}/beers?beer_name=${name}`)
            const data = await response.json()
            setBeer(data)
        }
        catch(error) {
            console.log(error)
        }
        }
    }

    const setAsFaverateToggle = (id) => {
        if(faverate.includes(id)){
            setFaverate(faverate.filter((item) => item !== id))
            updateLocalStorage()
        }
        else{
            faverate.push(id)
            updateLocalStorage()
        }
    }

    useEffect(() => {
        updateLocalStorage()
    }, [faverate])

    const updateLocalStorage = () => {
        localStorage.setItem('faverateList', faverate)
    }

    const getBeerById = async(id) => {
        try{
            const response = await fetch(`${BASE_URL}/beers/${id}`)
            const beer = await response.json()
            setFaverateBeer(faverateBeer.concat(beer))
        }
        catch(error){
            console.log(error)
        }
    }

    const getFaverateBeer = async() => {
        const ids = faverate.join('|')
        try{
            const response = await fetch(`${BASE_URL}/beers?ids=${ids}`)
            const data = await response.json()
            setFaverateBeer(data)
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <BeerContext.Provider value={{beer, faverate, searchBeerWithName, setAsFaverateToggle, loadMoreBeer, page, setPage, getBeerById, faverateBeer, getFaverateBeer}}>
            {props.children}
        </BeerContext.Provider>
    )
}

export default BeerState