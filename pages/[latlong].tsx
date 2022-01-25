import styles from '../styles/Home.module.css'


export async function getStaticProps({ params }: any) {
    const latlong = params.latlong;

    const data = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=${process.env.TICKETMASTER_API_KEY}&latlong=37.7749,-122.4194`)
    const eventDataAsJson = await data.json();

    return { props: { eventDataAsJson } }
}

export async function getStaticPaths() {
    return { paths: [], fallback: 'blocking' }
}

export default function Post({ eventDataAsJson }: any) {

    console.log(eventDataAsJson);

    return (
        <div>
            <div className={styles.grid}>
                {eventDataAsJson._embedded.events.map((event: any) => (
                                    <a key={event.id} href="https://nextjs.org/docs" className={styles.card}>
                                    <h2>{event.name} &rarr;</h2>
                                    <p>Find in-depth information about Next.js features and API.</p>
                                </a>    
                ))}
                </div>

        </div>
    );
}
