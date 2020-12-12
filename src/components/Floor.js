import React, { Component } from 'react';

export default class Floor extends Component {
    render() {
    return (
        <>
        <div>
            <button
            onClick={this.props.handleChangeColor}
            name={this.props.name}
            value="red"
            >
            Red
            </button>

            <button
            onClick={this.props.handleChangeColor}
            name={this.props.name}
            value="blue"
            >
            Blue
            </button>

            <button
            onClick={this.props.handleChangeColor}
            name={this.props.name}
            value="green"
            >
            Green
            </button>

            <button
            onClick={this.props.handleChangeColor}
            name={this.props.name}
            value="yellow"
            >
            Yellow
            </button>

            <button
            onClick={this.props.handleChangeColor}
            name={this.props.name}
            value="purple"
            >
            Purple
            </button>

            <button
            onClick={this.props.handleChangeColor}
            name={this.props.name}
            value=""
            >
            Clear Selection
            </button>
        </div>
        <div style={{backgroundColor: `${this.props.color}`}}>
        <img src={this.props.img} width='50px' height='50px'/>
        </div>
        <img
            src="./images/lamp.png"
            alt="lamp"
            id={this.props.id}
            onClick={this.props.handleChangeItem}
            width='50px'
            height='50px'
        />

        <img
            src="./images/flowerPot.png"
            alt="flowerPot"
            id={this.props.id}
            onClick={this.props.handleChangeItem}
            width='50px'
            height='50px'
        />

        <img
            src="./images/whiteFlowerPot.png"
            alt="whiteFlowerPot"
            id={this.props.id}
            onClick={this.props.handleChangeItem}
            width='50px'
            height='50px'
        />

        
        <img 
            src="./images/painting.png" 
            alt="painting" 
            id={this.props.id}
            onClick={this.props.handleChangeItem}
            width='50px'
            height='50px'   
            />
            
        <img
            src="./images/candleabra.png"
            alt="candleabra"
            id={this.props.id}
            onClick={this.props.handleChangeItem}
            width='50px'
            height='50px'
        />
        <button id={this.props.id} src="" onClick={this.props.handleChangeItem}>Clear Selection</button>
        <div></div>
        </>
    );
    }
}
