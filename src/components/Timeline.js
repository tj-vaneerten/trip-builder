import React from 'react';
import TransitTimelineItem from './TransitTimelineItem';
import DestinationTimelineItem from './DestinationTimelineItem';

const Timeline = props => {
    return (
        <ul className='list-group'>
            {props.timelineList.map((timelineListItem, index) => {
                switch (timelineListItem.type) {
                    case "TRANSIT":
                        return <TransitTimelineItem key={index} transitInfo={timelineListItem} />;
                    case "DESTINATION":
                        return (
                            <DestinationTimelineItem key={index} destinationInfo={timelineListItem}
                                                     selectedTrip={props.selectedTrip}
                                                     onDestinationTimelineItemClick={props.selectDestination} />
                        );
                    default:
                        return null;
                }
            })}
        </ul>
    )
};

export default Timeline;