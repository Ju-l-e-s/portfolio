import withNextIntl from "next-intl/plugin";

const withIntl = withNextIntl("./src/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // viewTransitions: true,
    },
};

export default withIntl(nextConfig);
