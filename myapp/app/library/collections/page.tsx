import EmptyState from "@/features/library/components/EmptyState";

export default function CollectionsPage() {
  return (
    <div className="flex-1 bg-white mx-4 p-6 rounded-2xl shadow flex flex-col">

      <div className="flex-1 flex items-center justify-center">
        <EmptyState
          topic="You don’t have any collections"
          description="When you create or save collections, they will appear here."
          btn="Create collection"
        />
      </div>

    </div>
  );
}