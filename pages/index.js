export default function Home({ data }) {
    return (
      <div>
        <h1>Welcome to the Homepage</h1>
        <p>{data}</p>
      </div>
    );
  }
  
  export async function getStaticProps() {
    // Replace with your data fetching logic
    const data = await fetch('https://newpersonalpage-git-main-kimiwa-sadats-projects.vercel.app').then(res => res.json());
  
    return {
      props: {
        data,
      },
      revalidate: 60, // Revalidate the page every 60 seconds
    };
  }
  