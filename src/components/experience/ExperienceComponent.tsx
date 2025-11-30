import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Experience() {
	return (
		<Tabs
			defaultValue="experience"
			className="w-[90%] md:w-[600px] lg:w-1/2"
		>
			<TabsList className="w-full">
				<TabsTrigger value="experience">Experience</TabsTrigger>
				<TabsTrigger value="education">Education</TabsTrigger>
				<TabsTrigger value="extracurricular">
					Extracurricular
				</TabsTrigger>
			</TabsList>
			<TabsContent
				value="experience"
				className="bg-secondary rounded-md px-5 py-5"
			>
				{ExperienceTabContent()}
			</TabsContent>
			<TabsContent
				value="education"
				className="bg-secondary rounded-md px-5 py-5"
			>
				{EducationTabContent()}
			</TabsContent>
			<TabsContent
				value="extracurricular"
				className="bg-secondary rounded-md px-5 py-5"
			>
				{ExtracurricularTabContent()}
			</TabsContent>
		</Tabs>
	);
}

function ExperienceTabContent() {
	return (
		<>
			{Position({
				title: "Lead Full Stack Developer",
				institution: "Hyson Horizon",
				dateRange: "Dec 2024 - Now",
				country: "Malaysia",
				summary:
					"Led development of clients' Astro websites with Payload CMS backend implementation, managed Github Actions CI/CD and deployments.",
				className: "pb-5",
			})}
			{Position({
				title: "Frontend Web Developer Intern",
				institution: "Studio20",
				dateRange: "Jan 2024 - Apr 2024",
				country: "Malaysia",
				summary:
					"Developed WordPress sites and NextJS apps for clients. Used lazy-loading to optimise page load speeds. Ensured CMS allowed easy yet flexible customisations for clients.",
			})}
		</>
	);
}

function EducationTabContent() {
	return (
		<>
			{Position({
				title: "Bachelors of Computer Science",
				dateRange: "June 2024 - Now",
				country: "Australia",
				summary: `Awarded 50% Vice-Chancellor Scholarship to study
						Bachelor's in Computer Science, minoring in Full Stack Development. Active committee member in cybersecurity association and software engineering club.`,
				className: "pb-5",
			})}
			{Position({
				title: "Diploma in Computer Science",
				dateRange: "Jan 2022 - Apr 2024",
				country: "Malaysia",
				summary: `Focused in Data Science, took on role as President of Computer Programming Club and Vice President of Diploma Student Union.`,
			})}
		</>
	);
}

function ExtracurricularTabContent() {
	return (
		<>
			{Position({
				title: "University Cybersecurity Association, Development Committee",
				dateRange: "Nov 2025 - Now",
				country: "Australia",
				summary: `Leading frontend development club's revamped website using Astro framework with Svelte components.`,
				className: "pb-5",
			})}
			{Position({
				title: "University Software Engineering Club Committee",
				dateRange: "Sep 2025 - Now",
				country: "Australia",
				summary: `Leading and contributing to various club projects:`,
				className: "pb-5",
				highlights: [
					`Rust Discord Bot, includes club membership verification feature using Supabase.`,
					`Python web scraping AI project, using BeautifulSoup4 and Gemini API.`,
				],
			})}
			{Position({
				title: "Malaysian Association, Marketing Officer",
				dateRange: "Mar 2025 - Oct 2025",
				country: "Australia",
				summary: `Contributed to marketing strategy through video ideation, execution (including on-screen presence and filming), and video editing.`,
			})}
		</>
	);
}

// ICONS AND SUBCOMPONENTS

function LocationIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="size-4"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
			/>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
			/>
		</svg>
	);
}

function CalendarIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="size-4"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
			/>
		</svg>
	);
}

function BriefCaseIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="size-4"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
			/>
		</svg>
	);
}

function Position({
	title,
	institution,
	dateRange,
	country,
	summary,
	className = "",
	highlights = [],
}: {
	title: string;
	institution?: string;
	dateRange: string;
	country: string;
	summary: string;
	className?: string;
	highlights?: Array<string>;
}) {
	return (
		<div className="position-el flex flex-row items-start gap-3">
			<div className="flex flex-col items-center justify-start gap-2 self-stretch pt-2">
				<div className="bg-accent h-2 w-2 rounded-full"></div>
				<div className="w-[1px] flex-grow bg-gray-400"></div>
			</div>
			<div className={className}>
				<h2 className="text-lg font-bold">{title}</h2>
				<div className="mt-1 flex flex-col items-start justify-start gap-1">
					<div className="text-muted-foreground flex flex-row items-center justify-start gap-1 text-xs">
						{CalendarIcon()} {dateRange}
					</div>
					<div className="text-muted-foreground mb-2 flex w-full flex-row items-center justify-start gap-5 text-xs">
						{institution && (
							<div className="flex flex-row items-center justify-start gap-1">
								{BriefCaseIcon()} {institution}
							</div>
						)}

						<div className="flex flex-row items-center justify-start gap-1">
							{LocationIcon()} {country}
						</div>
					</div>
				</div>
				<p className="text-base">{summary}</p>
				<ul className="list-inside list-disc">
					{highlights.map((highlight) => (
						<li>{highlight}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
