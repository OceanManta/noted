import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import CreateNote from './[id]/CreateNote';

export const getStaticProps = async () => {
    //in this method this code does not run in the browser, it runs server-side

    // const db = new PocketBase('http://127.0.0.1:8090');
    // const result = await db.records.getList('notes');
    const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30', { cache: 'no-store' });
    const data = await res.json();
    return { props: { notes: data?.items } }

}

const Notes = ({ notes }) => {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Notes
                </h1>
                <div className={styles.grid}>
                    {notes.map((note) => {
                        return <Note key={note.id} note={note} />;
                    })}
                    <CreateNote />
                </div>

            </div>
        </main>
    );
}

export default Notes;

function Note({ note }) {
    const { id, title, content, created } = note || {};

    return (
        <Link href={`/notes/${id}`}>
            <div className={styles.card}>
                <h2>{title}</h2>
                <h5>{content}</h5>
                <p>{created}</p>
            </div>
        </Link>
    );
}

// export default function Notes() {

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Lates Notes</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Well Noted
//         </h1>

//         <p className={styles.description}>
//           Get started by adding public notes <a href="/notes">
//             here</a>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h2>Add Note &rarr;</h2>
//             <p>Got something to say? Well Noted</p>
//           </a>

//           <a href="/notes" className={styles.card}>
//             <h2>Public Notes &rarr;</h2>
//             <p>l wonder what people have been noting well</p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by Panda
//         </a>
//       </footer>
//     </div>
//   )
// }