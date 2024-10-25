let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];
  
  // Obtener todos los usuarios
  exports.getAllUsers = (req, res) => {
    res.json(users);
  };
  
  // Obtener un usuario por su ID
  exports.getUserById = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('Usuario no encontrado');
    res.json(user);
  };
  
  // Crear un nuevo usuario
  exports.createUser = (req, res) => {
    const newUser = {
      id: users.length + 1,
      name: req.body.name,
    };
    users.push(newUser);
    res.status(201).json(newUser);
  };
  
  // Actualizar un usuario por su ID
  exports.updateUser = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('Usuario no encontrado');
  
    user.name = req.body.name;
    res.json(user);
  };
  
  // Eliminar un usuario por su ID
  exports.deleteUser = (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).send('Usuario no encontrado');
  
    const deletedUser = users.splice(userIndex, 1);
    res.json(deletedUser);
  };
  