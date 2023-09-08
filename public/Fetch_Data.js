import axios from "axios";

// Replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=YOUR_API_KEY_HERE';

axios.get(url, {
    headers: {'User-Agent': 'axios'}
})
.then((response) => {
    // Check if the response status is 200 (OK)
    if (response.status === 200) {
        console.log(response.data);
        data = response.data;
    } else {
        console.log('Status:', response.status);
    }
})
.catch((error) => {
    console.error('Error:', error);
});