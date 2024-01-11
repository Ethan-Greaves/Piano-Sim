import React from 'react';
import Note from '@/components/note/note';
import notes from '@/data/notes';

interface ScaleProps {
    ac: AudioContext
}

const Scale: React.FC<ScaleProps> = (props) => {
    return (
        <div className='flex'>
            {notes.map((note, i) => {
                return (
                    <Note ac={props.ac} text={note.name} semitonesToShift={note.semitones} audioFile='/audio/samplePiano.wav' />
                );
            })}
        </div>
    );
};

export default Scale;
