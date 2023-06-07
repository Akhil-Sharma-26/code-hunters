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
        <button onClick={toggleShowMore} className="show-more-link">
            {showMore ? 'GPA Calculator' : "GPA Calculator"}
        </button>
        {
            showMore && (
                <>
                <div className="calculator">
                    <h1>GPA Calculator</h1>
                    <table id='table'>
                            <thead>
                                <th>Course_Name</th>
                                <th>Grade</th>
                            </thead>
                            <tbody id='tbody'>
                                <tr>
                                    <td>
                                        <select id="c1" className="form-control" onChange={(event) => {
                                                {
                                                    setCourse1(event.target.value);      
                                                }
                                        }}>
                                            <option value="">Subject</option>
                                            <option value="3">Environment</option>
                                            <option value="3">Mathematics-1</option>
                                            <option value="3.5">Mathematics-2</option>
                                            <option value="4.5">Applied Chemistry</option>
                                            <option value="4">Applied Physics</option>
                                            <option value="3">Computer-1</option>
                                            <option value="3.5">Computer-2</option>
                                            <option value="4.5">Electrical</option>
                                            <option value="4">Electronics</option>
                                            <option value="2.5">Mechanics</option>
                                            <option value="3">Engeenering Drawing</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select id="g1" className="form-control"  onChange={(event) => {
                                                {
                                                    setMarks1(event.target.value);      
                                                }
                                        }}>
                                             <option value="">Grade</option>
                                            <option value="10">A+</option>
                                            <option value="10">A</option>
                                            <option value="9">A-</option>
                                            <option value="8">B</option>
                                            <option value="7">B-</option>
                                            <option value="6">C</option>
                                            <option value="5">C-</option>
                                            <option value="0">F</option>
                                            {/* Anush */}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <select id="c2" className="form-control" onChange={(event) => {
                                                {
                                                    setCourse2(event.target.value);      
                                                }
                                        }}>
                                            <option value="">Subject</option>
                                            <option value="3">Environment</option>
                                            <option value="3">Mathematics-1</option>
                                            <option value="3.5">Mathematics-2</option>
                                            <option value="4.5">Applied Chemistry</option>
                                            <option value="4">Applied Physics</option>
                                            <option value="3">Computer-1</option>
                                            <option value="3.5">Computer-2</option>
                                            <option value="4.5">Electrical</option>
                                            <option value="4">Electronics</option>
                                            <option value="2.5">Mechanics</option>
                                            <option value="3">Engeenering Drawing</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select id="g2" className="form-control"  onChange={(event) => {
                                                {
                                                    setMarks2(event.target.value);      
                                                }
                                        }}>
                                             <option value="">Grade</option>
                                            <option value="10">A+</option>
                                            <option value="10">A</option>
                                            <option value="9">A-</option>
                                            <option value="8">B</option>
                                            <option value="7">B-</option>
                                            <option value="6">C</option>
                                            <option value="5">C-</option>
                                            <option value="0">F</option>
                                        </select>
                                    </td>
                                </tr><tr>
                                    <td>
                                        <select id="c3" className="form-control" onChange={(event) => {
                                                {
                                                    setCourse3(event.target.value);      
                                                }
                                        }}>
                                            <option value="">Subject</option>
                                            <option value="3">Environment</option>
                                            <option value="3">Mathematics-1</option>
                                            <option value="3.5">Mathematics-2</option>
                                            <option value="4.5">Applied Chemistry</option>
                                            <option value="4">Applied Physics</option>
                                            <option value="3">Computer-1</option>
                                            <option value="3.5">Computer-2</option>
                                            <option value="4.5">Electrical</option>
                                            <option value="4">Electronics</option>
                                            <option value="2.5">Mechanics</option>
                                            <option value="3">Engeenering Drawing</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select id="g3" className="form-control"  onChange={(event) => {
                                                {
                                                    setMarks3(event.target.value);      
                                                }
                                        }}>
                                             <option value="">Grade</option>
                                            <option value="10">A+</option>
                                            <option value="10">A</option>
                                            <option value="9">A-</option>
                                            <option value="8">B</option>
                                            <option value="7">B-</option>
                                            <option value="6">C</option>
                                            <option value="5">C-</option>
                                            <option value="0">F</option>
                                        </select>
                                    </td>
                                </tr><tr>
                                    <td>
                                        <select id="c4" className="form-control" onChange={(event) => {
                                                {
                                                    setCourse4(event.target.value);      
                                                }
                                        }}>
                                            <option value="">Subject</option>
                                            <option value="3">Environment</option>
                                            <option value="3">Mathematics-1</option>
                                            <option value="3.5">Mathematics-2</option>
                                            <option value="4.5">Applied Chemistry</option>
                                            <option value="4">Applied Physics</option>
                                            <option value="3">Computer-1</option>
                                            <option value="3.5">Computer-2</option>
                                            <option value="4.5">Electrical</option>
                                            <option value="4">Electronics</option>
                                            <option value="2.5">Mechanics</option>
                                            <option value="3">Engeenering Drawing</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select id="g4" className="form-control"  onChange={(event) => {
                                                {
                                                    setMarks4(event.target.value);      
                                                }
                                        }}>
                                            <option value="">Grade</option>
                                            <option value="10">A+</option>
                                            <option value="10">A</option>
                                            <option value="9">A-</option>
                                            <option value="8">B</option>
                                            <option value="7">B-</option>
                                            <option value="6">C</option>
                                            <option value="5">C-</option>
                                            <option value="0">F</option>
                                        </select>
                                    </td>
                                </tr><tr>
                                    <td>
                                        <select id="c5" className="form-control" onChange={(event) => {
                                                {
                                                    setCourse5(event.target.value);      
                                                }
                                        }}>
                                            <option value="">Subject</option>
                                            <option value="3">Environment</option>
                                            <option value="3">Mathematics-1</option>
                                            <option value="3.5">Mathematics-2</option>
                                            <option value="4.5">Applied Chemistry</option>
                                            <option value="4">Applied Physics</option>
                                            <option value="3">Computer-1</option>
                                            <option value="3.5">Computer-2</option>
                                            <option value="4.5">Electrical</option>
                                            <option value="4">Electronics</option>
                                            <option value="2.5">Mechanics</option>
                                            <option value="3">Engeenering Drawing</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select id="g5" className="form-control"  onChange={(event) => {
                                                {
                                                    setMarks5(event.target.value);      
                                                }
                                        }}>
                                            <option value="">Grade</option>
                                            <option value="10">A+</option>
                                            <option value="10">A</option>
                                            <option value="9">A-</option>
                                            <option value="8">B</option>
                                            <option value="7">B-</option>
                                            <option value="6">C</option>
                                            <option value="5">C-</option>
                                            <option value="0">F</option>
                                        </select>
                                    </td>
                                </tr><tr>
                                    <td>
                                        <select id="c6" className="form-control" onChange={(event) => {
                                                {
                                                    setCourse6(event.target.value);      
                                                }
                                        }}>
                                            <option value="">Subject</option>
                                            <option value="3">Environment</option>
                                            <option value="3">Mathematics-1</option>
                                            <option value="3.5">Mathematics-2</option>
                                            <option value="4.5">Applied Chemistry</option>
                                            <option value="4">Applied Physics</option>
                                            <option value="3">Computer-1</option>
                                            <option value="3.5">Computer-2</option>
                                            <option value="4.5">Electrical</option>
                                            <option value="4">Electronics</option>
                                            <option value="2.5">Mechanics</option>
                                            <option value="3">Engeenering Drawing</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select id="g6" className="form-control"  onChange={(event) => {
                                                {
                                                    setMarks6(event.target.value);      
                                                }
                                        }}>
                                            <option value="">Grade</option>
                                            <option value="10">A+</option>
                                            <option value="10">A</option>
                                            <option value="9">A-</option>
                                            <option value="8">B</option>
                                            <option value="7">B-</option>
                                            <option value="6">C</option>
                                            <option value="5">C-</option>
                                            <option value="0">F</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                    </table>
                    <div className="last-row">
                        <div className="col">
                            <input type="button" id='calc-gp' value="Calc GPA" onClick={handleClick}/>
                        </div>
                        <div className="col" >
                            <input type="text" value={finCG} id='output' />
                        </div>
                    </div>
                </div>
                </>
            )
        }
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
    </div>
  )
}

export default Other