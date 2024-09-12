import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProfileSchema = Schema({
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    phone: {
        type: String
    },
    about: {
        type: String,
        required: true
    },
    projects: {
        type: String,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

export const Profile = mongoose.model('Profile', ProfileSchema);
