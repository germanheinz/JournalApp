import React from 'react'
import moment from 'moment';
import { activeNotes } from '../../actions/notes';
import { useDispatch } from 'react-redux';

export const JournalEntry = ({id, date, title, body, url}) => {

    // console.log(id, date, title, body, url);
    const dispatch = useDispatch();

    const noteDate = moment( date );

    const handleEntryClick = () => {

        console.log("click " + id);

        const note = {
            title,
            body,
            noteDate
        }
    
        dispatch( activeNotes(id, note) );
    }

    return (
        <div className="journal__entry pointer" onClick={ handleEntryClick }>
            {  
             url &&
                <div 
                    className="journal__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${url})`
                    }}
                ></div>
            }

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                     {body}
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{ noteDate.format('dddd') }</span>
                <h4>{ noteDate.format('Do') }</h4>
            </div>

        </div>
    )
}
