import React, {useState} from 'react'

const Selector_2 = (props) => {

  const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
      setShowMore(!showMore);
    };

  return (
    < div className='body_main_s2'>
    <button className='selector2_body' onClick={toggleShowMore}>
      {props.name}
    </button>
    {
      showMore && (
        <div className="body_main_s2">
          <h3>Subject 1</h3>
          <h3>Subject 2</h3>
          <h3>Subject 3</h3>
          <h3>Subject 4</h3>
          <h3>Subject 5</h3>
        </div>
      )
    }
    </ div>
  )
}

export default Selector_2