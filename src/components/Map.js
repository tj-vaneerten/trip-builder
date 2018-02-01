import React, { Component } from 'react';
import Confirm from 'react-confirm-bootstrap';

export default class Map extends Component {

    constructor() {
        super();
        this.state = {
            map: null,
            directionsRenderer: null,
            infoMarker: null
        };

        this.onDestinationSaveButtonClicked = this.onDestinationSaveButtonClicked.bind(this);
        this.onConfirmDelete = this.onConfirmDelete.bind(this);
    }

    componentDidMount() {
        const map = new window.google.maps.Map(this.refs.map);
        const directionsRenderer = new window.google.maps.DirectionsRenderer({map});
        const infoWindow = new window.google.maps.InfoWindow();
        this.setState({
            map,
            directionsRenderer,
            infoWindow
        });
    }

    componentDidUpdate() {
        this.updateMapBounds();
        if (this.props.selectedDestination) {
            this.refs.name.value = this.props.selectedDestination.name
            this.state.infoWindow.setContent(this.refs.infoWindow);
            this.state.infoWindow.setPosition(this.props.selectedDestination.location);
            this.state.infoWindow.open(this.state.map);
        } else {
            this.state.infoWindow.close();
        }
    }

    updateMapBounds() {
        if (this.state.map) {
            let bounds = new window.google.maps.LatLngBounds();
            this.props.destinations.forEach(({ location }) => {
                bounds.extend(location);
            });
            this.state.map.fitBounds(bounds);
        }
    }

    onDestinationSaveButtonClicked() {
        this.props.updateDestination({
            id: this.props.selectedDestination.id,
            name: this.refs.name.value
        });
    }

    onConfirmDelete() {
        this.props.deleteDestination(this.props.selectedDestination.id);
    }

    render() {
        if (this.state.map) {
            if (this.props.directions) {
                this.state.directionsRenderer.setDirections(this.props.directions);
            }
        }
        return (
            <div>
                <div ref='map' id='map-view' />
                <div ref='infoWindow'>
                    {this.props.selectedDestination && (
                        <div className='input-group'>
                            <div className='form-group'>
                                <label htmlFor='destinationName'>Name</label>
                                <input id='destinationName' ref='name' className='form-control' type='input' placeholder='Name of destination...' />
                            </div>
                            <button type='button' className='btn btn-default' onClick={() => this.onDestinationSaveButtonClicked()}>Save</button>
                            <Confirm
                                body='Are you sure you want to delete this destination?'
                                confirmText='Confirm delete'
                                title='Delete destination'
                                onConfirm={this.onConfirmDelete}>
                                <button type='button' className='btn btn-link' onClick={() => this.onDestinationDeleteButtonClicked()}>Delete</button>
                            </Confirm>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}