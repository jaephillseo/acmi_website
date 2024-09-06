import React from "react";
import '../styles/timeline.css'


const TimelineItem = ({ items }: { items: timelineInterface[] }) => {

    return (
        <>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-12 mb-3">
            {items.map((item, index) =>
                <li key={index}>
                    <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className={`timeline-${index % 2 === 0 ? 'start' : 'end'} mb-10 ${index % 2 === 0 ? 'text-left md:text-end md:text-right' : 'text-left'} max-w-lg`}>
                        <time className="font-mono italic text-lg sm:text-lg md:text-xl lg:text-2xl">{item.date}</time>
                        <div className="text-lg sm:texl-xl md:text-xl lg:text-3xl font-semibold">{item.title}</div>
                        <p className="whitespace-normal break-words text-base mt-2 sm:text-lg lg:text-xl italic mb-3">{item.content}</p>
                    </div>
                    <hr />
                </li>
            )}
        </ul>
        </>
    );
  };
  
  export default TimelineItem;

