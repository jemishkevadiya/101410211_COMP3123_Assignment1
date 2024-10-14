// Imported express library.
const express = require('express');
// added check is a function provided by the express-validator library to valid user's input.
const { check } = require('express-validator');
// This syntax is used to directly extract these functions from employeeController.js.
const { getAllEmployee, getEmployeeById, createEmployee, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
const router = express.Router();

// router to call getAllEmployee method from employeeController.
router.get('/employees', getAllEmployee);

// router to call getEmployeeById method from employeeController.
router.get('/employees/:eid', getEmployeeById);
 
// router to call createEmployee method from employeeController.
// added express-validations to get all require informations based on employeeSchema.
router.post('/employees', [
    check('first_name', 'First should not be empty').not().isEmpty(),
    check('last_name', 'Last name should not be empty').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('position', 'Position should not be empty').not().isEmpty(),
    check('salary', 'Salary must be a number').isNumeric(),
    check('date_of_joining', 'Date of joining must be a valid date').isDate(),
    check('department', 'Department should not be empty').not().isEmpty()
], createEmployee);

// router to call updateEmployee method from employeeController.
// added express-validations to get all require updated informations based on employeeSchema.
router.put('/employees/:eid', [
    check('first_name', 'First name should not be empty').not().isEmpty(),
    check('last_name', 'Last name should not be empty').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('position', 'Position should not be empty').not().isEmpty(),
    check('salary', 'Salary must be a number').isNumeric(),
    check('date_of_joining', 'Date of joining must be a valid date').isDate(),
    check('department', 'Department should not be empty').not().isEmpty()
], updateEmployee);

// router to call deleteEmployee method from employeeController.
router.delete('/employees/:eid', deleteEmployee);

module.exports = router;

