interface TagBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function TagBadge({ children, className = "" }: TagBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-tag-bg px-3 py-1 text-sm font-medium text-tag-text ${className}`}
    >
      {children}
    </span>
  );
}
