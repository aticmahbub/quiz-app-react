# React Quiz App

A simple quiz application built with React and TypeScript, fetching trivia questions from the Open Trivia Database.

## 🚀 Live Demo

Check out the live version of the app here:  
[Quiz App](https://atics-quiz-app-react.netlify.app/)

## 📂 Repository   

You can find the source code on GitHub:  
[GitHub Repository](https://github.com/aticmahbub/quiz-app-react.git)

## 🔥 Features

- Fetches trivia questions from the [Open Trivia Database](https://opentdb.com/)
- Supports multiple difficulty levels
- Keeps track of score and user answers
- Interactive UI with a clean design

## 🛠️ Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/aticmahbub/quiz-app-react.git
   cd quiz-app-react
2. Install dependencies:


   ```sh
   npm install

3. Start the development server:

   ```sh
   npm start


## 🔗 API Integration
This app fetches quiz questions from the Open Trivia Database API. The questions are retrieved dynamically based on difficulty level and category.

 API Endpoint Example:
https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple

## 📁 Project Structure
```
quiz-app-react/
│── src/
│   ├── components/         # Reusable UI components
│   ├── API.ts              # API call functions
│   ├── App.tsx             # Main application file
│   ├── index.tsx           # Entry point
│   ├── styles.css          # Global styles
│── public/                 # Static assets
│── package.json            # Dependencies and scripts
│── README.md               # Project documentation
```

## 🤝 Contributing
Feel free to fork the repository, open issues, or submit pull requests to improve the app.
