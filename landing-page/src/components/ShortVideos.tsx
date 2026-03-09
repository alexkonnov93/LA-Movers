const videos = [
  { id: 1, label: "Short Video" },
  { id: 2, label: "Short Video" },
  { id: 3, label: "Short Video" },
  { id: 4, label: "Short Video" },
];

export default function ShortVideos() {
  return (
    <section className="py-[60px] sm:flex sm:items-center sm:justify-center sm:px-6 lg:px-[58px] lg:py-[100px]">
      <div className="flex w-full max-w-[1200px] gap-[8px] overflow-x-auto pl-4 pr-4 scrollbar-hide sm:gap-[12px] sm:pl-0 sm:pr-0">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative flex h-[420px] min-w-[240px] shrink-0 items-center justify-center rounded-[27px] bg-[#dcdcdc] sm:shrink sm:min-w-0 sm:flex-1 sm:rounded-[32px]"
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
