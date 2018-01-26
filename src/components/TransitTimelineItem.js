import React from 'react';

const TransitTimelineItem = props => (
        <li className='list-group-item timeline-item-transit'>
            <div>Drive {props.transitInfo.duration}</div>
        </li>
);

export default TransitTimelineItem;






