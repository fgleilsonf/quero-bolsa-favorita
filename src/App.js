import React from 'react';
import './styles/app.css';
import 'font-awesome/css/font-awesome.min.css';
import AddScholarships from './modules/AddScholarships';
import Home from './modules/Home';
import ScreenModal from './components/ScreenModal';

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

                <ScreenModal visible={this.state.openModal} onPressClose={this.openModal}>
                    <AddScholarships closeModal={this.openModal} />
                </ScreenModal>
            </div>
        );
    }
}

export default App;
