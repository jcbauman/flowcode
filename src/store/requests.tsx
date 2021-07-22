export const GET_PAGES_ENDPOINT =  'https://dtxsharedprodcdn2.blob.core.windows.net/random/flowpages-mock-data.json';

export async function getTrendingPages(){
const response = await fetch(GET_PAGES_ENDPOINT);
console.log('resp',response.json());
    // fetch(GET_PAGES_API)
    //     .then(response => {
    //         if (response.ok) {
    //             return response.json();
    //         }
    //         throw response;
    //     })
    //     .catch(data => console.log(data));
};