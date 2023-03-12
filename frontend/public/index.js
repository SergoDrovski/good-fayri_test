const qs = require('qs');
const query = qs.stringify(
    {
        populate: {
            header: {
                populate: {
                    navigations: {
                        fields: ['title','url'],
                        populate: '*',
                    },
                    logoHeader: {
                        populate: {
                            imgUrl: {
                                fields: ['name', 'url'],
                            },
                            titleImg: {
                                populate: '*'
                            },
                            alt: {
                                populate: '*'
                            }
                        }
                    },
                    titleHeader: {
                        populate: '*'
                    }
                },
            },
            body: {
                populate: '*'
            },
            footer: {
                populate: '*'
            },
        },
    },
    {
        encodeValuesOnly: true,
    }
);
console.log(`http://localhost:1337/api/homepage?${query}`);

fetch(`http://localhost:1337/api/homepage?${query}`).then(res => {
     res.json().then(json => {
         console.log(json);
     });
});
