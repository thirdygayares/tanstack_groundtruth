import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import TanStackQueryDevtools from "../query/devtools";



export function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <head>

      <HeadContent />
    </head>

    <body suppressHydrationWarning>
    {children}

    {import.meta.env.DEV && (
      <TanStackDevtools
        config={{
          position: "bottom-right",
        }}
        plugins={[
          {
            name: "Tanstack Router",
            render: <TanStackRouterDevtoolsPanel />,
          },
          TanStackQueryDevtools,
        ]}
      />
    )}

    <Scripts />
    </body>
    </html>
  );
}