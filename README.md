# AI-ielts-writing-evaluation

This AI is most effective for identifying errors and providing suggestions for improvement, rather than for scoring tasks, as it lacks the human instinct needed for nuanced judgment.

This project uses **ReactJS** and **NextJS** for an essay evaluation tool with the help of **shadcn ui**, integrating the **Google Gemini AI API**. Below are step-by-step instructions on how to install the Google Gemini API, set up Node.js and npm, and run this project locally.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version 16 or later)
- **npm** (Node package manager)

You can download and install Node.js from [here](https://nodejs.org/). npm is bundled with Node.js, so installing Node will automatically set up npm for you.

## 1. Demo

[Essay Task 2 Used](https://docs.google.com/document/d/1Yc4NtBm3Ifdrl5NOl3Xan7BH5lbU7sg0uaRYkOPyb9M/edit?usp=sharing)

[Essay Task 1 Used](https://docs.google.com/document/d/1nb-90inXnesiU6X1qHa6JVt16cB4yhLDwDpbXmPT3Zo/edit?usp=sharing)

[Prompt Used For Task 2](https://docs.google.com/document/d/1pVRshMAUMMl6l1twTe6zDS6oD3Hgv-4XwXv9Xg_5gnI/edit?usp=sharing)

[Prompt Used For Task 1](https://docs.google.com/document/d/1LSgd5uxf1EZlzHWXrEMwGMYRsARwOvOGyOQlEW7PeXo/edit?usp=sharing)


https://github.com/user-attachments/assets/dc87bca1-7fda-4f5d-adc8-c3bc9aaed7b7



## 2. Google Gemini AI API Setup

### Step 1: Create a Google Cloud Project

1. Visit the [Google AI Studio](https://ai.google.dev/aistudio).
2. Sign in.
3. Navigate to the **Get API key** section.
4. Click on **Create API key**.
5. Copy the generated API key. You'll need this to configure the Google Gemini API in the project.

## 2. Install Dependencies And Run The Project
In your terminal, run the following command to clone the project:

   ```bash
   git clone https://github.com/minhanhnguy/AI-Ielts-Writing-Evaluation.git
   ```

Navigate into the project directory:

   ```bash
   cd AI-Ielts-Writing-Evaluation
   ```

Run the following command to install the necessary npm packages:

   ```bash
   npm install
   ```

This will install all the dependencies listed in the ```package.json``` file, including React, and NextJS.

To start the development server, run:

   ```bash
   npm run dev
   ```

### Step 3: Add API Key to Project

1. In the `/src/app` directory of your project, create a new file called `config.tsx`.
2. Add the following code, replacing `YOUR_API_KEY` with the API key you copied earlier:

   ```javascript
   export const API_KEY = "YOUR_API_KEY";
