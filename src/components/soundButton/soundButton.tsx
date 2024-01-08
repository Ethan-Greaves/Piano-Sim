'use client';

import React, { useEffect, useState } from 'react';

interface SoundButtonProps {
    audioFile: string,
}

const SoundButton: React.FC<SoundButtonProps> = (props) => {
   
    const playAudio = () => {
        const audioContext = new AudioContext();
        const audio = new Audio(props.audioFile);
        const source = audioContext.createMediaElementSource(audio);
        source.connect(audioContext.destination);
        audio.play();
    };

    return (
        <div>
            <button onClick={playAudio} className='w-16 h-16 bg-cyan-500 text-white text-sm'>
                Play Audio
            </button>
        </div>
    );
};

export default SoundButton;