import Link from 'next/link'
import Table from '../../components/Table'
import styles from '../../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <form>
                <p>入力フォーム</p>
                <input type="text"></input>
                <button>送信</button>
            </form>
            <Link href="/">home</Link><br />
            <Link href="/test">test</Link>
            <Table props="Table"></Table>
        </div>
    )
}