const key = import.meta.env.VITE_REACT_APP_GOOGLE_BOOKS_API_KEY;
const actualYear = new Date().getFullYear();
const requests = {
  requestPopular: `https://www.googleapis.com/books/v1/volumes?q=football+clubs&orderBy=relevance&maxResults=20&key=${key} `,
  requestNewest: `https://www.googleapis.com/books/v1/volumes?q=football+clubs&maxResults=20&filter=ebooks&printType=books&orderBy=newest&publishedDate=${actualYear}&key=${key}`,
  requestPopularByLeague: `https://www.googleapis.com/books/v1/volumes?q={league}+football+clubs&orderBy=relevance&maxResults=10&key=${key}`,
  requestSearch: `https://www.googleapis.com/books/v1/volumes?q=intitle:football+club&orderBy=relevance&maxResults=20&key=${key}`,
};
export default requests;
