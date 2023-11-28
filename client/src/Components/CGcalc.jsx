import React, { useEffect, useRef, useState } from 'react'
import Selector from './Selector'

const CGcalc = () => {

    const year = [
        'First',
        'Second',
        'Third'
    ]

    const subjectarray = [
        'Bio-technology',
        'Pool A',
        'Pool B',
        'CSE',
        'COBS'
    ]

    const branchArray = [
        'Computer Science', 'Chemical', 'Electrical', 'Civil', 'Electronics & Communication', 'Production', 'BioTechnology', 'Mechanical', 'Mechatronics', 'Electronics & Computer', 'Electronics & Instrumentaion'
    ]

    const poolA = [
        ['Applied Physics', 4.5],
        ['Electronics', 4.5],
        ["Engineering Drawing", 4],
        ['Computer Programming', 4],
        ['Mathematics', 3.5],
        ['Professional Communication', 3],
    ]

    const poolB = [
        ['Applied Chemistry', 4.5],
        ['Electrical', 4.5],
        ['Computer Programming', 4],
        ["Environment Engineering", 3],
        ['Mathematics', 3.5],
        ['Mechanics', 2.5],
    ]

    const CSE = [
        ['Applied Physics', 4.5],
        ["Engineering Drawing", 4],
        ['Computer Programming', 4],
        ['Mathematics', 3.5],
        ['Manufacturing Processes', 3],
        ['Professional Communication', 3],
    ]




    
    var [syear, setYear] = useState("First");
    function yearSelector(e) {
        setYear(e.currentTarget.id);
    }
    

    var [grades, setGrades] = useState([]);
    var [branch, setBranch] = useState("");


    function branchSelector(e) {
        setBranch(e.currentTarget.id);
    }

    useEffect(() => {
        var tempgrades = []

        if(branch == "Pool A"){
            for (let i = 0; i < poolA.length; i++) {
                tempgrades.push([poolA[i][1], 0])
            }
        }

        if(branch == "Pool B"){
            for (let i = 0; i < poolB.length; i++) {
                tempgrades.push([poolB[i][1], 0])
            }
        }

        if(branch == "CSE"){
            for (let i = 0; i < CSE.length; i++) {
                tempgrades.push([CSE[i][1], 0])
            }
        }

        setGrades(tempgrades);
    }, [branch])


    function gradeUpgrade(e){
        var snum = e.currentTarget.id[1];
        var temp = grades;
        temp[snum][1] = parseInt(e.currentTarget.value);
        setGrades(temp);
    }
    
    var [gpa, setgpa] = useState(0);

    function gpacalc(){
        var dsum = 0;
        var usum = 0;
        for (let i = 0; i < grades.length; i++) {
            usum += (grades[i][0] * grades[i][1]);
            dsum += grades[i][0];
        }

        var temp = Math.round((usum/dsum)*100)/100

        setgpa(temp);
    } 








    return (
        <div className="cgcalc">
            <h1 className="select" style={{ marginTop: "200px" }}>Select Your Year</h1>
            <div className="Cards">
                {


                    year.map((i) => (
                        <div id={i} onClick={yearSelector}>
                            <Selector name={i} a1={syear === i ? "selected" : ""} />
                        </div>
                    ))


                }
            </div>
            <h1 className="select">Select Your Branch/Pool</h1>
            <div className="Cards">
                {
                    syear == "First" ?
                        subjectarray.map((i) => (
                            <div id={i} onClick={branchSelector}>
                                <Selector name={i} a1={branch === i ? "selected" : ""}/>
                            </div>
                        )) :
                        syear == "Second" ?
                            branchArray.map((i) => (
                                <div id={i} onClick={branchSelector}>
                                    <Selector name={i} a1={branch === i ? "selected" : ""}/>
                                </div>
                            )) :
                            syear == "Third" ?
                                subjectarray.map((i) => (
                                    <div id={i} onClick={branchSelector}>
                                        <Selector name={i} a1={branch === i ? "selected" : ""}/>
                                    </div>
                                )) : ""

                }
            </div>


            <div className="subjects">
                <table>
                    <thead>
                        <td>Subject</td>
                        <td>Grade</td>
                    </thead>

                    {
                        
                        branch=="Pool A"?
                        poolA.map((s, i) => (
                        <tr>
                            <td>{s[0]} ({s[1]})</td>
                            <td>
                                <select name="" id={"s" + i} onInput={gradeUpgrade}>
                                    <option value="0" selected>Select Grade</option>
                                    <option value="10">A*</option>
                                    <option value="10">A</option>
                                    <option value="9">A-</option>
                                    <option value="8">B</option>
                                    <option value="7">C</option>
                                    <option value="6">D</option>
                                    <option value="2">E</option>
                                    <option value="0">F</option>
                                </select>
                            </td>
                        </tr>
                    )):
                    branch=="Pool B"?
                        poolB.map((s, i) => (
                        <tr id={"s" + i}>
                            <td>{s[0]} ({s[1]})</td>
                            <td>
                                <select name="" id={"s" + i} onInput={gradeUpgrade}>
                                    <option value="0" selected>Select Grade</option>
                                    <option value="10">A*</option>
                                    <option value="10">A</option>
                                    <option value="9">A-</option>
                                    <option value="8">B</option>
                                    <option value="7">C</option>
                                    <option value="6">D</option>
                                    <option value="2">E</option>
                                    <option value="0">F</option>
                                </select>
                            </td>
                        </tr>
                    )):
                    branch=="CSE"?
                        CSE.map((s, i) => (
                        <tr id={"s" + i}>
                            <td>{s[0]} ({s[1]})</td>
                            <td>
                                <select name="" id={"s" + i} onInput={gradeUpgrade}>
                                    <option value="0" selected>Select Grade</option>
                                    <option value="10">A*</option>
                                    <option value="10">A</option>
                                    <option value="9">A-</option>
                                    <option value="8">B</option>
                                    <option value="7">C</option>
                                    <option value="6">D</option>
                                    <option value="2">E</option>
                                    <option value="0">F</option>
                                </select>
                            </td>
                        </tr>
                    )):""



                    }

                    <thead onClick={gpacalc}>
                        <td colSpan={2}>Calculate</td>
                    </thead>

                    <thead>
                        <td colSpan={2}>GPA = {gpa}</td>
                    </thead>

                </table>
            </div>


        </div>
    )
}

export default CGcalc