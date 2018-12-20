import React,  {Component} from 'react';

export class InitialForm extends Component {
    state = {
        response: '',
        post: '',
        responseToPost: ''
    }

    componentDidMount() {
        this.callApi().then(body => {
            this.setState({response: body.express})
        })
        .catch(e => console.log('err', e))

    }

    callApi = async () => {
        const response = await fetch('/api/hello')
        const body = await response.json()

        if (response.status != 200) {
            throw new Error(body.message)
        }
        return body
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const response = await fetch('/api/world', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({post: this.state.post})
        })
        const body = await response.text()
        this.setState({responseToPost: body})
    }

    render() {
        return (
            <React.Fragment>
                 <form>
                Enter your username: <input type="text"></input> <br></br>
                Choose your political party: Republican or Democrat 
                </form>

                <p>Response to GET request: {this.state.response} </p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.post} onChange={e => this.setState({post: e.target.value})} />
                    <button type="submit">Submit</button>
                </form>
                <p>{this.state.responseToPost}</p>

            </React.Fragment>
           

        )
    }
}
