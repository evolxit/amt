import { getPermalink } from "~/utils/permalinks";

const Pagination = ({ currentPage, totalPage }) => {
  const pages = Array.from({ length: totalPage }, (v, k) => k + 1);
  return (
    <div className="p-5  w-full">
      <nav
        role="navigation"
        aria-label="Pagination Navigation"
        className="flex items-center justify-center"
      >
        <ol className="flex items-center gap-2">
          {pages.map((page, index) => (
            <li key={index}>
              <a
                href={getPermalink("/products") + "?page=" + page}
                className={`pagination-btn ${
                  currentPage == page ? "active" : ""
                }`}
              >
                <span>{page}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Pagination;
