import css from "./Statistics.module.css";

const Statistics = ({title, stats}) => {
    const statsElements = stats.map(stat => <li  key={stat.id} className="stats-item"><span className="stats-label">{stat.label}</span> <span className="stat-percentage">{stat.percentage}%</span></li> )
    return (
        <>
        <section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>
  <ul className={css.statsList}>
    {statsElements}
  </ul>
</section>
</>
    )
};

export default Statistics;