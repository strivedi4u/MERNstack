const User = require("../model/User");


const user_all = async (req, res) => {
    try{
const users = await User.find();
res.json(users);
    } catch(error) {
        res.json({message:error});
    }
};



const user_details = async (req, res) => {
    try{
        const user = await User.findById(req.params.userId);
        res.json(user);
            } catch(error) {
                res.json({message:error});
            }

};

const user_create = async (req, res) => {
    console.log(req.file);
    let profile = (req.file) ? req.file.filename : null;
    console.log(profile);
let {name, email, address} = req.body;
const user = new User({name, email, address, profile});
try{
    const saveUser = await user.save();
    res.send(saveUser);
} catch(error) {
    res.status(400).send(error);
}

};

const user_update = async (req, res) => {
    try {
        const user = {
          name: req.body.name,
          email: req.body.email,
          address: req.body.address
        };
    
        const updatedProduct = await User.findByIdAndUpdate(
          { _id: req.params.userId },
          user
        );
        res.json(updatedProduct);
      } catch (error) {
        res.json({ message: error });
      }




};

const user_delete = async (req, res) => {
    try {
        const removeProduct = await User.findByIdAndDelete(req.params.userId);
        res.json(removeProduct);
      } catch (error) {
        res.json({ message: error });
      }

};

module.exports = {
    user_all,
    user_details,
    user_create,
    user_update,
    user_delete
}

