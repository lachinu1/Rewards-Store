import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import ItemCard from './ItemCard';

/** function ItemGrid mapea las cards de los productos 
 *  que van al historial. 
 */


function ItemGrid({ items }) {
  const cards = items.map(item => <ItemCard key={item.createDate} item={item} />)
  return (
    <GridWrapper>
      <Grid container spacing={2}>
        {cards}
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

export default ItemGrid;