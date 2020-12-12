import React, { Component } from 'react'
import Floor from './Floor'

export default class Assignment extends Component {

    state =  {
        floor1Color: '',
        floor1Item : '',
        floor2Color: '',
        floor2Item: '',
        floor3Color: '',
        floor3Item: '',
        floor4Color: '',
        floor4Item: '',
        floor5Color: '',
        floor5Item: '',
    }

    handleChangeColor = event => {
        // console.log(event.target.value);
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }

    handleChangeItem = event => {
        const {id, src} = event.target
        this.setState({
            [id]: src
        })
        console.log(this.state);
    }

    render() {

        return (
            <div>
            <h1>Assignment</h1>
            <Floor {...this.state}
                handleChangeColor={this.handleChangeColor}
                handleChangeItem={this.handleChangeItem}
                name="floor1Color"
                id="floor1Item"
                color={this.state.floor1Color}
                img={this.state.floor1Item}
            />
            <br/>
            <br/>
            <Floor {...this.state}
                handleChangeColor={this.handleChangeColor}
                handleChangeItem={this.handleChangeItem}
                name="floor2Color"
                id="floor2Item"
                color={this.state.floor2Color}
                img={this.state.floor2Item}
            />
            <br/>
            <br/>
            <Floor {...this.state}
                handleChangeColor={this.handleChangeColor}
                handleChangeItem={this.handleChangeItem}
                name="floor3Color"
                id="floor3Item"
                color={this.state.floor3Color}
                img={this.state.floor3Item}
            />
            <br/>
            <br/>
            <Floor {...this.state}
                handleChangeColor={this.handleChangeColor}
                handleChangeItem={this.handleChangeItem}
                name="floor4Color"
                id="floor4Item"
                color={this.state.floor4Color}
                img={this.state.floor4Item}
            />
            <br/>
            <br/>
            <Floor {...this.state}
                handleChangeColor={this.handleChangeColor}
                handleChangeItem={this.handleChangeItem}
                name="floor5Color"
                id="floor5Item"
                color={this.state.floor5Color}
                img={this.state.floor5Item}
            />
            <br/>
            <br/>
            <button>SUBMIT</button>
            </div>
        )
    }
}
