# Dice Game

A simple dice game built with React. In this game, Player 1 can change their name and play against the computer (Player 2). The game randomly rolls dice for both players, and the result (win, lose, or draw) is displayed.

## Features

- **Player Name Customization**: Player 1 can change their name via an input field.
- **Dice Animation**: Dice "roll" visually for 5 seconds before the final result is revealed.
- **Dynamic Results**: The result of each round is determined based on the dice rolls.

## Components

### `App`

The main component that handles the game's logic and state management.

### `Dice`

A reusable component that displays a dice image based on the number passed as a prop.

### `Name`

A component for Player 1 to update their name using an input field.

## Technologies Used

- React
- JavaScript (ES6+)
- CSS

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dice-game.git
   ```
2. Navigate to the project directory:
   ```bash
   cd dice-game
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the app:
   ```bash
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000` to play the game.

## Live Demo

Check out the live version of the project here: [Live Demo](https://lucky-panda-12b55e.netlify.app)

## Folder Structure

```
src
├── App.css          # Styles for the app
├── App.jsx          # Main application component
├── assets           # Dice images (dice1.png, dice2.png, etc.)
├── components       # Reusable components
│   ├── Dice.jsx     # Dice component
│   └── Name.jsx     # Name input component
└── index.js         # Entry point of the application
```

## Future Enhancements

- Add an option for Player 2 to be controlled by another user.
- Introduce score tracking for multiple rounds.
- Improve UI/UX with animations and better styling.

## License

This project is licensed under the MIT License.

---

Feel free to fork, modify, and share this project. Contributions are welcome!

