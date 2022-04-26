import React, { useRef, useState } from 'react';
import IdleTimer from 'react-idle-timer';

function IdleTimerContainer({
  timeout,
  handleLogout,
  timeoutModal,
  timedoutHandler
}) {
  const idleTimerRef = useRef(null);
  const [timeoutDuration, setTimeoutDuration] = useState(1000 * 55); // 1mins

  const onIdleHandler = () => {
    if (timeout) {
      handleLogout();
    } else {
      timeoutModal(); // opens the modal
      idleTimerRef.current.reset();
      timedoutHandler(true); // after the modal, if they are not responding then
    }
  };

  const onActiveHandler = () => {
    setTimeoutDuration(5000);
    timedoutHandler(false);
  };

  const onActionHandler = () => {
    timedoutHandler(false);
  };

  return (
    <IdleTimer
      ref={idleTimerRef}
      timeout={timeoutDuration} // {1000 * 60 * 15}, {1000 * 5 * 1}
      onIdle={onIdleHandler}
      onActive={onActiveHandler}
      onAction={onActionHandler}
    />
  );
}

export default IdleTimerContainer;
