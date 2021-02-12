import React, { useEffect, useState } from 'react';
import { getProduct, productStar } from '../functions/product';
import SingleProduct from '../components/cards/SingleProduct';
import { useSelector } from 'react-redux';
import { getRelated } from '../functions/product';
import ProductCard from '../components/cards/ProductCard';
import {useTranslation} from 'react-i18next'

const Product = ({ match }) => {
	const {t, i18n} = useTranslation();
	const [ product, setProduct ] = useState({});
	const [ related, setRelated ] = useState([]);
	const [ star, setStar ] = useState(0);
	// redux
	const { user, search } = useSelector((state) => ({ ...state }));

	const { slug } = match.params;

	useEffect(
    () => {
			loadSingleProduct();
		},
		[ slug ,search]
	);

	useEffect(() => {
		if (product.ratings && user) {
			let existingRatingObject = product.ratings.find((ele) => ele.postedBy.toString() === user._id.toString());
			existingRatingObject && setStar(existingRatingObject.star); // current user's star
		}
	});

	const loadSingleProduct = () => {
		getProduct(slug).then((res) => {
			setProduct(res.data);
			// load related
			getRelated(res.data._id).then((res) => setRelated(res.data));
		});
	};

	const onStarClick = (newRating, name) => {
		setStar(newRating);
		console.table(newRating, name);
		productStar(name, newRating, user.token).then((res) => {
			console.log('rating clicked', res.data);
			loadSingleProduct(); // if you want to show updated rating in real time
		});
	};

	return (
		<div className="container-fluid">
			<div className="row pt-4">
				<SingleProduct product={product} onStarClick={onStarClick} star={star} />
			</div>

			<div className="row">
				<div className="col text-center pt-5 pb-5">
					<hr />
					<h4>{t("RL")}</h4>
					<hr />
				</div>
			</div>

			<div className="row pb-5">
				{related.length ? (
					related.map((r) => (
						<div key={r._id} className="col-md-4">
							<ProductCard product={r} />
						</div>
					))
				) : (
					<div className="text-center col">{t("NPF")}</div>
				)}
			</div>
		</div>
	);
};

export default Product;
