import { useRouter } from "next/navigation";
import { FiTrash2 } from "react-icons/fi";
import styles from "./DeleteButton.module.css"

export default function DeleteButton({ id }) {
    const router=useRouter();

    async function deleteProduct(){
        const res = await fetch(`/api/products?id=${id}`, {
            method: "DELETE",
          });
    
          if (res.ok) {
            router.refresh();
          }
    }
    return(
        <button type="button" onClick={deleteProduct} className={styles.deleteButton}><FiTrash2 size={24} /></button>
    )
}