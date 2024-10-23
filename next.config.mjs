/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    experimental: {
        serverActions: {
            allowedOrigins: ["https://someonetomichael.com", "http://localhost:3002", "someonetomichael.com", "localhost:3002", '*']
        }
    },
    reactStrictMode: true,
};

export default nextConfig;
