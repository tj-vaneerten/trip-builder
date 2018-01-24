import React, { Component } from 'react'

export default class Map extends Component {

    constructor() {
        super();
        this.state = {
            map: null,
            directionsRenderer: null
        }
    }

    componentDidMount() {
        const map = new window.google.maps.Map(this.refs.map);
        const directionsRenderer = new window.google.maps.DirectionsRenderer({map});
        this.setState({
            map,
            directionsRenderer
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
        }
        return (
            <div ref="map" style={{height: '500px'}} />
        );
    }
}