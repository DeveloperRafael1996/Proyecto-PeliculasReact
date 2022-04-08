import Box from "@mui/material/Box";
import ListaItem from "./ListaItem";

const ListaPeliculas = ({  info }) => {
	return (
		<>
			<Box
				sx={{
					width:"900px",
					height:"500px",
					border: "1px solid grey",
					p: 10,
					backgroundColor: "#9f86c0",
					overflowY:"scroll"
				}}
			>
				{info.map((elemento) => (
					<ListaItem
						key={elemento.id}
						titulo={elemento.title}
						imagen={`https://image.tmdb.org/t/p/w300/${elemento.poster_path}`}
						link={elemento.id}
						puntaje={elemento.vote_average}
					/>
				))}
			</Box>
		</>
	);
};

export default ListaPeliculas;
