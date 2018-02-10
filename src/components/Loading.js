// @flow
import React from 'react';

export default function Loading() {
    return (
        <div className="vertically-centered">
            <div className="sk-three-bounce">
                <div className="sk-child sk-bounce1" />
                <div className="sk-child sk-bounce2" />
                <div className="sk-child sk-bounce3" />
            </div>
        </div>
    );
}
