import { Stack } from'@mui/material'
import { categories} from '../utils/constants';


const SideBar = ({ selectedCategory,setSelectedCategory}) => (
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
          style={{background: category.name === 
            selectedCategory && '#FC150403',
          color : 'white' }}
          key = {category.name}
          >
            <span style={{color: category.name 
              === selectedCategory ? 'white' : 'red', marginRight : '15px' }}>{categories.icon}</span>
            <span style={{opacity: category.name === selectedCategory ? '1' : '0.8'}}
            
            >{categories.name}</span>
          </button>
        ))}
    </Stack>
  
      );

export default SideBar
