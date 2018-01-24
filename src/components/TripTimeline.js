import React from 'react'

const TripTimeline = props => {
    console.log(props);
    return (
        <ul className='list-group'>
            {props.directions && props.directions.routes[0] && props.directions.routes[0].legs.map(({ start_address, end_address, duration }, index) => (
                <div key={index}>
                    <li key={`start-${index}`}>{start_address}</li>
                    <li key={`duration-${index}`}>{duration.text}</li>
                    <li key={`end-${index}`}>{end_address}</li>
                </div>
            ))};
        </ul>
    )
};

export default TripTimeline;