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

    const buttonsList = [
        { soundPlay: () => mySampler.current.triggerAttackRelease(["C4"], 4) },
        { soundPlay: () => mySampler.current.triggerAttackRelease(["D#4"], 4) },
        { soundPlay: () => mySampler.current.triggerAttackRelease(["F#4"], 4) },
        { soundPlay: () => mySampler.current.triggerAttackRelease(["A4"], 4) }
    ];

    return { buttonsList };
}