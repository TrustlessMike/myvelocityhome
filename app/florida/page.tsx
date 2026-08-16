import { AreaPageView, areaMetadata, areas } from "@/components/area-page-view"

export const metadata = areaMetadata(areas.florida)

export default function FloridaPage() {
  return <AreaPageView area={areas.florida} />
}
