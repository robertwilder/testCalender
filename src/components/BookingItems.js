import React, { Component } from 'react'

class BookingItems extends Component{
    createTask(item) {
        return <li key={item.key}>{item.text}</li>
    }
    render() {
        const bookingEntries = this.props.entries
        const listItems = bookingEntries.map((item)=>{
            return <li key={item.key}>{item.text}</li>
        })
        
        return <ul className="theList">{listItems}</ul>
    }
}
export default BookingItems;