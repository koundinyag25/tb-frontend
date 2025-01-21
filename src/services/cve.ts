import http from "src/integrations/http";

export const postSearchText = async (searchText: string) => {
  const response = await http.post("/search", {
    prompt: searchText,
    limit: 50,
  });
  return response.data;
};

export const getCVE = async (cveId: string) => {
  const response = await http.get(`/cve/${cveId}`);
  return response.data;
};
