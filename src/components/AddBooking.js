import React, { Component } from 'react'

class AddBooking extends Component {
//    componentDidUpdate(){
//        this.props.inputElement.current.focus()
//    }
   render() {
        return(
            <div className="AddBooking">
                
                <form onSubmit={this.props.addItem}>
                    <input 
                    placeholder="Book"
                        ref={this.props.inputElement}
                        value={this.props.inputElement}
                        onChange={this.props.handleInput}
                    />
                
                </form>
                <form onSubmit={this.props.addItem}>
                    <input 
                    placeholder="Book"
                        ref={this.props.inputElement}
                        value={this.props.inputElement}
                        onChange={this.props.handleInput}
                    />
                    
                </form>
                <form onSubmit={this.props.addItem}>
                    <input 
                    placeholder="Book"
                        ref={this.props.inputElement}
                        value={this.props.inputElement}
                        onChange={this.props.handleInput}
                    />
                    <button type="submit"> Add Booking</button>
                </form>

            </div>

        )
    }
}

export default AddBooking;
