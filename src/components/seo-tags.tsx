import { createSeoConfig } from "../lib/utils";
import { NextSeo, ArticleJsonLd } from "next-seo";
import { useRouter } from "next/router";

const SEO = ({
  metaData,
  showJsonLD = false,
}: {
  metaData: any;
  showJsonLD?: boolean;
}) => {
  const router = useRouter();
  const SEO_CONFIG = createSeoConfig(metaData, router);
  const articleSEOConfig = SEO_CONFIG.seoConfig;
  const articleJsonLdConfig = SEO_CONFIG.jsonLdConfig;
  return (
    <>
      <NextSeo {...articleSEOConfig} />
      {showJsonLD ? <ArticleJsonLd {...articleJsonLdConfig} /> : <></>}
    </>
  );
};

export default SEO;
