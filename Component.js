import { useState, useEffect, useMemo } from "./MyReact.js";

export default function Component({ propCount, buttonElem }) {

	const [count, setCount] = useState(0)
	const propCountDoubled = useMemo(() => {
		return propCount * 2
	}, [propCount])

	useEffect(() => {
		const handler = () => setCount(currentCount => currentCount + 1)
		buttonElem.addEventListener("click", handler)
		return () => buttonElem.removeEventListender("click", handler)
	}, [buttonElem])
	
	return `
		<h3>This page looks very basic as it is simply a button that increments a counter.</h3>
		<h3>However, underneath the hood, it uses a custom React-like clone to manage state and hooks.<h3>
		<h4>You can find the source code <a href="https://github.com/PunitDh/Custom-React">here.</a></h4>
		<p><b>State: ${count}</b> <small>This increments the state using useState </small></p>
		<p><b>Prop: ${propCount}</b> <small>This changes the prop using useEffect </small></p>
		<p><b>Prop Doubled:  ${propCountDoubled}</b> <small>This keeps track of the prop value using useMemo and doubles it.</small></p>
	`
}