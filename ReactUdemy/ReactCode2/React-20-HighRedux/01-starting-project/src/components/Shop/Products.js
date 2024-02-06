import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    id: "p1",
    price: 6,
    title: "My first Book",
    description: "The first book i ever wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "My Seconde Book",
    description: "The second book i ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            ></ProductItem>
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
