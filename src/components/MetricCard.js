import React from 'react';
import '../MetricCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserInjured } from '@fortawesome/free-solid-svg-icons';

const MetricCard = ({ title, value, icon, change, changeType }) => {
  return (
    <div className="metric-card">
      <div className="metric-icon">
        {icon ? icon : <FontAwesomeIcon icon={faUserInjured} />}
      </div>
      <div className="metric-info">
        <h4>{title}</h4>
        <h2>{value}</h2>
      </div>
      {change && (
        <div className={`metric-change ${changeType}`}>
          {changeType === 'up' ? '↑' : '↓'} {change}
        </div>
      )}
    </div>
  );
};

export default MetricCard;
