import React from "react";
import styled from "styled-components";
import pic from "../assets/2.webp";
import { useParams } from "react-router-dom";
import axios from "axios";

interface MyData {
	_id: string;
	ISBN: string;
	author: string;
	authorImage: string;
	coverImage: string;
	category: string;
	summary: string;
	title: string;
	views: string[];
}
const SingleBook = () => {
	const [singleData, setSingleData] = React.useState<MyData>();

	const { id } = useParams();
	console.log(id);

	const fetchSingleBook = async () => {
		await axios.get(`http://localhost:5000/server/getone/${id}`).then((res) => {
			console.log(res);

			setSingleData(res.data.data);
		});
	};

	React.useEffect(() => {
		fetchSingleBook();
	}, []);

	return (
		<Container>
			<Wrapper>
				<First>
					<Hold>
						<AuthorImage>{singleData?.authorImage}</AuthorImage>
						<AuthName>{singleData?.author} </AuthName>
					</Hold>
				</First>
				<MainImage src={singleData?.coverImage} />
				<h2>{singleData?.title}</h2>
				<Desc>{singleData?.summary}</Desc>
			</Wrapper>
		</Container>
	);
};

export default SingleBook;

const Wrapper = styled.div`
	width: 80%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	text-align: left;

	h2 {
		width: 100%;
	}
`;
const Desc = styled.div`
	font-size: 18px;
`;

const AuthorImage = styled.div`
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background-color: #bb3d6e;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-weight: bold;
	margin-right: 10px;
`;
const AuthName = styled.div`
	font-weight: bold;
	font-size: 25px;
`;

const Hold = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	width: 100%;
`;
const MainImage = styled.img`
	height: 500px;
	width: 100%;
	border-radius: 5px;
	background-color: #e7e6e6;
	margin-right: 5px;
	object-fit: contain;
	margin-top: 30px;
`;
const First = styled.div`
	display: flex;
	margin-top: 50px;
`;
const AuthImage = styled.div``;
const Name = styled.div``;
const But = styled.div`
	height: 30px;
	width: 120px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: silver;
	border-radius: 5px;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	text-align: left;
	width: 100%;
	padding-bottom: 70px;
`;
