'use client';
import * as React from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export interface DarkModeSwitchProps {
  onChange: (checked: boolean) => void;
  checked: boolean;
  size?: number | string;
  lightIcon?: React.ReactNode;
  darkIcon?: React.ReactNode;
  sunColor?: string;
  moonColor?: string;
  followSystem?: boolean;
}

export const DarkModeSwitch: React.FC<DarkModeSwitchProps> = ({
  onChange,
  checked,
  size = 24,
  lightIcon,
  darkIcon,
  sunColor = 'currentColor',
  moonColor = 'currentColor',
  followSystem = false,
}) => {
  useEffect(() => {
    if (!followSystem) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      onChange(e.matches);
    };

    onChange(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [followSystem, onChange]);

  const toggle = () => onChange(!checked);

  const Light = lightIcon ?? <Sun size={size} color={sunColor} />;
  const Dark = darkIcon ?? <Moon size={size} color={moonColor} />;

  return (
    <div
      role="switch"
      aria-checked={checked}
      tabIndex={0}
      aria-label="Toggle dark mode"
      onClick={toggle}
      onKeyDown={(e) => e.key === 'Enter' && toggle()}
      style={{
        cursor: 'pointer',
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.div
        key={checked ? 'dark' : 'light'}
        initial={{ rotate: checked ? 90 : -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: checked ? -90 : 90, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {checked ? Dark : Light}
      </motion.div>
    </div>
  );
};
