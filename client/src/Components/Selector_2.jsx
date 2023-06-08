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
          <h3>Course Site</h3>
          <h3>Syllabus</h3>
          <h3>Lab File</h3>
          <h3>Projects</h3>
          <h3>Notes</h3>
        </div>
      )
    }
    </ div>
  )
}

export default Selector_2