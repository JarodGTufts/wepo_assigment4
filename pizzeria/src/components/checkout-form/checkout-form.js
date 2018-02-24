import React from 'react';



class CheckoutForm extends React.Component {
    render () {
        // TODO: Make this check a prop
        var inputs = [];
        inputs.push(
            <div id="basics" key="standard">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your full name" required />
                
                <label htmlFor="telephone">Telephone number</label>
                <input type="number" className="form-control" id="telephone" placeholder="The digits needed to contact you" required />
            </div>            
        );

        if (this.props.method == 'delivery') {
            inputs.push(
                <div id="deliver_inputs" key="delivery_specifics">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Where should we send this?" required />
                    
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control" id="city" placeholder="What city are you in?" required />
                                
                    <label htmlFor="postal">Postal code</label>
                    <input type="number" className="form-control" id="postal" placeholder="ZIP" required />

                </div>
            );
        }

        return (
            <form>
                <div className="form-group">

                    {inputs}

                </div>
                <button className="btn btn-primary" type="submit">Submit order</button>

            </form>
        )
        
    }
}



export default CheckoutForm;
