const videos = [
  { id: 1, label: "Short Video" },
  { id: 2, label: "Short Video" },
  { id: 3, label: "Short Video" },
  { id: 4, label: "Short Video" },
];

export default function ShortVideos() {
  return (
    <section className="flex items-center justify-center px-6 py-[60px] lg:px-[58px] lg:py-[100px]">
      <div className="flex w-full max-w-[1200px] gap-[12px] overflow-x-auto scrollbar-hide">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative flex h-[320px] min-w-[240px] flex-1 items-center justify-center rounded-[32px] bg-[#dcdcdc] sm:h-[420px] sm:min-w-0"
          >
            <span className="text-[16px] font-medium leading-[1.4] text-[#777778]">
              {video.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
