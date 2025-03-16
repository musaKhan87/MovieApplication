export const getApiData = async ({ request }) => {
  try {
    const url = new URL(request.url);
    let page = url.searchParams.get("page") || 1;
    let query = url.searchParams.get("q") || "marvel";

    const Api = `https://www.omdbapi.com/?i=tt3896198&apikey=${
      import.meta.env.VITE_API_KEY
    }&s=${query}&page=${page}`;

    const data = await fetch(Api);
    const res = await data.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};
