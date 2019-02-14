import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render} from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost'

import App from '../../ui/App';

const client = new ApolloClient({ uri: 'http://localhost:4000/' })

const ApolloApp = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

Meteor.startup(() => {
    render(<ApolloApp />, document.getElementById('app'))
});




