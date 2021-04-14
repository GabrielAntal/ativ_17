const axios = require('axios').default;

axios.post('http://localhost:3000/books', {
    ID: 3,
    name: 'My Boook',
    author: 'Me and only me'
})
    .then((res) => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err.response.data);
    });

axios.get('http://localhost:3000/books')
    .then((response) => {
        response.log(response.data);
    }).then((res)=>{
        axios.get('http://localhost:3000/books/'+res[0].params.ID)
        .then((res)=>{
            response.log(res.data);
        })
        .then((res)=>{
            axios.get('http://localhost:3000/books/'+res[1].data.id)
            .then((res)=>{
                console.log(res.data);
            })
    });


axios.post('http://localhost:3000/books',{
    ID: 17,
    name: 'Silmarillion',
    author: 'J.R.R Tolkien'
})  .then((response) => {
    console.log(response.data);
})
.catch(err => {
    console.log(err.response.data);
});

axios.post('http://localhost:3000/books',{
    ID: 17,
    name: 'Beowulf',
    author: 'J.R.R Tolkien'
}).then((response) => {
    console.log(response.data);
})
.catch(err => {
    console.log(err.response.data);
})});


axios.get('http://localhost:3000/log')
.then((response)=>{
    console.log(response.data);
})
