// @desc    Get goal
// @route   GET /api/goal
// @access  Private
const getGoal = (req, res) => {
    res.status(200).json({message: 'Get goals'})
}

// @desc    Set goal
// @route   POST /api/goal
// @access  Private
const setGoal = (req, res) => {
    res.status(200).json({message: 'Set goals'})
}

// @desc    Update goal
// @route   PUT /api/goals
// @access  Private
const  updateGoal = (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

// @desc    Delete goal
// @route   DELETE /api/goal
// @access  Private
const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}

module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal
}