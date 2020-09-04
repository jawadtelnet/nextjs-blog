import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
export default function FisrtPost() {
    return (
        
        <Layout>
            <Head>
                <title>First page</title>
            </Head>
            <h1>First Page</h1>
                 
          <h2>
              <Link href="/"><a>Back to Home</a></Link>
            </h2>
          </Layout>
       
    )
}