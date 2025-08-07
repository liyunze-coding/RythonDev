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
        <motion.div
            animate={{
                width: visible ? "auto" : "0px",
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
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <NavBarLink>{item.label}</NavBarLink>
                </a>
            ))}
        </motion.div>
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
