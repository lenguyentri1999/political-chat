import React,  {Component} from 'react';

export class InitialForm extends Component {
    render() {
        return (
            <form>
            Enter your username: <input type="text"></input> <br></br>
            Choose your political party: Republican or Democrat
          </form>
        )
    }
}
