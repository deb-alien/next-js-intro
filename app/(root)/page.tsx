import Hello from '@/app/components/hello';

export default function Home() {
	console.log('Hello world');
	return (
		<>
			<h1>Hello world</h1>
			<Hello />
		</>
	);
}
