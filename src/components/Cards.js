import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
const Cards = ({ titulo, imagen }) => {
	return (
		<Card sx={{ border: 1, width: 330, m: 2, bgcolor: "#9f86c0" }}>
			<CardContent>
				<CardMedia
					sx={{ width: "100%" }}
					component="img"
					image={`https://image.tmdb.org/t/p/w300/${imagen}`}
					alt={`Poster de ${titulo}`}
				/>
				<Typography variant="h5" gutterBottom>
					{titulo}
				</Typography>
			</CardContent>
		</Card>
	);
};
export default Cards;
