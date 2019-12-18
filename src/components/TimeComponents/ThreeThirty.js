
import React, { Component } from 'react'
import AddBooking from '../AddBooking'
import BookingItems from '../BookingItems'

class NineThirty extends Component {
    state = {
            items: [],
            currentItem: {
                text: '', 
                Key: ''
            }
        }

        handleInput = e => {
            const itemText = e.target.value
            const currentItem ={ text: itemText, key: Date.now()}
            this.setState({
                currentItem,
            })
            
        }

        addItem = (e) => {
            e.preventDefault();
            const newItem = this.state.currentItem
            if (newItem.text !== '') {
                console.log(newItem)
                const items = [...this.state.items, newItem]
                this.setState({
                    items: items,
                    current: { text: '' , key: ''}

                })
            }
            console.log('Hello Add Item')
        }
    
    render(){

        console.log(this.state.currentItem);
        console.log("my items are");
        console.log(this.state.items);
        return (
            <div>

                <h1>Three Thirty</h1>
                <AddBooking addItem={this.addItem}
                    inputElement={this.inputElement}
                    handleInput={this.handleInput}
                    currentItem={this.state.currentItem}
                />
                <BookingItems entries={this.state.items}/>
            </div>
        )
    }
}

export default NineThirty;