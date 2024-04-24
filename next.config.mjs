import { extendTheme, withPigment } from "@pigment-css/nextjs-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withPigment(nextConfig, {
  theme: extendTheme({
    colors: {
      brand: "blue",
    },
  }),
});
