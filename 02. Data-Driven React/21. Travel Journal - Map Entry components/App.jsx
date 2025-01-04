import Header from "./components/Header"
import Entry from "./components/Entry"
import travelData from './data.js'

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

export default function App() {

    const travelComponent = travelData.map((travel) => {
        return <Entry
            img={{
                src: travel.img.src,
                alt: travel.img.alt
            }}
            //Se puede pasar el objeto directamente img={travel.img}
            key={travel.id}
            title={travel.title}
            country={travel.country}
            googleMapsLink={travel.googleMapsLink}
            dates={travel.dates}
            text={travel.text}
        />
    })


    return (
        <>
            <Header />
            <main className="container">
                {travelComponent}
            </main>
        </>
    )
}