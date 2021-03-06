import React, { Component } from 'react';

class Button extends Component {


    render() {
        return (
            <div className="list">
                {this.props.ingredients.map((ingredient, index) => {
                    return <button tabIndex={0} className="groceryButton" key={index} alt={ingredient} onClick={this.props.handleClick}>{ingredient}</button>
                })}

            </div>
        );
    }
}
export default Button;