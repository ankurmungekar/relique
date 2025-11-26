import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical }) => {
  const baseUrl = 'https://www.reliqueconsultants.com';
  const canonicalUrl = `${baseUrl}${canonical}`;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;

