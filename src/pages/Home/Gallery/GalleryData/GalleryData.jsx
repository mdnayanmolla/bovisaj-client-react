
import PropTypes from 'prop-types'
const GalleryData = ({items}) => {
     const {image} = items 
    return (
        <div className='rounded-lg'>
            <img src={image} alt="" className='w-full h-[400px] rounded-lg'/>
        </div>
    );
};
GalleryData.propTypes={
    items: PropTypes.object
}
export default GalleryData;