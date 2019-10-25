import React, { useState, useEffect } from 'react';
import SVC from './services/energy-usage';
import Chart from './components/Chart/Chart';
import './app.scss';

const App = () => {
    const [usage, setUsage] = useState([])

    useEffect(() => {
        if (!usage.length) {
            SVC.get().then((data) => {
                setUsage(data.map((data) => {
                    return data.toJSON();
                }));
            });
        }
    })

    return <React.Fragment>
        <h1>UK Energy Mix</h1>
        <Chart data={usage} />
    </React.Fragment >;
}

export {
    App
}