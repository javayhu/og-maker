import { z } from "zod"

import { absoluteUrl } from "@/lib/url"

import { backgroundSchema } from "../elements/background"
import { canvasSchema } from "../elements/canvas"
import { imageSchema } from "../elements/image"
import { textSchema } from "../elements/text"

export const imageRightTemplateSchema = z.object({
  name: z.literal("og:image-right"),
  params: z.object({
    tag: textSchema.merge(
      z.object({
        // apply defaults
        fontSize: textSchema.shape.fontSize.default(20),
      })
    ),
    title: textSchema.merge(
      z.object({
        // apply defaults
        fontWeight: textSchema.shape.fontWeight.default(700),
        fontSize: textSchema.shape.fontSize.default(60),
      })
    ),
    logo: imageSchema,
    image: imageSchema,
  }),
  background: backgroundSchema,
  canvas: canvasSchema,
})
export type ImageRightTemplate = z.infer<typeof imageRightTemplateSchema>

export const imageRightTemplateDefault: ImageRightTemplate = {
  name: "og:image-right",
  params: {
    tag: {
      text: "mkdirs.com",
      fontFamily: "inter",
      fontWeight: 400,
      fontSize: 20,
      color: "#FFFFFF",
    },
    title: {
      text: "Launch profitable directory websites in minutes",
      fontFamily: "inter",
      fontWeight: 700,
      fontSize: 60,
      color: "#FFFFFF",
    },
    logo: {
      url: absoluteUrl("/samples/logos/mkdirs-logo.png"),
    },
    image: {
      url: absoluteUrl("/samples/mkdirs.png"),
    },
  },
  background: {
    type: "linear-gradient",
    direction: "to top right",
    colorStops: ["rgb(17, 24, 39)", "rgb(75, 85, 99)"],
    noise: 0.15,
    gridOverlay: {
      pattern: "grid",
      color: "#f9fafb",
      opacity: 0.4,
      blurRadius: 20,
    },
  },
  canvas: {
    width: 1200,
    height: 630,
  },
}
