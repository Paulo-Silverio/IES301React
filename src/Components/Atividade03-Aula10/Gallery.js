import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './Profile';

export default function Gallery() {
    return (
        <section>
            <h1>Amazing Scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}