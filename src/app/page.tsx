import { Task2Loader } from "@/components/task2";

import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
    return (
        <div className="text-center">
            <h1 className="text-3xl mt-2 font-semibold">
                Ielts AI Writing Evaluation
                <ModeToggle />
            </h1>
            <Task2Loader></Task2Loader>
        </div>
    );
}
