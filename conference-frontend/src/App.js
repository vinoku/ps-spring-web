import React from "react";
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataIsLoaded: false
        };
    }

    componentDidMount() {
        fetch(
            "http://localhost:8080/api/v1/user/hello")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataIsLoaded: true
                });
            })
    }

    render() {
        const {DataIsLoaded, items} = this.state;
        if (!DataIsLoaded) return <div><h1> Please wait ... </h1></div>;

        return (
            <div className="App">
                <h1> Fetch data from an api in react </h1>
                <ol key={items.id}>
                    Full Name: {items.name}
                </ol>
            </div>
        );
    }
}

export default App;