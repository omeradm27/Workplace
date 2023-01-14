const Category = require('../models/Category');

const addCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).send({
      message: 'Category Added Successfully!',
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

// const addAllCategory = async (req, res) => {
//   try {
//     await Category.insert(req.body);
//     res.status(200).send({
//       message: 'Category Added successfully!',
//     });
//   } catch (err) {
//     res.status(500).send({
//       message: err.message,
//     });
//   }
// };

const getShowingCategory = async (req, res) => {
  try {
    //MongoDB Query
    // const categories = await Category.find({ status: 'Show' }).sort({
    //   _id: -1,
    // });  
    
    //Postgres Query
    const categories = await Category.findAll(
      {
        where: { status: 'SHOW' }
      },
      {
        order: [['_id', 'DESC']]
      }); 
      res.send(categories);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllCategory = async (req, res) => {
  try {

    // const categories = await Category.find({}).sort({ _id: -1 });//MongoDB Request
    const categories = await Category.findAll({ order: [['_id', 'DESC']] });//PostgreSql Request
    // console.log(categories);
    res.send(categories);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const id=req.params.id;
    const category = await Category.findOne({where:{_id:id}});
    res.send(category);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    //const category = await Category.findById(req.params.id);
    const category = await Category.findOne({where:{_id:req.params.id}});
    if (category) {
      category.parent = req.body.parent;
      // category.slug = req.body.slug;
      category.type = req.body.type;
      category.icon = req.body.icon;
      category.children = req.body.children;
      await category.save();
      res.send({ message: 'Category Updated Successfully!' });
    }
  } catch (err) {
    res.status(404).send({ message: 'Category not found!' });
  }
};

const updateStatus = async(req, res) => {
    const newStatus = req.body.status;

    /* const category_one = await Category.findOne({ where: {_id: req.params.id} })
    if(category_one){
        category_one.status = newStatus
        await category_one.save()
        res.status(200).send({
        message: `Category ${newStatus} Successfully!`,
        });
    } else {
        res.status(500).send({
        message: err.message,
        });
    } */

    Category.update(
        { status: newStatus },
        { where: { _id: req.params.id } }
    ).then(result => {
        res.status(200).send({
        message: `Category ${newStatus} Successfully!`,
        });
    }).catch(err => {
        res.status(500).send({
        message: err.message,
        });
    })
  

    /* Category.updateOne(
        { _id: req.params.id },
        {
            $set: {
                status: newStatus,
            },
        },
        (err) => {
            if (err) {
                res.status(500).send({
                message: err.message,
                });
            } else {
                res.status(200).send({
                message: `Category ${newStatus} Successfully!`,
                });
            }
        }
    ); */
};

const deleteCategory = (req, res) => {
    Category.destroy(
        { where: { _id: req.params.id } }
    ).then(res => {
        res.status(200).send({
        message: 'Category Deleted Successfully!',
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message,
        });
    })


    /* Category.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).send({
                message: err.message,
            });
        } else {
            res.status(200).send({
                message: 'Category Deleted Successfully!',
            });
        }
    }); */

  //This is for delete children category
  // Category.updateOne(
  //   { _id: req.params.id },
  //   {
  //     $pull: { children: req.body.title },
  //   },
  //   (err) => {
  //     if (err) {
  //       res.status(500).send({ message: err.message });
  //     } else {
  //       res.status(200).send({
  //         message: 'Category Deleted Successfully!',
  //       });
  //     }
  //   }
  // );
};

module.exports = {
  addCategory,
  // addAllCategory,
  getAllCategory,
  getShowingCategory,
  getCategoryById,
  updateCategory,
  updateStatus,
  deleteCategory,
};
