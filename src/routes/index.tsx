// src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () =>
    <div>
      <h1 className="text-2xl font-extrabold">Hello TanStack Start!</h1>
      <p>This is paragraph</p>
    </div>,
})