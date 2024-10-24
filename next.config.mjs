import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  pageExtensions: ['tsx', 'mdx'],
};

const withMDX = createMDX({

})

export default withMDX(nextConfig);
