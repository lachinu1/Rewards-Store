import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';



/* function ProductGrid, mapea las cards con los productos. 
*/


function ProductGrid({ products, categorySelected }) {

  return (
    <GridWrapper>
       <Grid container spacing={6} autoPageSize pagination {...products}>
        {
          products.filter((value) => {
            return categorySelected === '' || categorySelected === 'TODAS' || value.category === categorySelected
          }).map((product, _id) => (
              <ProductCard key={product._id} product={product} />
          ))
        }
        </Grid>
    </GridWrapper>
  )
}


//Estilos
const GridWrapper = styled.div`
  display: flex;
  padding: 0 6rem 4rem 6rem;
  border: 1px solid papayawhip;
  margin-top: 2rem;
`


export default ProductGrid