import { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';

import Guitare from 'assets/sounds/Guitare.wav';
import Flute from 'assets/sounds/Flute.wav';
import Piano from 'assets/sounds/Piano.wav';
import Trompette from 'assets/sounds/Trompette.wav';

export default function useSounds() {
    const mySampler = useRef(null);

    const [isGuitarePlayed, setIsGuitarePlayed] = useState(false);
    const [isFlutePlayed, setIsFlutePlayed] = useState(false);
    const [isPianoPlayed, setIsPianoPlayed] = useState(false);
    const [isTrompettePlayed, setIsTrompettePlayed] = useState(false);

    const buttonsList = [
        {
            soundPlay: () => soundPlay("C4"),
            isPlayed: isGuitarePlayed,
        },
        {
            soundPlay: () => soundPlay("D#4"),
            isPlayed: isFlutePlayed,
        },
        {
            soundPlay: () => soundPlay("F#4"),
            isPlayed: isPianoPlayed,
        },
        {
            soundPlay: () => soundPlay("A4"),
            isPlayed: isTrompettePlayed,
        }
    ];

    function soundPlay(note) {
        mySampler.current.triggerAttackRelease([note], 4)
    }

    useEffect(() => {
        const sampler = new Tone.Sampler({
            C4: Guitare,
            "D#4": Flute,
            "F#4": Piano,
            A4: Trompette,
        }).toDestination();

        Tone.loaded().then(() => {
            mySampler.current = sampler;
        })
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        function handleKeyDown({ key }) {
            switch (key) {

                case 'g':
                    setIsGuitarePlayed(true);
                    window.setTimeout(() => setIsGuitarePlayed(false), 1000);
                    soundPlay('C4');
                    break;

                case 'f':
                    setIsFlutePlayed(true);
                    window.setTimeout(() => setIsFlutePlayed(false), 1000);
                   soundPlay('D#4');
                   break;

                case 'p':
                    setIsPianoPlayed(true);
                    window.setTimeout(() => setIsPianoPlayed(false), 1000);
                    soundPlay('F#4');
                    break;

                case 't':
                    setIsTrompettePlayed(true);
                    window.setTimeout(() => setIsTrompettePlayed(false), 1000);
                    soundPlay('A4');
                    break;    

                default:
                    break;
            }
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return { buttonsList };
}   