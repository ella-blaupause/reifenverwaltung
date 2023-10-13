"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";


export default function AddTopic() {
  const [Name, setName] = useState("");
  const [Bild, setBild] = useState("");
  const [Größe, setGröße] = useState("");
  const [Saison, setSaison] = useState("");

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

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
    <form onSubmit={handleSubmit}>
      <input
        onChange={(event) => setName(event.target.value)}
        value={Name}
        type="text"
        placeholder="Name"
      />
      <br />
      <input
        onChange={(event) => setBild(event.target.value)}
        value={Bild}
        type="text"
        placeholder="Bild-URL"
      />
      <br />
      <input
        onChange={(event) => setGröße(event.target.value)}
        value={Größe}
        type="text"
        placeholder="Größe"
      />
      <br />
      <input
        onChange={(event) => setSaison(event.target.value)}
        value={Saison}
        type="text"
        placeholder="Saison"
      />
      <br />
      <button
        type="submit"
      >
        Einfügen
      </button>
    </form>
  );
}
