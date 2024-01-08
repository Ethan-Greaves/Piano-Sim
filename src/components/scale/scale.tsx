import React from 'react';
import Note from '@/components/note/note';

interface ScaleProps {

}

const Scale: React.FC<ScaleProps> = () => {
    const cMajorKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

    return (
        <div className='flex'>
            {cMajorKeys.map((key) => (
                <Note key={key} text={key} audioFile='/audio/samplePiano.wav' />
            )
            )}
      </div>
    );
};

export default Scale;
