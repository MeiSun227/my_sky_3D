import React from 'react';
import { usePlay } from '../Play';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';



const OverLay = () => {
    const { end } = usePlay();

    return (
        <>
            {end ?
                <div className="overlay">
                    <div className={`outro ${end ? "outro--appear" : ""}`}>
                        <p className="outro__text">You can view more about me via </p>
                        <div className='flex-container'>
                        <div>
                            <a href='https://github.com/MeiSun227/'>

                            <FaLinkedin color='white' size='2em' />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.linkedin.com/in/mei-sun-lee-3565907b/'>
                                <FaGithubSquare color='white' size='2em' />
                            </a>
                        </div>
                        </div>
                    </div>

                </div>
                : <p>mei</p>

            }

        </>
    )
}

export default OverLay