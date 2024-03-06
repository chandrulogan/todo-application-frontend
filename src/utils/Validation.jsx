const validateTask = (task) => {
    const specialChars = /[!@#$%^&*(),.?":{}|<>]/g;
    return !specialChars.test(task);
};

const validateDescription = (task) => {
    const specialChars = /[!@#$%^&*(),.?":{}|<>]/g;
    return !specialChars.test(task);
};

const validateDeadlineDate = (deadlineDate) => {
    return !!deadlineDate;
};

export { validateTask, validateDeadlineDate, validateDescription };
