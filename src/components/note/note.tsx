import { usePlaybackRateSemitones } from '@/hooks/usePlaybackRateSemitones';
import React from 'react';

interface NoteProps {
    audioFile: string,
    text?: string,
    ac: AudioContext,
    semitonesToShift: number,
    white: boolean
}

const Note: React.FC<NoteProps> = ({
    audioFile = '',
    text = 'Note',
    ac,
    semitonesToShift = 0,
    white = true,
}) => {
    const playAudio = async () => {
        if (ac.state === 'suspended') await ac.resume();
        
        const response = await fetch(audioFile);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await ac.decodeAudioData(arrayBuffer);
        const source = ac.createBufferSource();
        source.buffer = audioBuffer;
        source.playbackRate.value = usePlaybackRateSemitones(semitonesToShift) || 1;
        source.connect(ac.destination);
        source.start(0);
    };

    return (
        <div>
            <button onClick={playAudio} className={`box-border inline-block ${white ? 'w-6 h-32 bg-white border-8 border-black mr-1' : 'black'}`}>
                <span className='text-black select-none'>{text}</span>
            </button>
        </div>
    );
};

export default Note;