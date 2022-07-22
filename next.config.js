/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    distDir: "build",
    /* serverRuntimeConfig: {
        SENDGRID_API_KEY:
            "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",
        EMAIL: "authentication.email.4l3554@gmail.com",
    }, */
};

module.exports = nextConfig;
