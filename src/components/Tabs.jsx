import React, { Fragment } from 'react';
import Tab from './Tab';

const Tabs = ({ days, currentDay, onClick }) => {
    const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

    return (
        <Fragment>
            <div>
                {months[new Date(days[0].dataPrevisao).getMonth()]},
                {new Date(days[0].dataPrevisao).getFullYear()}
            </div>
            <div className="tabs">
                {
                    days.map(day => (
                        <Tab
                            key={day.dataPrevisao} 
                            day={day} 
                            active={day.dataPrevisao === currentDay.dataPrevisao}
                            onClick={onClick}
                        />
                    ))
                }
            </div>
        </Fragment>
    );
};

export default Tabs;
