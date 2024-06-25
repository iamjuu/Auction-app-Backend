module.exports={
    propertyPost:(req,res) =>{
        console.log('here');
        console.log(req.body);
        res.status(200).json(true)

    }
}