interface RateRow {
  label: string;
  value: string;
}

interface RateTableProps {
  rows: RateRow[];
}

export default function RateTable({ rows }: RateTableProps) {
  return (
    <section className="px-4 pt-[32px] pb-[32px] sm:px-6 sm:pt-[60px] sm:pb-[120px] lg:px-[120px]">
      <div className="mx-auto max-w-[1200px]">
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`flex items-center gap-[40px] py-[20px] ${i < rows.length - 1 ? "border-b border-[#dcdcdc]" : ""}`}
          >
            <p className="min-w-0 flex-1 text-[16px] font-medium leading-[1.4] text-[#777778] sm:text-[22px]">
              {row.label}
            </p>
            <p className="min-w-0 flex-1 text-[16px] font-medium leading-[1.4] text-[#0a0a0a] sm:text-[22px]">
              {row.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
