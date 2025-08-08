"use client";

import { useState, useRef } from "react";
import {
	motion,
	useTransform,
	AnimatePresence,
	useMotionValue,
	useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

export const AnimatedTooltip = ({
	className,
	children,
	text,
	href,
}: {
	className?: string;
	children: React.ReactNode;
	text: string;
	href?: string;
}) => {
	const [hovered, setHovered] = useState<boolean>(false);
	const animationFrameRef = useRef<number | null>(null);

	const handleMouseMove = (event: any) => {
		if (animationFrameRef.current) {
			cancelAnimationFrame(animationFrameRef.current);
		}
	};

	return (
		<>
			<div
				className="group relative -mr-4"
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				<AnimatePresence>
					{hovered && (
						<motion.div
							initial={{ opacity: 0, y: 20, scale: 0.6 }}
							animate={{
								opacity: 1,
								y: 10,
								scale: 1,
								transition: {
									type: "spring",
									stiffness: 260,
									damping: 10,
								},
							}}
							exit={{ opacity: 0, y: 20, scale: 0.6 }}
							style={{
								whiteSpace: "nowrap",
							}}
							className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
						>
							<div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
							<div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
							<div className="relative z-30 text-base font-bold text-white">
								{text}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
				{!href && (
					<div
						onMouseMove={handleMouseMove}
						className={cn(
							"relative h-14 w-14 transition duration-500 group-hover:z-30",
							className,
						)}
					>
						{children}
					</div>
				)}
				{href && (
					<a
						href={href}
						onMouseMove={handleMouseMove}
						className={cn(
							"relative h-14 w-14 transition duration-500 group-hover:z-30",
							className,
						)}
					>
						{children}
					</a>
				)}
			</div>
		</>
	);
};
