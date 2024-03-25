import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title.length > 0 && title}</h2>

      <ul className={css.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={`${css.item} ${getStatisticsLabel(stat.label)}`}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const getStatisticsLabel = label => {
  switch (label) {
    case '.docx':
      return css.docx;
    case '.pdf':
      return css.pdf;
    case '.mp3':
      return css.mp3;
    case '.psd':
      return css.psd;
    default:
      return '';
  }
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
