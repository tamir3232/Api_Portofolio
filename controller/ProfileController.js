const { Profile, Project } = require('../database/models/index')

const getListProfile = async (req, res, next) => {
    try {
       const getListProfile = await Profile.findAll()
       if(!getListProfile || getListProfile.length === 0){
            throw {
                message: 'Data not found',
                status: 404 
            }
       }

        return res.status(200).json(getListProfile)       
    }catch (error) {
        next(error)
    }
    
}

const getDetailProfile = async (req, res, next) => {
    try {
        const getProfile = await Profile.findOne({
            where: {
                id: req.params.id
            }
        })
        if(!getProfile || getProfile.length === 0){
           throw {
                message: 'Data not found',
                status: 404 
           }
        }

        const getProject = await Project.findAll({
            where: {
                profile_id: getProfile.id
            }
        })
        
        return res.status(200).json({ message : "Data Berhasil Di dapatkan" , data: {profile: getProfile, projects: getProject}})

    } catch (error) {
        next(error)
    }
}

const getDetailProfileByName = async (req, res, next) => {
    try {

        console.log("Halooo")
        
        const getProfile = await Profile.findOne({
            where: {
                uniqueName: req.body.name
            }
        })


        if(!getProfile || getProfile.length === 0){
           throw {
                message: 'Data not found',
                status: 404 
           }
        }

        const getProject = await Project.findAll({
            where: {
                profile_id: getProfile.id
            }
        })
        
        return res.status(200).json({ message : "Data Berhasil Di dapatkan" , data: {profile: getProfile, projects: getProject}})

    } catch (error) {
        next(error)
    }
}


const createProfile = async (req, res,next) => {
    const { name, greeting, job_desk, name_file, portofolio1_icon, portofolio1_link, portofolio2_icon, portofolio2_link, deskripsi, deskripsi_aboutme, experience, education, profile1_name_file, profile2_name_file, email, phone } = req.body
    try {
        const createProfile = await Profile.create({
            name, greeting, job_desk, name_file, portofolio1_icon, portofolio1_link, portofolio2_icon, portofolio2_link, deskripsi, deskripsi_aboutme, experience, education, profile1_name_file, profile2_name_file, email, phone
        })
        return res.status(201).json(createProfile)
    } catch (error) {
        next(error)
    }  
}

const updateProfile = async (req, res) => {
    const { name, greeting, job_desk, name_file, portofolio1_icon, portofolio1_link, portofolio2_icon, portofolio2_link, deskripsi, deskripsi_aboutme, experience, education, profile1_name_file, profile2_name_file, email, phone } = req.body
    try {
        const updateProfile = await Profile.update({
            name, greeting, job_desk, name_file, portofolio1_icon, portofolio1_link, portofolio2_icon, portofolio2_link, deskripsi, deskripsi_aboutme, experience, education, profile1_name_file, profile2_name_file, email, phone
        },{
            where: {
                id: req.params.id
            }
        })
        return res.status(200).json({ message: 'Data Berhasil Di Update'})
    } catch (error) {
        next(error)
    }
}

const deleteProfile = async (req, res) => {
    try {
        const deleteProfile = await Profile.destroy({
            where: {
                id: req.params.id
            }
        })
        return res.status(200).json({ message: 'Data Berhasil Di Hapus'})
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getDetailProfile,
    getDetailProfileByName,
    getListProfile,
    createProfile,
    updateProfile,
    deleteProfile
}