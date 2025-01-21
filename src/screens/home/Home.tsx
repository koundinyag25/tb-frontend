import { Button, Input, Spin } from "antd";
import { useState } from "react";
import { postSearchText } from "src/services/cve";
import CveCards from "src/components/cveCard";
import { CVE } from "src/components/cveCard/types";
import Markdown from "react-markdown";

export const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<{
    data: { cves: CVE[] };
    insights: string;
  }>({
    data: { cves: [] },
    insights: "",
  });
  const [loading, setLoading] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const results = await postSearchText(searchText);
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  console.log({ searchResults });
  const markdown = searchResults?.insights;

  console.log({ markdown });

  return (
    <div className="h-full w-full">
      <div className="flex p-4 gap-2">
        <div className="flex gap-2 w-full justify-center items-center ">
          <div className="flex w-[70%] gap-2 p-2">
            <Input
              placeholder="Start typing to get CVEs"
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button onClick={handleSearch} loading={loading}>
              Search
            </Button>
          </div>
        </div>
      </div>
      <div className="p-4  h-[80vh] gap-4 flex">
        <div className="flex flex-col gap-4 w-[70%] overflow-y-auto h-full bg-gray-100">
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <Spin />
              please wait while we fetch your data
            </div>
          ) : searchResults?.data?.cves.length > 0 ? (
            (searchResults?.data?.cves as CVE[]).map(
              (result: CVE, index: number) => (
                <CveCards key={index} cve={result} />
              )
            )
          ) : (
            <div className="flex justify-center items-center h-full">
              {searchText && searchResults?.data?.cves.length === 0
                ? "No results found, Try searching for something else"
                : "Start typing to get CVEs"}
            </div>
          )}
        </div>
        <div className="flex justify-center items-center w-[30%] h-full bg-gray-100">
          <div className="w-[80%] h-[80%] block overflow-y-auto">
            <Markdown>{markdown}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
};
