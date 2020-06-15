import React, { InputHTMLAttributes, useCallback } from 'react';

import { zip, currency } from './masks';

import "./styles.css"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: "zip" | "currency";
  prefix?: string;
}


const Input: React.FC<InputProps> = ({ mask, prefix, ...props }) => {

  const handleKeyUp = useCallback((event: React.FormEvent<HTMLInputElement>) => {

    if (mask === 'zip') {
      zip(event);
    }
    if (mask === "currency") {
      currency(event);
    }
  },
    [mask]
  );

  return (
    <div className="input-group prefix">
        {prefix && <span className="prefix-span">{prefix}</span>}
      <input {...props} onKeyUp={handleKeyUp} />
    </div>
  );
};

export default Input;