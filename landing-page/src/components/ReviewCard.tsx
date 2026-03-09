import Image from "next/image";

export type Review = {
  text: string;
  name: string;
  date: string;
  avatar: string;
};

function Stars() {
  return (
    <div className="flex gap-[2.4px] sm:gap-[3.2px]">
      {[...Array(5)].map((_, i) => (
        <Image key={i} src="/images/star.svg" alt="" width={16} height={16} className="size-[12px] sm:size-[16px]" />
      ))}
    </div>
  );
}

export default function ReviewCard({
  review,
  showBorder = true,
  mobileShowBorder = false,
}: {
  review: Review;
  showBorder?: boolean;
  mobileShowBorder?: boolean;
}) {
  const borderClass = showBorder
    ? "divider-dashed"
    : mobileShowBorder
      ? "divider-dashed-mobile"
      : "";

  return (
    <div
      className={`flex flex-col gap-[16px] pb-[24px] sm:gap-6 sm:pb-10 ${borderClass}`}
    >
      <div className="flex flex-col gap-[16px] sm:gap-5">
        <Stars />
        <p className="line-clamp-4 text-[16px] font-medium leading-[1.4] sm:text-[20px]">
          {review.text}
        </p>
      </div>
      <div className="flex items-center gap-[12px] sm:gap-4">
        <Image
          src={review.avatar}
          alt={review.name}
          width={48}
          height={48}
          className="size-[40px] rounded-full sm:size-[48px]"
        />
        <div className="flex flex-col gap-px">
          <span className="text-[16px] font-semibold leading-[1.4] sm:text-[18px]">
            {review.name}
          </span>
          <span className="text-[14px] font-medium leading-[1.4] text-[#777778] sm:text-[16px]">
            {review.date}
          </span>
        </div>
      </div>
    </div>
  );
}
