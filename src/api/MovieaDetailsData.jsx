export const getMovieDetailsData = async ({ params }) => {
  try {
    const Api = `https://www.omdbapi.com/?i=${params.movieID}&apikey=${
      import.meta.env.VITE_API_KEY
    }`;

    const data = await fetch(Api);
    const res = await data.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};
