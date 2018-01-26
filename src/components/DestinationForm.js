import React, { Component } from 'react';

class DestinationForm extends Component {
	constructor() {
		super();
		this.state = {
			place: null
		};

		this.onButtonClick = this.onButtonClick.bind(this);
	}

	componentDidMount() {
	    const autoComplete = new window.google.maps.places.Autocomplete(this.refs.input);
	    autoComplete.addListener('place_changed', () => {
            this.setState({place: autoComplete.getPlace()});
        });
    }

	onButtonClick(e) {
		e.preventDefault();
		this.props.addDestination({
            id: this.props.lastDestination + 1,
            name: this.state.place.name,
            location: this.state.place.geometry.location,
            previousDestination: this.props.lastDestination,
            nextDestination: null
        });
        this.refs.input.value = '';
        this.setState({place: null});
	}

	onInputChanged() {
	    if (this.state.place) {
	        this.setState({place: null});
        }
    }

	render() {
		return (
            <div className='row'>
                <div className='col-lg-4'>
                    <div className='input-group'>
                        <input ref='input' type='text' className='form-control' onChange={() => this.onInputChanged()} placeholder='Enter destination name' />
                        <span className='input-group-btn'>
                            <button type='button' disabled={!this.state.place} className='btn btn-default' onClick={this.onButtonClick}>Add</button>
                        </span>
                    </div>
                </div>
            </div>
		);
	}
}

export default DestinationForm