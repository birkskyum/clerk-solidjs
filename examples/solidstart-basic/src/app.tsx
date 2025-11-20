import { Router, Route } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { ClerkProvider } from "clerk-solidjs-solidstart/start";
import { Suspense } from "solid-js/web";
import type { RouteSectionProps } from "@solidjs/router";

import "./app.css";

function RootLayout(props: RouteSectionProps) {
  return (
    <ClerkProvider
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
    >
      <Suspense>{props.children}</Suspense>
    </ClerkProvider>
  );
}

export default function App() {
  return (
    <Router>
      <Route path="/" component={RootLayout}>
        <FileRoutes />
      </Route>
    </Router>
  );
}
