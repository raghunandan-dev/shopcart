import React from 'react';

export const NoMatch = ({location}) => {
    return(
        <div>
            <h3>
                No match found for {location.pathname} 
            </h3>
        </div>
    );
}
