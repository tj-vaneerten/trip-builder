import React from 'react';

const TimelineItem = props => {
    switch(props.timelineListItem.type) {
        case 'DESTINATION':
            return (
                <li className='list-group-item timeline-item-destination'>
                    <div>{props.timelineListItem.name}</div>
                    <div>{props.timelineListItem.address}</div>
                </li>
            );
        case 'TRANSIT':
            return (
                <li className='list-group-item timeline-item-transit'>
                    <div>Drive {props.timelineListItem.duration}</div>
                </li>
            );
        default:
            return null;
    }
};

export default TimelineItem;






