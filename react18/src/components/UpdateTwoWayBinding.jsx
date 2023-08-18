import { useState } from "react"

const UpdateTwoWayBinding = () =>{
    const [product, setProduct] = useState({Name: 'TV', Price:0, City: 'Select City', Stock: false})    
    const [newproduct, setNewProduct] = useState({Name: '', Price:'', City: '', Stock: ''});

    // Update button functionality to set values for newproduct
    const onUpdateButton = (e) => {
            e.preventDefault();
            setNewProduct(
                {
                    Name: product.Name,
                    Price: product.Price,
                    City: product.City,
                    Stock: product.Stock
                }
            );
            console.log("newProduct", newproduct);
            clearData();
    }
// Function to clear data from form after clicking on update button
    const clearData = (e) => {
        setProduct(
            {
                Name: "",
                Price: "",
                City: "",
                Stock: ""
            }
        );
    }

    
    return(  <>
       <div>
            <h3> UPDATE Example</h3>
            <form onSubmit={onUpdateButton}>
        <dl>
            <dt>Name</dt>
            <dd><input type="text" name="uname" value={product.Name} onChange={(e) => setProduct({...product, Name: e.target.value})}/></dd>

            <dt>Price</dt>
            <dd><input type="text" name="price" value={product.Price} onChange={(e) => setProduct({...product, Price: e.target.value})} /></dd>

            <dt>City</dt>
            <dd>{/* <input type="text" value={product.City} onChange={onValueChange}/> */}
            <select name="city" onChange={(e) => setProduct({...product, City: e.target.value})}>
                <option name="city" value="Bhopal">Bhopal</option>
                <option name="city" value="Delhi">Delhi</option>
                <option name="city" value="Indore">Indore</option>
                <option name="city" value="Jaipur">Jaipur</option>
            </select>
            </dd>

            <dt>Stock</dt>
            <dd><input type="checkbox" name="stock" onChange={(e) => setProduct({...product, Stock: e.target.value})} checked={product.Stock}/></dd>

            <dd><button >Submit</button></dd>
            </dl>
         </form>   
        </div>
            <div>
                <dl>
                    <dt>Name</dt>
                    <dd>{newproduct.Name}</dd>
                    <dt>Price</dt>
                    <dd>{newproduct.Price}</dd>
                    <dt>City</dt>
                    <dd>{newproduct.City}</dd>
                    <dt>Stock</dt>
                    <dd>{newproduct.Stock  ? "Available" : "Not Available"}</dd>

                </dl>
            </div>
        
        
        </>
    )

};

export default UpdateTwoWayBinding;