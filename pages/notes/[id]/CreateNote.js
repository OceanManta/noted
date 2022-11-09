'use client';

// export default function Test() {
//   return (
//     <div>
//       <h1>Create Note</h1>
//     </div>
//   );
// }

import { useState } from 'react';
import rd from 'react-dom';
import { useRouter } from 'next/navigation';
import styles from '../../../styles/Home.module.css'
import { render } from 'react-dom';

export default function CreateNote() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const router = useRouter();

    const create = async () => {
        try {
            // const db = new PocketBase('http://127.0.0.1:8090');
            // await db.records.create('notes', {
            //   title,
            //   content,
            // });
            await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    content,
                }),
            });
            setContent('');
            setTitle('');
            router.refresh();



        } catch (e) {
            console.log('Failed to execute');
        }
    }



    return (
        <div className={styles.card}> <form onSubmit={create}>
            <h3>Create a new Note</h3>
            <input className={styles.card}
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea className={styles.card}
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">
                Create note
            </button>
        </form></div >
    );

}

