import React from 'react';
import TimelineItem from './TimelineItem';

const Timeline = props => {
    return (
        <ul className='list-group'>
            {props.timelineList.map((timelineListItem, index) => (
                <TimelineItem key={index} timelineListItem={timelineListItem} />
            ))}
        </ul>
    )
};

export default Timeline;