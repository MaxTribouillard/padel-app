import { swaggerSpec } from "@/lib/swagger";
import ApiDocClient from "@/components/ApiDocClient";

export default function Page() {
    return <ApiDocClient spec={swaggerSpec} />;
}