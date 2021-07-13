import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from "../OpenRoutes";
import  store  from "../redux/store/MakeStore";


function App() {
    
    return (
        <Provider store={store}>
            <div className="App">
                <Routes />
            </div>
        </Provider>
    );
}

export default App;

// // DOM element
if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}