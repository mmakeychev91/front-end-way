export const statsData = [
  { id: 2, date: '22.07.24', time: 140 },
  { id: 1, date: 'До 22.07.24', time: 18120 }
];

const Stats = () => (
  <div>
    <h2>Потрачено на учебу (мин.)</h2>
    <ul>
      {statsData.map((stat) => (
        <li key={stat.id}>
          {stat.date} - <span>{stat.time}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Stats;
