'use client';
import { useState } from 'react';
import { DarkModeSwitch } from 'react-night-toggle';
import { CloudSun, Moon, Sun, SunMoon, Copy, Check } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import copy from 'copy-to-clipboard';

export default function App() {
  const [dark, setDark] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const codeStyle = dark ? oneDark : oneLight;

  const toggleDarkMode = (checked: boolean) => setDark(checked);

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
      element: (
        <DarkModeSwitch
          checked={dark}
          onChange={toggleDarkMode}
          // followSystem
          size={40}
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
      className={`min-h-screen w-full flex flex-col items-center gap-12 px-6 py-12 transition-colors duration-500 ${dark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">React Night Toggle</h1>
        <p className="text-lg md:text-xl">
          A modern dark mode switch for React with smooth animations and custom icons.
        </p>
      </div>

      <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-semibold">
        {dark ? (
          <>
            <Moon className="w-6 h-6 text-yellow-300" />
            Dark Mode Enabled
          </>
        ) : (
          <>
            <Sun className="w-6 h-6 text-yellow-400" />
            Light Mode Enabled
          </>
        )}
      </h2>

      <div className="w-full  space-y-8">
        <h2 className="text-2xl font-bold text-center">📖 Examples</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {examples.map((ex, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl shadow-md space-y-4 transition-colors duration-500 ${dark ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}
            >
              <h3 className="font-semibold text-lg">{`${idx + 1}️⃣ ${ex.title}`}</h3>
              {ex.element}
              <div className="relative">
                <button
                  className={`absolute right-2 top-2 p-1 rounded cursor-pointer transition-colors
    ${dark ? 'hover:bg-gray-700 text-gray-200' : 'hover:bg-gray-200 text-gray-800'}`}
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

      <footer className="mt-12 text-sm text-gray-600 dark:text-gray-400">
        Made with ❤️ by Praveen Singh
      </footer>
    </div>
  );
}
