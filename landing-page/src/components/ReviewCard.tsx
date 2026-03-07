import Image from "next/image";

export type Review = {
  text: string;
  name: string;
  date: string;
  avatar: string;
};

function Stars() {
  return (
    <div className="flex gap-[3.2px]">
      {[...Array(5)].map((_, i) => (
        <Image key={i} src="/images/star.svg" alt="" width={16} height={16} />
      ))}
    </div>
  );
}

export default function ReviewCard({
  review,
  showBorder = true,
}: {
  review: Review;
  showBorder?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-6 pb-10 ${showBorder ? "divider-dashed" : ""}`}
    >
      <div className="flex flex-col gap-5">
        <Stars />
        <p className="line-clamp-4 text-[20px] font-medium leading-[1.4]">
          {review.text}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Image
          src={review.avatar}
          alt={review.name}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex flex-col gap-px">
          <span className="text-[18px] font-semibold leading-[1.4]">
            {review.name}
          </span>
          <span className="text-[16px] font-medium leading-[1.4] text-[#777778]">
            {review.date}
          </span>
        </div>
      </div>
    </div>
  );
}
