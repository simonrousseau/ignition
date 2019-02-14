import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render} from 'react-dom';

const App = () => <h1>3,2,1...Go!</h1>;

Meteor.startup(() => {
    render(<App />, document.getElementById('app'))
})
