import adminapi from "./adminmodel.js";

export const adminblogupdate = async (req, res) => {
    const{Heading,userdate,blogdesc} = req.body;
    const newblog = new adminapi({
        Heading:Heading,
        UserDate:userdate,
        desc:blogdesc
    });
    try {
        const food = await newblog.save();
        return res.status(201).json(food);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export const blogdetailupdate = async(req,res) =>{
    try {
        const blogs = await adminapi.find();
        res.json(blogs);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
      }
}
export const delteblog = async(req,res)=>{
    try {
        const { id } = req.params;
        await adminapi.findByIdAndDelete(id); 
        res.status(200).json({ message: 'Blog deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}