import React, { Component } from 'react'

export default class Map extends Component {

    constructor() {
        super();
        this.state = {
            map: null,
            directionsRenderer: null,
            infoMarker: null
        }
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

    render() {
        if (this.state.map) {
            if (this.props.directions) {
                this.state.directionsRenderer.setDirections(this.props.directions);
            }

            if (this.props.selectedDestination) {
                this.state.infoWindow.setContent();
                this.state.infoWindow.setPosition(this.props.selectedDestination.location);
                this.state.infoWindow.open(this.state.map);
            } else {
                this.state.infoWindow.close();
            }
        }
        return (
            <div>
                <div ref='map' id='map-view' />
            </div>

        );
    }
}