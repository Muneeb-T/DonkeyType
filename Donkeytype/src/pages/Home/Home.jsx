import React, { useEffect, useState } from 'react';
import InputField from '../../blocks/InputField/Index';
import KeyboardIcon from '@mui/icons-material/Keyboard';
const Home = () => {
    const [text, setText] = useState([]);
    const [cursorPoint, setCursorPoint] = useState(0);
    const handleTyping = (e) => {
        let index = e.target.value.length - 1;
        const letter = e.target.value[index];

        if (text[index] === ' ') {
            setCursorPoint(index + 2);
        } else {
            setCursorPoint(index + 1);
        }

        let temp = [...text];
        temp[index].typed = true;
        if (temp[index].character !== letter) {
            temp[index].wrong = true;
        }
        setText(temp);
    };
    useEffect(() => {
        let string =
            "india is my country.All indians are my brothers and sisters. I love my country and I am proud of it's rich and varied heritage. I shall always strive to be worthy of it.I shall give my parents, teachers all elders respect and treat everyone with courtacy.To my country and my people. I pledge my division in their well being and prosperety alone lies my happiness";
        let textArray = string.split('').map((character) => {
            return {
                character,
                typed: false,
                wrong: false,
            };
        });
        setText(textArray);
    }, []);

    return (
        <div className='container relative mx-auto'>
            <p className='font-bold flex items-center text-3xl text-yellow-500 absolute top-10 left-12'>
                <span className='text-gray-500 mr-2'>
                    <KeyboardIcon sx={{ fontSize: '50px' }} />
                </span>
                Donkeytype
            </p>
            <div className='flex items-center justify-center h-full'>
                <div className='relative w-[80%] select-none'>
                    <textarea
                        className='absolute left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] w-full h-full bg-transparent text-transparent resize-none outline-none overflow-hidden'
                        maxLength={text.length}
                        onChange={handleTyping}></textarea>
                    <div className='flex flex-wrap text-gray-500 text-2xl font-mono'>
                        {text.map((letter, index) => {
                            return (
                                <p
                                    key={index}
                                    className={`
                                
                                ${
                                    letter.wrong
                                        ? 'text-red-500'
                                        : letter.typed && 'text-gray-300'
                                } ${letter.character === ' ' && 'mr-3'}
                                
                                `}>
                                    <span className='text-yellow-400 absolute font-extrabold animate-pulse font-sans'>
                                        {index === cursorPoint && '_'}
                                    </span>
                                    {letter.character === ' '
                                        ? ' '
                                        : letter.character}
                                </p>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
