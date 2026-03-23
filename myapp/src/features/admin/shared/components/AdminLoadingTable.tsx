type Props = { error?: string | null }

export default function AdminLoadingTable({ error }: Props) {
  if (error) return (
    <div className="text-center py-20 text-red-500 text-sm">{error}</div>
  )
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}