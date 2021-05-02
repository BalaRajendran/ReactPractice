import React, { useState, useEffect } from 'react';
import './Person.css';
import loadingGif from './Scan-Text-Loading-Label.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonDetails from './PersonDetails';

const Person = () => {
    const [personsState, setPersonsState] = useState([]);

    const hasPerson = personsState.length > 0
    useEffect(() => {
        fetch('https://608ce77d9f42b20017c3e5d5.mockapi.io/studentdList')
            .then((res) => res.json())
            .then(personArray => {
                const newPersonsState = personArray.map((person) => {
                    return person
                })
                setPersonsState(newPersonsState)
            })
    }, [])

    return (
        <div>
            {hasPerson ?
                <PersonDetails personsState={personsState} /> : <img className="loadingGif" src={loadingGif} alt="Loading..."></img>}
        </div >
    )
}

export default Person;



 // return (
    //     <div>
    //         {hasPerson ?
    //             <div className="ListRow">
    //                 <h1 className="App">Persons List</h1>
    //                 {personsState.map((person) => {
    //                     return <div key={person.id} className="ListColumn">
    //                         <div className="ListCard">
    //                             <p><span class="text-secondary">Name: </span>{person.name}</p>
    //                             <p><span class="text-secondary">Parents Name: </span> {person.parentsName}</p>
    //                             <PersonDetails
    //                                 createdAt={person.createdAt}
    //                                 dOB={person.dOB}
    //                                 placeOfBirthState={person.placeOfBirthState}
    //                                 class={person.class}
    //                                 isStudentAverageIsGood={person.isStudentAverageIsGood}
    //                                 studentLocationLat={person.studentLocationLat}
    //                                 studentLocationLong={person.studentLocationLong}
    //                                 placeOfBirthCity={person.placeOfBirthCity}
    //                                 motherName={person.motherName}
    //                                 fatherName={person.fatherName}
    //                                 fatherPhoneNumber={person.fatherPhoneNumber}
    //                                 studentProfileUrl={person.studentProfileUrl}
    //                             />
    //                         </div>
    //                     </div>
    //                 })}
    //             </div> : <img className="loadingGif" src={loadingGif} alt="Loading..."></img>}
    //     </div >
    // )
