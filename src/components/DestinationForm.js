import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DestinationForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			sequence: Object.keys(this.props.destinations).length + 1,
			name: ''
		}

		this.onNameInputChange = this.onNameInputChange.bind(this)
		this.onSequenceInputChange = this.onSequenceInputChange.bind(this)
		this.onFormSubmit = this.onFormSubmit.bind(this)
	}

	onFormSubmit(e) {
		e.preventDefault()
		const newDestination = {
			sequence: this.state.sequence,
			name: this.state.name
		}
		this.props.addDestination(newDestination)
	}

	onNameInputChange(e) {
		this.setState({name: e.target.value})
	}

	onSequenceInputChange(e) {
		this.setState({sequence: e.target.value})
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input placeholder="Enter destination name" onChange={this.onNameInputChange} value={this.state.name} />
				<input placeholder="Enter sequence number" onChange={this.onSequenceInputChange} value={this.state.sequence} />
				<input type="submit" value="Add" />
			</form>
		)
	}
}

export default DestinationForm