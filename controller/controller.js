import FoodApi from "../model/model.js";
import RegisterApi from "../model/RegisterModel.js";

export const FoodAdd = async(req, res) => {
    const { food, name, shortdisc,recipe } = req.body;
    console.log(food);
    console.log(name);
    console.log(shortdisc);
    console.log(recipe);
    const newFood = new FoodApi({
        name:food,
        FoodTitle:name,
        shortdes:shortdisc,
        Recipe:recipe
    });
    try {
        const food = await newFood.save();
        return res.status(201).json(food);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}


export const RegisterAcc = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name,email,password);

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await RegisterApi.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const newUser = new RegisterApi({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const RegisterCheck = async (req, res) => {
    const { name, password } = req.body;
    console.log(name, password); 
  
    try {
      const user = await RegisterApi.findOne({ name, password });
  
      if (!user) {
        return res.status(404).json({ message: 'Account not found' });
      }
  
      if (password !== user.password) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      res.json({ message: 'Login successful', user });
  
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  }
  


