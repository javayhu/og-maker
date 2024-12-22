import "./globals.css";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TemplateStoreProvider } from "@/providers/template-store-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/sonner";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileNav } from "@/components/nav/mobile-nav";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
	metadataBase: new URL("https://og.indiehub.best"),
	title: "Free OG Generator",
	description: "Generate beautiful Open Graph images with zero effort, powered by IndieHub, the best all-in-one directory for indie makers.",
	openGraph: {
		title: "indiehub",
		description: "Generate beautiful Open Graph images with zero effort.",
		type: "website",
		url: "https://og.indiehub.best",
		siteName: "Free OG Generator",
		images: [
			{
				url: "https://og.indiehub.best/og.png",
				width: 1200,
				height: 630,
				alt: "Free OG Generator - Generate beautiful Open Graph images with zero effort.",
			},
		],
		locale: "en_US",
	},
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${GeistSans.variable} ${GeistMono.variable}`}
			suppressHydrationWarning
		>
			<body className="min-h-screen bg-background font-sans antialiased">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
						<div className="flex items-center space-x-4">
							<div>
								<Link href="/">
									<Image
										className="block dark:hidden"
										src="/logo.png"
										alt="Free OG Generator Logo"
										width={36}
										height={36}
									/>
								</Link>

								<Link href="/">
									<Image
										className="hidden dark:block"
										src="/logo.png"
										alt="Free OG Generator Logo"
										width={36}
										height={36}
									/>
								</Link>
							</div>

							<span className="text font-semibold">Free OG Generator</span>
						</div>

						<div className="hidden space-x-2 sm:flex">
							{/* <Button variant="link">
								<Link href="https://indiehub.best" target="_blank">
									IndieHub
								</Link>
							</Button>

							<Button variant="link">
								<Link href="https://mkdirs.com" target="_blank">
									Mkdirs
								</Link>
							</Button> */}

							<ModeToggle />
						</div>

						{/* Mobile navigation */}
						<div className="flex space-x-2 sm:hidden">
							<ModeToggle />

							<MobileNav />
						</div>
					</nav>

					<main className="mx-auto min-h-[calc(100dvh-84px)] max-w-7xl px-2 py-6 sm:px-6 lg:px-8">
						<TemplateStoreProvider>{children}</TemplateStoreProvider>
					</main>

					<Separator />

					<footer className="mx-auto max-w-7xl px-2 py-6 sm:px-6 lg:px-8">
						<div className="flex justify-between">
							<div className="flex items-center space-x-2">
								<div className="font-mono font-semibold">
									<Link href="https://og.indiehub.best" target="_blank">
										Free OG Generator
									</Link>
								</div>

								<div>
									{/* <Button variant="link" asChild>
                    <Link href="/">Home</Link>
                  </Button> */}

									<Button variant="link" asChild>
										<Link href="https://indiehub.best" target="_blank">
											IndieHub - The best all-in-one directory for indie makers
										</Link>
									</Button>

									<Button variant="link" asChild>
										<Link href="https://mkdirs.com" target="_blank">
											Mkdirs - The best directory boilerplate
										</Link>
									</Button>
								</div>
							</div>

							{/* only shows on Desktop */}
							<div className="hidden items-center gap-x-2 md:inline-flex">
								<svg
									className="h-2 w-2 fill-green-400"
									viewBox="0 0 6 6"
									aria-hidden="true"
								>
									<circle cx={3} cy={3} r={3} />
								</svg>
								<span className="font-mono text-sm font-medium">
									Operational
								</span>
							</div>
						</div>
					</footer>
				</ThemeProvider>

				<Toaster />

				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
