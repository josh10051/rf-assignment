# RF Assignment

## Overview

This is a simple application built using **Vite**, **React**, and **TypeScript**. The project allows users to add and remove items dynamically, displaying them in a grid-based UI. The data is fetched from a mock API, ensuring smooth and interactive state management.

## Features

- **Add new items** dynamically.
- **Delete items** using the delete button.
- **Uses a mock API** to fetch and manage data.
- **Styled with a user-friendly UI**.
- **Fast performance** using Vite and TypeScript.

## Technologies Used

- [Vite](https://vitejs.dev/) - Fast build tool for frontend projects
- [React](https://react.dev/) - Component-based UI framework
- [TypeScript](https://www.typescriptlang.org/) - Strongly typed JavaScript
- [Mock API](https://mockapi.io/) - Simulating backend operations
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Styling

## Installation

To run this project locally, follow these steps:

### 1. Clone the Repository

```sh
git clone https://github.com/josh10051/rf-assignment.git
cd rf-assignment
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Start the Development Server

```sh
npm run dev
```

The app will be available at **`http://localhost:5173/`**.

## Usage

1. Click on **Add Item** to create a new item.
2. Click the **trash icon** to delete an item.
3. Items are displayed in a grid format.
4. Data is fetched from a mock API for demonstration purposes.

## Project Structure

```
├── src
│   ├── components  # Reusable components
│   ├── pages        # Page-specific components
│   ├── services     # API interactions
│   ├── styles       # CSS stylesheets
│   ├── App.tsx      # Main application component
│   ├── main.tsx     # Entry point for React
│   └── ...
├── public          # Static assets
├── package.json    # Project dependencies and scripts
├── vite.config.ts  # Vite configuration
└── README.md       # Documentation
```
