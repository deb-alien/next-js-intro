interface Book {
	id: number;
	title: string;
	author: string;
}

export default async function Books() {
	const response = await fetch('http://localhost:3000/api/books');
	const books = await response.json();

	return (
		<main>
			<code>{JSON.stringify(books, null, 2)}</code>
		</main>
	);
}
