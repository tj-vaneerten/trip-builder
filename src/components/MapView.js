import React from 'react'
import { compose, withProps, lifecycle } from "recompose"
import { withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from 'react-google-maps'

const MapView = compose(
	withProps({
		containerElement: <div style={{ height: `500px` }} />,
		loadingElement: <div style={{ height: `100%` }} />,
		mapElement: <div style={{ height: `100%` }} />
	}),
	lifecycle({
		componentWillMount() {
		    const refs = {};
			this.setState({
				onMapMounted: ref => {
                    refs.map = ref;
                    this.state.updateMapBounds();
				},
                updateMapBounds: () => {
				    if (refs.map) {
                        let bounds = new window.google.maps.LatLngBounds();
                        this.props.destinations.forEach(destination => {
                            bounds.extend(destination.location);
                        });
                        refs.map.fitBounds(bounds);
                    }
                }
			});
		},
		componentDidUpdate(prevProps, prevState) {
            this.state.updateMapBounds();
		}
	}),
	withGoogleMap
)(props => {
    return (
        <GoogleMap
            ref={props.onMapMounted}
            defaultZoom={17}>
            {props.destinations.map(destination => <Marker key={destination.id} position={destination.location} />) }
            {props.directions && <DirectionsRenderer directions={props.directions} />}
        </GoogleMap>
    );
});

export default MapView;