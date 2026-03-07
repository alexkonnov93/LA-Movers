"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const SAMPLE_ADDRESSES = [
  "1226 University Drive, Menlo Park, CA, USA",
  "1226 University Dr, Dekalb, IL, USA",
  "1226 West University Drive, Mesa, AZ, USA",
  "1226 University Drive, Durham, NC, USA",
  "1226 University Drive, Huntsville, AL, USA",
  "Los Angeles, CA, USA",
  "Los Feliz, Los Angeles, CA, USA",
  "Long Beach, CA, USA",
  "Santa Monica, CA, USA",
  "San Fernando Valley, CA, USA",
  "Beverly Hills, CA, USA",
  "Burbank, CA, USA",
  "Pasadena, CA, USA",
  "Hollywood, Los Angeles, CA, USA",
  "Glendale, CA, USA",
  "Malibu, CA, USA",
  "Venice, Los Angeles, CA, USA",
  "West Hollywood, CA, USA",
  "Culver City, CA, USA",
  "Encino, Los Angeles, CA, USA",
  "Sherman Oaks, Los Angeles, CA, USA",
  "90001, Los Angeles, CA, USA",
  "90024, Los Angeles, CA, USA",
  "90210, Beverly Hills, CA, USA",
  "90401, Santa Monica, CA, USA",
  "91101, Pasadena, CA, USA",
];

const USE_MOCK =
  !process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY ||
  process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY === "YOUR_API_KEY_HERE";

interface AddressInputProps {
  label: string;
  placeholder: string;
  className?: string;
  onPlaceSelect?: (place: google.maps.places.PlaceResult) => void;
}

/* ── Mock autocomplete (no API key) ─────────────────────── */
function MockAddressInput({
  label,
  placeholder,
  className = "",
  onPlaceSelect,
}: AddressInputProps) {
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState(false);
  const [focused, setFocused] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const query = value.toLowerCase().trim();
  const filtered = query
    ? SAMPLE_ADDRESSES.filter((a) => a.toLowerCase().includes(query)).slice(
        0,
        5
      )
    : [];

  const showDropdown = open && filtered.length > 0;

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setFocused(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Scroll active item into view
  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const item = listRef.current.children[activeIndex] as
        | HTMLElement
        | undefined;
      item?.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  const select = (addr: string) => {
    setValue(addr);
    setSelected(true);
    setOpen(false);
    setFocused(false);
    setActiveIndex(-1);
    onPlaceSelect?.({
      formatted_address: addr,
      name: addr,
    } as google.maps.places.PlaceResult);
  };

  const clear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setValue("");
    setSelected(false);
    setOpen(false);
    inputRef.current?.focus();
  };

  const handleCellClick = () => {
    if (selected && !open) {
      setSelected(false);
      setOpen(true);
      setTimeout(() => inputRef.current?.focus(), 0);
    } else {
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i < filtered.length - 1 ? i + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i > 0 ? i - 1 : filtered.length - 1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      select(filtered[activeIndex]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={`relative min-w-0 cursor-text transition-colors ${
        showDropdown || focused ? "bg-white/10" : "hover:bg-white/5"
      } ${className}`}
      onClick={handleCellClick}
    >
      {/* Inner row — clips content but not the dropdown */}
      <div className="flex h-full min-w-0 overflow-hidden items-center gap-[16px]">
        {/* Label + Input */}
        <div className="flex min-w-0 flex-1 flex-col items-start gap-[2px] font-medium leading-[1.4] text-white/50">
          <span className="text-[14px]">{label}</span>

          {selected && !open ? (
            <span className="block w-full truncate text-[20px] text-white">
              {value}
            </span>
          ) : (
            <input
              ref={inputRef}
              type="text"
              value={value}
              placeholder={placeholder}
              onChange={(e) => {
                setValue(e.target.value);
                setSelected(false);
                setOpen(true);
                setActiveIndex(-1);
              }}
              onFocus={() => {
                setFocused(true);
                if (query) setOpen(true);
              }}
              onBlur={() => setFocused(false)}
              onKeyDown={handleKeyDown}
              className={`w-full overflow-hidden text-ellipsis bg-transparent text-[20px] placeholder-white/50 outline-none ${
                value ? "text-white" : "text-white/50"
              }`}
            />
          )}
        </div>

        {/* Clear button — visible when input has a value */}
        {value && (
          <button
            type="button"
            onClick={clear}
            className="shrink-0 text-white/40 transition-colors hover:text-white/70"
          >
            <Icon icon="tdesign:close-circle-filled" width={24} height={24} />
          </button>
        )}

        {/* Chevron — flips when dropdown is open */}
        <Image
          src="/images/chevron-down.svg"
          alt=""
          width={12}
          height={7}
          className={`shrink-0 transition-all duration-200 ${
            showDropdown
              ? "rotate-180 opacity-80"
              : "opacity-50"
          }`}
        />
      </div>

      {/* Dropdown — opens upward, outside the clipped row */}
      {showDropdown && (
        <ul
          ref={listRef}
          className="absolute bottom-full left-0 right-0 z-50 mb-[8px] overflow-hidden rounded-[12px] bg-[rgba(0,0,0,0.9)] backdrop-blur-[12px]"
        >
          <div className="flex flex-col gap-[4px] px-[4px] py-[4px]">
            {filtered.map((addr, i) => (
              <li
                key={addr}
                onMouseDown={() => select(addr)}
                onMouseEnter={() => setActiveIndex(i)}
                className={`cursor-pointer px-[8px] py-[8px] text-[16px] font-medium leading-[1.4] transition-colors ${
                  i === activeIndex
                    ? "rounded-[8px] bg-white/10 text-white"
                    : "rounded-[6px] text-[#dcdcdc]"
                }`}
              >
                {addr}
              </li>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
}

/* ── Google Places autocomplete (with API key) ──────────── */
function GoogleAddressInput({
  label,
  placeholder,
  className = "",
  onPlaceSelect,
}: AddressInputProps) {
  const [Autocomplete, setAutocomplete] = useState<
    typeof import("react-google-autocomplete").default | null
  >(null);
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState(false);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    import("react-google-autocomplete").then((mod) => {
      setAutocomplete(() => mod.default);
    });
  }, []);

  const clear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setValue("");
    setSelected(false);
    inputRef.current?.focus();
  };

  const handleCellClick = () => {
    if (selected) {
      setSelected(false);
      setTimeout(() => inputRef.current?.focus(), 0);
    } else {
      inputRef.current?.focus();
    }
  };

  return (
    <div
      className={`relative min-w-0 cursor-text transition-colors ${
        focused ? "bg-white/10" : "hover:bg-white/5"
      } ${className}`}
      onClick={handleCellClick}
    >
      <div className="flex h-full min-w-0 overflow-hidden items-center gap-[16px]">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-[2px] font-medium leading-[1.4] text-white/50">
          <span className="text-[14px]">{label}</span>

          {selected ? (
            <span className="block w-full truncate text-[20px] text-white">
              {value}
            </span>
          ) : Autocomplete ? (
            <Autocomplete
              ref={inputRef}
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}
              onPlaceSelected={(place) => {
                const addr = place.formatted_address || place.name || "";
                setValue(addr);
                setSelected(true);
                setFocused(false);
                onPlaceSelect?.(place);
              }}
              onChange={(e) => {
                setValue((e.target as HTMLInputElement).value);
                setSelected(false);
              }}
              options={{
                componentRestrictions: { country: "us" },
                fields: ["formatted_address", "geometry", "name", "place_id"],
                types: ["(regions)"],
              }}
              defaultValue={value}
              placeholder={placeholder}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className={`w-full overflow-hidden text-ellipsis bg-transparent text-[20px] placeholder-white/50 outline-none ${
                value ? "text-white" : "text-white/50"
              }`}
            />
          ) : (
            <input
              type="text"
              placeholder={placeholder}
              className="w-full overflow-hidden text-ellipsis bg-transparent text-[20px] placeholder-white/50 outline-none text-white/50"
              readOnly
            />
          )}
        </div>

        {/* Clear button — visible when input has a value */}
        {value && (
          <button
            type="button"
            onClick={clear}
            className="shrink-0 text-white/40 transition-colors hover:text-white/70"
          >
            <Icon icon="tdesign:close-circle-filled" width={24} height={24} />
          </button>
        )}

        <Image
          src="/images/chevron-down.svg"
          alt=""
          width={12}
          height={7}
          className="shrink-0 opacity-50 transition-opacity group-hover:opacity-80"
        />
      </div>
    </div>
  );
}

/* ── Export: auto-switch based on API key presence ──────── */
export default function AddressInput(props: AddressInputProps) {
  if (USE_MOCK) return <MockAddressInput {...props} />;
  return <GoogleAddressInput {...props} />;
}
