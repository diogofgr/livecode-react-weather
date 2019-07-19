import React from 'react';

const Tab = ({ day, active, onClick }) => {
    return (
        <div
            key={day.dataPrevisao}
            className={`tab ${active ? 'tab-selected' : ''}`}
            onClick={() => onClick(day)}
            role="presentation"
        >
            {new Date(day.dataPrevisao).getDate()}
        </div>
    );
};

export default Tab;
