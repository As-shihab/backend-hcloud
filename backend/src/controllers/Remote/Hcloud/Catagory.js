const { PrismaClient } = require('prisma/prisma-client')
const CategoryModel = new PrismaClient()
const sharp = require('sharp')
const fs = require('fs')
const NewCategory = async (req, res) => {

    const { title, image, details } = req.body
    try {


        await CategoryModel.category.create({
            data: {
                title: title,
                image: image,
                details: details,
            }

        })
        return res.json({ msg: "Category created successfully" })

    }
    catch (err) {
        return res.json({ msg: err.message })
    }
}

const GetCategorys = async (req, res) => {
    try {
        const data = await CategoryModel.category.findMany({
            orderBy: {
                id: "desc"
            }
        })
        return res.json({
            category: data,
            code: 200
        })
    }
    catch (err) {
        return res.json({
            msg: err.message
        })
    }
}

const Del_Cat = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await CategoryModel.category.findUnique({
            where: {
                id: Number(id)
            }
        }).then(result => {

            if (result) {
                const dir = "Uploads/"
                fs.unlink(dir + result.image, (err, state) => {
                    if (err) {
                        return res.json({ msg: "Category cannot be deleted" })
                    }


                })
            }
        })




        await CategoryModel.category.delete({
            where: {
                id: Number(id)
            }
        })
        return res.status(200).json({
            msg: `Catagory  hasbeen deleted`
        })
    }
    catch (err) {
        return res.json({
            msg: "Cannot delete category"
        })
    }
}

module.exports = { NewCategory, GetCategorys, Del_Cat }