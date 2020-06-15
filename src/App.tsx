import React, { useState, useCallback } from 'react';

import Input from './components/Input';

interface User {
  zip: string;
  price: number;
}

const App: React.FC = () => {

  const [user, setUser] = useState<User>({} as User);

  const handleChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.currentTarget.name]: event.currentTarget.value,
    })

  }, [user])
  return (
    <div>
      <Input  name="zip" mask="zip" onChange={handleChange} />
      <Input  name="price" mask="currency" prefix="R$" onChange={handleChange} />

      <button onClick={() => console.log(user)}>Salvar</button>
    </div>
  );
};

export default App;
