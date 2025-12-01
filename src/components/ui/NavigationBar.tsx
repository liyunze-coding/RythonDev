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
	const [hamburgerOpen, setHamburgerOpen] = useState(false);
	const { width } = useWindowDimensions();

	return (
		<div className="bg-secondary/50 fixed top-5 left-1/2 z-30 box-border flex w-11/12 -translate-x-1/2 items-center justify-center overflow-auto rounded-[40px] border-2 border-solid border-gray-700 px-5 py-3 backdrop-blur-md sm:w-4/5 lg:w-2/3 xl:w-auto">
			<div className="flex flex-col">
				<div className="flex flex-row">
					<div className="mr-2 flex items-center justify-center sm:mr-3">
						<a href="/">
							<img
								src="/images/profile/contact_photo_small.webp"
								alt="Ryan"
								width={50}
								className="rounded-full"
							/>
						</a>
					</div>
					<div className="flex flex-col items-center justify-center">
						<motion.div className="flex w-auto flex-row items-center justify-center pr-2 whitespace-nowrap opacity-100 lg:w-0 lg:opacity-0">
							<a
								tabIndex={0}
								href="/contact"
								className="overflow-hidden text-sm whitespace-nowrap transition-colors duration-150 hover:text-green-500 sm:text-base"
							>
								Available for work
							</a>
							<div className="relative z-50 ml-3">
								<div className="absolute top-1/2 left-1/2 aspect-square w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500"></div>
								<div className="animate-glow absolute top-1/2 left-1/2 aspect-square w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500"></div>
							</div>
						</motion.div>
					</div>
					<nav
						aria-label="Desktop Navigation"
						className="flex items-center justify-center overflow-hidden"
					>
						<motion.ul
							className="hidden w-0 flex-row items-center justify-center overflow-hidden lg:flex lg:w-auto"
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
											{hoveredIndex === idx && (
												<motion.span
													className="absolute inset-0 z-10 block h-full w-full rounded-3xl bg-neutral-200"
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
								</li>
							))}
						</motion.ul>
					</nav>

					<div className="hamburger-wrapper flex items-center justify-center lg:hidden">
						<HamburgerCross
							aria-label="Hamburger"
							toggled={hamburgerOpen}
							toggle={setHamburgerOpen}
							size={20}
						></HamburgerCross>
					</div>
				</div>
				<motion.ul
					animate={{
						height: hamburgerOpen ? "auto" : "0px",
						opacity: hamburgerOpen ? "100%" : "0",
					}}
					transition={{
						ease: "easeInOut",
					}}
					initial={{
						height: "0px",
					}}
					className="h-0 overflow-hidden"
				>
					{items.map((item, idx) => (
						<li key={item?.link}>
							<a
								href={item?.link}
								className="block px-5 py-2 text-center mix-blend-difference lg:hidden"
							>
								{item.label}
							</a>
						</li>
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
				"relative z-20 h-fit w-full overflow-hidden rounded-2xl text-center mix-blend-difference transition-all ease-out",
				className,
			)}
		>
			{children}
		</div>
	);
};
