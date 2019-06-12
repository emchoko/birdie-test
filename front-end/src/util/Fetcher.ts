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
        
        if (response.status === 200) {
            return await response.json();
        }
        return null;
    }
}

export default Fetcher;