import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './sidebar.module.scss';
import { statsData } from './../../../pages/stats/stats';

const Sidebar = () => {
  const headerRef = useRef(null);
  const [totalTime, setTotalTime] = useState(0);
  const convertMinutesToHours = (minutes) => {
    const hours = minutes / 60;
    return hours;
  };
  const convertHoursToDays = (hours) => {
    const workDays = hours / 8;
    return workDays;
  };
  const converWorkDaysToWorkMonths = (workDays) => {
    const workMonths = workDays / 21;
    return workMonths;
  };
  const hours = convertMinutesToHours(totalTime).toFixed(1);
  const workDays = convertHoursToDays(hours).toFixed(1);
  const workMonths = converWorkDaysToWorkMonths(workDays).toFixed(1);

  useEffect(() => {
    // Calculate the total time
    const total = statsData.reduce((sum, stat) => sum + stat.time, 0);
    setTotalTime(total);

    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--header', `${headerHeight}px`);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  return (
    <header ref={headerRef} className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink end to="/roadmap">
              Roadmap
            </NavLink>
          </li>
          <li>
            <NavLink end to="/books">
              Books
            </NavLink>
          </li>
          <li>
            <NavLink end to="/projects">
              Мои проекты
            </NavLink>
          </li>
          <li>
            <NavLink end to="/stats">
              Статистика
            </NavLink>
          </li>
          <li>
            <NavLink end to="/learning-diary">
              Дневник обучения
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.learningTime}>
        <span>Потрачено на учебу (мин.): <span className={styles.totalTime}>{totalTime}</span></span>
        <span>Часов: <span className={styles.totalTime}>{hours}</span></span>
        <span>Рабочих дней (8ч./день): <span className={styles.totalTime}>{workDays}</span></span>
        <span>Рабочих месяцев (21 день/месяц): <span className={styles.totalTime}>{workMonths}</span></span>
      </div>
    </header>
  );
};

export default Sidebar;
