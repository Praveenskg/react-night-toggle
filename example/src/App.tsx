'use client';
import { useState, useEffect } from 'react';
import { DarkModeSwitch } from 'react-night-toggle';
import { CloudSun, Moon, Sun, SunMoon, Copy, Check, Github } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import copy from 'copy-to-clipboard';

export default function App() {
  const [dark, setDark] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = (checked: boolean) => {
    setDark(checked);
    if (checked) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };

  const codeStyle = dark ? oneDark : oneLight;

  const examples = [
    {
      title: 'Default Switch',
      element: <DarkModeSwitch checked={dark} onChange={toggleDarkMode} />,
      code: `import { useState } from 'react';
import { DarkModeSwitch } from 'react-night-toggle';

export default function App() {
  const [dark, setDark] = useState(false);
  const toggleDarkMode = (checked: boolean) => setDark(checked);

  return (
    <DarkModeSwitch
      checked={dark}
      onChange={toggleDarkMode}
    />
  );
}`,
    },
    {
      title: 'Custom Icons',
      element: (
        <DarkModeSwitch
          checked={dark}
          onChange={toggleDarkMode}
          lightIcon={<CloudSun />}
          darkIcon={<SunMoon />}
        />
      ),
      code: `import { useState } from 'react';
import { DarkModeSwitch } from 'react-night-toggle';
import { CloudSun, SunMoon } from 'lucide-react';

export default function App() {
  const [dark, setDark] = useState(false);
  const toggleDarkMode = (checked: boolean) => setDark(checked);

  return (
    <DarkModeSwitch
      checked={dark}
      onChange={toggleDarkMode}
      lightIcon={<CloudSun />}
      darkIcon={<SunMoon />}
    />
  );
}`,
    },
    {
      title: 'Follow System Theme',
      element: <DarkModeSwitch checked={dark} onChange={toggleDarkMode} size={40} />,
      code: `import { useState } from 'react';
import { DarkModeSwitch } from 'react-night-toggle';

export default function App() {
  const [dark, setDark] = useState(false);
  const toggleDarkMode = (checked: boolean) => setDark(checked);

  return (
    <DarkModeSwitch
      checked={dark}
      onChange={toggleDarkMode}
      followSystem
      size={40}
    />
  );
}`,
    },
    {
      title: 'Colored Sun & Moon',
      element: (
        <DarkModeSwitch
          checked={dark}
          onChange={toggleDarkMode}
          size={56}
          sunColor="orange"
          moonColor="blueviolet"
        />
      ),
      code: `import { useState } from 'react';
import { DarkModeSwitch } from 'react-night-toggle';

export default function App() {
  const [dark, setDark] = useState(false);
  const toggleDarkMode = (checked: boolean) => setDark(checked);

  return (
    <DarkModeSwitch
      checked={dark}
      onChange={toggleDarkMode}
      size={56}
      sunColor="orange"
      moonColor="blueviolet"
    />
  );
}`,
    },
    {
      title: 'Large Toggle',
      element: <DarkModeSwitch checked={dark} onChange={toggleDarkMode} size={72} />,
      code: `import { useState } from 'react';
import { DarkModeSwitch } from 'react-night-toggle';

export default function App() {
  const [dark, setDark] = useState(false);
  const toggleDarkMode = (checked: boolean) => setDark(checked);

  return (
    <DarkModeSwitch
      checked={dark}
      onChange={toggleDarkMode}
      size={72}
    />
  );
}`,
    },
  ];

  const handleCopy = (code: string, idx: number) => {
    copy(code);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2500);
  };

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center gap-12 px-6 py-12 transition-colors duration-500 ease-in-out ${dark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}
    >
      <nav className="fixed top-0 z-50 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700 transition-colors duration-500 ease-in-out">
        <div className="mx-auto flex items-center justify-between px-4 md:px-8 py-3">
          <a
            href="/"
            className="group relative text-2xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent tracking-tight hover:scale-105 transition-transform duration-300"
          >
            react-night-toggle
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 transition-all duration-500 group-hover:w-full"></span>
          </a>
          <div className="flex items-center space-x-4">
            <DarkModeSwitch
              checked={dark}
              onChange={toggleDarkMode}
              size={26}
              sunColor="#facc15"
              moonColor="#38bdf8"
              aria-label="Toggle Dark Mode"
            />
            <a
              href="https://github.com/Praveenskg/react-night-toggle"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              <Github className="text-gray-700 dark:text-gray-200" />
            </a>
          </div>
        </div>
      </nav>
      <div className="text-center space-y-3 mt-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight transition-transform duration-500 hover:scale-105">
          React Night Toggle
        </h1>
        <p className="text-lg md:text-xl opacity-90">
          A modern dark mode switch for React with smooth animations and custom icons.
        </p>
      </div>
      <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-semibold transition-colors duration-500 ease-in-out">
        {dark ? (
          <>
            <Moon className="w-6 h-6 text-yellow-300 animate-pulse" />
            Dark Mode Enabled
          </>
        ) : (
          <>
            <Sun className="w-6 h-6 text-yellow-400 animate-pulse" />
            Light Mode Enabled
          </>
        )}
      </h2>
      <div className="w-full space-y-8">
        <h2 className="text-2xl font-bold text-center">📖 Examples</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {examples.map((ex, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl shadow-md space-y-4 transition-all duration-500 ease-in-out transform hover:scale-[1.02] ${dark ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'
                }`}
            >
              <h3 className="font-semibold text-lg">{`${idx + 1}️⃣ ${ex.title}`}</h3>
              {ex.element}
              <div className="relative">
                <button
                  className={`absolute right-2 top-2 p-1 rounded cursor-pointer transition-all duration-300 ${dark ? 'hover:bg-gray-700 text-gray-200' : 'hover:bg-gray-200 text-gray-800'
                    }`}
                  onClick={() => handleCopy(ex.code, idx)}
                  aria-label="Copy code"
                >
                  {copiedIdx === idx ? <Check size={16} /> : <Copy size={16} />}
                </button>

                <SyntaxHighlighter
                  language="tsx"
                  style={codeStyle}
                  wrapLines
                  customStyle={{
                    borderRadius: '0.5rem',
                    padding: '0.75rem',
                    background: dark ? '#1e1e1e' : '#f9f9f9',
                  }}
                >
                  {ex.code}
                </SyntaxHighlighter>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="mt-12 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-500 ease-in-out">
        Made with ❤️ by Praveen Singh
      </footer>
    </div>
  );
}
