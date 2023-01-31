const express = require('express')
const { LoginUsers, AdminLogin, AuthenticationChecker, AllVotes, AddNewCandidate, CheckMontitorPerVote, VoterSelection, PollPositionPerVote, ValidateOTP } = require('../Middlewares/Authentication')
const router = express.Router()

router.post('/username', LoginUsers)
router.get('/gateway/authentication/authorization', AuthenticationChecker)
router.get('/votes/authentication/authorization', AllVotes)
router.post('/add/votes/authentication/authorization', AddNewCandidate)
router.post('/monitor/votes/authentication/authorization', CheckMontitorPerVote)
router.post('/pollposition/votes/authentication/authorization', PollPositionPerVote)
router.post('/poll/votes/authentication/authorization', VoterSelection)
// router.get('', '')
router.post('/otp', ValidateOTP)
router.post('/admin', AdminLogin)

module.exports = router