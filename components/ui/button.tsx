
interface ButtonProps {
  label: string;
  iconUrl?: string;
  fullWidth?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  label, iconUrl, fullWidth, backgroundColor, borderColor, textColor, type = 'button',
}) => {
  return (
    <button 
    type={type}
    className={`
    ${fullWidth ? 'w-full' : ''}
    px-2 py-4  shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white`}
    >
      {label}
    </button>
  )
}

export default Button