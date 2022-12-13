import React from "react";
import styled from "styled-components";
import pic from "../assets/2.webp";
import { AiOutlineEye } from "react-icons/ai";
// import axios from 'axios'
import data from "../Data.json";
import { Link } from "react-router-dom";

const BookList = () => {
	return (
		<Container>
			{data.map((props) => (
				<Card key={props.id}>
					<Link to={`/books/${props.id}/details`}>
						<ImageHolder>
							<Image src={pic} />
							<Cont>
								<Button>{props.title}</Button>

								<TitleHold>
									<Title>Life is a Yam</Title>
								</TitleHold>
							</Cont>
						</ImageHolder>
					</Link>

					<DownPart>
						<Hold>
							<AuthorImage>G</AuthorImage>
							<AuthName>Gideon ekeke</AuthName>
						</Hold>
						<ViewIcon>
							<AiOutlineEye />
							<span> 19k</span>
						</ViewIcon>
					</DownPart>

					<HoverCard>
						<First>
							<Hold>
								<AuthorImage>G</AuthorImage>
								<AuthName>Gideon ekeke</AuthName>
							</Hold>

							<But>+ View</But>
						</First>
						<Second>
							<MainImage src={pic} />
							<MainImage src={pic} />
							<MainImage src={pic} />
						</Second>
					</HoverCard>
				</Card>
			))}
		</Container>
	);
};

export default BookList;

const HoverCard = styled.div`
	height: 150px;
	width: 100%;
	/* background-color: red; */
	position: absolute;
	display: flex;
	flex-direction: column;
	top: 10px;
	border-radius: 5px;
	background-color: white;
	box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
	padding: 20px;
	z-index: 1;

	display: none;
	/* display: block; */
`;

const Hold = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	width: 100%;
`;
const MainImage = styled.img`
	height: 100px;
	width: 100px;
	border-radius: 5px;
	background-color: gray;
	margin-right: 5px;
	object-fit: cover;
`;
const First = styled.div`
	display: flex;
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
const Second = styled.div`
	display: flex;
	margin-top: 20px;
`;

const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 5px;
`;

const Container = styled.div`
	margin-top: 30px;
	padding-bottom: 30px;
	padding: 20px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	/* align-items: center; */
`;
const Card = styled.div`
	width: 300px;
	position: relative;

	margin: 10px;
`;

const Title = styled.div`
	display: flex;
	position: absolute;
	bottom: 10px;
	margin-left: 10px;
	font-size: 18px;
`;
const TitleHold = styled.div`
	opacity: 0;
	height: 150px;
	color: white;
	display: flex;
	transition: all 350ms;
	border-radius: 5px;
	/* background-color: red; */
	background-image: linear-gradient(
		0deg,
		rgba(65, 73, 73, 1) 0%,
		rgba(253, 187, 45, 0) 100%
	);
	position: relative;

	:hover {
		opacity: 1;
	}
	/* display: none; */
`;
const ImageHolder = styled.div`
	height: 200px;
	width: 100%;
	background-color: silver;
	position: relative;
	cursor: pointer;
	border-radius: 5px;
`;
const DownPart = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 10px;

	&:hover ~ ${HoverCard} {
		display: flex;
	}
`;
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

const AuthorImage = styled.div`
	height: 30px;
	width: 30px;
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
`;
const ViewIcon = styled.div`
	display: flex;
	align-items: center;
	font-size: 13px;
	color: gray;
	span {
		color: black;
	}
`;
