import PaginationButtons from "./PaginationButtons";

const SearchResults = ({ results }) => {
  return (
    <div className="mx-auto w-full px-10  md:pl-32 lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3 ">
        About {results.searchInformation?.formattedTotalResults} results(
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((item) => (
        <div key={item.link} className="max-w-full mb-8">
          <div className="group">
            <a href={item.link} className="text-xs">
              {item.formattedUrl}
            </a>
            <a href={item.link}>
              <h2 className="truncate text-lg text-blue-800 group-hover:underline">
                {item.title}
              </h2>
            </a>
          </div>
          <p className="text-sm">{item.snippet}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
};

export default SearchResults;
