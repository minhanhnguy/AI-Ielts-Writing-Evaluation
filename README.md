# AI-ielts-writing-evaluation

This AI is most effective for identifying errors and providing suggestions for improvement, rather than for scoring tasks, as it lacks the human instinct needed for nuanced judgment.

This project uses **ReactJS** and **Vite** for an essay evaluation tool, integrating the **Google Gemini AI API**. Below are step-by-step instructions on how to install the Google Gemini API, set up Node.js and npm, and run this project locally.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version 16 or later)
- **npm** (Node package manager)

You can download and install Node.js from [here](https://nodejs.org/). npm is bundled with Node.js, so installing Node will automatically set up npm for you.

## Table of Contents
- [1. Demo](#1-demo)
- [2. Google Gemini AI API Setup](#2-google-gemini-ai-api-setup)
- [3. Install Dependencies And Run The Project](#3-install-dependencies-and-run-the-project)


---

## 1. Demo

[Essay Used](https://docs.google.com/document/d/1Yc4NtBm3Ifdrl5NOl3Xan7BH5lbU7sg0uaRYkOPyb9M/edit?usp=sharing)

[Prompt Used](https://docs.google.com/document/d/1pVRshMAUMMl6l1twTe6zDS6oD3Hgv-4XwXv9Xg_5gnI/edit?usp=sharing)

https://github.com/user-attachments/assets/39f4bc04-cb6b-4e1f-974a-d3b5b70edb39



## 2. Google Gemini AI API Setup

### Step 1: Create a Google Cloud Project

1. Visit the [Google AI Studio](https://ai.google.dev/aistudio).
2. Sign in.
3. Navigate to the **Get API key** section.
4. Click on **Create API key**.
5. Copy the generated API key. You'll need this to configure the Google Gemini API in the project.

### Step 2: Add API Key to Project

1. In the `/src` directory of your project, create a new file called `config.jsx`.
2. Add the following code, replacing `YOUR_API_KEY` with the API key you copied earlier:

   ```javascript
   export const API_KEY = "YOUR_API_KEY";

## 3. Install Dependencies And Run The Project
In your terminal, run the following command to clone the project:

   ```bash
   git clone https://github.com/minhanhnguy/AI-ielts-writing-evaluation.git
   ```

Navigate into the project directory:

   ```bash
   cd AI-ielts-writing-evaluation
   ```

Run the following command to install the necessary npm packages:

   ```bash
   npm install
   ```

This will install all the dependencies listed in the ```package.json``` file, including React and Vite.

To start the development server, run:

   ```bash
   npm run dev
   ```
