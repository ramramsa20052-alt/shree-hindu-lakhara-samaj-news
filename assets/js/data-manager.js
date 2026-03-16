// Central Data Manager for Lakhara News Portal
const LakharaData = {
    // Default Data
    defaults: {
        ticker: [
            "श्री हिन्दू लखारा समाज का वार्षिक महोत्सव 25 मार्च को आयोजित होगा — सभी सदस्यों को आमंत्रण",
            "जोधपुर में नई धर्मशाला का निर्माण कार्य अंतिम चरण में — उद्घाटन 2 अप्रैल को"
        ],
        posts: [
            {
                id: 1,
                title: "समाज की वार्षिक बैठक: शिक्षा और रोजगार पर विशेष ध्यान देने का संकल्प",
                category: "society",
                excerpt: "जोधपुर स्थित समाज भवन में आयोजित बैठक में समाज के वरिष्ठ सदस्यों ने हिस्सा लिया।",
                views: "1.2K",
                author: "राजेश शर्मा",
                date: "16 Mar 2026"
            }
        ]
    },

    // Initialize Data
    init() {
        if (!localStorage.getItem('lakhara_ticker')) {
            localStorage.setItem('lakhara_ticker', JSON.stringify(this.defaults.ticker));
        }
        if (!localStorage.getItem('lakhara_posts')) {
            localStorage.setItem('lakhara_posts', JSON.stringify(this.defaults.posts));
        }
    },

    // Getters
    getTicker() {
        return JSON.parse(localStorage.getItem('lakhara_ticker'));
    },
    getPosts() {
        return JSON.parse(localStorage.getItem('lakhara_posts'));
    },

    // Setters
    updateTicker(newTickerArray) {
        localStorage.setItem('lakhara_ticker', JSON.stringify(newTickerArray));
    },
    addPost(post) {
        let posts = this.getPosts();
        posts.unshift(post);
        localStorage.setItem('lakhara_posts', JSON.stringify(posts));
    }
};

LakharaData.init();
