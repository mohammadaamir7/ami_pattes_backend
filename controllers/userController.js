const User = require("../models/userModel")
const generateToken = require('../utils/generateToken')
const asyncHandler = require('express-async-handler')

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const register = asyncHandler(async (req, res) => {
    const {
        email,
        password,
        firstName,
        lastName,
        role
    } = req.body

    const userExists = await User.findOne({email})
    if(userExists){
        throw new Error('User already exists')
    }
    if(role !== 'admin'){
        const user = await User.create({email, password, firstName, lastName, role})
        if(user){
            res.status(201).json({
                _id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                token: generateToken(user._id)
            })
        }else {
            res.status(401)
            throw new Error('Invalid user data')
        }
    }else{
        res.status(404).json({message: 'Cannot sign up as admin, authorization restricted'})
    }
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerAdmin = asyncHandler(async (req, res) => {
    const {
        email,
        password,
        firstName,
        lastName,
        role = 'admin'
    } = req.body

    const userExists = await User.findOne({email})
    if(userExists){
        throw new Error('User already exists')
    }

    if(role === 'admin'){
        const user = await User.create({email, password, firstName, lastName, role})

        if(user){
            res.status(201).json({
                _id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                token: generateToken(user._id)
            })
        }else {
            res.status(401)
            throw new Error('Invalid user data')
        }
    }else{
        res.status(404).json({message: 'Only admins can signup using this endpoint'})
    }

})

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const login = asyncHandler(async (req, res) => {
    const {
        email,
        password
    } = req.body

    const user = await User.findOne({email})
    
    if(user && (await user.matchPassword(password))) {
        res.status(200).json({
            _id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            token: generateToken(user._id)
        })
    }else{
        res.status(401)
        throw new Error('User not found')
    }
})

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const update = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    console.log('updated : ', req.body)

    if(user) {
        user.email = req.body.email || user.email
        user.firstName = req.body.firstName || user.firstName
        user.lastName = req.body.lastName || user.lastName
        if(req.body.password){
            user.password = req.body.password
        }

        const updatedUser = await user.save()
        
        res.json({
            _id: updatedUser._id,
            email: updatedUser.email,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            token: generateToken(updatedUser._id)
        })

    }else {
        res.status(401)
        throw new Error('User not found')
    }
})

const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password')
  
    if (user) {
      res.json(user)
    } else {
      res.status(404)
      throw new Error('User not found')
    }
})

const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
  
    if (user) {
      res.json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
})

module.exports = { register, registerAdmin, login, update, getUserById, getUserProfile }