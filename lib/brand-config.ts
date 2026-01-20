/**
 * Brand Configuration for Mihraab Foundation
 * This file contains the primary brand colors, typography settings, 
 * and references to stored branding assets.
 */

export const BRAND_COLORS = {
    primary: {
        base: "#6f8946", // Mihraab Green
        rgb: "111, 137, 70",
        cmyk: "60, 30, 90, 10",
    },
    secondary: {
        base: "#00839A", // Brand Teal/Blue
        rgb: "0, 131, 154",
        cmyk: "85, 35, 32, 3",
    },
    accent: {
        red: "#A32F2F", // Brand Red
        rgb: "163, 47, 47",
        gold: "#D4AF37", // Metallic Gold (Keep as legacy/accent)
    },
    neutral: {
        white: "#FFFFFF",
        cream: "#fffef2", // Brand Cream
        creamRGB: "255, 254, 249",
        black: "#231f20", // Brand Black from Logos
    }
};

export const BRAND_ASSETS = {
    directory: "/branding",
    docs: {
        brandGuidelines: "/branding/docs/brand-guidelines.pdf",
        sourceFiles: "/branding/images/01_Logos/00_Masterfile_Logos.ai",
        swatches: "/branding/docs/05_Colour Swatches/Mihraab_Colours.ase",
    },
    fonts: {
        primary: "Almarai, sans-serif",
        secondary: "Cormorant, serif",
        directory: "/branding/fonts",
    },
    images: {
        logo: "/branding/images/01_Logos/One lined Word Mark/One Line Word Mark Colour.svg",
        logoWhite: "/branding/images/01_Logos/One lined Word Mark/One Line Word Mark White.svg",
        directory: "/branding/images",
    }
};

export const TYPOGRAPHY = {
    heading: "Cormorant",
    body: "Almarai",
};
