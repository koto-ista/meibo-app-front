import { useState, useCallback } from 'react';

export function useHoverOpen() {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = useCallback(() => setOpen(true), []);
  const handleMouseLeave = useCallback(() => setOpen(false), []);
  const close = useCallback(() => setOpen(false), []);

  return { open, handleMouseEnter, handleMouseLeave, close };
}