import { CONTACT, INFORMATION } from "../../constants";

export const Footer = () => {
  return (
    <div className="w-full   text-neutral-500">
      <div className="w-full max-w-[900px]  mx-auto flex justify-between items-center py-4">
        <button>StoreTest</button>
        <div className="flex flex-col gap-3">
          {INFORMATION.map((c, i) => (
            <a key={i} className="hover:text-fuchsia-500">
              {c}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {CONTACT.map((c, i) => (
            <a key={i} className="hover:text-fuchsia-500">
              {c}
            </a>
          ))}
        </div>
      </div>
      <p className="w-full text-center text-neutral-400 py-4 text-sm">
        © 2025 Store Test All rights reserved.
      </p>
    </div>
  );
};
