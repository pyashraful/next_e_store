import Product from "@model/product";

export default function SearchResult({ products }) {
  console.log(
    "🚀 ~ file: [[...slug]].js ~ line 4 ~ SearchResult ~ products",
    products
  );
  return <h1>hi from SearchResult</h1>;
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slag } = params;

  const data = await Product.find({
    $or: [
      {
        title: {
          $regex: `${slag}`,
          $options: "i",
        },
      },
      {
        brand: {
          $regex: `${slag}`,
          $options: "i",
        },
      },
    ],
  });

  const products = JSON.parse(JSON.stringify(data));

  return {
    props: {
      products,
    },
  };
}
