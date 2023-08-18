import { useState } from "react";
//import UpdateTwoWayBinding from "./update";

const TwoWayBinding = () => {
	const [product, setProduct] = useState({
		Name: "TV",
		Price: 0,
		City: "Select City",
		Stock: false,
	});

	const onNameChange = (e) => {
		setProduct({
			Name: e.target.value,
			Price: product.Price,
			City: product.City,
			Stock: product.Stock,
		});
	};

	const onPriceChange = (e) => {
		setProduct({
			Price: e.target.value,
			Name: product.Name,
			City: product.City,
			Stock: product.Stock,
		});
	};

	const onCityChange = (e) => {
		setProduct({
			Price: product.Price,
			Name: product.Name,
			City: e.target.value,
			Stock: product.Stock,
		});
	};

	const onStockChange = (e) => {
		setProduct({
			Price: product.Price,
			Name: product.Name,
			City: product.City,
			Stock: e.target.value,
		});
	};
	return (
		<>
			<div>
				<dl>
					<dt>Name</dt>
					<dd>
						<input type="text" value={product.Name} onChange={onNameChange} />
					</dd>

					<dt>Price</dt>
					<dd>
						<input type="text" value={product.Price} onChange={onPriceChange} />
					</dd>

					<dt>City</dt>
					<dd>
						<input type="text" value={product.City} onChange={onCityChange} />
					</dd>

					<dt>Stock</dt>
					<dd>
						<input type="text" value={product.Stock} onChange={onStockChange} />
					</dd>
				</dl>
			</div>
			<div>
				<dl>
					<dt>Name</dt>
					<dd>{product.Name}</dd>
					<dt>Price</dt>
					<dd>{product.Price}</dd>
					<dt>City</dt>
					<dd>{product.City}</dd>
					<dt>Stock</dt>
					<dd>{product.Stock}</dd>
				</dl>
			</div>
		</>
	);
};

//<UpdateTwoWayBinding/>

export default TwoWayBinding;
