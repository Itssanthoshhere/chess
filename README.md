<div align="center"> <br /> 
<a href="https://github.com/Itssanthoshhere/Real-Time-Chess-Game" target="_blank"> 
<img src="/assets/chessThumbnail.png" alt="Project Banner"> 
</a> <br /> 
<div>
<img src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/-Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white" />
<img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
</div>

<div align="center"> 
<h3>♟️ Real-Time Multiplayer Chess Game</h3> 
A <b>fully interactive chess game</b> with drag-and-drop pieces, real-time multiplayer via <b>Socket.io</b>, and live board updates. <br/>
<i>Play chess against friends or watch as a spectator in real-time.</i> 
</div> <br />

<!-- <a href="https://realtime-chess-demo.vercel.app/" target="_blank">
<img src="https://img.shields.io/badge/🚀%20Live%20Demo-brightgreen?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
</a>  -->
<br /> 
</div>

---

## 📋 Table of Contents

1. ✨ [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🧱 [Project Structure](#project-structure)
6. 📝 [Customization](#customization)
7. 🤝 [Contribution](#contribution)
8. 🔗 [Contacts](#contacts)
9. 📄 [License](#license)
10. 🙏 [Acknowledgements](#acknowledgements)

---

## ✨ Introduction

**Real-Time Chess Game** is a multiplayer chess application with:

- **Drag-and-drop chess piece movement**
- **Real-time updates for players and spectators using Socket.io**
- **Automatic board flipping for black player**
- **Move validation using chess.js**
- **Live board state synchronization**

It’s perfect for **chess enthusiasts, online tournaments, and educational purposes**.

---

## 👀 Preview

<div align="center">
  <img src="/assets/ChessPreview.mp4" alt="Chess Game Preview" width="600"/>
</div>

---

## ⚙️ Tech Stack

#### ⚡ Core Technologies

- **Node.js** – Backend server
- **Express.js** – Web framework for serving files and routes
- **Socket.io** – Real-time bidirectional communication
- **chess.js** – Chess rules, validation, and game logic
- **TailwindCSS** – Modern utility-first styling
- **JavaScript (ES6+)** – Frontend interactivity and game logic

#### 🧹 Tooling

- **VS Code** – Development environment
- **Node Package Manager (npm)** – Dependency management

---

## 🔋 Features

- ♟️ **Real-Time Multiplayer** – Play chess against another player online
- 🔄 **Drag-and-Drop Pieces** – Smooth UI interaction
- 🌐 **Spectator Mode** – Watch games in real-time without interacting
- 🟢 **Live Board Updates** – Moves update all connected clients instantly
- 🔄 **Board Flipping** – Automatically rotates board for black player
- ✅ **Move Validation** – Uses chess.js to ensure valid chess rules
- 📱 **Responsive Design** – Works on desktop and tablet screens

---

## 🤸 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

### Clone the Project

```bash
git clone https://github.com/Itssanthoshhere/Real-Time-Chess-Game.git
cd Real-Time-Chess-Game
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
node app.js
```

Then open your browser at `http://localhost:3000`

---

## 🧱 Project Structure

| File/Folder              | Description                                     |
| ------------------------ | ----------------------------------------------- |
| `app.js`                 | Main server file with Express & Socket.io setup |
| `public/js/chessgame.js` | Frontend game logic and drag-and-drop handling  |
| `public/css/`            | Custom CSS styles (TailwindCSS integration)     |
| `views/index.ejs`        | HTML template for the game board                |
| `package.json`           | Node.js dependencies and scripts                |
| `node_modules/`          | Installed npm packages                          |

---

## 📝 Customization

- **Board Size and Styling:** Edit `.chessboard` in `index.ejs` or `chessgame.js`
- **Piece Appearance:** Modify `getPieceUnicode()` in `chessgame.js`
- **Promotion Behavior:** Change default promotion in `handleMove()`

---

## 🤝 Contribution

Contributions are welcome! You can:

1. Fork the repo
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Make your changes
4. Commit (`git commit -m 'feat: my feature'`)
5. Push (`git push origin feature/my-feature`)
6. Create a Pull Request

---

## 🔗 Contacts

- GitHub: [Itssanthoshhere](https://github.com/Itssanthoshhere)
- LinkedIn: [Santhosh VS](https://www.linkedin.com/in/thesanthoshvs/)

---

## 📄 License

This project is for **educational and portfolio purposes**.
All rights for logos, assets, and branding belong to their respective owners.

---

## 🙏 Acknowledgements

- [chess.js](https://github.com/jhlywa/chess.js/) – Chess logic and rules
- [Socket.io](https://socket.io/) – Real-time communication
- [TailwindCSS](https://tailwindcss.com/) – Styling
- [Node.js](https://nodejs.org/) – Backend server

---

#### ⭐ Show Your Support

If you liked this project, **give it a ⭐** and share it with your network!

---
