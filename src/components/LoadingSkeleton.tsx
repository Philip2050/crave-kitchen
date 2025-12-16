export default function LoadingSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-300 dark:bg-gray-600 rounded ${className}`}></div>
  );
}