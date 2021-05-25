window.haptikInitSettings = {
    "business-id": "3485",
    "client-id": "4260f620c9cc96eb9b5990a032b4c259e045cb2a",
    "base-url": "https://staging.hellohaptik.com/",
    'primary-color': "#6B6570",
    'widget-positioning': "bottom-right",
    "custom-css": "/Style/chatbotStyle.css",
    "header-text": "Image Gallery/Joke Teller"
};
alert('connected');

const img = document.getElementsByTagName('img')[0];

const openChat = () => {
    HaptikSDK.show();
}

const showBot = () => {
    HaptikSDK.show()
}

const hideBot = () => {
    HaptikSDK.hide()
}

const destroyBot = () => {
    HaptikSDK.destroy()
}

const initBot = () => {
    HaptikSDK.init({
        "business-id": "3485",
        "client-id": "4260f620c9cc96eb9b5990a032b4c259e045cb2a",
        "base-url": "https://staging.hellohaptik.com/",
        'primary-color': "#6B6570",
        'widget-positioning': "bottom-right",
        "custom-css": "/Style/chatbotStyle.css",
        "header-text": "Image Gallery/Joke Teller"
    });
}

const promptBot = () => {
    const input = document.getElementsByTagName('input')[0]
    const title = input[0].value.trim()
    const message = input[1].value.trim()
    if (title.length === 0 || message.length === 0) {
        alert("input provided is empty");
        return;
    }
    console.log(title + " " + message)
    HaptikSDK.prompt(title, message)
}

const signup = async () => {
    const mobilenumber = document.getElementById('mobilenumber').value.trim();
    const password = document.getElementById('password').value.trim();
    data = {
        "mobilenumber": mobilenumber,
        "password": password
    }
    const response = await fetch("/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    console.log(response)
}
