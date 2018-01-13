import React, { Component } from 'react'

class DestinationForm extends Component {
	constructor() {
		super();
		this.state = {
			name: ''
		};

		this.onNameInputChange = this.onNameInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(e) {
		e.preventDefault();
		this.props.addDestination({
            id: this.props.lastDestination + 1,
            name: this.state.name,
            location: {
            	lat: 42.3142643,
            	lng: -71.1107129
            },
            previousDestination: this.props.lastDestination,
            nextDestination: null
        });
		this.setState({name: ''})
	}

	onNameInputChange(e) {
        this.setState({name: e.target.value});
    }

	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input placeholder="Enter destination name" onChange={this.onNameInputChange} value={this.state.name} />
				<input type="submit" value="Add" />
			</form>
		);
	}
}

export default DestinationForm