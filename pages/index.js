export default function Home({ data }) {
    return (
      <div>
        <h1>Welcome to the Homepage</h1>
        <p>{data}</p>
      </div>
    );
  }
  
  export async function getStaticProps() {
    const data = await fetchData(); // Replace with your own data fetching logic
  
    return {
      props: {
        data,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  }
  