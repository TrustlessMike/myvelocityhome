import { AreaPageView, areaMetadata, areas } from "@/components/area-page-view"

export const metadata = areaMetadata(areas["brighton-mi"])

export default function BrightonPage() {
  return <AreaPageView area={areas["brighton-mi"]} />
}
