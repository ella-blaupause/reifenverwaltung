import ProductList from "../../../components/ProductList/ProductList" 
import styles from "./customer.module.css"

export default function Customor() {
  return (
    <main>
      <h1 className={styles.heading}>Reifenverwaltung</h1>
      <ProductList />
    </main>
  )
}
