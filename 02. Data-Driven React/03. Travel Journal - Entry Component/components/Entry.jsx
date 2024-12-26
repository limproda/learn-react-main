/**
 * Challenge: Build out the Entry component and render 1 instance of it
 * to the App
 * 
 * For now, just hard-code in the data, which you can find in
 * japan.md so you don't have to type it all out manually :)
 * 
 * Notes:
 * – Only render 1 instance of this Entry component for now
 * – I've pulled in marker.png for the little map marker icon
 *   that goes next to the location name
 * – The main purpose of this challenge is to show you where our limitations
 *   currently are, so don't worry about the fact that you're hard-coding all
 *   this data into the component.
 */

export default function Entry(){
    return (
        <article className="journal-entry">
            <img className="image-entry" src="https://scrimba.com/links/travel-journal-japan-image-url" alt="Mount fuji"/>
            <div>
            <img src="../images/marker.png" alt="Marker icon"></img>
            <p>JAPAN</p>
            <a href="#">View on Google Maps</a>
            <h2>Mount Fuji</h2>
            <p>12 Jan, 2021 - 24 Jan, 2021</p>
            <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
            
        </article>
    )
}