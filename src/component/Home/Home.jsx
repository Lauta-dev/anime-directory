import { lazy } from "react";
import DesactiveNSFWPovider from "../../context/desactiveNSFW";

const Tops = lazy(() => import("./Tops"));

export default function Home() {
	return (
		<DesactiveNSFWPovider>
			<Tops />
		</DesactiveNSFWPovider>
	);
}
