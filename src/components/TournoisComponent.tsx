"use client";

import {Tournament} from "@/data/types";
import {useEffect, useState} from "react";
import {Match} from "find-up";
import {HttpService} from "@/app/services/HttpService";
import {Card, CardTitle} from "@/components/ui/card";

export default function TournoisComponent({tournois}: {tournois: Tournament[]}) {
    const [activeTournois, setActiveTournois] = useState<Tournament>();
    const [activeMatch, setActiveMatch] = useState<Match[]>([]);

    useEffect(() => {
        if(activeTournois){
            HttpService.get<Match[]>("http://localhost:3000/api/matches?tournamentId="+activeTournois.id)
        }
    })

    return (
        <>
            <h1>Tournois</h1>
            {tournois.map(t => (
                <div key={t.id} className="max-w-7xl mx-auto border" onMouseOver={ () => setActiveTournois(t) }>
                    <h2>{t.name}</h2>
                    <p>{t.location}</p>
                </div>
            ))}
            {activeTournois &&
                <Card>
                    <CardTitle>{activeTournois.name}</CardTitle>
                </Card>
            }
        </>
    );
}