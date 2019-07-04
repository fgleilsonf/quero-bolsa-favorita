import React from 'react';
import './styles/app.css';
import 'font-awesome/css/font-awesome.min.css';
import AddScholarships from './modules/AddScholarships';
import Home from './modules/Home';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            openModal: false
        }
    }

    openModal = () => {
        this.setState({
            openModal: !this.state.openModal
        });
    };

    render() {
        return (
            <div className="App">
                <Home openModal={this.openModal} />

                {
                    this.state.openModal && <AddScholarships closeModal={this.openModal} />
                }
            </div>
        );
    }
}

export default App;
