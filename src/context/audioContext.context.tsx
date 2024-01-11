import React, {createContext} from 'react';

interface AudioProviderProps { 
    children: React.ReactNode;
}

const NewAudioContext = createContext<AudioContext>(new AudioContext());



export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
    const ac = new AudioContext();

    return <NewAudioContext.Provider value={ac}>{children}</NewAudioContext.Provider>;
};

export default NewAudioContext;