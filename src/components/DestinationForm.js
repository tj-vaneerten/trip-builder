import React, { Component } from 'react';
import { withScriptjs } from 'react-google-maps';
import { StandaloneSearchBox } from "react-google-maps/lib/components/places/StandaloneSearchBox";
import { compose, withProps, lifecycle } from "recompose";

const DestinationForm = compose(
	withProps({
		googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCoO67xUDrjEUaJrZyLdimLsnilJ4-T9kM&libraries=places",
    	loadingElement: <div style={{ height: `100%` }} />,
    	containerElement: <div style={{ height: `400px` }} />
	}),
	lifecycle({
		componentWillMount() {
			const refs = {};
			this.setState({
				onSearchBoxMounted: ref => {
					refs.searchBox = ref;
				},
				onPlacesChanged: () => {
					const place = refs.searchBox.getPlaces()[0];
					const newDestination = {
						id: this.props.lastDestination + 1,
						name: place.name,
						location: place.geometry.location,
						previousDestination: this.props.lastDestination,
						nextDestination: null
					};
					this.props.addDestination(newDestination);
				}
			});
		}
	}),
	withScriptjs
)(props => {
	return (
		<div data-standalone-searchbox="">
			<StandaloneSearchBox ref={props.onSearchBoxMounted} onPlacesChanged={props.onPlacesChanged}>
				<input type="text" placeholder="Enter destination name" style={{width: 500 + 'px'}} />
			</StandaloneSearchBox>
		</div>
	);
});

export default DestinationForm;