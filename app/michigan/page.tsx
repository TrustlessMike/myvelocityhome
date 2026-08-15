import { AreaPageView, areaMetadata, areas } from "@/components/area-page-view"

export const metadata = areaMetadata(areas.michigan)

export default function MichiganPage() {
  return <AreaPageView area={areas.michigan} />
}
