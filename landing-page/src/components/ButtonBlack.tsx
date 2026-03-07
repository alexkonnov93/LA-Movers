import Chevron from "./Chevron";

type ButtonBlackProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
} & (
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
  | React.ButtonHTMLAttributes<HTMLButtonElement>
);

export default function ButtonBlack({
  children,
  href,
  className = "",
  ...rest
}: ButtonBlackProps) {
  const classes = `inline-flex shrink-0 items-center gap-2.5 rounded-[16px] bg-black px-6 py-4 text-[16px] font-semibold leading-[1.4] text-white transition-colors hover:bg-black/85 ${className}`;
  const chevron = <Chevron size={12} direction="right" className="text-white" />;

  if (href) {
    return (
      <a href={href} className={classes} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
        {chevron}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {chevron}
    </button>
  );
}
