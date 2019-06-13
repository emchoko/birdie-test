import { API_URL } from './Constants';

class Fetcher {
    static async getRecipients() {
        const fetchURL = API_URL + '/recipient';
        const request = new Request(fetchURL, this.getOptionsAndHeaders());
        const response = await fetch(request);

        if (response.status === 200) {
            return await response.json();
        }
        return null;
    }

    static async getEvents(recipient: string, date: Date) {
        const fetchURL = API_URL + '/recipient/' + recipient +
            '?startDate=' + date + '&endDate=' + new Date(date.getTime() + 1000 * 60 * 60 * 24);
        const request = new Request(fetchURL, this.getOptionsAndHeaders());
        const response = await fetch(request);

        if (response.status === 200) {
            const body = await response.json();
            console.log(body);
            return body;
        }
        return null;
    }

    private static getOptionsAndHeaders() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const options = {
            method: 'GET',
            headers: headers,
        };
        return options;
    }
}

export default Fetcher;