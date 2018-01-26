import React from 'react';

const TimelineItem = props => (
    <li onClick={() => props.onDestinationTimelineItemClick(props.destinationInfo.destinationId)} className='list-group-item timeline-item-destination'>
        <div>{props.destinationInfo.name}</div>
        <div>{props.destinationInfo.address}</div>
    </li>
);

export default TimelineItem;






