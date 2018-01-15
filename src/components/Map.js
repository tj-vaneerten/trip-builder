import React, { Component } from 'react'

export default class Map extends Component {

    componentDidMount() {
        this.initMap = this.initMap.bind(this);
        window.initMap = this.initMap;
        loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyCoO67xUDrjEUaJrZyLdimLsnilJ4-T9kM&callback=initMap');
    }

    initMap() {
        const google = window.google
        let map = new google.maps.Map(this.refs.map, {
            center: {
                lat: 39.9831403,
                lng: -83.2710094
            },
            zoom: 5
        });

        this.props.destinations.map((destination) => {
            new google.maps.Marker({
                position: destination.location,
                map
            });
        });
    }

    render() {
        console.log('here')
        return (
            <div ref="map" style={{height: 500 + 'px', width: 500 + 'px'}} />
        );
    }
}

function loadJS(src) {
    const ref = window.document.getElementsByTagName("script")[0];
    const script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}