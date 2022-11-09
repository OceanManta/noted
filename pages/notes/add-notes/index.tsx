import styles from '../../../styles/Home.module.css'
import CreateNote from '../[id]/CreateNote'


export default function AddNote() {

    return <main className={styles.main}>
        <div>
            <h1 className={styles.title}> Add a Note</h1>
            <CreateNote />

            <a href='../notes'>Show notes</a>
        </div>
    </main>
} 