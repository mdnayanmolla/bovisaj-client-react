import PropTypes from 'prop-types'

const SectionTitle = ({titleHeadingTop, titleHeadingBottom,titlePragraph}) => {
    return (
        <div className="pt-24">
            <div className="w-3/4 mx-auto text-center">
                <h2 className="text-6xl text-[#496558] font-semibold tracking-wider uppercase">{titleHeadingTop}</h2>
                <h2 className="text-6xl text-[#496558] font-semibold tracking-wider uppercase">{titleHeadingBottom}</h2>
                <p className="pt-16 text-[15px] text-[#496558] tracking-wider leading-7">{titlePragraph}</p>
            </div>
        </div>
    );
};

SectionTitle.propTypes ={
    titleHeadingTop: PropTypes.object,
    titleHeadingBottom: PropTypes.object,
    titlePragraph: PropTypes.object
}
export default SectionTitle;