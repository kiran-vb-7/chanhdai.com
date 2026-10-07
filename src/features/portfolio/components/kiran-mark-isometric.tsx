"use client"

import { useEffect, useId, useRef } from "react"
import type { Transition } from "motion/react"
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

import { metalClickSound } from "@/lib/soundcn/metal-click"
import { useSound } from "@/hooks/soundcn/use-sound"

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 18,
  stiffness: 200,
}

export function KiranMarkIsometric() {
  const id = useId()
  const ids = {
    pattern: `kiran-mark-pattern-${id}`,
    glow: `kiran-mark-glow-${id}`,
  }

  const ref = useRef<SVGSVGElement>(null)
  const [play] = useSound(metalClickSound)
  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { margin: "80px" })
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const cx = useSpring(useTransform(mouseX, [0, 1], [0, 556]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })
  const cy = useSpring(useTransform(mouseY, [0, 1], [0, 354]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  useEffect(() => {
    if (shouldReduceMotion || !isInView) return
    if (window.matchMedia("(hover: none)").matches) return

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX / window.innerWidth)
      mouseY.set(event.clientY / window.innerHeight)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [shouldReduceMotion, isInView, mouseX, mouseY])

  return (
    <motion.svg
      ref={ref}
      className="h-auto w-full touch-manipulation overflow-visible [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_18%,var(--background))]"
      viewBox="0 0 556 354"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="KV mark"
      initial="normal"
      whileTap="pressed"
      onTap={() => play()}
    >
      <defs>
        <pattern
          id={ids.pattern}
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M-1 1l2-2M0 10L10 0M9 11l2-2"
            stroke="var(--pattern)"
          />
        </pattern>
        <motion.radialGradient
          id={ids.glow}
          cx={cx}
          cy={cy}
          r="220"
          gradientUnits="userSpaceOnUse"
        >
          <stop className="dark:[stop-color:#fff]" stopColor="var(--color-zinc-700)" />
          <stop offset="1" stopColor="var(--color-zinc-400)" stopOpacity="0" />
        </motion.radialGradient>
      </defs>

      <g className="stroke-line" strokeWidth="1" strokeDasharray="4 2">
        <path d="M-477.55 756.57L1254.51 -243.41" />
        <path d="M977.37 788.58L-754.67 -211.42" />
        <path d="M1143.65 692.58L-588.39 -307.42" />
      </g>

      <motion.g
        variants={{ normal: { y: 0 }, pressed: { y: 14 } }}
        transition={transition}
      >
        <path
          d="M278 38L514 174L278 310L42 174L278 38Z"
          className="fill-background stroke-line"
          strokeWidth="1"
        />
        <path
          d="M278 38L514 174L278 310L42 174L278 38Z"
          fill={`url(#${ids.pattern})`}
          opacity="0.8"
        />
        <path
          d="M42 174L278 310L514 174V198L278 334L42 198V174Z"
          className="fill-background stroke-line"
          strokeWidth="1"
        />
        <path
          d="M42 174L278 310L514 174"
          stroke={`url(#${ids.glow})`}
          strokeWidth="2"
        />
        <text
          x="278"
          y="204"
          textAnchor="middle"
          className="fill-foreground"
          fontSize="116"
          fontWeight="700"
          letterSpacing="-10"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
        >
          KV
        </text>
      </motion.g>
    </motion.svg>
  )
}
