import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
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
	const hamburgerRef = useRef<HTMLButtonElement>(null);
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

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setHamburgerOpen(false);
		};

		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [hamburgerOpen]);

	useEffect(() => {
		if (!hamburgerOpen) return;

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = previousOverflow;
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
			<div
				className={cn(
					"fixed top-4 right-4 left-4 z-50 flex h-16 items-center justify-between rounded-[1.25rem] border px-3 shadow-[0_12px_40px_rgba(0,0,0,0.16)] backdrop-blur-2xl transition-colors md:hidden",
					theme === "dark"
						? "border-white/10 bg-neutral-950/85 text-white"
						: "border-black/10 bg-white/85 text-neutral-950",
				)}
			>
				<a
					href="/#home"
					onClick={() => setHamburgerOpen(false)}
					className="flex items-center gap-2.5 rounded-xl px-2 py-2 font-semibold tracking-tight"
					aria-label="Go to home"
				>
					<span
						className={cn(
							"grid size-8 place-items-center rounded-lg text-sm font-black",
							theme === "dark"
								? "bg-white text-neutral-950"
								: "bg-neutral-950 text-white",
						)}
					>
						RL
					</span>
					<span className="text-sm opacity-65">Portfolio</span>
				</a>
				<div className="flex items-center gap-1">
					<ThemeToggle theme={theme} onToggle={toggleTheme} />
					<button
						ref={hamburgerRef}
						type="button"
						onClick={() => setHamburgerOpen((open) => !open)}
						aria-expanded={hamburgerOpen}
						aria-controls="mobile-navigation"
						aria-label={hamburgerOpen ? "Close menu" : "Open menu"}
						className={cn(
							"group grid size-11 cursor-pointer place-items-center rounded-xl transition-all active:scale-95",
							theme === "dark"
								? "bg-white text-neutral-950"
								: "bg-neutral-950 text-white",
						)}
					>
						<span
							className="relative block h-4 w-5"
							aria-hidden="true"
						>
							<span
								className={`absolute top-0 right-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${hamburgerOpen ? "translate-y-[7px] -rotate-45" : ""}`}
							/>
							<span
								className={`absolute top-[7px] right-0 h-0.5 rounded-full bg-current transition-all duration-300 ${hamburgerOpen ? "w-0 opacity-0" : "w-3.5"}`}
							/>
							<span
								className={`absolute top-[14px] right-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${hamburgerOpen ? "-translate-y-[7px] rotate-45" : ""}`}
							/>
						</span>
					</button>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			<AnimatePresence>
				{hamburgerOpen && (
					<motion.div
						ref={menuRef}
						id="mobile-navigation"
						initial={{ opacity: 0, y: -12 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -12 }}
						transition={{
							duration: 0.25,
							ease: [0.22, 1, 0.36, 1],
						}}
						className={cn(
							"fixed inset-0 z-40 flex flex-col overflow-hidden px-5 pt-28 pb-7 transition-colors md:hidden",
							theme === "dark"
								? "bg-neutral-950 text-white"
								: "bg-[#f4f3ef] text-neutral-950",
						)}
					>
						<nav
							aria-label="Mobile Navigation"
							className="relative flex flex-1 items-center"
						>
							<ul className="w-full">
								{items.map((item, idx) => (
									<motion.li
										key={item?.link}
										initial={{ opacity: 0, x: -24 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{
											delay: 0.06 + idx * 0.055,
											duration: 0.35,
										}}
										className={cn(
											"border-b last:border-b-0",
											theme === "dark"
												? "border-white/10"
												: "border-black/10",
										)}
									>
										<a
											href={item?.link}
											className="group flex items-center gap-4 py-4"
											onClick={() =>
												setHamburgerOpen(false)
											}
										>
											<span className="w-6 text-xs font-medium opacity-35">
												{String(idx + 1).padStart(
													2,
													"0",
												)}
											</span>
											<span className="flex-1 text-[clamp(2rem,11vw,3.25rem)] leading-none font-semibold tracking-[-0.055em]">
												{item.label}
											</span>
											<span
												className={cn(
													"grid size-9 place-items-center rounded-full border text-lg transition-all group-hover:rotate-[-45deg]",
													theme === "dark"
														? "border-white/20 group-hover:bg-white group-hover:text-neutral-950"
														: "border-black/20 group-hover:bg-neutral-950 group-hover:text-white",
												)}
											>
												↗
											</span>
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
