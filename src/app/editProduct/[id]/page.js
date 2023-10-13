
import EditProductForm from "../../../../components/EditProductForm/EditProductForm";

async function getProductById(id) {
    
    try {
        const res = await fetch(`/api/products/${id}`, {
          cache: "no-store",
        });
    
        if (!res.ok) {
          throw new Error("Failed to fetch topic");
        }
        console.log(res.json())
        return res.json();
      } catch (error) {
        console.log(error);
      }
};

export default async function EditProduct({ params }) {
  const { id } = params;
  const  product  = await getProductById(id);
  console.log("Product: " + product)

  return <EditProductForm id={id}  />;
}