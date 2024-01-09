import React from 'react';
import Note from '@/components/note/note';

interface ScaleProps {
    ac: AudioContext
}

const Scale: React.FC<ScaleProps> = (props) => {
    const cMajorKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

    return (
        <div className='flex'>
            {cMajorKeys.map((key, i) => {
                console.log(i * 2);
                return (
                    <Note ac={props.ac} key={key} text={key} semitonesToShift={i * 2} audioFile='/audio/samplePiano.wav' />
                );
            })}
        </div>
    );
};

export default Scale;
