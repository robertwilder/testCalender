import React from 'react'
import {Link} from "react-router-dom"

export default function DayNav() {
    return (
        <div>
            <Link to='/TimeComponents/Nine'> 9:00 </Link>
            <Link to='/TimeComponents/NineThirty'> 9:30 </Link>
            <Link to='/TimeComponents/Ten'> 10:00 </Link>
            <Link to='/TimeComponents/TenThirty'> 10:30 </Link>
            <Link to='/TimeComponents/Eleven'> 11:00 </Link>
            <Link to='/TimeComponents/ElevenThirty'> 11:30 </Link>
            <Link to='/TimeComponents/Twelve'> 12:00 </Link>
            <Link to='/TimeComponents/TwelveThirty'> 12:30 </Link>
            <Link to='/TimeComponents/One'> 13:00 </Link>
            <Link to='/TimeComponents/OneThirty'> 13:30 </Link>
            <Link to='/TimeComponents/Two'> 14:00 </Link>
            <Link to='/TimeComponents/TwoThirty'> 14:30 </Link>
            <Link to='/TimeComponents/Three'> 15:00 </Link>
            <Link to='/TimeComponents/ThreeThirty'> 15:30 </Link>
            <Link to='/TimeComponents/Four'> 16:00 </Link>
            <Link to='/TimeComponents/FourThirty'> 16:30 </Link>
            <Link to='/TimeComponents/Five'> 17:00 </Link>
        </div>
    )
}