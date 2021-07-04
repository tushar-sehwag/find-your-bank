import { CircularProgress } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import BankTable from '../components/BankTable'
import Dropdown from '../components/Dropdown'
import Navbar from '../components/Navbar'
import Pagination from '../components/Pagination'
import Searchbar from '../components/Searchbar'
import Footer from '../components/Footer'

const cities = [
    { key: "MUMBAI", name: "Mumbai" },
    { key: "DELHI", name: "Delhi" },
    { key: "CHENNAI", name: "Chennai" },
    { key: "LUCKNOW", name: "Lucknow" },
    { key: "HYDERABAD", name: "Hyderabad" },
]

const categories = [
    { key: "bank_name", name: "Bank Name" },
    { key: "ifsc", name: "IFSC" },
    { key: "bank_id", name: "Bank ID" },
    { key: "address", name: "Address" },
]

const AllBanks = () => {
    const [allBanks, setAllBanks] = useState(null)
    const [smallerBanks, setSmallerBanks] = useState(null)
    const [city, setCity] = useState("MUMBAI")
    const [category, setCategory] = useState("IFSC")
    const [query, setQuery] = useState("")
    const [loading, setLoading] = useState(false)
    const [pageInfo, setPageInfo] = useState({
        total: 0,
        perPage: 10,
        currPage: 1,
        currEntries: []
    })

    useEffect(() => {
        if(smallerBanks){
            computePageInfo(smallerBanks)
        }
    }, [smallerBanks])

    useEffect(() => {
        if(city){
            setLoading(true)
            getAllBanksInCity()
        }
    }, [city])

    useEffect(() => {
        console.log(query);
        if(query !== ""){
            const newArray = allBanks.filter(item => item[category].includes(query))
            setSmallerBanks(newArray)
        }
        else{
            computePageInfo(allBanks)
        }
    }, [query])

    // API call
    const getAllBanksInCity = () => {
        axios.get('https://vast-shore-74260.herokuapp.com/banks?city='+city)
        .then(res => {
            setAllBanks(res.data)
            setSmallerBanks(res.data)
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false)
        })
    }

    const computePageInfo = data => {
        if(data){
            let l = data.length
            let d = l/10
            if(d - parseInt(d) !== 0){
                d = d+1
            }
            setPageInfo({
                total: parseInt(d),
                perPage: 10, 
                currPage: 1,
                currEntries: data.slice(0, 10)
            })
        }
    }

    // Pagination functions
    const handleClickPrev = () => {
        setPageInfo({
            ...pageInfo,
            currPage: pageInfo.currPage - 1,
            currEntries: smallerBanks.slice(((pageInfo.currPage-1)*10)-10, ((pageInfo.currPage-1)*10))
        })
    }

    const handleClickNext = () => {
        setPageInfo({
            ...pageInfo,
            currPage: pageInfo.currPage + 1,
            currEntries: smallerBanks.slice(((pageInfo.currPage+1)*10)-10, ((pageInfo.currPage+1)*10))
        })
    }

    return (
        <>
            <Navbar title="All Banks" />
            <div className="container">
                <Dropdown initialValue="MUMBAI" label="City" items={cities} changeItem={item => setCity(item)} />
                <Dropdown initialValue="ifsc" label="Search Category" items={categories} changeItem={item => setCategory(item)} />
                <Searchbar label="Search" changeSearch={value => setQuery(value)} />
                {
                    loading ? 
                    <div className="loading">
                        <CircularProgress color="primary" />
                    </div> : 
                    <>
                        <BankTable data={pageInfo.currEntries} />
                        <Pagination pageInfo={pageInfo} clickPrev={handleClickPrev} clickNext={handleClickNext}/>
                    </>
                }
            </div>
            <Footer title="© 2021. Find Your Bank" />
        </>
    )
}

export default AllBanks
