import React, { Component } from 'react';
import DestinationInfoWindow from './DestinationInfoWindow';

export default class Map extends Component {

    constructor() {
        super();
        this.state = {
            map: null,
            directionsRenderer: null,
            infoMarker: null
        };
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
        if (this.props.selectedDestination) {
            this.state.infoWindow.setContent(this.refs.infoWindow);
            this.state.infoWindow.setPosition(this.props.selectedDestination.location);
            this.state.infoWindow.open(this.state.map);
        } else {
            this.state.infoWindow.close();
        }
    }

    render() {
        if (this.state.map) {
            if (this.props.directions) {
                this.state.directionsRenderer.setMap(this.state.map);
                this.state.directionsRenderer.setDirections(this.props.directions);
            } else {
                this.state.directionsRenderer.setMap(null);
            }
        }
        return (
            <div>
                <div ref='map' id='map-view' />
                <div ref='infoWindow'>
                    {this.props.selectedDestination && (
                        <DestinationInfoWindow
                            updateDestination={this.props.updateDestination}
                            deleteDestination={this.props.deleteDestination}
                            selectedDestination={this.props.selectedDestination}
                            selectedTrip={this.props.selectedTrip} />
                    )}
                </div>
            </div>
        );
    }
}