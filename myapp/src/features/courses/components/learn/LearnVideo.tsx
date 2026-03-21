type Props = {
  videoUrl: string
  title:    string
}

export default function LearnVideo({ videoUrl, title }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative w-full rounded-2xl overflow-hidden bg-black" style={{ paddingTop: "56.25%" }}>
        <iframe
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
    </div>
  )
}