import {HttpService} from "@/app/services/HttpService";
import {Tournament} from "@/data/types";

export default function TournoisPage() {
    const tournois = HttpService.get<Tournament[]>("http://localhost:3000/tournaments");
}