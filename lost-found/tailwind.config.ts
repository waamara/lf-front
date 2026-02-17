import type { Config } from "tailwindcss";

const config: Config = {
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                "primary-hover": "var(--color-primary-hover)",
                "on-primary": "var(--color-on-primary)",

                "app-bg": "var(--color-app-bg)",
                "card-bg": "var(--color-card-bg)",
                "input-bg": "var(--color-input-bg)",
                "muted-bg": "var(--color-muted-bg)",

                heading: "var(--color-heading)",
                body: "var(--color-body)",
                placeholder: "var(--color-placeholder)",
                border: "var(--color-border)",
                muted: "var(--color-muted-text)",
            },
            boxShadow: {
                soft: "var(--shadow-soft)",
            },
        },
    },
};

export default config;
