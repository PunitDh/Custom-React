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
		This page looks very basic as it is simply a button that increments a counter. However, underneath the hood, it uses a custom React-like clone to manage state and hooks. You can find the source code <a href="https://github.com/PunitDh/Custom-React">here.</a>
		State: ${count} This increments the state using useState <br />
		Prop: ${propCount} This changes the prop using useEffect <br />
		Prop Doubled:  ${propCountDoubled} This keeps track of the prop value and doubles it.
	`
}