import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import ServicesForm from './features/services/ServicesForm';
import ServicesList from './features/services/ServicesList';
import ServicesFilter from './features/services/ServicesFilter';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Список услуг</h1>
                <ServicesForm />
                <ServicesFilter />
                <ServicesList />
            </div>
        </Provider>
    );
}

export default App;
