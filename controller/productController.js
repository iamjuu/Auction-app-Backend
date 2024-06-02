module.exports={
  addproductPost: (req, res) => {
        const { name, propertyname, minimumdata, Phone, Address, propertyType } = req.body;
        const propertyImage = req.file; // Access the uploaded file
      
        console.log('Name:', name);
        console.log('Property Name:', propertyname);
        console.log('Minimum Price:', minimumdata);
        console.log('Phone:', Phone);
        console.log('Address:', Address);
        console.log('Property Type:', propertyType);
        console.log('Property Image:', propertyImage);
    
      }
      

}