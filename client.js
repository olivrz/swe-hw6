/* Run only in postman client */

const server = "http://localhost:3000"

const NUM_CLIENT_REQUESTS = 10;

for(let i = 0; i < NUM_CLIENT_REQUESTS; i++) {

    let text = "text_0";
    let delay = (Math.random() < 0.5) ? 0 : 50; // delay in milliseconds
    setTimeout(() => { text = "text_22"; }, delay);

    let myRequest = {
        url: server,
        method: 'POST',
        body: JSON.stringify(text)
    };

    pm.sendRequest(myRequest, function (err, response) {
        if (err) {
            console.log(err);
        } else {
            console.log(response.json() == text);
            console.log(`response: ${response.json()} and text: ${text}`)
        }
    });
}