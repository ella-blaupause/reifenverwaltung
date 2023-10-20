"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./EditProductForm.module.css"

export default function EditProductForm({id, Name, Bild, Größe, Saison }) {
  const [newName, setNewName] = useState(Name);
  const [newBild, setNewBild] = useState(Bild);
  const [newGröße, setNewGröße] = useState(Größe);
  const [newSaison, setNewSaison] = useState(Saison);

  const router = useRouter();

  async function handleSubmit(event){
    event.preventDefault();

    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newName, newBild, newGröße, newSaison }),
      });

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      router.refresh();
      router.push("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.editProductForm}>
      <input
        onChange={(event) => setNewName(event.target.value)}
        value={newName}
        type="text"
        placeholder="Name"
      />
      
      <input
        onChange={(event) => setNewBild(event.target.value)}
        value={newBild}
        type="text"
        placeholder="Bild-URL"
      />
      
      <input
        onChange={(event) => setNewGröße(event.target.value)}
        value={newGröße}
        type="text"
        placeholder="Größe"
      />
      
      <input
        onChange={(event) => setNewSaison(event.target.value)}
        value={newSaison}
        type="text"
        placeholder="Saison"
      />
      
      <button className={styles.editButton}>
        Aktualisieren
      </button>
    </form>
  );
}
