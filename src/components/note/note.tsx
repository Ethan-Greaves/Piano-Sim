import React from 'react';

interface NoteProps {
    audioFile: string,
    text?: string,
    ac: AudioContext,
    pitch?: number,
}

const Note: React.FC<NoteProps> = (props) => {
    const playAudio = async () => {
        if (props.ac.state === 'suspended') await props.ac.resume();
        
        const response = await fetch(props.audioFile);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await props.ac.decodeAudioData(arrayBuffer);
        const source = props.ac.createBufferSource();
        source.buffer = audioBuffer;
        source.playbackRate.value = props.pitch || 1;
        source.connect(props.ac.destination);
        source.start(0);
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
    pitch: 1,
};

export default Note;