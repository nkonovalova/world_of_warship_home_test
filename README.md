# ⚓ World of Warships ships explorer

A frontend application for exploring and filtering ships data from the **World of Warships** public API.  
The app provides a convenient interface to browse ships, view their basic characteristics, and search by name.

---

## 🧭 Table of Contents

- [About the Project](#-about-the-project)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Installation](#-installation)
- [Available Scripts](#-available-scripts)
- [Usage](#-usage)
- [TODO](#-todo)
- [Author](#-author)

---

## 📖 About the Project

This project is a frontend SPA built with **React**, **Redux Toolkit**, and **TypeScript**.  
It interacts with the **World of Warships Encyclopedia API**, retrieves information about ships, and allows users to:

- View ships list with images and basic data
- Filter ships by nation, type and level
- Search ships by name

Project's API methods are located in file **WoW_API.yaml**

---

## 🛠️ Tech Stack

- **Framework:** React, TypeScript
- **State Management:** Redux Toolkit, RTK Query
- **Styling:** SASS/SCSS
- **Testing Tool:** Testing Library
- **Build Tool:** Vite
- **Linting & Formatting:** ESLint, Prettier

---

## 📁 Project Architecture

Project architecture base on [Feature Sliced Design](https://feature-sliced.design/)

## ⚙️ Installation

### Prerequisites
Make sure you have installed:
- Node.js >= 18
- npm or yarn

### Steps

```
# 1. Install dependencies
npm install
# or
yarn install

# 2. Start the development server
npm run dev

# 3. Start the api server
npm run api-server

```

## 🧪 Available Scripts
```
npm run dev             # Start development server
npm run build           # Build the project for production
npm run preview         # Locally preview production build
npm run api-server      # Start development API server
npm run lint            # Run ESLint
npm run format:check    # Run prettier for checking
npm run format          # Format code with Prettier
npm run test:           # Launch test runner
npm run type-check      # Check types problem
```

## 💡 Usage
When running locally, the app will be available at:
```
http://localhost:5173
```

Local API server will be available at:
```
http://localhos:3003
```

API url set on .env files:
```
.env.development
.env.production
```

You can:

- Browse the ships list

- Use the search input to find ships by name

- Filter by nation, type and level

In production mode app fetches data from:
```
https://vortex.worldofwarships.eu/api/encyclopedia/en/
```

## ✅ TODO

- [ ] Implement pagination or virtual scrolling for long lists

- [ ] Add multilanguage

- [ ] Add ship's page

- [ ] Write unit tests for selectors and components

## 👩‍💻 Author

Natalia Konovalova | Frontend Developer |
[GitHub](https://github.com/nkonovalova)