import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
}

export default function SEO({ title, description }: SEOProps) {
  const fullTitle = `${title} | VIERAS GYM Maputo`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Primary keywords for Maputo local SEO */}
      <meta name="keywords" content="Martial arts gym Maputo, Kickboxing Maputo, Boxing gym Maputo, Taekwondo training Maputo, Self defense classes Maputo, Calisthenics gym Maputo, Ginásio artes marciais Maputo, Boxe Maputo" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
