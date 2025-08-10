import { cn } from "@/lib/utils";
import {
	AnimatePresence,
	motion,
	useScroll,
	useMotionValueEvent,
} from "motion/react";
import { Cross as HamburgerCross } from "hamburger-react";
import { useEffect, useState } from "react";

function useWindowDimensions() {
	const hasWindow = typeof window !== "undefined";

	function getWindowDimensions() {
		const width = hasWindow ? window.innerWidth : 0;
		const height = hasWindow ? window.innerHeight : 0;
		return {
			width,
			height,
		};
	}

	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions(),
	);

	useEffect(() => {
		if (hasWindow) {
			function handleResize() {
				setWindowDimensions(getWindowDimensions());
			}

			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}
	}, [hasWindow]);

	return windowDimensions;
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
	const { scrollYProgress } = useScroll();
	const [navVisible, setNavVisible] = useState(true);
	const [availableVisible, setAvailableVisible] = useState(false);

	const [onContactPage, setOnContactPage] = useState(false);
	const [hamburgerOpen, setHamburgerOpen] = useState(false);
	const { width } = useWindowDimensions();

	// if on contact page, do not do width 0%
	useEffect(() => {
		setOnContactPage(window.location.href.endsWith("/contact"));
	}, []);

	useEffect(() => {
		updateNavBarState(width);
	}, [width]);

	const updateNavBarState = (
		width: number,
		scrollProgress: number = 0,
		scrollUp: boolean = false,
	) => {
		if (width && width < 1024) {
			setNavVisible(false);
			setAvailableVisible(true);
		} else if (scrollProgress < 0.05) {
			setNavVisible(true);
			setAvailableVisible(false);
		} else if (!onContactPage) {
			setNavVisible(scrollUp);
			setAvailableVisible(!scrollUp);
		} else {
			setNavVisible(true);
			setAvailableVisible(false);
		}
	};

	useMotionValueEvent(scrollYProgress, "change", (current) => {
		// Check if current is not undefined and is a number
		if (typeof current === "number") {
			let direction = current! - scrollYProgress.getPrevious()!;
			let scrollUp = direction <= 0;
			let scrollProgress = scrollYProgress.get();

			updateNavBarState(width, scrollProgress, scrollUp);
		}
	});

	return (
		<div className="bg-secondary/50 fixed top-5 left-1/2 z-30 box-border flex w-4/5 -translate-x-1/2 items-center justify-center overflow-auto rounded-[40px] border-2 border-solid border-gray-700 px-5 py-3 backdrop-blur-md lg:w-2/3 xl:w-auto">
			<div className="flex flex-col">
				<div className="flex flex-row">
					<a href="/">
						<img
							src="/images/profile/contact_photo_small.webp"
							alt="Ryan"
							width={50}
							className="mr-3 rounded-full"
						/>
					</a>
					<div className="mx-5 flex flex-col items-center justify-center">
						<motion.div
							animate={{
								width: availableVisible ? "auto" : "0px",
								opacity: availableVisible ? "100%" : "0%",
							}}
							className="flex w-auto flex-row items-center justify-center pr-2 whitespace-nowrap opacity-100 lg:w-0 lg:opacity-0"
						>
							<a
								href="/contact"
								className="overflow-hidden whitespace-nowrap transition-colors duration-150 hover:text-green-500"
							>
								Available for work
							</a>
							<div className={`relative z-50 ml-3`}>
								<div className="absolute top-1/2 left-1/2 aspect-square w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500"></div>
								<div className="animate-glow absolute top-1/2 left-1/2 aspect-square w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500"></div>
							</div>
						</motion.div>
					</div>
					<motion.div
						animate={{
							width: navVisible ? "auto" : "0px",
							opacity: navVisible ? "100%" : "0%",
						}}
						transition={{
							ease: "easeInOut",
						}}
						className={cn(
							"hidden w-0 flex-row items-center justify-center overflow-hidden lg:flex lg:w-auto",
							className,
						)}
					>
						{items.map((item, idx) => (
							<a
								href={item?.link}
								key={item?.link}
								className="group relative block h-full px-5 py-2"
								onMouseEnter={() => setHoveredIndex(idx)}
								onMouseLeave={() => setHoveredIndex(null)}
							>
								<AnimatePresence>
									{hoveredIndex === idx && (
										<motion.span
											className="absolute inset-0 block h-full w-full rounded-3xl bg-neutral-200"
											layoutId="hoverBackground"
											initial={{ opacity: 0 }}
											animate={{
												opacity: 1,
												transition: { duration: 0.15 },
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
								<NavBarLink>{item.label}</NavBarLink>
							</a>
						))}
					</motion.div>

					<div className="hamburger-wrapper block lg:hidden">
						<HamburgerCross
							toggled={hamburgerOpen}
							toggle={setHamburgerOpen}
						></HamburgerCross>
					</div>
				</div>
				<motion.ul
					animate={{
						height: hamburgerOpen ? "auto" : "0px",
					}}
					transition={{
						ease: "easeInOut",
					}}
					className="h-0 overflow-hidden lg:hidden"
				>
					{items.map((item, idx) => (
						<a
							href={item?.link}
							key={item?.link}
							className="group relative block h-full px-5 py-2"
							onMouseEnter={() => setHoveredIndex(idx)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							<AnimatePresence>
								{hoveredIndex === idx && (
									<motion.span
										className="absolute inset-0 block h-full w-full rounded-3xl bg-neutral-200"
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
							<NavBarLink>{item.label}</NavBarLink>
						</a>
					))}
				</motion.ul>
			</div>
		</div>
	);
};

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
				"relative z-20 h-full w-full overflow-hidden rounded-2xl text-center transition-all ease-out group-hover:text-black",
				className,
			)}
		>
			{children}
		</div>
	);
};
