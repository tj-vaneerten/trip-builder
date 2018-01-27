import React, { Component } from 'react';

export default class Map extends Component {

    constructor() {
        super();
        this.state = {
            map: null,
            directionsRenderer: null,
            infoMarker: null,
            selectedDestination: null
        };

        this.onDestinationSaveButtonClicked = this.onDestinationSaveButtonClicked.bind(this);
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
        this.refs.name.value = this.state.selectedDestination ? this.state.selectedDestination.name : '';
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedDestination !== this.state.selectedDestination) {
            this.setState({
                selectedDestination: nextProps.selectedDestination,
            });
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
            id: this.state.selectedDestination.id,
            name: this.refs.name.value
        });
    }

    render() {
        if (this.state.map) {
            if (this.props.directions) {
                this.state.directionsRenderer.setDirections(this.props.directions);
            }

            if (this.props.selectedDestination) {
                this.state.infoWindow.setContent(this.refs.infoWindow);
                this.state.infoWindow.setPosition(this.props.selectedDestination.location);
                this.state.infoWindow.open(this.state.map);
            } else {
                this.state.infoWindow.close();
            }
        }
        return (
            <div>
                <div ref='map' id='map-view' />
                <div ref='infoWindow' className='input-group'>
                    <input ref='name' className='form-control' type='input' placeholder='Name of destination...' />
                    <button className='btn btn-default' onClick={() => this.onDestinationSaveButtonClicked()}>Save</button>
                </div>
            </div>

        );
    }
}