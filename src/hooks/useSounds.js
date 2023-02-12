import { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';
import aigueEtCourt from 'assets/sounds/aigue-et-court.wav';
import courtEtEfficace from 'assets/sounds/court-et-efficace.wav';
import longEtGraves from 'assets/sounds/long-et-grave.wav';
import rapideEtGraves from 'assets/sounds/rapide-et-grave.wav';


export default function useSounds() {
    const mySampler = useRef(null);

    const [isAiguePlayed, setIsAiguePlayed] = useState(false);
    const [isCourtPlayed, setIsCourtPlayed] = useState(false);
    const [isLongPlayed, setIsLongPlayed] = useState(false);
    const [isRapidePlayed, setIsRapidePlayed] = useState(false);

    const buttonsList = [
        {
            soundPlay: () => soundPlay("C4"), 
            isPlayed: isAiguePlayed,
        },
        {
            soundPlay: () => soundPlay("D#4"),
            isPlayed: isCourtPlayed,
        },
        {
            soundPlay: () => soundPlay("F#4"),
            isPlayed: isLongPlayed,
        },
        {
            soundPlay: () => soundPlay("A4"),
            isPlayed: isRapidePlayed,
        }
    ];

    function soundPlay(note) {
        mySampler.current.triggerAttackRelease([note], 4)
    }

    useEffect(() => {
        const sampler = new Tone.Sampler({
            C4: aigueEtCourt,
            "D#4": courtEtEfficace,
            "F#4": longEtGraves,
            A4: rapideEtGraves,
        }).toDestination();

        Tone.loaded().then(() => {
            mySampler.current = sampler;
        })
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        function handleKeyDown({ key }) {
            switch (key) {
                case 'a':
                    setIsAiguePlayed(true);
                    window.setTimeout(() => setIsAiguePlayed(false), 1000);
                    soundPlay('C4');
                    break;
                case 'z':
                    setIsCourtPlayed(true);
                    window.setTimeout(() => setIsCourtPlayed(false), 1000);
                    soundPlay('D#4');
                    break;
                case 'e':
                    setIsLongPlayed(true);  
                    window.setTimeout(() => setIsLongPlayed(false), 1000);
                    soundPlay('F#4');
                    break;
                case 'r':
                    setIsRapidePlayed(true);
                    window.setTimeout(() => setIsRapidePlayed(false),1000);
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