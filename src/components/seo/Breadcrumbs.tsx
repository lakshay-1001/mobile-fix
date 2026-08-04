import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  name: string;
  path?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-7 text-sm text-[#6f5963]">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => (
          <li key={`${item.name}-${index}`} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight size={14} aria-hidden="true" />}
            {item.path ? (
              <Link to={item.path} className="rounded font-semibold text-[#b7004f] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7004f]">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
