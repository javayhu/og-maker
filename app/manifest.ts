import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Free OG Generator",
		short_name: "Free OG Generator",
		description: "Generate beautiful Open Graph images with zero effort.",
		start_url: "/",
		display: "standalone",
	};
}
