class Fetcher {
    public static async getRecipients(){
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        const options = {
            method: 'GET',
            headers: headers
        };

        const fetchURL = Constants.API_URL + "/recipient";
        const request = new Request(fetchURL, options);
        const response = await fetch(request);

        if(response.status === 200) return response.json();
        return null;
    }
}