export function KiranMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 256 128"
      aria-hidden
      {...props}
    >
      <path fill="currentColor" d="M16 16h24v96H16V16Zm24 48 52-48h34L72 64l54 48H92L40 64Z" />
      <path fill="currentColor" d="M132 16h28l32 72 32-72h28l-44 96h-32l-44-96Z" />
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="currentColor" d="M16 16h24v96H16V16Zm24 48 52-48h34L72 64l54 48H92L40 64Z"/><path fill="currentColor" d="M132 16h28l32 72 32-72h28l-44 96h-32l-44-96Z"/></svg>`
}
