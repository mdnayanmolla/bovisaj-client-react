import PropTypes from 'prop-types'

const TransparentButton = ({btnText}) => {
    return (
        <div>
            <button className="bg-[#e6dcd4] px-12 text-[#496558] py-3 rounded-full border border-[#496558] uppercase hover:bg-white hover:text-[#496558] hover:border hover:border-[#496558]
        duration-500 transition-all translate-y-0 hover:-translate-y-2">{btnText}</button>
        </div>
    );
};
TransparentButton.propTypes = {
    btnText:PropTypes.object 
}
export default TransparentButton;