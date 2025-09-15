const express = require('express');// As in the server.js
const route = express.Router(); //Allows us use express router in this file
const services = require('../services/render');//uses the render.js file from services here
const validateDrug = require('../middleware/validateDrug');//uses the render.js file from services here
const controller = require('../controller/controller');//uses the render.js file from services here


route.get('/', services.home);


route.get('/manage', services.manage);
route.get('/dosage', services.dosage);
route.get('/purchase', services.purchase);
route.get('/add-drug', services.addDrug);
route.get('/update-drug', services.updateDrug);

// API for CRUD operations
route.post('/api/drugs', validateDrug, controller.create);   // validate khi tạo mới
route.get('/api/drugs', controller.find);
route.put('/api/drugs/:id', validateDrug, controller.update); // validate khi cập nhật
route.delete('/api/drugs/:id', controller.delete);
route.post('/api/purchase', controller.purchase);

// route.post('/update-drug', validateDrug, async (req,res) => {
//     const { id, name, card, pack, perDay, dosage } = req.body;
//     try {
//         const drug = await Drugdb.findByIdAndUpdate(id, { name, card, pack, perDay, dosage }, { useFindAndModify: false, new: true });
//         res.redirect('/manage');
//     } catch(err){
//         res.status(500).render('error', { title: 'Error', message: err.message });
//     }
// });

module.exports = route;//exports this so it can always be used elsewhere
