import React, {useState} from 'react'

const Other = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMore1, setShowMore1] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
    if ( showMore1 ){
        setShowMore1( false )
    }
  };

  const toggleShowMore1 = () => {
    setShowMore1(!showMore1);
    if ( showMore ){
        setShowMore( false )
    }
  }

    const [c1, setCourse1] = useState();
    const [c2, setCourse2] = useState();
    const [c3, setCourse3] = useState();
    const [c4, setCourse4] = useState();
    const [c5, setCourse5] = useState();
    const [c6, setCourse6] = useState();
    const [g1, setMarks1] = useState();
    const [g2, setMarks2] = useState();
    const [g3, setMarks3] = useState();
    const [g4, setMarks4] = useState();
    const [g5, setMarks5] = useState();
    const [g6, setMarks6] = useState();
    // const [tot, setTot] =  useState(); // take tot in a state
    // const [average, setAvg] =  useState(); // take tot in a state
    // const [gradee, setGrade] =  useState(); // take tot in a state
    const [finCG, setCg ] = useState();
    var total;
    // var grade;
    // var avg;

    function handleClick(){
        var initial = c1 * g1 + c2 * g2 + c3 * g3 + c4 * g4 + c5 * g5 + c6 * g6 ;
        var max = parseInt(c1) + parseInt(c2) + parseInt(c3) + parseInt(c4)  + parseInt(c5) + parseInt(c6)
        total = initial / max ;
        setCg(total);
        console.log(initial);
        console.log(max);
    }

  return (
    <div className="otherBody"> 
        <button className="show-more-link">
            <a href="/cgpa">GPA Calculator</a>
        </button>
        <div className="wifi_password">
                    <button onClick={toggleShowMore1} className="show-more-link">
                        {showMore1 ? 'Wifi passwords' : "Wifi passwords"}
                    </button>
                    {
                        showMore1 && (
                            <>
                                <div className="body-wifi-pass">
                                    <h4 className="row-wifi-pass"> LC : lc@tiet1 </h4>
                                    <h4 className="row-wifi-pass"> TU : lc@tiet1 </h4>
                                    <h4 className="row-wifi-pass"> CSED : lc@tiet1 </h4>
                                    <h4 className="row-wifi-pass"> Hostel-J : lc@tiet1 </h4>
                                    <h4 className="row-wifi-pass"> EACCESS : lc@tiet1 </h4>
                                    <h4 className="row-wifi-pass"> Audi : lc@tiet1 </h4>
                                </div>
                            </>
                        )
                    }
        </div>
        <div className="academic-calendar">
            <a href="">Academic Calender</a>
        </div>
        <div className="academic-calendar-2">
            <a href="https://www.thapar.edu/upload/files/Holiday%20List.pdf">Holiday Calender</a>
        </div>
    </div>
  )
}

export default Other