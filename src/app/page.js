import ProductList from "../../components/ProductList/ProductList"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main>
      <h1 className={styles.heading}>Reifenverwaltung</h1>
      <ProductList />
    </main>
  )
}
