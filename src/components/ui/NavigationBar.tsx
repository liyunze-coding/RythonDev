import { cn } from "@/lib/utils";
import {
	AnimatePresence,
	motion,
	useScroll,
	useMotionValueEvent,
} from "motion/react";
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
	const [hamburgerOpen, setHamburgerOpen] = useState(false);
	const hamburgerRef = useRef<HTMLDivElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
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

	return (
		<>
			<div className="bg-secondary/50 fixed top-5 left-1/2 z-30 box-border hidden -translate-x-1/2 items-center justify-center overflow-auto rounded-[40px] border-2 border-solid border-gray-700 px-5 py-3 backdrop-blur-md md:flex md:w-11/12 lg:w-2/3 xl:w-auto">
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
												{hoveredIndex === idx && (
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
					</div>
				</div>
			</div>
			<div className="bg-secondary/50 fixed top-5 left-1/2 z-50 flex w-4/5 -translate-x-1/2 justify-end rounded-full border-2 border-solid border-gray-700 pr-5 backdrop-blur-xl lg:hidden">
				<div
					ref={hamburgerRef}
					className="flex rounded-full px-1 py-1 md:hidden [&>div]:rounded-full [&>div_div]:bg-white!"
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
						className="bg-secondary/50 fixed top-24 right-0 left-1/2 z-40 w-4/5 -translate-x-1/2 rounded-2xl py-2 text-white backdrop-blur-xl md:hidden"
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
