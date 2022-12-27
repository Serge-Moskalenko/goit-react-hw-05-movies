import { ImgStyled, LiStyled } from "./ImageGalleryItem.styled";

export const MoviesItem = ({ id, path, name, date }) => (
    <LiStyled id={id}>
        <ImgStyled src={path} alt={name} />
        <h2> {name} </h2>
        <p> { new Date(date).getFullYear() } </p>
    </LiStyled>
);