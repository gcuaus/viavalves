'use client';

import { useEffect, useState } from 'react';
import { Clock3 } from 'lucide-react';

export function WibClock() {
  const [time, setTime] = useState('--:--:--');

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Jakarta',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
    const updateTime = () => setTime(formatter.format(new Date()));
    updateTime();
    const timer = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className="app-wib-clock" aria-label={`Current time in Western Indonesia: ${time} WIB`}>
      <Clock3 aria-hidden="true" />
      <time>{time}</time>
      <span>WIB</span>
    </span>
  );
}
