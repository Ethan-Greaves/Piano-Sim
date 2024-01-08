'use client';

import React, { useEffect, useState } from 'react';

interface NoteProps {
    audioFile: string,
    text?: string
}

const Note: React.FC<NoteProps> = (props) => {
    const playAudio = () => {
        const audio = new Audio(props.audioFile);       
        audio.play();
    };

    return (
        <div>
            <button onClick={playAudio} className='w-16 h-48 mx-2 bg-gray-200 text-white text-sm'>
                {props.text}
            </button>
        </div>
    );
};

Note.defaultProps = {
    audioFile: '',
    text: 'Note',
};

export default Note;