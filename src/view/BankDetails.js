import React from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router';

const BankDetails = () => {
    const location = useLocation()
    // console.log(location.state);
    return (
        <>
            <Navbar title="Bank Details" />
            <div className="container">
                <p>Bank Name: { location.state.bank_name }</p>
                <p>IFSC: { location.state.ifsc }</p>
                <p>Branch: { location.state.branch }</p>
                <p>Address: { location.state.address }</p>
                <p>City: { location.state.city }</p>
                <p>District: { location.state.district }</p>
                <p>State: { location.state.state }</p>
            </div>
        </>
    )
}

export default BankDetails
