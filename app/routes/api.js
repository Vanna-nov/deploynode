const express  = require('express');
const router   = express.Router();
const authController = require('../Controller/auth/authController');
// const students = require('../Controller/students/StudentController')
const PersonalInfoController = require('../Controller/PersonalInfoController/PersonalInfoController');
const ProjectsController = require('../Controller/ProjectsController/ProjectsController');
const middleware = require('../middleware/middleware');
const EducationController = require('../Controller/EducationController/EducationController');
const SkillController = require('../Controller/SkillController/SkillController');
const WorkExperienceController = require('../Controller/WorkExperienceController/WorkExperienceController');

// Open route
router.post('/register',authController.register);
router.post('/login',authController.login);

// protectedRoute
// router.get('/students',middleware, students.getStudents)
// router.post('/add-student',middleware, students.createStudent)
// router.post('/update-student/:id',middleware, students.updateStudent)
// router.delete('/delete-student/:id',middleware, students.deleteStudent)
// PersonalInfo
router.get('/get-personal-info',middleware, PersonalInfoController.getPersonalInfo)
router.post('/add-personal-info',middleware, PersonalInfoController.CreatePersonalInfo)
router.post('/update-personal-info/:id',middleware, PersonalInfoController.updatePersonalInfo)
router.delete('/delete-personal-info/:id',middleware, PersonalInfoController.deletePersonalInfo)

//projects
router.get('/get-projects',middleware, ProjectsController.getProjects)
router.post('/add-project',middleware, ProjectsController.CreateProjects)
router.post('/update-projects/:id',middleware, ProjectsController.updateProjects)
router.delete('/delete-projects/:id',middleware, ProjectsController.deleteProjects)
//education
router.post('/add-education',middleware, EducationController.CreateEducation)
router.get('/get-education',middleware, EducationController.getEducation)
router.post('/update-education/:id',middleware, EducationController.updateEducation)
router.delete('/delete-education/:id',middleware, EducationController.deleteEducation)

//skill
router.post('/add-skill',middleware, SkillController.CreateSkill)
router.get('/get-skill',middleware, SkillController.getSkill)
router.post('/update-skill/:id',middleware, SkillController.updateSkills)
router.delete('/delete-skill/:id',middleware, SkillController.deleteSkills)

//work-experience
router.post('/add-work-experience',middleware, WorkExperienceController.CreateWorkExperience)
router.get('/get-work-experience',middleware, WorkExperienceController.getWorkExperience)
router.post('/update-work-experience/:id',middleware, WorkExperienceController.updateWorkExperience)
router.delete('/delete-work-experience/:id',middleware, WorkExperienceController.deleteWorkExperience)

module.exports = router;
