import type { IconComponentProps } from '../icons';
const SvgIconDe = ({
  size = 24,
  color = 'currentColor',
  stroke = 2,
  ...props
}: IconComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="flag-icons-de"
    viewBox="0 0 640 480"
    width={size}
    height={size}
    color={color}
    strokeWidth={stroke}
    {...props}
  >
    <path fill="#fc0" d="M0 320h640v160H0z" />
    <path fill="#000001" d="M0 0h640v160H0z" />
    <path fill="red" d="M0 160h640v160H0z" />
  </svg>
);
export default SvgIconDe;
