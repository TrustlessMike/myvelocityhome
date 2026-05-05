import { getCloudflareContext } from "@opennextjs/cloudflare"
import { NextResponse } from "next/server"

type R2ObjectBody = {
  body: ReadableStream
  httpMetadata?: { contentType?: string; contentDisposition?: string }
}

type R2BucketBinding = {
  get(key: string): Promise<R2ObjectBody | null>
}

type CloudflareEnv = {
  MORTGAGE_PDFS?: R2BucketBinding
}

export const dynamic = "force-dynamic"

export async function GET(_request: Request, { params }: { params: Promise<{ key: string }> }) {
  const { key } = await params
  if (!/^mortgage-calculation-\d+\.pdf$/.test(key)) {
    return NextResponse.json({ error: "Invalid PDF key" }, { status: 400 })
  }

  const { env } = (await getCloudflareContext({ async: true })) as { env: CloudflareEnv }
  const object = await env.MORTGAGE_PDFS?.get(key)
  if (!object) {
    return NextResponse.json({ error: "PDF not found" }, { status: 404 })
  }

  return new Response(object.body, {
    headers: {
      "content-type": object.httpMetadata?.contentType || "application/pdf",
      "content-disposition": object.httpMetadata?.contentDisposition || `inline; filename="${key}"`,
      "cache-control": "public, max-age=3600",
    },
  })
}
