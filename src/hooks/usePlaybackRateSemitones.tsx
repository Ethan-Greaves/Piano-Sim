export const usePlaybackRateSemitones = (semitones: number) => { 
    const playbackRate = 2 ** (semitones / 12);
    return playbackRate;
};