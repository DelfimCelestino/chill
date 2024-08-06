/** @type {import('next').NextConfig} */
const nextConfig = {
     httpAgentOptions: {
          keepAlive: true,
     },
     images: {
          remotePatterns: [
               {
                    protocol: 'https',
                    hostname: 'images.unsplash.com',
               },
               {
                    protocol: 'https',
                    hostname: 'github.com',
               },
               {
                    protocol: 'https',
                    hostname: 'assets.aceternity.com',
               },
          ],
     },
};

export default nextConfig;
