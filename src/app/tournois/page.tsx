import {HttpService} from "@/app/services/HttpService";
import {Tournament} from "@/data/types";
import TournoisComponent from "@/components/TournoisComponent";

export default async function TournoisPage() {
    const tournois = await HttpService.get<Tournament[]>("http://localhost:3000/api/tournaments");
    return(
        <TournoisComponent tournois={tournois}></TournoisComponent>
    )
}