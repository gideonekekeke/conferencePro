import React from "react";
import styled from "styled-components";
import pic from "../assets/2.webp";
// import axios from 'axios'

const BookList = () => {
	// const FetchData = async()=>{

	//     await axios.get("https://fakestoreapi.com/products").then((res) => {

	//     });
	// }

	// React.useEffect(()=>{
	//    FetchData()
	// },[])

	return (
		<Container>
			<Card>
				<ImageHolder>
					<Image src={pic} />
					<Cont>
						<Button>Case Study</Button>

						<TitleHold>
							<Title>Life is a Yam</Title>
						</TitleHold>
					</Cont>
				</ImageHolder>

				<DownPart>
					<Hold>
						<AuthorImage>P</AuthorImage>
						<AuthName>Gideon ekeke</AuthName>
					</Hold>
					<ViewIcon>view</ViewIcon>
				</DownPart>
			</Card>
		</Container>
	);
};

export default BookList;

const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

const Container = styled.div`
	margin-top: 30px;
	padding-bottom: 30px;
	padding: 20px;
`;
const Card = styled.div`
	/* height: 200px; */
	width: 300px;
	/* border: 1px solid silver; */
`;

const Title = styled.div`
	/* display: none; */
`;
const TitleHold = styled.div`
	/* background-color: red; */
	margin: 120px 10px;
	display: none;
	/* display: none; */
`;
const ImageHolder = styled.div`
	height: 200px;
	width: 100%;
	background-color: silver;
	position: relative;
	cursor: pointer;

	&.hover ~ ${TitleHold} {
		display: flex;
	}
`;
const DownPart = styled.div``;
const Cont = styled.div`
	position: absolute;
	height: 200px;
	width: 100%;
	/* background-color: red; */
	top: 0;
`;
const Button = styled.div`
	margin: 10px;
	background-color: #302f3e;
	width: 130px;
	height: 35px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-weight: bold;
	border-radius: 20px;
`;

const Hold = styled.div``;
const AuthorImage = styled.div``;
const AuthName = styled.div``;
const ViewIcon = styled.div``;
