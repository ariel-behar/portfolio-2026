import { S3_BASE_URL } from "@/constants";

interface PatternedBackgroundProps {
  children: React.ReactNode;
}

export function PatternedBackground({ children }: PatternedBackgroundProps) {
  return (
    <div
      style={{ backgroundImage: `url(${S3_BASE_URL}/dark-pattern.jpg)` }}
      className="relative bg-repeat"
    >
      {children}
    </div>
  );
}
