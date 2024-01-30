import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import { useState } from 'react';
import layer1 from '../../assets/layer-01.png'
import layer2 from '../../assets/layer-02.png'
import layer3 from '../../assets/layer-03.png'
import layer4 from '../../assets/layer-04.png'
import layer5 from '../../assets/layer-05.png'
import layer6 from '../../assets/layer-06.png'
import layer7 from '../../assets/layer-07.png'



const ParallaxDemo = () => {
    return (
        <div className='h-64 w-64 absolute top-10 right-10'>
            <Parallax pages={0}>
                <ParallaxLayer
                    offset={0}
                    speed={0.8}
                    factor={2}
                style={{
                    backgroundImage: `url(${layer7})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: "300px",
                    height: '300px',
                    overflow: "hidden"
                }}
                >
                  
                </ParallaxLayer>
            </Parallax>

        </div>
    );
};

export default ParallaxDemo;