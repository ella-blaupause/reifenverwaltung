"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProductForm({ Name, Bild, Größe, Saison }) {
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
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(event) => setNewName(event.target.value)}
        value={newName}
        type="text"
        placeholder="Name"
      />
      <br />
      <input
        onChange={(event) => setNewBild(event.target.value)}
        value={newBild}
        type="text"
        placeholder="Bild-URL"
      />
      <br />
      <input
        onChange={(event) => setNewGröße(event.target.value)}
        value={newGröße}
        type="text"
        placeholder="Größe"
      />
      <br />
      <input
        onChange={(event) => setNewSaison(event.target.value)}
        value={newSaison}
        type="text"
        placeholder="Saison"
      />
      <br />
      <button>
        Produkt aktualisieren
      </button>
    </form>
  );
}
