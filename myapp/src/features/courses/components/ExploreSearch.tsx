type Props={
    query:string
    setQuery:(q:string)=>void
    handleSearch:()=>void
}
export default function ExploreSearch({query, setQuery, handleSearch}:Props){
    return (
        <div className="bg-white rounded-2xl ">
            <h1>Explore Courses</h1>
            <div className="flex gap-2">
                <input type="text" value={query} onChange={e=>setQuery(e.target.value)} onKeyDown={e=>e.key==="Enter" && handleSearch()}
                placeholder="Search courses..."
                className="flex-1 border border-gray-300 text-blcak rounded-lg p-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">Search</button>
            </div>
        </div>
    )
}