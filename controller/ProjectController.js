const {Project}  = require('../database/models/index')

const getListProject = async (req, res) => {
    try {
        const getListProject = await Project.findAll()
        if(!getListProject || getListProject.length === 0){
            throw {
                message: 'Data not found',
                status: 404 
            }
        }
        return res.status(200).json({
            message:"data berhasil di dapatkan",
            data : getListProject
        })       
    }catch (error) {
        next(error)
    }
}

const getDetailProject = async (req, res, next) => {
    try {
        const getProject = await Project.findOne({
            where: {
                id: req.params.id
            }
        })
        if(!getProject || getProject.length === 0){
            throw {
                message: 'Data not found',
                status: 404 
            }
        }
        return res.status(200).json({
            message : "Data Berhasil Di dapatkan" , 
            data:getProject})
    } catch (error) {
        next(error)
    }
}

const createProject = async (req, res,next) => {
    const { title, description, photo1_project_name, photo2_project_name, photo3_project_name,tools,portofolio_link1, portofolio_link2, profile_id} = req.body
    try {
        const createProject = await Project.create({
            title, description, photo1_project_name, photo2_project_name, photo3_project_name,tools,portofolio_link1, portofolio_link2, profile_id
        })
        return res.status(200).json({
            message : "Data Berhasil Di Tambah" , 
            data:createProject})
    } catch (error) {
        next(error)
    }  
}

const updateProject = async (req, res) => {
    const { title, description, photo1_project_name, photo2_project_name, photo3_project_name,tools,portofolio_link1, portofolio_link2, profile_id} = req.body
    try {
        const updateProject = await Project.update({
            title, description, photo1_project_name, photo2_project_name, photo3_project_name,tools,portofolio_link1, portofolio_link2, profile_id
        },{
            where: {
                id: req.params.id
            }
        })
        return res.status(200).json({
            message : "Data Berhasil Di Update" , 
            data:updateProject})
    } catch (error) {
        next(error)
    }  
}

const deleteProject = async (req, res) => {
        try {
        const deleteProject = await Project.destroy({
            where: {
                id: req.params.id
            }
        })
        return res.status(200).json({
            message : "Data Berhasil Di Hapus" , 
            data:deleteProject})
        } catch (error) {
            next(error)
        }
}
  

module.exports = {
    getListProject,
    getDetailProject,
    createProject,
    updateProject,
    deleteProject
}


