Currency Converter

![Currency Converter Screenshot](./image.png)

A real‑time currency converter built with **React**, **Vite**, and **Tailwind CSS**.  
It fetches live exchange rates from the [ExchangeRate-API](https://www.exchangerate-api.com/) and lets you convert between any two currencies with a clean, responsive interface.

## Features

- **Swap currencies** – instantly switch "From" and "To" with one click.
- **Live rates** – powered by ExchangeRate-API (free tier).
- **Beautiful UI** – built with Tailwind CSS and a full‑screen background image.
- **Fast & modern** – built with Vite for instant hot‑module replacement.
- **Responsive** – works on desktop and mobile.

---

## Tech Stack

- [React 18](https://react.dev/)
- [Vite 4](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ExchangeRate-API](https://www.exchangerate-api.com/) (no API key required for free tier)

---

## Getting Started

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/suyashnautiyal/CurrencyConverter.git

# Navigate into the project folder
cd CurrencyConverter

# Install dependencies
npm install

# Start the development server
npm run dev

📂 Project Structure

```
CurrencyConverter/
├── public/
├── src/
│   ├── Components/
│   │   └── InputBox.jsx          # Reusable currency input
│   ├── Hooks/
│   │   └── currencyHooksInfo.js  # Fetches live rates
│   ├── App.jsx                   # Main logic
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```