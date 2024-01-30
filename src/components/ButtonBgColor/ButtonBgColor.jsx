import PropTypes from 'prop-types'

const ButtonBgColor = ({btnText}) => {
    return (
        <div>
            <button className="bg-[#496558] px-12 text-[#E6DCD4] py-3 rounded-full  uppercase hover:bg-white hover:text-[#496558] hover:border hover:border-[#496558]
            duration-500 transition-all translate-y-0 hover:-translate-y-2">{btnText}</button>
        </div>
    );
};
ButtonBgColor.propTypes = {
    btnText:PropTypes.object 
}
export default ButtonBgColor;