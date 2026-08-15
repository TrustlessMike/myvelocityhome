import type { ReactNode } from "react"

/** Site chrome is applied in the root layout. Keep this as a pass-through. */
export function MainLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
