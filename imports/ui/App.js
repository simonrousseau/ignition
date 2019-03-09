import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Accounts } from 'meteor/accounts-base';
import ResolutionForm from './ResolutionForm';

console.log(Accounts)

const App = ({loading, resolutions}) => {
    // if data is still loading
    if(loading) return null;
    return (
        <div>
            <ResolutionForm/>
            <ul>
            {resolutions.map(resolution => (
                <li key={resolution._id}>{resolution.name}</li> 
            ))}
            </ul>
        </div>
    )
};


const resolutionsQuery = gql`
    query Resolutions {
        resolutions {
            _id
            name
        }
    }  
`;

export default graphql(resolutionsQuery, {
    props: ({data}) => ({...data})
})(App);