import React from 'react'
import {Link} from "react-router-dom"
import '../components/styleComponents/DayNav.css'

export default function DayNav() {
    return (
        <div className="Box">
            <div className="links1">
            <Link to='/Nine'> 9:00 </Link>
            </div>
            <div className="links">
            <Link to='/NineThirty'> 9:30 </Link>
            </div>
            <div className="links">
            <Link to='/Ten'> 10:00 </Link>
            </div>
            <div className="links">
            <Link to='/TenThirty'> 10:30 </Link>
            </div>
            <div className="links">
            <Link to='/Eleven'> 11:00 </Link>
            </div>
            <div className="links">
            <Link to='/ElevenThirty'> 11:30 </Link>
            </div>
            <div className="links">
            <Link to='/Twelve'> 12:00 </Link>
            </div>
            <div className="links">
            <Link to='/TwelveThirty'> 12:30 </Link>
            </div>
            <div className="links">
            <Link to='/One'> 13:00 </Link>
            </div>
            <div className="links">
            <Link to='/OneThirty'> 13:30 </Link>
            </div>
            <div className="links">
            <Link to='/Two'> 14:00 </Link>
            </div>
            <div className="links">
            <Link to='/TwoThirty'> 14:30 </Link>
            </div>
            <div className="links">
            <Link to='/Three'> 15:00 </Link>
            </div>
            <div className="links">
            <Link to='/ThreeThirty'> 15:30 </Link>
            </div>
            <div className="links">
            <Link to='/Four'> 16:00 </Link>
            </div>
            <div className="links">
            <Link to='/FourThirty'> 16:30 </Link>
            </div>
            <div className="links">
            <Link to='/Five'> 17:00 </Link>
            </div>
        </div>
    )
}