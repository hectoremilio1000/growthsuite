import Home from '../index';

export async function getStaticPaths() {
  return { paths: [], fallback: false };
}

export async function getStaticProps() {
  return { props: {} };
}

export default Home;
