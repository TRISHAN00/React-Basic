import React, { Component } from 'react';
import ChildrenComponent from './ChildrenComponent';

class Children extends Component {
    render() {
        return (
            <div>
                <ChildrenComponent>
                    <h2>I am Parent of ChildrenComponent</h2>
                </ChildrenComponent>
            </div>
        );
    }
}

export default Children;