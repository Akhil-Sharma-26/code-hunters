import React, { useState } from "react";
import Selector from "./Selector";
import Selector_2 from "./Selector_2";

const FYear = () => {

    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
      setShowMore(!showMore);
    };

    const subjectarray = [
        'Bio-technology',
        'Pool A',
        'Pool B',
        'CSE',
        'COBS'
    ]
  return (
    <div className="body1">
      <h1 className="select">Select Your Branch/Pool</h1>
      <div className="Cards">
      {subjectarray.map((i) => (
          <Selector_2 name={i}/>
        ))}
      {
        showMore && (
         <h1>This should be visible</h1>
        )
      }
      </div>
    </div>
  );
};

export default FYear;
