import React from 'react'
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const MapView = compose(
	withProps({
		googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCoO67xUDrjEUaJrZyLdimLsnilJ4-T9kM",
		containerElement: <div style={{ height: `400px` }} />,
		loadingElement: <div style={{ height: `100%` }} />,
		mapElement: <div style={{ height: `100%` }} />
	}),
	lifecycle({
		componentWillMount() {
			const refs = {}
			this.setState({
				onMapMounted: ref => {
					refs.map = ref;
					this.setState({map: ref})
				}
			});
		},
		componentDidUpdate(prevProps, prevState) {
			let bounds = new window.google.maps.LatLngBounds();
			this.props.destinations.forEach(destination => {
				bounds.extend(destination.location);
			});
			this.state.map.fitBounds(bounds);
		}
	}),
	withScriptjs,
	withGoogleMap
)((props) => {
	return (
		<GoogleMap
			ref={props.onMapMounted}
			defaultZoom={17}>
    		{props.destinations.map((destination) => {
    			return <Marker key={destination.id} position={destination.location} />
    		})}
		</GoogleMap>
	)
});

export default MapView;