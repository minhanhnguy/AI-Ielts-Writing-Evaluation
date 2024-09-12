"use client";
import { useState, useEffect } from "react";

import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import * as fs from "fs";
import { useWindowSize } from "rooks";
import { Instruction } from "@/components/systemInstructorTask1";
import { GoogleGenerativeAI } from "@google/generative-AI";
import { API_KEY } from "@/app/config";
import { Progress } from "@/components/ui/progress";
import _default from "next/dist/client/router";

function formatResponse({
    output = null,
    loading = false,
}: {
    output: string | null;
    loading: boolean;
}): JSX.Element | null {
    if (loading) {
        return <div className="essayEvaluation">Loading...</div>;
    }
    if (output === null) return null;

    const transformBoldText = (text: string): string => {
        return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    };

    const formattedOutput: JSX.Element[] = transformBoldText(output)
        .split("\n")
        .map((paragraph: string, index: number) => (
            <div>
                <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                ></p>
                <br />
            </div>
        ));

    // Return the actual JSX (formatted output) instead of an object
    return <>{formattedOutput}</>;
}

export function ProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setProgress(33), 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setProgress(70), 3500);
        return () => clearTimeout(timer);
    }, []);

    return <Progress value={progress} className="w-[60%] m-auto mt-10" />;
}

export function Task1Loader() {
    //set up Input Card
    const { innerWidth, innerHeight, outerHeight, outerWidth } =
        useWindowSize();
    if (!innerWidth || !innerHeight) return;
    
    const cardWidth = innerWidth / 2 - 20;
    const cardHeight = innerHeight - 80;

    const [fileData, setFileData] = useState<{
        data: string;
        mimeType: string;
    } | null>(null);

    //set up Gemini
    const apiKey = API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-pro",
        systemInstruction: Instruction,
    });

    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
    };

    const chatSession = model.startChat({
        generationConfig,
        history: [],
    });

    //set up Form
    const [Response, setResponse] = useState<JSX.Element | null>(null);

    //set up Loading
    const [loading, setLoading] = useState(false);

    function fileToGenerativePart(file: File) {
        const reader = new FileReader();

        // Read the file as a Data URL (base64 encoded)
        reader.onloadend = () => {
            const base64Data = reader.result as string; 
            setFileData({
                data: base64Data.split(",")[1], 
                mimeType: file.type,
            });
            console.log(fileData);
        };
        if (file instanceof File) {
            reader.readAsDataURL(file); // Correct usage
        } else {
            console.error("Provided input is not a File object");
        }
    }

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> {
        setLoading(true);
        e.preventDefault();
        const form: HTMLFormElement = e.currentTarget;
        const formJson: Record<string, any> = Object.fromEntries(
            new FormData(form).entries()
        );
        if (!formJson.Topic) return;
        console.log(formJson.Topic);
        fileToGenerativePart(formJson.Topic);
        if(!fileData) return;
        const result = await model.generateContent([formJson.Essay, {inlineData: fileData}]);
        const responseText = result.response.text();
        console.log(responseText);
        setResponse(formatResponse({output: responseText, loading: false}));
        setLoading(false);
        /*const result = await chatSession.sendMessage(
            "Topic: " + formJson.Topic + "\n Essay: " + formJson.Essay
        );
        const responseText = await result.response.text();
        setResponse(formatResponse({ output: responseText, loading: false }));
        setLoading(false); // Set loading to false when response is received
        */
    }

    return (
        <div className="flex justify-evenly text-left">
            <Card
                style={{ width: cardWidth, height: cardHeight }}
                className="mt-4"
            >
                <CardHeader className="items-center">
                    <CardTitle className="text-2xl">Task 1</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col">
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="my-4 text-xl mt-[-10px]">
                            Topic Question:
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="picture" className="mb-[5px]">
                                Picture (.png, .jpg, jpeg, etc)
                            </Label>
                            <Input id="picture" type="file" name="Topic" />
                        </div>
                        <div className="my-4 text-xl">Essay Input:</div>
                        <Textarea
                            className="resize-none font-normal text-base h-96 overflow-y-auto focus:!ring-transparent"
                            placeholder="Enter Your Essay..."
                            name="Essay"
                        />
                        <Button
                            type="submit"
                            className="fixed bottom-10 left-button"
                        >
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>
            <Card
                style={{ width: cardWidth, height: cardHeight }}
                className="mt-4 text-base overflow-y-auto p-4"
            >
                {}
                {loading ? <ProgressBar /> : Response}
            </Card>
        </div>
    );
}
