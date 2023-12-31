"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./ProductForm.module.css"

export default function AddTopic() {
  const [Name, setName] = useState("");
  const [Bild, setBild] = useState("");
  const [Größe, setGröße] = useState("");
  const [Saison, setSaison] = useState("");

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target[3].value)

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ Name, Bild, Größe, Saison }),
      });

      if (response.ok) {
        router.refresh();
        router.push("/admin");
      } else {
        throw new Error("Failed to create a product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.productForm}>
      <input
        onChange={(event) => setName(event.target.value)}
        value={Name}
        type="text"
        placeholder="Name"
      />

      <input
        onChange={(event) => setBild(event.target.value)}
        value={Bild}
        type="text"
        placeholder="Bild-URL"
      />
    
      <input
        onChange={(event) => setGröße(event.target.value)}
        value={Größe}
        type="text"
        placeholder="Größe"
      />
      
      <select onChange={(event) => setSaison(event.target.value)}>
        <option value={""}>--Saison--</option>
        <option value={"Sommer"}>Sommer</option>
        <option value={"Winter"}>Winter</option>
        <option value={"Ganzjahr"}>Ganzjahr</option>
      </select>

      <button
        className={styles.addButton}
        type="submit"
      >
        Einfügen
      </button>
    </form>
  );
}