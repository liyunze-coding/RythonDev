import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { Cross as HamburgerCross } from "hamburger-react";
import { useEffect, useState, useRef } from "react";

declare module "react" {
	interface CSSProperties {
		[key: `--${string}`]: string | number;
	}
}

export const HoverNavigation = ({
	items,
	className,
}: {
	items: {
		label: string;
		link: string;
	}[];
	className?: string;
}) => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const [hamburgerOpen, setHamburgerOpen] = useState(false);
	const [theme, setTheme] = useState<"light" | "dark">("dark");
	const hamburgerRef = useRef<HTMLDivElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setTheme(
			document.documentElement.dataset.theme === "light"
				? "light"
				: "dark",
		);
	}, []);

	const toggleTheme = () => {
		const nextTheme = theme === "dark" ? "light" : "dark";
		document.documentElement.dataset.theme = nextTheme;
		localStorage.setItem("theme", nextTheme);
		document
			.querySelector('meta[name="theme-color"]')
			?.setAttribute(
				"content",
				nextTheme === "dark" ? "#101010" : "#fafafa",
			);
		setTheme(nextTheme);
	};

	// Track which section is in view
	useEffect(() => {
		const sectionIds = items.map((item) => {
			const url = new URL(item.link, window.location.origin);
			return url.hash.replace("#", "");
		});

		const sectionElements: (Element | null)[] = sectionIds.map((id) => {
			if (!id) return null;
			return document.getElementById(id);
		});

		const visibilityMap = new Map<Element, number>();

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					visibilityMap.set(entry.target, entry.intersectionRatio);
				});

				let maxRatio = 0;
				let maxIdx = -1;

				sectionElements.forEach((el, idx) => {
					if (!el) return;
					const ratio = visibilityMap.get(el) ?? 0;
					if (ratio > maxRatio) {
						maxRatio = ratio;
						maxIdx = idx;
					}
				});

				if (maxIdx !== -1 && maxRatio > 0) {
					setActiveIndex(maxIdx);
				}
			},
			{
				rootMargin: "-20% 0px -50% 0px",
				threshold: [0, 0.25, 0.5, 0.75, 1],
			},
		);

		sectionElements.forEach((el) => {
			if (el) observer.observe(el);
		});

		// set hover index on projects when on "/projects"
		const splittedURL = window.location.href.split("/");

		if (splittedURL[splittedURL.length - 1]) {
			setActiveIndex(2);
		}

		return () => observer.disconnect();
	}, [items]);

	useEffect(() => {
		// hamburger stuff
		const handleClickOutside = (event: MouseEvent) => {
			if (
				hamburgerOpen &&
				hamburgerRef.current &&
				menuRef.current &&
				!hamburgerRef.current.contains(event.target as Node) &&
				!menuRef.current.contains(event.target as Node)
			) {
				setHamburgerOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [hamburgerOpen]);

	// Use hoveredIndex when hovering, otherwise use activeIndex
	const displayIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

	return (
		<>
			<div className="theme-surface bg-secondary/50 fixed top-5 left-1/2 z-30 box-border hidden -translate-x-1/2 items-center justify-center overflow-auto rounded-[40px] border-2 border-solid border-gray-700 px-5 py-3 backdrop-blur-md md:flex md:w-11/12 lg:w-2/3 xl:w-auto">
				<div className="flex flex-col">
					<div className="flex flex-row">
						<nav
							aria-label="Desktop Navigation"
							className="flex items-center justify-center overflow-hidden"
						>
							<motion.ul
								className="hidden w-0 flex-row items-center justify-center overflow-hidden md:flex md:w-auto"
								transition={{
									ease: "easeInOut",
								}}
							>
								{items.map((item, idx) => (
									<li key={item?.link}>
										<a
											href={item?.link}
											className="group relative block h-fit px-5 py-2"
											onMouseEnter={() =>
												setHoveredIndex(idx)
											}
											onMouseLeave={() =>
												setHoveredIndex(null)
											}
										>
											<AnimatePresence>
												{displayIndex === idx && (
													<motion.span
														className="absolute inset-0 z-10 block h-full w-full rounded-3xl bg-neutral-100"
														layoutId="hoverBackground"
														initial={{ opacity: 0 }}
														animate={{
															opacity: 1,
															transition: {
																duration: 0.15,
															},
														}}
														exit={{
															opacity: 0,
															transition: {
																duration: 0.15,
																delay: 0.2,
															},
														}}
													/>
												)}
											</AnimatePresence>
											<NavBarLink>
												{item.label}
											</NavBarLink>
										</a>
									</li>
								))}
							</motion.ul>
						</nav>
						<ThemeToggle theme={theme} onToggle={toggleTheme} />
					</div>
				</div>
			</div>
			<div className="theme-surface bg-secondary/50 fixed top-5 left-1/2 z-50 flex w-4/5 -translate-x-1/2 items-center justify-end rounded-full border-2 border-solid border-gray-700 pr-5 backdrop-blur-xl lg:hidden">
				<ThemeToggle theme={theme} onToggle={toggleTheme} />
				<div
					ref={hamburgerRef}
					className="flex rounded-full px-1 py-1 md:hidden [&>div]:rounded-full [&>div_div]:bg-current!"
				>
					<HamburgerCross
						toggle={setHamburgerOpen}
						toggled={hamburgerOpen}
					></HamburgerCross>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			<AnimatePresence>
				{hamburgerOpen && (
					<motion.div
						ref={menuRef}
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						transition={{ duration: 0.2 }}
						className="theme-surface bg-secondary/50 fixed top-24 right-0 left-1/2 z-40 w-4/5 -translate-x-1/2 rounded-2xl py-2 backdrop-blur-xl md:hidden"
					>
						<nav aria-label="Mobile Navigation">
							<ul className="flex flex-col gap-2">
								{items.map((item, idx) => (
									<motion.li
										key={item?.link}
										initial={{ opacity: 0, y: -20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											delay: idx * 0.1,
											duration: 0.3,
										}}
										className="rounded-2xl px-3"
									>
										<a
											href={item?.link}
											className="block rounded-lg px-4 py-3 text-center text-lg transition-colors"
											onClick={() =>
												setHamburgerOpen(false)
											}
										>
											{item.label}
										</a>
									</motion.li>
								))}
							</ul>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

const ThemeToggle = ({
	theme,
	onToggle,
}: {
	theme: "light" | "dark";
	onToggle: () => void;
}) => (
	<button
		type="button"
		onClick={onToggle}
		aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
		title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
		className="ml-2 grid size-10 shrink-0 cursor-pointer place-items-center rounded-full transition-colors hover:bg-current/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
	>
		{theme === "dark" ? (
			<svg
				viewBox="0 0 24 24"
				aria-hidden="true"
				className="size-5"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			>
				<circle cx="12" cy="12" r="4" />
				<path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
			</svg>
		) : (
			<svg
				viewBox="0 0 24 24"
				aria-hidden="true"
				className="size-5"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
			</svg>
		)}
	</button>
);

export const NavBarLink = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"theme-nav-link relative z-20 h-fit w-full overflow-hidden rounded-2xl text-center mix-blend-difference transition-all ease-out",
				className,
			)}
		>
			{children}
		</div>
	);
};
