
class NewsController{
    //[GET] /NEWS
    index(req,res){
        res.render('news')

    }
    //[GET ]/new slug
    show(req,res){
        res.send('Slug is dispatch!')
    }

}
module.exports= new NewsController;