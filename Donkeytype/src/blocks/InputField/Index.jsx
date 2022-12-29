import tw from 'tailwind-styled-components';
const InputField = tw.textarea`
    ${(p) => (p.$typing ? 'text-gray-300 absolute' : 'text-gray-500')}
    w-full
    font-mono
    text-2xl    
    outline-0
    bg-transparent
    overflow-y-hidden
    resize-none
    caret-yellow-600
    font-medium
`;

export default InputField;
