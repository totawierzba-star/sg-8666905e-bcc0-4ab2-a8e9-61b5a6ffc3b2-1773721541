import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const FAVICON_VERSION = "20260319";

// SEO elements that can be used in _document.tsx (returns JSX without Head wrapper)
export function SEOElements({
  title = "Książki do zadań specjalnych",
  description = "Niezwykłe historie pomagające dzieciom i rodzicom w trudnych sytuacjach życiowych",
  image = "/og-image.png",
  url,
}: SEOProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={`/favicon.ico?v=${FAVICON_VERSION}`} sizes="any" />
      <link rel="icon" type="image/svg+xml" href={`/favicon.svg?v=${FAVICON_VERSION}`} />
      <link rel="shortcut icon" href={`/favicon.ico?v=${FAVICON_VERSION}`} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </>
  );
}

// SEO component for use in pages/_app.tsx or individual pages (uses next/head)
// Note: Flattened structure (no fragment) for better Next.js Head compatibility during hot reload
export function SEO({
  title = "Książki do zadań specjalnych",
  description = "Niezwykłe historie pomagające dzieciom i rodzicom w trudnych sytuacjach życiowych",
  image = "/og-image.png",
  url,
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={`/favicon.ico?v=${FAVICON_VERSION}`} sizes="any" />
      <link rel="icon" type="image/svg+xml" href={`/favicon.svg?v=${FAVICON_VERSION}`} />
      <link rel="shortcut icon" href={`/favicon.ico?v=${FAVICON_VERSION}`} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Head>
  );
}
