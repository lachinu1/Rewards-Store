import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';



/* function ProductGrid, mapea las cards con los productos. 
*/

function ProductGrid({ products, categorySelected }) {

  return (
    <GridWrapper>
       <Grid container spacing={2}>
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

const GridWrapper = styled.div`
  display: flex;
  padding: 0 6rem 4rem 6rem;
  border: 1px solid papayawhip;
  margin-top: 2rem;
  width: 100%;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
`


export default ProductGrid