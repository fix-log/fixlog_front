import { useState } from 'react';

export default function ToggleSwitch() {
  const [on, setOn] = useState(true);

  return (
    <button
      type='button'
      className={`h-6 w-12 rounded-full transition-colors duration-200 ${on ? 'bg-mainRed' : 'bg-gray-300'} relative`}
      onClick={() => setOn((v) => !v)}
      aria-pressed={on}
    >
      <span
        className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white shadow transition-transform duration-200 ${on ? 'translate-x-6' : ''} `}
      />
    </button>
  );
}
