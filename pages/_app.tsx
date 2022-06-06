// SPDX-FileCopyrightText: 2022 Vercel, Inc.
// SPDX-License-Identifier: MIT

import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
