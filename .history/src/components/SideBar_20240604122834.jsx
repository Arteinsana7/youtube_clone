import { Stack } from'@mui/material'
import { categories} from '../utils/constants';
const selectedCategory = 'new';

const SideBar = () => {
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height : { sx: 'auto', md : '95%'},
        flexDirection : { md: 'column'},
      }}

      >
        {categories.map((categories) => (
          <button
          className='category-btn'
          style={{background: category.name === selectedCategory && '#FC150403'}}
          >
            <span>{categories.icon}</span>
            <span>{categories.name}</span>
          </button>
        ))}
    </Stack>
  
}

export default SideBar
