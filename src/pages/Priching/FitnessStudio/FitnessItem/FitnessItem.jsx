
import PropTypes from 'prop-types'

const FitnessItem = ({item}) => {
    const {id,name,description} = item 
    return (
        <div className='pb-10 border-b border-[#496558]'> 
           <div className='flex justify-center items-center rounded-full h-10 w-10 bg-[#d4d7d4]'>
              <p className=' px-3 py-3 text-[#496558] text-xl font-semibold'>{id}</p>
           </div>
          <div className='mt-8 '>
          <h3 className='text-[#496558] text-base font-bold'>{name}</h3>
           <p className='pt-4 text-[#788c82]'>{description}</p>
          </div>
        </div>
    );
};
FitnessItem.propTypes={
    item: PropTypes.object
}
export default FitnessItem;