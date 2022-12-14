import React, { useState } from "react";
import styled from "styled-components";
import pic from "../assets/2.webp";
import { AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";

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

const BookList = () => {
	const [bookData, setBookData] = useState<MyData[]>([]);

	const [ipState, setIpState] = useState("");

	//get ip address from all users
	const getIpAddress = async () => {
		await axios
			.get(
				"https://geolocation-db.com/json/2d7a1090-a7e0-11ec-bb96-d99740183a81",
			)
			.then((res) => {
				console.log("listening", res.data.IPv4);

				setIpState(res.data.IPv4);
			});
	};

	// get all the books from our database
	const fetch = async () => {
		await axios.get("http://localhost:5000/server/getall").then((res) => {
			setBookData(res.data.data);
		});
	};

	//updating our views, by pushing all the ip in the views array
	const UpdateViews = async (id: string) => {
		await axios
			.patch(`http://localhost:5000/server/views/${id}`, {
				ip: ipState,
			})
			.then((res) => {
				console.log(res);
			});
	};

	React.useEffect(() => {
		fetch();
		getIpAddress();
	}, []);

	return (
		<Container>
			{bookData.map(
				({ _id, title, category, coverImage, author, authorImage, views }) => (
					<Card
						onClick={() => {
							if (views.includes(ipState)) {
								alert("you alerady viewed this");
							} else {
								UpdateViews(_id);
							}
						}}
						key={_id}>
						<Link to={`/books/${_id}/details`}>
							<ImageHolder>
								<Image src={coverImage} />
								<Cont>
									<Button>{category}</Button>

									<TitleHold>
										<Title>{title}</Title>
									</TitleHold>
								</Cont>
							</ImageHolder>
						</Link>

						<DownPart>
							<Hold>
								<AuthorImage>{authorImage}</AuthorImage>
								<AuthName>{author}</AuthName>
							</Hold>
							<ViewIcon>
								<AiOutlineEye />
								<span> {views.length}</span>
							</ViewIcon>
						</DownPart>

						<HoverCard>
							<First>
								<Hold>
									<AuthorImage>{authorImage}</AuthorImage>
									<AuthName>{author}</AuthName>
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
				),
			)}
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
