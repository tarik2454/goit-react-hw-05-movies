import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/trending/all/day?language=en-US')
      .then(response => setUsers(response.data));
  }, []);
};
