import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, my name is Christen and im better than Niels</p>
        <p>
          (this is a sample website - you'll be building a site like this on{''}
          <a href="https://nextjs.org/learn">your next.js tutorial</a>.)
        </p>
      </section>
      <section className={`$utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>blog</h2>
        <u1 className={utilStyles.list}>
          {allPostsData.map(function({ id, date, title}){
            return (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            )
          })}
        </u1>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  //Get external data from the file system, API, DB, etc.
  const allPostsData = getSortedPostsData()

  //The value of the `props` key will be
  //passed to the `Home` component
  return {
    props: {
      allPostsData
    }
  }
}

