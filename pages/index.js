import Collection from "../components/Collection";
import LatestProduct from "../components/LatestProduct";
import Category from "../components/Category";
import Hero from "../components/Hero";
export default function Home({ products }) {
  return (
    <>
      <Hero />
      <Collection />
      <LatestProduct {...products} />
      <Category {...products} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api`);
  const products = await res.json();

  return {
    props: {
      products,
      revalidate: 1,
    },
  };
};
