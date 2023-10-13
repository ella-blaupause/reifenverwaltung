"use client"
import EditProductForm from "../../../../components/EditProductForm/EditProductForm";
import Heading from "../../../../components/Heading/Heading";

async function getProduct(id) {
  const res = await fetch(`/api/products/${id}`,  {
    cache: "no-store",
  });
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default function EditProduct({ params }) {
  const { id } = params;
  
  const product = getProduct(id)
  const {Name, Bild, Größe, Saison}=product;
  return (
    <>
        <Heading />
       <EditProductForm id={id} Name={Name} Bild={Bild} Größe={Größe} Saison={Saison} />;
    </>
  )
}