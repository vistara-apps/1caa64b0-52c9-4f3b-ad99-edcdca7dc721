export default function Loading() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-accent border-t-transparent mx-auto"></div>
        <p className="text-fg text-lg">Loading PawConnect...</p>
      </div>
    </div>
  );
}
