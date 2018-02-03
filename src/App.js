import React from 'react';
import { connect } from 'react-redux';
import { changeLocation,getData } from './actions';

class App extends React.Component {
    fetchData = (evt) => {
        evt.preventDefault();
        console.log('fetch data for:', this.props.location);
        var location = encodeURIComponent(this.props.location);
        var urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
        var urlSuffix = '&APPID=e8c2b8583c5345b18db82c72b96fb8de&units=metric';
        var url = urlPrefix + location + urlSuffix;
        this.props.dispatch(getData(url));
    };
    changeLocation = (evt) => {
        this.props.dispatch(changeLocation(evt.target.value));
    };

    render() {
        var currentTemp = 'not loaded yet';
        if (this.props.data.data.list) {
            currentTemp = this.props.data.data.list[0].main.temp;
        }
        return (
            <div>
                <h1>Weather</h1>
                <form onSubmit={this.fetchData}>
                    <label>I want to know the weather for
                        <input
                            placeholder={"City, Country"}
                            type="text"
                            value={this.props.location}
                            onChange={this.changeLocation} />
                    </label>
                    <br />
                    <input type="submit" />
                </form>
                <div className="wrapper">
                    <p className="temp-wrapper">
                        <span className="temp">{currentTemp}</span>
                        <span className="temp-symbol">°C</span>
                    </p>
                </div>
            </div>
        );
    }
}
export default connect((state) => { // map statetoprops
    return {
        location: state.location,
        data: state.data
    };
})(App);
