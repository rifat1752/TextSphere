import { Button } from "@/components/ui/button";
import Link from "next/link";


const Home = () => {
    return (
        <div className="flex min-h-screen items-center justify-center">
            click&nbsp;<Link className="underline text-red-600" href="/documents/1234">Here</Link>&nbsp;to go to the Document
        </div>
    );
};

export default Home;