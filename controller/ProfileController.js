const { Profile } = require('../database/models/index')
const getDetailProfile = async (req, res) => {
    res.send('profile')
}

const getListProfile = async (req, res) => {

    try {
       const getListProfile = await Profile.findAll()
       if(!getListProfile || getListProfile.length === 0){
           return res.status(404).json({message: 'Data not found'})
       }

        return res.status(200).json(getListProfile)       
    }catch (error) {
        return res.status(500)
    }
    
}

const createProfile = async (req, res) => {
    res.send('profile')
}

const updateProfile = async (req, res) => {
    res.send('profile')
}

const deleteProfile = async (req, res) => {
    res.send('profile')
}

module.exports = {
    getDetailProfile,
    getListProfile,
    createProfile,
    updateProfile,
    deleteProfile
}