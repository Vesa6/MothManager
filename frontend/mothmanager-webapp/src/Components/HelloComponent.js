import React, { useState, useEffect } from 'react';

function HelloComponent() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api/hello')
            .then(response => response.text())
            .then(message => {
                setMessage(message);
            });
    }, []);

    return (
        <div>
            <p>{message}</p>
        </div>
    );
}

export default HelloComponent;
