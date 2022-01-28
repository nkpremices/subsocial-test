import "../styles/globals.scss";
import "../styles/Home.module.scss";
import "../pages/components/Header/header.module.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}