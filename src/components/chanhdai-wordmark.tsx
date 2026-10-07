export function ChanhDaiWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 256"
      fill="none"
      aria-hidden
      {...props}
    >
      <text
        x="600"
        y="184"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
        fontSize="176"
        fontWeight="700"
        letterSpacing="-8"
      >
        KIRAN V B
      </text>
    </svg>
  )
}

export function getWordmarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 256" fill="none"><text x="600" y="184" text-anchor="middle" fill="currentColor" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" font-size="176" font-weight="700" letter-spacing="-8">KIRAN V B</text></svg>`
}
