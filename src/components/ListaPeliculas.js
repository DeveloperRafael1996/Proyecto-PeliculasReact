
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListaItem from "./ListaItem";
import useFetchApp from "../hooks/useFetchApp";


const ListaPeliculas = ({ titulo, url, tipo }) => {
	const mejorPuntuadas = useFetchApp("movie", "top_rated");
	return (
		<>
			<Box sx={{ border: "1px solid grey", m: 10, p: 10 }}>
				<Typography variant="h3" gutterBottom>
					{titulo}
				</Typography>
				{mejorPuntuadas.map((elemento) => (
					<ListaItem
						key={elemento.id}
						titulo={
						elemento.title 
						}
						imagen={`https://image.tmdb.org/t/p/w300/${elemento.poster_path}`}
						link={`/${elemento.id}`} 
						// link para rutas de detalle
					/>
				))}
			</Box>
		</>
	);
};

export default ListaPeliculas;