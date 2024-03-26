import PropTypes from 'prop-types'

const SectionTitle = ({titleHeadingTop, titleHeadingBottom,titlePragraph}) => {
    return (
        <div className="pt-24">
            <div className="px-[4%] xl:w-3/4 xl:mx-auto text-left xl:text-center">
                <h2 className="text-3xl md:text-5xl xl:text-6xl text-[#496558] font-semibold tracking-wider uppercase">{titleHeadingTop}</h2>
                <h2 className="text-3xl md:text-5xl xl:text-6xl text-[#496558] font-semibold tracking-wider uppercase">{titleHeadingBottom}</h2>
                <p className="pt-10 font-semibold xl:font-normal xl:pt-16 text-[15px] text-[#496558] tracking-wider leading-7">{titlePragraph}</p>
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