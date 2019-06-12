import { API_URL } from './Constants';

class Fetcher {
    static async getRecipients() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const options = {
            method: 'GET',
            headers: headers
        };

        const fetchURL = API_URL + '/recipient';
        const request = new Request(fetchURL, options);
        const response = await fetch(request);

        console.log(response.json());

        if (response.status === 200) {
            return response.json();
        }
        return null;
    }
}

export default Fetcher;