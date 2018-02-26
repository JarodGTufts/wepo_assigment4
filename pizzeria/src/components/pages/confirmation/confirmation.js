import React from 'react';


// This page renders the confirmation text, and shouldn't have
// to do anything more complicated than displaying some kind of
// positive text
class Confirmation extends React.Component {
    
    render () {
        return (
            <div>
                <h2 className="my-4">Thanks for your business!</h2>
                <h4>Your order is headed into the oven as we speak!</h4>
            </div>
        )
    }
}



export default Confirmation;