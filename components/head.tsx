import Head from 'next/head'

interface HeadComponentProps {
  title?: string;
  description?: string;
}

export default function HeadComponent({ 
  title = "Technoblog",
  description = "The Technology Blog"
}: HeadComponentProps) {
  const fullTitle = `${title} | Technoblog`;
  
  return (
    <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}