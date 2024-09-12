"use client";
import { Task2Loader } from "@/components/task2";
import { Task1Loader } from "@/components/task1";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
    const [task, setTask] = useState(true);

    function changeTask() {
        setTask(!task); 
    }

    return (
        <div className="text-center">
            <Tabs
                defaultValue="task-2"
                className="w-[100px] fixed top-20 left-9"
            >
                <TabsList>
                    <TabsTrigger value="task-1" onClick={changeTask}>Task 1</TabsTrigger>
                    <TabsTrigger value="task-2" onClick={changeTask}>Task 2</TabsTrigger>
                </TabsList>
            </Tabs>
            <h1 className="text-3xl mt-2 font-semibold">
                Ielts AI Writing Evaluation
                </h1>
                <ModeToggle />
                {task ? <Task2Loader /> : <Task1Loader />}
            
        </div>
    );
}
