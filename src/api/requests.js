const key = import.meta.env.VITE_REACT_APP_GOOGLE_BOOKS_API_KEY;
const requests = {
  requestPopular: `https://www.googleapis.com/books/v1/volumes?q=football+clubs&orderBy=relevance&maxResults=20&key=${key} `,
  requestNewest: `https://www.googleapis.com/books/v1/volumes?q=football+clubs&orderBy=newest&maxResults=20&key=${key}`,
  requestPopularByLeague: `https://www.googleapis.com/books/v1/volumes?q={league}+football+clubs&orderBy=relevance&maxResults=10&key=${key}`,
  requestSearch:`https://www.googleapis.com/books/v1/volumes?q=intitle:football+club&orderBy=relevance&maxResults=20&key=${key}`
};
export default requests;
