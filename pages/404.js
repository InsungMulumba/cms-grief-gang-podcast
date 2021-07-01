import { GetStaticProps } from "next";


export default function Custom404() {
    return <h1>404 - Page Not Found</h1>
  }

  export function getStaticProps() {
    return {
      // returns the default 404 page with a status code of 404
    //   notFound: true
    }
  }