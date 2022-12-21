import React from "react";
import BookList from "./Books/BookList";
import Hero from "./Hero/Hero";

interface MyData {
	_id: string;
	author: string;
	authorImage: string;
	category: string;
	coverImage: string;
	title: string;
	views: string[];
}
const HomeScreen = () => {
	const [searchData, setSearchData] = React.useState<MyData[]>([]);
	return (
		<div>
			<Hero setSearchData={setSearchData} searchData={searchData} />
			<BookList searchData={searchData} setSearchData={setSearchData} />
		</div>
	);
};

export default HomeScreen;
