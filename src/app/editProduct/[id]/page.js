import EditProductForm from "../../../../components/EditProductForm/EditProductForm";

async function getProductById(id) {
  try {
    const res = await fetch(`/api/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditProduct({ params }) {
  const { id } = params;
  const { product } = await getProductById(id);
  const { Name, Bild, Größe, Saison } = product;

  return <EditProductForm id={id} Name={Name} Bild={Bild} Größe={Größe} Saison={Saison} />;
}