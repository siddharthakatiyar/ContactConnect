const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@dec Get all contacts
//@route GET /api/contacts
//@access Private
const getContacts = asyncHandler(async (req, res) => {
    const Contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(Contacts);
});

//@desc Create new contact
//@route POST /api/contacts
//@access Private
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is: ", req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("Please fill in all fields");
    }

    const contact = await Contact.create({name, email, phone, user_id: req.user.id});
    res.status(201).json(contact);
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access Private
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    if (contact.user_id.toString() !== req.user.id) {
        res.status(401);
        throw new Error("Not authorized");
    }

    res.status(200).json(contact);
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access Private
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    if (contact.user_id.toString() !== req.user.id) {
        res.status(401);
        throw new Error("Not authorized");
    }

    const updatedContact = await Contact.findByIdAndUpdate (
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(updatedContact);
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access Private
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    if (contact.user_id.toString() !== req.user.id) {
        res.status(401);
        throw new Error("Not authorized");
    }

    await Contact.deleteOne({ _id: req.params.id });
    res.status(200).json(contact);
});

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
};