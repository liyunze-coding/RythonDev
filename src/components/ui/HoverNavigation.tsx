import { cn } from "@/lib/utils";
import {
    AnimatePresence,
    motion,
    useScroll,
    useMotionValueEvent,
} from "motion/react";

import { useState } from "react";

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
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                setVisible(true);
            } else {
                if (direction > 0) {
                    setVisible(false);
                } else {
                    setVisible(true);
                }
            }
        }
    });

    return (
        <>
            <motion.div
                animate={{
                    width: visible ? "0px" : "auto",
                    opacity: visible ? "0%" : "100%",
                }}
                transition={{
                    ease: "easeInOut",
                }}
                className={cn(
                    "flex w-0 flex-row items-center justify-center whitespace-nowrap",
                    className,
                )}
            >
                <a
                    href="/contact"
                    className={`overflow-hidden whitespace-nowrap transition-colors duration-150 hover:text-green-500 ${!visible ? "" : "inline-block"}`}
                >
                    Available for work
                </a>
                <div
                    className={`relative z-50 ml-3 w-5 ${visible ? "hidden" : "inline-block"}`}
                >
                    <div className="absolute top-1/2 left-1/2 aspect-square w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500"></div>
                    <div className="animate-glow absolute top-1/2 left-1/2 aspect-square w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500"></div>
                </div>
            </motion.div>
            <motion.div
                animate={{
                    width: visible ? "auto" : "0px",
                    opacity: visible ? "100%" : "0%",
                }}
                transition={{
                    ease: "easeInOut",
                }}
                className={cn(
                    "flex flex-row items-center justify-center overflow-hidden",
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
                "relative z-20 h-full w-full overflow-hidden rounded-2xl text-center transition-all ease-out group-hover:text-black",
                className,
            )}
        >
            {children}
        </div>
    );
};
