import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6"

const Input = ({value, onChange, placeholder, label, type}) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
  return (
    <div>
        <label className="block mb-1 text-[13px] text-slate-800 dark:text-slate-300">{label}</label>

        <div className="input-box">
            <input
                type = {type === 'password' ? showPassword ? 'text' : 'password' : type}
                placeholder = {placeholder}
                className = "w-full bg-transparent outline-none text-black dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                value = {value}
                onChange={(e) => onChange(e)} 
            />
            
            {type === "password" && (
                <>
                    {showPassword ? (
                        <FaRegEye 
                            size={22}
                            className="text-primary cursor-pointer dark:text-purple-300"
                            onClick={() => toggleShowPassword()}
                        />
                    ) : (
                        <FaRegEyeSlash
                            size={22}
                            className="text-slate-400 cursor-pointer dark:text-purple-300"
                            onClick={() => toggleShowPassword()}
                        />
                    )}
                </>
            )}
        </div>
    </div>
  )
}

export default Input