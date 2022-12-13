import React from "react";
import styled from "styled-components";
import { BsImageFill } from "react-icons/bs";
const UploadPage = () => {
	return (
		<Container>
			<Wrapper>
				<Card>
					<Circle>
						<BsImageFill />
						<span>upload file</span>
					</Circle>

					<Input id='pix' type='file' />
					<Button htmlFor='pix'>Upload Cover Image</Button>

					<Inp placeholder='Enter Title' />
					<TexArea placeholder='Summary...' />
					<Inp placeholder='Enter Author name' />
					<Select>
						<option>Comedy</option>
						<option>Fiction</option>
						<option>Poet</option>
						<option>Romance</option>
						<option>Legends</option>
						<option>Others</option>
					</Select>

					<Button2>Submit</Button2>
				</Card>
			</Wrapper>
		</Container>
	);
};

export default UploadPage;

const Button2 = styled.button`
	height: 40px;
	width: 150px;
	background-color: silver;

	color: white;
	border: none;
	outline: none;
	border-radius: 5px;
	transition: all 350ms;
	cursor: not-allowed;
	margin-top: 10px;

	:hover {
		transform: scale(0.95);
	}

	@media screen and (max-width: 500px) {
		width: 120px;
	}
`;

const Select = styled.select`
	width: 370px;
	height: 30px;
	border-radius: 3px;
	border: 0.7px solid silver;
	outline-color: #f8cbe0;
	padding-left: 10px;
`;

const TexArea = styled.textarea`
	width: 350px;
	height: 70px;
	border-radius: 3px;
	border: 0.7px solid silver;
	outline-color: #f8cbe0;
	padding-left: 10px;
	resize: none;
`;

const Inp = styled.input`
	margin: 10px;
	width: 350px;
	height: 30px;
	border-radius: 3px;
	border: 0.7px solid silver;
	outline-color: #f8cbe0;
	padding-left: 10px;
`;

const Input = styled.input`
	display: none;
`;
const Button = styled.label`
	height: 40px;
	width: 200px;
	background-color: black;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	transition: all 350ms;
	margin-top: 10px;
	cursor: pointer;

	:hover {
		transform: scale(0.98);
	}
`;

const Circle = styled.div`
	height: 150px;
	width: 250px;
	border-radius: 5px;
	/* border-radius: 50%; */
	background-color: #e6e4e4;
	display: flex;
	justify-content: center;
	align-items: center;
	color: gray;
	flex-direction: column;
	font-size: 30px;
	span {
		font-size: 12px;
	}
`;

const Card = styled.div`
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

	width: 600px;
	/* height: 300px; */

	margin-top: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 10px;
`;

const Wrapper = styled.div``;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
