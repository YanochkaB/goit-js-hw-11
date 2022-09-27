import axios from "axios";

// export default class NewsApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.pageNr = 1;
//   }

//   fetchImages() {
//     const url =
//       `https://pixabay.com/api/?key=30053890-3739f0374a33ec095701425e8&q=${this.searchQuery}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${this.pageNr}`;

//     return fetch(url)
//       .then(r => r.json())
//       .then(data => {
//         this.incrementPage();
//         // console.log(data)
//         return data.hits;
//       });
// }

//   incrementPage() {
//     this.pageNr += 1;
//   }
  
//   resetPage() {
//     this.pageNr = 1;
//   }
  
// get query() {
//   return this.searchQuery;
// }

// set query(newQuery) {
//   this.searchQuery = newQuery;
// }


export async function fetchImages(inputValue, pageNr) {
  const response = await axios.get(
    `https://pixabay.com/api/?key=30053890-3739f0374a33ec095701425e8&q=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`
  );
  return response.data
}



// export const fetchImages = async (inputValue, pageNr) => {
//   return await fetch(
//     `https://pixabay.com/api/?key=30053890-3739f0374a33ec095701425e8&q=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`
//   )
//     .then(response => {
//       if (!response.ok) {
//         if (response.status === 404) {
//           return [];
//         }
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .catch(error => {
//       console.error(error);
//     });
// };
  
