"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  Children,
  isValidElement,
  type ReactNode,
  useLayoutEffect,
  useRef,
  useSyncExternalStore,
} from "react";

const desktopQuery = "(min-width: 64rem)";

function subscribeToDesktopQuery(callback: () => void) {
  const mediaQuery = window.matchMedia(desktopQuery);

  mediaQuery.addEventListener("change", callback);

  return () => mediaQuery.removeEventListener("change", callback);
}

function getDesktopSnapshot() {
  return window.matchMedia(desktopQuery).matches;
}

function getServerSnapshot() {
  return false;
}

function ProjectStackItem({
  children,
  index,
  isLast,
  shouldAnimate,
}: {
  children: ReactNode;
  index: number;
  isLast: boolean;
  shouldAnimate: boolean;
}) {
  const projectRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.97]);
  const spacingClass = index === 0 ? "" : "mt-32 sm:mt-44 lg:mt-[18svh]";

  return (
    <motion.div
      ref={projectRef}
      className={`relative bg-background lg:sticky lg:top-24 lg:origin-top lg:will-change-transform ${spacingClass}`}
      style={{
        zIndex: index + 1,
        scale: shouldAnimate ? scale : 1,
      }}
    >
      {children}
    </motion.div>
  );
}

export function FeaturedProjectStack({ children }: { children: ReactNode }) {
  const projects = Children.toArray(children);
  const projectCount = projects.length;
  const stackRef = useRef<HTMLDivElement>(null);
  const isDesktop = useSyncExternalStore(
    subscribeToDesktopQuery,
    getDesktopSnapshot,
    getServerSnapshot,
  );
  const shouldReduceMotion = useReducedMotion();
  const shouldAnimate = isDesktop && !shouldReduceMotion;

  useLayoutEffect(() => {
    const stackElement = stackRef.current;

    if (!stackElement) {
      return;
    }

    stackElement.style.removeProperty("padding-bottom");

    if (!isDesktop || projectCount === 0) {
      return;
    }

    const lastProjectElement = stackElement.lastElementChild;

    if (!(lastProjectElement instanceof HTMLElement)) {
      return;
    }

    const updateRunway = () => {
      const computedTop = Number.parseFloat(
        window.getComputedStyle(lastProjectElement).top,
      );
      const stickyTop = Number.isFinite(computedTop) ? computedTop : 0;
      const runway = Math.max(
        0,
        window.innerHeight - stickyTop - lastProjectElement.offsetHeight,
      );

      stackElement.style.paddingBottom = `${runway}px`;
    };

    const resizeObserver = new ResizeObserver(updateRunway);

    resizeObserver.observe(lastProjectElement);
    window.addEventListener("resize", updateRunway);
    updateRunway();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateRunway);
      stackElement.style.removeProperty("padding-bottom");
    };
  }, [isDesktop, projectCount]);

  return (
    <div ref={stackRef}>
      {projects.map((project, index) => (
        <ProjectStackItem
          key={isValidElement(project) ? project.key : String(project)}
          index={index}
          isLast={index === projectCount - 1}
          shouldAnimate={shouldAnimate}
        >
          {project}
        </ProjectStackItem>
      ))}
    </div>
  );
}
