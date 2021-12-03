import Layout from '../components/Layout'
import styles from '../styles/Layout.module.css'

export default function about () {
  return (
    <div className={styles.container}>
      <Layout
        title="About | next.js"
        description="agregue la descripcion"
      >
        <h1>about</h1>
      </Layout>
    </div>
  )
}
