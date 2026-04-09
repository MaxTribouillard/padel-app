import Image from "next/image";
import {Button} from "../components/ui/button"
import Link from "next/link";
import {tournaments} from "@/data/data";
import {Badge} from "@/components/ui/badge";
export default function Home() {

    const count = {
        tournois: tournaments.length,
        teams : 0,
        players: 0
    }

  return (
      <>

          <div className="max-w-7xl mx-auto">

              <Link href={"/tournois"}><Button>Tournois<Badge   variant={"secondary"}>{count.tournois}</Badge></Button></Link>
          </div>
      </>
  );
}
