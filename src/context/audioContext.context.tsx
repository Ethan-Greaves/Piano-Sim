import React, { createContext, useContext } from 'react';

// Create a context for the audio context
const AudioContextContext = createContext<AudioContext>(new AudioContext());

const AudioContextProvider = ({ children }: any) => {
    const audioContext = new AudioContext();

    return (
        <AudioContextContext.Provider value={audioContext}>
            {children}
        </AudioContextContext.Provider>
    );
}

export { AudioContextProvider, AudioContextContext };
