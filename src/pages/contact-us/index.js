import Head from 'next/head';
import { Layout } from '../../../assets/components/layout';

export default function ContactUs() {
  return (
    <Layout>
      <Head>
        <title>Contact the Fate SRD</title>
      </Head>
      <main className="main-content-wrapper">
        <h1 className="page-title">Contact Us</h1>
        <iframe
          title="Contact Us"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfqNSI0EYTYqSwyNv1MJxowYxY0Th49XP6Ps7VESQyFbR6uyA/viewform?embedded=true"
          width="640"
          height="640"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </main>
    </Layout>
  );
}
