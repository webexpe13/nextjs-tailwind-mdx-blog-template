import { iMetaData } from "../interfaces/common";

export const HOME_OG_IMAGE_URL =
  "https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg";

export const WEBSITE_NAME = "Blog";
export const WEBSITE_URL = "blog.com";
export const WEBSITE_TWITTER_HANDLE = "@twitter";
export const DEFAULT_OG_IMAGE =
  "https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg";

export const DEFAULT_SEO: iMetaData = {
  title: "Blog Website | Made with Next JS",
  description: "A simple blog website made using NextJs, TailwindCss and MDX",
  keywords:
    "blog teamplate, blog, template, nextjs, tailwind css, markdown, mdx, tailwindcss, nextjs template",
  author: `Rupali Yadav, Mayur Nalwala`,
  twitterHandle: WEBSITE_TWITTER_HANDLE,
  ogImage: DEFAULT_OG_IMAGE,
};

export const ALL_ARTICLES_PAGE_SEO: iMetaData = {
  ...DEFAULT_SEO,
  title: "All Articles",
};

export const TERMS_PAGE_SEO: iMetaData = {
  ...DEFAULT_SEO,
  title: "Terms and conditions",
  description: `These terms and conditions outline the rules and regulations for the use of Website, located at ${WEBSITE_URL}.`,
};

export const PRIVACY_PAGE_SEO: iMetaData = {
  ...DEFAULT_SEO,
  title: "Privacy Policy",
  description:
    "This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in website.",
};
