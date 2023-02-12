import { useEffect, useRef } from 'react';
import * as Tone from 'tone';
import aigueEtCourt from 'assets/sounds/aigue-et-court.wav';
import courtEtEfficace from 'assets/sounds/court-et-efficace.wav';
import longEtGraves from 'assets/sounds/long-et-grave.wav';
import rapideEtGraves from 'assets/sounds/rapide-et-grave.wav';


export default function useSounds() {
    const mySampler = useRef(null);
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

    function soundPlay(note) {
        mySampler.current.triggerAttackRelease([note], 4)
    }

    function handleKeyDown({ key }) {
        switch (key) {
            case 'a':
                soundPlay('C4');
                break;
            case 'z':
                soundPlay('D#4');
                break;
            case 'e':
                soundPlay('F#4');
                break;
            case 'r':
                soundPlay('A4');
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const buttonsList = [
        { soundPlay: () => soundPlay("C4") }, { soundPlay: () => soundPlay("D#4") }, { soundPlay: () => soundPlay("F#4") }, { soundPlay: () => soundPlay("A4") }
    ];

    return { buttonsList };
}