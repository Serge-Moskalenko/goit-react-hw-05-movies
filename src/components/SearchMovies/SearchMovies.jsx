import { HeaderStyled, Input, Error, Button, FormStyled,} from "./SearchMovies.styled";
import { Formik, ErrorMessage } from "formik";
import { ImSearch } from 'react-icons/im';
import * as yup from 'yup';

let schema = yup.object().shape({
  searchInput: yup.string().required(),
});



export const SearchMovies = ( {query} ) => {
    
    const handleSubmit = (value, { resetForm }) => {
        const { searchInput } = value;

        if (searchInput.trim() === '') {
            alert('Заполните поле поиска')
            return;
        }
        query(searchInput)
        resetForm()
    };

    return (
        <HeaderStyled >
            <Formik initialValues={{ searchInput:''}} validationSchema={schema} onSubmit={handleSubmit}  >
                <FormStyled>
                    <Button type="submit"  >
                        <ImSearch />
                    </Button>

                    <Input
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies"
                        name="searchInput"
                    />
                    <ErrorMessage component={Error} name="searchInput" />
                </FormStyled>
            </Formik>
        </HeaderStyled>
    )
};