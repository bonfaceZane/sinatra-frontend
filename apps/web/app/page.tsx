import type { ReactElement } from "react"
import { Button } from "../components/shared/button"

export default function Page(): ReactElement {
	return (
		<main className=''>
			<h2 className={"text-red-500"}>Sinatra: music to my earsss</h2>
			<Button>Another button in the stacks</Button>
		</main>
	)
}
