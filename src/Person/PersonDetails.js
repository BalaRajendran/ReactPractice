import React from 'react';
import './Person.css';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

const popover = (props) => {
    return (<Popover id="popover-basic">
        <Popover.Title as="h3">Details</Popover.Title>
        <Popover.Content>
            <h6><span class="text-secondary">createdAt: </span>{props.createdAt}</h6>
            <h6><span class="text-secondary">dOB: </span>{props.dOB}</h6>
            <h6><span class="text-secondary">placeOfBirthState: </span>{props.placeOfBirthState}</h6>
            <h6><span class="text-secondary">class: </span>{props.class}</h6>
            <h6><span class="text-secondary">isStudentAverageIsGood: </span>{props.isStudentAverageIsGood ? "Yes" : "No"}</h6>
            <h6><span class="text-secondary">studentLocationLat: </span>{props.studentLocationLat}</h6>
            <h6><span class="text-secondary">studentLocationLong: </span>{props.studentLocationLong}</h6>
            <h6><span class="text-secondary">placeOfBirthCity: </span>{props.placeOfBirthCity}</h6>
            <h6><span class="text-secondary">motherName: </span>{props.motherName}</h6>
            <h6><span class="text-secondary">fatherName: </span>{props.fatherName}</h6>
            <h6><span class="text-secondary">fatherPhoneNumber: </span>{props.fatherPhoneNumber}</h6>
            <h6><span class="text-secondary">studentProfileUrl: </span> <a href={props.studentProfileUrl}>{props.studentProfileUrl}</a></h6>
        </Popover.Content>
    </Popover>)
}

const PersonDetails = (props) => {
    return (
        <div className="ListRow">
            <h1 className="App">Persons List</h1>
            {props.personsState.map((person) => {
                return <div key={person.id} className="ListColumn">
                    <div className="ListCard">
                        <p><span class="text-secondary">Name: </span>{person.name}</p>
                        <p><span class="text-secondary">Parents Name: </span> {person.parentsName}</p>
                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover(person)}  >
                            <Button variant="outline-secondary">More</Button>
                        </OverlayTrigger>
                    </div>
                </div>
            })}

        </div>
    )
}

export default PersonDetails;














// const PersonDetails = (props) => {
//     return (
//         <OverlayTrigger trigger="click" placement="bottom" overlay={popover(props)}     >
//             <Button variant="outline-secondary">More</Button>
//         </OverlayTrigger>
//     )
// }

