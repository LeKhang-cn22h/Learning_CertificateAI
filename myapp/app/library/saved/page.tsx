import EmptyState from "@/features/library/components/EmptyState";
    ``
export default function SavedPage(){
    return(
        <div className="flex-1 bg-white mx-4 p-4 rounded-2xl shadow">
             <div className="flex-1 flex items-center justify-center">
                    <EmptyState
                      topic="You don’t have any saved course or videos"
                      description="When you save a course, you can find it here."
                      btn="Show recomammended courses"
                    />
                  </div>
        </div>
    );
}