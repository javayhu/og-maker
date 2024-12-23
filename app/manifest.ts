import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Free Open Graph Generator",
		short_name: "Free Open Graph Generator",
		description: "Generate beautiful Open Graph images with zero effort.",
		start_url: "/",
		display: "standalone",
	};
}
