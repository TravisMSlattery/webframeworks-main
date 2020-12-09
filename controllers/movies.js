const request = require('request');

const apiOptions = { 
server : 'https://trav-backend.herokuapp.com/api' 
}; 
if (process.env.NODE_ENV === 'production') { 
apiOptions.server = 'https://trav-backend.herokuapp.com/api'; 
}

//Reguste returns an object of movie
const requestOptions = {
    url : 'https://trav-backend.herokuapp.com/api/movies', 
    method : 'GET', 
    json : {}, 
    qs : { 
    offset : 20 
    } 
    };

    request(requestOptions, (err, response, body) => { 
        if (err) { 
        console.log(err); 
        } else if (response.statusCode === 200) { 
        console.log(body); 
        } else { 
        console.log(response.statusCode); 
        } 
        });
        

const _renderHomepage = function(req, res, responseBody){
    res.render('movies', {
    title: 'Movies',
    movies: responseBody 
   
    });
    };

    const show_movies_page = function (req, res) {
        const path = '/movies'; 
        const requestOptions = { 
            url : apiOptions.server + path, 
            method : 'GET', 
            json : {}, 
            qs : { 
                offset: 20
            } 
            };
    request(requestOptions, (err, response, body) => {  
        _renderHomepage(req, res, body);
    }
    )
    };
    
    

// exports.show_movies_page = async (req, res) => {

//     const movies = await Movie.find({})

//     res.render('movies', {

//         // pass in movies object so we can use in pug view
//         movies
//     })
// }

// exports.delete_movie = async (req, res) => {

//     await Movie.remove({
//         _id: req.params.id
//     })
//     res.redirect('/movies')
// }

// exports.add_movie = async (req, res) => {

//     movie = new Movie({
//         title: req.body.title,
//         year: req.body.year,
//         rating: req.body.rating,
//         description: req.body.description,
//         stock: req.body.stock
//     });
//     await movie.save();
//     res.redirect('/movies')
// }

module.exports = {
    show_movies_page

} 





/*
router.get('/rent/:id', async (req, res) => {

   const movieStock = await Movie.find({_id: req.body._id})
   
   const newStock = movieStock.stock - 1


   await Movie.findOneAndUpdate({ id: req.body._id }, { $set: { "stock":  newStock } 


    });
});



router.get('/return', async (req, res) => {

    const movies = await Movie.find({})

    res.render('movies', {

        movies

    })

});

*/