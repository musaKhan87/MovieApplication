import {
  useLoaderData,
  useNavigate,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import { Card } from "../components/UI/Card";
import { Loading } from "../components/layouts/Loading";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

export const Movie = () => {
  const ApiData = useLoaderData();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const navigation = useNavigation();

  // Get page number from URL, default to 1
  const page = Number(searchParams.get("page")) || 1;

  const handleNextPage = () => {
    navigate(`/movie?page=${page + 1}`);
  };

  const handlePrevPage = () => {
    navigate(`/movie?page=${prevPage}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ q: query, page: 1 });
  };

  if (navigation.state === "loading") return <Loading />;

  return (
    <>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn">
          <IoIosSearch />
        </button>
      </form>

      <ul className="container grid grid-four--cols">
        {ApiData.Search.map((curMoive) => {
          return <Card key={curMoive.imdbID} curMovie={curMoive} />;
        })}
      </ul>
      <div className="prevNextContainer container">
        <button disabled={page < 1} onClick={handlePrevPage} className="btn">
          Previous Page
        </button>
        <p>{page}</p>
        <button onClick={handleNextPage} className="btn">
          Next Page
        </button>
      </div>
    </>
  );
};
