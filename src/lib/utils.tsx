import { DEFAULT_OG_IMAGE, WEBSITE_NAME, WEBSITE_URL } from "./constants";

// env
const env = process.env.NODE_ENV;
export const IS_DEV_MODE = env === "development" ? true : false;

export const CURRENT_YEAR = new Date().getFullYear();

// origin
export const origin =
  typeof window !== "undefined" && window.location.origin
    ? window.location.origin
    : "";

export const imgLoader = ({ src, width, quality }: any) => {
  return `${origin}${src}?w=${width}&q=${quality || 75}`;
};

/**
 * Removes /pages from article path
 * @param path
 * @returns
 */
export const transformPath = (path = ""): string => {
  return path.replace("/pages", "").replace(".tsx", "");
};

/**
 * Removes /public from images path
 * @param path
 * @returns string
 */
export const transformImagePaths = (path = ""): string => {
  return path.replace("/public", "");
};

/**
 * Formats date
 * @param dateString
 * @returns string
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(date);
};

/**
 * Sort articles by date
 */
export const sortPostsByDate = (posts: any[]) => {
  return posts.sort((a, b) =>
    new Date(a.metaData.date) > new Date(b.metaData.date) ? -1 : 1
  );
};

/**
 * Method to create SEO config
 * @param metaData
 * @param router
 * @returns
 */
export const createSeoConfig = (metaData: any, router: any) => {
  const LOCAL_URL = IS_DEV_MODE ? origin : WEBSITE_URL ? WEBSITE_URL : origin;
  const LOCAL_PATH = router.asPath;
  const meta_description = metaData?.excerpt;
  const keywords = metaData?.keywords;
  const ogUrl = `${LOCAL_URL}${LOCAL_PATH}`;

  const ogImage = metaData?.ogImage
    ? `${LOCAL_URL}${transformImagePaths(metaData?.ogImage)}`
    : metaData?.thumbnail
    ? `${LOCAL_URL}${transformImagePaths(metaData?.thumbnail)}`
    : `${LOCAL_URL}${transformImagePaths(DEFAULT_OG_IMAGE)}`;

  const twitterHandle = metaData?.twitterHandle;
  const author = metaData?.author;

  const title =
    router.asPath !== "/"
      ? `${metaData?.title} | ${WEBSITE_NAME}`
      : `${metaData?.title}`;

  const seoConfig = {
    title: title,
    description: meta_description,
    additionalMetaTags: [
      {
        property: "keywords",
        content: keywords,
      },
      {
        property: "al:web:url",
        content: ogUrl,
      },
      {
        name: "robots",
        content: "max-image-preview:large",
      },
      {
        name: "google",
        content: "notranslate",
      },
    ],
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: ogUrl,
      site_name: WEBSITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      handle: twitterHandle,
      site: ogUrl,
      cardType: "summary_large_image",
    },
  };

  const jsonLdConfig = {
    url: ogUrl,
    title: title,
    datePublished: metaData?.date,
    dateModified: metaData?.date,
    author: [
      {
        "@type": "Person",
        name: author.name,
        url: author.picture,
      },
    ],
    authorName: author.name,
    publisherName: WEBSITE_NAME,
    publisherLogo: `${LOCAL_URL}${transformImagePaths("/public/logo.png")}`,
    images: [ogImage],
    description: meta_description,
    isAccessibleForFree: true,
  };
  return { seoConfig, jsonLdConfig };
};
