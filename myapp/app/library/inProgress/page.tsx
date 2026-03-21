import EmptyState from "@/src/features/library/components/EmptyState";

export default function InProgress(){
    return(
        <div className="flex-1 bg-white mx-4 p-4 rounded-2xl shadow">
    
             <div className="flex-1 flex items-center justify-center">
                    <EmptyState
                      topic="You don’t have any in progress"
                      description="When you create or save in progress, they will appear here."
                      btn="Create in progress"
                    />
                  </div>
        </div>
    );
}