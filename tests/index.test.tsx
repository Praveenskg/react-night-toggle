import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { DarkModeSwitch } from '../src';

describe('DarkModeSwitch', () => {
  it('renders correctly with default props', () => {
    const mockFn = vi.fn();
    const { getByRole } = render(<DarkModeSwitch checked={false} onChange={mockFn} />);

    const switchElement = getByRole('switch');
    expect(switchElement).toBeTruthy();
    expect(switchElement.getAttribute('aria-checked')).toBe('false');
  });

  it('calls onChange when clicked', () => {
    const mockFn = vi.fn();
    const { getByRole } = render(<DarkModeSwitch checked={false} onChange={mockFn} />);

    const switchElement = getByRole('switch');
    fireEvent.click(switchElement);

    expect(mockFn).toHaveBeenCalledWith(true);
  });

  it('toggles with Enter key', () => {
    const mockFn = vi.fn();
    const { getByRole } = render(<DarkModeSwitch checked={true} onChange={mockFn} />);

    const switchElement = getByRole('switch');
    fireEvent.keyDown(switchElement, { key: 'Enter' });

    expect(mockFn).toHaveBeenCalledWith(false);
  });
});
