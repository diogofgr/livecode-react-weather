import React from 'react';
import Graph from './Graph';
import Tabs from './Tabs';
import Day from './Day';

class App extends React.Component {
    state = {
        days: [],
        country: '',
        isLoading: true,
        currentDay: {},
    }

    componentDidMount() {
        this.loadWeather();
    }

    loadWeather = () => {
        fetch('https://cors-anywhere.herokuapp.com/https://api.ipma.pt/public/opendata/weatherforecast/daily/1110600.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    country: data.country,
                    days: data.data,
                    isLoading: false,
                    currentDay: data.data[0],
                });
            });
    }

    handleChangeDay = day => this.setState({ currentDay: day });

    render() {
        const {
            isLoading,
            days,
            country,
            currentDay
        } = this.state;

        if (isLoading) return <div>Loading...</div>;

        return (
            <div>
                <h1>Weather in Lisbon, {country}</h1>
                <Graph days={days} onClick={this.handleChangeDay}/>
                <div>
                    <Tabs days={days} currentDay={currentDay} onClick={this.handleChangeDay} />
                    <Day day={currentDay} />
                </div>
            </div>
        );
    }
}

export default App;
