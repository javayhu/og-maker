import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Free OG Maker",
		short_name: "Free OG Maker",
		description: "Generate beautiful Open Graph images with zero effort.",
		start_url: "/",
		display: "standalone",
	};
}
