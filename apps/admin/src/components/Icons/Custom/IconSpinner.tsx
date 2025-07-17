import type { SVGProps } from 'react'
const SvgIconSpinner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <mask
      id="IconSpinner_svg__a"
      width={19}
      height={18}
      x={-1}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha'
      }}
    >
      <circle cx={8.982} cy={9} r={9} fill="#44546F" />
    </mask>
    <g mask="url(#IconSpinner_svg__a)">
      <path
        fill="currentColor"
        d="M7.533.092q.185-.04.372-.076c.518-.088.953.2 1.064.7.107.488-.15.922-.663 1.049-.872.214-1.736.448-2.507.929-2.385 1.49-3.74 3.617-3.884 6.486-.012.22-.012.44-.018.66-.017.566-.368.932-.894.931-.487 0-.85-.375-.879-.924a8.7 8.7 0 0 1 .432-3.254C1.71 3.153 4.067 1.013 7.533.092"
      />
    </g>
  </svg>
)
export default SvgIconSpinner
