import '../styles/moodlet.css';

import { useState } from 'react';

const states = {
  REQUIRED: "required",
  CURRENT: "current",
  COMPLETED: "completed",
  NOT_REQUIRED: "not-required",
};

const Moodlet = ({ label }) => {
  const [state, setState] = useState(states.REQUIRED); // 💡 Ensure all moodlets start as REQUIRED (Red)

  // ✅ Left Click: Cycle between Required → Current → Completed → Current
  const handleLeftClick = () => {
    if (state === states.REQUIRED) {
      setState(states.CURRENT);
    } else if (state === states.CURRENT) {
      setState(states.COMPLETED);
    } else if (state === states.COMPLETED) {
      setState(states.CURRENT); // Loop between Current & Completed
    }
  };

  // ✅ Right Click: Toggle between Not Required (Gray) ↔ Required (Red)
  const handleRightClick = (e) => {
    e.preventDefault();
    if (state === states.NOT_REQUIRED) {
      setState(states.REQUIRED);
    } else {
      setState(states.NOT_REQUIRED);
    }
  };

  return (
    <div
      className={`moodlet ${state}`}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
    >
      {label}
    </div>
  );
};

export default Moodlet;
