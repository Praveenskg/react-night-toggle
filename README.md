# React Night Toggle

[![npm version](https://img.shields.io/npm/v/react-night-toggle?color=blue&logo=npm)](https://www.npmjs.com/package/react-night-toggle)
[![build](https://github.com/praveenskg/react-night-toggle/actions/workflows/release.yml/badge.svg)](https://github.com/praveenskg/react-night-toggle/actions)
[![license](https://img.shields.io/github/license/praveenskg/react-night-toggle)](LICENSE)
[![downloads](https://img.shields.io/npm/dt/react-night-toggle?color=purple)](https://www.npmjs.com/package/react-night-toggle)

![Interactive sun and moon transition](./demo.gif)

## ✨ Overview

**React Night Toggle** is a lightweight and customizable **dark mode switch** for React apps, built with **TypeScript**, `framer-motion`, and `lucide-react`.  
Easily add a **night/day theme toggle** with smooth animations, customizable icons, and flexible color options.

---

## 🚀 Features

- 🌙 Clean & modern **dark mode toggle**
- ⚡ Built with **TypeScript**
- 🎨 **Customizable icons** (uses `lucide-react` by default)
- 🎨 **Customizable colors** via `sunColor` & `moonColor` props
- ✨ Smooth **Framer Motion animations**
- 📦 Lightweight and easy to use in any React project

---

## 📦 Installation

```bash
npm install react-night-toggle
# or
yarn add react-night-toggle
# or
pnpm add react-night-toggle
```

---

## 🔧 Usage

### Basic Example

```tsx
import { useState } from 'react';
import { DarkModeSwitch } from 'react-night-toggle';

export default function App() {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = (checked: boolean) => setDark(checked);

  return (
    <div className={dark ? 'dark' : ''}>
      <DarkModeSwitch
        checked={dark}
        onChange={toggleDarkMode}
        sunColor="orange" // optional, defaults to currentColor
        moonColor="black" // optional, defaults to currentColor
      />
      <h1>{dark ? '🌙 Dark Mode' : '☀️ Light Mode'}</h1>
    </div>
  );
}
```

### Custom Icons Example

You can pass your own icons instead of the default **Sun/Moon**:

```tsx
import { useState } from 'react';
import { DarkModeSwitch } from 'react-night-toggle';
import { CloudSun, Star } from 'lucide-react';

export default function App() {
  const [dark, setDark] = useState(false);

  // onChange handler to toggle dark mode
  const toggleDarkMode = (checked: boolean) => setDark(checked);

  return (
    <div>
      <DarkModeSwitch
        checked={dark}
        onChange={toggleDarkMode}
        lightIcon={<CloudSun size={24} />}
        darkIcon={<Star size={24} />}
      />
      <h2>{dark ? 'Dark Mode Enabled 🌙' : 'Light Mode Enabled ☀️'}</h2>
    </div>
  );
}
```

✨ This way you can use **any React node** (Lucide, Material UI, custom SVGs, etc.) for icons.

---

## ⚙️ Props

| Prop        | Type                         | Default        | Description                                                            |
| ----------- | ---------------------------- | -------------- | ---------------------------------------------------------------------- |
| `checked`   | `boolean`                    | — (required)   | Whether dark mode is active (`true` = dark, `false` = light).          |
| `onChange`  | `(checked: boolean) => void` | — (required)   | Callback fired when the toggle is switched.                            |
| `size`      | `number \| string`           | `24`           | Size of the toggle button (applied to both icons).                     |
| `lightIcon` | `React.ReactNode`            | `<Sun />`      | Custom icon for light mode.                                            |
| `darkIcon`  | `React.ReactNode`            | `<Moon />`     | Custom icon for dark mode.                                             |
| `sunColor`  | `string`                     | `currentColor` | Color of the default **Sun** icon. Ignored if `lightIcon` is provided. |
| `moonColor` | `string`                     | `currentColor` | Color of the default **Moon** icon. Ignored if `darkIcon` is provided. |

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to **open an issue** or **submit a pull request**.

---

## ⭐ Show your support

Give a ⭐️ if this project helped you!
