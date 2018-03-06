import React from 'react';

// This about page is copied from a collection of Portland, Oregon pizzeria
// "About" pages
class About extends React.Component {
    render () {

        return (
            <div id="about_info">
                <p className='mt-2 h4'>Welcome to Pizzerio Uno - a family-friendly neighborhood joint</p> 
                <p>We are obsessively devoted to the craft of pizza making. Offering top-notch
                thin-crust Neapolitan pies, fresh local salads, craft beer and 
                excellent wines in a comfortable and welcoming atmosphere.</p> 
                <p>Bring your kids, bring your pals, bring your date, and bring your 
                grandparents for a handmade pie and a good old time.</p>
                <p>The warm, airy space features gigantic Douglas Fir beams, big 
                sliding glass windows, an open kitchen with the big igloo-shaped 
                oven in the middle of the pizzeria, and tables and bar built from 
                salvaged wood (old-growth Douglas Fir).</p>
                <p>Pizzerio Uno offers authentic, New York style pizza featuring dough, 
                sauces, and cheeses made in-house by classically trained chef and owner 
                Gordon Ramsay.  Premium toppings include locally-sourced vegetables and
                house-made meats like brisket and sausages.  Pineapple is not permitted
                on our pizza, although it’s best to ask Gordon for the reason in person.</p>

                <p className="h4">It’s just pizza</p><p> - this has been our, in house motto, for many years.</p> 
                <p>We know pizza is important to many people, including us, otherwise we 
                wouldn’t be working this hard to try to make the best pizza we can. We 
                know we will never be able to meet some peoples expectations when they 
                walk thru our doors but we do try.</p>
                <p>We have our off nights too, when the 
                dough just isn’t reacting the way we expect, due to more factors than 
                you know. The cheese is saltier, not as salty, drier, or wetter than 
                it’s supposed to be. We woke up on the wrong side of the bed, or a guest
                just treated us like dirt & we can’t shake it off… But in the end… 
                It's just pizza!</p>
            </div>
        )
    }
}



export default About;