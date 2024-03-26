import PropTypes from 'prop-types'
const Teacher = ({data}) => {
    const {image} = data
    return (
        <div className='rounded-3xl flex items-start'>
            <img src={image} alt="" className='w-full rounded-3xl h-[270px] flex items-center bg-left-top border border-[#496558]' />
        </div>
    );
};
Teacher.propTypes={
    data: PropTypes.object
}
export default Teacher;